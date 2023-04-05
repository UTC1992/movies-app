"use client"
import "./globals.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./theme/themes"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Movies and Series</title>
      <meta name="description" content="Page to watch amazing movies and series." />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
