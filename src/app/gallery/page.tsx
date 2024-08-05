'use strict';
import CarCard from "../components/CarCard";
import { Carros } from "./carros";

import Auto from "/public/images/tutiCar1.jpg"

const Gallery = () => {
  const Styles = {
  }
  
  console.log(typeof(Auto));

  return (
    <section>
      {Carros.map((c) => {
        <CarCard src={c.src} title={c.title} description={c.description}/>
      })}
    </section>
  );
}

export default Gallery;
