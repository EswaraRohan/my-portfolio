import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader } from "@/components/index";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Rohan",
    description:
      "Explore the portfolio of Rohan",
    images: [
      {
        url: "/og-image.webp",
        alt: "Rohan",
      },
    ],
  },
  title:
    "Eswara Rohan | Full Stack Developer | CHUBB | Hyderabad",
  description:
    "Explore the portfolio of Rohan",
  keywords:
    "Eswara Rohan, ReactJS, Angular, Material UI, TailwindCSS, Web Development, Portfolio, React developer, Next js developer, Hyderabad, India",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const revalidate = 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
            <FloatingNav />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
