import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 5, bgcolor: "#030710", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={3}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700, fontSize: "1.2rem", color: "#F9FAFB",
                fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
                mb: 0.5,
              }}
            >
              SH<Box component="span" sx={{ color: "#007AFF" }}>.</Box>
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>
              Built with React, TypeScript & Material UI
            </Typography>
            <Typography sx={{ fontSize: "0.72rem", color: "#1F2937", mt: 0.3 }}>
              © {new Date().getFullYear()} Sagar Hasan. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            {[
              { icon: <GitHub fontSize="small" />, href: "https://github.com/sagarhasan273", label: "GitHub" },
              { icon: <LinkedIn fontSize="small" />, href: "https://linkedin.com/in/sagar-hasan-677b5b1ba", label: "LinkedIn" },
              { icon: <Mail fontSize="small" />, href: "mailto:sagarhasan273@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  color: "#4B5563", borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  p: 1,
                  "&:hover": {
                    color: "#007AFF",
                    borderColor: "rgba(0,122,255,0.3)",
                    bgcolor: "rgba(0,122,255,0.06)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}