import { Helmet } from 'react-helmet'

import React from 'react'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='description' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to AmazShop',
  description: 'We Sell The Best Products at Best Price',
  keywords: 'electronics',
}
export default Meta
