export const theme = {
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  colors: {
    primary: "#4844fb",
    primaryLight: "#6145ff",
    secondary: "blue",
    mainBg: "#f6f6f6",
    black: "#030517",
    lightBlack: "#333c44",
    white: "#FFF",
    lightGray: "#d1d5db",
    gray: "#8F8F8F",
    red: "#FF6347",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  radii: "5px",
  layers: {
    alwaysOnTop: 90,
  },
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
} as const;
