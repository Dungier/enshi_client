"use client";

import { PaletteMode, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
    gray: Palette["primary"];
    shadow: Palette["primary"];
    toggleButton: Palette["primary"];
  }

  interface PaletteOptions {
    purple?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    shadow?: PaletteOptions["primary"];
    toggleButton?: PaletteOptions["primary"];
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: "var(--montserrat-font)",
    fontSize: 14,
    ...(mode === "light" && {
      h1: {
        color: "#1F1F25",
        fontSize: "1.5rem",
        fontWeight: 600,
        letterSpacing: "0.92px",
      },
    }),
    ...(mode === "dark" && {
      h1: {
        color: "#FFFFFF",
        fontSize: "1.5rem",
        fontWeight: 600,
        letterSpacing: "0.92px",
      },
    }),
    ...(mode === "light" && {
      h2: {
        color: "#29282E",
        fontSize: "1.125rem",
        fontWeight: 500,
        letterSpacing: "0.72px",
      },
    }),
    ...(mode === "dark" && {
      h2: {
        color: "#FFFFFF",
        fontSize: "1.125rem",
        fontWeight: 500,
        letterSpacing: "0.72px",
      },
    }),
    ...(mode === "light" && {
      subtitle1: {
        color: "#1F1F25",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: "0.3px",
      },
    }),
    ...(mode === "dark" && {
      subtitle1: {
        color: "#F5F5F5",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: "0.3px",
      },
    }),
    ...(mode === "light" && {
      subtitle2: {
        color: "#828282",
        fontSize: "0.875rem",
        fontWeight: 600,
        letterSpacing: "0.28px",
      },
    }),
    ...(mode === "dark" && {
      subtitle2: {
        color: "#B1ADB1",
        fontSize: "0.875rem",
        fontWeight: 600,
        letterSpacing: "0.28px",
      },
    }),
  },
  palette: {
    mode,
    error: {
      main: "#EB5757",
      light: "rgba(253, 242, 242, 1)",
    },
    purple: {
      main: "#8B54FD",
    },
    ...(mode === "light" && {
      gray: {
        main: "#F5F3F8",
        light: "#A9B7BD",
        contrastText: "#A9B7BD",
      },
    }),
    ...(mode === "dark" && {
      gray: {
        main: "rgba(255, 255, 255, 0.10)",
        light: "#A9B7BD",
        contrastText: "#424242",
      },
    }),
    ...(mode === "light" && {
      shadow: {
        main: "10px 10px 50px 0px rgba(124, 105, 244, 0.20)",
      },
    }),
    ...(mode === "dark" && {
      shadow: {
        main: "",
      },
    }),
    ...(mode === "dark" && {
      background: {
        default: "#333238",
        paper: "#333238",
      },
    }),
    ...(mode === "light" && {
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
    }),
    ...(mode === "light" && {
      text: {
        primary: "#1F1F25",
        secondary: "#828282",
      },
    }),
    ...(mode === "dark" && {
      text: {
        primary: "#F5F5F5",
        secondary: "#B1ADB1",
      },
    }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...(mode === "dark" && {
            background: "#424242",
          }),
          ...(mode === "light" && {
            background: "#7C69F4",
          }),
          color: "#FFFFFF",
          padding: "0.875rem 1.5rem",
          borderRadius: "10px",
          fontSize: "1rem",
          lineHeight: "1.5rem",

          fontWeight: 500,
          textTransform: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",

          "&:hover": {
            background: "#7C69F4",
          },

          "&.Mui-disabled": {
            ...(mode === "dark" && {
              background: "#424242",
            }),
            ...(mode === "light" && {
              background: "#F5F3F8",
              color: "#AFB6BE",
            }),
          },
        },
      },
    },
  },
});
