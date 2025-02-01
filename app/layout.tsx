import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Nordlys Tech - Advanced AI Solutions for Chemical Engineering",
  description:
    "Transforming the Chemical and Process Engineering Industry through Advanced Artificial Intelligence Solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>{children}</body>
    </html>
  )
}

