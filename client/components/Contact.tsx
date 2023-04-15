import React from 'react'
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai'

import HomeMenu from './HomeMenu'
import CategoriesNavBar from './Menu/CategoriesNavBar'

export default function Contact() {
  return (
    <>
      {/* <h1 className="text-center text-black-900 pt-6 text-4xl font-bold ">
        Contact Us
      </h1> */}
      <div className="text-center text-burgundy-900 pt-4 text-1xl">
        <h2>AUCKLAND</h2>
        <p>Address : 261 Karangahape Road,</p>
        <p>Auckland CBD</p>
        <p>Phone : 09 9639987</p>
        <p className="pt-4">Operating Hour 5pm - 10pm</p>
        <p>Order now for PICK UP & DELIVERY </p>
      </div>
      <div className="flex justify-center text-5xl gap-16 py-6 text-blue-800">
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </div>
    </>
  )
}
