import artworkImage from "../Assets/Projects/artswork.png";
import c4gtCertificate from "../Assets/Certificates/c4gt-certificate.pdf";
import ecommerceImage from "../Assets/Projects/e-commerce.png";
import githubCertificate from "../Assets/Certificates/github-certificate.pdf";
import gssocAcceptance from "../Assets/Certificates/gssoc.jpeg";
import headAndShouldersCertificate from "../Assets/Certificates/head-and-shoulders-certificate.png";
import internshalaCertificate from "../Assets/Certificates/internshala-certificate.pdf";
import lfxCertificate from "../Assets/Certificates/lfx-certificate.pdf";
import ssocContributor from "../Assets/Certificates/ssoc.png";
import vscodeImage from "../Assets/Projects/vscode.png";
import yoomImage from "../Assets/Projects/yoom.png";
import resume from "../Assets/Mahi_Raj_Resume.pdf";

export const profile = {
  name: "Mahi Raj",
  initials: "MR",
  title: "Full Stack Software Developer",
  location: "India",
  school: "IIITDM Jabalpur",
  summary:
    "I design and build full-stack web products that balance interface quality, maintainable systems, and delivery details that hold up beyond the first release.",
  resume,
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/23bsm038-Mahi",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahi-raj-07aa62354",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rmahi_14",
    },
  ],
};

export const focusMetrics = [
  { value: "UI -> API", label: "end-to-end ownership" },
  { value: "4+", label: "shipped case studies" },
  { value: "OSS", label: "public contribution" },
];

export const skillGroups = [
  {
    title: "Product Interfaces",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Application Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PHP", "Firebase", "Authentication"],
  },
  {
    title: "Data & Delivery",
    items: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker"],
  },
  {
    title: "Engineering Toolkit",
    items: ["C++", "Java", "Python", "Git", "GitHub", "Postman", "Problem Solving"],
  },
];

export const projects = [
  {
    title: "VS Code Clone",
    image: vscodeImage,
    description:
      "A browser-based editor experience that keeps authoring and preview feedback close for HTML, CSS, and JavaScript workflows.",
    stack: ["React", "Editor UX", "Live Preview"],
    scope: "Developer tooling UI",
    focus: ["Interactive editing flow", "Fast preview feedback", "Workspace-inspired visual hierarchy"],
    github: "https://github.com/23bsm038-Mahi/vs-code-clone",
  },
  {
    title: "E-Commerce Website",
    image: ecommerceImage,
    description:
      "A commerce application spanning product discovery, cart behavior, authentication, and order-oriented full-stack structure.",
    stack: ["React", "Node.js", "Full Stack"],
    scope: "Transactional product flow",
    focus: ["Catalog and cart state", "Authentication-aware UX", "Backend-connected application structure"],
    github: "https://github.com/23bsm038-Mahi/E-commerce-",
  },
  {
    title: "Artwork Portfolio",
    image: artworkImage,
    description:
      "A visual showcase designed to make artwork collections easier to scan, browse, and present across screen sizes.",
    stack: ["Responsive UI", "Design Systems", "Frontend"],
    scope: "Content presentation system",
    focus: ["Responsive composition", "Collection-first navigation", "Polished media presentation"],
    github: "https://github.com/23bsm038-Mahi/Artworks-App",
  },
  {
    title: "Yoom",
    image: yoomImage,
    description:
      "A digital artwork platform shaped around content structure, reusable interface composition, and user-centered navigation.",
    stack: ["React", "Content UX", "Performance"],
    scope: "Creative platform frontend",
    focus: ["Reusable UI architecture", "Structured browsing surfaces", "Performance-aware presentation"],
    github: "https://github.com/23bsm038-Mahi/Yoom",
  },
];

export const engineeringPrinciples = [
  {
    title: "Product clarity",
    detail:
      "Translate requirements into focused flows, readable hierarchy, and interactions that reduce user friction.",
  },
  {
    title: "System ownership",
    detail:
      "Work across components, state, APIs, data choices, and delivery details instead of treating UI as a thin layer.",
  },
  {
    title: "Maintainable delivery",
    detail:
      "Prefer reusable modules, predictable structure, accessibility checks, and performance-aware implementation.",
  },
];

export const experience = [
  {
    period: "Current",
    role: "Full Stack Product Development",
    place: "Independent project practice",
    details:
      "Building end-to-end applications across interface architecture, application state, backend workflows, data choices, and deployable project structure.",
  },
  {
    period: "Ongoing",
    role: "Open Source Contributor",
    place: "Public engineering work",
    details:
      "Contributing through public repositories, Git-based collaboration, contribution programs, review-ready changes, and reusable implementation patterns.",
  },
];

export const education = [
  {
    degree: "B.Tech Student",
    school: "Indian Institute of Information Technology, Design and Manufacturing Jabalpur",
    details:
      "Academic foundation in software engineering, problem solving, systems thinking, and project-led full-stack development.",
  },
];

export const achievements = [
  {
    title: "Product-focused portfolio",
    detail:
      "Built inspectable case studies across developer tooling, commerce workflows, and creative content platforms.",
  },
  {
    title: "Engineering fundamentals",
    detail:
      "Uses C++, Java, and Python foundations to sharpen algorithms, code clarity, and implementation tradeoffs.",
  },
  {
    title: "Open source momentum",
    detail:
      "Builds public proof through GitHub work, contributor selections, certifications, and steady portfolio iteration.",
  },
];

export const credentials = [
  {
    title: "GSSoC 2026 Acceptance",
    issuer: "GirlScript Summer of Code",
    label: "Contributor / Mentee",
    detail: "Accepted for the Open Source Track and AI / Agents Track.",
    asset: gssocAcceptance,
    preview: gssocAcceptance,
    type: "image",
  },
  {
    title: "Social Summer of Code",
    issuer: "SSoC Season 5",
    label: "Verified Contributor",
    detail: "Contributor recognition for open source participation.",
    asset: ssocContributor,
    preview: ssocContributor,
    type: "image",
  },
  {
    title: "P&G Brand Campus Champion Challenge",
    issuer: "Head & Shoulders and Unstop",
    label: "Participation",
    detail: "Certificate of participation awarded on 31 March 2026.",
    asset: headAndShouldersCertificate,
    preview: headAndShouldersCertificate,
    type: "image",
  },
  {
    title: "C4GT Certificate",
    issuer: "C4GT",
    label: "Certificate",
    detail: "PDF credential available for review.",
    asset: c4gtCertificate,
    type: "pdf",
  },
  {
    title: "GitHub Certificate",
    issuer: "GitHub",
    label: "Certificate",
    detail: "PDF credential available for review.",
    asset: githubCertificate,
    type: "pdf",
  },
  {
    title: "Internshala Certificate",
    issuer: "Internshala",
    label: "Certificate",
    detail: "PDF credential available for review.",
    asset: internshalaCertificate,
    type: "pdf",
  },
  {
    title: "LFX Certificate",
    issuer: "LFX",
    label: "Certificate",
    detail: "PDF credential available for review.",
    asset: lfxCertificate,
    type: "pdf",
  },
];

export const openSource = [
  "Public GitHub repositories connect project decisions to inspectable source code and contribution history.",
  "Contribution programs and certificates show active participation beyond isolated personal builds.",
  "Git-first habits support review-ready changes, issue-driven iteration, and reusable engineering patterns.",
];
