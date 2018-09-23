import React from 'react'

import Block from '../components/block'
import logo from '../assets/crystal.svg'

export default () => (
  <div>
    <img className="marT2 wid25" src={logo}/>
    <Block
      nav="introduction"
      title=""
      body={() => (
        <p className="h4">
          Fortune.css is a simple CSS variables driven library. It is light,
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
          <p className="code pad1 marB2">
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/fortune.css/dist/fortune.min.css"
          </p>
          <p className="bold">Install from NPM</p>
          <p className="code pad1 marB2">npm install fortune.css</p>
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
          <p className="code pad1 marB2">
            npm install
            <br />
            npm run build
          </p>
        </div>
      )}
    />

    <Block
      nav="theming"
      title="Theming"
      body={() => (
        <div>
          <p>
            Since Fortune is based on CSS proporties, theming is simple. Simply
            add :root or :scope definitions to your CSS.
          </p>
          <p className="code pad1 marB2">
            {`:root {`}
            <div className="marL1">
              {`--font-family: 'Roboto', sans-serif;`}
              <br />
              {`--headings-font-family: 'Roboto', sans-serif;`}
              <br />
              {`--container-width: 125em;`}
              <br />
              {`--column-gutter: var(--space-4);`}
            </div>
            {`}`}
          </p>
        </div>
      )}
    />
    <Block
      nav="tokens"
      title="Tokens"
      demo={() => (
        <div>
          <h4>Colors</h4>
          <div className="grid gridCols4 gridGap1 white marB2">
            <div className="bgRed">--red</div>
            <div className="bgPink">--pink</div>
            <div className="bgGrape">--grape</div>
            <div className="bgViolet">--violet</div>
            <div className="bgIndigo">--indigo</div>
            <div className="bgBlue">--blue</div>
            <div className="bgCyan">--cyan</div>
            <div className="bgTeal">--teal</div>
            <div className="bgGreen">--green</div>
            <div className="bgLime">--lime</div>
            <div className="bgYellow">--yellow</div>
            <div className="bgOrange">--orange</div>
            <div className="bgPrimary">--state-primary</div>
            <div className="bgSecondary">--state-secondary</div>
            <div className="bgSuccess">--state-success</div>
            <div className="bgInfo">--state-info</div>
            <div className="bgWarning">--state-warning</div>
            <div className="bgDanger">--state-danger</div>
            <div className="bgDisabled">--state-disabled</div>
            <div className="bgWhite gray">--white</div>
            <div className="bgSmoke gray">--smoke</div>
            <div className="bgLight gray">--light</div>
            <div className="bgSilver">--silver</div>
            <div className="bgDark">--dark</div>
            <div className="bgGray">--gray</div>
            <div className="bgBlack">--black</div>
          </div>          
        </div>
      )}
      reference={['--space-0', '--hdg', '--media-hdg', '--columns-width', '--column-gutter', '--column-gap', '--border-width', '--component-bg-color', '--component-border-color', '--component-border-radius', '--component-border-width', '--component-focus', '--component-speed', '--component-shadow', '--component-margin-bottom', '--component-padding', '--darken', '--darken-more', '--lighten', '--lighten-more','--shadow','--shadow-more']}    />
  </div>
)
