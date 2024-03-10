import '@/app/ui/global.css';
import { Lusitana } from 'next/font/google';
import { inter } from '@/app/ui/fonts';

const lusitana = Lusitana({
  weight: '700',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.ClassName} antialiased'}>{children}</body>
    </html>
  );
}
