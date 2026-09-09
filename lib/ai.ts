export type AIConceptId = "delivery-command-centre" | "sre-agent-loop";

export interface AIConcept {
  id: AIConceptId;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface DeliveryInput {
  id: string;
  label: string;
  outputIds: string[];
  insight: {
    aiCouldIdentify: string[];
    potentialDecisionSupport: string;
  };
}

export interface DeliveryOutput {
  id: string;
  label: string;
}

export interface AgentStage {
  id: string;
  label: string;
  purpose: string;
  inputs: string[];
  potentialAiAssistance: string;
  humanRole: string;
}

export interface IncidentStep {
  stage: string;
  message: string;
}

export interface AIPrinciple {
  number: number;
  title: string;
  description: string;
}

export interface AIExploration {
  title: string;
  description: string;
  tags: string[];
}

export interface DeliveryInsightSample {
  sprintCompletion: string;
  uatDefects: string;
  openDependencies: string;
  releaseDate: string;
  blockedItems: string;
}

export interface DeliveryInsightResult {
  health: "Healthy" | "Watch" | "At Risk";
  keySignals: string[];
  recommendedAction: string;
}

export const aiLabHero = {
  title: "AI Transformation Lab",
  subheading:
    "Exploring how AI can augment technology delivery, engineering operations and decision-making.",
  supportingText:
    "Moving beyond AI as a coding assistant — exploring AI as an intelligent layer across delivery governance, engineering operations and production support.",
  positioning:
    "Exploring how Generative AI, AI-assisted development and agentic workflows can transform technology delivery and operations.",
  principle: {
    line1: "AI augments people.",
    line2: "It does not replace engineering or management judgment.",
  },
} as const;

export const aiConcepts: AIConcept[] = [
  {
    id: "delivery-command-centre",
    label: "AI Delivery Command Centre",
    title: "AI-Enabled Delivery Command Centre",
    description:
      "Exploring a shift from manually collected project status toward data-driven and AI-assisted delivery decision support.",
  },
  {
    id: "sre-agent-loop",
    label: "AI / SRE Agent Loop",
    title: "AI / SRE Agent Loop",
    subtitle:
      "Exploring how agentic AI could augment traditional production support.",
    description:
      "Exploring how agentic AI could augment traditional production support through alert correlation, incident investigation, knowledge generation and proactive operational decision support.",
  },
];

export const deliveryOutputs: DeliveryOutput[] = [
  { id: "project-health", label: "PROJECT HEALTH" },
  { id: "risk-signals", label: "RISK SIGNALS" },
  { id: "dependency-insights", label: "DEPENDENCY INSIGHTS" },
  { id: "delivery-predictability", label: "DELIVERY PREDICTABILITY" },
  { id: "quality-trends", label: "QUALITY TRENDS" },
  { id: "executive-insights", label: "EXECUTIVE INSIGHTS" },
];

export const deliveryInputs: DeliveryInput[] = [
  {
    id: "jira",
    label: "Jira",
    outputIds: [
      "project-health",
      "delivery-predictability",
      "risk-signals",
    ],
    insight: {
      aiCouldIdentify: [
        "Delivery trend",
        "Unfinished commitments",
        "Sprint volatility",
        "Emerging risk",
      ],
      potentialDecisionSupport:
        "Flag workstreams where delivery commitments repeatedly exceed actual completion.",
    },
  },
  {
    id: "confluence",
    label: "Confluence",
    outputIds: ["project-health", "executive-insights", "risk-signals"],
    insight: {
      aiCouldIdentify: [
        "Documentation gaps",
        "Decision traceability",
        "Stakeholder alignment signals",
        "Knowledge freshness",
      ],
      potentialDecisionSupport:
        "Surface areas where delivery documentation may not reflect current project reality.",
    },
  },
  {
    id: "sprint-data",
    label: "Sprint Data",
    outputIds: [
      "delivery-predictability",
      "project-health",
      "risk-signals",
    ],
    insight: {
      aiCouldIdentify: [
        "Sprint velocity trends",
        "Commitment vs completion",
        "Scope volatility",
        "Capacity signals",
      ],
      potentialDecisionSupport:
        "Highlight sprints where scope changes may affect release predictability.",
    },
  },
  {
    id: "milestones",
    label: "Milestones",
    outputIds: [
      "project-health",
      "delivery-predictability",
      "executive-insights",
    ],
    insight: {
      aiCouldIdentify: [
        "Milestone drift",
        "Critical path pressure",
        "Phase completion gaps",
        "Schedule confidence",
      ],
      potentialDecisionSupport:
        "Identify milestones at risk based on current delivery trajectory.",
    },
  },
  {
    id: "defects",
    label: "Defects",
    outputIds: ["quality-trends", "risk-signals", "executive-insights"],
    insight: {
      aiCouldIdentify: [
        "Quality trend deterioration",
        "Release risk concentration",
        "Recurring defect patterns",
        "Severity escalation",
      ],
      potentialDecisionSupport:
        "Highlight defect clusters that may threaten release readiness.",
    },
  },
  {
    id: "dependencies",
    label: "Dependencies",
    outputIds: [
      "dependency-insights",
      "risk-signals",
      "delivery-predictability",
    ],
    insight: {
      aiCouldIdentify: [
        "Dependency risk",
        "Schedule impact",
        "Escalation candidates",
        "Cross-team blockers",
      ],
      potentialDecisionSupport:
        "Prioritize dependencies with the highest schedule and delivery impact.",
    },
  },
  {
    id: "release-data",
    label: "Release Data",
    outputIds: ["risk-signals", "project-health", "executive-insights"],
    insight: {
      aiCouldIdentify: [
        "Release readiness",
        "Deployment risk",
        "Go/No-Go support signals",
        "Release scope stability",
      ],
      potentialDecisionSupport:
        "Support release governance with evidence-based readiness indicators.",
    },
  },
  {
    id: "operational-data",
    label: "Operational Data",
    outputIds: [
      "project-health",
      "risk-signals",
      "quality-trends",
    ],
    insight: {
      aiCouldIdentify: [
        "Production health correlation",
        "Incident impact on delivery",
        "Release-to-production signals",
        "Operational stability trends",
      ],
      potentialDecisionSupport:
        "Connect operational signals to delivery and release decisions.",
    },
  },
];

export const agentStages: AgentStage[] = [
  {
    id: "observe",
    label: "OBSERVE",
    purpose: "Collect signals from the operational environment.",
    inputs: [
      "AppDynamics",
      "Dynatrace",
      "Splunk",
      "Logs",
      "Deployment Events",
    ],
    potentialAiAssistance:
      "Correlate signals and summarize operational context.",
    humanRole: "Define monitoring strategy and validate significance.",
  },
  {
    id: "detect",
    label: "DETECT",
    purpose: "Identify anomalies or meaningful changes.",
    inputs: ["Telemetry", "Thresholds", "Baseline patterns"],
    potentialAiAssistance: "Detect unusual patterns across telemetry.",
    humanRole:
      "Validate whether the anomaly represents actual business impact.",
  },
  {
    id: "investigate",
    label: "INVESTIGATE",
    purpose: "Explore potential causes of detected anomalies.",
    inputs: ["Alerts", "Deployments", "Incidents", "Historical patterns"],
    potentialAiAssistance:
      "Correlate alerts, recent deployments, incidents and historical patterns.",
    humanRole: "Guide investigation and validate evidence.",
  },
  {
    id: "explain",
    label: "EXPLAIN",
    purpose: "Communicate what is happening and why.",
    inputs: ["Evidence", "Timeline", "Affected systems"],
    potentialAiAssistance: "Produce an evidence-based incident summary.",
    humanRole: "Review and confirm the explanation.",
  },
  {
    id: "recommend",
    label: "RECOMMEND",
    purpose: "Suggest possible paths forward.",
    inputs: ["Root cause hypotheses", "Runbooks", "Risk context"],
    potentialAiAssistance: "Suggest possible remediation paths.",
    humanRole: "Evaluate risk and decide whether action is appropriate.",
  },
  {
    id: "act",
    label: "ACT",
    purpose: "Execute approved operational responses.",
    inputs: ["Approved actions", "Automation playbooks"],
    potentialAiAssistance: "Support or automate approved operational actions.",
    humanRole: "Retain authorization and accountability.",
  },
  {
    id: "learn",
    label: "LEARN",
    purpose: "Capture outcomes and improve future response.",
    inputs: ["Incident outcomes", "Runbooks", "Post-incident notes"],
    potentialAiAssistance:
      "Capture incident outcomes and update operational knowledge.",
    humanRole: "Validate lessons and improve processes/runbooks.",
  },
];

export const incidentSimulation = {
  title: "See the Agent Loop in Action",
  disclaimer:
    "Illustrative AI/SRE concept — not connected to a live production environment.",
  incident: {
    title: "INCIDENT",
    summary: "Checkout API latency increased",
    signals: [
      "AppDynamics",
      "Splunk",
      "Recent deployment",
      "API error rate",
      "Historical incidents",
    ],
  },
  steps: [
    {
      stage: "OBSERVE",
      message: "Multiple telemetry signals received.",
    },
    {
      stage: "DETECT",
      message: "Latency anomaly detected.",
    },
    {
      stage: "INVESTIGATE",
      message: "Recent deployment correlates with latency increase.",
    },
    {
      stage: "EXPLAIN",
      message: "Possible regression in API response path.",
    },
    {
      stage: "RECOMMEND",
      message:
        "Review latest API deployment and compare response metrics.",
    },
    {
      stage: "HUMAN DECISION",
      message: "Engineering team reviews evidence before taking action.",
    },
    {
      stage: "LEARN",
      message: "Outcome can be captured into operational knowledge.",
    },
  ] as IncidentStep[],
  stepDelayMs: 2000,
} as const;

export const deliveryInsightDemo = {
  title: "From Project Data to Delivery Insight",
  disclaimer: "Illustrative AI decision-support concept.",
  sample: {
    sprintCompletion: "72%",
    uatDefects: "14 open (3 critical)",
    openDependencies: "5 external, 2 aging > 10 days",
    releaseDate: "March 28, 2026",
    blockedItems: "3 stories blocked on API dependency",
  } satisfies DeliveryInsightSample,
  result: {
    health: "Watch" as const,
    keySignals: [
      "UAT defect trend",
      "Dependency aging",
      "Sprint completion trend",
      "Release readiness",
    ],
    recommendedAction:
      "Prioritize unresolved external dependencies and validate UAT defect closure against the planned release date.",
  } satisfies DeliveryInsightResult,
} as const;

export const aiPrinciples: AIPrinciple[] = [
  {
    number: 1,
    title: "AUGMENT PEOPLE",
    description:
      "AI should increase engineering and management capability.",
  },
  {
    number: 2,
    title: "GROUND IN DATA",
    description:
      "AI insights should be grounded in delivery and operational evidence.",
  },
  {
    number: 3,
    title: "HUMAN ACCOUNTABILITY",
    description: "People remain responsible for important decisions.",
  },
  {
    number: 4,
    title: "PROGRESSIVE AUTOMATION",
    description:
      "Automate repetitive work first, then introduce controlled agentic workflows.",
  },
];

export const aiExplorations = [
  {
    title: "AI Delivery Command Centre",
    description:
      "Exploring AI-assisted project health, risk and executive decision support.",
    tags: ["Exploring", "Concept", "Prototype"],
  },
  {
    title: "AI / SRE Agent Loop",
    description:
      "Exploring agentic approaches to incident investigation and operational intelligence.",
    tags: ["Exploring", "Concept", "Prototype"],
  },
  {
    title: "AI-Assisted Development",
    description:
      "Using AI coding workflows and Cursor to rapidly prototype technology concepts.",
    tags: ["Exploring", "Concept", "Prototype"],
  },
  {
    title: "Intelligent Delivery Analytics",
    description:
      "Exploring how patterns across delivery data can surface early-warning signals.",
    tags: ["Exploring", "Concept", "Prototype"],
  },
] as const;

export function getDeliveryOutputById(id: string): DeliveryOutput | undefined {
  return deliveryOutputs.find((output) => output.id === id);
}

export function getDeliveryInputById(id: string): DeliveryInput | undefined {
  return deliveryInputs.find((input) => input.id === id);
}

export function getAgentStageById(id: string): AgentStage | undefined {
  return agentStages.find((stage) => stage.id === id);
}
