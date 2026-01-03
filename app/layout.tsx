import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus MentorS — Learn From Your Seniors",
  description:
    "Exam-focused learning platform where college seniors teach juniors with clarity, guidance and confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Page Wrapper */}
        <div className="flex flex-col min-h-screen">

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-6">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </div>
      </body>
    </html>
  );
}
