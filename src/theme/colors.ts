import { Colors } from "./types";

export const baseColors = {
  failure: "#F33F67",
  primary: "#F79108",
  primaryBright: "#53DEE9",
  primaryDark: "#DF922B",
  secondary: "#FFFFFF",
  success: "#29DCA2",
  warning: "#FFB237",
};

export const brandColors = {
  bsc: "#DF922B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#110C0D",
  backgroundDisabled: "#DF922B",
  contrast: "#DF922B",
  invertedContrast: "#F7F7FD",
  input: "#F1F1FB",
  inputSecondary: "#CACAF1",
  tertiary: "#010B48",
  text: "#F79108",
  textDisabled: "#F0CD9E",
  textSubtle: "#F79108",
  borderColor: "#E9EAEB",
  card: "#040404",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F0CD9E 10%,#110C0D 90%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#DF922B",
  background: "#110C0D",
  backgroundDisabled: "#454756",
  contrast: "#FEFEFF",
  invertedContrast: "#DF922B",
  input: "#DF922B",
  inputSecondary: "#505096",
  primaryDark: "#F0CD9E",
  tertiary: "#2C2F3B",
  text: "#F79108",
  textDisabled: "#F0CD9E",
  textSubtle: "#F0CD9E",
  borderColor: "#DF922B",
  card: "#121517",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #DF922B 10%, #130202 90%)",
  },
};
