'use client'

import SVG, { LinkSimple, CheckCircle } from '@bm-js/icons'
import { useState } from 'react'
import { appUrl } from '../utils/config'

type Props = {
  width: number
  link: string
}

const CopyLink = ({ width, link }: Props) => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`${appUrl}/${link}`)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1000)
  }

  return (
    <button title='Copy link' onClick={handleCopy}>
      <SVG
        icon={hasCopied ? CheckCircle : LinkSimple}
        width={width}
        pathClassName='dark:stroke-slate-500'
      />
    </button>
  )
}

export default CopyLink
