import React from "react";

function Widget (props) {
  return (
    <div className={'widget ' + props.class}>
      <div className="widget-header"><a href={props.href}>{props.name}</a></div>
      {props.children}
    </div>
  );
}

export default Widget;
