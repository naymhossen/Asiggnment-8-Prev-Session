import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Navber = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-8 shadow-md">
        <div className="ml-16">
          <Logo></Logo>
        </div>
        <ul className="flex gap-5 mr-16">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favorite"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Login/Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
