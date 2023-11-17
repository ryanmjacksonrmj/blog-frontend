import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/">All posts</Link> | <Link  to="/new">New post</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
    </header>
  );
}
