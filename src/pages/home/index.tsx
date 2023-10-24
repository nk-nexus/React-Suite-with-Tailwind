import AuthLayout from "@layouts/auth-guard";
import { UserProvider } from "@contexts/users";
import { GridBookingSlot } from "@components/molecules/grid";
import { SlotsHeading } from "@components/atoms/heading";

function HomePage() {
  return (
    <AuthLayout>
      <UserProvider>
        <SlotsHeading />
        <GridBookingSlot />
      </UserProvider>
    </AuthLayout>
  );
}

export default HomePage;
