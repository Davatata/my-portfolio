import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
import packageJson from "../../../package.json";

function MainNavigation(params) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Portfolio</div>
      <span id="version" className="text-light">
        v{packageJson.version}
      </span>
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
