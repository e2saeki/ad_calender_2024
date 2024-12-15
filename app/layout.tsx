import type { Metadata } from 'next';
import { Header } from '@/app/_components/header/Header';
import { Caveat } from 'next/font/google';
import { Wave } from '@/app/_components/animation/Wave';

import './css/globals.css';

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Caveat',
  fallback: ['Noto Sans JP', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Message in a Bottle',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${caveat.variable}`}>
        <div className="back"><Wave /></div>
        <main>{children}</main>
        <Header />
      </body>
    </html>
  );
}
