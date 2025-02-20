import "./globals.css";
import Hamburger from "../components/Hamburger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Add Hamburger Component */}
        <Hamburger />
        {children}
      </body>
    </html>
  );
}