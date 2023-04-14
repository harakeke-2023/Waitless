import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import Header from './Header'
import HomeMenu from './HomeMenu'
import CategoriesNavBar from './Menu/CategoriesNavBar'

export default function Contact() {
  return (
    <>
      <HomeMenu />
      <CategoriesNavBar />
      <h1 className="">Contact Us</h1>
      <div className="flex items-center">
        <AiFillFacebook className="cursor-pointer text-2xl  m-10" />
      </div>
    </>
  )
}
