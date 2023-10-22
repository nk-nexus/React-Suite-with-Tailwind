import { TChildComponent, TFCProps } from "@utils/common.type";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import SignOut from "@rsuite/icons/legacy/SignOut";
import User from "@rsuite/icons/legacy/User";
import { Nav, Navbar } from "rsuite";

const HeaderBar: React.FC<TFCProps & TChildComponent> = ({
  children,
  callback,
}) => {

  const handleOnSelectLogout = () => {
    callback({ logout: true })
  }
  
  return (
    <>
      <Navbar className="fixed top-0 right-0 left-0 w-screen h-50 bg-slate-100">
        <Navbar.Brand href="/" className="text-2xl font-extrabold p-3">
          Logo
        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />} href="/">
            Home
          </Nav.Item>
          <Nav.Item icon={<User />} href="/users">
            User
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Menu icon={<CogIcon />} title="Settings">
            <Nav.Item icon={<SignOut />} onSelect={handleOnSelectLogout}>
              Logout
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
