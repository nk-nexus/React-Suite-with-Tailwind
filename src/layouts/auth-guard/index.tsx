import { AuthProvider, AuthContext } from "@contexts/auth";
import HeaderBar from "@layouts/header-bar";
import { TFCProps } from "@utils/common.type";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "rsuite";

/**
 * Use this Layout for wrapped components
 * or pages that required authentication
 */
const AuthLayout: React.FC<TFCProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // Auto Check Login
  if (!auth?.isAuth) {
    useEffect(() => {
      return navigate("/login");
    }, []);
  }

  // Loout
  const callback = () => {
    // Set timeout for Logout.
    setTimeout(() => {
      auth?.logout();
    }, 500);
    // Navigate to Login Page
    return navigate("/login");
  };

  return (
    <AuthProvider>
      <HeaderBar callback={callback}>
        <Container className="mt-14">{children}</Container>
      </HeaderBar>
    </AuthProvider>
  );
};

export default AuthLayout;
