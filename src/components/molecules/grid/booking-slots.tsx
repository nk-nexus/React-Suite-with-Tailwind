import { CardBooked, CardReadonly, CardWaitting } from "@components/atoms/card";
import { useAuth } from "@contexts/auth";
import { TUser, useUser } from "@contexts/users";

export const GridBookingSlot = () => {
  const auth = useAuth();
  const user = useUser();

  const handleSignOut = (data: TUser) => {
    user.signOut(data);
  };

  const handleSignIn = (id: number) => {
    if (auth.user) {
      const { firstname, lastname, phoneNo } = auth.user;
      user.signIn({
        firstname,
        lastname,
        phoneNo,
        id,
      });
    } else {
      throw new Error("Booking fail, Not found user");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl w-full">
      {
        // Display Booking Slots
        user?.users.map((item) => {
          if (item.signAt) {
            return item?.isAdmin || item?.isOwner ? (
              <CardBooked key={item.id} user={item} onSignOut={handleSignOut} />
            ) : (
              <CardReadonly key={item.id} user={item} />
            );
          }
          return (
            <CardWaitting
              key={item.id}
              id={item.id}
              isAdmin={!!item?.isAdmin}
              onSignIn={handleSignIn}
            />
          );
        })
      }
    </div>
  );
};
