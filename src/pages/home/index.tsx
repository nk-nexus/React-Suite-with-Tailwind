import AuthLayout from "@layouts/auth-guard";
import { users } from "@contexts/useUserContext"
import WaitIcon from '@rsuite/icons/Wait'
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import { CardBooked, CardWaitting } from "@components/atoms/card";

function Home() {
  return (
    <AuthLayout>
      <div className="sm:hidden sticky top-10 flex flex-row items-center justify-between py-4">
        <p className="flex items-center text-base"><UserBadgeIcon className="mr-2" /><strong>12</strong></p>
        <p className="flex items-center text-base"><strong>0</strong><WaitIcon className="ml-2" /></p>
      </div>
      <div className="sm:flex hidden flex-row items-center justify-between py-4">
        <p className="flex items-center text-base"><UserBadgeIcon className="mr-2" /><strong>12</strong>&nbsp;Current Users</p>
        <p className="flex items-center text-base">Available Slots&nbsp;<strong>0</strong><WaitIcon className="ml-2" /></p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl w-full">
        {
          // Display Booking Slots
          users.map((item, idx) => {
            return item?.phoneNo && item.signAt
              ? <CardBooked key={item.phoneNo} user={item} />
              : <CardWaitting key={`card-${idx + 1}`} />;
          })
        }
      </div>
    </AuthLayout>
  );
}

export default Home;
