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
      <body>{children}</body>
    </html>
  );
}
