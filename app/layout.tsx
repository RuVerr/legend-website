import type { Metadata, Viewport } from "next";
import "./globals.css";

import TemplateNavigation from "./Components/AtomUI/Template/TemplateNavigation";
import TemplateBackground from "./Components/AtomUI/Template/TemplateBackground";
import TemplateFooter from "./Components/AtomUI/Template/TemplateFooter";
import LanguageProvider from "./context/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://legend.am"),

  title: {
    default: "Legend Music Hall | Restaurant & Live Music in Yerevan",
    template: "%s | Legend Music Hall"
  },

  description:
    "Legend Music Hall is a restaurant in Yerevan offering delicious cuisine, signature drinks, live music, private events, and an unforgettable atmosphere.",

  keywords: [
    "Legend Music Hall",
    "Legend Cafe",
    "Restaurant Yerevan",
    "Live Music",
    "Armenian Restaurant",
    "Cafe Yerevan",
    "Private Events",
    "Food",
    "Cocktails",
    "Music Hall"
  ],

  authors: [{ name: "Legend Music Hall" }],
  creator: "Legend Music Hall",
  publisher: "Legend Music Hall",

  openGraph: {
    title: "Legend Music Hall",
    description: "Enjoy exceptional food, live music, and unforgettable evenings at Legend Music Hall.",
    url: "https://legend.am",
    siteName: "Legend Music Hall",
    locale: "hy_AM",
    type: "website",
    images: [
      {
        url: "/images/icons/favicon.png",
        width: 1200,
        height: 630,
        alt: "Legend Music Hall"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Legend Music Hall",
    description: "Restaurant, live music, cocktails, and unforgettable evenings in Yerevan.",
    images: ["/images/icons/favicon.png"]
  },

  robots: {
    index: true,
    follow: true
  },

  icons: {
    icon: [
      {
        url: "/images/icons/favicon.png",
        type: "image/png"
      }
    ],

    apple: "/images/icons/favicon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body>
        <LanguageProvider>
          <TemplateNavigation />
          <TemplateBackground />
          {children}
          <TemplateFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
