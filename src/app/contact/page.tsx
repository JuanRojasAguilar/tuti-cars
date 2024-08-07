import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Porsche from "/public/images/porsche-phone.jpg";

const Contact = () => {
  const Styles = {
    asidePhoto: `
      h-full
      w-auto
      object-contain
      py-8
      rounded-xl
    `,
    container: `
      w-1/2
      pl-8
      py-6
      flex 
      flex-col 
      justify-center
    `,
    pageTitle: `
      text-6xl
      mb-4
    `,
    list: `
      text-lg
    `,
    listTitle: `
      text-3xl
    `,
    listItem: `
      hover:underline
      underline-offset-4
    `,
  };
  return (
    <section className="flex w-full h-[90vh]">
      <div className={Styles.container}>
        <h1 className={Styles.pageTitle}>Contactanos!</h1>
        <figure>
          <figcaption className={Styles.listTitle}>Juan Carlos</figcaption>

          <ul className={Styles.list}>
            {/* <li>correo@mail.com</li> */}
            <li className={Styles.listItem}>
              <Link
                href="https://www.instagram.com/juancarlosgutierrez.f?igsh=aHNmcjRyYmNsaW1s"
                target="_blank"
              >
                <InstagramIcon /> Instagram
              </Link>
            </li>
          </ul>
        </figure>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image className={Styles.asidePhoto} src={Porsche} alt="Porsche photo"/>
      </div>
    </section>
  );
};

export default Contact;
