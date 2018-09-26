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
                <div class="padL1">
                  {`<li>`}
                  <div class="padL1">{`<a href="">Element 1</a>`}</div>
                  {`</li>`}
                </div>
                <div class="padL1">
                  {`<li>`}
                  <div class="padL1">{`<a href="">Element 2</a>`}</div>
                  {`</li>`}
                </div>
                <div class="padL1">
                  {`<li>`}
                  <div class="padL1">{`<a href="">Element 3</a>`}</div>
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

        <Block
          nav="nav.css"
          title="nav.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<div className="nav">`}
                <div className="padL1">
                  {`<div class="navLeft">Left</div>`}
                  <br />
                  {`<div class="navCenter">Center</div>`}
                  <br />
                  {`<div class="navRight">Right</div>`}
                </div>
                {`</div>`}
              </p>
              <div className="nav">
                <div className="navLeft">Left</div>
                <div className="navCenter">Center</div>
                <div className="navRight">Right</div>
              </div>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--nav-height" />
              <NumberPicker name="--nav-padding" />
              <ColorPicker name="--nav-link-color" />
            </div>
          )}
        />

        <Block
          nav="tab.css"
          title="tab.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<div class="tab">`}
                <div className="padL1">
                  {`<a href="">Default 1</a>`}
                  <br />
                  {`<a href="">Default 2</a>`}
                </div>
                {`</div>`}
                <br />
                {`<div class="tab isSimple">`}
                <div className="padL1">
                  {`<a href="">Simple 1</a>`}
                  <br />
                  {`<a href="">Simple 2</a>`}
                </div>
                {`</div>`}
                <br />
                {`<div class="tab isFull">`}
                <div className="padL1">
                  {`<a href="">Full 1</a>`}
                  <br />
                  {`<a href="">Full 2</a>`}
                </div>
                {`</div>`}
                <br />
              </p>
              <div className="tab">
                <a href="">Default 1</a>
                <a href="">Default 2</a>
              </div>
              <div className="tab isSimple padT1">
                <a href="">Simple 1</a>
                <a href="">Simple 2</a>
              </div>
              <div className="tab isFull padT1">
                <a href="">Full 1</a>
                <a href="">Full 2</a>
              </div>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--tab-padding" />
              <NumberPicker name="--tab-border" />
              <ColorPicker name="--tab-color" />
              <ColorPicker name="--tab-border-color" />
            </div>
          )}
        />

        <Block
          nav="table.css"
          title="table.css"
          demo={() => (
            <div>
              <p className="code pad1">
                {`<table>...</table>`}
                <br />
                {`<table class="isBordered">...</table>`}
                <br />
                {`<table class="isStriped">...</table>`}
                <br />
                {`<table class="isHoverable">...</table>`}
              </p>
              <table>
                <tr>
                  <th>Default A</th>
                  <th>Default B</th>
                  <th>Default C</th>
                </tr>
                <tr>
                  <td>element 1:a</td>
                  <td>element 1:b</td>
                  <td>element 1:c</td>
                </tr>
                <tr>
                  <td>element 2:a</td>
                  <td>element 2:b</td>
                  <td>element 2:c</td>
                </tr>
                <tr>
                  <td>element 3:a</td>
                  <td>element 3:b</td>
                  <td>element 3:c</td>
                </tr>
              </table>

              <table className="isBordered">
                <tr>
                  <th>Bordered A</th>
                  <th>Bordered B</th>
                  <th>Bordered C</th>
                </tr>
                <tr>
                  <td>element 1:a</td>
                  <td>element 1:b</td>
                  <td>element 1:c</td>
                </tr>
                <tr>
                  <td>element 2:a</td>
                  <td>element 2:b</td>
                  <td>element 2:c</td>
                </tr>
                <tr>
                  <td>element 3:a</td>
                  <td>element 3:b</td>
                  <td>element 3:c</td>
                </tr>
              </table>

              <table className="isStriped">
                <tr>
                  <th>Striped A</th>
                  <th>Striped B</th>
                  <th>Striped C</th>
                </tr>
                <tr>
                  <td>element 1:a</td>
                  <td>element 1:b</td>
                  <td>element 1:c</td>
                </tr>
                <tr>
                  <td>element 2:a</td>
                  <td>element 2:b</td>
                  <td>element 2:c</td>
                </tr>
                <tr>
                  <td>element 3:a</td>
                  <td>element 3:b</td>
                  <td>element 3:c</td>
                </tr>
                <tr>
                  <td>element 4:a</td>
                  <td>element 4:b</td>
                  <td>element 4:c</td>
                </tr>
              </table>

              <table className="isHoverable">
                <tr>
                  <th>Hoverable A</th>
                  <th>Hoverable B</th>
                  <th>Hoverable C</th>
                </tr>
                <tr>
                  <td>element 1:a</td>
                  <td>element 1:b</td>
                  <td>element 1:c</td>
                </tr>
                <tr>
                  <td>element 2:a</td>
                  <td>element 2:b</td>
                  <td>element 2:c</td>
                </tr>
                <tr>
                  <td>element 3:a</td>
                  <td>element 3:b</td>
                  <td>element 3:c</td>
                </tr>
              </table>
            </div>
          )}
          editor={() => (
            <div>
              <NumberPicker name="--table-spacing-y" />
              <NumberPicker name="--table-border-width" />
              <NumberPicker name="--table-border-color" />
              <NumberPicker name="--table-spacing-y" />
              <NumberPicker name="--table-spacing-x" />
              <ColorPicker name="--table-bg-color" />
              <ColorPicker name="--table-header-bg-color" />
              <ColorPicker name="--table-border-color" />
              <ColorPicker name="--table-hover-bg-color" />
              <ColorPicker name="--table-stripe-bg-color" />
            </div>
          )}
        />
      </div>
    )
  }
}
