// import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Nonso Martin",
  description: "Creative Web Developer | 3D artist | Rust Evangelist",
  generator: "Next.js",
  applicationName: "nonso01.vercel.app",
  referrer: "origin-when-cross-origin",
  keywords: ["Javascript", "Blender", "Theeejs"],
  authors: [{ name: "Nonso" }],
  creator: "Nonso",
  publisher: "Nonso Martin",
};

export const viewport = {
  themeColor: "#222222",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
