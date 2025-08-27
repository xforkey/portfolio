import { type Metadata } from 'next'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Kyle Forkey',
    default:
      'Engineer, builder, and lifelong systems thinker',
  },
  description:
    'I`m Kyle Forkey, a software engineer based in Austin, Texas. I design and build high-performance web applications that balance elegance, efficiency, and real-world utility often for startups with big ambitions and tight constraints.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black relative">
        {/* Simple SnowCone Pattern Background */}


        <Providers>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="relative w-full bg-white/90 ring-1 ring-zinc-100 dark:bg-zinc-900/90 dark:ring-zinc-300/20" >
                  {/*       <div className="absolute right-0 top-0 bottom-0 w-full rotate-90 scale-150 origin-center">
                    <SnowConePattern />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              {/* Header is now absolutely positioned */}
              <div className="absolute top-0 left-0 right-0 z-50">
                <Header />
              </div>
              <main className="flex-auto">
                {children}

              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}