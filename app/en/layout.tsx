import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkly - AI-Powered Location-Based Social Discovery",
  description: "Who's around you? What's happening in the city? Real-time check-in and AI-powered discovery experience.",
  keywords: ["checkly", "social discovery", "artificial intelligence", "location-based", "check-in", "real-time"],
  openGraph: {
    title: "Checkly - AI-Powered Location-Based Social Discovery",
    description: "Real-time check-in and AI-powered discovery experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
