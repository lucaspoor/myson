import sections from "../data/sections.json";

export function Footer() {
  return (
    <footer className="footer bg-black-50">
      <div className="container">
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
                Recents Posts
              </h4>
              <div>
                <a href="blog-single.html" className="text-white">
                  Claritas est etiam processus dynamicus
                </a>
                <p className="text-sm mt-2 text-white-50">30 february 2019</p>
              </div>
              <div className="mt-4">
                <a href="blog-single.html" className="text-white">
                  Claritas est etiam processus dynamicus
                </a>
                <p className="text-sm mt-2 text-white-50">30 february 2019</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 mb-5 mb-lg-0">
            <div className="footer-widget">
              <h4 className="mb-4 text-white letter-spacing text-uppercase">
                Quick Links
              </h4>
              <ul className="list-unstyled footer-menu lh-40 mb-0">
                {sections.map((s) => {
                  return (
                    <li>
                      <a href="about.html">
                        <i className="ti-angle-double-right mr-2"></i>
                        {s.seccion}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="footer-widget">
              <h4 className="mb-4 text-white letter-spacing text-uppercase">
                Home location
              </h4>
              <p>Chile, Región de la Araucanía, Pucón </p>
              <span className="text-white">+56932082293</span>
              <span className="text-white">info@demolink.org</span>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5 px-3 bg-black mx-1">
          <div className="col-lg-4">
            <p className="text-white mt-3">
              Gymfit © 2019 , Theme By{" "}
              <a href="https://themefisher.com/" className="text-color">
                Themefisher.com
              </a>
            </p>
          </div>
          <div className="col-lg-6 ml-auto text-right">
            <ul className="list-inline mb-0 footer-socials">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/themefisher">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/themefisher">
                  <i className="ti-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/themefisher/">
                  <i className="ti-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
