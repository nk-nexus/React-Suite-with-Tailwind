import { RegisterForm } from "@components/molecules/register-form";
import { AuthContext } from "@contexts/auth";
import { TRecordState } from "@utils/common.type";
import { SIGN_TIME } from "@utils/constants";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const callback = async (value: TRecordState) => {
    // The Auth required a little bit of time to process.
    setTimeout(() => {
      auth?.login(value);
    }, SIGN_TIME)

    return navigate("/");
  };

  return <RegisterForm callback={callback} />;
}

export default LoginPage;
