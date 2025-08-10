'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="/" className="font-bold text-lg text-teal-500 block py-6">
              nicholashans
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={toggleMenu}
              className="block absolute right-4 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>

            <nav className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link 
                    href="/#home" 
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link 
                    href="/#about" 
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Me
                  </Link>
                </li>
                <li className="group">
                  <Link 
                    href="/#portfolio" 
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="group">
                  <Link 
                    href="/projects" 
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
