import { TChildComponent, AppProviderProps  } from "@utils/common.type";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import SignOut from "@rsuite/icons/legacy/SignOut";
import User from "@rsuite/icons/legacy/User";
import { Nav, Navbar  } from "rsuite";
import useBreakpoint from "@hooks/useBreakPoint";

const HeaderBar: React.FC<AppProviderProps  & TChildComponent> = ({
  children,
  callback,
}) => {
  const { isXS } = useBreakpoint()

  const handleOnSelectLogout = () => {
    callback({ logout: true })
  }
  
  return (
    <>
      <Navbar className="fixed top-0 right-0 left-0 w-screen h-50 bg-slate-100 z-max">
        <Navbar.Brand href="/" className="text-2xl font-extrabold p-3">
          Logo
        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />} href="/">
            { isXS ? "" : "Home" }
          </Nav.Item>
          <Nav.Item icon={<User />} href="/users">
            { isXS ? "" : "Users" }
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Menu icon={<CogIcon />} title={isXS ? "" : "Settings"}>
            <Nav.Item icon={<SignOut />} onSelect={handleOnSelectLogout}>
              { isXS ? "" : "Logout" }
            </Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
      {/* Slot */}
      {children}
    </>
  );
};

export default HeaderBar;
