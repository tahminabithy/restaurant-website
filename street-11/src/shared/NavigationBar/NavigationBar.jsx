import { Link } from "react-router-dom";

const NavigationBar = () => {
  const navOptions = (
    <>
      {" "}
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li to="">
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to="/ourMenu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order">OUR SHOP</Link>
      </li>
      <li>
        <Link>SIGN OUT</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 max-w-screen-2xl ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content  bg-[#1F2937] mt-3 z-[1] p-2 shadow  w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Street 11 restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default NavigationBar;
