import React from 'react'

import Block from '../components/block'

export default () => (
  <div>
    <Block
      nav="introduction"
      title="Introduction"
      body={() => (
        <p className="h4">
          Fortune.css is a friendly CSS variables driven library. It is light,
          customizable and needs no preprocessor builds.
        </p>
      )}
      demo={() => (
        <div>
          <p>
            Fortune is well suited to static sites and code pens, and built to
            support new CSS specs using current style and naming conventions.
          </p>
          <div className="cols">
            <ul className="col">
              <li className="bold">Benefits</li>
              <li>🌈 Uses CSS custom properties</li>
              <li>⚡️ Light-weight at ~ 10kb gzipped</li>
              <li>⛔️ No preprocessor required</li>
            </ul>
            <ul className="col">
              <li className="bold">Features</li>
              <li>📐 Supports CSS grids and flexbox</li>
              <li>🥊 Non-blocking utility classes</li>
              <li>💧 Essential components to start</li>
            </ul>
          </div>
        </div>
      )}
    />
  </div>
)
