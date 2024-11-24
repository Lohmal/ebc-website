import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATU Engineer Build-Up Club",
  description:
    "ATÜ Engineer Build-up Club (EBC), mühendislik öğrencilerini bir araya getirerek bilgi ve becerilerini geliştirmeyi amaçlayan dinamik bir kulüptür. EBC'nin projeleri, teknik atölyeleri ve sosyal etkinlikleri hakkında bilgi alın. Hakkımızda, misyonumuz, vizyonumuz ve projelerimiz hakkında daha fazla bilgi edinin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[rgb(0,0,0)] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
