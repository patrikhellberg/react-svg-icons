import Image from 'next/image'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <header className='bg-gray-200 dark:bg-gray-950 text-black dark:text-white h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0 border-b border-solid border-gray-600'>
      <Link href='/'>
        <Image
          priority
          className='w-auto h-8 dark:hidden block'
          src='/bm_logo_light_mode.png'
          alt='Bucket Media AB'
          width={65}
          height={20}
        />
        <Image
          priority
          className='w-auto h-8 dark:block hidden'
          src='/bm_logo_dark_mode.png'
          alt='Bucket Media AB'
          width={65}
          height={20}
        />
      </Link>
      <div>
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header
