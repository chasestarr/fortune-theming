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
          nav="alert.css"
          title="alert.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<div class="alert">Default</div>`}
                <br />
                {`<div class="alert bgPrimary">Primary</div>`}
                <br />
                {`<div class="alert bgSuccess">Success</div>`}
                <br />
                {`<div class="alert bgWarning">Warning</div>`}
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
                fallbackValue={this.state.primaryColor}
              />
            </div>
          )}
        />

        <Block
          nav="button.css"
          title="button.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<button>Default</button>`}
                <br />
                {`<button class="isOutline">Default</button>`}
                <br />
                {`<button disabled>Disabled</button>`}
              </p>
              <div className="padB1">
                <button>Default</button>
              </div>
              <div className="padB1">
                <button className="isOutline">Outline</button>
              </div>
              <div>
                <button disabled>Disabled</button>
              </div>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--button-font-family" />
              <NumberPicker name="--button-font-size" />
              <NumberPicker name="--button-font-weight" />
              <NumberPicker name="--button-border-radius" />
              <NumberPicker name="--button-border-width" />
              <NumberPicker name="--button-padding" />
              <NumberPicker name="--button-speed" />
              <ColorPicker name="--button-color" />
              <ColorPicker name="--button-bg-color" />
            </div>
          )}
        />

        <Block
          nav="chip.css"
          title="chip.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<div class="chip">Default</div>`}
                <br />
                {`<a class="chip">Link<a>`}
              </p>
              <div className="chip marR1">Default</div>
              <a href="" className="chip">
                Link
              </a>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--chip-font-size" />
              <NumberPicker name="--chip-border-radius" />
              <NumberPicker name="--chip-padding" />
              <NumberPicker name="--chip-speed" />
              <NumberPicker name="--chip-weight" />
              <NumberPicker name="--chip-focus" />
              <ColorPicker name="--chip-color" />
              <ColorPicker name="--chip-bg-color" />
              <ColorPicker name="--chip-border-color" />
              <ColorPicker name="--chip-link-color" />
            </div>
          )}
        />

        <Block
          nav="dropdown.css"
          title="dropdown.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<ul class="dropdown">`}
                <div className="padL1">
                  {`<li>`}
                  <div className="padL1">{`<a href="">Element 1</a>`}</div>
                  {`</li>`}
                </div>
                <div className="padL1">
                  {`<li>`}
                  <div className="padL1">{`<a href="">Element 2</a>`}</div>
                  {`</li>`}
                </div>
                <div className="padL1">
                  {`<li>`}
                  <div className="padL1">{`<a href="">Element 3</a>`}</div>
                  {`</li>`}
                </div>
                {`</ul>`}
              </p>
              <ul className="dropdown">
                <li>
                  <a href="">Element 1</a>
                </li>
                <li>
                  <a href="">Element 2</a>
                </li>
                <li>
                  <a href="">Element 3</a>
                </li>
              </ul>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--dropdown-border-radius" />
              <NumberPicker name="--dropdown-border-width" />
              <NumberPicker name="--dropdown-padding" />
              <ColorPicker name="--dropdown-bg-color" />
              <ColorPicker name="--dropdown-border-color" />
            </div>
          )}
        />
      </div>
    )
  }
}
