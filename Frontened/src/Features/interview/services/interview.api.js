import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    const formData = new FormData();
    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);
    formData.append("resume", resumeFile); 

    const response = await api.post('/api/interview/dashboard', formData, {  // ✅ added /dashboard
        headers: {
            'Content-Type': 'multipart/form-data', 
        }
    });
    return response.data; 
}

export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/dashboard/report/${interviewId}`)  // ✅ added /dashboard
    return response.data
}

export const getAllInterviewReports = async () => {
    const response = await api.get("/api/interview/dashboard")  // ✅ added /dashboard
    return response.data
}

export const generateResumePdf = async ({ interviewReportId }) => {
    const response = await api.post(`/api/interview/dashboard/resume/pdf/${interviewReportId}`, null, {
        responseType: "blob"  // ✅ added /dashboard
    })
    return response.data
}