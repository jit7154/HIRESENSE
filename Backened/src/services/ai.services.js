const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")
const puppeteer = require("puppeteer")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job description"),
    
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question to be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take")
    })).min(3).describe("At least 3 technical questions with their intention and suggested answers"),
    
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question to be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take")
    })).min(3).describe("At least 3 behavioral questions with their intention and suggested answers"),
    
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).describe("How critical this skill gap is for the role")
    })).describe("List of skill gaps in the candidate's profile"),
    
    preparationPlan: z.array(z.object({
        day: z.number().describe("Day number starting from 1"),
        focus: z.string().describe("Main focus area for this day"),
        tasks: z.array(z.string()).describe("List of specific tasks to complete on this day")
    })).min(3).describe("At least a 3-day preparation plan"),
    
    title: z.string().describe("The job title extracted from the job description"),
})


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const prompt = `You are an expert technical recruiter and senior engineer.

Analyze the candidate's profile against the job description and generate a detailed interview report.

Return ONLY a valid JSON object (not an array) with this exact structure:
{
  "matchScore": <number 0-100>,
  "title": "<job title from the job description>",
  "technicalQuestions": [
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" },
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" },
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" }
  ],
  "behavioralQuestions": [
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" },
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" },
    { "question": "<question>", "intention": "<why asked>", "answer": "<how to answer>" }
  ],
  "skillGaps": [
    { "skill": "<skill name>", "severity": "low" | "medium" | "high" }
  ],
  "preparationPlan": [
    { "day": 1, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] },
    { "day": 2, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] },
    { "day": 3, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] },
    { "day": 4, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] },
    { "day": 5, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] },
    { "day": 6, "focus": "<focus area>", "tasks": ["<task 1>", "<task 2>"] }
  ]
}

STRICT RULES:
- Output ONLY the JSON object, no markdown, no backticks, no explanation
- technicalQuestions must have at least 3 items
- behavioralQuestions must have at least 3 items
- preparationPlan must have at least 3 days
- severity must be exactly "low", "medium", or "high"

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}`

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                // ❌ Removed responseSchema — it confuses gemini-1.5-flash
            }
        })

        console.log("Raw AI response:", response.text)

        // Strip markdown fences if model adds them anyway
        const cleaned = response.text
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/```\s*$/i, "")
            .trim()

        const parsed = JSON.parse(cleaned)

        // Validate with Zod
        const reportData = interviewReportSchema.parse(parsed)
        return reportData

    } catch (err) {
        console.error("Error generating interview report:", err)
        throw err
    }
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {
    const prompt = `You are an expert resume writer.

Generate a professional, ATS-friendly resume in HTML format tailored to the job description.

Return ONLY a valid JSON object with this exact structure:
{
  "html": "<complete self-contained HTML document as a string>"
}

RULES for the HTML:
- Include <html>, <head>, <style>, <body> tags — fully self-contained
- Use only inline CSS or a <style> block, no external stylesheets
- Clean, professional design, 1-2 pages on A4
- ATS-friendly structure
- Do NOT sound AI-generated
- Highlight skills relevant to the job description

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}`

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                
            }
        })

        const cleaned = response.text
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/```\s*$/i, "")
            .trim()

        const { html } = JSON.parse(cleaned)
        const pdfBuffer = await generatePdfFromHtml(html)
        return pdfBuffer

    } catch (err) {
        console.error("Error generating resume PDF:", err)
        throw err
    }
}

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]  // ✅ needed in most server environments
    })
    const page = await browser.newPage()
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4",
        margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        },
        printBackground: true  // ✅ preserves background colors/styles
    })

    await browser.close()
    return pdfBuffer
}



module.exports = { generateInterviewReport, generateResumePdf }