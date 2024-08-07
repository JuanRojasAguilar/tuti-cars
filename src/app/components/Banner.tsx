import Image from "next/image";

import TwoCars from "/public/images/twoCars.jpg";

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
      object-[0_-200px]
    `,
    textContainer: `
      absolute
      flex 
      top-1/3
      text-white
      font-semibold
      w-2/3
      text-6xl
    `,
  };
  return (
    <div className={Styles.contenedor}>
      <Image
        src={TwoCars}
        alt="Photo of a Cobra and SL 300"
        className={Styles.image}
      />
      <div className={Styles.textContainer}>
        <h2 className="drop-shadow-lg">
          La industria automotriz de Colombia a prueba
        </h2>
      </div>
    </div>
  );
};

export default Banner;
