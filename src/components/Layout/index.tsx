import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  subTitle?: string
}

export const Layout = ({title, subTitle}: Props) => {
  return (
    <Helmet>
      {title ? <title>{title} | Rick & Morty</title> : <title>Rick & Morty</title>}
      {subTitle && <meta name='description' content={subTitle}/>}
    </Helmet>
  )
}
