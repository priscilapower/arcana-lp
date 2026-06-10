import type { Metadata } from 'next';
import { Spectral, Barlow, JetBrains_Mono } from 'next/font/google';
import { ToastProvider } from '@/components/ToastProvider';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arcana OS — The OS that gives your agents a soul',
  description: 'Give every agent a tarot card — a personality, a memory, a purpose — and one place that sees them all. Open source, local-first, cloud-optional.',
  keywords: ['AI agents', 'LLM', 'open source', 'MCP', 'memory federation', 'tarot'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spectral.variable} ${barlow.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
