const resume =`
Name: Prabhujit Singh

Education: B.Tech (Double Major) in Computer Science & Engineering and Mining Engineering, IIT (ISM) Dhanbad (CGPA: 8.16)

Technical Skills: * Languages: JavaScript (ES6+), C++, Python, SQL

Frontend: React.js, Redux, Context API, Tailwind CSS, HTML5, SCSS

Backend: Node.js, Express.js, Socket.io, JWT Authentication

Databases: MongoDB (Aggregation Pipelines, Indexing), PostgreSQL

Tools: Git, Docker, Postman, Vite

Key Projects:

Protocol (Real-Time Chat): Built a MERN stack app using Socket.io. Optimized message retrieval with MongoDB compound indexes, reducing query latency by 35%. Implemented JWT-based protected routes.

StayInn (Hotel Booking): Developed a scalable schema for 500+ properties. Built Role-Based Access Control (RBAC) for admins and vendors. Used MongoDB Aggregation for complex search filters (sub-200ms response).

UNMASK (AI Cybersecurity): Integrated OpenAI API to detect phishing URLs with 95% accuracy. Implemented rate limiting and input sanitization to prevent XSS attacks.`

const selfDescription =`"I am a highly motivated developer currently pursuing a double major at IIT (ISM) Dhanbad. Over the last 1.5 years, I have transitioned from learning basic web syntax to architecting full-stack applications with real-time capabilities. My strongest asset is my problem-solving speed, backed by a LeetCode rating of 1700+. I enjoy the challenge of optimizing database queries and frontend rendering. However, I am honest about my current limitations: since most of my work has been on personal and club projects, I haven't yet implemented a full CI/CD pipeline or a comprehensive suite of unit tests in a production environment. I am looking for a role that pushes my architectural thinking and allows me to learn enterprise-grade testing standards under senior mentorship."`

const jobDescription=`
Role: Senior Frontend Engineer (React focus)
Company: TechFlow Solutions

About the Role: We are looking for a React expert to lead the development of our dashboard. You will be responsible for state management architecture and performance optimization.

Requirements:

Experience: 2-4 years of professional experience with React.js.

Core Skills: Deep understanding of Hooks, Virtual DOM, and Component Lifecycle.

State Management: Proven experience with Redux Toolkit or Advanced Context API patterns.

Performance: Ability to optimize web apps for "Core Web Vitals" (LCP, FID).

Testing: Mandatory experience with Unit Testing using Jest and React Testing Library.

Soft Skills: Experience mentoring junior developers and participating in code reviews.`


module.exports ={
    resume,selfDescription,jobDescription
}