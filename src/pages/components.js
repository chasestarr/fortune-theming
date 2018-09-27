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
          code={['<div class="alert">Default</div>',
            '<div class="alert bgPrimary">Primary</div>'
          ]}
          demo={() => (
            <div>
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
          code={['<button>Default</button>',
            '<button className="isLink">Link</button>',
            '<button className="isOutline">Outline</button>',
            '<button disabled>Outline</button>'
          ]}          
          demo={() => (
            <div>
              <div className="padB1">
                <button>Default</button>
              </div>
              <div className="padB1">
                <button className="isLink">Link</button>
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
          code={[
            `<div class="chip">Default</div>`,
            `<a class="chip">Link<a>`
          ]}
          demo={() => (
            <div>
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
          code={[
            `<ul class="dropdown">`,
            `<li><div>Title</div></li>`,
            `<li><a href="">Element 1</a></li>`,
            `<li><a href="">Element 2</a></li>`,
            `</ul>`,
          ]}
          demo={() => (
            <div>
              <ul className="dropdown">
                <li>
                  <div className="small uppercase bold">Title</div>
                </li>
                <li>
                  <a href="">Element 1</a>
                </li>
                <li>
                  <a href="">Element 2</a>
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
          code={[
            `<div className="nav">`,
            `<div class="navLeft">Left</div>`,
            `<div class="navCenter">Center</div>`,
            `<div class="navRight">Right</div>`,
            `</div>`
          ]}
          demo={() => (
            <div>
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
          code={[
            `<div class="tab">`,
            `<a href="">Default 1</a>`,
            `<a href="">Default 2</a>`,
            `</div>`,
            `<div class="tab isSimple">`,
            `<a href="">Simple 1</a>`,
            `<a href="">Simple 2</a>`,
            `</div>`,
            `<div class="tab isFull">`,
            `<a href="">Full 1</a>`,
            `<a href="">Full 2</a>`,
            `</div>`
          ]}
          demo={() => (
            <div>
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
          code={[
            `<table>...</table>`,
            `<table class="isBordered">...</table>`,
            `<table class="isStriped">...</table>`,
            `<table class="isHoverable">...</table>`,
          ]}
          demo={() => (
            <div>
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
              <NumberPicker name="--table-border-width" />
              <NumberPicker name="--table-spacing-y" />
              <NumberPicker name="--table-spacing-x" />
              <ColorPicker name="--table-border-color" />
              <ColorPicker name="--table-bg-color" />
              <ColorPicker name="--table-header-bg-color" />
              <ColorPicker name="--table-hover-color" />
              <ColorPicker name="--table-hover-bg-color" />
              <ColorPicker name="--table-stripe-bg-color" />
            </div>
          )}
        />
      </div>
    )
  }
}
