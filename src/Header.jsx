import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/">All posts</Link> | <Link  to="/new">New post</Link> {localStorage.jwt === undefined ? (<>| <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> </>) : (<>| <LogoutLink /> </>)}
    </header>
  );
}
