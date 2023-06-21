import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/locations">Beaches</Link>
          &nbsp; | &nbsp;
          <Link to="/items/new">Post a lost or found item</Link>
          <p></p>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </nav>
        {/* <h4>Lost And Found</h4> */}
      </header>
    </>
  );
}
