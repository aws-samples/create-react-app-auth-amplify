import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Footer from "./Footer";
//import Header from "./Header";
//import CenteredTabs from "./Tab/CenteredTabs";
//import ImageDisplay from "./ImageDisplay";
//import "react-multi-carousel/lib/styles.css";
//import IconButton from "@mui/material/IconButton";
//import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import Carousel from "react-multi-carousel";
//import ItemsCarousel from "react-items-carousel";
//import IconButton from "@mui/material/IconButton";
//import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import Fab from "@mui/material/Fab";
//import SendIcon from "@mui/icons-material/Send";
///import ChangingProgressProvider from "./ChangingProgressProvider";
//import { TabsContext } from "@mui/base";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import OpernerIcon from "./media/opener-icon.svg";
import CloseIcon from '@mui/icons-material/Close';

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import attributes from "./Tab/attributes";
import attributesOptions from "./Tab/attributeOptions";
import coatedwhite from "./media/coated-white-folding-boxboard__FillMaxWzEwOCwxMDhd.png";
import UncoatedWhite from "./media/uncoated-white-folding-boxboard__FillMaxWzEwOCwxMDhd.png";
import KraftBrownBoard from "./media/kraft-brown-board__FillMaxWzEwOCwxMDhd.png";
import MicrofluteKraft from "./media/microflute-kraft__FillMaxWzEwOCwxMDhd.png";
import MicrofluteWhite from "./media/microflute-white__FillMaxWzEwOCwxMDhd.png";
import OtherBoard from "./media/color_other__FillMaxWzEwOCwxMDhd.png";
import lidandbase from "./media/lidandbase-small__ScaleMaxHeightWzExNV0.png";
import Clbsmall from "./media/CLB-smallScal.png";
import SkilletSmall from "./media/skillet-small__ScaleMaxHeightWzExNV0.png";
import SleeveSmall from "./media/sleeve-small__ScaleMaxHeightWzExNV0.png";
import MailerSmall from "./media/mailer-small__ScaleMaxHeightWzExNV0.png";
import SltraySmall from "./media/sltray-small__ScaleMaxHeightWzExNV0.png";
import OtherSmall from "./media/other-questionmark__ScaleMaxHeightWzExNV0.png";
import ColorNone from "./media/color_none__FillMaxWzEwOCwxMDhd.png";
import BlackFill from "./media/black_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import Cmyk1 from "./media/cmyk-1_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import Cmyk from "./media/cmyk_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import Cmyk2 from "./media/cmyk-2_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import CMYK1MF from "./media/color_cmykplus1pantonemetflo__FillMaxWzEwOCwxMDhd.png";
import CMYK2MF from "./media/color_cmykplus2pantonemetflo__FillMaxWzEwOCwxMDhd.png";
import pantone1 from "./media/color_1pantonestd__FillMaxWzEwOCwxMDhd.png";
import pantone1MF from "./media/color_1pantonemetflo__FillMaxWzEwOCwxMDhd.png";
import pantone2 from "./media/color_2pantonestd__FillMaxWzEwOCwxMDhd.png";
import pantone2MF from "./media/color_2pantonemetflo__FillMaxWzEwOCwxMDhd.png";
import otherFill from "./media/color_other__FillMaxWzEwOCwxMDhd.png";
import NoneSurface from "./media/skel__FillMaxWzEwOCwxMDhd.png";
import OutsideSurf from "./media/print-oneside-only__FillMaxWzEwOCwxMDhd.png";
import OutAndInsurf from "./media/print-outside-inside__FillMaxWzEwOCwxMDhd.png";
import CoatingNone from "./media/coating_none__FillMaxWzEwOCwxMDhd.png";
import CoatingGloss from "./media/gloss_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import CoatingSilk from "./media/matt_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import CoatingMatt from "./media/satin_FillMaxWzEwOCwxMDhd__FillMaxWzEwOCwxMDhd.png";
import CoatingOther from "./media/coating_other__FillMaxWzEwOCwxMDhd.png";
import FinishGloss from "./media/spot-uv.png";
import FinishMetalic from "./media/foil.png";
import FinishEmboss from "./media/emboss-deboss.png";
import FinishOthers from "./media/coating_other.png";

import lbdim from "./media/lidandbase-dimensions.png";
import rtedim from "./media/rte-dimensions.png";
import clbdim from "./media/clb-dimensions.png";
import skilletdim from "./media/skillet-dimensions.png";
import sleevedim from "./media/sleeve-dimensions.png";
import mailerdim from "./media/mailer-dimensions.png";
import sltrydim from "./media/sltray-dimensions.png";
import mainImage1 from "./media/lidandbase.png";
import mainImage2 from "./media/rte.png";
import mainImage3 from "./media/clb.png";
import mainImage4 from "./media/skillet.png";
import mainImage5 from "./media/sleeve.png";
import mainImage6 from "./media/mailer.png";
import mainImage7 from "./media/sltray.png";
import mainImage8 from "./media/other-ques.png";

//----------------Material Image---------------//
import lbwhitematerial from "./media/lidandbase-white.png";
import lbbrownmaterial from "./media/lidandbase-kraft.png";
import rtewhitematerial from "./media/rte.png";
import rtebrownmaterial from "./media/rte-kraft.png";
import clbwhite from "./media/clb-white.png";
import clbkraft from "./media/clb-kraft.png";
import skilletwhite from "./media/skillet-white.png";
import skilletkraft from "./media/skillet-kraft.png";
import sleevewhite from "./media/sleeve-white.png";
import sleevekraft from "./media/sleeve-kraft.png";
import mailerwhite from "./media/mailer-white.png";
import mailerkraft from "./media/mailer-kraft.png";
import sltraywhite from "./media/sltray-white.png";
import sltraykraft from "./media/sltray-kraft.png";
//----------------Spec Image---------------//
import lbwhitebw from "./media/lidandbase-white-bw.png";
import lbwhitecmky from "./media/lidandbase-white-cmyk.png";
import lbwhitecmky1spot from "./media/lidandbase-white-cmyk1spot.png";
import lbwhitecmky2spot from "./media/lidandbase-white-cmyk2spot.png";
import lbwhitecmky1spotmetflo from "./media/lidandbase-white-cmyk1spotmetflo.png";
import lbwhitecmyk2spotmetflo from "./media/lidandbase-white-cmyk2spotmetflo.png";
import lbwhite1spot from "./media/lidandbase-white-1spot.png";
import lbwhite2spot from "./media/lidandbase-white-2spot.png";
import lbwhite1spotmetflo from "./media/lidandbase-white-1spotmetflo.png";
import lbwhite2spotmetflo from "./media/lidandbase-white-2spotmetflo.png";
import lbkraftbw from "./media/lidandbase-kraft-bw.png";
import lbkraftcmky from "./media/lidandbase-kraft-cmyk.png";
import lbkraftcmky1spot from "./media/lidandbase-kraft-cmyk1spot.png";
import lbkraftcmky2spot from "./media/lidandbase-kraft-cmyk2spot.png";
import lbkraftcmky1spotmetflo from "./media/lidandbase-kraft-cmyk1spotmetflo.png";
import lbkraftcmyk2spotmetflo from "./media/lidandbase-kraft-cmyk2spotmetflo.png";
import lbkraft1spot from "./media/lidandbase-kraft-1spot.png";
import lbkraft2spot from "./media/lidandbase-kraft-2spot.png";
import lbkraft1spotmetflo from "./media/lidandbase-kraft-1spotmetflo.png";
import lbkraft2spotmetflo from "./media/lidandbase-kraft-2spotmetflo.png";

import clbwhitebw from "./media/clb-white-bw.png";
import clbwhitecmky from "./media/clb-white-cmyk.png";
import clbwhitecmky1spot from "./media/clb-white-cmyk1spot.png";
import clbwhitecmky2spot from "./media/clb-white-cmyk2spot.png";
import clbwhitecmky1spotmetflo from "./media/clb-white-cmyk1spotmetflo.png";
import clbwhitecmyk2spotmetflo from "./media/clb-white-cmyk2spotmetflo.png";
import clbwhite1spot from "./media/clb-white-1spot.png";
import clbwhite2spot from "./media/clb-white-2spot.png";
import clbwhite1spotmetflo from "./media/clb-white-1spotmetflo.png";
import clbwhite2spotmetflo from "./media/clb-white-2spotmetflo.png";
import clbkraftbw from "./media/clb-kraft-bw.png";
import clbkraftcmky from "./media/clb-kraft-cmyk.png";
import clbkraftcmky1spot from "./media/clb-kraft-cmyk1spot.png";
import clbkraftcmky2spot from "./media/clb-kraft-cmyk2spot.png";
import clbkraftcmky1spotmetflo from "./media/clb-kraft-cmyk1spotmetflo.png";
import clbkraftcmyk2spotmetflo from "./media/clb-kraft-cmyk2spotmetflo.png";
import clbkraft1spot from "./media/clb-kraft-1spot.png";
import clbkraft2spot from "./media/clb-kraft-2spot.png";
import clbkraft1spotmetflo from "./media/clb-kraft-1spotmetflo.png";
import clbkraft2spotmetflo from "./media/clb-kraft-2spotmetflo.png";

import rtewhitebw from "./media/rte-white-bw.png";
import rtewhitecmky from "./media/rte-white-cmyk.png";
import rtewhitecmky1spot from "./media/rte-white-cmyk1spot.png";
import rtewhitecmky2spot from "./media/rte-white-cmyk2spot.png";
import rtewhitecmky1spotmetflo from "./media/rte-white-cmyk1spotmetflo.png";
import rtewhitecmyk2spotmetflo from "./media/rte-white-cmyk2spotmetflo.png";
import rtewhite1spot from "./media/rte-white-1spot.png";
import rtewhite2spot from "./media/rte-white-2spot.png";
import rtewhite1spotmetflo from "./media/rte-white-1spotmetflo.png";
import rtewhite2spotmetflo from "./media/rte-white-2spotmetflo.png";
import rtekraftbw from "./media/rte-kraft-bw.png";
import rtekraftcmky from "./media/rte-kraft-cmyk.png";
import rtekraftcmky1spot from "./media/rte-kraft-cmyk1spot.png";
import rtekraftcmky2spot from "./media/rte-kraft-cmyk2spot.png";
import rtekraftcmky1spotmetflo from "./media/rte-kraft-cmyk1spotmetflo.png";
import rtekraftcmyk2spotmetflo from "./media/rte-kraft-cmyk2spotmetflo.png";
import rtekraft1spot from "./media/rte-kraft-1spot.png";
import rtekraft2spot from "./media/rte-kraft-2spot.png";
import rtekraft1spotmetflo from "./media/rte-kraft-1spotmetflo.png";
import rtekraft2spotmetflo from "./media/rte-kraft-2spotmetflo.png";

import sltrywhitebw from "./media/sltray-white-bw.png";
import sltrywhitecmky from "./media/sltray-white-cmyk.png";
import sltrywhitecmky1spot from "./media/sltray-white-cmyk1spot.png";
import sltrywhitecmky2spot from "./media/sltray-white-cmyk2spot.png";
import sltrywhitecmky1spotmetflo from "./media/sltray-white-cmyk1spotmetflo.png";
import sltrywhitecmyk2spotmetflo from "./media/sltray-white-cmyk2spotmetflo.png";
import sltrywhite1spot from "./media/sltray-white-1spot.png";
import sltrywhite2spot from "./media/sltray-white-2spot.png";
import sltrywhite1spotmetflo from "./media/sltray-white-1spotmetflo.png";
import sltrywhite2spotmetflo from "./media/sltray-white-2spotmetflo.png";
import sltrykraftbw from "./media/sltray-kraft-bw.png";
import sltrykraftcmky from "./media/sltray-kraft-cmyk.png";
import sltrykraftcmky1spot from "./media/sltray-kraft-cmyk1spot.png";
import sltrykraftcmky2spot from "./media/sltray-kraft-cmyk2spot.png";
import sltrykraftcmky1spotmetflo from "./media/sltray-kraft-cmyk1spotmetflo.png";
import sltrykraftcmyk2spotmetflo from "./media/sltray-kraft-cmyk2spotmetflo.png";
import sltrykraft1spot from "./media/sltray-kraft-1spot.png";
import sltrykraft2spot from "./media/sltray-kraft-2spot.png";
import sltrykraft1spotmetflo from "./media/sltray-kraft-1spotmetflo.png";
import sltrykraft2spotmetflo from "./media/sltray-kraft-2spotmetflo.png";

import sleevewhitebw from "./media/sleeve-white-bw.png";
import sleevewhitecmky from "./media/sleeve-white-cmyk.png";
import sleevewhitecmky1spot from "./media/sleeve-white-cmyk1spot.png";
import sleevewhitecmky2spot from "./media/sleeve-white-cmyk2spot.png";
import sleevewhitecmky1spotmetflo from "./media/sleeve-white-cmyk1spotmetflo.png";
import sleevewhitecmyk2spotmetflo from "./media/sleeve-white-cmyk2spotmetflo.png";
import sleevewhite1spot from "./media/sleeve-white-1spot.png";
import sleevewhite2spot from "./media/sleeve-white-2spot.png";
import sleevewhite1spotmetflo from "./media/sleeve-white-1spotmetflo.png";
import sleevewhite2spotmetflo from "./media/sleeve-white-2spotmetflo.png";
import sleevekraftbw from "./media/sleeve-kraft-bw.png";
import sleevekraftcmky from "./media/sleeve-kraft-cmyk.png";
import sleevekraftcmky1spot from "./media/sleeve-kraft-cmyk1spot.png";
import sleevekraftcmky2spot from "./media/sleeve-kraft-cmyk2spot.png";
import sleevekraftcmky1spotmetflo from "./media/sleeve-kraft-cmyk1spotmetflo.png";
import sleevekraftcmyk2spotmetflo from "./media/sleeve-kraft-cmyk2spotmetflo.png";
import sleevekraft1spot from "./media/sleeve-kraft-1spot.png";
import sleevekraft2spot from "./media/sleeve-kraft-2spot.png";
import sleevekraft1spotmetflo from "./media/sleeve-kraft-1spotmetflo.png";
import sleevekraft2spotmetflo from "./media/sleeve-kraft-2spotmetflo.png";

import mailerwhitecmky from "./media/mailer-white-cmyk.png";
import mailerwhitebw from "./media/mailer-white-bw.png";
import mailerwhitecmky1spot from "./media/mailer-white-cmyk1spot.png";
import mailerwhitecmky2spot from "./media/mailer-white-cmyk2spot.png";
import mailerwhitecmky1spotmetflo from "./media/mailer-white-cmyk1spotmetflo.png";
import mailerwhitecmyk2spotmetflo from "./media/mailer-white-cmyk2spotmetflo.png";
import mailerwhite1spot from "./media/mailer-white-1spot.png";
import mailerwhite2spot from "./media/mailer-white-2spot.png";
import mailerwhite1spotmetflo from "./media/mailer-white-1spotmetflo.png";
import mailerwhite2spotmetflo from "./media/mailer-white-2spotmetflo.png";
import mailerkraftbw from "./media/mailer-kraft-bw.png";
import mailerkraftcmky from "./media/mailer-kraft-cmyk.png";
import mailerkraftcmky1spot from "./media/mailer-kraft-cmyk1spot.png";
import mailerkraftcmky2spot from "./media/mailer-kraft-cmyk2spot.png";
import mailerkraftcmky1spotmetflo from "./media/mailer-kraft-cmyk1spotmetflo.png";
import mailerkraftcmyk2spotmetflo from "./media/mailer-kraft-cmyk2spotmetflo.png";
import mailerkraft1spot from "./media/mailer-kraft-1spot.png";
import mailerkraft2spot from "./media/mailer-kraft-2spot.png";
import mailerkraft1spotmetflo from "./media/mailer-kraft-1spotmetflo.png";
import mailerkraft2spotmetflo from "./media/mailer-kraft-2spotmetflo.png";

import skilletwhitebw from "./media/skillet-white-bw.png";
import skilletwhitecmky from "./media/skillet-white-cmyk.png";
import skilletwhitecmky1spot from "./media/skillet-white-cmyk1spot.png";
import skilletwhitecmky2spot from "./media/skillet-white-cmyk2spot.png";
import skilletwhitecmky1spotmetflo from "./media/skillet-white-cmyk1spotmetflo.png";
import skilletwhitecmyk2spotmetflo from "./media/skillet-white-cmyk2spotmetflo.png";
import skilletwhite1spot from "./media/skillet-white-1spot.png";
import skilletwhite2spot from "./media/skillet-white-2spot.png";
import skilletwhite1spotmetflo from "./media/skillet-white-1spotmetflo.png";
import skilletwhite2spotmetflo from "./media/skillet-white-2spotmetflo.png";
import skilletkraftbw from "./media/skillet-kraft-bw.png";
import skilletkraftcmky from "./media/skillet-kraft-cmyk.png";
import skilletkraftcmky1spot from "./media/skillet-kraft-cmyk1spot.png";
import skilletkraftcmky2spot from "./media/skillet-kraft-cmyk2spot.png";
import skilletkraftcmky1spotmetflo from "./media/skillet-kraft-cmyk1spotmetflo.png";
import skilletkraftcmyk2spotmetflo from "./media/skillet-kraft-cmyk2spotmetflo.png";
import skilletkraft1spot from "./media/skillet-kraft-1spot.png";
import skilletkraft2spot from "./media/skillet-kraft-2spot.png";
import skilletkraft1spotmetflo from "./media/skillet-kraft-1spotmetflo.png";
import skilletkraft2spotmetflo from "./media/skillet-kraft-2spotmetflo.png";

//-----White cover Images---------//
import lbwhiteinside from "./media/lidandbase-white-inside.png";
import Rtewhiteinside from "./media/rte-white-inside.png";
import Clbwhiteinside from "./media/clb-white-inside.png";
import skilletwhiteinside from "./media/skillet-white-inside.png";
import sleevewhiteinside from "./media/sleeve-white-inside.png";
import Mailerwhiteinside from "./media/mailer-white-inside.png";
import sltwhiteinside from "./media/sltray-white-inside.png";
import lbkraftinside from "./media/lidandbase-kraft-inside.png";
import Rtekraftinside from "./media/rte-kraft-inside.png";
import Clbkraftinside from "./media/clb-kraft-inside.png";
import skilletkraftinside from "./media/skillet-kraft-inside.png";
import sleevekraftinside from "./media/sleeve-kraft-inside.png";
import Mailerkraftinside from "./media/mailer-kraft-inside.png";
import sltkraftinside from "./media/sltray-kraft-inside.png";
//-----White cover Images---------//
import otherQues from "./media/other-ques.png";
//-----Finish Images---------//
import lbwhiteemboss from "./media/lidandbase-white-emboss.png";
import lbwhitefoil from "./media/lidandbase-white-foil.png";
import lbwhiteuv from "./media/lidandbase-white-uv.png";
import Rtewhiteemboss from "./media/rte-white-emboss.png";
import Rtewhitefoil from "./media/rte-white-foil.png";
import Rtewhiteuv from "./media/rte-white-uv.png";
import Clbwhiteemboss from "./media/clb-white-emboss.png";
import Clbwhitefoil from "./media/clb-white-foil.png";
import Clbwhiteuv from "./media/clb-white-uv.png";
import skilletwhiteemboss from "./media/skillet-white-emboss.png";
import skilletwhitefoil from "./media/skillet-white-foil.png";
import skilletwhiteuv from "./media/skillet-white-uv.png";
import sleevewhiteemboss from "./media/sleeve-white-emboss.png";
import sleevewhitefoil from "./media/sleeve-white-foil.png";
import sleevewhiteuv from "./media/sleeve-white-uv.png";
import Mailerwhiteemboss from "./media/mailer-white-emboss.png";
import Mailerwhitefoil from "./media/mailer-white-foil.png";
import Mailerwhiteuv from "./media/mailer-white-uv.png";
import sltwhiteemboss from "./media/sltray-white-emboss.png";
import sltwhitefoil from "./media/sltray-white-foil.png";
import sltwhiteuv from "./media/sltray-white-uv.png";

import lbkraftemboss from "./media/lidandbase-kraft-emboss.png";
import lbkraftfoil from "./media/lidandbase-kraft-foil.png";
import lbkraftuv from "./media/lidandbase-kraft-uv.png";
import Rtekraftemboss from "./media/rte-kraft-emboss.png";
import Rtekraftfoil from "./media/rte-kraft-foil.png";
import Rtekraftuv from "./media/rte-kraft-uv.png";
import Clbkraftemboss from "./media/clb-kraft-emboss.png";
import Clbkraftfoil from "./media/clb-kraft-foil.png";
import Clbkraftuv from "./media/clb-kraft-uv.png";
import skilletkraftemboss from "./media/skillet-kraft-emboss.png";
import skilletkraftfoil from "./media/skillet-kraft-foil.png";
import skilletkraftuv from "./media/skillet-kraft-uv.png";
import sleevekraftemboss from "./media/sleeve-kraft-emboss.png";
import sleevekraftfoil from "./media/sleeve-kraft-foil.png";
import sleevekraftuv from "./media/sleeve-kraft-uv.png";
import Mailerkraftemboss from "./media/mailer-kraft-emboss.png";
import Mailerkraftfoil from "./media/mailer-kraft-foil.png";
import Mailerkraftuv from "./media/mailer-kraft-uv.png";
import sltkraftemboss from "./media/sltray-kraft-emboss.png";
import sltkraftfoil from "./media/sltray-kraft-foil.png";
import sltkraftuv from "./media/sltray-kraft-uv.png";
//-----Finish Images---------//

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TabInput from "./Tab/TabInput";
import TabTextBox from "./Tab/TabTextBox";
import Popup from "./Popup";
import DesignLogo from "./media/design_logo.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const mainImages = {
  lidandbaseimg: lidandbase,
  Clbsmallimg: Clbsmall,
  SkilletSmallimg: SkilletSmall,
  SleeveSmallimg: SleeveSmall,
  MailerSmallimg: MailerSmall,
  SltraySmallimg: SltraySmall,
  OtherSmallimg: OtherSmall,
  coatedwhite: coatedwhite,
  UncoatedWhite: UncoatedWhite,
  KraftBrownBoard: KraftBrownBoard,
  MicrofluteKraft: MicrofluteKraft,
  MicrofluteWhite: MicrofluteWhite,
  OtherBoard: OtherBoard,
  ColorNone: ColorNone,
  BlackFill: BlackFill,
  Cmyk: Cmyk,
  Cmyk1: Cmyk1,
  Cmyk2: Cmyk2,
  CMYK1MF: CMYK1MF,
  CMYK2MF: CMYK2MF,
  pantone1: pantone1,
  pantone1MF: pantone1MF,
  pantone2: pantone2,
  pantone2MF: pantone2MF,
  otherFill: otherFill,
  NoneSurface: NoneSurface,
  OutsideSurf: OutsideSurf,
  OutAndInsurf: OutAndInsurf,
  CoatingNone: CoatingNone,
  CoatingGloss: CoatingGloss,
  CoatingSilk: CoatingSilk,
  CoatingMatt: CoatingMatt,
  CoatingOther: CoatingOther,
  FinishMetalic: FinishMetalic,
  FinishGloss: FinishGloss,
  FinishEmboss: FinishEmboss,
  FinishOthers: FinishOthers
};
//console.log(mainImages["Clbsmallimg"]);
let windowwidth = window.innerWidth;
export default function AppCopy() {
  //const [selectedTab, setSelectedTab] = useState(0);
  const [tabCount, settabCount] = useState(8);
  const [PrintSurfaceTabDIsplay, setPrintSurfaceTabDIsplay] = useState("show");
  const [NextBtnText, SetNextBtnText] = useState("Next");
  const [selectedValues, SetselectedValues] = useState(
              {
                style: "",
                length: 0,
                width: 0,
                height: 0,
                material: "",
                printspec: "",
                printsurface: "",
                coating: "",
                finish: [],
                qty: 0
              }
            );
  let newarray;
  //console.log(selectedValues);
  const eachTabpercent = 100 / tabCount;
  // const img[1,2,3,4,5,6,7,8] =  [mainImage1,mainImage1,mainImage1,mainImage1,mainImage1,mainImage1,mainImage1,mainImage1];
  const [imgSrc, SetimgSrc] = useState("");
  const [whiteinside, setwhiteinside] = useState("");
  const [whiteemboss, setwhiteemboss] = useState("");
  const [whitefoil, setwhitefoil] = useState("");
  const [whiteUv, setwhiteUv] = useState("");
  const [DimensionDisplay, SetDimensionDisplay] = useState("none");
  const [WhiteDisplay, SetWhiteDisplay] = useState("none");
  const [SurfaceDisplay, SetSurfaceDisplay] = useState("none");
  const [Specsrc, SetSpecsrc] = useState("");
  const [Dimensionimg, SetDimensionimg] = useState("");
  const [MaterialImg, SetMaterialImg] = useState("");
  const [MaterialDisplay, SetMaterialDisplay] = useState("none");
  const [DisplayembossImage, SetDisplayembossImage] = useState("none");
  const [DisplayfoilImage, SetDisplayfoilImage] = useState("none");
  const [DisplayspotImage, SetDisplayspotImage] = useState("none");

  //const [selected, Setselected] = useState(0);
  const [selectedStyle, SetselectedStyle] = useState(0);
  const [selectedDiamension, SetselectedDiamension] = useState(0);
  const [selectedMaterial, SetselectedMaterial] = useState(0);
  const [selectedSpec, SetselectedSpec] = useState(0);
  const [selectedSurface, SetselectedSurface] = useState(0);
  const [selectedCoating, SetselectedCoating] = useState(0);
  const [selectedFinish, SetselectedFinish] = useState(0);
  const [selectedQuantity, SetselectedQuantity] = useState(0);

  const [percentageStyle, setpercentageStyle] = useState(0);
  const [percentageDiamension, setpercentageDiamension] = useState(0);
  const [percentageMaterial, setpercentageMaterial] = useState(0);
  const [percentagePrintSpec, setpercentagePrintSpec] = useState(0);
  const [percentagePrintSurface, setpercentagePrintSurface] = useState(0);
  const [percentageCoating, setpercentageCoating] = useState(0);
  const [percentageFinish, setpercentageFinish] = useState(0);
  const [percentageQuantity, setpercentageQuantity] = useState(0);
  const percentage = Math.floor(
    percentageStyle +
      percentageDiamension +
      percentageMaterial +
      percentagePrintSpec +
      percentagePrintSurface +
      percentageCoating +
      percentageFinish +
      percentageQuantity
  );
  const [popupDisplay, setpopupDisplay] = useState("none");
  const [NiceClass, SetNiceClass] = useState("Nice");
  const [clicked, setclicked] = useState(0);
  const [expandedStyle, setexpandedstyle] = useState(false);
  const [expandedDimension, setexpandedDimension] = useState(false);
  const [expandedMaterial, setexpandedMaterial] = useState(false);
  const [expandedSpec, setexpandedSpec] = useState(false);
  const [expandedsurface, setexpandedsurface] = useState(false); 
  const [expandedCoating, setexpandedCoating] = useState(false);
  const [expandedFinish, setexpandedFinish] = useState(false);
  const [expandedQty, setexpandedQty] = useState(false);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
  
  
  //console.log(windowwidth);
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1 && percentageStyle) {
      SetDimensionDisplay("block");
    } else {
      SetDimensionDisplay("none");
    }
  };

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  function submitform() {
    setpopupDisplay("none");
    alert("Submitted");
  }

  return (
    <div className="App">
      <div className="Body">
        <div
          className="PopupForm"
          id="popup-form"
          style={{ display: popupDisplay }}
        >
        <Button size="small" style={{float:"right"}}
          sx={{ color: "black" }}
          onClick={() => {
            setpopupDisplay("none");
          }}
        >
          <CloseIcon sx={{ color: "black" }} />
          Close
        </Button>
          <Popup
            submitform={submitform}
            Style={selectedStyle}
            Material={selectedMaterial}
            Spec={selectedSpec}
            Surface={selectedDiamension}
            Coating={selectedCoating}
            Finish={selectedFinish}
            values= {selectedValues}
          />
        </div>
        <div
          className="BodyContent"
          style={{ display: popupDisplay === "block" ? "none" : "block" }}
        >
          <div className="navbar-inner">
            <div className="navbar lower-nav navbar-expand">
              <div className="container-fluid" style={{ float: "left" }}>
                <a
                  className="navbar-brand pl-3"
                  href="https://duncanprint.co.uk"
                >
                  <img className="header-logo" src={DesignLogo} alt="Logo" />
                </a>
              </div>
              <div
                className="nav-top-right d-flex justify-content-end pt-3"
                style={{ float: "right" }}
              >
                <p className={NiceClass}>Nice!</p>
                <div className="d-none d-xl-block" style={{ maxWidth: "70px" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#17ad95",
                      textcolor: "#17ad95",
                      textSize: "28px",
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                </div>
                <div className="p-3 d-none d-xl-block">
                  <Fab variant="extended" color="primary" aria-label="add">
                    Contact Us
                  </Fab>
                </div>
              </div>
            </div>
          </div>
          <div className="home-header position-relative">
            <div
              className="text-center pt-5 pt-xs-7 pt-sm-9 header"
              style={{
                display: clicked ? "none" : "block"
              }}
            >
              <img class="" alt="" id="styleImage" src={OpernerIcon} />
              <p
                style={{
                  color: "#35b3a8"
                }}
                className="font-weight-light pt-3"
              >
                Start building your packaging
              </p>
              <h3
                style={{
                  color: "#35b3a8"
                }}
                className="text-duncan-cyan select-box-text"
              >
                Select box style
              </h3>
              <ArrowDownwardIcon sx={{ color: "#35b3a8", fontSize: "50px" }} />
            </div>
            <img
              class="config-img abs-100 style-image"
              alt=""
              id="styleImage"
              style={{ position: "relative" }}
              src={imgSrc}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="dimensionsImage"
              src={Dimensionimg}
              style={{ display: DimensionDisplay }}
            />
            <img
              class="mw-100 abs-100 config-img materials-image"
              alt=""
              id="materialsImage"
              style={{ display: MaterialDisplay }}
              src={MaterialImg}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="inksImage"
              style={{ display: SurfaceDisplay }}
              src={Specsrc}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="inksImageInside"
              style={{ display: WhiteDisplay }}
              src={whiteinside}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="embossImage"
              style={{ display: DisplayembossImage }}
              src={whiteemboss}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="foilImage"
              style={{ display: DisplayfoilImage }}
              src={whitefoil}
            />
            <img
              class="mw-100 abs-100 config-img"
              alt=""
              id="spotImage"
              style={{ display: DisplayspotImage }}
              src={whiteUv}
            />
          </div>
          {TabHtml()}
        </div>
        <Footer />
      </div>
    </div>
  );
  function TabsNext() {
    if(value === 3 && PrintSurfaceTabDIsplay === "hide") {
      setValue((value + 2) % tabCount);
    }
    else if(value === 6){ 
      SetNextBtnText("Submit");
      setValue((value + 1) % tabCount);
    }
    else if(value === 7){ 
      setpopupDisplay("block")
      //setValue(value);
    }
    else {
      setValue((value + 1) % tabCount);
      SetNextBtnText("Next");
    }
    value === 0
      ? SetDimensionDisplay("block")
      : SetDimensionDisplay("none");
    
  }
  function TabHtml() {
   if(windowwidth > 1200){
      return (      
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs value={value} onChange={handleChange} centered>
                {attributes.map(createAttribute)}
                <Fab
                  onClick={() => {
                    TabsNext();
                  }}
                  variant="extended"
                  color="primary"
                  aria-label="add"
                >
                  {NextBtnText}
                  <NavigateNextIcon sx={{ mr: 1 }} />
                </Fab>
              </Tabs>
              <TabPanel className="Tabpanel Style" value={value} index={0}>
                {attributesOptions
                  .filter(
                    (attributesOption) => attributesOption.attribute === "Style"
                  )
                  .map(createStyleTabInput)}
              </TabPanel>
              <TabPanel className="Tabpanel Diamension" value={value} index={1}>
                {attributesOptions
                  .filter(
                    (attributesOption) =>
                      attributesOption.attribute === "Dimension"
                  )
                  .map(createTextInput)}
              </TabPanel>
              <TabPanel className="Tabpanel Material" value={value} index={2}>
                {attributesOptions
                  .filter(
                    (attributesOption) =>
                      attributesOption.attribute === "Material"
                  )
                  .map(createStyleTabInput)}
              </TabPanel>
              <TabPanel className="Tabpanel PrintSpec" value={value} index={3}>
                <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                  <div className="carousel my-12 mx-auto">
                    <div className="relative overflow-hidden">
                      <div className="flex justify-between absolute top left w-full h-full">
                        <button
                          onClick={movePrev}
                          className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                          disabled={isDisabled("prev")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                          <span className="sr-only">Prev</span>
                        </button>
                        <button
                          onClick={moveNext}
                          className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                          disabled={isDisabled("next")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="sr-only">More</span>
                        </button>
                      </div>
                      <div
                        ref={carousel}
                        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                      >
                        {attributesOptions
                          .filter(
                            (attributesOption) =>
                              attributesOption.attribute === "Print Spec"
                          )
                          .map(createStyleTabInput)}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="Tabpanel Printsurface" value={value} index={4}>
                {attributesOptions
                  .filter(
                    (attributesOption) =>
                      attributesOption.attribute === "Print Surface"
                  )
                  .map(createStyleTabInput)}
              </TabPanel>
              <TabPanel className="Tabpanel Coating" value={value} index={5}>
                {attributesOptions
                  .filter(
                    (attributesOption) => attributesOption.attribute === "Coating"
                  )
                  .map(createStyleTabInput)}
              </TabPanel>
              <TabPanel className="Tabpanel Finish" value={value} index={6}>
                {attributesOptions
                  .filter(
                    (attributesOption) => attributesOption.attribute === "Finish"
                  )
                  .map(createStyleTabInput)}
              </TabPanel>
              <TabPanel className="Tabpanel Quantity" value={value} index={7}>
                  <label
                    style={{ width: "25%", margin: "10px 20px", borderColor: "#35b3a8" }}
                    className="InputOuter"
                  >
                    <TextField
                      //onblur={handleFocus}
                      onChange = {onchangetext}
                      //className="Textfield BorderGreen"
                      // style={{
                      //   borderColor: borderCol
                      //  }}
                      //value={props.length}
                      value={selectedValues.qty}
                      name="Quantity"
                      focused
                      label="Quantity"
                      sx={{ m: 1, width: "100%", borderColor: "#35b3a8" }}
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment className="align-top" position="end">
                            mm
                          </InputAdornment>
                        )
                      }}
                    />
                  </label>
              </TabPanel>
            </Box>
        );
    } else {
      return (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedstyle(!expandedStyle)}
          expandIcon={expandedStyle ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Style</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Style" value={value} index={0}>
          {attributesOptions
            .filter(
              (attributesOption) => attributesOption.attribute === "Style"
            )
            .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedDimension(!expandedDimension)}
          expandIcon={expandedDimension ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dimension</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Diamension" value={value} index={1}>
          {attributesOptions
            .filter(
              (attributesOption) =>
                attributesOption.attribute === "Dimension"
            )
            .map(createTextInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedMaterial(!expandedMaterial)}
          expandIcon={expandedMaterial ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Material</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Material" value={value} index={2}>
          {attributesOptions
            .filter(
              (attributesOption) =>
                attributesOption.attribute === "Material"
            )
            .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedSpec(!expandedSpec)}
          expandIcon={expandedSpec ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Print Spec</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel PrintSpec" value={value} index={3}>
                  {attributesOptions
                    .filter(
                      (attributesOption) =>
                        attributesOption.attribute === "Print Spec"
                    )
                    .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedsurface(!expandedsurface)}
          expandIcon={expandedsurface ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Print Surface</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Printsurface" value={value} index={4}>
          {attributesOptions
            .filter(
              (attributesOption) =>
                attributesOption.attribute === "Print Surface"
            )
            .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedCoating(!expandedCoating)}
          expandIcon={expandedCoating ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Coating</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Coating" value={value} index={5}>
          {attributesOptions
            .filter(
              (attributesOption) => attributesOption.attribute === "Coating"
            )
            .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedFinish(!expandedFinish)}
          expandIcon={expandedFinish ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Finish</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Finish" value={value} index={6}>
          {attributesOptions
            .filter(
              (attributesOption) => attributesOption.attribute === "Finish"
            )
            .map(createStyleTabInput)}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary onClick={() => setexpandedQty(!expandedQty)}
          expandIcon={expandedQty ? <DoNotDisturbOnRoundedIcon sx={{color: '#f166b3'}} /> : <AddCircleRoundedIcon sx={{color: '#f166b3'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quantity</Typography>
        </AccordionSummary>
        <AccordionDetails className="Tabpanel Quantity" value={value} index={7}>
            <label
              style={{ width: "25%", margin: "10px 20px", borderColor: "#35b3a8" }}
              className="InputOuter"
            >
              <TextField
                //onblur={handleFocus}
                onChange = {onchangetext}
                //className="Textfield BorderGreen"
                // style={{
                //   borderColor: borderCol
                //  }}
                //value={props.length}
                value={selectedValues.qty}
                name="Quantity"
                focused
                label="Quantity"
                sx={{ m: 1, width: "100%", borderColor: "#35b3a8" }}
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment className="align-top" position="end">
                      mm
                    </InputAdornment>
                  )
                }}
              />
            </label>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <Fab
                  onClick={() => {
                    TabsNext();
                  }}
                  variant="extended"
                  color="primary"
                  aria-label="add"
                >
                  Submit Brief
                  <NavigateNextIcon sx={{ mr: 1 }} />
                </Fab>
       </Accordion>
      </Box>

      );
    }
  }
  function UpdateFinish(styleid, materialid) {
    if (
      styleid === 1 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(lbwhiteinside);
      setwhiteemboss(lbwhiteemboss);
      setwhitefoil(lbwhitefoil);
      setwhiteUv(lbwhiteuv);
    } else if (styleid === 1 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(lbkraftinside);
      setwhiteemboss(lbkraftemboss);
      setwhitefoil(lbkraftfoil);
      setwhiteUv(lbkraftuv);
    } else if (
      styleid === 2 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(Rtewhiteinside);
      setwhiteemboss(Rtewhiteemboss);
      setwhitefoil(Rtewhitefoil);
      setwhiteUv(Rtewhiteuv);
    } else if (styleid === 2 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(Rtekraftinside);
      setwhiteemboss(Rtekraftemboss);
      setwhitefoil(Rtekraftfoil);
      setwhiteUv(Rtekraftuv);
    } else if (
      styleid === 3 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(Clbwhiteinside);
      setwhiteemboss(Clbwhiteemboss);
      setwhitefoil(Clbwhitefoil);
      setwhiteUv(Clbwhiteuv);
    } else if (styleid === 3 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(Clbkraftinside);
      setwhiteemboss(Clbkraftemboss);
      setwhitefoil(Clbkraftfoil);
      setwhiteUv(Clbkraftuv);
    } else if (
      styleid === 4 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(skilletwhiteinside);
      setwhiteemboss(skilletwhiteemboss);
      setwhitefoil(skilletwhitefoil);
      setwhiteUv(skilletwhiteuv);
    } else if (styleid === 4 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(skilletkraftinside);
      setwhiteemboss(skilletkraftemboss);
      setwhitefoil(skilletkraftfoil);
      setwhiteUv(skilletkraftuv);
    } else if (
      styleid === 5 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(sleevewhiteinside);
      setwhiteemboss(sleevewhiteemboss);
      setwhitefoil(sleevewhitefoil);
      setwhiteUv(sleevewhiteuv);
    } else if (styleid === 5 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(sleevekraftinside);
      setwhiteemboss(sleevekraftemboss);
      setwhitefoil(sleevekraftfoil);
      setwhiteUv(sleevekraftuv);
    } else if (
      styleid === 6 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(Mailerwhiteinside);
      setwhiteemboss(Mailerwhiteemboss);
      setwhitefoil(Mailerwhitefoil);
      setwhiteUv(Mailerwhiteuv);
    } else if (styleid === 6 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(Mailerkraftinside);
      setwhiteemboss(Mailerkraftemboss);
      setwhitefoil(Mailerkraftfoil);
      setwhiteUv(Mailerkraftuv);
    } else if (
      styleid === 7 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      setwhiteinside(sltwhiteinside);
      setwhiteemboss(sltwhiteemboss);
      setwhitefoil(sltwhitefoil);
      setwhiteUv(sltwhiteuv);
    } else if (styleid === 7 && (materialid === 3 || materialid === 4)) {
      setwhiteinside(sltkraftinside);
      setwhiteemboss(sltkraftemboss);
      setwhitefoil(sltkraftfoil);
      setwhiteUv(sltkraftuv);
    } else if (styleid === 8) {
      setwhiteinside(otherQues);
      setwhiteemboss(otherQues);
      setwhitefoil(otherQues);
      setwhiteUv(otherQues);
      //SetMaterialDisplay("none");
    }
  }
  function createAttribute(attributes) {
    return (
      <Tab
        key={attributes.id}
        className={attributes.name + " " + PrintSurfaceTabDIsplay}
        icon={<CheckCircleSharpIcon color="disabled" />}
        label={attributes.name}
        {...a11yProps(attributes.id)}
      />
    );
  }
  function createStyleTabInput(attributesOptions) {
    return (
      <TabInput
        key={attributesOptions.id}
        id={attributesOptions.id}
        type={attributesOptions.type}
        name={attributesOptions.attribute}
        attributeLabel={attributesOptions.attributeLabel}
        img={mainImages[attributesOptions.img]}
        val={attributesOptions.val}
        onclick={handleClick}
        selected={selectedValues}
      />
    );
  }
  function createTextInput(attributesOptions) {
    return (
      <TabTextBox
        key={attributesOptions.id}
        id={attributesOptions.attributeoptionid}
        type={attributesOptions.type}
        measure={attributesOptions.measure}
        name={attributesOptions.attribute}
        attributeLabel={attributesOptions.attributeLabel}
        length={selectedValues.width}
        width={selectedValues.width}
        height={selectedValues.height}
        qty= {selectedValues.qty}
        onChange={onchangetext}
        //selected={selected}
      />
    );
  }
  function onchangetext(event) {
    //console.log(event);
    /*if (name === "Dimension") {
      //setpercentageDiamension(eachTabpercent);
      SetselectedValues({style :  selectedValues.style,
        length: (id === 1 ? event.value : selectedValues.length),
        width: (id===2 ? event.value : selectedValues.width),
        height: (id===3 ? event.value : selectedValues.height),
        material: selectedValues.material,
        printspec: selectedValues.printspec,
        printsurface: selectedValues.printsurface,
        coating: selectedValues.coating,
        finish: selectedValues.finish,
        qty: selectedValues.qty
      });
    }*/
    if (event.target.name === "Quantity") {
     //setpercentageQuantity(eachTabpercent);
     SetselectedValues({style :  selectedValues.style,
      length: selectedValues.length,
      width: selectedValues.width,
      height: selectedValues.height,
      material: selectedValues.material,
      printspec: selectedValues.printspec,
      printsurface: selectedValues.printsurface,
      coating: selectedValues.coating,
      finish: selectedValues.finish,
      qty: event.target.value
    });
    event.target.focus();
      if (percentage > 90) {
        SetNiceClass("Nice Display");
      }
    }
    if (percentage > 90) {
      SetNiceClass("Nice Display");
    }
  }  
  function handleClick(name, id, label) {
    /*console.log(selectedValues.finish);*/
    if (name === "Style") {
      SetselectedValues({style : label,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: selectedValues.material,
        printspec: selectedValues.printspec,
        printsurface: selectedValues.printsurface,
        coating: selectedValues.coating,
        finish: selectedValues.finish,
        qty: selectedValues.qty});
      setclicked(1);
      setpercentageStyle(eachTabpercent);
      SetselectedStyle(id);
      //SetMaterialDisplay("block");
      //alert(id);
      if (id === 1) {
        SetimgSrc(mainImage1);
        SetDimensionimg(lbdim);
      } else if (id === 2) {
        SetimgSrc(mainImage2);
        SetDimensionimg(rtedim);
      } else if (id === 3) {
        SetimgSrc(mainImage3);
        SetDimensionimg(clbdim);
      } else if (id === 4) {
        SetimgSrc(mainImage4);
        SetDimensionimg(skilletdim);
      } else if (id === 5) {
        SetimgSrc(mainImage5);
        SetDimensionimg(sleevedim);
      } else if (id === 6) {
        SetimgSrc(mainImage6);
        SetDimensionimg(mailerdim);
      } else if (id === 7) {
        SetimgSrc(mainImage7);
        SetDimensionimg(sltrydim);
      } else if (id === 8) {
        SetimgSrc(mainImage8);
        SetDimensionimg("");
        //SetMaterialDisplay("none");
      }
      UpdateMaterial(id, selectedMaterial);
      UpdateSpec(id, selectedMaterial, selectedSpec);
      UpdateFinish(id, selectedMaterial);
    }
    if (name === "Material") {
      SetselectedValues({style : selectedValues.style,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: label,
        printspec: selectedValues.printspec,
        printsurface: selectedValues.printsurface,
        coating: selectedValues.coating,
        finish: selectedValues.finish,
        qty: selectedValues.qty});
      setpercentageMaterial(eachTabpercent);
      SetselectedMaterial(id);
      SetMaterialDisplay("block");
      UpdateMaterial(selectedStyle, id);
      UpdateSpec(selectedStyle, id, selectedSpec);
      UpdateFinish(selectedStyle, id);
    }

    if (name === "Print Spec") {
      SetselectedValues({style : selectedValues.style,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: selectedValues.material,
        printspec : label,
        printsurface: selectedValues.printsurface,
        coating: selectedValues.coating,
        finish: selectedValues.finish,
        qty: selectedValues.qty});
      //console.log(selectedMaterial);
      setpercentagePrintSpec(eachTabpercent);
      SetselectedSpec(id);
      SetSurfaceDisplay("block");
      UpdateSpec(selectedStyle, selectedMaterial, id);
    }
    if (name === "Print Surface") {
      SetselectedValues({style : selectedValues.style,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: selectedValues.material,
        printspec : selectedValues.printspec,
        printsurface: label,
        coating: selectedValues.coating,
        finish: selectedValues.finish,
        qty: selectedValues.qty});
      //SetselectedValues({printsurface : label});
      setpercentagePrintSurface(eachTabpercent);
      SetselectedSurface(id);
      if (id === 1 && percentageStyle) {
        SetWhiteDisplay("block");
        SetSurfaceDisplay("none");
      } else if (id === 2 && percentageStyle) {
        SetWhiteDisplay("block");
        SetSurfaceDisplay("block");
      } else if (id === 3 && percentageStyle) {
        SetWhiteDisplay("none");
        SetSurfaceDisplay("block");
      }
    }
    if (name === "Coating") {
      SetselectedValues({style : selectedValues.style,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: selectedValues.material,
        printspec : selectedValues.printspec,
        printsurface: selectedValues.printsurface,
        coating: label,
        finish: selectedValues.finish,
        qty: selectedValues.qty});
        
      setpercentageCoating(eachTabpercent);
      SetselectedCoating(id);
    }
    if (name === "Finish") {
      //console.log(selectedValues.finish);
      if (selectedValues.finish.some(item => label === item)) {
        newarray = selectedValues.finish.filter(item => item != label);
       // console.log(newarray);
       } else {
        if (selectedValues.finish[0]) {
          newarray = [...selectedValues.finish, label];
        } else { 
          newarray = [label];
        }
      }
      SetselectedValues({style : selectedValues.style,
        length: selectedValues.length,
        width: selectedValues.width,
        height: selectedValues.height,
        material: selectedValues.material,
        printspec : selectedValues.printspec,
        printsurface: selectedValues.printsurface,
        coating: selectedValues.coating,
        finish: newarray ? newarray : [...selectedValues.finish, label],
        qty: selectedValues.qty});
      setpercentageFinish(eachTabpercent);
      SetselectedFinish(id);
      if (id === 1 && percentageStyle) {
        DisplayspotImage === "none"
          ? SetDisplayspotImage("block")
          : SetDisplayspotImage("none");
      } else if (id === 2 && percentageStyle) {
        DisplayfoilImage === "none"
          ? SetDisplayfoilImage("block")
          : SetDisplayfoilImage("none");
      } else if (id === 3 && percentageStyle) {
        DisplayembossImage === "none"
          ? SetDisplayembossImage("block")
          : SetDisplayembossImage("none");
      }
    }
    //console.log(state + name + id);

    // return state;
    if (percentage > 90) {
      SetNiceClass("Nice Display");
    }
  }
  function UpdateMaterial(styleid, id) {
    if (styleid === 1 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(lbwhitematerial);
    }
    if (styleid === 1 && (id === 3 || id === 4)) {
      SetMaterialImg(lbbrownmaterial);
    }
    if (styleid === 2 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(rtewhitematerial);
    }
    if (styleid === 2 && (id === 3 || id === 4)) {
      SetMaterialImg(rtebrownmaterial);
    }
    if (styleid === 3 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(clbwhite);
    }
    if (styleid === 3 && (id === 3 || id === 4)) {
      SetMaterialImg(clbkraft);
    }
    if (styleid === 4 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(skilletwhite);
    }
    if (styleid === 4 && (id === 3 || id === 4)) {
      SetMaterialImg(skilletkraft);
    }
    if (styleid === 5 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(sleevewhite);
    }
    if (styleid === 5 && (id === 3 || id === 4)) {
      SetMaterialImg(sleevekraft);
    }
    if (styleid === 6 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(mailerwhite);
    }
    if (styleid === 6 && (id === 3 || id === 4)) {
      SetMaterialImg(mailerkraft);
    }
    if (styleid === 7 && (id === 1 || id === 2 || id === 5)) {
      SetMaterialImg(sltraywhite);
    }
    if (styleid === 7 && (id === 3 || id === 4)) {
      SetMaterialImg(sltraykraft);
    }
    if (styleid === 8 && id) {
      SetMaterialImg(otherQues);
      //SetMaterialDisplay("none");
    }
  }
  function UpdateSpec(styleid, materialid, specid) {
    SetSpecsrc("");
    setPrintSurfaceTabDIsplay("show");
    if (specid === 1) {
      setPrintSurfaceTabDIsplay("hide");
    }
    if (
      styleid === 1 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(lbwhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(lbwhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(lbwhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(lbwhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(lbwhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(lbwhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(lbwhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(lbwhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(lbwhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(lbwhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc(lbwhitebw);
      }
    }
    if (styleid === 1 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(lbkraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(lbkraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(lbkraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(lbkraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(lbkraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(lbkraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(lbkraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(lbkraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(lbkraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(lbkraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 2 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(rtewhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(rtewhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(rtewhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(rtewhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(rtewhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(rtewhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(rtewhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(rtewhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(rtewhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(rtewhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (styleid === 2 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(rtekraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(rtekraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(rtekraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(rtekraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(rtekraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(rtekraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(rtekraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(rtekraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(rtekraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(rtekraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 3 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(clbwhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(clbwhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(clbwhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(clbwhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(clbwhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(clbwhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(clbwhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(clbwhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(clbwhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(clbwhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (styleid === 3 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(clbkraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(clbkraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(clbkraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(clbkraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(clbkraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(clbkraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(clbkraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(clbkraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(clbkraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(clbkraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 4 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(skilletwhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(skilletwhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(skilletwhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(skilletwhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(skilletwhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(skilletwhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(skilletwhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(skilletwhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(skilletwhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(skilletwhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (styleid === 4 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(skilletkraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(skilletkraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(skilletkraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(skilletkraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(skilletkraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(skilletkraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(skilletkraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(skilletkraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(skilletkraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(skilletkraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 5 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(sleevewhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(sleevewhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(sleevewhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(sleevewhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(sleevewhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(sleevewhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(sleevewhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(sleevewhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(sleevewhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(sleevewhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (styleid === 5 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(sleevekraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(sleevekraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(sleevekraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(sleevekraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(sleevekraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(sleevekraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(sleevekraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(sleevekraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(sleevekraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(sleevekraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 6 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(mailerwhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(mailerwhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(mailerwhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(mailerwhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(mailerwhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(mailerwhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(mailerwhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(mailerwhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(mailerwhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(mailerwhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc();
      }
    }
    if (styleid === 6 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(mailerkraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(mailerkraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(mailerkraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(mailerkraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(mailerkraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(mailerkraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(mailerkraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(mailerkraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(mailerkraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(mailerkraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (
      styleid === 7 &&
      (materialid === 0 ||
        materialid === 1 ||
        materialid === 2 ||
        materialid === 5)
    ) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(sltrywhitebw);
      }
      if (specid === 3) {
        SetSpecsrc(sltrywhitecmky);
      }
      if (specid === 4) {
        SetSpecsrc(sltrywhitecmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(sltrywhitecmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(sltrywhitecmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(sltrywhitecmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(sltrywhite1spot);
      }
      if (specid === 9) {
        SetSpecsrc(sltrywhite2spot);
      }
      if (specid === 10) {
        SetSpecsrc(sltrywhite1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(sltrywhite2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
    if (styleid === 7 && (materialid === 3 || materialid === 4)) {
      if (specid === 0 || specid === 1) {
        SetSpecsrc("");
      }
      if (specid === 2) {
        SetSpecsrc(sltrykraftbw);
      }
      if (specid === 3) {
        SetSpecsrc(sltrykraftcmky);
      }
      if (specid === 4) {
        SetSpecsrc(sltrykraftcmky1spot);
      }
      if (specid === 5) {
        SetSpecsrc(sltrykraftcmky2spot);
      }
      if (specid === 6) {
        SetSpecsrc(sltrykraftcmky1spotmetflo);
      }
      if (specid === 7) {
        SetSpecsrc(sltrykraftcmyk2spotmetflo);
      }
      if (specid === 8) {
        SetSpecsrc(sltrykraft1spot);
      }
      if (specid === 9) {
        SetSpecsrc(sltrykraft2spot);
      }
      if (specid === 10) {
        SetSpecsrc(sltrykraft1spotmetflo);
      }
      if (specid === 11) {
        SetSpecsrc(sltrykraft2spotmetflo);
      }
      if (specid === 12) {
        SetSpecsrc("");
      }
    }
  }
}
