import * as page from '../../tests/pages/[id]'
import { render } from '..'

test('renders with getStaticPaths', async () => {
  const ssgPages = await render(page)
  ssgPages.forEach((ssgPage, index) => {
    const el = ssgPage.getByText(new RegExp(`id. ${index}`))
    expect(el).toBeInTheDocument()
  })
})