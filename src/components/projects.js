import projects from "../data/projects.json";

export function Projects() {
  return (
    <>
      <section className="mt-80px section services especific ">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <div className="divider mb-3"></div>
                <h2>Proyectos recientes</h2>
                <p>
                  We offer more than 35 group exercis, aerobic classNamees each
                  week.We offer more than 35 group exercis, aerobic classNamees
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
              {projects.map((p) => {
                return (
                  <div className="col-lg-6 col-md-6 col-sm-4 py-3  ">
                    <div className="card border-0 rounded shadow-sm premium   ">
                      <img
                        className="img-fluid rounded shadow w-100 imagenanimacion "
                        src={p.imagen}
                      ></img>
                    </div>
                    <div className="text-center  px-4 py-4 ">
                      <span className="badge rounded-pill btn-solid-border tipo ">
                        {p.tipo}
                      </span>
                      <h3 class="card-title text-color">{p.nombre}</h3>

                      <a
                        href="pricing.html"
                        className="btn btn-solid-border text-black"
                      >
                        Cotizanos<i className="ti-angle-right ml-3"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
