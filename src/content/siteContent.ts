/**
 * Edit this file to customize copy, links, and section data.
 * Structure mirrors a research landing page similar to thefocusapp.site.
 */

export const siteConfig = {
  name: "NAIMIRS",
  tagline: "Research project web application",
  domain: "www.naimirs.example",
  hero: {
    eyebrow: "Research project",
    title: "Your project headline goes here",
    description:
      "Short introduction to your research. Replace this with your problem statement, methodology summary, or value proposition.",
    primaryCta: { label: "View timeline", href: "#timeline" },
    secondaryCta: { label: "Contact us", href: "#contact" },
    availabilityLabel: "Available on",
    platforms: ["Web", "Documentation", "Demo"],
  },
  nav: [
    { label: "Methodology", href: "#methodology" },
    { label: "Timeline", href: "#timeline" },
    { label: "Resources", href: "#resources" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    blurb:
      "Placeholder footer text. Describe your research mission in one or two sentences.",
    navGroups: [
      {
        title: "Navigation",
        links: [
          { label: "Methodology", href: "#methodology" },
          { label: "Timeline", href: "#timeline" },
          { label: "Resources", href: "#resources" },
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
    copyright: "NAIMIRS Research Project. Your institution name.",
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
  variant?: "supervisor" | "member";
};

export const teamSection = {
  id: "team",
  eyebrow: "The group",
  title: "Our team",
  members: [
    { id: "sup", name: "Supervisor name", role: "Supervisor", focus: "Faculty / department", email: "supervisor@example.com", variant: "supervisor" },
    { id: "cosup", name: "Co-supervisor name", role: "Co-supervisor", focus: "Faculty / department", email: "cosupervisor@example.com", variant: "supervisor" },
    { id: "m1", name: "Member one", role: "Research area", focus: "Short responsibility description.", email: "member1@example.com" },
    { id: "m2", name: "Member two", role: "Research area", focus: "Short responsibility description.", email: "member2@example.com" },
    { id: "m3", name: "Member three", role: "Research area", focus: "Short responsibility description.", email: "member3@example.com" },
    { id: "m4", name: "Member four", role: "Research area", focus: "Short responsibility description.", email: "member4@example.com" },
  ] satisfies TeamMember[],
};
