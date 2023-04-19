import { useParams, useNavigate } from 'react-router-dom'
import { CategoryMutation } from '../../../models/Category'
import { useQuery } from 'react-query'
import { HashLink as Link } from 'react-router-hash-link'
import { useEffect } from 'react'

interface Props {
  numberOfCartItems: number
  fetchNumberOfCartItems: () => void
}

export default function CategoriesNavBar(props: Props) {
  const { fetchNumberOfCartItems, numberOfCartItems } = props
  const navigate = useNavigate()
  useEffect(() => {
    fetchNumberOfCartItems()
  }, [fetchNumberOfCartItems])
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

          {/* cart icon */}
          <button
            className="bg-white border  border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-200"
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            onClick={() => {
              navigate(`/table/${tableNo}/cart`)
            }}
          >
            <svg
              className="h-6 w-6 text-blue-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-full bg-red-500 flex items-center justify-center"
              style={{
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              {/* 3 */}
              {numberOfCartItems}
            </div>
          </button>
        </div>
      </nav>
    </>
  )
}
