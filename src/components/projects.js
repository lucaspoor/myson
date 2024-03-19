import projects from "../data/projects.json";

export function Projects() {
  return (
    <>
      <section
        className="mt-80px section services especific "
        id="linkProyectos"
      >
        <div className="container  ">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <div className="divider mb-3"></div>
                <h2>{projects.titulo}</h2>
                <p>{projects.subtitulo}</p>
                <div className="row mt-5">
                  {projects.infoextras.map((i) => {
                    return (
                      <ul className="list-group list-group-flush col-4 ">
                        <li className="list-group-item">
                          <i className={i.icono}></i> {i.info}
                        </li>
                        <li className="list-group-item">
                          <i className={i.icono2}></i> {i.info2}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
              {projects.infoproyectos.map((p) => {
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
                      <h3 class="card-title text-black py-2">{p.nombre}</h3>

                      <a
                        href="pricing.html"
                        className="btn btn-solid-border text-color "
                      >
                        {projects.boton}
                        <i className="ti-angle-right ml-3"></i>
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
