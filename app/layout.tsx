import './globals.css';
import Navbar from '@/app/cs/components/Navbar';
import Footer from '@/app/cs/components/Footer';
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: 'RaazGateX',
  description: 'GATE + Adventure + Learning Platform by Raaz Mehra',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-20">{children}</main> {/* Padding for fixed navbar */}
        <Footer />
      </body>
    </html>
  );
}
