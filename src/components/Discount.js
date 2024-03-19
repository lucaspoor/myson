import { Correo } from "./correo.tsx";

export function Discount() {
  return (
    <section id="linkCorreo" className="section cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="text-center">
              <span className="h6 letter-spacing text-white">
                conoce nuestra oferta
              </span>
              <h2 className="text-lg mt-4 mb-5 text-white">
                Recibe más{" "}
                <span className="text-color">información a tu correo </span> de
                nuestro servicio
              </h2>

              <Correo></Correo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
