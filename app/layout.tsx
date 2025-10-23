import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cluster Neuron | Advanced AI Solutions",
  description:
    "Transform your business with cutting-edge AI technology. Cluster Neuron delivers intelligent solutions for modern enterprises.",
  keywords: [
    "AI",
    "Machine Learning",
    "Neural Networks",
    "Artificial Intelligence",
    "Technology",
  ],
  authors: [{ name: "Cluster Neuron" }],
  openGraph: {
    title: "Cluster Neuron | Advanced AI Solutions",
    description: "Transform your business with cutting-edge AI technology",
    type: "website",
    url: "https://clusterneuron.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cluster Neuron | Advanced AI Solutions",
    description: "Transform your business with cutting-edge AI technology",
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
