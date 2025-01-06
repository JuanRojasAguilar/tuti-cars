import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Porsche from "/public/images/porsche-phone.jpg";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  const Styles = {
    asidePhoto: `
      hiddden
      sm:block
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
      text-4xl
      sm:text-8xl
      mb-4
    `,
    list: `
      text-lg
    `,
    listTitle: `
      text-6xl
    `,
    listItem: `
      text-2xl
      hover:underline
      underline-offset-4
    `,
  };
  return (
    <section className="flex flex-col sm:flex-row sm:w-full pt-[100px]">
      <div className={Styles.container}>
        <h1 className={Styles.pageTitle}>Contactanos!</h1>
        <figure>
          <figcaption className={Styles.listTitle}>Tuti Gutierrez</figcaption>

          <ul className={Styles.list}>
            {/* <li>correo@mail.com</li> */}
            <li className={Styles.listItem}>
              <Link
                href=""
                target="_blank"
              >
                <InstagramIcon /> Instagram
              </Link>
            </li>
            <li className={Styles.listItem}>
              <Link
                href=""
                target="_blank"
              >
                <YouTubeIcon /> Youtube
              </Link>
            </li>
          </ul>
        </figure>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          className={Styles.asidePhoto}
          src={Porsche}
          alt="Porsche photo"
        />
      </div>
    </section>
  );
};

export default Contact;
