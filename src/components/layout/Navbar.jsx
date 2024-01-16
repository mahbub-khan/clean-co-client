import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logoutUser } = useAuth();
  //console.log(user);

  return (
    <div className="navbar w-full bg-base-300">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <div className="flex gap-2">
            {/* Navbar menu content here */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
              }
            >
              Services
            </NavLink>
            {user?.email ? (
              <button onClick={logoutUser} className="btn btn-ghost btn-sm">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="btn btn-ghost btn-sm">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
