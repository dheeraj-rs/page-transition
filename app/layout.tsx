import localFont from 'next/font/local';
import Link from 'next/link';
import AnimationLayout from '@/components/AnimationLayout';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-sm bg-background/80">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-primary/80 transition-colors">
            Digital Craft
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-primary/80 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary/80 transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary/80 transition-colors">Projects</Link></li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">
          <AnimationLayout>{children}</AnimationLayout>
        </main>
      </body>
    </html>
  );
}
