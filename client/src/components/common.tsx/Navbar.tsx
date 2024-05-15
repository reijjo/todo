import { Link } from "react-router-dom";
import "./FooterNav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <h3>ToDo List</h3>
        <div className="nav-links">
          <Link to="/">
            <h4>Login</h4>
          </Link>
          <Link to="/">
            <h4>Sign Up</h4>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
