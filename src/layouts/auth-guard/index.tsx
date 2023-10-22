import { AuthProvider, AuthContext } from "@contexts/auth";
import { TFCProps } from "@utils/common.type";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout: React.FC<TFCProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth.user) {
    useEffect(() => {
      return navigate("/login");
    }, []);
  }
  
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AuthLayout;
