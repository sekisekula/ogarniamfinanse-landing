import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'LifeSaldo - Zarządzaj Finansami w Grupie',
  description: 'Skanuj paragony, dziel wydatki grupowe, analizuj budżet. Darmowa aplikacja finansowa z OCR i AI.',
  keywords: 'budżet, finanse, paragony, OCR, rozliczenia grupowe, aplikacja finansowa',
  authors: [{ name: 'LifeSaldo' }],
  openGraph: {
    title: 'LifeSaldo - Zarządzaj Finansami w Grupie',
    description: 'Skanuj paragony, dziel wydatki grupowe, analizuj budżet.',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LifeSaldo',
    description: 'Zarządzaj finansami w grupie',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
