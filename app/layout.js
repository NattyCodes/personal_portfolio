import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Navbar } from "./_components/Navbar/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
