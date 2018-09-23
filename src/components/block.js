import React from 'react'

export default props => (
  <div className="cols padT2 marB2" id={props.nav}>
    <div className="col8">
      <p className="h3 grape">{props.title}</p>
      <div>{props.body && props.body()}</div>
      <div>{props.demo && props.demo()}</div>
      {props.reference && props.reference.length && (
      <div className="grid gridCols2 code">
        {props.reference.map(ref => (
          <div>{ref}</div>
        ))}
      </div>
      )}
    </div>
    <div className="col4">{props.editor && props.editor()}</div>
  </div>
)
