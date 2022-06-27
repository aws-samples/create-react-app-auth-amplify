import React, { useState } from "react";

export default function TabInputs(props) {
  const  [box1, setBox1] = useState(0);
  //const  box2 = 0;
  //const  box3 = 0;
  //props.type === "checkbox" ? setBox1(1) : setBox1(0);
  //console.log(props.type);
  //(props.type === "radio") 

  return (
    <label className={props.name + " InputOuter"}>
      <input className={"input " + props.type }
        type={props.type}
        name={props.name}
        value={props.val}
        checked ={(props.type === "checkbox" && props.selected.finish.find(element => element === props.attributeLabel)) || (props.attributeLabel === props.selected.style || props.attributeLabel === props.selected.style || props.attributeLabel === props.selected.material || props.attributeLabel === props.selected.printspe || props.attributeLabel === props.selected.printsurface || props.attributeLabel === props.selected.coating || props.attributeLabel === props.selected.finish)}
        onChange={() => {
          props.onclick(props.name, props.val,props.attributeLabel);
        }}
      />
      <img src={props.img} alt="" />
      <span>{props.attributeLabel}</span>
    </label>
  );
}
