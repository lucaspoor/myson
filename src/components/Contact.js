import forms from "../data/forms.json";
import { FormContacto } from "./form.tsx";
import { HashLink as Link } from "react-router-hash-link";

export function Contact() {
  return (
    <section
      className="section textimonial position-relative bg-3 "
      id="linkContacto"
    >
      <div className="content  ">
        <div className="main  pt-1 row   ">
          <div className="col-xs-4 col-lg-7 col-md-5 col-xl-7 d-block mb-5 ">
            <div className="col-lg-7 col-sm-12  mx-auto parcheresponsivo  ">
              <div className="pl-3 mt-5 ">
                <h1 className="mt-1 mb-3 text-white">
                  <span>Contacta </span> ahora
                  <br />y Potencia <span>tu negocio</span>
                </h1>

                <p className="mb-4  text-white col-xl-12 pl-0">
                  {forms.subTitulo}
                </p>

                <Link smooth to="#linkContacto" className="btn btn-main">
                  {forms.boton}
                  <i className="ti-angle-right ml-3"></i>
                </Link>
                <i className="fa fa-angle-right ml-2 text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-xs-11 col-md-5 col-sm-10 col-lg-5 col-xl-4 d-block  mt-5  ">
            <div className="card row p-2">
              <div className="card-header">
                <h4 className="mr-auto mb-0 ml-3 pr-3 touppe text-uppercase">
                  {forms.formTitle}
                </h4>
              </div>
              <div className="card-body">
                <FormContacto></FormContacto>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
