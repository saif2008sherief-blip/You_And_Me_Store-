import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'YOU AND ME STORE | هدايا وإكسسوارات', description: 'تجربة تسوق أنيقة للهدايا والإكسسوارات.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
