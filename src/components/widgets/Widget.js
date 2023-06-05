import React from "react";

/**
 * Компонент для блока виджета
 */


function Widget (props) {
  return (
    <div className={'widget ' + props.class}>
      <div className="widget-header"><a href={props.href}>{props.name}</a></div>
      {props.children}
    </div>
  );
}

export default Widget;
