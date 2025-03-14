import {index, layout, route} from '@react-router/dev/routes'
import type {RouteConfig} from '@react-router/dev/routes'

export default [
  layout('./common/layouts/default.tsx', {id: 'home'}, [
    index('./features/homepage/routes/index.tsx'),
  ]),
  route('users', './common/layouts/default.tsx', [
    index('./features/users/routes/index.tsx'),
  ]),
] satisfies RouteConfig
