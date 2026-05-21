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
  { value: "4+", label: "projects" },
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
    title: "VS Code Clone",
    image: vscodeImage,
    description:
      "I built a browser-based code editor for HTML, CSS, and JavaScript with a live preview workflow inspired by VS Code.",
    stack: ["React", "Editor UX", "Live Preview"],
    github: "https://github.com/23bsm038-Mahi/vs-code-clone",
  },
  {
    title: "E-Commerce Website",
    image: ecommerceImage,
    description:
      "I built a full-stack e-commerce app with product browsing, cart behavior, authentication, and order flow features.",
    stack: ["React", "Node.js", "Full Stack"],
    github: "https://github.com/23bsm038-Mahi/E-commerce-",
  },
  {
    title: "Artwork Portfolio",
    image: artworkImage,
    description:
      "I built a responsive artwork showcase with a clean layout for browsing and presenting digital collections.",
    stack: ["Responsive UI", "Design Systems", "Frontend"],
    github: "https://github.com/23bsm038-Mahi/Artworks-App",
  },
  {
    title: "Yoom",
    image: yoomImage,
    description:
      "I built a digital artwork platform with reusable React UI, structured content, and responsive navigation.",
    stack: ["React", "Content UX", "Performance"],
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
  "My GitHub profile contains the source code for the projects shown here.",
  "I am active in open source programs and keep contribution credentials visible.",
  "I use Git and GitHub while building, iterating, and collaborating on code.",
];
