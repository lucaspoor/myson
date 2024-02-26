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
                    <span className="number">{d.numero}</span>
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

      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="images/bg/bg-5.jpg"
                alt=""
                className="img-fluid rounded shadow w-100"
              />
            </div>

            <div className="col-lg-6">
              <div className="pl-3 mt-5 mt-lg-0">
                <h2 className="mt-1 mb-3">
                  We’ve skill in <br />
                  wide <span className="text-color">range of fitness</span> and
                  Other body health facility.{" "}
                </h2>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  Theme natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aliquam lorem ante, dapibus in.
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
