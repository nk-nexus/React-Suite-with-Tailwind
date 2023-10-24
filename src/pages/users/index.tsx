import { UserTable } from "@components/molecules/table";
import { UserProvider } from "@contexts/users";
import AuthLayout from "@layouts/auth-guard";

function Users() {
  return (
    <AuthLayout>
      <UserProvider>
        <UserTable />
      </UserProvider>
    </AuthLayout>
  );
}

export default Users;
