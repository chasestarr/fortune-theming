import React from 'react'

import { states } from '../constants'

import Knobs from '../components/knobs'

const IndexPage = () => (
  <div className="cols">
    <div className="col4">
      <Knobs />
    </div>
    <div className="col8">
      <h3>Alert</h3>
      <div>
        <div className="alert">Default</div>
        {states.map(state => (
          <div className={`alert bg${state.upper}`}>{state.upper}</div>
        ))}
      </div>

      <h3>Border</h3>
      <div>
        <div className="bord0 marB1">.bord0</div>
        <div className="bord1 marB1">.bord1</div>
        <div className="bord2 marB1">.bord2</div>
        <div className="bordWid marB2">.bordWid</div>

        {states.map(state => (
          <div className={`bord1 bord${state.upper} marB1`}>{state.upper}</div>
        ))}
      </div>

      <h3>Button</h3>
      <div>
        {states.map(state => {
          return (
            <div className="marB1">
              <button className={`bg${state.upper} bord${state.upper} marR1`}>
                {state.upper}
              </button>
              <button
                className={`bg${state.upper} bord${state.upper} isActive marR1`}
              >
                Active
              </button>
              <button
                className={`${state.lower} bg${state.upper} bord${
                  state.upper
                } isOutline marR1`}
              >
                Outline
              </button>
              <button
                disabled
                className={`bg${state.upper} bord${state.upper}`}
              >
                Disabled
              </button>
            </div>
          )
        })}
      </div>

      <h3>Chip</h3>
      <div>
        <a href="https://github.com/atav1k/fortune" className="chip">
          chip
        </a>
      </div>
    </div>
  </div>
)

export default IndexPage
