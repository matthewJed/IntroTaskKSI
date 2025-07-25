import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
