'use client'

export type E = {
  target: {
    checked: Boolean
  }
}

type Props = {
  checkedLabel: string
  unCheckedLabel: string
  id: string
  checked: boolean
  onChange: (e: E) => void
}

const Toggle = ({
  id,
  checked,
  onChange,
  checkedLabel,
  unCheckedLabel,
}: Props) => {
  return (
    <label htmlFor={id} className='cursor-pointer'>
      <p>{checked ? checkedLabel : unCheckedLabel}</p>
      <input
        className='hidden'
        type='checkbox'
        id={id}
        onChange={onChange}
        checked={checked}
      />
    </label>
  )
}

export default Toggle
