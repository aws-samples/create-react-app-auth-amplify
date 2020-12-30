import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useField, useFormikContext } from "formik";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

async function fetchNewTextC(a, b) {
  await new Promise((r) => setTimeout(r, 500));
  return `textA: ${a}, textB: ${b}`;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

const sliderMarks = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  }
];

const MyField = (props) => {
  const {
    values: { APIKey, SecretKey },
    setFieldValue
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    let isCurrent = true;
    // your business logic around when to fetch goes here.
    if (APIKey.trim() !== "" && SecretKey.trim() !== "") {
      fetchNewTextC(APIKey, SecretKey).then((textC) => {
        if (!!isCurrent) {
          // prevent setting old values
          setFieldValue(props.name, textC);
        }
      });
    }
    return () => {
      isCurrent = false;
    };
  }, [APIKey, SecretKey, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
function forming() {
  const initialValues = { slider: 1, APIKey: "", SecretKey: "", textC: "" };
  const classes = useStyles();
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
      >
        <div className="section">
          <h1>AutoCrypto Trading</h1>
          <p style={{ color: "#555" }}>Please enter all values correctly</p>
          <Form>
            <label>
              API key
              <Field name="APIKey" />
            </label>
            <label>
              Secret key
              <Field name="SecretKey" />
            </label>
            <label>
              BTC Amount
              <MyField name="BTCAmount" />
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Activate" />
              Activate
            </label>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export {Forming};