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
          Contains padding and margin.
        </p>        
      )}
      demo={() => (
        <div className="violet bold">
          <p className="marL0">marL0</p>
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
      reference={['mar1', 'marT1', 'marR1', 'marB1', 'marL1', 'marX1', 'marY1', 'marXAuto', 'pad1', 'padT1', 'padR1', 'padB1', 'padL1', 'padX1', 'padY1']}
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
          Contains width, height, viewport width, viewport heigh and max width.
        </p>        
      )}
      demo={() => (
        <div>
          <p className="wid2 bgLight">wid2</p>
          <p className="wid4 bgLight">wid4</p>
          <p className="ht2 bgLight">ht2</p>
          <p className="ht4 bgLight">ht4</p>
          <p className="viewWid25 bgLight">viewWid25</p>
          <p className="viewHt25 bgLight">viewHt25</p>
          <p className="maxWid6 bgLight">maxWid6</p>          
        </div>
      )}
    />    
  </div>
)
