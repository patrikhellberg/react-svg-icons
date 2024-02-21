import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-gray-500 text-white h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0'>
      <div>
        <Image
          priority
          className='w-auto h-8'
          src='/bm_logo.png'
          alt='Bucket Media AB'
          width={65}
          height={20}
        />
      </div>
      <h1 className='hidden sm:inline font-semibold text-lg'>Icon library</h1>
      <div>
        <p>Dark mode toggle</p>
      </div>
    </header>
  )
}

export default Header
