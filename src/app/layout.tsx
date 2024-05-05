import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import localFont from "next/font/local";
import layout from "./anselm/layout";
import Layout from "./anselm/layout";
const chopin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ChopinScript.ttf",
      weight: "200",
    },
  ],
  variable: "--font-chopin",
});
export const metadata: Metadata = {
  title: "Anselm Walters Violinist",
  description:
    "Anselm Walters Main Website. Look at his work, know who he is, and contact him for any potential business opportunities and any events performance!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chopin.variable}`}>
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
