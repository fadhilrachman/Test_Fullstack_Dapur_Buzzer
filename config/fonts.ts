import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Geist,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontGeist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
