'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`relative hamburger ${mobileNavOpen && 'active'} z-[5]`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute bg-gray-900 z-0 top-0 right-0 h-screen w-full overflow-hidden transition-all duration-700 ease-in-out"
        style={mobileNavOpen ? { visibility: `visible`, opacity: 1 } : { visibility: `hidden`, opacity: 0 }}
      >
        <ul className='flex flex-col h-full justify-center space-y-10'>
          <li>
            <Link href="/#home" className="flex text-purple-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              <h5 className='h5'>Home</h5>
            </Link>
          </li>
          <li>
            <Link href="/#about" className="flex text-purple-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              <h5 className='h5'>About Me</h5>
            </Link>
          </li>
          <li>
            <Link href="/#tech-experiences" className="flex text-purple-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              <h5 className='h5'>Tech Experiences</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
