import React from 'react'

import { getCustomProperty, setCustomProperty } from '../utils'

class NumberPicker extends React.Component {
  constructor(props) {
    super(props)

    const value = getCustomProperty(props.name)

    this.state = {
      value: value ? value : props.fallbackValue,
    }
  }

  onChange = event => {
    const value = event.target.value
    setCustomProperty(this.props.name, value)
    this.setState({ value })
  }

  render() {
    return (
      <div className="small inputGroup">
        <span className="inputAddon">{this.props.name}</span>
        <input onChange={this.onChange} value={this.state.value} />
      </div>
    )
  }
}

export default NumberPicker
