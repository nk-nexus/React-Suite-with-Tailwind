import AuthLayout from "@layouts/auth-guard";

function Home() {
  return (
    <AuthLayout>
      <div>Home Page</div>
    </AuthLayout>
  );
};

export default Home;
