import type {User as UserProps} from '@shared/types/user'

type Props = {
  children: UserProps['name']
  role: UserProps['role']
}

export const User = ({children, role}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-slate-500 text-sm">{role}</p>
      <p className="text-slate-700">{children}</p>
    </div>
  )
}
