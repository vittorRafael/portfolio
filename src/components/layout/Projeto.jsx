import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Projeto = ({ projeto }) => {
  return (
    <article className="col-span-1 row-span-2 relative">
      <img
        src={projeto.imgs[0]}
        alt="Projeto Costs"
        className="w-full h-full object-cover"
      />
      <NavLink
        to={`/projeto/${projeto.id}`}
        className="absolute top-0 left-0 w-full h-full bg-cyan-800 bg-opacity-70 flex flex-col items-center justify-center px-5 opacity-0 hover:opacity-100 transition-all duration-500 hover:text-3xl"
      >
        <h2 className="font-bold text-slate-100">{projeto.nome}</h2>
        <span className="text-white text-lg">Clique para mais informações</span>
      </NavLink>
    </article>
  );
};

export default Projeto;
