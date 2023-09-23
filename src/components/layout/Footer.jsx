/* eslint-disable react/prop-types */

const Footer = ({ user }) => {
  return (
    <footer className="bg-slate-200 px-4 py-8 flex justify-center items-center">
      <h2>&copy; {user.name}</h2>
    </footer>
  );
};

export default Footer;
