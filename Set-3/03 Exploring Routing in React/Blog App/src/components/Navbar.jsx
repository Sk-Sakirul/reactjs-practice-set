import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
