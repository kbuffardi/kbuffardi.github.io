import { AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export function Header() {
  return (
    <nav className="bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b border-neutral-600">
      <div className="max-w-screen-xl flex flex-row items-center p-2">
        <a href="https://learnbyfailure.com/" className="flex items-center pr-8">
          <img src="/icon.png" className="h-12 w-12 mr-3" alt="Kevin Buffardi Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-neutral-300 hover:text-neutral-50">Dr. Kevin Buffardi</span>
        </a>
        <div className="flex">
          <ul className="font-medium flex flex-col p-0 mt-4 border border-neutral-100 whitespace-nowrap rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0 bg-neutral-900 border-neutral-700">
            <li>
              <a href="#" className="flex py-2 pl-3 pr-4 text-neutral-300 rounded border-0 hover:text-neutral-50 md:p-0 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <AcademicCapIcon className='h-6 w-6 mr-1'/>Classes
              </a>
            </li>
            <li>
              <a href="#" className="flex py-2 pl-3 pr-4 text-neutral-300 rounded border-0 hover:text-neutral-50 md:p-0 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <ChartBarIcon className='h-6 w-6 mr-1' />Research
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}