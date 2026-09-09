export interface TimelineEntry {
  year: string;
  organization: string;
  role: string;
  description: string;
  bullets: string[];
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const careerTimeline: TimelineEntry[] = [
  {
    year: "2007",
    organization: "L&T Infotech",
    role: ".NET Developer / Analyst / Team Lead",
    description:
      "Built enterprise applications from requirements through production delivery.",
    bullets: [
      "Delivered web applications, APIs and backend services for enterprise clients.",
      "Optimized application performance and supported client-facing delivery.",
      "Progressed from developer to team lead, training and mentoring team members.",
    ],
  },
  {
    year: "2012",
    organization: "Phillips 66",
    role: "Technical Lead",
    description:
      "Led end-to-end application initiatives across development and production support.",
    bullets: [
      "Managed application initiatives from design through deployment.",
      "Led development and production-support teams.",
      "Implemented automation and reusable components, reducing reporting errors by 80%.",
    ],
  },
  {
    year: "2014",
    organization: "Chevron",
    role: "Web Operations Analyst",
    description:
      "Bridged development and operations with API delivery and performance improvements.",
    bullets: [
      "Developed REST APIs and implemented application-performance improvements.",
      "Reduced process failures by 80% through risk-analysis improvements.",
      "Collaborated with developers, architects and customers.",
    ],
  },
  {
    year: "2015",
    organization: "Freddie Mac",
    role: "IT Operations Manager / SRE",
    description:
      "Managed enterprise production operations and a global engineering team in the USA.",
    bullets: [
      "Managed 40+ enterprise applications and a 20-member engineering team.",
      "Led Level 3 production support, incident management and resiliency.",
      "Improved data accuracy by 80% and reduced downtime by 50%.",
    ],
  },
  {
    year: "2018",
    organization: "The TJX Companies",
    role: "Web Operations Manager",
    description:
      "Led enterprise e-commerce production operations and digital transformation onsite in Boston.",
    bullets: [
      "Managed production support and development teams for enterprise e-commerce.",
      "Led major incident, SWAT and problem-management activities.",
      "Reduced response time by 50% through automation and proactive monitoring.",
    ],
  },
  {
    year: "2023",
    organization: "G10X",
    role: "Service Delivery Manager",
    description:
      "Built and scaled a global 24×7 engineering support organization.",
    bullets: [
      "Led knowledge transition and service onboarding from incumbent vendors.",
      "Established operational governance, KPIs and proactive SRE monitoring.",
      "Directed automation and daily website validation across global operations.",
    ],
  },
  {
    year: "2025",
    organization: "G10X",
    role: "Delivery Manager / Technical Program Manager",
    description:
      "Leading concurrent engineering workstreams and delivery governance.",
    bullets: [
      "Lead multiple concurrent engineering workstreams with phased deployment.",
      "Establish governance through RACI, RAID, milestone and dependency tracking.",
      "Coordinate DEV → QA → UAT → PROD and manage release risks.",
    ],
  },
  {
    year: "Present",
    organization: "AI-Enabled Delivery & Transformation",
    role: "Exploring AI-Assisted Ways of Working",
    description:
      "Applying delivery leadership experience to explore AI-enabled transformation.",
    bullets: [
      "Exploring Generative AI and AI-assisted development for delivery transformation.",
      "Investigating intelligent delivery analytics and agentic operational workflows.",
      "Positioning AI as augmentation of engineering and management judgment.",
    ],
  },
];

export const professionalExperience: ExperienceEntry[] = [
  {
    id: "g10x-delivery-manager",
    organization: "G10X",
    role: "Delivery Manager / Technical Program Manager",
    period: "Nov 2023 – Present",
    bullets: [
      "Lead multiple concurrent engineering workstreams.",
      "Drive planning, technical refinement, UAT, phased deployment and production stabilization.",
      "Establish governance through RACI, RAID, milestone and dependency tracking.",
      "Coordinate DEV → QA → UAT → PROD.",
      "Manage third-party/API dependencies and release risks.",
      "Lead BAU production support and modernization initiatives.",
    ],
  },
  {
    id: "g10x-service-delivery",
    organization: "G10X",
    role: "Service Delivery Manager",
    period: "Nov 2023 – Aug 2025",
    bullets: [
      "Built and scaled a global 24×7 engineering support organization.",
      "Led knowledge transition and service onboarding from incumbent vendors.",
      "Established operational governance and KPIs.",
      "Directed automation and daily website validation.",
      "Established proactive monitoring using SRE practices.",
    ],
  },
  {
    id: "tjx",
    organization: "THE TJX COMPANIES",
    role: "Web Operations Manager",
    period: "Oct 2018 – Aug 2023",
    location: "Boston, USA — Onsite",
    bullets: [
      "Led enterprise e-commerce production operations and digital transformation.",
      "Managed production support and development teams.",
      "Led major incident, SWAT and problem-management activities.",
      "Reduced response time by 50% through automation.",
      "Implemented proactive monitoring using AppDynamics and Splunk.",
    ],
  },
  {
    id: "freddie-mac",
    organization: "FREDDIE MAC",
    role: "IT Operations Manager / SRE",
    period: "Sep 2015 – Oct 2018",
    location: "USA — Onsite",
    bullets: [
      "Managed 40+ enterprise applications.",
      "Led Level 3 production support, incident management and resiliency.",
      "Improved data accuracy by 80%.",
      "Reduced downtime by 50%.",
      "Managed a 20-member engineering team.",
    ],
  },
  {
    id: "chevron",
    organization: "CHEVRON",
    role: "Web Operations Analyst",
    period: "Mar 2014 – Sep 2015",
    bullets: [
      "Developed REST APIs.",
      "Reduced process failures by 80% through risk-analysis improvements.",
      "Implemented application-performance improvements.",
      "Worked with developers, architects and customers.",
    ],
  },
  {
    id: "phillips-66",
    organization: "PHILLIPS 66",
    role: "Technical Lead",
    period: "Sep 2012 – Feb 2014",
    bullets: [
      "Managed end-to-end application initiatives.",
      "Led development and production-support teams.",
      "Implemented automation and reusable components.",
      "Reduced reporting errors by 80%.",
    ],
  },
  {
    id: "lt-infotech",
    organization: "L&T INFOTECH",
    role: ".NET Developer / Analyst / Team Lead",
    period: "Oct 2007 – Sep 2012",
    bullets: [
      "Delivered enterprise applications from requirements through production.",
      "Developed web applications, APIs and backend services.",
      "Optimized application performance.",
      "Trained team members and supported client-facing delivery.",
    ],
  },
];
