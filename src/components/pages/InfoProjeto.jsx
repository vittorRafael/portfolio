/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useParams } from 'react-router-dom';
import projetoArray from '../../infosProjeto';

const InfoProjeto = () => {
  const [projeto, setProjeto] = React.useState({});
  const location = useParams();
  React.useEffect(() => {
    const respProjeto = projetoArray.filter(
      (item) => Number.parseInt(location.id) == item.id,
    );
    setProjeto(respProjeto[0]);
  }, [location.id]);

  React.useState(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <main className="col-span-full">
      <div className="px-10 py-14 lg:max-w-limitText lg:mx-auto flex flex-col gap-5">
        {projeto.nome && (
          <h2 className="font-bold text-3xl flex flex-col sm:flex-row justify-between gap-10 items-start sm:items-end">
            {projeto.nome}{' '}
            <a
              href={projeto.link}
              className="text-lg text-sky-700 transition-all duration-500 font-semibold hover:text-xl"
              target="_blank"
            >
              Acessar App -&gt;
            </a>
          </h2>
        )}
        {projeto.sobre &&
          projeto.sobre.map((item, index) => (
            <p className="text-gray-400 font-medium" key={index}>
              {item}
            </p>
          ))}
      </div>
      {projeto.imgs &&
        projeto.imgs.map((item, index) => (
          <img
            className="w-full object-cover"
            src={item}
            alt={`Imagem ${index} do Projeto`}
            key={index}
          />
        ))}
    </main>
  );
};

export default InfoProjeto;
