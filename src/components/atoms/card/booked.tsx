import CloseIcon from '@rsuite/icons/Close';
import TimeIcon from "@rsuite/icons/Time";
import PhoneIcon from "@rsuite/icons/Phone";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import { SLATE_400 } from "@utils/constants";
import { censorPhoneNo, signAtFormat } from "@utils/transforms";
import { Button } from "rsuite";
import { TCardBooking } from ".";

export const CardBooked = ({
  onSignOut,
  user,
}: TCardBooking) => {
  const { firstname, lastname, phoneNo, signAt } = user
  return (
    <div className="w-48 group hover:bg-red-50 rounded-lg shadow-sm bg-zinc-50 opacity-1 p-4">
      <div className="group-hover:hidden flex flex-col justify-center items-center py-4">
        <PhoneIcon color={SLATE_400} className=" w-10 h-10 my-2" />
        <h4 className="font-extrabold text-base text-stone-800 py-1">
          {censorPhoneNo(phoneNo)}
        </h4>
      </div>
      <div className="text-sm">
        <p className="p-1">
          <UserBadgeIcon className="mr-2" />
          <span className="text-slate-800 font-bold">{`${firstname} ${lastname}`}</span>
        </p>
        <p className="p-1">
          <TimeIcon color="#94a3b8" className="mr-2" />
          <span className="text-slate-400">{signAtFormat(signAt)}</span>
        </p>
      </div>
      <div className="group-hover:flex hidden flex-col justify-center items-center py-4">
        <CloseIcon className="w-10 h-10 my-2" />
        <Button
          color="red"
          appearance="subtle"
          onClick={() => onSignOut(user)}
        >
          <strong>Sign out</strong>
        </Button>
      </div>
    </div>
  )
};
