'use client';
import { useEffect, useState } from "react";
import CarCard, { IcarCard } from "../components/CarCard";

const Gallery = () => {
  const [carros, setCarros] = useState<IcarCard[]>([]);

  useEffect(() => {
    setCarros((prevstate) => [{ src: "", title: "Ferrari", description: "Ferrari lorem lorem lorem lorem" }, ...prevstate])
    setCarros((prevstate) => [{src: "", title: "bentley", description: "lorem lorem lorem lorem"}, ...prevstate]);
  },[]);

  const styles = {
    mainSection: `
      flex 
      gap-4
      px-12
      pt-8
    `
  }

  return (
    <section className={styles.mainSection}>
      {carros.map(car => (
        <CarCard src={car.src} title={car.title} description={car.description} key={car.title}/>
      ))}
    </section>
  );
}

export default Gallery;
