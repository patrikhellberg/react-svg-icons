'use client'

import ContentContainer from './components/ContentContainer'
import Context from './components/Context'
import IconResults from './components/IconResults'
import Toolbar from './components/Toolbar'

const IndexPage = () => {
  return (
    <ContentContainer>
      <Context>
        <div className='pt-24'>
          <Toolbar />
          <IconResults />
        </div>
      </Context>
    </ContentContainer>
  )
}

export default IndexPage
