import {useUserQuery} from '../queries/users'
import {User} from './User'

export const UserList = () => {
  const {data, isPending, isError} = useUserQuery()

  if (isPending) {
    return <p className="text-slate-700 text-sm">loading users...</p>
  }
  if (isError) {
    return <p className="text-slate-700 text-sm">there was an error</p>
  }

  return (
    <ul className="flex flex-col gap-4">
      {data.map((item) => {
        return (
          <li key={item.name}>
            <User role={item.role}>{item.name}</User>
          </li>
        )
      })}
    </ul>
  )
}
