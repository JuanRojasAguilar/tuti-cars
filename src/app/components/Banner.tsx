import Image from "next/image";

import TwoCars from "/public/images/tutiCar1.jpeg";

const Banner = () => {
  const Styles = {
    contenedor: `
      select-none
      relative
      h-[40vh]
    `,
    image: `
      h-full
      w-full
      object-cover
      object-[0_-450px]
      brightness-85
    `,
    textContainer: `
      absolute
      flex 
      top-1/3
      text-white
      font-semibold
      text-8xl
      w-2/3
      mix-blend-overlay
      hover:mix-blend-normal
    `,
    title: `
      tracking-wide
      drop-shadow-2xl
      pl-4
    `
  };
  return (
    <div className={Styles.contenedor}>
      <Image
        src={TwoCars}
        alt="Photo of a Cobra and SL 300"
        className={Styles.image}
      />
      <div className={Styles.textContainer}>
        <h2 className={Styles.title}>
          La industria automotriz de Colombia a prueba
        </h2>
      </div>
    </div>
  );
};

export default Banner;
