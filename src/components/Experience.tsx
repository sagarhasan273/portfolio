import { useState } from "react";
import {
  Box,  Chip, Container, Divider, Grid, Paper,
  Stack, Typography,
} from "@mui/material";
import { WorkOutline, EmojiEvents, ChevronRight } from "@mui/icons-material";
import ExperienceDetail from "./ExperienceDetail";

const experiences = [
  {
    company: "Lyxa S.A.L (formerly KadriTech AB)",
    role: "Software Engineer",
    period: "06/2023 – Present",
    type: "Full-time",
    description:
      "Built and scaled backend systems handling exponential user growth across Lyxa's e-commerce and logistics platform.",
    achievements: [
      "Designed and deployed a graph-based route optimization engine for rider assignment as part of a full-stack delivery platform, integrating algorithmic decision-making with real-time order tracking.",
      "Optimized REST API performance by 20% through database query optimization, response caching, and implementing pagination strategies.",
      "Designed and deployed a rider assignment system using graph algorithms to optimize real-time delivery routes.",
      "Implemented data caching and optimized database access patterns, significantly reducing response times and bandwidth usage.",
      "Applied Test-Driven Development (TDD) practices to deliver high-quality, maintainable, and reliable code.",
      "Fixed critical bugs [Over 500+] and collaborated across teams to maintain code quality.",
      "Experience building scalable backend services with Node.js and REST APIs.",
      "Collaborated closely with product, design, and QA teams in Agile sprints for high-quality feature delivery.",
    ],
  },
];

const highlights = [
  { title: "Open Source Contributions", desc: "3 contributions to major ML/LLM projects including JavaScript and Python libraries" },
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

                  <Typography sx={{ fontSize: "0.85rem", color: "#6B7280", mb: 3, lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {exp.achievements.slice(0, 5).map((a, j) => (
                      <Stack key={j} direction="row" spacing={1.5} alignItems="flex-start">
                        <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#007AFF", mt: "6px", flexShrink: 0 }} />
                        <Typography sx={{ fontSize: "0.83rem", color: "#9CA3AF", lineHeight: 1.6 }}>{a}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "#007AFF" }}>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>View all achievements</Typography>
                    <ChevronRight sx={{ fontSize: 16 }} />
                  </Stack>
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
                    <Typography sx={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.6 }}>{h.desc}</Typography>
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
                <Typography sx={{ fontSize: "0.7rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>
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