import { PropsWithChildren } from 'react'
import ContentContainer from './ContentContainer'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <ContentContainer>
        <div className='min-h-screen'>
          <div className='pt-24'>{children}</div>
        </div>
      </ContentContainer>
      <Footer />
    </>
  )
}

export default PageLayout
