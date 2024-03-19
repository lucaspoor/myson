import { HashLink as Link } from "react-router-hash-link";
import navDatos from "../data/navbar.json";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navigation fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <h2 className="text-white text-capitalize">
            <i />
            {navDatos.tituloNormal}
            <span className="text-color">{navDatos.tituloColor}</span>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsid"
          aria-controls="navbarsid"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="ti-view-list"></span>
        </button>
        <div className="collapse text-center navbar-collapse" id="navbarsid">
          <ul className="navbar-nav mx-auto">
            {navDatos.secciones.map((n) => {
              return (
                <li className="nav-item active">
                  <Link className="nav-link" smooth to={n.link}>
                    {n.seccion} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
            <a href="tel:+569-3208-2293">
              <h3 className="text-color mb-0">
                <i className="ti-mobile mr-2"></i>+56 9 3208 2293
              </h3>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
