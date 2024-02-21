import React from 'react'

type Props = {
  className?: string
  placeholder?: string
  type?: string
  onChange: any
  value: any
  label?: string
  id: string
}

const Input = (props: Props) => {
  const { className, label, ...inputProps } = props
  let baseClassNames =
    'rounded text-base px-4 py-2 outline-none w-full w-64 border border-solid border-gray-500 bg-white dark:bg-slate-800'
  if (props.type === 'color') baseClassNames += ' px-0 py-0 h-10'
  return (
    <div className='w-full'>
      <label className='block font-medium text-sm mb-1' htmlFor={props.id}>
        {label}
      </label>
      <input
        {...inputProps}
        className={`${baseClassNames} ${className ? className : ''}`}
      />
    </div>
  )
}

export default Input
