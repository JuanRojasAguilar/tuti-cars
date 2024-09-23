import Image from "next/image";

import TwoCars from "/public/images/tutiCar1.jpeg";

const Banner = () => {
  const Styles = {
    contenedor: `
      select-none
      relative
      h-1/2
      sm:w-screen
      sm:h-[40vh]
    `,
    textContainer: `
      h-full
      w-full
      bg-[url('/images/tutiCar1.jpeg')]
      bg-no-repeat
      bg-center
      sm:bg-[0_64%]
      flex 
      items-center
      text-white
      font-semibold
      text-6xl
      sm:text-8xl
    `,
    title: `
      drop-shadow-2xl
      sm:opacity-50
      transition-opacity
      duration-200
      ease-in-out
      sm:hover:opacity-100
      w-full
      sm:w-2/3
      tracking-wide
      drop-shadow-2xl
      sm:pl-4
    `
  };
  return (
    <div className={Styles.contenedor}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.title}>
          La industria automotriz de Colombia a prueba
        </h2>
      </div>
    </div>
  );
};

export default Banner;
