import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const user = { _id: "121", name: "Raj", email: "", role: "admin" };
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const logoutHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="header">
        <Link to="/" onClick={() => setOpen(false)}>
          HOME
        </Link>
        <Link to="/search" onClick={() => setOpen(false)}>
          <FaSearch />
        </Link>
        <Link to="/cart" onClick={() => setOpen(false)}>
          <FaShoppingBag />
        </Link>
        {/* If user is logged in */}
        {user?._id ? (
          <>
            <button onClick={() => setOpen(!open)}>
              <FaUser />
            </button>
            <dialog open={open} className="dialog">
              <div>
                {user?.role === "admin" && (
                  <Link to="/admin/dashboard" onClick={() => setOpen(false)}>
                    Admin
                  </Link>
                )}
                <Link to="/orders" onClick={() => setOpen(false)}>
                  Orders
                </Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to="/login">
            Login <FaSignInAlt />
          </Link>
        )}

        {/* If user is admin */}
      </nav>
    </>
  );
};

export default Header;
