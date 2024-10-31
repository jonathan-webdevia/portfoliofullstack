import "./index.css";
import logo from "../../assets/media/img/logo.png";

const Navbar = () => {
  return (
    <div className="test">
      <nav className="navbar navbar-expand-xl">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Mon CV
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <ul className="dropdown-menu bg-transparent border-0 m-0 p-0">
                <li>
                  <a className="dropdown-item" href="#">
                    Front-end
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FullStack
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
