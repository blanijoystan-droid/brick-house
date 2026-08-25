import "./globals.css";

export const metadata = {
  title: "Brick House — Coffee, Food & Good Company",
  description:
    "A warm neighbourhood café serving exceptional coffee, thoughtful food and memorable moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}