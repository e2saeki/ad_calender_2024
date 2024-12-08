import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Message in a Bottle",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
