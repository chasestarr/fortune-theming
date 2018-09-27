import React from 'react'
import { ChromePicker } from 'react-color'

import { getCustomProperty, setCustomProperty } from '../utils'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayColorPicker: false,
      color: '',
    }
  }

  componentDidMount() {
    const color = getCustomProperty(this.props.name)
    if (color) {
      this.setState({ color })
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.color) return
    if (this.props.fallbackValue !== prevState.color) {
      this.setState({ color: this.props.fallbackValue })
    }
  }

  onColorChange = color => {
    setCustomProperty(this.props.name, color.hex)
    this.setState({ color: color.hex })
  }

  render() {
    return (
      <div>
        <button
          onBlur={() => this.setState({ displayColorPicker: false })}
          onClick={() =>
            this.setState(prev => ({
              displayColorPicker: !prev.displayColorPicker,
            }))
          }
          className="small marB1 wid100"
          style={{
            backgroundColor: this.state.color,
            '--button-padding': '0.25rem 0.5rem',
          }}
        >
          <span>
            {this.props.name} ({this.state.color})
          </span>
        </button>
        {this.state.displayColorPicker && (
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                position: 'absolute',
              }}
            >
              <div className="flex flexCenter">
                <ChromePicker
                  color={this.state.color}
                  onChangeComplete={this.onColorChange}
                  disableAlpha
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ColorPicker
