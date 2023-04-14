import React from 'react'
import HomeMenu from './HomeMenu'
import CategoriesNavBar from './Menu/CategoriesNavBar'
import { Header } from './Header'

export default function Home() {
  return (
    <div>
      <Header isHome={true} />
      <HomeMenu />
      <CategoriesNavBar />
    </div>
  )
}
