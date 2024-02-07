import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/home" className="logo">
        <h1 className="logo__title">FriEvents</h1>
        <p className="logo__tagline">Event planner for busy friends</p>
      </Link>
      <article className="links">
        <Link className="links__link" to="/group">
          Create a group
        </Link>
        <Link className="links__link" to="/availability">
          Availability
        </Link>
        <Link className="links__link" to="/event">
          Create an event
        </Link>
        <Link className="links__link" to="/friends">
          View friends list
        </Link>
      </article>
    </header>
  );
}

export default Header;
