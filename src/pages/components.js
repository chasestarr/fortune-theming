import React from 'react'

import Block from '../components/block'
import ColorPicker from '../components/colorPicker'
import NumberPicker from '../components/numberPicker'
import { getCustomProperty } from '../utils'

export default () => (
  <div>
    <Block
      nav="alert.css"
      title="alert.css"
      demo={() => (
        <div>
          <p className="code pad1">
            {`<div className="alert">Default</div>`}
            <br />
            {`<div className="alert bgPrimary">Primary</div>`}
            <br />
            {`<div className="alert bgSuccess">Success</div>`}
            <br />
            {`<div className="alert bgWarning">Warning</div>`}
          </p>
          <div className="alert">Default</div>
          <div className="alert bgPrimary">Primary</div>
          <div className="alert bgSuccess">Success</div>
          <div className="alert bgWarning">Warning</div>
        </div>
      )}
      editor={() => (
        <div>
          <NumberPicker name="--alert-border-radius" />
          <NumberPicker name="--alert-padding" />
          <ColorPicker name="--alert-color" />
          <ColorPicker
            name="--alert-bg-color"
            fallbackValue={getCustomProperty('--state-primary')}
          />
        </div>
      )}
    />
  </div>
)
