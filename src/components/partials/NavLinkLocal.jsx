/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const NavLinkLocal = ({ text, path, classes = '' }) => {
  return (
    <NavLink
      to={path}
      className={`text-lg hover:text-xl text-gray-500 hover:text-gray-600 transition-all duration-300 ${classes}`}
    >
      {text}
    </NavLink>
  );
};

export default NavLinkLocal;
