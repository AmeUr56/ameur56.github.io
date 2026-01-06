export const siteConfig = {
  name: "Ameur Boughers",
  title: "AI Engineer & Backend Developer",
  description: "Portfolio website of Ameur Boughers – AI Engineer & Backend Developer",
  accentColor: "#1d4ed8",
  social: {
    email: "ameurboughers@gmail.com",
    linkedin: "https://www.linkedin.com/in/ameurb-25a155247",
    twitter: "",
    github: "https://github.com/ameur56",
  },
  aboutMe:
    "AI Engineer and Backend Developer based in Algeria with expertise in machine learning, deep learning, and AI model deployment. Skilled in building AI solutions for computer vision, NLP, and time series analysis, and experienced in creating scalable backend systems using Flask and FastAPI. Passionate about automation, AI-driven solutions, and delivering high-quality software systems for startups and enterprises.",
  skills: [
    // Programming & Core
    "Python", "Java", "C", "SQL", "Matlab",
    // AI & ML Tools
    "Scikit-learn", "TensorFlow", "Keras", "LangChain", "HuggingFace",
    // Backend & Web Frameworks
    "FastAPI", "Flask",
    // Databases
    "SQLite", "NeonDB", "Supabase",
    // Automation & Orchestration
    "Docker", "n8n", "Prefect", "Temporal",
    // Software Engineering Tools
    "Git & GitHub", "CLI & Shell Development",
  ],
  projects: [
    {
      name: "Smart Offer Finder — AI Front Office Assistant",
      description:
        "Built an AI assistant to answer Front Office queries by retrieving offers and procedures from unstructured PDF documents. Designed an LLM-based ETL + RAG pipeline and deployed it as a FastAPI service within 48 hours.",
      link: "",
      skills: ["Python", "FastAPI", "LangChain", "RAG", "DeepSeek LLM API", "OCR", "Regex"],
    },
    {
      name: "AI-Powered Suspicious Activity Alert System",
      description:
        "Developed a real-time camera monitoring system to detect loitering, crowd formation, aggressive motion, and watchlist faces using object detection, pose estimation, and face embeddings.",
      link: "",
      skills: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "Flask"],
    }
    ,{
      name: "Enterprise Showroom Management System",
      description:
        "Designed and built a production-grade showroom management system covering users, inventory, sales, accounting, and notifications with strong data integrity and scalability.",
      link: "",
      skills: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Redis"],
    },
    
  ],
  experience: [
    {
      company: "Novaq",
      title: "Co-Founder & Lead AI & Backend Consultant",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Provide AI & ML consulting for CV, NLP, and time series solutions",
        "Design and deploy scalable backend systems with FastAPI & Flask",
        "Lead end-to-end projects including requirements, implementation, and deployment",
      ],
    },
    {
      company: "Satield",
      title: "Co-Founder & CEO | AI & Backend Engineer",
      dateRange: "Nov 2025 - Present",
      bullets: [
        "Built AI pipelines for satellite imagery-based precision agriculture",
        "Developed backend services for farm monitoring",
        "Focused on affordable, localized precision agriculture for Algerian farmers and cooperatives",
      ],
    },
    {
      company: "Drufiy",
      title: "Co-Founder & CTO",
      dateRange: "Apr 2025 - June 2025",
      bullets: [
        "Architected end-to-end AI platform and autonomous agent workflows beyond LangChain",
        "Mentored engineering team, fostering innovation and technical excellence",
        "Defined ethical AI practices and enforced security/compliance standards",
        "Led product-market fit strategy with user-driven iteration",
      ],
    },
    {
      company: "Drufiy",
      title: "AI & Backend Developer",
      dateRange: "Feb 2025 - June 2025",
      bullets: [
        "Developed backend infrastructure for waitlist website and user workflows",
        "Built cross-platform SystemRepairAgent using LangChain and custom LLM for automated Windows troubleshooting",
        "Built intelligent Rasa agent to resolve system issues via natural language commands",
        "Created large-scale error dataset and fine-tuned custom LLM for AI troubleshooting",
      ],
    },
    {
      company: "Venexus Global Capital",
      title: "Data Scientist",
      dateRange: "Jan 2025 - June 2025",
      bullets: [
        "Built ML cross-correlation models to uncover patterns in financial time series",
        "Applied SAR-based forecasting with satellite imagery for commodities and macro predictions",
        "Researched entropy-based financial models with custom Python implementations",
      ],
    },
    {
      company: "Naftal spa",
      title: "Software Engineer",
      dateRange: "Feb 2025 - May 2025",
      bullets: [
        "Developed attendance and absence management systems with secure backend APIs",
        "Took a leadership role within the intern group, organizing team meetings, guiding peers.",
        "Automated reporting pipelines.",
      ],
    },
    {
      company: "Directorate of Tax",
      title: "Data Entry Specialist",
      dateRange: "Oct 2024 - Jan 2025",
      bullets: [
        "Digitized and structured large volumes of handwritten tax documents",
        "Automated document handling workflows, improving efficiency",
      ],
    },
  ],
  education: [
    {
      school: "Self-Learning & Online Courses",
      degree: "AI, Backend, and Full Stack Development",
      dateRange: "2020 - Present",
      achievements: [
        "I am gaining a deep understanding of key concepts in software development, computer systems, databases, and networking.",
        "This program equips me with both theoretical knowledge and practical skills, preparing me for roles in software engineering, system administration, and IT project management.",
      ],
    }m
  ],
};
