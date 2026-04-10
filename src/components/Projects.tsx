import { ExternalLink, Github, ArrowRight, Star, Users } from "lucide-react";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

import lyxacover from "../assets/images/lyxa_cover.jpg";
import talk2active from "../assets/images/talk2active.png";
import algorithms from "../assets/images/algorithm.png";
import filekit from "../assets/images/filekit-beta.png";

const projects = [
  {
    title: "Talk2Active",
    subtitle: "Solely Built · IELTS Speaking Practice Platform",
    featured: true,
    soloBuilt: true,
    userCount: "50,000+ Can Handle",
    description:
      "Architected and built entirely solo — a scalable IELTS speaking practice platform serving 50,000+ active users, with real-time peer interactions, secure auth, and high-concurrency backend.",
    fullDescription:
      "Architected and developed Talk2Active entirely as a solo project — a backend-driven IELTS speaking practice platform designed to support high user concurrency and structured communication workflows. Built using Node.js and modular REST architecture, the system supports authentication, user-generated posts, real-time chat interactions, and progress tracking. Focused on scalable route design, optimized database queries, and efficient resource management to ensure the platform can handle millions of users and posts while maintaining performance and reliability.",
    tags: [
      "EdTech Platform",
      "Backend Architecture",
      "Scalable Systems",
      "Real-Time Communication",
      "Authentication",
      "API Design",
    ],
    metrics: [
      "50,000+ active users without any crashes",
      "JWT-based secure authentication",
      "Optimized for high concurrency",
      "Modular, extensible APIs",
    ],
    image: talk2active,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "JWT",
      "REST APIs",
      "Socket.io",
      "Git",
    ],
    challenges: [
      "Designing architecture for high user concurrency from day one",
      "Ensuring secure and scalable authentication for thousands of users",
      "Managing real-time communication efficiently at scale",
      "Maintaining clean and extensible backend structure solo",
    ],
    solutions: [
      "Implemented modular service-based backend architecture",
      "Used JWT for secure stateless authentication",
      "Optimized query performance and caching strategies",
      "Designed scalable routing and middleware layers",
    ],
    outcomes: [
      "Grown to 50,000+ active users with platform stability maintained",
      "Enabled seamless peer-to-peer language practice at scale",
      "Ensured performance stability under concurrent usage",
      "Established maintainable and extensible backend as sole developer",
    ],
    demo: "https://talk2-active.vercel.app",
    code: undefined,
  },
   {
    title: "File processing kit",
    subtitle: "Browser-Native File Processing Suite",
    featured: false,
    soloBuilt: true,
    description:
      "Built a fully client-side file processing suite with 6 tools — Image Editor, Images to PDF, PDF Merger, PDF Compressor, OCR Scanner, and Image Resizer — all running locally in the browser with zero file uploads.",
    fullDescription:
      "Created FILEKIT PRO, a privacy-first web application that processes PDFs and images entirely in the browser using WebAssembly and Canvas APIs. The suite includes an image editor with real-time filter controls, batch image-to-PDF conversion, PDF merging and compression via pdf-lib, OCR text extraction via Tesseract.js, and an image resizer with social media presets. No files ever leave the user's device.",
    tags: [
      "Browser-Native",
      "Privacy-First",
      "PDF Processing",
      "Image Processing",
      "Open Source",
    ],
    metrics: [
      "6 fully functional tools",
      "Zero server-side processing",
      "Supports PDF, PNG, JPG, WEBP",
      "Social media resize presets",
    ],
    image: filekit,
    technologies: ["React", "jsPDF", "pdf-lib", "Tesseract.js", "Canvas API"],
    challenges: [
      "Working around sandboxed iframe download restrictions",
      "Loading heavy WASM libraries (Tesseract) on demand without blocking UI",
      "Implementing real-time image filter preview using Canvas with rotation",
    ],
    solutions: [
      "Built a safeDownload() helper using window.open() with a floating fallback anchor",
      "Lazy-loaded all third-party libraries via CDN only when the tool is first used",
      "Used requestAnimationFrame-synced canvas redraws for smooth filter previews",
    ],
    outcomes: [
      "Fully offline-capable tool — works without internet after first load",
      "Privacy-first alternative to cloud-based tools like ILovePDF and Smallpdf",
      "Demonstrates deep knowledge of browser APIs and client-side architecture",
    ],
    code: "https://github.com/sagarhasan273/Image-Editor",
    demo: "https://file-processing-kit.vercel.app",
  },
  {
    title: "Lyxa Console",
    subtitle: "Scalable E-commerce Management Platform",
    featured: false,
    soloBuilt: false,
    description:
      "Developed and optimized a scalable e-commerce admin platform supporting high-volume users, orders, and delivery workflows with advanced caching and graph-based route optimization.",
    fullDescription:
      "Engineered core features of the Lyxa Console, a modern e-commerce management platform handling large-scale user activity, order processing, and logistics coordination. Contributed to both frontend and backend systems, focusing on performance optimization, modular architecture, and system reliability. Designed components to support high concurrency, scalable delivery workflows, and seamless administrative control.",
    tags: [
      "E-commerce Systems",
      "Scalable Architecture",
      "Performance Optimization",
      "Logistics Automation",
      "Full-Stack",
    ],
    metrics: [
      "Millions of users and posts handled",
      "70% API latency reduction via caching",
      "Graph-based rider assignment system",
      "90% reduction in deployment failures",
    ],
    image: lyxacover,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Redis",
      "REST APIs",
    ],
    challenges: [
      "Handling high concurrency in delivery and order workflows",
      "Optimizing large API payloads for performance efficiency",
      "Reducing infrastructure costs through resource optimization",
      "Maintaining modular and scalable frontend architecture",
    ],
    solutions: [
      "Implemented caching mechanisms to reduce redundant database queries",
      "Optimized API responses and minimized payload size",
      "Designed graph algorithm-based rider assignment system",
      "Refactored components using reusable design patterns",
    ],
    outcomes: [
      "Improved platform scalability and runtime efficiency",
      "Enhanced user experience through faster load times",
      "Reduced operational overhead and infrastructure costs",
      "Delivered stable enterprise-grade architecture",
    ],
    codeLink: "https://github.com/sagarhasan2024",
    demo: "https://apps.apple.com/us/app/lyxa-shop/id6464550676",
  },
  {
    title: "ds-saga-kit",
    subtitle: "Open Source NPM Library",
    featured: false,
    soloBuilt: true,
    description:
      "Published a modular JavaScript library with optimized implementations of core data structures and algorithms — Min/Max Heap, queues, stacks, sorting and searching algorithms.",
    fullDescription:
      "Created ds-saga-kit, an open-source NPM library focused on delivering optimized and reusable implementations of fundamental data structures and algorithms. Designed with modular architecture and performance efficiency in mind, the library includes Min Heap, Max Heap, queues, stacks, and classic sorting and searching algorithms.",
    tags: [
      "Open Source",
      "Data Structures",
      "Algorithms",
      "NPM Package",
      "Performance",
    ],
    metrics: [
      "Published on NPM",
      "Min/Max Heap implementations",
      "Sorting & searching algorithms",
      "Modular architecture",
    ],
    image: algorithms,
    technologies: ["JavaScript", "Node.js", "NPM", "Jest", "Git"],
    challenges: [
      "Optimizing algorithm implementations for real-world performance",
      "Designing clean, modular public APIs",
      "Ensuring correctness with comprehensive test coverage",
    ],
    solutions: [
      "Benchmarked implementations against standard libraries",
      "Followed functional programming patterns for modularity",
      "Built comprehensive Jest test suites",
    ],
    outcomes: [
      "Published package used by JavaScript developers",
      "Educational resource for DSA learners",
      "Demonstrates deep algorithmic knowledge",
    ],
    code: "https://github.com/sagarhasan273/ds-saga-kit",
    demo: "https://www.npmjs.com/package/ds-saga-kit",
  },
  {
    title: "Video Analyzer / ML",
    subtitle: "Automated Metadata & Motion Extraction",
    featured: false,
    soloBuilt: true,
    description:
      "A specialized computer vision engine that processes raw video to generate structural reports, quantifying motion dynamics and extracting textual context through optical character recognition.",
    fullDescription:
      "Built a robust video analysis suite designed to audit media assets. The system performs three primary forensic tasks: detecting scene changes (Shot Cut Detection), measuring physical activity via Optical Flow (Motion Analysis), and indexing on-screen text via OCR. The final output is a structured JSON manifest used for automated tagging and archival.",
    tags: [
      "Computer Vision",
      "Video Analytics",
      "Media Forensics",
      "Metadata Indexing",
      "Python",
    ],
    metrics: [
      "Automated shot-transition mapping",
      "Dense optical flow motion quantification",
      "High-confidence OCR keyword extraction",
      "Structured JSON metadata generation",
    ],
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Python",
      "OpenCV",
      "Tesseract OCR",
      "NumPy",
      "Farneback Flow",
      "Histogram Correlation",
    ],
    challenges: [
      "Managing computational overhead of dense optical flow on high-resolution streams",
      "Distinguishing between camera pans and actual scene cuts",
      "Handling OCR noise in dynamic, non-static backgrounds",
    ],
    solutions: [
      "Implemented normalized histogram correlation for lighting-invariant cut detection",
      "Optimized OCR sampling rates (Hz) to maintain high processing throughput",
      "Added alphanumeric and length filters to ensure metadata quality",
    ],
    outcomes: [
      "Transformed unstructured video into searchable, machine-readable data",
      "Enabled rapid navigation of long-form video via 'cuts-per-minute' metrics",
      "Streamlined media asset management workflows through automated keyword indexing",
    ],
  },
 
  {
    title: "Autonomous AI Agent",
    subtitle: "OpenDevin-Inspired Engineering System",
    featured: false,
    soloBuilt: false,
    description:
      "Designed an autonomous AI agent system capable of task decomposition, code generation, and execution in sandboxed Docker containers — with checkpoint-based state recovery.",
    fullDescription:
      "Architected an OpenDevin-inspired autonomous AI engineering system capable of task decomposition, iterative reasoning, code generation, and controlled execution within isolated runtime environments.",
    tags: [
      "Autonomous Agents",
      "LLM Planning",
      "Tool Orchestration",
      "Sandboxed Execution",
      "AI Systems",
    ],
    metrics: [
      "Multi-step task decomposition",
      "Isolated Docker execution",
      "Persistent agent state",
      "Automated code generation",
    ],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Python",
      "LangChain",
      "Docker",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "OpenAI API",
      "AsyncIO",
    ],
    challenges: [
      "Designing reliable multi-step planning loops",
      "Ensuring secure execution of AI-generated code",
      "Managing agent state across reasoning cycles",
    ],
    solutions: [
      "Built think-plan-act-observe execution loop with checkpointing",
      "Implemented Docker sandbox isolation",
      "Designed persistent state storage for recovery",
    ],
    outcomes: [
      "Enabled autonomous completion of engineering tasks",
      "Reduced manual intervention via automation",
      "Improved reliability with checkpoint recovery",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #020817 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#38bdf8", letterSpacing: "0.3em" }}
          >
            — Featured Projects
          </p>
          <h2
            className="text-5xl font-black"
            style={{ color: "#e2e8f0", fontFamily: '"Syne", sans-serif' }}
          >
            What I've built
          </h2>
        </div>

        {/* ===== FEATURED: Talk2Active ===== */}
        {featuredProject && (
          <div
            className="mb-10 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.08)",
            }}
            onClick={() => setSelectedProject(featuredProject)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 60px rgba(56, 189, 248, 0.15)";
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(56, 189, 248, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 40px rgba(56, 189, 248, 0.08)";
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(56, 189, 248, 0.3)";
            }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(2,8,23,0.3), transparent 60%)",
                  }}
                />

                {/* Solo built badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                    color: "#fff",
                  }}
                >
                  <Star size={12} fill="currentColor" />
                  Solely Built by Me
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* User count badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit"
                  style={{
                    background: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    color: "#38bdf8",
                  }}
                >
                  <Users size={16} />
                  {featuredProject.userCount} Active Users
                </div>

                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#64748b" }}
                >
                  {featuredProject.subtitle}
                </p>
                <h3
                  className="text-4xl font-black mb-4"
                  style={{ color: "#e2e8f0", fontFamily: '"Syne", sans-serif' }}
                >
                  {featuredProject.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{
                    color: "#94a3b8",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {featuredProject.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies?.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(30,41,59,0.8)",
                        color: "#94a3b8",
                        border: "1px solid rgba(56,189,248,0.08)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 font-semibold text-sm"
                  style={{ color: "#38bdf8" }}
                >
                  View Case Study
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== Other Projects Grid ===== */}
        <div className="grid md:grid-cols-2 gap-5">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.1)",
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(56, 189, 248, 0.3)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(56, 189, 248, 0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(56, 189, 248, 0.1)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(15, 23, 42, 0.7)";
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 60%)",
                  }}
                />
                {project.soloBuilt && (
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(56, 189, 248, 0.15)",
                      border: "1px solid rgba(56,189,248,0.3)",
                      color: "#38bdf8",
                    }}
                  >
                    <Star size={10} fill="currentColor" />
                    Solo
                  </div>
                )}
              </div>

              <div className="p-6">
                <p
                  className="text-xs uppercase tracking-wider mb-1"
                  style={{ color: "#475569" }}
                >
                  {project.subtitle}
                </p>
                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: "#e2e8f0", fontFamily: '"Syne", sans-serif' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "#64748b",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(56,189,248,0.06)",
                        color: "#38bdf8",
                        border: "1px solid rgba(56,189,248,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-4 pt-4"
                  style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}
                >
                  {project.code && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.code as string, "_blank");
                      }}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
                      style={{ color: "#64748b" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#38bdf8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#64748b")
                      }
                    >
                      <Github size={14} /> Code
                    </button>
                  )}
                  {project.demo && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo as string, "_blank");
                      }}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
                      style={{ color: "#64748b" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#38bdf8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#64748b")
                      }
                    >
                      <ExternalLink size={14} /> Live
                    </button>
                  )}
                  <span
                    className="ml-auto flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-300"
                    style={{ color: "#38bdf8" }}
                  >
                    Details <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetail
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
      />
    </section>
  );
}
