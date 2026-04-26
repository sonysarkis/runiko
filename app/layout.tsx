import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runiko · Supernova Lab",
  description: "Oficina virtual — propuesta estratégica de Supernova Lab para Runiko Barbería",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-bg-deep text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
