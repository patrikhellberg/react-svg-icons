import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <header className='bg-gray-200 dark:bg-gray-950 text-black dark:text-white h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0 border-b border-solid border-gray-600'>
      <Link href='/'>
        <h1 className='font-semibold md:text-lg text-base'>
          @hellberg/react-svg-icons
        </h1>
      </Link>
      <div>
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header
