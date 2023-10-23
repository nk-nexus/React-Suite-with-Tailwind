import AuthLayout from "@layouts/auth-guard";
import { UserProvider } from "@contexts/users";
import WaitIcon from "@rsuite/icons/Wait";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import { GridBookingSlot } from "@components/molecules/grid";

function Home() {
  return (
    <AuthLayout>
      <UserProvider>
        <div className="sm:hidden sticky top-10 flex flex-row items-center justify-between py-4">
          <p className="flex items-center text-base">
            <UserBadgeIcon className="mr-2" />
            <strong>12</strong>
          </p>
          <p className="flex items-center text-base">
            <strong>0</strong>
            <WaitIcon className="ml-2" />
          </p>
        </div>
        <div className="sm:flex hidden flex-row items-center justify-between py-4">
          <p className="flex items-center text-base">
            <UserBadgeIcon className="mr-2" />
            <strong>12</strong>&nbsp;Current Users
          </p>
          <p className="flex items-center text-base">
            Available Slots&nbsp;<strong>0</strong>
            <WaitIcon className="ml-2" />
          </p>
        </div>
        <GridBookingSlot />
      </UserProvider>
    </AuthLayout>
  );
}

export default Home;
