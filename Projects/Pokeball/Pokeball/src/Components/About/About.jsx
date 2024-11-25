import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const About = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          marginTop: "80px",
          p: 4,
          maxWidth: 600,
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#3f51b5",
            fontFamily: "Arial, sans-serif",
          }}
        >
          About Pokémon Explorer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: "#555",
            fontSize: "1.1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Welcome to <strong>Pokémon Explorer</strong>! This site is your
          ultimate guide to the world of Pokémon. Here, you can explore
          information about all your favorite Pokémon, including their
          abilities, stats, and evolution paths.
          <br />
          <br />
          Whether you're a dedicated trainer or a casual fan, you'll love how
          easy it is to search for Pokémon by name, type, or generation. With
          real-time updates and a sleek design, Pokémon Explorer offers a fun
          and interactive experience for all ages.
          <br />
          <br />
          Start your journey today and become the ultimate Pokémon master!
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
