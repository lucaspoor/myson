import { HashLink as Link } from "react-router-hash-link";

export function Hero() {
  return (
    <section className="slider" id="linkInicio">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <span className="h6 d-inline-block mb-4 subhead text-uppercase">
              Desarrollo web
            </span>
            <h1 className="text-uppercase text-white mb-5">
              digitaliza tu
              <span className="text-color"> negocio y aumenta </span> tus ventas
            </h1>
            <Link smooth to="#linkContacto" className="btn btn-main ">
              únetenos <i className="ti-angle-right ml-3"></i>
            </Link>{" "}
          </div>
        </div>
        <div id="linkServicios"></div>
      </div>
    </section>
  );
}
