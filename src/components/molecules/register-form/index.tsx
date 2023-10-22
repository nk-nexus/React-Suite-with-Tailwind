import { TextField } from "@components/atoms/text-field";
import { User } from "@contexts/users";
import { TState } from "@utils/common.type";
import { Fragment, useRef, useState } from "react";
import { Button, ButtonToolbar, Form, FormInstance, Stack } from "rsuite";
import { model } from "./schema";

export const RegisterForm = () => {
  const formRef = useRef<FormInstance<User>>(null);
  const [formValue, setFormValue] = useState<TState>({
    firstname: "",
    lastname: "",
    phoneNo: "",
  });

  const handleSubmit = () => {
    if (!formRef.current?.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  }

  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container bg-white shadow-sm p-10 rounded"
      >
        <Form
          ref={formRef}
          onChange={setFormValue}
          formValue={formValue}
          model={model}
        >
          <TextField name="firstname" label="First Name" />
          <TextField name="lastname" label="Last Name" />
          <TextField name="phoneNo" label="Phone Number" />

          <ButtonToolbar>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </Form>
      </Stack>
    </Fragment>
  );
}
