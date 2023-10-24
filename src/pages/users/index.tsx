import AuthLayout from "@layouts/auth-guard";

function Users() {
  console.log('Users Page')
  return (
    <AuthLayout>
      <div className="grid grid-rows-3 grid-flow-col gap-6 max-w-7xl w-full">
        <div className="w-full">Item 1</div>
        <div className="w-full">Item 2</div>
        <div className="w-full">Item 3</div>
        <div className="w-full">Item 4</div>
        <div className="w-full">Item 5</div>
        <div className="w-full">Item 6</div>
        <div className="w-full">Item 7</div>
        <div className="w-full">Item 8</div>
        <div className="w-full">Item 9</div>
        <div className="w-full">Item 11</div>
        <div className="w-full">Item 12</div>
      </div>
    </AuthLayout>
  );
}

export default Users;
