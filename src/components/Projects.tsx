import { useState } from "react";
import {
  Box, Button, Chip, Container, Grid, Paper,
  Stack, Typography,
} from "@mui/material";
import { GitHub, OpenInNew, ArrowForward, Star } from "@mui/icons-material";
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
      "Architected and developed Talk2Active entirely as a solo project — a backend-driven IELTS speaking practice platform designed to support high user concurrency and structured communication workflows. Built using Node.js and modular REST architecture, the system supports authentication, user-generated posts, real-time chat interactions, and progress tracking.",
    tags: ["EdTech Platform", "Backend Architecture", "Scalable Systems", "Real-Time Communication", "Authentication", "API Design"],
    metrics: ["50,000+ active users without any crashes", "JWT-based secure authentication", "Optimized for high concurrency", "Modular, extensible APIs"],
    image: talk2active,
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Redis", "JWT", "REST APIs", "Socket.io", "Git"],
    challenges: ["Designing architecture for high user concurrency from day one", "Ensuring secure and scalable authentication for thousands of users", "Managing real-time communication efficiently at scale", "Maintaining clean and extensible backend structure solo"],
    solutions: ["Implemented modular service-based backend architecture", "Used JWT for secure stateless authentication", "Optimized query performance and caching strategies", "Designed scalable routing and middleware layers"],
    outcomes: ["Grown to 50,000+ active users with platform stability maintained", "Enabled seamless peer-to-peer language practice at scale", "Ensured performance stability under concurrent usage", "Established maintainable and extensible backend as sole developer"],
    demo: "https://talk2-active.vercel.app",
    code: undefined,
  },
  {
    title: "File Processing Kit",
    subtitle: "Browser-Native File Processing Suite",
    featured: false,
    soloBuilt: true,
    description: "Built a fully client-side file processing suite with 6 tools — Image Editor, Images to PDF, PDF Merger, PDF Compressor, OCR Scanner, and Image Resizer — all running locally in the browser.",
    fullDescription: "Created FILEKIT PRO, a privacy-first web application that processes PDFs and images entirely in the browser using WebAssembly and Canvas APIs. The suite includes an image editor with real-time filter controls, batch image-to-PDF conversion, PDF merging and compression via pdf-lib, OCR text extraction via Tesseract.js, and an image resizer with social media presets.",
    tags: ["Browser-Native", "Privacy-First", "PDF Processing", "Image Processing", "Open Source"],
    metrics: ["6 fully functional tools", "Zero server-side processing", "Supports PDF, PNG, JPG, WEBP", "Social media resize presets"],
    image: filekit,
    technologies: ["React", "jsPDF", "pdf-lib", "Tesseract.js", "Canvas API"],
    challenges: ["Working around sandboxed iframe download restrictions", "Loading heavy WASM libraries (Tesseract) on demand without blocking UI", "Implementing real-time image filter preview using Canvas with rotation"],
    solutions: ["Built a safeDownload() helper using window.open() with a floating fallback anchor", "Lazy-loaded all third-party libraries via CDN only when the tool is first used", "Used requestAnimationFrame-synced canvas redraws for smooth filter previews"],
    outcomes: ["Fully offline-capable tool — works without internet after first load", "Privacy-first alternative to cloud-based tools like ILovePDF and Smallpdf", "Demonstrates deep knowledge of browser APIs and client-side architecture"],
    code: "https://github.com/sagarhasan273/Image-Editor",
    demo: "https://file-processing-kit.vercel.app",
  },
  {
    title: "Lyxa Console",
    subtitle: "Scalable E-commerce Management Platform",
    featured: false,
    soloBuilt: false,
    description: "Developed and optimized a scalable e-commerce admin platform supporting high-volume users, orders, and delivery workflows with advanced caching and graph-based route optimization.",
    fullDescription: "Engineered core features of the Lyxa Console, a modern e-commerce management platform handling large-scale user activity, order processing, and logistics coordination.",
    tags: ["E-commerce Systems", "Scalable Architecture", "Performance Optimization", "Logistics Automation", "Full-Stack"],
    metrics: ["Millions of users and posts handled", "70% API latency reduction via caching", "Graph-based rider assignment system", "90% reduction in deployment failures"],
    image: lyxacover,
    technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "Express", "MongoDB", "MySQL", "Redis", "REST APIs"],
    challenges: ["Handling high concurrency in delivery and order workflows", "Optimizing large API payloads for performance efficiency"],
    solutions: ["Implemented caching mechanisms to reduce redundant database queries", "Designed graph algorithm-based rider assignment system"],
    outcomes: ["Improved platform scalability and runtime efficiency", "Enhanced user experience through faster load times"],
    code: undefined,
    demo: "https://apps.apple.com/us/app/lyxa-shop/id6464550676",
  },
  {
    title: "ds-saga-kit",
    subtitle: "Open Source NPM Library",
    featured: false,
    soloBuilt: true,
    description: "Published a modular JavaScript library with optimized implementations of core data structures and algorithms — Min/Max Heap, queues, stacks, sorting and searching algorithms.",
    fullDescription: "Created ds-saga-kit, an open-source NPM library focused on delivering optimized and reusable implementations of fundamental data structures and algorithms.",
    tags: ["Open Source", "Data Structures", "Algorithms", "NPM Package", "Performance"],
    metrics: ["Published on NPM", "Min/Max Heap implementations", "Sorting & searching algorithms", "Modular architecture"],
    image: algorithms,
    technologies: ["JavaScript", "Node.js", "NPM", "Jest", "Git"],
    challenges: ["Optimizing algorithm implementations for real-world performance", "Designing clean, modular public APIs"],
    solutions: ["Wrote benchmarked implementations for each data structure", "Designed clean public API surface with tree-shakeable exports"],
    outcomes: ["Publicly available on NPM registry", "Demonstrates deep understanding of CS fundamentals"],
    code: "https://github.com/sagarhasan273/ds-saga-kit",
    demo: "https://www.npmjs.com/package/ds-saga-kit",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#070C18" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}>
            Projects
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700, color: "#F9FAFB", mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Things I've{" "}
            <Box component="span" sx={{ color: "#007AFF" }}>built</Box>
          </Typography>
        </Box>

        {/* Featured project */}
        <Paper
          onClick={() => setSelected(featured)}
          sx={{
            mb: 4, borderRadius: "20px", overflow: "hidden", cursor: "pointer",
            bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
            transition: "all 0.22s ease",
            "&:hover": { border: "1px solid rgba(0,122,255,0.3)", transform: "translateY(-3px)" },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Box
                component="img"
                src={featured.image}
                alt={featured.title}
                sx={{ width: "100%", height: { xs: 220, md: "100%" }, objectFit: "cover", minHeight: 280 }}
              />
              <Box sx={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, rgba(7,12,24,0.95))",
                display: { xs: "none", md: "block" },
              }} />
              <Chip
                icon={<Star sx={{ fontSize: "12px !important", color: "#F9FAFB !important" }} />}
                label="Solely Built"
                size="small"
                sx={{ position: "absolute", top: 16, left: 16, bgcolor: "#007AFF", color: "#fff", fontWeight: 700, fontSize: "0.72rem" }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography sx={{ fontSize: "0.75rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                {featured.subtitle}
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: "1.6rem", color: "#F9FAFB", mb: 1, fontFamily: '"SF Pro Display", sans-serif' }}>
                {featured.title}
              </Typography>
              <Chip
                label="50,000+ Users"
                size="small"
                sx={{ mb: 2, alignSelf: "flex-start", bgcolor: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)", fontWeight: 700 }}
              />
              <Typography sx={{ fontSize: "0.88rem", color: "#9CA3AF", lineHeight: 1.7, mb: 3 }}>
                {featured.description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {featured.technologies?.slice(0, 6).map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ bgcolor: "rgba(255,255,255,0.04)", color: "#6B7280", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.72rem" }} />
                ))}
              </Box>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "#007AFF" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "0.85rem" }}>View Case Study</Typography>
                <ArrowForward sx={{ fontSize: 16 }} />
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Other projects grid */}
        <Grid container spacing={3}>
          {others.map((p, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper
                onClick={() => setSelected(p)}
                sx={{
                  borderRadius: "16px", overflow: "hidden", cursor: "pointer",
                  bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.22s ease",
                  "&:hover": { border: "1px solid rgba(0,122,255,0.3)", transform: "translateY(-3px)" },
                }}
              >
                <Box sx={{ position: "relative", height: 180 }}>
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Box sx={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(7,12,24,0.92) 0%, transparent 55%)",
                  }} />
                  {p.soloBuilt && (
                    <Chip
                      label="Solo"
                      size="small"
                      sx={{ position: "absolute", top: 12, left: 12, bgcolor: "rgba(0,122,255,0.15)", color: "#60A5FA", border: "1px solid rgba(0,122,255,0.3)", fontSize: "0.7rem", fontWeight: 700 }}
                    />
                  )}
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: "0.72rem", color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                    {p.subtitle}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#F9FAFB", mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.65, mb: 2 }}>
                    {p.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                    {p.tags.slice(0, 3).map((t) => (
                      <Chip key={t} label={t} size="small" sx={{ bgcolor: "rgba(0,122,255,0.06)", color: "#60A5FA", border: "1px solid rgba(0,122,255,0.15)", fontSize: "0.7rem" }} />
                    ))}
                  </Box>

                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    spacing={2}
                  >
                    {p.code && (
                      <Button
                        size="small"
                        startIcon={<GitHub sx={{ fontSize: 14 }} />}
                        onClick={(e) => { e.stopPropagation(); window.open(p.code!, "_blank"); }}
                        sx={{ color: "#6B7280", textTransform: "none", fontSize: "0.78rem", minWidth: 0, p: 0, "&:hover": { color: "#007AFF", background: "none" } }}
                      >
                        Code
                      </Button>
                    )}
                    {p.demo && (
                      <Button
                        size="small"
                        startIcon={<OpenInNew sx={{ fontSize: 14 }} />}
                        onClick={(e) => { e.stopPropagation(); window.open(p.demo!, "_blank"); }}
                        sx={{ color: "#6B7280", textTransform: "none", fontSize: "0.78rem", minWidth: 0, p: 0, "&:hover": { color: "#007AFF", background: "none" } }}
                      >
                        Live
                      </Button>
                    )}
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ ml: "auto !important", color: "#007AFF" }}>
                      <Typography sx={{ fontSize: "0.78rem", fontWeight: 600 }}>Details</Typography>
                      <ArrowForward sx={{ fontSize: 13 }} />
                    </Stack>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ProjectDetail isOpen={!!selected} onClose={() => setSelected(null)} data={selected} />
    </Box>
  );
}