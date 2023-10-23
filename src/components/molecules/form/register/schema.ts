import { TUser } from "@contexts/users";
import { Schema } from "rsuite";

export type TLoginFormRef = {
  checkForField: (str: string, cb: (val: unknown) => void) => void;
  check: () => void;
};

const { StringType } = Schema.Types;

export const model = Schema.Model<TUser>({
  firstname: StringType().isRequired("This field is required."),
  lastname: StringType().isRequired("This field is required."),
  phoneNo: StringType()
    .addRule((value) => {
        if (value.length !== 10) {
            return false
        }
        // check value is string number
        return /^[0-9]+$/.test(value)
    }, "Invalid phone number.")
    .isRequired("This field is required."),
});
