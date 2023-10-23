import WaitIcon from "@rsuite/icons/Wait";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import { useUser } from "@contexts/users";

export const SlotsHeading = () => {
  const user = useUser()
  return (
    <>
      <div className="sm:hidden sticky top-10 flex flex-row items-center justify-between py-4">
        <p className="flex items-center text-base">
          <UserBadgeIcon className="mr-2" />
          <strong>{ user.currentActive }</strong>
        </p>
        <p className="flex items-center text-base">
          <strong>{ user.availableSlots }</strong>
          <WaitIcon className="ml-2" />
        </p>
      </div>
      <div className="sm:flex hidden flex-row items-center justify-between py-4">
        <p className="flex items-center text-base">
          <UserBadgeIcon className="mr-2" />
          <strong>{ user.currentActive }</strong>&nbsp;Current Users
        </p>
        <p className="flex items-center text-base">
          Available Slots&nbsp;<strong>{ user.availableSlots }</strong>
          <WaitIcon className="ml-2" />
        </p>
      </div>
    </>
  );
};
