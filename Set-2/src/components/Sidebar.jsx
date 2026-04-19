// src/components/Sidebar.jsx
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="hidden md:block w-60 p-4 border-r bg-gray-100 dark:bg-gray-800">
      <h2 className="font-semibold mb-4">Sidebar</h2>

      {isLoggedIn && <p className="text-sm">Welcome back, user 👋</p>}
    </div>
  );
};

export default Sidebar;