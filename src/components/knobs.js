import React from 'react'

import ColorPicker from './colorPicker'

class Knobs extends React.Component {
  render() {
    return (
      <div>
        <ColorPicker name="--state-primary" />
        <ColorPicker name="--state-secondary" />
        <ColorPicker name="--state-success" />
        <ColorPicker name="--state-warning" />
        <ColorPicker name="--state-danger" />
        <ColorPicker name="--state-info" />
      </div>
    )
  }
}

export default Knobs
