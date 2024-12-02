import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/output.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar/>
      <body className="">{children}</body>
      <Footer />
    </html>
  )
}