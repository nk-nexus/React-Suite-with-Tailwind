import AuthLayout from "@layouts/auth-guard";

function Users() {
  return (
    <AuthLayout>
      <div>User Page</div>
    </AuthLayout>
  );
}

export default Users;
