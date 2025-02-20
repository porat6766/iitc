import "./globals.css";
import Header from "./Components/Header";
import { MyProvider } from "./store/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gradient-to-br from-blue-600 via-pink-400 to-red-200">
        <MyProvider>
          <Header />
          {children}
        </MyProvider >
      </body>
    </html>
  );
}
