// active link checking, via https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links
'use client'
import { usePathname } from 'next/navigation'
import { AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export function Header() {
  const pathname = usePathname()
  return (
    <>
    <nav className="flex bg-neutral-900 fixed w-full top-0 left-0 border-b border-neutral-600">
      <div className="max-w-screen-xl flex items-center p-1">
        <a href="/" className="flex flex-none items-center mr-0.5 {router.pathname == '/' ? 'active' : 'font-bold underline'}">
          <img src="/icon.png" className="h-12 w-12 mr-0.5" alt="Kevin Buffardi Logo" />
          <span className={pathname == '/' ? "min-w-0 overflow-x-hidden self-center text-xl font-semibold whitespace-nowrap text-neutral-100 underline" : "min-w-0 overflow-x-hidden self-center text-xl font-semibold whitespace-nowrap text-neutral-300 hover:text-neutral-50"}>
            Dr. Kevin Buffardi
          </span>
        </a>
      </div>
      <div className="flex flex-row">
        <ul className="flex font-medium p-0 whitespace-nowrap rounded-lg space-x-1 mt-0">
          <li className="flex flex-auto place-items-center border-0 mx-1">
            <a href="/classes" className={pathname == '/classes/' ? 'flex flex-nowrap text-neutral-100 rounded border-0 underline' : "flex flex-nowrap text-neutral-300 rounded border-0 hover:text-neutral-50"}>
              <AcademicCapIcon className='h-6 w-6 mr-1'/><span className="min-w-0 overflow-x-hidden">Classes</span>
            </a>
          </li>
          <li className="flex flex-auto place-items-center border-0  mx-1">
            <a href="/research" className={pathname == '/research/' ? 'flex flex-nowrap text-neutral-100 rounded border-0 underline' : "flex flex-nowrap text-neutral-300 rounded border-0 hover:text-neutral-50"}>
              <ChartBarIcon className='h-6 w-6 mr-1' /><span className="min-w-0 overflow-x-hidden">Research</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}