import { TextField } from "@components/atoms/text-field";
import { TChildComponent, TRecordState } from "@utils/common.type";
import { useRef, useState } from "react";
import { Button, ButtonToolbar, Form, FormInstance } from "rsuite";
import { model } from "./schema";

import "./index.css"

export const RegisterForm = ({ callback }: TChildComponent) => {
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
    callback({ ...formValue, id: 0 });
    // reset form value state
    setFormValue(() => ({
      firstname: "",
      lastname: "",
      phoneNo: "",
    }));
  };

  return (
    <Form
      ref={formRef}
      onChange={setFormValue}
      formValue={formValue}
      model={model}
      className="flex flex-col items-center justify-center"
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
          className="bg-blue-500 my-8 custom-button-width"
        >
          Submit
        </Button>
      </ButtonToolbar>
    </Form>
  );
};
