// active link checking, via https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links
'use client'
import { usePathname } from 'next/navigation'
import { AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export function Header() {
  const pathname = usePathname()
  return (
    <>
    <nav className="flex bg-neutral-900 fixed w-full top-0 left-0 border-b border-neutral-600">
      <div className="max-w-screen-xl flex flex-row items-center p-2">
        <a href="/" className="flex items-center pr-8 {router.pathname == '/' ? 'active' : 'font-bold underline'}">
          <img src="/icon.png" className="h-12 w-12 mr-3" alt="Kevin Buffardi Logo" />
          <span className={pathname == '/' ? "self-center text-xl font-semibold whitespace-nowrap text-neutral-100 underline" : "self-center text-xl font-semibold whitespace-nowrap text-neutral-300 hover:text-neutral-50"}>
            Dr. Kevin Buffardi
          </span>
        </a>
      </div>
      <div className="flex flex-row">
        <ul className="flex font-medium p-0 whitespace-nowrap rounded-lg space-x-12 mt-0">
          <li className="flex flex-auto place-items-center w-24 border-0">
            <a href="/classes" 
               className={pathname == '/classes' ? 'flex flex-nowrap text-neutral-100 rounded border-0 underline' : "flex flex-nowrap text-neutral-300 rounded border-0 hover:text-neutral-50"}>
              <AcademicCapIcon className='h-6 w-6 mr-1'/>Classes
            </a>
          </li>
          <li className="flex flex-auto place-items-center w-24 border-0">
            <a href="/research" className={pathname == '/research' ? 'flex flex-nowrap text-neutral-100 rounded border-0 underline' : "flex flex-nowrap text-neutral-300 rounded border-0 hover:text-neutral-50"}>
              <ChartBarIcon className='h-6 w-6 mr-1' />Research
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}