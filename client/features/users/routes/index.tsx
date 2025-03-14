import type {Route} from '@rr/users/routes/+types/index'
import {HydrationBoundary} from '@tanstack/react-query'
import type {MetaFunction} from 'react-router'
import {UserPage} from '../pages/Users'
import {dehydrateUserState, fetchUserData} from '../queries/users'
import {generatePageTitle} from '@common/util/page-title'

export const meta: MetaFunction = () => {
  return [{title: generatePageTitle('Users')}]
}

export const loader = async () => {
  const {queryClient} = await fetchUserData()
  const dehydratedUserState = dehydrateUserState(queryClient)
  return {dehydratedUserState}
}

export default ({loaderData}: Route.ComponentProps) => {
  return (
    <HydrationBoundary state={loaderData.dehydratedUserState}>
      <UserPage />
    </HydrationBoundary>
  )
}
