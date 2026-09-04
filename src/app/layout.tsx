import type { Metadata } from 'next';
import './globals.css';
import { SecurityProvider } from './provider/SecurityProvider';

export const metadata: Metadata = {
  title: 'SecureShield Test Website - Next.js (React)',
  description: 'Next.js 14 App Router canonical test site for SecureShield Web SDK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SecurityProvider>
          {children}
        </SecurityProvider>
      </body>
    </html>
  );
}


