import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import * as formik from "formik";
import * as yup from "yup";
import React from "react";
const { Formik } = formik;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Por favor ingrese el email"),
});

interface DatosEmail {
  email: string;
}

type ServerState = {
  ok: boolean;
  msg: string;
};
export function Correo() {
  const [serverState, setServerState] = useState<ServerState>();
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ ok, msg });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = (values: DatosEmail, actions: any) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/myyrdpok",
      data: values,
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Hemos recibido tu correo, te haremos llegar mas información en la brevedad!!"
        );
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(JSON.stringify(error));
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleOnSubmit}
      initialValues={{
        email: "",
      }}
    >
      {({
        isSubmitting,
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} method="POST">
          <Form className=" mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Correo electrónico"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  className="form-control "
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>

          <Button
            disabled={isSubmitting}
            variant="btn btn-main text-white"
            type="submit"
          >
            recibir información
          </Button>
          {serverState && (
            <p
              className="ml-4"
              style={{
                margin: "1em 0",
                color: serverState.ok ? "white" : "red",
              }}
            >
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
