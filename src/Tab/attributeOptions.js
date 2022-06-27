const attributeOptions = [
  {
    id: 1,
    attribute: "Style",
    attributeoptionid: 1,
    type: "radio",
    attributeLabel: "Lid & Base",
    img: "lidandbaseimg",
    val: 1
  },
  {
    id: 2,
    attribute: "Style",
    attributeoptionid: 2,
    type: "radio",
    attributeLabel: "Tuck End",
    img: "Clbsmallimg",
    val: 2
  },
  {
    id: 3,
    attribute: "Style",
    attributeoptionid: 3,
    type: "radio",
    val: 3,
    attributeLabel: "Crash Lock Base",
    img: "Clbsmallimg"
  },
  {
    id: 4,
    attribute: "Style",
    attributeoptionid: 4,
    type: "radio",
    val: 4,
    attributeLabel: "Skillet",
    img: "SkilletSmallimg"
  },
  {
    id: 5,
    attribute: "Style",
    attributeoptionid: 5,
    type: "radio",
    val: 5,
    attributeLabel: "Sleeve",
    img: "SleeveSmallimg"
  },
  {
    id: 6,
    attribute: "Style",
    attributeoptionid: 6,
    type: "radio",
    val: 6,
    attributeLabel: "Mailer",
    img: "MailerSmallimg"
  },
  {
    id: 7,
    attribute: "Style",
    attributeoptionid: 7,
    type: "radio",
    val: 7,
    attributeLabel: "Self Locking Tray",
    img: "SltraySmallimg"
  },
  {
    id: 8,
    attribute: "Style",
    attributeoptionid: 8,
    type: "radio",
    val: 8,
    attributeLabel: "Others",
    img: "OtherSmallimg"
  },
  {
    id: 9,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 1,
    attributeLabel: "Coated White Board",
    img: "coatedwhite"
  },
  {
    id: 10,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 2,
    attributeLabel: "Uncoated White Board",
    img: "UncoatedWhite"
  },
  {
    id: 11,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 3,
    attributeLabel: "Kraft Brown Board",
    img: "KraftBrownBoard"
  },
  {
    id: 12,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 4,
    attributeLabel: "Microflute Kraft",
    img: "MicrofluteKraft"
  },
  {
    id: 13,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 5,
    attributeLabel: "Microflute White",
    img: "MicrofluteWhite"
  },
  {
    id: 14,
    attribute: "Material",
    attributeoptionid: 1,
    type: "radio",
    val: 6,
    attributeLabel: "Others",
    img: "OtherBoard"
  },
  {
    id: 15,
    attribute: "Dimension",
    attributeoptionid: 1,
    type: "text",
    val: "",
    attributeLabel: "Length (mm)",
    img: "",
    measure: "mm"
  },
  {
    id: 16,
    attribute: "Dimension",
    attributeoptionid: 2,
    type: "text",
    val: "",
    attributeLabel: "Width (mm)",
    img: "",
    measure: "mm"
  },
  {
    id: 17,
    attribute: "Dimension",
    attributeoptionid: 3,
    type: "text",
    val: "",
    attributeLabel: "Height (mm)",
    img: "",
    measure: "mm"
  },
  {
    id: 18,
    attribute: "Print Spec",
    attributeoptionid: 1,
    type: "radio",
    val: 1,
    attributeLabel: "None",
    img: "ColorNone"
  },
  {
    id: 19,
    attribute: "Print Spec",
    attributeoptionid: 2,
    type: "radio",
    val: 2,
    attributeLabel: "Black Only",
    img: "BlackFill"
  },
  {
    id: 20,
    attribute: "Print Spec",
    attributeoptionid: 3,
    type: "radio",
    val: 3,
    attributeLabel: "CMYK",
    img: "Cmyk"
  },
  {
    id: 21,
    attribute: "Print Spec",
    attributeoptionid: 4,
    type: "radio",
    val: 4,
    attributeLabel: "CMYK +1 Pantone (Std)",
    img: "Cmyk1"
  },
  {
    id: 22,
    attribute: "Print Spec",
    attributeoptionid: 5,
    type: "radio",
    val: 5,
    attributeLabel: "CMYK +2 Pantone (Std)",
    img: "Cmyk2"
  },
  {
    id: 23,
    attribute: "Print Spec",
    attributeoptionid: 6,
    type: "radio",
    val: 6,
    attributeLabel: "CMYK +1 Pantone (Metallic/Fluorescent)",
    img: "CMYK1MF"
  },
  {
    id: 24,
    attribute: "Print Spec",
    attributeoptionid: 7,
    type: "radio",
    val: 7,
    attributeLabel: "CMYK +2 Pantone (Metallic/Fluorescent)",
    img: "CMYK2MF"
  },
  {
    id: 25,
    attribute: "Print Spec",
    attributeoptionid: 8,
    type: "radio",
    val: 8,
    attributeLabel: "1 Pantone (Std)",
    img: "pantone1"
  },
  {
    id: 26,
    attribute: "Print Spec",
    attributeoptionid: 9,
    type: "radio",
    val: 9,
    attributeLabel: "2 Pantone (Std)",
    img: "pantone2"
  },
  {
    id: 27,
    attribute: "Print Spec",
    attributeoptionid: 10,
    type: "radio",
    val: 10,
    attributeLabel: "1 Pantone (Metallic/Fluorescent)",
    img: "pantone1MF"
  },
  {
    id: 28,
    attribute: "Print Spec",
    attributeoptionid: 11,
    type: "radio",
    val: 11,
    attributeLabel: "2 Pantone (Metallic/Fluorescent)",
    img: "pantone2MF"
  },
  {
    id: 29,
    attribute: "Print Spec",
    attributeoptionid: 12,
    type: "radio",
    val: 12,
    attributeLabel: "Other",
    img: "otherFill"
  },

  {
    id: 30,
    attribute: "Print Surface",
    attributeoptionid: 1,
    type: "radio",
    val: 1,
    attributeLabel: "None",
    img: "NoneSurface"
  },
  {
    id: 31,
    attribute: "Print Surface",
    attributeoptionid: 2,
    type: "radio",
    val: 2,
    attributeLabel: "Outside",
    img: "OutsideSurf"
  },
  {
    id: 32,
    attribute: "Print Surface",
    attributeoptionid: 3,
    type: "radio",
    val: 3,
    attributeLabel: "Outside + Inside",
    img: "OutAndInsurf"
  },
  {
    id: 33,
    attribute: "Coating",
    attributeoptionid: 1,
    type: "radio",
    val: 1,
    attributeLabel: "None",
    img: "CoatingNone"
  },
  {
    id: 34,
    attribute: "Coating",
    attributeoptionid: 2,
    type: "radio",
    val: 2,
    attributeLabel: "Gloss",
    img: "CoatingGloss"
  },
  {
    id: 35,
    attribute: "Coating",
    attributeoptionid: 3,
    type: "radio",
    val: 3,
    attributeLabel: "Silk",
    img: "CoatingSilk"
  },
  {
    id: 36,
    attribute: "Coating",
    attributeoptionid: 4,
    type: "radio",
    val: 4,
    attributeLabel: "Matt",
    img: "CoatingMatt"
  },
  {
    id: 37,
    attribute: "Coating",
    attributeoptionid: 5,
    type: "radio",
    val: 5,
    attributeLabel: "Other",
    img: "CoatingOther"
  },
  {
    id: 38,
    attribute: "Finish",
    attributeoptionid: 1,
    type: "checkbox",
    val: 1,
    attributeLabel: "Spot Gloss UV",
    img: "FinishGloss"
  },
  {
    id: 39,
    attribute: "Finish",
    attributeoptionid: 2,
    type: "checkbox",
    val: 2,
    attributeLabel: "Mettallic Foiling",
    img: "FinishMetalic"
  },
  {
    id: 40,
    attribute: "Finish",
    attributeoptionid: 3,
    type: "checkbox",
    val: 3,
    attributeLabel: "Emboss / Deboss",
    img: "FinishEmboss"
  },
  {
    id: 41,
    attribute: "Finish",
    attributeoptionid: 4,
    type: "checkbox",
    val: 4,
    attributeLabel: "Others",
    img: "FinishOthers"
  },
  {
    id: 42,
    attribute: "Quantity",
    attributeoptionid: 1,
    type: "text",
    val: "",
    attributeLabel: "Quantity",
    img: "",
    measure: ""
  }
];

export default attributeOptions;
