import '@/app/ui/global.css';
import { Lusitana } from 'next/font/google';
const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={lusitana.className}>{children}</main>
      </body>
    </html>
  );
}
