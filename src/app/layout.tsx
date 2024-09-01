import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-sora",
});

const gilroy = localFont({
  src: [
    { path: "../fonts/gilroy/Gilroy-Bold.ttf", weight: "700" },
    { path: "../fonts/gilroy/Gilroy-Heavy.ttf", weight: "900" },
    { path: "../fonts/gilroy/Gilroy-Light.ttf", weight: "300" },
    { path: "../fonts/gilroy/Gilroy-Medium.ttf", weight: "500" },
    { path: "../fonts/gilroy/Gilroy-Regular.ttf", weight: "400" },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${sora.variable} ${gilroy.variable}`}>{children}</body>
    </html>
  );
}
