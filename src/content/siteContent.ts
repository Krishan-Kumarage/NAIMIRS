/**
 * Edit this file to customize copy, links, and section data.
 * Structure mirrors a research landing page similar to thefocusapp.site.
 */

import { publicDocUrl } from "../lib/publicDocUrl";

export const siteConfig = {
  name: "NAIMIRIS",
  tagline: "A profit-driven smart farming app for Scotch Bonnet peppers",
  domain: "www.naimiris.example",
  hero: {
    eyebrow: "SMART FARMING",
    title: "NAIMIRIS",
    tagline: "A profit-driven smart farming app for Scotch Bonnet peppers",
    collage: [
      {
        id: "hand-crate",
        src: "/images/hero/pepper-hand-crate.jpg",
        alt: "Orange Scotch Bonnet pepper held above a crate of harvested peppers",
      },
      {
        id: "dew-plant",
        src: "/images/hero/pepper-dew-plant.jpg",
        alt: "Red pepper with water droplets on the plant",
      },
      {
        id: "ripening",
        src: "/images/hero/peppers-ripening-dark.jpg",
        alt: "Peppers ripening from green to red on a dark background",
      },
      {
        id: "palm",
        src: "/images/hero/pepper-palm.jpg",
        alt: "Red Scotch Bonnet pepper resting in an open palm",
      },
    ],
    primaryCta: { label: "The problem", href: "#problem" },
    secondaryCta: { label: "Contact us", href: "#contact" },
  },
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Methodology", href: "#methodology" },
    { label: "Plan", href: "#commercialization" },
    { label: "Timeline", href: "#timeline" },
    { label: "Resources", href: "#resources" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    blurb:
      "A smart farming app for wet zone farmers growing Scotch Bonnet peppers on less than one acre, with guidance aimed at higher yield and profit.",
    navGroups: [
      {
        title: "Navigation",
        links: [
          { label: "Problem", href: "#problem" },
          { label: "Methodology", href: "#methodology" },
          { label: "Plan", href: "#commercialization" },
          { label: "Timeline", href: "#timeline" },
          { label: "Team", href: "#team" },
        ],
      },
      {
        title: "Research",
        links: [
          { label: "Publications", href: "#" },
          { label: "Documents", href: "#resources" },
          { label: "Presentations", href: "#resources" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "GitHub", href: "#" },
          { label: "LinkedIn", href: "#" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    copyright: "NAIMIRIS Research Project.",
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Collaborate with us",
    description:
      "Reach out for inquiries, feedback, or partnership opportunities. Replace with your team's preferred contact flow.",
    email: "research.naimirs@example.com",
    location: "Your university / lab location",
  },
} as const;

export const introductionSection = {
  id: "introduction",
  eyebrow: "Introduction",
  description:
    "Agriculture is a key sector in Sri Lanka, but many small-scale farmers still use traditional methods which lead to low profit and high risk. NAIMIRIS is a smart farming app designed for wet zone farmers with less than 1 acre of land who want to earn better income from farming. The system provides highly accurate, crop-focused guidance for Scotch Bonnet pepper farming, delivering insights and strategies that are more precise and practical than common farming advice. NAIMIRIS helps farmers reduce risk, increase yield, and turn farming into a profitable business.",
  image: "/images/scotch-bonnet.jpg",
  imageAlt: "Scotch Bonnet pepper plants with red, orange, and green fruit in a cultivated field",
  mark: "/images/pepper-mark.png",
  facts: [
    { id: "zone", value: "Wet zone", label: "Farmers it is built for" },
    { id: "land", value: "Under 1 acre", label: "Small land holdings" },
    { id: "crop", value: "Scotch Bonnet", label: "Crop-focused guidance" },
  ],
} as const;

export const problemSection = {
  id: "problem",
  eyebrow: "The problem",
  title: "Existing problems and why this is important",
  existingTitle: "Existing problems",
  importanceTitle: "Why this is important",
  existing: [
    "Traditional farming focuses on production, not profit",
    "Low income for small-scale farmers",
    "Lack of accurate farming guidance",
    "Dependence on middlemen and poor market access",
    "Small land sizes limit profitability",
  ],
  importance: [
    "Farmers work hard but earn low profit",
    "Farming becomes high risk and unstable",
    "Farmers cannot treat farming as a profitable business",
    "Young people avoid agriculture",
    "Need for a smart, profit-focused farming system",
  ],
} as const;

export const commercializationSection = {
  id: "commercialization",
  eyebrow: "The model",
  title: "Commercialization plan",
  description:
    "The Smart Farming Decision Support System will be offered as a subscription-based platform for farmers and agricultural businesses. Users can access AI-powered farming recommendations, monitoring, and analysis through monthly or yearly plans. The system can also integrate with IoT sensors to collect real-time farming data and improve decision-making. Revenue will be generated through subscriptions, premium services, and agricultural partnerships.",
  offers: [
    {
      id: "subscription",
      title: "Subscription platform",
      summary: "Monthly or yearly plans for farmers and agricultural businesses.",
      highlighted: true,
    },
    {
      id: "ai",
      title: "AI-powered guidance",
      summary: "Recommendations, monitoring, and analysis.",
      highlighted: false,
    },
    {
      id: "iot",
      title: "IoT integration",
      summary: "Sensors collect real-time farming data to improve decisions.",
      highlighted: false,
    },
    {
      id: "revenue",
      title: "Revenue",
      summary: "Subscriptions, premium services, and agricultural partnerships.",
      highlighted: false,
    },
  ],
} as const;

export type MethodologyCard = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const methodologySection = {
  id: "methodology",
  eyebrow: "The methodology",
  title: "Scientific foundation",
  cards: [
    {
      id: "foundation",
      title: "Scientific foundation",
      summary:
        "NAIMIRIS (R26-IT-103) is grounded in design science and agricultural decision-support research for Scotch Bonnet (Capsicum chinense) in Sri Lanka’s wet zone.",
      bullets: [
        "Smart farming DSS: land suitability, resources, ROI, and crop planning (proposal & group report)",
        "Computer vision: overhead land-cover analysis, stage-aware YOLO detectors, seven-class EfficientNet-B0 leaf screening",
        "IoT monitoring: ESP32 sensing with Firebase-backed environmental data for stage-specific guidance",
        "Integration contract: shared identity, units, model versions, uncertainty, and controlled recovery across components",
      ],
    },
    {
      id: "gap",
      title: "Research gap",
      summary:
        "Traditional and isolated tools do not connect planning, cultivation, and crop-health evidence in one traceable workflow.",
      bullets: [
        "Land, resource, environmental, and leaf observations answer different questions but are often used in isolation",
        "Missing or uncertain evidence can propagate into unsupported recommendations",
        "General land-cover and disease-classification benchmarks do not define Sri Lankan Scotch Bonnet suitability without project-specific mapping",
        "No shared context between pre-cultivation planning, daily guidance, and pest or health screening",
      ],
    },
    {
      id: "problem",
      title: "Research problem",
      summary:
        "Small-scale wet-zone farmers lack a profit-focused, connected decision-support path from land assessment to crop health.",
      bullets: [
        "Decisions on land, investment, cultivation method, and plant health are disconnected and unevenly evidenced",
        "Farmers may treat one positive signal as sufficient for investment or management actions",
        "High classification accuracy alone does not express assumptions, limits, or actionable next steps for farmers",
        "Overall question: how to unify planning, stage-aware guidance, and image-based screening without hiding uncertainty",
      ],
    },
    {
      id: "objectives",
      title: "Research objectives",
      summary:
        "Deliver an integrated NAIMIRIS workflow from three individual components documented in the group final report.",
      bullets: [
        "Pre-analysis & smart decision support — plot/resource evaluation, approved farm plan, financial overview (IT22271464)",
        "Technology-assisted A-to-Z farming guidance — stage-aware IoT and YOLO-based guidance module (IT22124630)",
        "AI-driven pest monitoring — leaf screening and crop-health classification pipeline (IT22212740)",
        "Align with SDG 2 and SDG 12 pathways via better decisions, resource limits, and responsible AI use (not yet field-validated impact)",
      ],
    },
    {
      id: "approach",
      title: "Methodology",
      summary:
        "Design science synthesis from individual theses, focused literature review, and prototype integration per R26-IT-103 final report.",
      bullets: [
        "Component methods: land-cover and two-photo preparation assessment, resource/financial calculations, ESP32–Firebase monitoring",
        "Stage-specific detectors and seven-category leaf classifier with documented input/output contracts",
        "Common report structure: architecture, integration rules, implementation evidence, acceptance tests, progressive validation plan",
        "Sources: final reports and proposal documents in public/documents (group + individual submissions)",
      ],
    },
    {
      id: "results",
      title: "Key results",
      summary:
        "Bounded prototype and integration design with explicit limits on operational and agronomic claims (October 2026 submissions).",
      bullets: [
        "Validated integration design and grounded prototype account across three included components",
        "Crop-health preparation workflow documented with 4,507 selected images (4,473 labelled correct in source report)",
        "Final held-out model metrics, full end-to-end test record, and measured yield/profit benefits not yet claimed",
        "Fourth template component retained as an evidence gap until a consistent fourth member report is available",
      ],
    },
  ] satisfies MethodologyCard[],
};

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  status: "completed" | "upcoming" | "in-progress";
};

export type VelocityMilestone = {
  id: string;
  label: string;
  date: string;
};

export const timelineSection = {
  id: "timeline",
  eyebrow: "Research timeline",
  titleLead: "Research",
  titleAccent: "Timeline",
  description:
    "Our journey from concept to deliverables — proposal, progress reviews, and final outputs.",
  progressPhaseLabel: "Development phase",
  progressLabel: "Project velocity",
  progressPercent: 90,
  items: [
    {
      id: "proposal",
      date: "September 2025",
      title: "Project proposal",
      status: "completed",
    },
    {
      id: "pp1",
      date: "January 2026",
      title: "Progress presentation I",
      status: "completed",
    },
    {
      id: "pp2",
      date: "March 2026",
      title: "Progress presentation II",
      status: "completed",
    },
  ] satisfies TimelineItem[],
  velocityTrack: [
    { id: "proposal", label: "Proposal", date: "Sep '25" },
    { id: "pp1", label: "PP I", date: "Jan '26" },
    { id: "pp2", label: "PP II", date: "Mar '26" },
    { id: "paper", label: "Paper", date: "Apr '26" },
    { id: "viva", label: "Viva", date: "May '04" },
    { id: "report", label: "Report", date: "May '13" },
  ] satisfies VelocityMilestone[],
};

export type StudentSubmission = {
  id: string;
  name: string;
  studentId: string;
  initials: string;
  proposalHref: string;
  finalReportHref: string;
};

export type ProgressPresentation = {
  id: string;
  numeral: string;
  title: string;
  href: string;
};

export const resourcesSection = {
  id: "resources",
  eyebrow: "Research resources",
  title: "Documents & presentations",
  description:
    "Proposals, final reports and progress presentations from the project documents folder, ready to download.",
  stats: [
    { id: "proposals", label: "3 proposals" },
    { id: "reports", label: "4 final reports" },
    { id: "presentations", label: "2 presentations" },
  ],
  groupReport: {
    label: "Group submission",
    title: "Final report R26-IT-103",
    description:
      "Common integrated solution report for NAIMIRIS — profit-driven smart farming for Scotch Bonnet peppers.",
    href: publicDocUrl("documents/Final Reports/R26-IT-103_Final-Report.pdf"),
  },
  students: [
    {
      id: "kumarage",
      name: "Kumarage K.J.B.H.",
      studentId: "IT22271464",
      initials: "KK",
      proposalHref: publicDocUrl(
        "documents/Proposal Document/IT22271464_Proposal_Document.pdf",
      ),
      finalReportHref: publicDocUrl(
        "documents/Final Reports/IT22271464_Final-Report.pdf",
      ),
    },
    {
      id: "savinda",
      name: "Savinda R.M.D.",
      studentId: "IT22124630",
      initials: "SR",
      proposalHref: publicDocUrl(
        "documents/Proposal Document/IT22124630_Proposal_Document.pdf",
      ),
      finalReportHref: publicDocUrl(
        "documents/Final Reports/IT22124630_Final-Report.pdf",
      ),
    },
    {
      id: "gunawardana",
      name: "Gunawardana T.D.A.",
      studentId: "IT22212740",
      initials: "GT",
      proposalHref: publicDocUrl(
        "documents/Proposal Document/IT22212740_Proposal_Document.pdf",
      ),
      finalReportHref: publicDocUrl(
        "documents/Final Reports/IT22212740_Final-Report.pdf",
      ),
    },
  ] satisfies StudentSubmission[],
  presentations: [
    {
      id: "pp1",
      numeral: "I",
      title: "Progress presentation I",
      href: publicDocUrl("documents/PP presentation/PP_1 R26-IT-103.pptx"),
    },
    {
      id: "pp2",
      numeral: "II",
      title: "Progress presentation II",
      href: publicDocUrl("documents/PP presentation/PP_2 R26-IT-103.pptx"),
    },
  ] satisfies ProgressPresentation[],
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonialsSection = {
  id: "testimonials",
  eyebrow: "Feedback",
  title: "What participants say",
  featured: {
    title: "User testimonial",
    subtitle: "Video or case study placeholder",
  },
  items: [
    { id: "t1", quote: "Placeholder quote from a study participant or stakeholder.", author: "Name", role: "Role / cohort" },
    { id: "t2", quote: "Another testimonial highlighting impact or usability.", author: "Name", role: "Role / cohort" },
    { id: "t3", quote: "Third quote for social proof during deployments.", author: "Name", role: "Role / cohort" },
  ] satisfies Testimonial[],
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
  email?: string;
  photo?: string;
  photoPosition?: string;
  variant?: "supervisor" | "co-supervisor" | "leader" | "member";
};

export const teamSection = {
  id: "team",
  eyebrow: "The group",
  titleLead: "Our",
  titleAccent: "Team",
  supervisors: [
    {
      id: "supervisor",
      name: "Ms. Sadeepa Dushanthi Kuruppu",
      role: "Supervisor",
      focus: "Department of Computing / Information Technology, SLIIT",
      variant: "supervisor",
    },
    {
      id: "co-supervisor",
      name: "Ms. Chathurangika Kahandawaarachchi",
      role: "Co-supervisor",
      focus: "Department of Computing / Information Technology, SLIIT",
      variant: "co-supervisor",
    },
  ] satisfies TeamMember[],
  members: [
    {
      id: "kumarage",
      name: "Kumarage K.J.B.H.",
      role: "Research group leader",
      focus: "Project coordination & smart farming system design · IT22271464",
      photo: "/team/kumarage-kjbh.jpg",
      photoPosition: "center 22%",
      email: "it22271464@my.sliit.lk",
      variant: "leader",
    },
    {
      id: "savinda",
      name: "Savinda R.M.D.",
      role: "Group member",
      focus: "Implementation & integration · IT22124630",
      photo: "/team/savinda-rmd.png",
      photoPosition: "center 18%",
      email: "it22124630@my.sliit.lk",
      variant: "member",
    },
    {
      id: "gunawardana",
      name: "Gunawardana T.D.A.",
      role: "Group member",
      focus: "Research documentation & analysis · IT22212740",
      photo: "/team/gunawardana-tda.jpg",
      photoPosition: "center 8%",
      email: "it22212740@my.sliit.lk",
      variant: "member",
    },
  ] satisfies TeamMember[],
};
