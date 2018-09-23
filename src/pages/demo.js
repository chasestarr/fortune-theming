import React from 'react'

import Block from '../components/block'
import ColorPicker from '../components/colorPicker'
import NumberPicker from '../components/numberPicker'
import { getCustomProperty } from '../utils'

export default class Components extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      primaryColor: '#FFFFFF',
    }
  }

  componentDidMount() {
    const primaryColor = getCustomProperty('--state-primary')
    this.setState({ primaryColor })
  }

  render() {
    return (
      <div>
        <Block
          nav="alert"
          title="Alert"
          demo={() => (
            <div>
              <div className="alert">Alert</div>
              <div className="alert bgSuccess">Alert</div>
              <div className="alert bgInfo">Alert</div>
              <div className="button marR1">Button</div>
              <div className="button isOutline marR1">Button</div>
              <div className="button isLink marR1">Button</div>
              <div className="button isDisabled marR1">Button</div><br/>
              <div className="chip marR1 marT1">Chip</div>
              <div className="chip marR1 marT1">Chip</div><br/>              
              <ul className="dropdown marT1">
              <li>Dropdown Menu</li>
              <li><a>Dropdown Menu</a></li>
              <li><a>Dropdown Menu</a></li>
              <li><a>Dropdown Menu</a></li>
              </ul><br/>              
            </div>
          )}
          editor={() => (
            <div>
              <p className="bold marT1">Custom Properties</p>
              <ColorPicker name="--state-primary" />
              <ColorPicker name="--state-success" />
              <ColorPicker name="--state-info" />   
              <NumberPicker name="--component-border-width" />
              <NumberPicker name="--alert-border-radius" />
              <ColorPicker name="--alert-color" />
              <ColorPicker name="--button-color"
                fallbackValue={this.state.primaryColor}
               />
              <ColorPicker name="--button-bg-color"
                fallbackValue={this.state.primaryColor}
              />
              <ColorPicker name="--chip-bg-color"
                fallbackValue={this.state.smoke}
              />                      
            </div>
          )}
        />
      </div>
    )
  }
}
