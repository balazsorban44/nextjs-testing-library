import * as page from '../../tests/pages/ssr'
import {render, screen} from '..'

jest.mock('isomorphic-unfetch', () => () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        user: {
          name: 'John Doe',
          age: 25,
        },
      }),
  }),
)

test('renders with getServerSideProps', async () => {
  await render(page)
  expect(screen.getByText(/id: 1/)).toBeInTheDocument()
  expect(screen.getByText(/name: John Doe/)).toBeInTheDocument()
  expect(screen.getByText(/age: 25/)).toBeInTheDocument()
})
