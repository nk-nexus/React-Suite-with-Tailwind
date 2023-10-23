import { CardBooked, CardReadonly, CardWaitting } from "@components/atoms/card";
import { TUser, useUser } from "@contexts/users";

export const GridBookingSlot = () => {
  const user = useUser();

  const handleLogout = (user: TUser) => {
    console.log("logout", user);
  };

  const handleBook = () => {
    console.log("booked");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl w-full">
      {
        // Display Booking Slots
        user?.users.map((item, idx) => {
          if (item?.isAdmin) {
            return (
              <CardBooked
                key={item.phoneNo}
                user={item}
                onPress={handleLogout}
              />
            );
          }
          return item?.phoneNo && item.signAt ? (
            <CardReadonly key={item.phoneNo} user={item} />
          ) : (
            <CardWaitting key={`card-${idx + 1}`} onPress={handleBook} />
          );
        })
      }
    </div>
  );
};
