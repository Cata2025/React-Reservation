import { Link } from "react-router";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navigationBox">
      <h2>Mi barra de navegacion</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/greetings">Greetings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
