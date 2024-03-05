import { Hero } from "./Hero";
import { Info } from "./Info";
import { Discount } from "./Discount";
import { Services } from "./Services";
import { Gallery } from "./Gallery";
import { Testimonials } from "./Testimonials";
import { Courses } from "./Courses";
import { Projects } from "./projects";

export function Main() {
  return (
    <>
      <Hero />
      <Info />
      <Discount></Discount>
      <Projects></Projects>
      <Services></Services>

      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Courses></Courses>
    </>
  );
}
