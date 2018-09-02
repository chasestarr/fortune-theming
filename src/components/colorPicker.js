import React from 'react'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    const styles = getComputedStyle(document.documentElement)

    this.state = {
      displayColorPicker: false,
      color: this.getCustomProperty(this.props.name),
    }
  }

  getCustomProperty = name => {
    const styles = getComputedStyle(document.documentElement)
    return styles.getPropertyValue(this.props.name)
  }

  setCustomProperty = (name, value) =>
    document.documentElement.style.setProperty(name, value)

  onColorChange = color => {
    console.log(color)
    const hsl = `hsla(${color.hsl.h},${color.hsl.s * 100}%,${color.hsl.l *
      100}%, ${color.hsl.a})`
    this.setCustomProperty(this.props.name, hsl)
    this.setState({ color: color.hex })
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState(prev => ({
              displayColorPicker: !prev.displayColorPicker,
            }))
          }
          className="bordWhite"
          style={{ backgroundColor: `var(${this.props.name})` }}
        >
          {this.props.name}
        </button>
        <h6>{this.state.color}</h6>
        {this.state.displayColorPicker && (
          <SketchPicker
            color={this.state.color}
            onChangeComplete={this.onColorChange}
          />
        )}
      </div>
    )
  }
}

export default ColorPicker
