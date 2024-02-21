import { PropsWithChildren } from 'react'

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <div className='max-w-[1400px] mx-auto px-4'>{children}</div>
}

export default ContentContainer
