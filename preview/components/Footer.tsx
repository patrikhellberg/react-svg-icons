import ContentContainer from './ContentContainer'

const Footer = () => {
  return (
    <footer className='bg-gray-500 text-white py-10 text-sm'>
      <ContentContainer>
        <p>
          Website created by ©
          <a
            className='underline'
            href='https://bucketmedia.se'
            target='_blank'
            rel='noreferrer'
          >
            Bucket Media AB
          </a>{' '}
          {new Date().getFullYear()}
        </p>
        <p>Icons created by John Itebu for moja UI.</p>
      </ContentContainer>
    </footer>
  )
}

export default Footer
