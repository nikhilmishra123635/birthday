import { Cormorant_Garamond, Dancing_Script, Manrope } from "next/font/google";
import "./globals.css";

// Elegant display serif for headlines — carries the cinematic, romantic tone
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Handwritten script, used sparingly for the personal message section
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

// Clean body sans for readability on mobile
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Happy Birthday Harshita ❤️ | A Little Surprise For You",
  description:
    "A special birthday surprise made with memories, smiles and lots of love.",
  openGraph: {
    title: "Happy Birthday Harshita ❤️",
    description:
      "A special birthday surprise made with memories, smiles and lots of love.",
    type: "website",
  },
  metadataBase: new URL("https://your-birthday-site.vercel.app"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0b2b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dancing.variable} ${manrope.variable} font-body bg-midnight text-glow antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
