import Image, { StaticImageData } from "next/image";

interface IcarCard {
  src: StaticImageData | string,
  title: string,
  description: string
}

const CarCard = ({ src, title, description }: IcarCard) => {
  const Styles = {
    card: `
      flex 
      flex-col
      text-white
      bg-slate-500
      w-[340px]
      rounded-lg
      bg-gradient-to-b 
      from-slate-500
      to-black
    `,
    textContainer: `
      h-full
      flex 
      flex-col
      text-xl
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
      <Image src={src} alt={title} width={340} height={340} className="rounded-t-lg" />
      <div className={Styles.textContainer}>
        <h3>{title}</h3>
        <p className="align-self-end">{description}</p>
      </div>
      {/* <button className={Styles.button}>Find out more</button> */}
      </div>
  )
}

export default CarCard;
export type { IcarCard };
