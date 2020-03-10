import React from 'react'
import {render} from '@testing-library/react'

export const renderPage = async (
  page,
  {getServerSideProps, getStaticPaths, getStaticProps, ...options} = {},
) => {
  if (!page.default) {
    const ui = React.createElement(page)
    return render(ui, options)
  }

  getServerSideProps = page.getServerSideProps ?? getServerSideProps
  getStaticPaths = page.getStaticPaths ?? getStaticPaths
  getStaticProps = page.getStaticProps ?? getStaticProps
  page = page.default

  // SSR
  if (getServerSideProps) {
    const result = await getServerSideProps()

    const ui = React.createElement(page, result.props)

    return render(ui, options)
  }

  // SSG with dynamic routes
  else if (getStaticPaths) {
    const staticPaths = await getStaticPaths()

    const results = await Promise.all(
      staticPaths.map(async staticPath => {
        const result = await getStaticProps(staticPath)
        const ui = React.createElement(page, result.props)
        return render(ui, options)
      }),
    )

    return results
  }

  // SSG simple route
  else {
    const result = await getStaticProps()

    const ui = React.createElement(page, result.props)

    return render(ui, options)
  }
}
