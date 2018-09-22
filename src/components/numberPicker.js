import React from 'react'

import { getCustomProperty, setCustomProperty } from '../utils'

class NumberPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    const value = getCustomProperty(this.props.name)
    if (value) {
      this.setState({ value })
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.value) return
    if (this.props.fallbackValue !== prevState.value) {
      this.setState({ value: this.props.fallbackValue })
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
