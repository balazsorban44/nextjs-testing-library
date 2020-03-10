import * as page from '../../tests/pages/static'
import {render} from '..'

test('renders with getStaticProps', async () => {
  const {container} = await render(page)

  expect(container).toHaveTextContent(/id: 1/)
})
