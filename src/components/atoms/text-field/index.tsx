import { forwardRef } from "react";
import { Form } from "rsuite";

export const TextField = forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel className="text-left text-sm text-stone-500 font-regular">
        {label}
      </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});
