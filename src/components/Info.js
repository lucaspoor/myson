import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import info from "../data/info.json";

export function Info() {
  return (
    <>
      <section className="mt-80px">
        <div className="container">
          <div className="row ">
            {info.especialidades.map((d) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="card p-5 border-0 rounded-top border-bottom position-relative hover-style-1">
                    <span className="number">
                      <i class={d.icon}></i>
                    </span>
                    <h3 className="mt-3">{d.titulo}</h3>
                    <p className="mt-3 mb-4">{d.texto}</p>
                    <Link
                      smooth
                      to="#linkCorreo"
                      className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"
                    >
                      <i className="ti-minus mr-2 "></i>
                      {d.boton}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about dism">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/bg/bg-5.jpg" alt="" className="img-fluid " />
            </div>

            <div className="col-lg-6">
              <div className="pl-3 mt-5 mt-lg-0">
                <h2 className="mt-1 mb-3">
                  ¿Por qué elegirnos para{" "}
                  <span className="text-color">desarrollar el sitio web</span>{" "}
                  de tu negocio?{" "}
                </h2>

                <p className="mb-4">
                  Te ayudaremos a crear un sitio web ideal para tu negocio que
                  impulse sus ventas y su presencia digital, el cual tendra un
                  alto nivel de calidad estetico y tecnologico por valores
                  asequibles para empresas de mediano y pequeño tamaño.
                </p>

                <Link smooth to="#linkContacto" className="btn btn-main">
                  Contáctanos<i className="fa fa-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
