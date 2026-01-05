import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "The Remarkable Life of Joseph Bologne",
    description: "An immersive journey into the life of the Chevalier de Saint-Georges.",
};

import { AudioProvider } from "@/lib/AudioContext";
import { VersaillesPlayer } from "@/components/ui/VersaillesPlayer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
                <AudioProvider>
                    <Navigation />
                    <main className="min-h-screen pt-16">
                        {children}
                    </main>
                    <VersaillesPlayer />
                </AudioProvider>
            </body>
        </html>
    );
}
