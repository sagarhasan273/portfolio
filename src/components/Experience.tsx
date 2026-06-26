import { useState } from "react";
import {
  Box,  Chip, Container, Divider, Grid, Paper,
  Stack, Typography,
} from "@mui/material";
import { WorkOutline, EmojiEvents } from "@mui/icons-material";
import ExperienceDetail from "./ExperienceDetail";

const experiences = [
  {
    company: "LYXA S.A.L",
    role: "Software Engineer",
    period: "08/2024 – Present",
    location: "Gulshan 1, Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Worked on backend systems for e-commerce and logistics platforms, improving performance and delivery efficiency.",
    achievements: [
      "Debugged and resolved 25+ UI bugs and cross-browser compatibility issues, ensuring consistent rendering across Chrome, Firefox, and Safari",
      "Built and maintained interactive frontend features using React and TypeScript, delivering 5+ features on schedule with zero critical bugs",
      "Assisted in debugging and improving system performance through structured issue tracking, identifying 15+ performance bottlenecks",
      "Identified, reproduced, and resolved critical bugs in Console and backend services, reducing system downtime by 40%",
      "Wrote reusable and maintainable code following SOLID principles, improving system stability and performance by 25%",
      "Collaborated with cross-functional teams including product managers, QA engineers, and backend developers to improve product quality and user experience",
      "Participated in daily stand-ups, sprint planning, and retrospective meetings, contributing to team efficiency improvements"
    ],
  },
  {
    company: "LYXA S.A.L",
    role: "Software Engineer Intern",
    period: "02/2024 – 07/2024",
    location: "Gulshan 1, Dhaka, Bangladesh",
    type: "Internship",
    description:
      "Contributed to backend services and system stability through debugging and performance improvements.",
    achievements: [
      "Designed and developed a real-time order tracking dashboard using React and TypeScript with WebSocket integration, enabling live shipment tracking for 1000+ concurrent users",
      "Implemented Socket.io client for real-time bidirectional communication, achieving < 200ms latency for status updates",
      "Built a scalable notification system supporting email, SMS, and push notifications, achieving 99.5% delivery rate",
      "Created responsive UI components with Material-UI that adapt to mobile, tablet, and desktop views",
      "Optimized rendering performance with React.memo and virtualization, handling 500+ simultaneous notifications without frame drops",
      "Implemented Redux Toolkit for state management with RTK Query for efficient API caching",
      "Integrated with backend APIs and WebSocket services, implementing retry logic and graceful degradation",
    ],
  },
  {
    company: "Daffodil International University (DIU)",
    role: "Software Engineer Intern (Project-Based)",
    period: "07/2023 – 12/2023",
    location: "Ashulia, Savar, Dhaka, Bangladesh",
    type: "Project-based Internship",
    description:
      "Designed and developed Algorithms Visualizer, a React-based educational platform translating complex data structures and algorithms concepts into interactive visual experiences.",
    achievements: [
      "Designed and developed Algorithms Visualizer using React, Canvas API, and SVG, enabling interactive visualization of 15+ algorithms and data structures",
      "Built comprehensive visualizations including sorting algorithms (Bubble, Merge, Quick, Heap), pathfinding (Dijkstra, BFS, DFS, A*), data structures (Arrays, Stacks, Queues, Trees), and graph traversals",
      "Implemented animation controls including speed control, pause/resume, and step-by-step execution using React state and hooks, achieving 60fps smooth animations",
      "Translated complex DSA concepts into interactive visual experiences, improving student comprehension by 40% based on user feedback",
      "Optimized rendering using requestAnimationFrame and Canvas API, handling large datasets without performance degradation",
      "Created educational content and documentation to accompany visualizations",
      "Presented project at university tech showcase and received departmental recognition",
      "Used by 200+ students as supplementary learning material for DSA courses",
      "Implemented responsive design ensuring accessibility across devices"
    ],
    technologies: [
      "React.js",
      "Canvas API",
      "SVG",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Git"
    ],
    projectImpact: [
      "200+ student users",
      "40% improvement in comprehension based on feedback",
      "Departmental recognition for educational innovation",
      "Used as supplementary teaching material in DSA courses"
    ]
  }
];

const highlights = [
  { title: "Open Source Contributions", desc: "Contributing to JavaScript libraries like lodash and moment.js" },
  { title: "Technical Writing", desc: "Published 200+ articles on Algorithms at LeetCode with 21.5K+ readers" },
  { title: "Certifications", desc: "Collaboration Ninja Certified at Lyxa" },
  { title: "Lyxa Contributions", desc: "500+ bugs fixed and 20+ features implemented across Lyxa's product suite" },
];

export default function Experience() {
  const [selected, setSelected] = useState<typeof experiences[0] | null>(null);

  return (
    <Box
      id="experience"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#050A14", position: "relative" }}
    >
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.3), transparent)",
      }} />

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}>
            Work History
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700, color: "#F9FAFB", mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Experience &{" "}
            <Box component="span" sx={{ color: "#007AFF" }}>Achievements</Box>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Timeline */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              {experiences.map((exp, i) => (
                <Paper
                  key={i}
                  onClick={() => setSelected(exp)}
                  sx={{
                    p: 4, borderRadius: "16px", cursor: "pointer",
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.22s ease",
                    "&:hover": {
                      border: "1px solid rgba(0,122,255,0.3)",
                      bgcolor: "rgba(0,122,255,0.04)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "1.15rem", color: "#F9FAFB", mb: 0.5 }}>
                        {exp.role}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <WorkOutline sx={{ fontSize: 14, color: "#007AFF" }} />
                        <Typography sx={{ fontSize: "0.85rem", color: "#007AFF", fontWeight: 500 }}>
                          {exp.company}
                        </Typography>
                      </Stack>
                    </Box>
                    <Stack alignItems="flex-end" spacing={0.5} sx={{ flexShrink: 0, ml: 2 }}>
                      <Chip
                        label={exp.period}
                        size="small"
                        sx={{ bgcolor: "rgba(0,122,255,0.1)", color: "#60A5FA", border: "1px solid rgba(0,122,255,0.2)", fontSize: "0.72rem", fontWeight: 600 }}
                      />
                      <Typography sx={{ fontSize: "0.72rem", color: "#4B5563" }}>{exp.type}</Typography>
                    </Stack>
                  </Stack>

                  <Typography sx={{ fontSize: "0.85rem", color: "#b1b3b8", mb: 3, lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {exp.achievements.slice(0, 5).map((a, j) => (
                      <Stack key={j} direction="row" spacing={1.5} alignItems="flex-start">
                        <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#007AFF", mt: "6px", flexShrink: 0 }} />
                        <Typography sx={{ fontSize: "0.83rem", color: "#a8abb1", lineHeight: 1.6 }}>{a}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {/* <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "#007AFF" }}>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>View all achievements</Typography>
                    <ChevronRight sx={{ fontSize: 16 }} />
                  </Stack> */}
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3.5, borderRadius: "16px", position: "sticky", top: 88,
                bgcolor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                <EmojiEvents sx={{ color: "#F59E0B", fontSize: 22 }} />
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#F9FAFB" }}>Highlights</Typography>
              </Stack>

              <Stack spacing={3} divider={<Divider sx={{ borderColor: "rgba(255,255,255,0.05)" }} />}>
                {highlights.map((h, i) => (
                  <Box key={i}>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: "#E5E7EB", mb: 0.5 }}>{h.title}</Typography>
                    <Typography sx={{ fontSize: "0.78rem", color: "#8d9097", lineHeight: 1.6 }}>{h.desc}</Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 4, p: 3, borderRadius: "12px", textAlign: "center",
                  bgcolor: "rgba(0,122,255,0.06)", border: "1px solid rgba(0,122,255,0.15)",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "2.5rem", color: "#007AFF" }}>2+</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#9da1aa", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Years of Professional Experience
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <ExperienceDetail
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        data={selected}
      />
    </Box>
  );
}