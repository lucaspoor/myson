import projects from "../data/projects.json";

export function Projects() {
  return (
    <>
      <section className="mt-80px section services especific">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <div className="divider mb-3"></div>
                <h2>Our Services</h2>
                <p>
                  We offer more than 35 group exercis, aerobic classNamees each
                  week.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
              {projects.map((p) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="card  border-0 rounded-top border-bottom position-relative premium ">
                      <img className="img-fluid" src={p.imagen}></img>
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
