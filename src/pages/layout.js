import React from 'react'

import Block from '../components/block'
import NumberPicker from '../components/numberPicker'

export default () => (
  <div>
    <Block
      nav="position.css"
      title="position.css"
      body={() => (
        <p>
          Position makes use of Custom Property fallback values. In regular use
          they follow they follow a scale from 1-9 of 1rem-16rem. An element can
          use gap spacing by adding the modifier class isGap which follow a
          scale from 1-9 of 0.0625rem-2rem. Children elements of .isGap default
          to standard spacing. Gap values should never be assigned in :root as
          fallbacks in Fortune rely on empty initial states.
        </p>
      )}
      demo={() => (
        <div>
          <p className="marL1 isGap">marL0 isGap</p>
          <p className="marL4 isGap">marL4 isGap</p>
          <p className="marL1">marL1</p>
          <p className="marL4">marL4</p>
        </div>
      )}
      editor={() => (
        <div>
          <NumberPicker name="--space-1" />
          <NumberPicker name="--space-4" />
        </div>
      )}
    />
  </div>
)
