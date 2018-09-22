import React from 'react'

import ColorPicker from './colorPicker'
import NumberPicker from './numberPicker'

import { getCustomProperty } from '../utils'

class Knobs extends React.Component {
  render() {
    return (
      <div>
        <h4>state colors</h4>
        <ColorPicker name="--state-primary" />
        <ColorPicker name="--state-secondary" />
        <ColorPicker name="--state-success" />
        <ColorPicker name="--state-warning" />
        <ColorPicker name="--state-danger" />
        <ColorPicker name="--state-info" />
        <h4>alert</h4>
        <NumberPicker name="--alert-border-radius" />
        <NumberPicker name="--alert-padding" />
        <ColorPicker
          name="--alert-bg-color"
          fallbackValue={getCustomProperty('--state-primary')}
        />
        <ColorPicker name="--alert-color" />
      </div>
    )
  }
}

export default Knobs
