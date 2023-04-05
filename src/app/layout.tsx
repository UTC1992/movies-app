'use client'
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from './theme/themes'

import Layout from '../components/Layout/Layout'
import { Providers } from '../lib/redux/provider'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Movies and Series</title>
      <meta name="description" content="Page to watch amazing movies and series." />
      <Providers>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Layout>
              {children}
            </Layout>
          </body>
        </ThemeProvider>
      </Providers>
    </html>
  )
}
