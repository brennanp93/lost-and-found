import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

 return (
    <header>
      <h2>Lost And Found</h2>
      <nav className="header-links">
        <Link to="/locations">Beaches</Link>
        <Link to="/items/new">Post item</Link>
        <span>Welcome, {user.name}</span>
        <button onClick={handleLogOut}>Log Out</button>
      </nav>
    </header>
  );
};
