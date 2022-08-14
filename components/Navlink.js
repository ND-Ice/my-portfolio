import { Link } from "react-scroll";

export default function Navlink({ to, children }) {
  return (
    <Link
      className="nav-link"
      to={to}
      activeClass="active"
      offset={-100}
      smooth
      spy
      isDynamic
    >
      {children}
    </Link>
  );
}
