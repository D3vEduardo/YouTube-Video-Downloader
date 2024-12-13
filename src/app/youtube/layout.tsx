import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Converter+ | YouTube Converter",
  description: "Baixar vídeos do youtube em MP3 ou MP4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="w-screen h-screen"
      >
        {children}
      </body>
    </html>
  );
}
