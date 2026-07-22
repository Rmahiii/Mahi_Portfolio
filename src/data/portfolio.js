import c4gtCertificate from "../Assets/Certificates/c4gt-certificate.pdf";
import deloitteCertificate from "../Assets/Certificates/deloitte-certificate.pdf";
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
  title: "Software Engineer",
  location: "India",
  school: "IIITDM Jabalpur",
  email: process.env.REACT_APP_CONTACT_EMAIL || "rmahi0773@gmail.com",
  summary:
    "Full Stack Developer building useful web applications.",
  intro:
    "I work with React, Node.js, Express, and MongoDB. I like simple interfaces, clean code, and projects that are easy to use.",
  resume,
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Rmahiii",
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
  { value: "5+", label: "shipped projects" },
  { value: "MERN", label: "primary stack" },
  { value: "Vercel", label: "deployment" },
  { value: "OSS", label: "public work" },
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
      "Resume analysis workflow that scores uploaded resumes and returns structured feedback for ATS readiness.",
    stack: ["React", "JavaScript", "AI Workflow", "Vercel"],
    stats: ["ATS scoring", "Resume insights", "Live demo"],
    github: "https://github.com/Rmahiii/AI-Resume-Analyzer",
    demo: "https://ai-resume-analyzer-web-six.vercel.app/",
  },
  {
    title: "VS Code Clone",
    image: codeEditorProject,
    imageCategory: "developerTooling",
    featured: true,
    category: "Developer Tooling",
    description:
      "Browser-based code editor for HTML, CSS, and JavaScript with a live preview workflow.",
    stack: ["React", "JavaScript", "Editor UX", "Live Preview"],
    stats: ["Live preview", "Multi-pane UI", "Frontend tooling"],
    github: "https://github.com/Rmahiii/vs-code-clone",
  },
  {
    title: "E-Commerce Website",
    image: ecommerceProject,
    imageCategory: "ecommerce",
    featured: true,
    category: "Full Stack Product",
    description:
      "Full-stack commerce flow with product browsing, cart behavior, authentication, and order journey screens.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    stats: ["Cart flow", "Auth flow", "Order journey"],
    github: "https://github.com/Rmahiii/E-commerce-",
  },
  {
    title: "Artwork Portfolio",
    image: artworkProject,
    imageCategory: "artwork",
    category: "Portfolio UI",
    description:
      "Responsive gallery experience for browsing and presenting digital artwork collections.",
    stack: ["React", "CSS", "Responsive UI"],
    stats: ["Gallery UX", "Mobile layout", "Content model"],
    github: "https://github.com/Rmahiii/Artworks-App",
  },
  {
    title: "Yoom",
    image: yoomProject,
    imageCategory: "yoom",
    category: "Creative Platform",
    description:
      "Creative platform interface built with reusable React UI and structured content sections.",
    stack: ["React", "CSS", "Content UX", "Performance"],
    stats: ["Reusable UI", "Responsive nav", "Content UX"],
    github: "https://github.com/Rmahiii/Yoom",
    demo: "https://yoom-ashy-mu.vercel.app/",
  },
];

export const experience = [
  {
    period: "2025 - Present",
    role: "Full Stack Project Builder",
    place: "Personal, academic, and deployed work",
    details:
      "Building React and Node.js projects with authentication flows, API integration, state management, and deployment practice on platforms such as Vercel.",
  },
  {
    period: "2026",
    role: "Open Source Contributor",
    place: "GitHub and contribution programs",
    details:
      "Participating in open source programs, keeping contribution credentials visible, and improving Git collaboration habits through public repositories.",
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
    title: "Projects",
    detail:
      "Built projects in AI tools, e-commerce, developer tooling, and frontend UI.",
  },
  {
    title: "Programming",
    detail:
      "Practicing problem solving with C++, Java, and Python.",
  },
  {
    title: "Open Source",
    detail:
      "Participating in contribution programs and sharing public work on GitHub.",
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
    title: "Deloitte Certificate",
    issuer: "Deloitte",
    label: "Certificate",
    detail: "PDF credential available for review.",
    asset: deloitteCertificate,
    type: "pdf",
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
  "I keep most of my project code public on GitHub.",
  "I use GitHub to track commits, issues, and project progress.",
  "I participate in open source programs and keep related credentials visible.",
];

export const codingProfiles = [
  {
    platform: "GitHub",
    handle: "Rmahiii",
    href: "https://github.com/Rmahiii",
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
