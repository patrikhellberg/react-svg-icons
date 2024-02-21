import ContentContainer from './components/ContentContainer'
import IconResults from './components/IconResults'
import SearchBar from './components/SearchBar'

const IndexPage = () => {
  return (
    <ContentContainer>
      <div className='pt-24'>
        <SearchBar />
        <IconResults />
      </div>
    </ContentContainer>
  )
}

export default IndexPage
