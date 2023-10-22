import AuthLayout from "@layouts/auth-guard";

function Users() {
  console.log('User Page')
  return (
    <AuthLayout>
      <div>User Page</div>
    </AuthLayout>
  );
}

export default Users;
