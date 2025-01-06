"use client";
import Link from "next/link";
import { Dispatch, useEffect, useState } from "react";

interface INavLinks {
	setIsOpen: Dispatch<any>;
}

const NavLinks = ({ setIsOpen }: INavLinks) => {
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
					onClick={() => setIsOpen(false)}
				>
					Inicio
				</Link>
			</li>
			<li className={Styles.listItem}>
				<Link
					href="/gallery"
					className={Styles.listLink}
					onClick={() => setIsOpen(false)}
				>
					Galeria
				</Link>
			</li>
			<li className={Styles.listItem}>
				<Link
					href="/contact"
					className={Styles.listLink}
					onClick={() => setIsOpen(false)}
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
	};

	return (
		<div className="absolute sm:relative h-fit z-10 w-full">
			<div className="select-none h-[100px] hidden sm:flex bg-gray-600">
				<NavLinks setIsOpen={setIsOpen} />
			</div>
			<div className="sm:hidden fixed w-full bg-gray-600 flex flex-col">
				<div className="flex justify-between items-center w-full h-[72px] px-4">
					<button
						className="text-2xl"
						onClick={toggleMenu}
					>
						<div
							className={`absolute transition-all transform duration-500 ease-out ${
								isOpen
									? "rotate-[45deg] -translate-y-4"
									: "rotate-90 -translate-y-6"
							}`}
						>
							&#124;
						</div>
						<div
							className={`absolute transition-all transform duration-500 ease-out ${
								isOpen
									? "rotate-[135deg] -translate-y-[.9rem]"
									: "rotate-90 -translate-y-4"
							}`}
						>
							&#124;
						</div>
						<div
							className={`absolute transition-all transform duration-500 ease-out ${
								isOpen
									? "rotate-[45deg] -translate-y-4"
									: "rotate-90 -translate-y-2"
							}`}
						>
							&#124;
						</div>
					</button>
					<Link
						href={"/"}
						className="italic text-2xl"
					>
						Tuti-Cars
					</Link>
				</div>
				{isOpen && (
					<div className="">
						<NavLinks setIsOpen={setIsOpen} />
					</div>
				)}
			</div>
		</div>
	);
};

export default NavPrincipal;
