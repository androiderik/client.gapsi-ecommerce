'use client' // This is a client component
import Image from 'next/image'
import Link from 'next/link'
import Request from './containers/fetchProducts'

export default function Home() {
  const url =
    'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=sony&page=1&sortBy=best_match'
  const method = 'GET'

  const products = Request(url, method)

  console.log(products, 'productssss')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-center items-center">
        e-commerce GAPSI
        <Image
          className="dark:invert"
          src="/logo_gapsi.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/policy">Policy</Link>
      </footer>
    </div>
  )
}
