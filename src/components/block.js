import React from 'react'

export default props => (
  <div className="cols padT2 marB3" id={props.nav}>
    <div className="col8">
      <p className="h4">{props.title}</p>
      <div>{props.body && props.body()}</div>
      <div>{props.demo && props.demo()}</div>
    </div>
    <div className="col4">{props.editor && props.editor()}</div>
  </div>
)
