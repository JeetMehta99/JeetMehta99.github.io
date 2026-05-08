export const portfolio = {
  basics: {
    name: "Jeet Mehta",
    role: "Software Engineer",
    phone: "(312) 610-2669",
    email: "mehta.jp99@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeet-mehta99",
    github: "https://github.com/JeetMehta99",
    resume: "https://drive.google.com/file/d/1Z9QjWij9xWVamTaPXX99Apz1OLvde2uc/view?usp=sharing",
    headline:
      "Full-stack Software Engineer with 3+ years of experience building high-performance backend systems and intuitive front-end apps across large-scale platforms.",
    summary:
      "Passionate about low-latency engineering and solving real-world problems in fintech that demand speed, precision, and reliability."
  },
  skills: {
    technicalExpertise: [
      "JavaScript",
      "Python",
      "Java 8/11",
      "SQL",
      "React.js",
      "Next.js",
      "Spring Boot",
      "Flask",
      "Spark",
      "Hadoop",
      "gRPC"
    ],
    aiAgentic: ["Google GenAI SDK", "GitHub Copilot", "Cursor", "Claude"],
    apiWeb: ["REST", "SOAP", "Swagger", "Postman", "SoapUI"],
    cloudInfra: ["AWS (EC2, S3, Lambda, EMR, VPC)", "GCP", "Amazon MSK"],
    testing: ["JUnit", "Jest", "Mockito", "PyTest"],
    databases: [
      "MongoDB",
      "Oracle",
      "Redis",
      "Snowflake",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "PostGIS"
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "Kafka",
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Git",
      "Bitbucket",
      "Jenkins",
      "Azure DevOps"
    ],
    otherTools: ["Jira", "Gradle", "Maven", "Kubernetes Lens", "dbt", "Power BI DAX"]
  },
  experience: [
    {
      company: "Wells Fargo",
      location: "Charlotte, NC",
      title: "Software Engineer III - Full Stack",
      start: "2025-04",
      end: "Present",
      logo: "./assets/logos/wells-fargo.svg",
      stack: ["JavaScript", "Python", "React", "Next.js", "FastAPI", "PyTest", "Jest"],
      highlights: [
        "Designed and deployed a full-stack agentic AI chatbot using Google GenAI SDK and custom hooks to enable natural-language querying of validation workflows, model metrics, and operational insights for 30+ internal users across 3+ business units.",
        "Migrated an internal SSR-based application from Next.js to React, improving responsiveness by 55% and reducing page load times (9000ms to 762ms, 1600ms to 300ms) across 5+ core dashboards.",
        "Refactored backend-dependent logic into client-side architecture with JWT session handling, reducing backend load by 40% and accelerating release cycles by ~30%.",
        "Built Python-based backend health checks using gRPC, Kafka, and REST APIs, enabling real-time validation of TEE availability across multiple services and reducing false test failures by ~25%.",
        "Designed and developed a model serving engine (FastAPI + React) supporting multi-model deployment and lifecycle management, improving model availability from session-based to persistent (100% uptime during runs).",
        "Improved scalability and deployment reliability by containerizing services and deploying via Harness to OpenShift (OCP), reducing deployment failures by ~20% and improving rollout consistency.",
        "Delivered high-performance dashboards used by 4+ business units and 100+ internal users, reducing workflow time by up to 40%."
      ]
    },
    {
      company: "American Tire Distributors",
      location: "Charlotte, NC",
      title: "Software Engineer - Backend",
      start: "2023-07",
      end: "2025-04",
      logo: "./assets/logos/atd.png",
      stack: [
        "Java",
        "Python",
        "Spring Boot",
        "Flask",
        "PyTest",
        "MongoDB",
        "Oracle",
        "Redis",
        "SoapUI"
      ],
      highlights: [
        "Built an automated return order API, reducing manual handling by 40% and saving ~$180K/year in operational costs.",
        "Cut API latency from 22000ms to 700ms through cluster whitelisting and network optimization.",
        "Engineered microservices processing 45M+ monthly transactions, supporting $100M+ in monthly B2B order value.",
        "Boosted system throughput by 25% with a parallel batch aggregator service and reduced incident response by 50% using Grafana/Prometheus monitoring."
      ]
    },
    {
      company: "CHS Inc",
      location: "Minneapolis, MN",
      title: "Data Engineer - Intern",
      start: "2022-06",
      end: "2022-08",
      logo: "./assets/logos/chs.svg",
      stack: ["SQL", "Snowflake", "AWS", "Azure DevOps", "dbt", "Power BI"],
      highlights: [
        "Gathered unstructured data from multiple sources and automated ELT in Snowflake with dbt and wrote macros for high reusability, saving 20+ hours/month on manual processes.",
        "Generated Power BI dashboards, slashing manual reporting time by 30% and enabling strategic, data-driven decisions."
      ]
    },
    {
      company: "SNCO",
      location: "Mumbai, India",
      title: "Full Stack Web Developer",
      start: "2020-10",
      end: "2021-08",
      logo: null,
      stack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
      highlights: [
        "Developed and maintained an accounting platform for 1k+ small businesses, automating manual tasks and saving users ~10 hours/month.",
        "Designed RESTful APIs integrating third-party services like payment gateways and tax calculators, reducing manual tasks by 40%.",
        "Cut server response time by 30% through query optimization and caching, reducing user drop-off and enhancing UX."
      ]
    }
  ],
  education: [
    {
      school: "University of Illinois at Chicago (UIC)",
      location: "Chicago, IL",
      degree: "Master of Science, Computer Science",
      end: "2023-05"
    },
    {
      school: "University of Mumbai, K.J. Somaiya College of Engineering",
      location: "Mumbai, India",
      degree: "Bachelor of Technology, Information Technology",
      end: "2021-05"
    }
  ],
  projects: [
    {
      name: "Bike Lane",
      type: "Web App",
      year: "2022",
      href: "https://cool-conkies-80a0da.netlify.app/#/",
      repo: "https://github.com/uic-hall-of-fame/cs484-f22-BikeSpy",
      image: "./assets/images/projects/bike-lane.svg",
      tags: ["React", "Supabase", "Mapbox", "PostGIS", "TypeScript"],
      oneLiner: "Report obstructions in bike lanes with spatial search and map tools.",
      details:
        "Serverless app for cyclists to report cars, potholes, and obstructions. PostGIS-backed spatial queries and Mapbox polygon tools for regional filtering."
    },
    {
      name: "Streaming Data Pipeline (Akka, Kafka, Spark)",
      type: "Data Platform",
      year: "2022",
      href: "https://github.com/JeetMehta99/CS441-Project",
      repo: "https://github.com/JeetMehta99/CS441-Project",
      image: "./assets/images/projects/streaming-pipeline.svg",
      tags: ["Scala", "Akka", "Kafka", "Spark", "AWS"],
      oneLiner: "Real-time ETL over 10GB+ logs with streaming visualization.",
      details:
        "Akka for monitoring, Kafka for low-latency messaging, Spark streaming on AWS, and a d3.js visualization layer."
    },
    {
      name: "gRPC Client + REST + AWS Lambda",
      type: "Cloud Systems",
      year: "2022",
      href: "https://github.com/JeetMehta99/CS441--Cloud-Computing-Proj3",
      repo: "https://github.com/JeetMehta99/CS441--Cloud-Computing-Proj3",
      image: "./assets/images/projects/grpc-cloud.svg",
      tags: ["gRPC", "Lambda", "API Gateway", "Scala", "Python"],
      oneLiner: "gRPC client invoking Lambda workloads on large datasets.",
      details:
        "Protocol buffers reduced overhead; improved response latency by using gRPC for client-to-service calls."
    }
  ]
};
