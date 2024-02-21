import { PropsWithChildren } from 'react'
import ContentContainer from './ContentContainer'
import Header from './Header'
import Footer from './Footer'
import DarkModeProvider from './DarkModeProvider'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <DarkModeProvider>
      <Header />
      <div className=' transition-colors bg-gray-100 dark:bg-black'>
        <ContentContainer>
          <div className='min-h-screen'>
            <div className='pt-20'>{children}</div>
          </div>
        </ContentContainer>
      </div>
      <Footer />
    </DarkModeProvider>
  )
}

export default PageLayout
