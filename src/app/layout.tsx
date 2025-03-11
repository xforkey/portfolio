import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

// Use our custom global CSS instead of Tailwind CSS
import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Kyle Forkey',
    default:
      'Kyle Forkey - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Kyle, a software designer and entrepreneur based in Austin. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className="relative flex w-full flex-col">
            <main className="flex-auto">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}