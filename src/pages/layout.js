import React from 'react'

import Block from '../components/block'
import NumberPicker from '../components/numberPicker'

export default () => (
  <div>
    <Block
      nav="column.css"
      title="column.css"
      body={() => (
        <p>
          Contains flex box columns.
        </p>        
      )}
      demo={() => (
        <div className="relative">
          <div className="cols marB1">
            <div className="col2 bgLight">col2</div>
            <div className="col4 bgSmoke">col4</div>
            <div className="col3 bgLight">col3</div>
            <div className="col1 bgSmoke">col1</div>
            <div className="col2 bgLight">col2</div>
          </div>
          <div className="cols marB1">
            <div className="col bgLight isOrder5">isOrder5</div>
            <div className="col bgSmoke isOrder4">isOrder4</div>
            <div className="col bgLight isOrder3">isOrder3</div>
            <div className="col bgSmoke isOrder2">isOrder2</div>
            <div className="col bgLight isOrder1">isOrder1</div>
          </div>
          <div className="cols isFlush marB1">
            <div className="col bgLight">isFlush > col</div>
            <div className="col bgSmoke">col</div>
            <div className="col bgLight">col</div>
          </div>
          <div className="cols isFull marB1">
            <div className="col3 bgLight">isFull > col3</div>
            <div className="col3 bgSmoke">col3</div>
            <div className="col3 bgLight">col3</div>
            <div className="col3 bgSmoke">col3</div>
          </div>
        </div>
      )}
      reference={['cols', 'row', 'cols cols', 'isFull', 'isFlush', 'cols', 'cols[1-12]', 'isOrder[1-12]', 'isOffset[1-12]', 'multiCol[2-5]']}
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
          <p className="wid3 bgLight">wid3</p>
          <p className="wid6 bgLight">wid6</p>
          <p className="wid50 bgLight">wid50</p>
          <p className="ht2 bgLight">ht2</p>
          <p className="ht4 bgLight">ht4</p>
          <p className="viewWid25 bgLight">viewWid25</p>
          <p className="viewHt25 bgLight">viewHt25</p>
          <p className="maxWid6 bgLight">maxWid6</p>          
        </div>
      )}
      reference={['ht[0-9,25,33,50,75,100]', 'viewHt[25,33,50,75,100]', 'wid[0-9,25,33,50,75,100]', 'viewWid[25,33,50,75,100]', 'maxWid[0-9,25,33,50,75,100]']}
    />
    <Block
      nav="flex.css"
      title="flex.css"
      body={() => (
        <p>
          Contains flexbox utilities.
        </p>        
      )}
      reference={['flex', 'flexWrap', 'flexWrapReverse', 'flexReverse', 'flexReverse flexCol', 'flexCol', 'flexRow', 'flexCenter', 'flexYCenter', 'flexXCenter', 'flexAround', 'flexBetween', 'flexRight', 'flexBaseline', 'flexEnd', 'flexStart', 'grow[1-9]', 'selfCenter', 'selfStart', 'selfEnd', 'selfBaseline']}
    />
    <Block
      nav="grid.css"
      title="grid.css"
      body={() => (
        <p>
          Contains flexbox utilities.
        </p>        
      )}
      reference={['grid', 'gridGap0', 'gridGap[1-5', 'gridGap[X,Y][1-5]', 'gridCols --', 'gridCols1-9', 'gridRows --', 'gridRows1-9', 'gridRow --', 'gridRowSpan[1-9]', 'gridCol --', 'gridColSpan[1-9]']}
    />
    <Block
      nav="position.css"
      title="position.css"
      body={() => (
        <p>
          Contains padding and margin.
        </p>        
      )}
      code={[
        `<table>...</table>`,
      ]}      
      demo={() => (
        <div className="">
          <p className="marL2 bgLight">marL2</p>
          <p className="marL4 bgLight">marL4</p>
          <p className="pad1 bgLight">pad1</p>
          <p className="pad2 bgLight">pad2</p>
          <p className="marXauto wid50 center">marXAuto</p>
        </div>
      )}
      reference={['mar[0-9]', 'mar[T,R,B,L][0-9]', 'marXAuto', 'pad[0-9]', 'pad[T,R,B,L][0-9]']}
      editor={() => (
        <div>
          <NumberPicker name="--space-1" />
          <NumberPicker name="--space-2" />
          <NumberPicker name="--space-4" />
        </div>
      )}
    />  
  </div>
)
