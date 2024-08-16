'use client';
import { useEffect, useState } from "react";
import CarCard, { IcarCard } from "../components/CarCard";

const Gallery = () => {
  const [carros, setCarros] = useState<IcarCard[]>([]);

  useEffect(() => {
    const ferrari: IcarCard = { src: "", title: "Ferrari", description: "Ferrari lorem lorem lorem lorem" };
    const bentley: IcarCard = {src: "", title: "bentley", description: "lorem lorem lorem lorem"};

    setCarros((prevstate) => [ferrari, bentley])
  },[]);

  const styles = {
    mainSection: `
      flex 
      gap-4
      px-12
      pt-8
      justify-center
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
