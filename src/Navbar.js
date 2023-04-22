import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li navbar__li>
          <Link className="navbar__link " to="/">
            Inbox<span className="active"></span>
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/spam">
            Spam
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/trash">
            Trash
          </Link>
        </li>
      </ul>
    </nav>
  );
};
