/* eslint-disable react/prop-types */

const Footer = ({ user }) => {
  return (
    <footer className="bg-slate-200 px-4 py-8 col-span-full">
      <h2>{user.name}</h2>
    </footer>
  );
};

export default Footer;
