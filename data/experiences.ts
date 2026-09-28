import type { ExperienceItem } from "@/types/experiences";

export const experiences: ExperienceItem[] = [
    {
        slug: "tvs-frontend-2023",
        title: "Software Engineer Intern (Frontend)",
        company: "Tinh Van Software",
        date: "Apr 2023 – Aug 2023",
        details: [
            "Developed responsive web components using **React.js**, **Node.js**, **TypeScript**, **Bootstrap**, and **Tailwind CSS** for a client-facing platform.",
            "Collaborated with backend engineers to integrate and test **RESTful APIs** using **Postman**.",
            "Participated in sprints, design reviews, and deployment planning using **Git**.",
            "Gained hands-on exposure to backend infrastructure involving **FastAPI** and **Uvicorn**.",
        ],
    },
    {
        slug: "tvs-fullstack-2024",
        title: "Software Engineer Intern (Full-Stack)",
        company: "Tinh Van Software",
        date: "Apr 2024 – Aug 2024",
        details: [
            "Designed and developed a production-ready **Retrieval-Augmented Generation (RAG)** web app with PDF ingestion and contextual AI chat capabilities.",
            "Implemented backend services in **Python** using **FastAPI**, **LangChain**, and **Google Gemini Pro** to support semantic search and response generation.",
            "Integrated **Redis** and **Celery** for asynchronous task queues, improving responsiveness and scalability.",
            "Built a responsive frontend using **React.js** and **Bootstrap** for file uploads, chat interaction, and displaying AI-generated insights.",
            "Deployed on a cloud VPS using **Docker**, **Nginx**, **HTTPS (SSL)**, and environment-managed API keys.",
            "Created **RESTful API** endpoints for document processing and chat flow, supporting up to 3MB PDF uploads.",
            "Performed data preprocessing using exploratory **data analysis (EDA)** and **KNN-based filtering**.",
        ],
    },
    {
        slug: "tvs-consulting-2026",
        title: "Software Engineer",
        company: "Tinh Van Consulting",
        date: "Apr 2026 – Sep 2026",
        details: [
            "Developed a Microsoft Teams-native HR AI Assistant MVP utilizing **Node.js**, **NestJS**, and **TypeScript** within a Modular Monolith Clean Architecture.",
            "Architected an intelligent HRM Connector bridging Microsoft Teams with core HRM systems for seamless data synchronization and administrative automation.",
            "Engineered end-to-end leave management workflows, utilizing **Prisma ORM** and **PostgreSQL** for multi-tenant database structuring and AI execution tracking.",
        ],
    },
];