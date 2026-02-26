import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FontProvider } from "@/contexts/FontContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-section-title",
  display: "swap",
});

export const metadata = {
  title: "MSO - Maharashtra Startup Organistation",
  description:
    "A modern blog platform focused on sharing knowledge, insights, and stories about web development, technology, and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={bebasNeue.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
