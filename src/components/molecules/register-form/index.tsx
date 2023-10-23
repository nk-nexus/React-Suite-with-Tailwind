import { TextField } from "@components/atoms/text-field";
import { TChildComponent, TRecordState } from "@utils/common.type";
import { Fragment, useRef, useState } from "react";
import { Button, ButtonToolbar, Form, FormInstance, Stack } from "rsuite";
import { model } from "./schema";

const RegisterForm = ({ callback }: TChildComponent) => {
  const formRef = useRef<FormInstance<TRecordState>>(null);
  const [formValue, setFormValue] = useState<TRecordState>({
    firstname: "",
    lastname: "",
    phoneNo: "",
  });

  const disabled = () => {
    return (
      !formValue.firstname ||
      !formValue.lastname ||
      formValue.phoneNo.length !== 10
    );
  };

  const handleSubmit = () => {
    if (!formRef.current?.check()) {
      console.error("Form Error");
      return;
    }
    // callback for login user
    callback(formValue)
    // reset form value state
    setFormValue(() => ({
      firstname: "",
      lastname: "",
      phoneNo: "",
    }))
  };

  return (
    <Fragment>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="container bg-white shadow-sm sm:p-10 p-2 rounded"
      >
        <h2 className="text-4xl font-extrabold py-8">Login</h2>
        <Form
          ref={formRef}
          onChange={setFormValue}
          formValue={formValue}
          model={model}
          
        >
          <TextField name="firstname" label="First Name" />
          <TextField name="lastname" label="Last Name" />
          <TextField name="phoneNo" label="Phone Number" />

          <ButtonToolbar color="blue">
            <Button
              block
              type="submit"
              appearance="primary"
              disabled={disabled()}
              onClick={handleSubmit}
              className="bg-blue-500 my-8"
            >
              Submit
            </Button>
          </ButtonToolbar>
        </Form>
      </Stack>
    </Fragment>
  );
};

export default RegisterForm;