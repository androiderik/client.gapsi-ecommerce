'use client' // This is a client component
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/Search'
import useRequest from './containers/customHooks/fetchProducts'
import { useState } from 'react'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  // we search for a products depends on the keyword
  const [data] = useRequest(
    `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${keyword}&page=1&sortBy=best_match`
  )

  // retrieve keyword derived from the user interaction, pass function to search component
  const retrieveKeywords = (inputText) => {
    setKeyword(inputText)
  }

  // restart keyword on empty state
  const restartApp = () => {
    setKeyword('')
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-center items-center">
        e-commerce GAPSI
        <Image
          className="dark:invert"
          src="/logo_gapsi.png"
          alt="gapsilogo"
          width={180}
          height={38}
          priority
        />
        <button onClick={() => restartApp()}>Restart App</button>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/shop_cart.jpg"
          alt="shop_cart logo"
          width={180}
          height={38}
          priority
        />
        <Search products={data} retrieveKeywords={retrieveKeywords} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/policy">Policy</Link>
      </footer>
    </div>
  )
}
