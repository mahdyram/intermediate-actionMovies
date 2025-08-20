import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              MOVIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} <strong>ActionMovies</strong>. All
          rights reserved.
          <br />
          Follow us on:{" "}
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
