
# 🎯 HIRESENSE

> An intelligent, full-stack interview preparation platform designed to bridge the gap between candidate skills and job requirements using AI.

## 💡 About The Project

HIRESENSE is an AI-driven application that analyzes a candidate's resume against specific job descriptions to generate highly tailored interview preparation materials. Instead of generic questions, candidates receive a realistic match score, role-specific technical and behavioral questions, and a customized multi-day preparation plan to address specific skill gaps.

This project demonstrates scalable full-stack architecture, secure authentication practices, and seamless third-party AI integration.

## ✨ Core Features

* **Intelligent Match Scoring:** Evaluates candidate profiles against job descriptions to provide a data-driven alignment score.
* **Dynamic Question Generation:** Uses AI to craft targeted technical and behavioral questions, complete with interviewer intent and ideal answer frameworks.
* **Actionable Skill Gap Analysis:** Identifies missing competencies and assigns severity levels to help users prioritize their learning.
* **Robust Security & Authentication:** * Implements secure user login and registration using **JSON Web Tokens (JWT)** and **bcrypt** password hashing.
  * Protects session data using **httpOnly cookies** to prevent XSS attacks.
  * Features a custom token-blacklisting architecture for secure, verifiable user logouts.
* **Protected Routing:** Utilizes React Router v6 to enforce private dashboard access exclusively for authenticated users.

## 🛠️ Built With

**Frontend:**
* React.js (via Vite)
* React Router DOM (Layouts & Protected Routes)
* SCSS / Dart Sass

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose
* JWT & Cookie Parser
* Google Gemini AI API
