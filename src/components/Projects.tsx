import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const projects = [
  {
    title: 'Distributed Task Scheduler',
    description: 'Built a fault-tolerant distributed task scheduling system handling 10M+ tasks daily. Implemented using Go, Redis, and PostgreSQL with horizontal scaling capabilities.',
    fullDescription: 'Engineered a highly scalable, fault-tolerant task scheduling system designed to handle millions of concurrent tasks with guaranteed delivery semantics. The system utilizes consistent hashing for load distribution, implements comprehensive retry logic with exponential backoff, and maintains state durability through persistent storage.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Microservices'],
    metrics: ['99.99% uptime', '10M+ tasks/day', '50ms avg latency'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'gRPC'],
    challenges: ['Handling distributed consensus across nodes', 'Maintaining strong consistency under failures', 'Scaling to 10M+ tasks/day without bottlenecks'],
    solutions: ['Implemented Raft consensus algorithm', 'Used write-ahead logging for durability', 'Built multi-tier caching layer'],
    outcomes: ['Achieved 99.99% uptime across 6-month period', 'Reduced task latency from 200ms to 50ms', 'Enabled 10x capacity increase']
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'Developed a WebSocket-based collaboration tool with operational transformation for concurrent editing. Supports 50K+ simultaneous users with sub-100ms latency.',
    fullDescription: 'Built a real-time collaboration platform enabling multiple users to edit documents simultaneously with conflict-free convergence. Implemented operational transformation algorithm to handle concurrent edits, optimistic locking for consistency, and WebSocket for low-latency communication.',
    tags: ['React', 'Node.js', 'WebSocket', 'Redis', 'AWS'],
    metrics: ['50K+ concurrent users', '<100ms latency', '1M+ documents'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'AWS', 'PostgreSQL', 'Socket.io'],
    challenges: ['Implementing conflict-free concurrent editing', 'Maintaining sub-100ms latency globally', 'Handling network partitions gracefully'],
    solutions: ['Operational transformation with vector clocks', 'Regional WebSocket gateways', 'Local-first architecture with sync'],
    outcomes: ['Supported 50K concurrent users', 'Reduced edit latency to 85ms average', 'Created industry-standard collaboration model']
  },
  {
    title: 'ML-Powered Search Engine',
    description: 'Created a semantic search engine using transformer models and vector databases. Achieved 40% improvement in search relevance over traditional keyword-based systems.',
    fullDescription: 'Developed a neural search engine leveraging pre-trained transformer models to encode documents and queries into semantic vectors. Integrated with Elasticsearch for hybrid search capabilities, combining keyword matching with semantic similarity for superior relevance.',
    tags: ['Python', 'TensorFlow', 'Elasticsearch', 'FastAPI', 'React'],
    metrics: ['40% better relevance', '200ms query time', '500M+ documents'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'FastAPI', 'React', 'ONNX', 'Redis'],
    challenges: ['Encoding 500M documents efficiently', 'Real-time inference at scale', 'Maintaining semantic relevance quality'],
    solutions: ['Batch processing with ONNX Runtime', 'GPU acceleration for embeddings', 'Hierarchical indexing strategy'],
    outcomes: ['Improved relevance scores by 40%', 'Reduced query latency to 200ms', 'Achieved 95% user satisfaction']
  },
  {
    title: 'High-Performance CDN',
    description: 'Architected a global content delivery network with edge caching and smart routing. Reduced load times by 70% across 150+ countries with 99.99% availability.',
    fullDescription: 'Designed and deployed a global CDN infrastructure with edge servers in 150+ countries, implementing intelligent routing algorithms, geo-location based content delivery, and predictive prefetching to minimize latency.',
    tags: ['Node.js', 'Nginx', 'AWS CloudFront', 'Terraform', 'Kubernetes'],
    metrics: ['70% faster loads', '150+ countries', '99.99% uptime'],
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Nginx', 'AWS CloudFront', 'Terraform', 'Kubernetes', 'BGP', 'DNS'],
    challenges: ['Global distribution and sync', 'Cache invalidation complexity', 'Latency optimization'],
    solutions: ['Geo-replicated edge servers', 'Smart cache purging', 'BGP anycast routing'],
    outcomes: ['Reduced global latency by 70%', 'Achieved 99.99% availability', 'Saved 40% on bandwidth costs']
  },
  {
    title: 'LangChain',
    description: 'Built a real-time analytics platform processing 100M+ events daily. Features custom visualization engine and anomaly detection using machine learning.',
    fullDescription: 'Created a comprehensive analytics platform enabling developers to track application metrics, user behavior, and system performance. Processes 100M+ events daily with real-time processing, custom dashboards, and ML-powered anomaly detection.',
    tags: ['Python', 'TypeScript (JS version is very active)', 'Vector DBs', 'OpenAI', 'OSS LLMs'],
    metrics: ['100M+ events/day', 'Real-time processing', 'Sub-second queries'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Kafka', 'ClickHouse', 'Python', 'Apache Airflow', 'GraphQL'],
    challenges: ['Real-time processing at massive scale', 'Sub-second query performance', 'Anomaly detection accuracy'],
    solutions: ['Strong backend + system design focus', 'Complex architecture problems', 'JS/TS contributions are in high demand'],
    outcomes: ['Processes 100M events/day', 'Query response time under 1 second', 'Detects 95% of anomalies']
  },
  {
    title: 'Container Orchestration Dashboard',
    description: 'Designed an intuitive dashboard for managing Kubernetes clusters at scale. Simplified operations for teams managing 1000+ microservices across multiple clouds.',
    fullDescription: 'Built a comprehensive Kubernetes management dashboard providing visibility into cluster health, workload distribution, and resource utilization across multiple cloud providers. Features real-time monitoring, automated scaling, and intelligent deployment recommendations.',
    tags: ['React', 'Go', 'Kubernetes', 'Prometheus', 'Grafana'],
    metrics: ['1000+ services', 'Multi-cloud', '5min deployment time'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Go', 'Kubernetes', 'Prometheus', 'Grafana', 'etcd', 'gRPC'],
    challenges: ['Managing 1000+ microservices', 'Multi-cloud orchestration', 'Real-time resource monitoring'],
    solutions: ['Kubernetes API for management', 'Prometheus for metrics', 'Custom scheduling algorithms'],
    outcomes: ['Reduced deployment time to 5min', 'Enabled 1000+ service management', 'Achieved 99.95% uptime']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of impactful projects demonstrating expertise in scalable systems,
            modern architectures, and user-centric design
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
                    <span key={metricIndex} className="text-slate-500 font-medium">
                      • {metric}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <button onClick={(e) => { e.stopPropagation(); }} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    <Github size={18} />
                    Code
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); }} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); }} className="ml-auto flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 group/btn">
                    Details
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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
