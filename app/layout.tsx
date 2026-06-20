import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greens.amli.group"),
  applicationName: "AMLI Greens",
  title: "AMLI Greens | Energy for a cleaner future",
  description:
    "AMLI Greens advances Malaysia's energy transition — operating a 250,000-tonne/yr FAME biofuel facility at Kuantan port and developing Sustainable Aviation Fuel, aligned with the National Energy Transition Roadmap and net-zero 2050.",
  openGraph: {
    title: "AMLI Greens | Energy for a cleaner future",
    description:
      "Renewable energy and the circular economy — biofuel, SAF and resource recovery.",
    images: [
      {
        url: "/images/kl-skyline-hero.jpg",
        width: 1600,
        height: 900,
        alt: "Golden-hour Kuala Lumpur skyline"
      }
    ],
    type: "website"
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
