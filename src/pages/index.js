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

    <Block
      nav="installation"
      title="Installation"
      body={() => (
        <div>
          <p>
            There are a few ways to use Fortune. You can use the CDN, install it
            from NPM or download it.
          </p>
          <p className="bold">Load from CDN</p>
          <p>
            <code className="pad1 marB2">
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css"
            </code>
          </p>
          <p className="bold">Install from NPM</p>
          <p>
            <code className="pad1 marB2">npm install fortune-css</code>
          </p>
          <p className="bold">Use manually</p>
          <p>
            <a href="https://github.com/atav1k/fortune/archive/master.zip">
              Download
            </a>
          </p>
          <p>
            Fortune uses postcss and gulp to generate autoprefixed CSS should
            you want to build your own components.
          </p>
          <p>
            <code className="pad1 marB2">npm install && gulp build</code>
          </p>
        </div>
      )}
    />
  </div>
)
