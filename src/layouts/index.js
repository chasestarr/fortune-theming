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
      <div className="col2 bgSmoke">
        <ul className="sticky top2 padX2 padReset hide">
          <li className="marB4 isGap">
            <a href="/#introduction" className="gray bold">
              Introduction
            </a>
          </li>
          <li className="marL4 marB4 isGap">
            <a href="/#installation" className="gray bold">
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
              Variable
            </a>
          </li>
          <li className="marL4 marB4 isGap">
            <a href="/#tokens" className="gray bold">
              Token
            </a>
          </li>
          <li className="marB4 isGap">
            <a className="gray bold isDisabled">
              Element
            </a>
          </li>          
          <li className="marB4 isGap">
            <a href="/components" className="gray bold">
              Component
            </a>
          </li>
          <li className="marB4 isGap">
            <a href="/layout" className="gray bold">
              Layout
            </a>
          </li>
          <li className="isGap">
            <a className="gray bold isDisabled">
              Utility
            </a>
          </li>
          <li className="marT4">
            <a href="https://github.com/atav1k/fortune" className="bold">
              Github
            </a>
          </li>
          <li className="marT4 isGap dark">
          Fortune by
        </li>
          <li className="">
            <a href="https://twitter.com/atav1k/" className="gray">
              @atav1k
            </a> & <a href="https://twitter.com/captivechains/" className=" gray">
              @captivechains
            </a>
          </li>
        </ul>
      </div>
      <div className="col10">
        <div className="padX2 padReset">
          {children()}
        </div>
      </div>
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
