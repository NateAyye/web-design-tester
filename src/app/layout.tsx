import type { Metadata } from "next";
import { Inter, Familjen_Grotesk } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  display: 'swap',
});

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: "--font-familjen-grotesk",
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Design Testing",
  description: "Web app with the ability to test out all kinds of designs with diffrent fonts, colors, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${familjenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
