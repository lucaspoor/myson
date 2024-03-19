import sections from "../data/navbar.json";
import { HashLink as Link } from "react-router-hash-link";

export function Footer() {
  return (
    <footer className="footer bg-black-50 paddingchange">
      <div className="container" id="test">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <h2 className="text-white mb-4">Pooweb</h2>
            <p>
              Potenciamos su presencia online con diseño web innovador y
              funcional. Transformamos ideas en experiencias digitales
              excepcionales. Convierta visitantes en clientes con nuestro equipo
              experto en desarrollo web.
            </p>

            <p>No dudes más, contáctanos y potencia tu negocio.</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div className="footer-widget recent-blog">
              <h4 className="mb-4 text-white letter-spacing text-uppercase">
                Trabajos recientes
              </h4>
              <div>
                <Link
                  smooth
                  to="https://www.cymmedical.cl/"
                  className="text-white"
                >
                  Desarrollo sitio web Cymmedical
                </Link>
                <p className="text-sm mt-2 text-white-50">
                  30 de noviembre 2023
                </p>
              </div>
              <div className="mt-4">
                <Link
                  smooth
                  to="https://www.pastene.cl/"
                  className="text-white"
                >
                  Desarrollo sitio web Pastene
                </Link>
                <p className="text-sm mt-2 text-white-50">30 february 2023</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 mb-5 mb-lg-0">
            <div className="footer-widget">
              <h4 className="mb-4 text-white letter-spacing text-uppercase">
                secciones
              </h4>
              <ul className="list-unstyled footer-menu lh-40 mb-0">
                {sections.secciones.map((s) => {
                  return (
                    <li>
                      <Link smooth to={s.link}>
                        <i className="ti-angle-double-right mr-2"></i>
                        {s.seccion}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="footer-widget">
              <h4 className="mb-4 text-white letter-spacing text-uppercase">
                Ubicación
              </h4>
              <p>Chile, Región de la Araucanía, Pucón </p>
              <span className="text-white">+569 3208 2293</span> <br />
              <span className="text-white">Lucaspoor10@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5 px-3 bg-black mx-1">
          <div className="col-lg-4">
            <p className="text-white mt-3">
              PooWeb © 2024 , Desarrollado por{" "}
              <Link smooth to="https://www.pooweb.cl/" className="text-color">
                Lucas Poo
              </Link>
            </p>
          </div>
          <div className="col-lg-6 ml-auto text-right">
            <ul className="list-inline mb-0 footer-socials">
              <li className="list-inline-item">
                <Link
                  smooth
                  to="https://www.linkedin.com/in/lucas-poo-324208203/"
                >
                  <i className="ti-linkedin"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link smooth to="https://www.instagram.com/lucaspoor/">
                  <i className="ti-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link smooth to="https://github.com/lucaspoor">
                  <i className="ti-github"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
