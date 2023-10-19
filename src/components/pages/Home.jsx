import Projeto from '../layout/Projeto';

import projetoArray from '../../infosProjeto';

const Home = () => {
  return (
    <main className="col-span-full grid auto-rows-fr grid-cols-1 lg:grid-cols-3">
      {projetoArray.map((projeto) => (
        <Projeto projeto={projeto} key={projeto.id} />
      ))}
    </main>
  );
};

export default Home;
