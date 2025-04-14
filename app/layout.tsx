import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ClerkClientProvider } from '@/components/ClerkClientProvider';
import { Header } from '@/components/navigation/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevLearning - Your Learning Journey',
  description: 'Track your learning progress and achieve your development goals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkClientProvider>
      <html lang="ja" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkClientProvider>
  );
}