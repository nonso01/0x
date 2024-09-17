// import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Nonso Martin",
  description: "creative web developer | 3d artist | with knowledge of Rust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
