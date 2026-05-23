import c4gtCertificate from "../Assets/Certificates/c4gt-certificate.pdf";
import githubCertificate from "../Assets/Certificates/github-certificate.pdf";
import gssocAcceptance from "../Assets/Certificates/gssoc.jpeg";
import headAndShouldersCertificate from "../Assets/Certificates/head-and-shoulders-certificate.png";
import internshalaCertificate from "../Assets/Certificates/internshala-certificate.pdf";
import lfxCertificate from "../Assets/Certificates/lfx-certificate.pdf";
import ssocContributor from "../Assets/Certificates/ssoc.png";
import resume from "../Assets/Mahi_Raj_Resume.pdf";
import artworkProject from "../Assets/Projects/artswork.png";
import codeEditorProject from "../Assets/Projects/codeEditor.png";
import ecommerceProject from "../Assets/Projects/e-commerce.png";
import yoomProject from "../Assets/Projects/yoom.png";

export const projectImageFallbacks = {
  ai: "https://careerlab.hubbedin.com/_next/static/media/Landing3_AnalyzerDetail_3.6391fd66.png",
  resumeAnalyzerPage: "https://careerlab.hubbedin.com/resume-analyzer",
  yoom: "https://imgs.search.brave.com/sv_XZ3qUinHLAVdBSCw8Qrz-2_NyIXHhXM_-eRB6Db4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRpYS5nZXR0eWltYWdlcy5jb20vaWQvMTIyNjczNzU2NS9waG90by9jb2xsZWFndWVzLXRhbGstb25saW5lLWZyb20tdGhlaXItaG9tZXMuanBnP3M9NjEyeDYxMiZ3PTAmaz0yMCZjPXV0cTVMbmVVOWltMHFpNjNGRGlmRVZxbXVONWlFamhLQmlrcGdwa0Rfdmc9",
  ecommerce: "https://imgs.search.brave.com/YK4idCsm28u854gcapVqvV7EXgzSMcvQk0t20Iruy5g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wOC8yOS8xNy8wNy9lY29tbWVyY2UtMzY0MDMyMV82NDAuanBn",
  artwork: "https://imgs.search.brave.com/qUFVsOG2sguWzPmSI8rbUwO3NCU5ZPD2nWAscZYSAlU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0aWMudmVjdGVleenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wMjgvMTAyLzc2My9zbWFsbC93b21hbi1hdC10aGUtYXJ0LWdhbGxlcnktZnJlZS1waG90by5qcGc",
  developerTooling: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=82",
  portfolio: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",
  creative: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=82",
  default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=82",
};

export const profile = {
  name: "Mahi Raj",
  initials: "MR",
  title: "Full Stack Software Developer",
  location: "India",
  school: "IIITDM Jabalpur",
  email: process.env.REACT_APP_CONTACT_EMAIL || "rmahi1407@gmail.com",
  summary:
    "I build web applications with React, Node.js, and modern frontend tools. This portfolio shows the projects I coded, the stack I use, and my open source work.",
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
  { value: "5+", label: "projects" },
  { value: "MERN", label: "main stack" },
  { value: "OSS", label: "open source" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PHP", "Firebase", "Authentication"],
  },
  {
    title: "Database & Cloud",
    items: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker"],
  },
  {
    title: "Languages & Tools",
    items: ["C++", "Java", "Python", "Git", "GitHub", "Postman", "Problem Solving"],
  },
];

export const projects = [
  {
    title: "AI Resume Analyzer",
    image: projectImageFallbacks.ai,
    imageCategory: "ai",
    featured: true,
    category: "AI SaaS Tool",
    description:
      "AI-powered resume analyzer with ATS scoring, resume insights and feedback.",
    stack: ["React", "AI Workflow", "Resume Analysis"],
    stats: ["Live on Vercel", "AI feedback", "Resume scoring"],
    github: "https://github.com/23bsm038-Mahi/AI-Resume-Analyzer",
    demo: "https://ai-resume-analyzer-web-six.vercel.app/",
  },
  {
    title: "VS Code Clone",
    image: codeEditorProject,
    imageCategory: "developerTooling",
    featured: true,
    category: "Developer Tooling",
    description:
      "I built a browser-based code editor for HTML, CSS, and JavaScript with a live preview workflow inspired by VS Code.",
    stack: ["React", "Editor UX", "Live Preview"],
    stats: ["Code editor UI", "Live preview", "Developer workflow"],
    github: "https://github.com/23bsm038-Mahi/vs-code-clone",
  },
  {
    title: "E-Commerce Website",
    image: ecommerceProject,
    imageCategory: "ecommerce",
    featured: true,
    category: "Full Stack Product",
    description:
      "I built a full-stack e-commerce app with product browsing, cart behavior, authentication, and order flow features.",
    stack: ["React", "Node.js", "Full Stack"],
    stats: ["Cart flow", "Authentication", "Order journey"],
    github: "https://github.com/23bsm038-Mahi/E-commerce-",
  },
  {
    title: "Artwork Portfolio",
    image: artworkProject,
    imageCategory: "artwork",
    category: "Portfolio UI",
    description:
      "I built a responsive artwork showcase with a clean layout for browsing and presenting digital collections.",
    stack: ["Responsive UI", "Design Systems", "Frontend"],
    stats: ["Gallery UX", "Responsive", "Visual content"],
    github: "https://github.com/23bsm038-Mahi/Artworks-App",
  },
  {
    title: "Yoom",
    image: yoomProject,
    imageCategory: "yoom",
    category: "Creative Platform",
    description:
      "I built a digital artwork platform with reusable React UI, structured content, and responsive navigation.",
    stack: ["React", "Content UX", "Performance"],
    stats: ["Reusable UI", "Content UX", "Performance"],
    github: "https://github.com/23bsm038-Mahi/Yoom",
  },
];

export const experience = [
  {
    period: "Current",
    role: "Full Stack Projects",
    place: "Personal and academic work",
    details:
      "Building web projects across frontend UI, backend APIs, data handling, authentication, and deployment practice.",
  },
  {
    period: "Ongoing",
    role: "Open Source Contributor",
    place: "GitHub and contribution programs",
    details:
      "Contributing in public repositories and open source programs while improving Git, collaboration, and review workflows.",
  },
];

export const education = [
  {
    degree: "B.Tech Student",
    school: "Indian Institute of Information Technology, Design and Manufacturing Jabalpur",
    details:
      "Studying software engineering fundamentals while building full-stack projects and improving problem-solving skills.",
  },
];

export const achievements = [
  {
    title: "Product-focused portfolio",
    detail:
      "Built projects across developer tools, e-commerce, and creative web platforms.",
  },
  {
    title: "Engineering fundamentals",
    detail:
      "Practicing problem solving and programming with C++, Java, and Python.",
  },
  {
    title: "Open source momentum",
    detail:
      "Selected for contributor programs and keeping certificates and public work visible.",
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
  "Most of my development work, experiments, and learning projects are available publicly on GitHub.",
  "I am active in open source programs and keep contribution credentials visible.",
  "I regularly use Git for version control and collaboration while building projects.",
];

export const codingProfiles = [
  {
    platform: "GitHub",
    handle: "23bsm038-Mahi",
    href: "https://github.com/23bsm038-Mahi",
    metric: "Public repositories and open source work",
  },
  {
    platform: "LinkedIn",
    handle: "Mahi Raj",
    href: "https://www.linkedin.com/in/mahi-raj-07aa62354",
    metric: "Professional profile and updates",
  },
  {
    platform: "LeetCode",
    handle: "2Eo3nZmgad",
    href: "https://leetcode.com/u/2Eo3nZmgad/",
    metric: "Problem solving and DSA practice profile",
  },
];

export const testimonials = [
  {
    quote:
      "Mahi presents her projects with clear ownership, practical product thinking, and a strong learning mindset.",
    name: "Portfolio Review",
    role: "Recruiter-facing summary",
  },
  {
    quote:
      "Her portfolio connects real projects, certificates, GitHub activity, and full-stack learning into one focused story.",
    name: "Developer Profile",
    role: "Professional positioning",
  },
];
