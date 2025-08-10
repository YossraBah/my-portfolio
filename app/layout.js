// import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your theme
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/app/_components/ScrollToTop";

import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Yosra Bahloul | Portfolio",
  },
  description:
    "Portfolio of Yossra Bahloul, a Full-Stack Web Developer specializing in React, Next.js, Angular, Node.js, and Cloud technologies. Discover my projects, skills, and experiences.",
  other: {
    "google-site-verification": "hGgJ7ZV9h3yw2n1zthtkDYAPJGaponAGhqWXlFvtPvA",
  },
  keywords: [
    "Next.js portfolio",
    "nextjs",
    "Web developer",
    "developer portfolio",
    "personal website",
    "tailwindcss",
    "Yosra bahloul",
    "react",
    "nestJs"
  ],
  authors: [
    { name: "Yosra Bahloul", url: "https://yosrabahloul-portfolio.vercel.app/" },
  ],
  creator: "Yosra Bahloul",
  publisher: "Yosra Bahloul",
  metadataBase: new URL("https://yosrabahloul-portfolio.vercel.app/"),

  openGraph: {
    title: "Yosra Bahloul | Portfolio",
    description:
      "A free, responsive personal portfolio template built with Next.js. Perfect for developers and designers.",
    url: "https://yosrabahloul-portfolio.vercel.app/",
    siteName: "Yosra Bahloul | Web Developer",
    images: [
      {
        url: "/og.PNG", // stored in public folder
        width: 1920,
        height: 1005,
        alt: "Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home | Portfolio",
    description: "Portfolio of my work",
    creator: "@yosra_bahloul",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
