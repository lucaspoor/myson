import data from "../data/data.json";

export function Info() {
  return (
    <>
      <section className="mt-80px">
        <div className="container">
          <div className="row ">
            {data.map((d) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="card p-5 border-0 rounded-top border-bottom position-relative hover-style-1">
                    <span className="number">
                      <i class={d.icon}></i>
                    </span>
                    <h3 className="mt-3">{d.titulo}</h3>
                    <p className="mt-3 mb-4">{d.texto}</p>
                    <a
                      href="about.html"
                      className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"
                    >
                      <i className="ti-minus mr-2 "></i>
                      {d.boton}
                    </a>
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
                  ¿Por qué elegirnos <br />
                  como <span className="text-color">
                    agencia de marketing
                  </span>{" "}
                  en Chile?{" "}
                </h2>

                <p className="mb-4">
                  Te ayudaremos a crear las mejores experiencias y a entregar un
                  mensaje que esté en sintonía con tus usuarios a través de
                  nuestras soluciones de diseño, marketing, contenido y comercio
                  electrónico.
                </p>

                <a href="#" className="btn btn-main">
                  Learn More<i className="fa fa-angle-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
