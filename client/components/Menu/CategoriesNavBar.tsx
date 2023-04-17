import { useParams } from 'react-router-dom'
import { CategoryMutation } from '../../../models/Category'
import { useQuery } from 'react-query'
import { HashLink as Link } from 'react-router-hash-link'

export default function CategoriesNavBar() {
  const { tableNo } = useParams()
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/v1/categories').then((res) => res.json())
  )

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred</div>

  return (
    <>
      {/* {data.categories[0].category_name} */}
      <nav>
        <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto p-4 bg-red-900 ">
          {data.categories.map((cat: CategoryMutation, index: number) => {
            return (
              <Link
                key={index}
                to={`/table/${tableNo}/menu#${cat.category_name.toLowerCase()}`}
                className="px-4 py-3 font-medium text-xl text-gray-300 hover:text-white hover:bg-gray-700 rounded "
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
