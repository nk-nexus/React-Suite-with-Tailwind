import { TChildComponent } from "@utils/common.type";
import { Stack } from "rsuite";
import { RegisterForm } from "./register";

export const LoginForm = ({ callback }: TChildComponent) => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    className="container bg-white shadow-sm sm:p-10 p-2 rounded"
  >
    <h2 className="text-4xl font-extrabold py-8">Login</h2>
    <RegisterForm callback={callback} />
  </Stack>
);
