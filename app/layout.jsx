import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FontProvider } from "@/contexts/FontContext";

export const metadata = {
  title: "MSO - Maharashtra Startup Organistation",
  description:
    "A modern blog platform focused on sharing knowledge, insights, and stories about web development, technology, and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
