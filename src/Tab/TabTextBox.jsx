import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function TabTextBox(props) {
  //const [borderCol, setBorderCol] = useState("none");
  //function handleFocus() {
  //isFocused(1);
  //  setBorderCol("#35b3a8 !important");
  //}
  console.log(props.length);
  return (
    <label
      style={{ width: "25%", margin: "10px 20px", borderColor: "#35b3a8" }}
      className="InputOuter"
    >
      <TextField
        //onblur={handleFocus}
        onChange={(event) => {
          props.onChange(event.target, props.name, props.id);
        }}
        //className="Textfield BorderGreen"
        // style={{
        //   borderColor: borderCol
        //  }}
        //value={props.length}
        value={props.id === 1 ? (props.length ? props.length : ""):(props.id === 2 ? (props.width ? props.width : ""): (props.id === 3 ? (props.height ? props.height : ""):(props.qty ? props.qty : "")))}
        label={props.attributeLabel}
        id={props.id}
        sx={{ m: 1, width: "100%", borderColor: "#35b3a8" }}
        type="number"
        InputProps={{
          endAdornment: (
            <InputAdornment className="align-top" position="end">
              {props.measure}
            </InputAdornment>
          )
        }}
      />
    </label>
  );
}
