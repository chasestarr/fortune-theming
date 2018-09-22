import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="nav">
    <div className="navLeft">
      <h2>{siteTitle}</h2>
    </div>
  </div>
)

export default Header
