import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';


//const label = { inputProps: { 'aria-label': 'Please tick to confirm you have read our Privacy Policy which outlines our commitment to protecting your data' } };


export default function Popup(props) {
  //const {height, length, material, printSpec, style, width} = props.values;
  //console.log(props.values.width);
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#000",
      borderColor: "#35b3a8",
      fontSize: "24px",
      marginBottom: "20px"
    },
    ".MuiInput-root.MuiInput-underline.MuiInputBase-root:before": {
      borderBottom: "2px solid #35b3a8"
    },
    ".MuiInput-root.MuiInput-underline.MuiInputBase-root:after": {
      border: "2px solid #35b3a8"
    },
    ".MuiInput-root.MuiInput-underline.MuiInputBase-root .MuiInput-input.MuiInputBase-input": {
      fontSize: "12px",
      marginTop: "20px"
    }
  });
  const [heardUs, setheardUs] = useState("");
  const handleChange = (event) => {
    setheardUs(event.target.value);
  };
  return (
    <div>
      <div className="bg-configurator-box-background">
        <div className="container">
          <div className="row">
            <div className="packaging-summary-col">
              <div>
                <h4 className="text-footer-gray">Packaging Summary</h4>
              </div>
            </div>
            <div className="packaging-summary-col"></div>
            <div className="packaging-summary-col"></div>
          </div>
          <div className="row">
            <div className="packaging-summary-col">
              <div className="summary-title">
                <p className="summary-row">
                <span className="summary-titel-span">STYLE: </span>
                  <span className="summary-details" id="styleformdata">
                  {props.values.style}
                  </span>
                </p>
                <p className="summary-row">
                  <span className="summary-titel-span">DIMENSIONS: </span>
                  <span className="summary-details" id="dimensionformdata">
                    L:{props.values.length}, W:{props.values.width}, H:{props.values.height}
                  </span>
                </p>
                <p className="summary-row">
                  <span className="summary-titel-span">MATERIALS: </span>
                  <span className="summary-details" id="materialformdata">
                    {props.values.material}
                  </span>
                </p>
              </div>
            </div>
            <div className="packaging-summary-col">
              <div className="summary-title">
                <p className="summary-row">
                  <span className="summary-titel-span">PRINT SURFACE: </span>
                  <span className="summary-details" id="printsurfaceformdata">
                    {props.values.printsurface}
                  </span>
                </p>
                <p className="summary-row">
                  <span className="summary-titel-span">PRINT SPEC: </span>
                  <span className="summary-details" id="printspecformdata">
                    {props.values.printspec}
                  </span>
                </p>
                <p className="summary-row">
                  <span className="summary-titel-span">COATING: </span>
                  <span className="summary-details" id="coatingformdata">
                    {props.values.coating}
                  </span>
                </p>
              </div>
            </div>
            <div className="packaging-summary-col">
              <div className="summary-title">
                <p className="summary-row">
                  <span className="summary-titel-span">FINISHING: </span>
                  <span className="summary-details" id="finishingformdata">
                  {props.values.finish}
                  </span>
                </p>
                <p className="summary-row">
                  <span className="summary-titel-span">QUANTITY: </span>
                  <span className="summary-details" id="quantityformdata">
                  {props.values.qty}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FormBody">
        <h2
          style={{ textAlign: "left", color: "#35b3a8" }}
          className="FormTitle"
        >
          Submit Packaging Breif
        </h2>
        <form>
          <CssTextField
            required
            variant="standard"
            label="Name"
            id="custom-css-outlined-input"
            placeholder="Enter Name"
          />
          <CssTextField
            required
            variant="standard"
            label="Date Required"
            id="custom-css-outlined-input"
            placeholder="Enter Date (DD/MM/YYYY)"
          />
          <CssTextField
            required
            variant="standard"
            label="Email"
            id="custom-css-outlined-input"
            placeholder="Enter e-mail"
          />
          <CssTextField
            required
            variant="standard"
            label="Telephone Number"
            id="custom-css-outlined-input"
            placeholder="Enter Phone Number"
          />
          <Box
            className="leftBox FormBox"
            component="span"
            sx={{
              width: "48%",
              marginRight: "1%",
              marginLeft: "1%"
            }}
          >
            <FormControl
              variant="standard"
              style={{
                textAlign: "left",
                color: "#35b3a8",
                borderColor: "#35b3a8"
              }}
              sx={{ m: 1, minWidth: "100%" }}
              //focused
            >
              <InputLabel
                //style={{ color: "#35b3a8" }}
                id="Hear-About"
              >
                Where Did You Hear About Us
              </InputLabel>
              <Select
                labelId="Hear-About"
                id="Hear-About"
                value={heardUs}
                onChange={handleChange}
                label="Where Did You Her About Us"
                Style={{ color: "#35b3a8", borderColor: "#35b3a8" }}
              >
                <MenuItem value="">
                  <em>Choose an option</em>
                </MenuItem>
                <MenuItem value={"Google"}>Google Search</MenuItem>
                <MenuItem value={"Referral"}>Referral</MenuItem>
                <MenuItem value={"Customer"}>Customer</MenuItem>
                <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <CssTextField
              required
              variant="standard"
              label="Project Title"
              id="custom-css-outlined-input"
              placeholder="Enter Project"
            />
            <CssTextField
              required
              variant="standard"
              label="Comapany"
              id="custom-css-outlined-input"
              placeholder="Enter Comapany"
            />
            <Checkbox style={{float:"left", textAlign:"left", width:"10%"}}
            //{...label}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }}
          /><span style={{float:"right", textAlign:"left", width:"90%", fontSize:"14px"}}>Please tick to confirm you have read our Privacy Policy which outlines our commitment to protecting your data</span>
            <Button size="large" variant="contained" className="RoundEdgeSubmitBtn"
          sx={{ borderRadius: "35px", backgroundColor: "#35b3a8", width: "350px", float:"left", clear: "both", marginTop: "20px" }}
          onClick={props.submitform}>
          Submit Now
        </Button>
          </Box>
          <Box
            component="span"
            sx={{
              width: "48%"
              //marginLeft: "1%"
            }}
            className="RightBox FormBox"
          >
            <InputLabel
              style={{ textAlign: "left" }}
              id="demo-simple-select-standard-label"
            >
              Any Other Requirements
            </InputLabel>
            <TextareaAutosize
              minRows={12}
              aria-label="empty textarea"
              placeholder="Enter Your Requirement (Version, packing, Shipping, etc.)"
              style={{
                marginTop: "10px",
                width: "96%",
                padding: "15px",
                borderWidth: "2px",
                borderColor: "#35b3a8"
              }}
            />
          </Box>
        </form>
      </div>
    </div>
  );
}
