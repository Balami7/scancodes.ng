import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/backtotop';
import './globals.css';

export const metadata: Metadata = {
  title: 'scancodes',
  description: 'Powerful QR code generator and manager. Create, track, and analyze your QR codes easily.',
  icons: {
    icon: '/image4.png',           
    shortcut: '/image4.png',
    apple: '/image4.png', 
  },
  openGraph: {
    title: 'scancodes',
    description: 'Create beautiful and trackable QR codes in seconds',
    images: [
      {
        url: '/image4.png',       
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grey-250">
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}