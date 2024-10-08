import Link from "next/link";

const NavPrincipal = () => {
  const Styles = {
    nav: `
      select-none
      h-[10vh]
      hidden
      sm:flex
    `,
    list: `
      w-full
      h-full
      flex 
    `,
    listItem: `
      w-1/3
      focus:outline-none
      select-none
      text-center
    `,
    listLink: `
      text-4xl
      font-normal
      flex 
      justify-center
      items-center
      h-full
      block
      transition
      duration-200
      hover:ease-in-out
      hover:bg-white
      hover:text-[#3f4a3d]
    `,
  };
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.list}>
        <li className={Styles.listItem}>
          <Link href="/" className={Styles.listLink}>
            Inicio
          </Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/gallery" className={Styles.listLink}>
            Galeria
          </Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/contact" className={Styles.listLink}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrincipal;
