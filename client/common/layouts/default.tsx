import {Container} from '@common/components/Container'
import {Outlet} from 'react-router'

export default function Default() {
  return (
    <main>
      <Container>
        <div className="mt-12">
          <Outlet />
        </div>
      </Container>
    </main>
  )
}
