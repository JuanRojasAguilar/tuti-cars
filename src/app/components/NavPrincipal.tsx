"use client";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
	const Styles = {
		list: `
      w-full
      h-full
      flex
      flex-col
      sm:flex-row
    `,
		listItem: `
      w-full
      h-[120px]
      sm:h-auto
      sm:w-1/3
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
      hover:text-slate-500
    `,
	};
	return (
		<ul className={Styles.list}>
			<li className={Styles.listItem}>
				<Link
					href="/"
					className={Styles.listLink}
				>
					Inicio
				</Link>
			</li>
			<li className={Styles.listItem}>
				<Link
					href="/gallery"
					className={Styles.listLink}
				>
					Galeria
				</Link>
			</li>
			<li className={Styles.listItem}>
				<Link
					href="/contact"
					className={Styles.listLink}
				>
					Contacto
				</Link>
			</li>
		</ul>
	);
};

const NavPrincipal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

	return (
		<div className="absolute sm:relative h-fit z-10 w-full">
			<div className="select-none h-[100px] hidden sm:flex bg-gray-600">
				<NavLinks />
			</div>
			<div className="sm:hidden fixed w-full bg-gray-600 flex flex-col">
        <div className="flex justify-between items-center w-full h-[72px] px-4">
          <button onClick={toggleMenu}>X</button>
          <Link
            href={"/"}
            className="italic text-lg"
          >
            Tuti-Cars
          </Link>
        </div>
        {isOpen && (
          <div className="">
            <NavLinks />
          </div>
        )}
			</div>
		</div>
	);
};

export default NavPrincipal;
