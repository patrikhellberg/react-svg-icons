import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-gray-500 text-white h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0'>
      <div>
        <Image
          src='/bm_logo.png'
          alt='Bucket Media AB'
          width={100}
          height={50}
        />
      </div>
      <h1 className='font-semibold text-lg'>Icon library</h1>
      <div>
        <p>Dark mode toggle</p>
      </div>
    </header>
  )
}

export default Header
