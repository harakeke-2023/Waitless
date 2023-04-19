import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-burgundy-500 shadow h-40 sm:h-20">
        <div className="w-full mx-auto max-w-screen-xl p-3 px-5 md:flex md:items-center md:justify-between max-sm:text-sm">
          <span className="text-xl text-beige-500 sm:text-center max-sm:text-sm">
            © 2023{' '}
            <a href="/" className="hover:underline">
              WAITLESS
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-gray-500 dark:text-gray-400 sm:mt-0 max-sm:text-sm">
            <li>
              <a
                href="/"
                className="mr-4 text-beige-300 hover:underline md:mr-6 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={location.href + '/about'}
                className="mr-4 text-beige-300 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-beige-300 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-beige-300 hover:underline md:mr-6"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
