import Image, { StaticImageData } from "next/image";

interface IcarCard {
  src: StaticImageData,
  title: string,
  description: string
}

const CarCard = (car: IcarCard)  => {
  const Styles = {
    card: `
      flex 
      flex-col
      text-white
      bg-indigo-500
      w-[340px]
    `,
    textContainer: `
      p-4
      
    `,
    button: `
      self-center
      border
      border-white
      w-40
      h-8
      mb-4
      transition
      duration-200
      hover:ease-in-out
      hover:bg-white
      hover:text-indigo-500
    `,
  }
  return (
      <div className={Styles.card}>
        <Image src={car.src} alt={car.title} width={400} height={400} />
        <div className={Styles.textContainer}>
          <h3>{car.title}</h3>
          <p>{car.description}</p>
        </div>
        <button className={Styles.button}>Find out more</button>
      </div>
  )
}

export default CarCard;
export type { IcarCard };
