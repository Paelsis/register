import { Outlet, Link } from "react-router-dom";

// Layout
export default () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/schema">Schema</Link>
          </li>
          <li>
            <Link to="/invalid">Invalid</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
