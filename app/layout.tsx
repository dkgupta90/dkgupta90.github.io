import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deepak K. Gupta | AI Leader & Researcher',
  description:
    'Deepak K. Gupta is an AI leader, applied science manager and researcher working on efficient machine learning, model compression and computer vision.',
  icons: {
    icon: './favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Inter:wght@400;500;600&display=swap"
        />
        <meta name="theme-color" content="#f7f5ef" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#121317" media="(prefers-color-scheme: dark)" />
      </head>
      <body>{children}</body>
    </html>
  );
}
