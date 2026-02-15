import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wedding-invitation-theta-wine.vercel.app";
const heroImage =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/Gemini_Generated_Image_5kubfe5kubfe5kub-resized-1770299721566.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sebastian & Marina - Wedding Invitation",
  description: "Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: "Sebastian & Marina - Wedding Invitation",
    title: "Sebastian & Marina - Wedding Invitation",
    description: "Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Sebastian și Marina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian & Marina - Wedding Invitation",
    description: "Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.",
    images: [heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable}`}>
      <body className="antialiased font-cormorant bg-[#fdfaf6]">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="023d3f87-d315-4bce-bebc-104525a66326"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
