export const profile = {
  name: "MOHAMED THAHA",
  shortName: "Mohamed Thaha",
  headline: [
    "SENIOR TECHNOLOGY DELIVERY LEADER",
    "TECHNICAL PROGRAM MANAGER",
    "ENGINEERING & AI TRANSFORMATION",
  ],
  primaryStatement:
    "18+ years building, leading and transforming enterprise technology delivery across India and the United States.",
  supportingParagraph:
    "Technology delivery leader with experience spanning enterprise software engineering, technical program management, digital transformation, production engineering, SRE and global service delivery.",
  email: "thaha.noor@yahoo.in",
  phone: "+91-9962418900",
  linkedinUrl: "#",
  resumeUrl: "/resume/Mohamed_Thaha_Master_Executive_Resume.pdf",
  profileUrl: "#hero",
  location: "India & United States",
  footerTagline: [
    "Technology Delivery Leader",
    "Technical Program Manager",
    "Engineering & AI Transformation",
  ],
  seo: {
    title: "Mohamed Thaha | Technology Delivery Leader | Technical Program Manager",
    description:
      "Professional profile of Mohamed Thaha, a technology delivery leader and technical program manager with 18+ years of experience across enterprise engineering, digital transformation, production operations, SRE and AI-enabled delivery.",
    siteName: "Mohamed Thaha",
  },
} as const;

export const navigation = [
  { label: "Journey", href: "#journey" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "AI & Transformation", href: "#ai-transformation" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroPathway = [
  "ENGINEERING",
  "TECHNICAL LEADERSHIP",
  "OPERATIONS / SRE",
  "SERVICE DELIVERY",
  "PROGRAM MANAGEMENT",
  "AI TRANSFORMATION",
] as const;

export const impactMetrics = [
  { value: "18+", label: "Years of Experience" },
  { value: "40+", label: "Enterprise Applications" },
  { value: "20+", label: "Engineers Managed" },
  { value: "24×7", label: "Global Operations" },
  { value: "50%", label: "Response-Time Reduction" },
  { value: "50%", label: "Downtime Reduction" },
  { value: "80%", label: "Data Accuracy Improvement" },
  { value: "80%", label: "Process / Reporting Improvement" },
] as const;

export const leadershipCapabilities = [
  {
    title: "TECHNOLOGY DELIVERY",
    icon: "delivery" as const,
    items: [
      "Program governance",
      "Agile delivery",
      "UAT",
      "Release management",
      "RAID",
      "Dependencies",
    ],
  },
  {
    title: "ENGINEERING",
    icon: "engineering" as const,
    items: [
      "Software engineering",
      "Technical leadership",
      "APIs",
      "Microservices",
      "Modernization",
      "Technical refinement",
    ],
  },
  {
    title: "OPERATIONS & SRE",
    icon: "operations" as const,
    items: [
      "Production engineering",
      "SRE",
      "Observability",
      "Incident management",
      "Problem management",
      "Resilience",
    ],
  },
  {
    title: "LEADERSHIP",
    icon: "leadership" as const,
    items: [
      "Global teams",
      "Stakeholder management",
      "Executive communication",
      "Vendor management",
      "Cross-functional leadership",
      "Mentoring",
    ],
  },
  {
    title: "AI TRANSFORMATION",
    icon: "ai" as const,
    items: [
      "Generative AI",
      "AI-assisted development",
      "Agentic AI concepts",
      "Intelligent delivery analytics",
      "AI-enabled automation",
      "AI-assisted decision support",
    ],
  },
] as const;

export const aiTransformation = {
  intro:
    "Currently exploring how Generative AI, AI-assisted development and agentic workflows can transform technology delivery and operations.",
  principle:
    "AI augments people. It does not replace engineering or management judgment.",
  concepts: [
    {
      title: "AI-ENABLED DELIVERY COMMAND CENTRE",
      inputs: [
        "Jira",
        "Confluence",
        "Delivery Data",
        "Operational Data",
        "Incidents",
        "Releases",
      ],
      outputs: [
        "Project Health",
        "Risk Detection",
        "Dependencies",
        "Predictability",
        "Quality Trends",
        "Executive Insights",
      ],
      description:
        "Exploring a shift from manually collected project status toward data-driven and AI-assisted delivery decision support.",
    },
    {
      title: "AI / SRE OPERATING MODEL",
      flow: [
        "OBSERVE",
        "DETECT",
        "INVESTIGATE",
        "EXPLAIN",
        "RECOMMEND",
        "ACT",
        "LEARN",
      ],
      description:
        "Exploring how agentic AI could augment traditional production support through alert correlation, incident investigation, knowledge generation and proactive operational decision support.",
    },
  ],
} as const;

export const technologyLandscape = [
  {
    group: "AI / GenAI",
    items: [
      "Generative AI",
      "AI-assisted development",
      "Prompt Engineering",
      "Agentic AI Concepts",
      "Cursor",
    ],
  },
  {
    group: "Delivery",
    items: [
      "Jira",
      "Confluence",
      "ServiceNow",
      "Agile",
      "Scrum",
      "SAFe",
    ],
  },
  {
    group: "Observability",
    items: ["AppDynamics", "Dynatrace", "Splunk", "ELK", "Zabbix"],
  },
  {
    group: "Application",
    items: [
      "Java",
      "C#",
      ".NET",
      "REST APIs",
      "Microservices",
      "OutSystems",
      "SFCC",
      "React.js",
      "Next.js",
      "GraphQL",
    ],
  },
  {
    group: "Cloud / DevOps",
    items: ["AWS", "Azure", "Jenkins", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    group: "Databases",
    items: ["SQL Server", "Oracle", "Sybase", "DB2"],
  },
] as const;
