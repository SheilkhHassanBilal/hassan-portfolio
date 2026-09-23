// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor'; // <-- Yahan import add karein
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Hassan Bilal — Elite Frontend & AI Systems Architect',
  description: 'Portfolio of Hassan Bilal, specializing in n8n Workflow Automation, AI & Computer Vision, DevOps, and Modern Web Architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-[#0a0a0c] text-neutral-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <CustomCursor /> {/* <-- Yahan body ke andar add karein */}
        {children}
      </body>
    </html>
  );
}