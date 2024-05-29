import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  team,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid grid-cols-1 max-w-7xl mx-auto my-8">
          {children}
          {/* {team} */}
        </main>
      </body>
    </html>
  );
}
