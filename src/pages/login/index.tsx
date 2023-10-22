import { RegisterForm } from "@components/molecules/register-form";
import { AuthContext } from "@contexts/auth";
import { TRecordState } from "@utils/common.type";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const callback = async (value: TRecordState) => {
    // The Auth required a little bit of time to process.
    setTimeout(() => {
      auth?.login(value);
    }, 1000)

    return navigate("/");
  };

  return <RegisterForm callback={callback} />;
}

export default LoginPage;
