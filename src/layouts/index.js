import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="cols isFull">
      <div className="col2 bgSmoke padX3">
        <ul className="sticky top2">
          <li>
            <a href="/" className="h3">
              🔮
            </a>
          </li>
          <li className="marB4 isGap">
            <a href="/#introduction" className="gray bold">
              Introduction
            </a>
          </li>
          <li className="marL4 marB4 isGap">
            <a href="/#install" className="gray bold">
              Install
            </a>
          </li>
          <li className="marL4 marB4 isGap">
            <a href="/#theming" className="gray bold">
              Theming
            </a>
          </li>
          <li className="marL4 marB4 isGap">
            <a href="/#variables" className="gray bold">
              Variables
            </a>
          </li>
          <li className="marB4 isGap">
            <a href="/layout" className="gray bold">
              Layout
            </a>
          </li>

          <li className="marB4 isGap">
            <a href="/components" className="gray bold">
              Components
            </a>
          </li>
          <li className="marB4 isGap">
            <a href="/utilities" className="gray bold">
              Utilities
            </a>
          </li>

          <li className="marB4 isGap">
            <a href="https://github.com/atav1k/fortune" className="gray bold">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="col10">{children()}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
