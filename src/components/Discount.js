export function Discount() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="text-center">
              <span className="h6 letter-spacing text-white">
                Impulsa tu empresa
              </span>
              <h2 className="text-lg mt-4 mb-5 text-white">
                Recibe más información de{" "}
                <span className="text-color">Descuentos </span>que tenemos
              </h2>
              <div>
                <input
                  name="user_email"
                  type="text"
                  className="form-control mb-4"
                  placeholder="Correo electronico"
                />
                <a href="pricing.html" className="btn btn-main text-white">
                  Enviar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
