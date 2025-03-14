import {Link} from '@common/components/Link'
import {UserList} from '../components/UserList'

export const UserPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Link to="/">Go home</Link>
      <h1 className="text-3xl text-slate-700 font-semibold">Users from API</h1>
      <UserList />
    </section>
  )
}
