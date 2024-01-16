import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-green-300 flex-[2]">
        <h1>Admin Layout</h1>
      </div>
      <div className="bg-red-300 flex-[2]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
