import "./globals.css";
import { Inter } from "next/font/google";
import MainNavigation from "./components/nav/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pony Machine",
  description: "Lets build a unicorn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
