import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Terminal,
} from "lucide-react";
import { Box, Chip, Container, Paper, Stack, Typography } from "@mui/material";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript (ES6+, async/await, closures, modules)", "TypeScript", "Python", "C++", "MySQL"],
    color: "#007AFF",
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [
      "Node.js",
      "MySQL",
      "SQL (queries, JOINs, indexing, transactions, RDBBMS)",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React",  "JavaScript Libraries","Redux", "Tailwind CSS",  "Material UI"],
    color: "#F59E0B",
  },
  {
    icon: Terminal,
    title: "Tools & Practices",
    skills: [
      "Git",
      "Linux",
      "Microservices",
      "System Design",
      "Design Patterns",
      "Computer Networks",
    ],
    color: "#EC4899",
  },
  {
    icon: Smartphone,
    title: "Mobile & Other",
    skills: ["React Native", "WebRTC", "WebSockets", "JWT", "OAuth",  "Socket.io"],
    color: "#06B6D4",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Docker", "CI/CD", "GCP"],
    color: "#8B5CF6",
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#070C18",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}
          >
            Technical Skills
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#F9FAFB",
              mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Tools I build{" "}
            <Box component="span" sx={{ color: "#007AFF" }}>
              with
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gridTemplateRows: "1fr",
            gap: 1.5,
          }}
        >
          {skillCategories.map((cat, i) => (
            <Paper
              key={i}
              sx={{
                p: 3,
                borderRadius: "16px",
                height: "100%",
                bgcolor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.22s ease",
                "&:hover": {
                  border: `1px solid ${cat.color}30`,
                  bgcolor: `${cat.color}06`,
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 3 }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    bgcolor: `${cat.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <cat.icon size={20} color={cat.color} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#F9FAFB",
                    fontSize: "0.95rem",
                  }}
                >
                  {cat.title}
                </Typography>
              </Stack>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {cat.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.04)",
                      color: "#9CA3AF",
                      border: "1px solid rgba(255,255,255,0.07)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      height: 28,
                      "&:hover": {
                        bgcolor: `${cat.color}12`,
                        color: cat.color,
                        borderColor: `${cat.color}30`,
                      },
                      transition: "all 0.15s",
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Footer accent */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#374151",
              letterSpacing: "0.1em",
            }}
          >
            CONTINUOUSLY EXPANDING · ALWAYS LEARNING
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
