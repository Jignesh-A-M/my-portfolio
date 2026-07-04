import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jignesh A. Maharajwala | Flutter Developer",
  description: "Portfolio of Jignesh A. Maharajwala, Flutter Developer specializing in Real-Time Communication, IoT, and Cloud Solutions.",
  openGraph: {
    title: "Jignesh A. Maharajwala | Flutter Developer",
    description: "Production-grade Flutter applications focused on real-time communication, IoT, and cloud integration.",
    url: "https://jignesh-portfolio.com", // Replace with actual URL
    siteName: "Jignesh A. Maharajwala Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jignesh A. Maharajwala | Flutter Developer",
    description: "Production-grade Flutter applications focused on real-time communication, IoT, and cloud integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} min-h-full flex flex-col antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
