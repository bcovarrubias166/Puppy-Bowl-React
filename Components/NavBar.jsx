import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/newplayer">Add New Player</Link>
      {/* <Link to="/SinglePlayer">Single Player</Link> */}
    </div>
  );
}