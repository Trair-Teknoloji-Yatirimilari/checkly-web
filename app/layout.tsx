import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checkly - Yapay Zekâ Destekli Konum Tabanlı Sosyal Keşif",
  description: "Etrafında kim var? Şehirde ne oluyor? Gerçek zamanlı check-in ve yapay zekâ destekli keşif deneyimi.",
  keywords: ["checkly", "sosyal keşif", "yapay zeka", "konum tabanlı", "check-in", "gerçek zamanlı"],
  openGraph: {
    title: "Checkly - Yapay Zekâ Destekli Konum Tabanlı Sosyal Keşif",
    description: "Gerçek zamanlı check-in ve yapay zekâ destekli keşif deneyimi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
