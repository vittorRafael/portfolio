/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import NavLinkLocal from '../partials/NavLinkLocal';
const Header = ({ user }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false); // initiate isNavOpen state with false

  function handleClick() {
    setIsNavOpen(false);
  }

  return (
    <header className=" border-b border-sky-400 py-8 col-span-full">
      <div className="flex items-center justify-between px-4 max-w-7xl xl:mx-auto">
        <NavLink to="/">
          <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
        </NavLink>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-sky-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-sky-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-sky-600"></span>
            </div>
            <div
              className={`transition-all duration-500 ${
                isNavOpen ? styles.showMenuNav : styles.hideMenuNav
              }`}
            >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-sky-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center gap-10 min-h-[250px] mt-20">
                <li className="uppercase">
                  <NavLinkLocal
                    path="/"
                    text="Projetos"
                    classes="text-xl hover:text-2xl"
                    handleClick={handleClick}
                  />
                </li>
                <li className="uppercase">
                  <NavLinkLocal
                    path="/sobre"
                    text="Sobre"
                    classes="text-xl hover:text-2xl"
                    handleClick={handleClick}
                  />
                </li>
                <li className="uppercase">
                  <NavLinkLocal
                    path="/contato"
                    text="Contato"
                    classes="text-xl hover:text-2xl"
                    handleClick={handleClick}
                  />
                </li>
              </ul>
              <div className="border-t-2 border-sky-900 px-8 py-5 flex justify-evenly items-center w-full">
                <a href={user.html_url}>
                  <FaGithub
                    size={35}
                    className="text-sky-950 hover:text-sky-800 transition-all duration-300"
                  />
                </a>
                <a href="https://www.linkedin.com/in/vittor-rafael-pinho-sales-295049224/">
                  <FaLinkedin
                    size={35}
                    className="text-sky-950 hover:text-sky-800 transition-all duration-300"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5585994344661&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio!">
                  <FaWhatsapp
                    size={35}
                    className="text-sky-950 hover:text-sky-800 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <NavLinkLocal path="/" text="Projetos" />
            </li>
            <li>
              <NavLinkLocal path="/sobre" text="Sobre" />
            </li>
            <li>
              <NavLinkLocal path="/contato" text="Contato" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
