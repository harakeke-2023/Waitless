import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const { tableNo } = useParams()
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
            {/* <li>
              <a
                href="/admin"
                className="mr-4 text-beige-300 hover:underline md:mr-6 "
              >
                Admin
              </a>
            </li> */}

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

            {location.pathname.includes('/') && (
              <Link to="/admin/login" className="admin-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm6.2 6.3l-3.5 3.5c-.2.2-.5.2-.7 0l-1.5-1.5c-.2-.2-.2-.5 0-.7l3.5-3.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7zm-10.4 0l1.5 1.5c.2.2.2.5 0 .7l-3.5 3.5c-.2.2-.5.2-.7 0l-1.5-1.5c-.2-.2-.2-.5 0-.7l3.5-3.5c.2-.2.5-.2.7 0z"
                  />
                </svg>
              </Link>
            )}

            {location.pathname.includes('/admin') && (
              <button
                className="customer-button"
                onClick={() => {
                  navigate(`/`)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 2c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm-2.44 10.66l2.12-2.12 2.12 2.12c.2.2.5.2.7 0l.71-.71c.2-.2.2-.5 0-.7l-2.12-2.12 2.12-2.12c.2-.2.2-.5 0-.7l-.71-.71c-.2-.2-.5-.2-.7 0l-2.12 2.12-2.12-2.12c-.2-.2-.5-.2-.7 0l-.71.71c-.2.2-.2.5 0 .7l2.12 2.12-2.12 2.12c-.2.2-.2.5 0 .7l.71.71c.2.2.5.2.7 0z"
                  />
                </svg>
              </button>
            )}
          </ul>
        </div>
      </footer>
    </>
  )
}
