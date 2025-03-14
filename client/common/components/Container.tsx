import clsx from 'clsx'
import type {PropsWithChildren} from 'react'

type Props = PropsWithChildren<{
  size?: 'sm' | 'lg'
}>

export function Container({children, size = 'sm'}: Props) {
  return (
    <div
      className={clsx('mx-auto px-4 box-content', {
        'max-w-2xl': size === 'sm',
        'max-w-6xl': size === 'lg',
      })}
    >
      {children}
    </div>
  )
}
