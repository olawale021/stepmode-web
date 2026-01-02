import type { Metadata } from "next";
import { Poppins, Merienda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StepMode - Your Personal Fitness Companion",
  description: "Track your workouts, achieve your fitness goals, and join a community of fitness enthusiasts with StepMode.",
  keywords: ["fitness", "workout", "exercise", "health", "fitness app", "workout tracker"],
  authors: [{ name: "StepMode" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "StepMode - Your Personal Fitness Companion",
    description: "Track your workouts, achieve your fitness goals, and join a community of fitness enthusiasts.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${merienda.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
