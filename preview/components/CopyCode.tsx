'use client'

import { useState } from 'react'

type Props = {
  code: string
}

const CopyCode = ({ code }: Props) => {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1000)
  }

  return (
    <button
      title='Copy code'
      onClick={handleCopy}
      className='border border-solid border-black dark:border-slate-500 rounded font-medium px-6 py-2'
    >
      {hasCopied ? 'Copied code' : 'Copy code'}
    </button>
  )
}

export default CopyCode
