import { Hero } from "./Hero";
import { Info } from "./Info";
import { Discount } from "./Discount";
import { Services } from "./Services";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";
import { Courses } from "./Courses";
import { Projects } from "./projects";
import { FormContacto } from "./form.tsx";

export function Main() {
  return (
    <>
      <Hero />
      <Info />
      <Discount></Discount>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
