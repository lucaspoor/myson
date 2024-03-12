import forms from "../data/forms.json";

export function Testimonials() {
  return (
    <section className="section textimonial position-relative bg-3">
      <div className="content ">
        <div className="main p-3 pt-4 row ">
          <div className="col-xs-4 col-lg-5 col-xl-8 d-block m-4 justify-content-center ">
            <div className="col-lg-8 m-4 ">
              <div className="pl-3 mt-5 mt-lg-0">
                <h2 className="mt-1 mb-3 text-white">
                  ¿Por qué elegirnos <br />
                  como <span className="text-color">
                    agencia de marketing
                  </span>{" "}
                  en Chile?{" "}
                </h2>

                <p className="mb-4  text-white">
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

          <div className="col-xs-4 col-lg-5 col-xl-3 d-block m-4 mt-xl-12  ">
            <div className="card row">
              <div className="card-header">
                <h4 className="mr-auto mb-0 pr-3">Settings</h4>
              </div>
              <div className="card-body">
                <form>
                  {forms.map((f) => {
                    return (
                      <div className="form-row">
                        <div className="form-group col-md-12 ">
                          <label className="col-form-label" for="Name">
                            {f.title}
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    );
                  })}

                  <button type="submit" className="btn btn-main">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
