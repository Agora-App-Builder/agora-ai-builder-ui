import type { Metadata } from "next"

import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Agora AI Builder UI",
  description: "Agora AI Builder UI components",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}

