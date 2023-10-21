import React from "react";
import { Form, Button, ButtonToolbar, Schema, Stack } from "rsuite";

import "./App.css";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  age: NumberType("Please enter a valid number.").range(
    18,
    30,
    "Please enter a number from 18 to 30"
  ),
  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const TextField = React.forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel className="text-left">{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

type TFormRef = {
  check: () => void;
  checkForField: (str: string, cb: (v: unknown) => void) => void;
};

function App() {
  const formRef = React.useRef<TFormRef>();
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef?.current?.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container bg-white shadow-sm p-10 rounded"
      >
        <Form
          ref={formRef as any}
          onChange={setFormValue as any}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="age" label="Age" />
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
          />
          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            autoComplete="off"
          />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </Form>
      </Stack>
    </React.Fragment>
  );
}

export default App;
