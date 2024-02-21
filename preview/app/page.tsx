'use client'

import ContentContainer from './components/ContentContainer'
import Context from './components/Context'
import IconResults from './components/IconResults'
import SearchBar from './components/SearchBar'

const IndexPage = () => {
  return (
    <ContentContainer>
      <Context>
        <div className='pt-24'>
          <SearchBar />
          <IconResults />
        </div>
      </Context>
    </ContentContainer>
  )
}

export default IndexPage
