import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ItemsCarousel from "react-items-carousel";
import Fab from "@mui/material/Fab";
import attributes from "./attributes";

import lidandbase from ".././media/lidandbase-small__ScaleMaxHeightWzExNV0.png";
import Clbsmall from ".././media/CLB-smallScal.png";
import SkilletSmall from ".././media/skillet-small__ScaleMaxHeightWzExNV0.png";
import SleeveSmall from ".././media/sleeve-small__ScaleMaxHeightWzExNV0.png";
import MailerSmall from ".././media/mailer-small__ScaleMaxHeightWzExNV0.png";
import SltraySmall from ".././media/sltray-small__ScaleMaxHeightWzExNV0.png";
import OtherSmall from ".././media/other-questionmark__ScaleMaxHeightWzExNV0.png";

import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import TabInput from "./TabInput";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  function createAttribute(attributes) {
    return (
      <Tab
        key={attributes.id}
        icon={<CheckCircleSharpIcon color="disabled" />}
        label={attributes.name}
        {...a11yProps(attributes.id)}
      />
    );
  }
  const [state, setState] = useState(0);

  function handleClick(name, id) {
    setState(state + 1);
    console.log(state);
    return state;
  }
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {attributes.map(createAttribute)}
        <Fab variant="extended" color="primary" aria-label="add">
          Next
          <NavigateNextIcon sx={{ mr: 1 }} />
        </Fab>
      </Tabs>
      <TabPanel className="Tabpanel" value={value} index={0}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={6}
          gutter={10}
          leftChevron={
            <IconButton className="arrow-btn">
              <ArrowBackIosIcon fontSize="small" />
              Back
            </IconButton>
          }
          rightChevron={
            <IconButton>
              <ArrowForwardIosIcon fontSize="small" />
              More
            </IconButton>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <TabInput
            type="radio"
            name="style"
            img={lidandbase}
            val="1"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={Clbsmall}
            val="2"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={Clbsmall}
            val="3"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={SkilletSmall}
            val="4"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={SleeveSmall}
            val="5"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={MailerSmall}
            val="6"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={SltraySmall}
            val="7"
            onclick={handleClick}
          />
          <TabInput
            type="radio"
            name="style"
            img={OtherSmall}
            val="8"
            onclick={handleClick}
          />
        </ItemsCarousel>
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={3}>
        Item 3
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={4}>
        Item 4
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={5}>
        Item 5
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={6}>
        Item 6
      </TabPanel>
      <TabPanel className="Tabpanel" value={value} index={7}>
        Item 7
      </TabPanel>
    </Box>
  );
}
