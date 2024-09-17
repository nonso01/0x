// import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Nonso Martin",
  description: "Creative Web Developer | 3D artist with knowledge of Rust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
