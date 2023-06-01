import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;