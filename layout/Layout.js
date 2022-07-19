import React from 'react'
import Header from "../components/Header/Header"
import HeaderTopBanner from '../components/Header/Header-Top-Banner'
export default function Layout({children}) {
  return (
    <>
        <header>
            <HeaderTopBanner/>
            <Header/>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}
