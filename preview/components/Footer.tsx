import ContentContainer from './ContentContainer'

const Footer = () => {
  return (
    <footer className='bg-white-500 dark:bg-slate-900 dark:text-slate-500 py-10 text-sm'>
      <ContentContainer>
        <p>
          Website created by ©
          <a
            className='underline'
            href='https://hellberg.io'
            target='_blank'
            rel='noreferrer'
          >
            Patrik Hellberg
          </a>{' '}
          {new Date().getFullYear()}
        </p>
        <p>Icons created by John Itebu for moja UI</p>
      </ContentContainer>
    </footer>
  )
}

export default Footer
