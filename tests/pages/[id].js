import React from 'react'

const StaticPages = (props) => {
  return (
    <p>
      id: {props.id}
    </p>
  )
}

export default StaticPages


export const getStaticPaths = () => {
  return Promise.resolve([
    {params: { id: 0 }},
    {params: { id: 1 }},
    {params: { id: 2 }}
  ])
}

export const getStaticProps = ({params}) => {
  return ({
    props: { id: params.id }
  })
}
