import React from 'react'
import fetch from 'isomorphic-unfetch'

const StaticPage = props => {
  return (
    <>
      <p>id: {props.id}</p>
      <p>name: {props.user.name}</p>
      <p>age: {props.user.age}</p>
    </>
  )
}

export default StaticPage

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()

  return {
    props: data,
  }
}
