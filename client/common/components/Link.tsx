import clsx from 'clsx'
import {Link as RRLink} from 'react-router'
import type {LinkProps} from 'react-router'

export const Link = (props: LinkProps) => {
  return (
    <RRLink
      {...props}
      className={clsx(props.className, 'text-blue-700 text-lg font-medium')}
    />
  )
}
