/**
 * Edit this file to customize copy, links, and section data.
 * Structure mirrors a research landing page similar to thefocusapp.site.
 */

export const siteConfig = {
  name: "NAIMIRIS",
  tagline: "A profit-driven smart farming app for Scotch Bonnet peppers",
  domain: "www.naimiris.example",
  hero: {
    eyebrow: "Smart farming",
    title: "NAIMIRIS",
    tagline: "A profit-driven smart farming app for Scotch Bonnet peppers",
    image: "/images/harvest.jpg",
    imageAlt: "A farmer harvesting ripe peppers into a woven basket",
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
      summary: "Describe the theories and frameworks your work builds on.",
      bullets: ["Theory / framework 1", "Theory / framework 2", "Key metric or model"],
    },
    {
      id: "gap",
      title: "Research gap",
      summary: "Explain what existing solutions fail to address.",
      bullets: ["Gap 1", "Gap 2", "Gap 3"],
    },
    {
      id: "problem",
      title: "Research problem",
      summary: "State the core problem your project tackles.",
      bullets: ["Problem aspect 1", "Problem aspect 2", "Problem aspect 3"],
    },
    {
      id: "objectives",
      title: "Research objectives",
      summary: "List measurable goals of the study or system.",
      bullets: ["Objective 1", "Objective 2", "Objective 3"],
    },
    {
      id: "approach",
      title: "Methodology",
      summary: "Outline your pipeline, experiments, or architecture.",
      bullets: ["Step / layer 1", "Step / layer 2", "Evaluation approach"],
    },
    {
      id: "results",
      title: "Key results",
      summary: "Highlight outcomes — use placeholders until you have final numbers.",
      bullets: ["Result metric 1", "Result metric 2", "Result metric 3"],
    },
  ] satisfies MethodologyCard[],
};

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  status: "completed" | "upcoming" | "in-progress";
};

export const timelineSection = {
  id: "timeline",
  eyebrow: "Research timeline",
  title: "Project milestones",
  description:
    "Track proposal, progress reviews, and final deliverables. Edit dates and labels in siteContent.ts.",
  progressLabel: "Project velocity",
  progressPercent: 40,
  items: [
    { id: "proposal", date: "Month YYYY", title: "Project proposal", status: "completed" },
    { id: "pp1", date: "Month YYYY", title: "Progress presentation I", status: "completed" },
    { id: "pp2", date: "Month YYYY", title: "Progress presentation II", status: "in-progress" },
    { id: "paper", date: "Month YYYY", title: "Research paper", status: "upcoming" },
    { id: "viva", date: "Month YYYY", title: "Viva / evaluation", status: "upcoming" },
  ] satisfies TimelineItem[],
};

export type ResourceItem = {
  id: string;
  title: string;
  category: "document" | "presentation";
  status: "download" | "soon" | "coming-soon";
  submitted?: string;
  scope?: "GROUP" | "INDIVIDUAL";
};

export const resourcesSection = {
  id: "resources",
  eyebrow: "Research resources",
  title: "Documents & presentations",
  description: "Transparent access to submissions and artifacts. Link PDFs when ready.",
  documents: [
    { id: "d1", title: "Project proposal", category: "document", status: "download", submitted: "YYYY-MM-DD", scope: "INDIVIDUAL" },
    { id: "d2", title: "Checklist I", category: "document", status: "soon", scope: "GROUP" },
    { id: "d3", title: "Research paper", category: "document", status: "coming-soon", scope: "GROUP" },
  ] satisfies ResourceItem[],
  presentations: [
    { id: "p1", title: "Proposal presentation", category: "presentation", status: "download", submitted: "YYYY-MM-DD", scope: "GROUP" },
    { id: "p2", title: "Progress presentation I", category: "presentation", status: "soon", scope: "GROUP" },
    { id: "p3", title: "Final presentation", category: "presentation", status: "coming-soon", scope: "GROUP" },
  ] satisfies ResourceItem[],
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
  variant?: "supervisor" | "leader" | "member";
};

export const teamSection = {
  id: "team",
  eyebrow: "The group",
  title: "Our team",
  members: [
    {
      id: "kumarage",
      name: "Kumarage K.J.B.H.",
      role: "Research Group Leader",
      focus: "IT22271464",
      photo: "/team/kumarage-kjbh.jpg",
      photoPosition: "center 22%",
      variant: "leader",
    },
    {
      id: "savinda",
      name: "Savinda R.M.D.",
      role: "Group Member",
      focus: "IT22124630",
      photo: "/team/savinda-rmd.png",
      photoPosition: "center 18%",
      variant: "member",
    },
    {
      id: "gunawardana",
      name: "Gunawardana T.D.A.",
      role: "Group Member",
      focus: "IT22212740",
      photo: "/team/gunawardana-tda.jpg",
      photoPosition: "center 8%",
      variant: "member",
    },
  ] satisfies TeamMember[],
};
