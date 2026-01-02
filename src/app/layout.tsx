
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Tsholofelo Ndawonde",
  description: "Frontend engineer and creative developer",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
