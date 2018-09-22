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
          .mar and .pad follow a scale from 1-9 of 1rem-16rem. An element can
          use gap spacing with the modifier class .isGap. Gap follow a
          scale from 1-9 of 0.0625rem-2rem. Children elements of .isGap default
          to standard spacing. Unlike space properties (--space-1), gap properties (--gap-1) should never be assigned in :root since
          fallbacks in Fortune rely on empty initial states.
        </p>
      )}
      demo={() => (
        <div>
          <p className="marL1">marL1</p>
          <p className="marL2">marL2</p>
          <p className="marL3">marL3</p>
          <p className="marL4">marL4</p>
          <p className="marL5">marL5</p>
          <p className="marL6">marL6</p>
          <p className="marL7">marL7</p>
          <p className="marL8">marL8</p>
          <p className="marL9">marL9</p>
        </div>
      )}
      reference={['mar1', 'mar2', 'mar3', 'mar4', 'mar5', 'mar6', 'mar7', 'mar8', 'mar9', 'marT1', 'marR1', 'marB1', 'marL1', 'marX1', 'marY1', 'marXAuto', 'pad1', 'pad2', 'pad3', 'pad4', 'pad5', 'pad6', 'pad7', 'pad8', 'pad9']}
      editor={() => (
        <div>
          <NumberPicker name="--space-1" />
          <NumberPicker name="--space-2" />
          <NumberPicker name="--space-3" />
          <NumberPicker name="--space-4" />
          <NumberPicker name="--space-5" />
          <NumberPicker name="--space-6" />
          <NumberPicker name="--space-7" />
          <NumberPicker name="--space-8" />
          <NumberPicker name="--space-9" />          
        </div>
      )}
    />
    <Block
      nav="dimension.css"
      title="dimension.css"
      body={() => (
        <p>
          Dimension makes use of Custom Property fallback values to specify height, width, and viewport height and viewport width, .ht, .wid, .viewHt, .viewWid. In regular use
          .ht and .wid follow a scale from 1-9 of 1rem-16rem. An element can
          use gap spacing by adding the modifier class .isGap which follow a
          scale from 1-9 of 0.0625rem-2rem. Children elements of .isGap default
          to standard spacing. Gap values should never be assigned in :root as
          fallbacks in Fortune rely on empty initial states.
        </p>
      )}
      demo={() => (
        <div>
          <p className="wid2 bgLight">wid2</p>
          <p className="wid4 bgLight">wid4</p>
          <p className="wid6 bgLight">wid6</p>
          <p className="ht2 bgLight">ht2</p>
          <p className="ht4 bgLight">ht4</p>
          <p className="viewWid25 bgLight">wid6</p>
        </div>
      )}
      editor={() => (
        <div>
          <NumberPicker name="--space-1" />
          <NumberPicker name="--space-2" />
          <NumberPicker name="--space-3" />
          <NumberPicker name="--space-4" />
          <NumberPicker name="--space-5" />
          <NumberPicker name="--space-6" />
          <NumberPicker name="--space-7" />
          <NumberPicker name="--space-8" />
          <NumberPicker name="--space-9" />          
        </div>
      )}
    />    
  </div>
)
