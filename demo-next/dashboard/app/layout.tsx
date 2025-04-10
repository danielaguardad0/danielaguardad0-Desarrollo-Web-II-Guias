import '@/app/ui/global.css';
import { aña } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${aña.className} antialiased`}>{children}</body>
    </html>
  );
}
