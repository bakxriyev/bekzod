import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BEKZOD | KHANOV",
  description: "BEKZOD | KHANOV SOTUV MENEJERI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/khanov.png" />
        <link rel="preload" href="/background.webp" as="image" />
        <link rel="preload" href="/kitob.webp" as="image" />
        <link rel="preload" href="/yaxshi.webp" as="image" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

