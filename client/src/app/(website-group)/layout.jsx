import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css'
import Header from "@/components/website/global/Header";
import Footer from "@/components/website/global/Footer";
import ReduxProvider from "@/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f3f4f6]`}
    >
      <body
        
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  );
}
