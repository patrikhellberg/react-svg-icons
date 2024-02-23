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
    <label htmlFor={id} className='cursor-pointer flex gap-4 items-center'>
      <p className='hidden sm:block'>
        {checked ? checkedLabel : unCheckedLabel}
      </p>
      <span className='h-4 w-8 border border-solid border-gray-600 rounded-full relative'>
        <span
          className={` transition-all h-3 w-3 rounded-full bg-black dark:bg-slate-500 absolute top-px ${
            checked ? 'left-4' : 'left-px'
          }`}
        />
      </span>
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
