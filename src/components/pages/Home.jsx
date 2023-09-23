import Projeto from '../layout/Projeto';
import CostsImg from '../../assets/img/Costs/Costs.png';
import animaisImg from '../../assets/img/Animais/animaisfantasticos.png';
import notesImg from '../../assets/img/Notes/notes.png';
import filmesImg from '../../assets/img/Filmes/salesFilmes.png';
import bikcraftImg from '../../assets/img/Bikcraft/bikcraft.png';

const projetos = [
  { id: 0, src: CostsImg, nome: 'Costs App' },
  { id: 1, src: animaisImg, nome: 'Site Animais Fantasticos' },
  { id: 2, src: notesImg, nome: 'Notes App' },
  { id: 3, src: filmesImg, nome: 'Sales Filmes App' },
  { id: 4, src: bikcraftImg, nome: 'Site Bikcraft' },
];

const Home = () => {
  return (
    <main className="col-span-full grid auto-rows-fr grid-cols-1 lg:grid-cols-3">
      {projetos.map((projeto) => (
        <Projeto projeto={projeto} key={projeto.id} />
      ))}
    </main>
  );
};

export default Home;
