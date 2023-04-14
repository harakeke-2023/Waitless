import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../../../models/Category'
import { useQuery } from 'react-query'

export default function CategoriesNavBar() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/v1/categories').then((res) => res.json())
  )
  console.log(data)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
      {data.categories[0].category_name}
      <nav>
        <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto p-4 bg-red-900 ">
          {data.categories.map((cat, index) => {
            return (
              <Link
                key={index}
                to="/table/:tableNo/menu"
                className="lock py-2 pl-3 pr-4 text-beige-500 bg-red-900 hover:border-4 border-slate-400 rounded "
              >
                {cat.category_name}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
