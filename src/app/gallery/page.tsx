"use client";
import { useEffect, useState } from "react";
import CarCard, { IcarCard } from "../components/CarCard";

const Gallery = () => {
  const [carros, setCarros] = useState<IcarCard[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setCarros(() => [
      {
        src: "https://www.gullwingmotorcars.com/galleria_images/4759/4759_main_l.jpg",
        title: "Mercedes-benz Sl 300",
        description: `Réplica a escala del icónico Mercedes-Benz 300 SL. Este modelo de juguete destaca por su diseño clásico, inspirado en el famoso "Alas de Gaviota". Con acabados de alta calidad, detalles fieles al original y ruedas que giran, es ideal para coleccionistas o entusiastas del automovilismo.`,
      },
      {
        src: "https://cdn.motor1.com/images/mgl/xqo2PG/s1/1958-bmw-507-roadster-series-ii1297783.jpg",
        title: "BMW 507",
        description: `Réplica a escala del legendario BMW 507, "El Auto de Elvis". Este elegante deportivo clásico destaca por su diseño icónico de los años 50, con acabados detallados y un estilo que captura la esencia del original. Ideal para coleccionistas y fanáticos del Rey del Rock.`,
      }
    ]);
    setHasLoaded(true);
  }, []);

  const styles = {
    mainSection: `
      flex 
      gap-4
      px-12
      pt-8
    `,
  };

  return (
    <>

      {hasLoaded && (
        <section className={styles.mainSection}>
          {carros.map((car) => (
            <CarCard
              src={car.src}
              title={car.title}
              description={car.description}
              key={car.title}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Gallery;
