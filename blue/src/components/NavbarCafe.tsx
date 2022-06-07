import Logo from 'assets/wanfang.jpeg'
import { useState } from 'react'

const NavbarCafe = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if (open === false) setOpen(true)
    else setOpen(false)
  }
  const classTagA =
    'block p-2 text-gray-700  border-gray-100 hover:bg-gray-50  hover:text-blue-700 md:p-0'
  return (
    <nav className="bg-red-00 border-gray-200 md:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/home" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" className="w-10 h-10 mr-3" />
          Wan Fang
        </a>
        <button
          id="mobile-menu-button"
          onClick={handleOpen}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-md text-gray-500 rounded-lg  md:hidden lg:hidden xl:hidden hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={
            open === false
              ? 'sm:hidden'
              : 'w-full md:block md:w-auto lg:block lg:w-auto  xl:block xl:w-auto  2xl:block 2xl:w-auto text-lg'
          }
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium lg:flex-row lg:space-x-8 lg:mt-0 2xl:flex-row 2xl:space-x-8 2xl:mt-0 xl:flex-row xl:space-x-8 xl:mt-0">
            <li>
              <a
                href="#"
                className=" sm:text-white text-blue-700 sm:bg-blue-700 block p-2 text-gray-700 rounded bg-transparent  md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#footer" className={classTagA}>
                About Us
              </a>
            </li>

            <li>
              <a href="#our-signatures" className={classTagA}>
                Our Signatures
              </a>
            </li>
            <li>
              <a href="#drink-manu" className={classTagA}>
                Our Drink Manu
              </a>
            </li>
            <li>
              <a href="#" className={classTagA}>
                Location
              </a>
            </li>
            <li>
              <a href="#" className={classTagA}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavbarCafe
