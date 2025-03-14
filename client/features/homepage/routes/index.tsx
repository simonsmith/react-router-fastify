import type {MetaFunction} from 'react-router'
import {Home} from '../pages/Home'
import {generatePageTitle} from '@common/util/page-title'

export const meta: MetaFunction = () => {
  return [{title: generatePageTitle('Home')}]
}

export default () => {
  return <Home />
}
