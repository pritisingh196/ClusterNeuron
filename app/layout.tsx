import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cluster Neuron | Global IT Services & Consulting",
  description:
    "Leading global IT services and consulting company. Cluster Neuron provides digital transformation, cloud services, AI solutions, and enterprise consulting to Fortune 500 companies worldwide.",
  keywords: [
    "IT Services",
    "Digital Transformation",
    "Cloud Services",
    "AI Solutions",
    "Enterprise Consulting",
    "Business Process Outsourcing",
    "Technology Consulting",
    "Software Development",
    "Cybersecurity",
    "Data Analytics",
  ],
  authors: [{ name: "Cluster Neuron" }],
  openGraph: {
    title: "Cluster Neuron | Global IT Services & Consulting",
    description:
      "Leading global IT services and consulting company providing digital transformation and enterprise solutions",
    type: "website",
    url: "https://clusterneuron.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cluster Neuron | Global IT Services & Consulting",
    description:
      "Leading global IT services and consulting company providing digital transformation and enterprise solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
