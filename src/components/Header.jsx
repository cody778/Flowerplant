import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/myPlants">My Plants</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;
      </nav>

      <h1>Flowerplant Care Guides</h1>
      <h2>Your personal plant knowledge base</h2>
    </header>
  )
}