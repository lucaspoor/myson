export function Courses() {
  return (
    <section className="section course bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <div className="divider mb-3"></div>
              <h2>Popular Courses</h2>
              <p>
                We offer more than 35 group exercis, aerobic classNamees each
                week.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
              <img
                src="images/gallery/course-1.jpg"
                alt=""
                className="img-fluid"
              />

              <div className="card-body">
                <a href="course-single.html">
                  <h4 className="font-secondary mb-0">Build Body</h4>
                </a>
                <p className=" mb-2">Mentor: Jimmy Karter</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
              <img
                src="images/gallery/course-2.jpg"
                alt=""
                className="img-fluid"
              />

              <div className="card-body">
                <a href="course-single.html">
                  <h4 className="font-secondary mb-0">Build Body</h4>
                </a>
                <p className="mb-2">Mentor: Jimmy Karter</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
              <img
                src="images/gallery/course-3.jpg"
                alt=""
                className="img-fluid"
              />

              <div className="card-body">
                <a href="course-single.html">
                  <h4 className="font-secondary mb-0">Build Body</h4>
                </a>
                <p className=" mb-2">Mentor: Jimmy Karter</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
              <img
                src="images/gallery/course-2.jpg"
                alt=""
                className="img-fluid"
              />

              <div className="card-body">
                <a href="course-single.html">
                  <h4 className="font-secondary mb-0">Build Body</h4>
                </a>
                <p className=" mb-2">Mentor: Jimmy Karter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mt-5 text-center">
              <a href="course.html" className="btn btn-main">
                See all our Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
