import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const projects = [

  {
    title: "Real-Time Collaboration Platform",
    description:
      "Developed a WebSocket-based collaboration tool with operational transformation for concurrent editing. Supports 50K+ simultaneous users with sub-100ms latency.",
    fullDescription:
      "Built a real-time collaboration platform enabling multiple users to edit documents simultaneously with conflict-free convergence. Implemented operational transformation algorithm to handle concurrent edits, optimistic locking for consistency, and WebSocket for low-latency communication.",
    tags: ["React", "Node.js", "WebSocket", "Redis", "AWS"],
    metrics: ["50K+ concurrent users", "<100ms latency", "1M+ documents"],
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Redis",
      "AWS",
      "PostgreSQL",
      "Socket.io",
    ],
    challenges: [
      "Implementing conflict-free concurrent editing",
      "Maintaining sub-100ms latency globally",
      "Handling network partitions gracefully",
    ],
    solutions: [
      "Operational transformation with vector clocks",
      "Regional WebSocket gateways",
      "Local-first architecture with sync",
    ],
    outcomes: [
      "Supported 50K concurrent users",
      "Reduced edit latency to 85ms average",
      "Created industry-standard collaboration model",
    ],
  },
  {
    title: "ML-Powered Search Engine",
    description:
      "Created a semantic search engine using transformer models and vector databases. Achieved 40% improvement in search relevance over traditional keyword-based systems.",
    fullDescription:
      "Developed a neural search engine leveraging pre-trained transformer models to encode documents and queries into semantic vectors. Integrated with Elasticsearch for hybrid search capabilities, combining keyword matching with semantic similarity for superior relevance.",
    tags: ["Python", "TensorFlow", "Elasticsearch", "FastAPI", "React"],
    metrics: ["40% better relevance", "200ms query time", "500M+ documents"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Python",
      "TensorFlow",
      "Elasticsearch",
      "FastAPI",
      "React",
      "ONNX",
      "Redis",
    ],
    challenges: [
      "Encoding 500M documents efficiently",
      "Real-time inference at scale",
      "Maintaining semantic relevance quality",
    ],
    solutions: [
      "Batch processing with ONNX Runtime",
      "GPU acceleration for embeddings",
      "Hierarchical indexing strategy",
    ],
    outcomes: [
      "Improved relevance scores by 40%",
      "Reduced query latency to 200ms",
      "Achieved 95% user satisfaction",
    ],
  },
  {
    title: "High-Performance CDN",
    description:
      "Architected a global content delivery network with edge caching and smart routing. Reduced load times by 70% across 150+ countries with 99.99% availability.",
    fullDescription:
      "Designed and deployed a global CDN infrastructure with edge servers in 150+ countries, implementing intelligent routing algorithms, geo-location based content delivery, and predictive prefetching to minimize latency.",
    tags: ["Node.js", "Nginx", "AWS CloudFront", "Terraform", "Kubernetes"],
    metrics: ["70% faster loads", "150+ countries", "99.99% uptime"],
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Node.js",
      "Nginx",
      "AWS CloudFront",
      "Terraform",
      "Kubernetes",
      "BGP",
      "DNS",
    ],
    challenges: [
      "Global distribution and sync",
      "Cache invalidation complexity",
      "Latency optimization",
    ],
    solutions: [
      "Geo-replicated edge servers",
      "Smart cache purging",
      "BGP anycast routing",
    ],
    outcomes: [
      "Reduced global latency by 70%",
      "Achieved 99.99% availability",
      "Saved 40% on bandwidth costs",
    ],
  },
  {
    title: "Enterprise AI Platform (LangChain-Based)",

    description:
      "Architected and delivered a production-grade AI platform leveraging LangChain for enterprise LLM orchestration, Retrieval-Augmented Generation (RAG), and intelligent agent workflows.",

    fullDescription:
      "Led the design and implementation of a scalable enterprise AI platform built on LangChain to orchestrate large language model workflows, Retrieval-Augmented Generation (RAG), and structured tool-calling agents. The system integrates OpenAI and open-source LLMs with vector-based semantic retrieval, conversational state management, and real-time response streaming. Designed with a modular, service-oriented architecture to support extensibility, performance optimization, and enterprise-grade reliability.",

    tags: [
      "LangChain",
      "Python",
      "LLM Orchestration",
      "RAG Architecture",
      "Vector Databases",
      "OpenAI",
      "Agent Systems",
    ],

    metrics: [
      "Sub-second semantic retrieval",
      "Low-latency streaming responses",
      "Modular and extensible AI service architecture",
    ],

    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",

    technologies: [
      "Python",
      "LangChain",
      "FastAPI",
      "OpenAI API",
      "ChromaDB",
      "FAISS",
      "Redis",
      "Docker",
      "TypeScript",
      "React",
    ],

    challenges: [
      "Designing a scalable and maintainable RAG architecture",
      "Ensuring deterministic tool execution within agent workflows",
      "Managing conversational state across distributed services",
      "Minimizing latency in retrieval and LLM inference pipelines",
    ],

    solutions: [
      "Implemented vector-based semantic search with optimized embedding pipelines",
      "Designed structured tool interfaces with strict input/output validation",
      "Integrated short-term and retriever-based long-term memory strategies",
      "Enabled token-level streaming using callback handlers and WebSocket delivery",
    ],

    outcomes: [
      "Improved response accuracy through contextual grounding",
      "Reduced hallucination rates via enterprise-grade RAG design",
      "Enabled rapid feature expansion through modular agent architecture",
      "Delivered a production-ready AI backend aligned with enterprise standards",
    ],
  },

  {
    title: "Autonomous AI Engineering System (OpenDevin-Inspired)",

    description:
      "Designed and implemented an autonomous AI agent system capable of planning, writing, and executing code within a secure sandboxed environment.",

    fullDescription:
      "Architected an OpenDevin-inspired autonomous AI engineering system capable of task decomposition, iterative reasoning, code generation, and controlled execution within isolated runtime environments. The platform integrates large language models with structured planning modules, tool orchestration layers, and sandboxed execution using containerized infrastructure. Designed to support multi-step workflows, failure recovery, state persistence, and secure command execution, enabling reliable AI-driven software task automation.",

    tags: [
      "Autonomous Agents",
      "LLM Planning",
      "Tool Orchestration",
      "Sandboxed Execution",
      "Multi-Step Reasoning",
      "AI Systems Engineering",
    ],

    metrics: [
      "Multi-step task decomposition",
      "Isolated container-based execution",
      "Persistent agent state management",
      "Automated code generation & validation",
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
      "TypeScript",
      "WebSockets",
    ],

    challenges: [
      "Designing reliable multi-step autonomous planning loops",
      "Ensuring secure execution of AI-generated code",
      "Managing agent state across iterative reasoning cycles",
      "Implementing failure recovery and retry mechanisms",
    ],

    solutions: [
      "Built a structured think-plan-act-observe execution loop with checkpointing",
      "Implemented Docker-based sandbox isolation for secure command execution",
      "Designed persistent state storage for task memory and recovery",
      "Added structured tool interfaces with validation and guarded execution",
    ],

    outcomes: [
      "Enabled autonomous completion of multi-step engineering tasks",
      "Reduced manual intervention through agent-driven workflow automation",
      "Improved reliability with checkpoint-based recovery mechanisms",
      "Delivered a scalable foundation for AI-powered development automation",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of impactful projects demonstrating expertise in
            scalable systems, modern architectures, and user-centric design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="text-slate-500 font-medium"
                    >
                      • {metric}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    <Github size={18} />
                    Code
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="ml-auto flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 group/btn"
                  >
                    Details
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectDetail
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          data={selectedProject}
        />
      </div>
    </section>
  );
}
