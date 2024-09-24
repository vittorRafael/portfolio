import CostsImg from './assets/img/Costs/Costs.png';
import CostsImgDois from './assets/img/Costs/Costs2.png';
import CostsImgTres from './assets/img/Costs/Costs3.png';
import CostsImgQuatro from './assets/img/Costs/Costs4.png';
import CostsImgCinco from './assets/img/Costs/Costs5.png';
import BickraftImg from './assets/img/Bikcraft/bikcraft.png';
import BickraftImg2 from './assets/img/Bikcraft/bikcraft2.png';
import BickraftImg3 from './assets/img/Bikcraft/bikcraft3.png';
import BickraftImg4 from './assets/img/Bikcraft/bikcraft4.png';
import BickraftImg5 from './assets/img/Bikcraft/bikcraft5.png';
import BickraftImg6 from './assets/img/Bikcraft/bikcraft6.png';
import BickraftImg7 from './assets/img/Bikcraft/bikcraft7.png';
import animaisImg from './assets/img/Animais/animaisfantasticos.png';
import animaisImg1 from './assets/img/Animais/animaisfantasticos1.png';
import animaisImg2 from './assets/img/Animais/animaisfantasticos2.png';
import animaisImg3 from './assets/img/Animais/animaisfantasticos3.png';
import filmesImg from './assets/img/Filmes/salesFilmes.png';
import filmesImg1 from './assets/img/Filmes/salesFilmes1.png';
import filmesImg2 from './assets/img/Filmes/salesFilmes2.png';
import notesImg from './assets/img/Notes/notes.png';
import notesImg1 from './assets/img/Notes/notes1.png';
import notesImg2 from './assets/img/Notes/notes2.png';
import notesImg3 from './assets/img/Notes/notes3.png';
import carrosselImg from './assets/img/carrossel/img1.png';
import carrosselImg1 from './assets/img/carrossel/img2.png';
import carrosselImg2 from './assets/img/carrossel/img3.png';
import carrosselImg3 from './assets/img/carrossel/img4.png';
import carrosselImg4 from './assets/img/carrossel/img5.png';
import carrosselImg5 from './assets/img/carrossel/img6.png';
import biodermisImg from './assets/img/biodermis/biodermis1.png';
import biodermisImg1 from './assets/img/biodermis/biodermis2.png';



const projetoArray = [
    {
      id: 0,
      nome: 'Costs App',
      sobre: [
        'Nossa aplicação utiliza uma variedade de tecnologias modernas para criar um site eficiente para o cálculo de custos de projetos. As principais tecnologias incluem React, React-router, react-icons, uuid, CSS3 e JavaScript no lado do frontend, e Node.js, CORS, Express, MongoDB e Mongoose no lado do backend.',
        'A aplicação tem como objetivo simplificar o processo de gerenciamento de projetos e cálculo de custos associados a eles. Ela oferece as seguintes funcionalidades principais:',
        '1 - Gerenciamento de Projetos: Os usuários podem criar novos projetos, fornecendo detalhes como nome, orçamento e categoria do projeto. Eles também podem visualizar uma lista de projetos existentes, editar informações ou excluí-los conforme necessário.',
        '2 -Adição de Serviços: Uma vez que um projeto é criado, os usuários têm a capacidade de adicionar serviços específicos a esse projeto. Os serviços podem incluir descrições, custos e outras informações relevantes. Os custos dos serviços são somados automaticamente para calcular o custo total do projeto.',
        '3 - Acompanhamento de Custos: A aplicação fornece uma visualização clara dos custos totais do projeto, permitindo aos usuários acompanhar o progresso financeiro do projeto à medida que adicionam serviços. Isso ajuda na tomada de decisões informadas e no controle de gastos.',
        '4 - Backend Robusto: O backend da aplicação é alimentado por Node.js, Express e MongoDB com o uso do Mongoose para modelagem de dados. Isso garante um desempenho confiável, escalabilidade e segurança dos dados.',
        '5 - Comunicação entre Frontend e Backend: O uso do CORS permite a comunicação segura entre o frontend e o backend, permitindo que os dados sejam transmitidos de forma eficiente entre as duas partes da aplicação.',
        '6 - Identificadores Únicos com UUID: A tecnologia UUID é usada para garantir que cada projeto e serviço tenha um identificador único, evitando conflitos de dados.',
        '7 - Interface Atraente: O frontend é desenvolvido com React, React-router e CSS3 para criar uma interface de usuário atraente e responsiva. O uso de ícones do React-icons adiciona elementos visuais agradáveis à interface.',
        'Essa aplicação oferece uma solução completa para o gerenciamento de projetos e cálculo de custos, proporcionando aos usuários uma ferramenta poderosa para acompanhar e controlar suas finanças de projetos. Com uma combinação sólida de tecnologias no frontend e no backend, ela é capaz de fornecer uma experiência de usuário eficiente e confiável.',
      ],
      imgs: [CostsImg, CostsImgDois, CostsImgTres, CostsImgQuatro, CostsImgCinco],
      link: 'https://costs-tan-one.vercel.app/'
    },
    { 
      id: 1, 
      nome: 'Site Animais Fantasticos', 
      sobre: [
        'Nossa aplicação é um site single page (página única) que utiliza as tecnologias HTML5, CSS3 e JavaScript para criar uma experiência envolvente de exibição de animais. Esta aplicação é uma vitrine interativa que combina design atraente, animações cativantes e informações sobre diversos animais.',
        'Principais Características:',
        '1 - Layout Responsivo: O site é projetado para se adaptar perfeitamente a diferentes dispositivos e tamanhos de tela, garantindo que os usuários tenham uma experiência consistente e agradável, independentemente do dispositivo que estão usando.',
        '2 - Carrossel de Animais: Apresentamos um carrossel interativo que permite aos usuários navegar por uma variedade de animais. Os animais são exibidos em imagens de alta qualidade, com informações sobre cada um deles, como nome, espécie e habitat.',
        '3 - Animações JavaScript: Implementamos animações JavaScript para adicionar um elemento lúdico à experiência. Isso inclui transições suaves entre os animais, efeitos de paralaxe e animações de entrada e saída para tornar a navegação mais dinâmica e atrativa.',
        '4 - Destaques e Dados Interativos: Os usuários podem clicar em cada animal no carrossel para obter mais informações detalhadas, como curiosidades, hábitos alimentares e comportamentais. Esses dados são apresentados de forma interativa, tornando o aprendizado sobre os animais mais envolvente.',
        '5 - Navegação Intuitiva: A navegação é simplificada com um menu de navegação suave que permite aos usuários rolar diretamente para o animal de sua escolha ou voltar ao início do carrossel.',
        '6 - Efeito de Rolagem Suave: Implementamos um efeito de rolagem suave usando JavaScript para criar uma experiência de navegação fluida, onde os usuários podem percorrer o site de forma suave e elegante.',
        'Esta aplicação é um exemplo impressionante de como as tecnologias HTML5, CSS3 e JavaScript podem ser combinadas para criar uma experiência de usuário envolvente e interativa. É uma vitrine educacional que cativa os visitantes com informações sobre a fauna e a flora, enquanto demonstra o potencial criativo das tecnologias web modernas.',
      ], 
      imgs: [animaisImg, animaisImg1, animaisImg2, animaisImg3], 
      link: 'https://vittorrafael.github.io/animaisFantasticos/' 
    },
    { 
      id: 2, 
      nome: 'Notes App', 
      sobre: [
        'Nossa aplicação é um aplicativo de anotações que faz uso de tecnologias modernas tanto no frontend quanto no backend. No frontend, utilizamos React, React-router, react-icons, axios, CSS3 e JavaScript para criar uma interface de usuário amigável e responsiva. No backend, contamos com Node.js, Express, MongoDB e Mongoose para gerenciar o armazenamento e a lógica de negócios da aplicação.',
        'Principais Funcionalidades:',
        '1 - Cadastro de Notas: Os usuários podem criar, editar e excluir notas. Cada nota inclui um título, uma descrição e uma prioridade, permitindo que os usuários organizem suas tarefas de acordo com a importância.',
        '2 - Filtro por Prioridade: A aplicação oferece um filtro que permite aos usuários visualizar apenas as notas com uma determinada prioridade, facilitando a identificação e a conclusão das tarefas prioritárias.',
        '3 - Comunicação Frontend-Backend: O frontend faz solicitações HTTP ao backend usando a biblioteca Axios para criar, ler, atualizar e excluir notas. O Node.js e o Express fornecem as rotas e controladores necessários para gerenciar essas ações.',
        '4 - Persistência de Dados com MongoDB e Mongoose: As notas são armazenadas em um banco de dados MongoDB, e o Mongoose é utilizado para criar modelos e facilitar as operações de CRUD (criação, leitura, atualização e exclusão).',
        '5 - Estilo e Layout Atraentes: Utilizamos CSS3 para criar um design atraente e responsivo, garantindo que a aplicação seja visualmente agradável e fácil de usar.',
        '6 - Roteamento com React-router: O React-router é utilizado para gerenciar as diferentes páginas da aplicação, permitindo uma navegação suave entre a lista de notas e o formulário de edição.',
        '7 - Controle de Acesso com CORS: O CORS (Cross-Origin Resource Sharing) é configurado para garantir que apenas solicitações de origens autorizadas possam acessar o backend da aplicação, aumentando a segurança.',
        'Essa aplicação de anotações é uma demonstração sólida de como as tecnologias modernas podem ser combinadas para criar uma ferramenta útil e eficaz para gerenciamento de tarefas e anotações. Ela oferece aos usuários a capacidade de manter suas tarefas organizadas, com opções de priorização e filtragem, tornando a gestão de tarefas mais eficiente e produtiva.'

      ], 
      imgs: [notesImg, notesImg1, notesImg2, notesImg3], 
      link: 'https://notes-vittorrafael.vercel.app/' },
    { 
      id: 3, 
      nome: 'Sales Filmes App', 
      sobre: [
        'Nossa aplicação é um aplicativo React que utiliza uma variedade de tecnologias modernas, incluindo React, React-router, react-icons, CSS3 e JavaScript para o frontend. Ela se integra à API do The Movie DB para listar, pesquisar filmes e fornecer informações detalhadas, incluindo classificações.',
        'Principais Recursos e Funcionalidades:',
        '1 - Listagem de Filmes: A aplicação permite aos usuários explorar uma vasta coleção de filmes diretamente da API do The Movie DB. Os filmes são exibidos em uma interface amigável, com detalhes como título, pôster, data de lançamento e classificação média.',
        '2 - Pesquisa de Filmes: Os usuários têm a capacidade de buscar filmes específicos usando a funcionalidade de pesquisa. A pesquisa é flexível e fornece resultados relevantes, permitindo que os usuários encontrem filmes por título, atores, gênero e muito mais.',
        '3 - Detalhes do Filme: Ao clicar em um filme, os usuários podem acessar informações detalhadas, como sinopse, elenco, classificações, trailers e muito mais. Isso proporciona uma experiência informativa e envolvente para os amantes de cinema.',
        '4 - Integração de Ícones e Estilo com react-icons e CSS3: Utilizamos react-icons para adicionar ícones atraentes e funcionais em toda a aplicação. O CSS3 é usado para criar um layout atraente e responsivo que se adapta a diferentes dispositivos e tamanhos de tela.',
        '5 - React-router para Roteamento: O React-router é usado para criar uma experiência de navegação suave e intuitiva, permitindo que os usuários alternem entre a lista de filmes, os resultados de pesquisa e os detalhes do filme com facilidade.',
        '6 - Consumo de API do The Movie DB: A aplicação faz chamadas à API do The Movie DB para obter informações atualizadas sobre filmes, garantindo que os dados exibidos sejam precisos e em tempo real.',
        'Esta aplicação React é uma demonstração notável de como as tecnologias modernas podem ser aproveitadas para criar uma experiência de usuário completa e envolvente para os amantes de cinema. Ela oferece uma plataforma interativa para explorar, pesquisar e aprender mais sobre filmes, tornando a experiência de assistir a filmes ainda mais cativante e informativa.'
      ], 
      imgs: [filmesImg, filmesImg1, filmesImg2], 
      link: 'https://sales-filmes.vercel.app/' 
    },
    { 
      id: 4, 
      nome: 'Site Bikcraft', 
      sobre: [
        'Nossa aplicação é um site de venda de bicicletas que demonstra domínio completo das tecnologias HTML5, CSS3 e JavaScript no frontend. O site é totalmente responsivo, garantindo uma experiência de usuário consistente em diferentes dispositivos, como desktops, tablets e smartphones.',
        'As principais funcionalidades da aplicação incluem:',
        '1 - Catálogo de Bicicletas: Apresentamos um catálogo de bicicletas com imagens, descrições detalhadas e preços. Os usuários podem navegar pelo catálogo, visualizar informações sobre cada bicicleta e selecionar aquela que desejam comprar.',
        '2 - Formulários de Compra: Implementamos formulários intuitivos para que os usuários possam selecionar uma bicicleta, inserir informações de entrega e pagamento. Os formulários são validados com JavaScript para garantir que os dados sejam preenchidos corretamente antes da finalização da compra.',
        '3 - Compra de Seguros: Além da compra de bicicletas, oferecemos a opção de adquirir seguros para as bicicletas. Os usuários podem escolher entre diferentes planos de seguro, calcular o custo e adicioná-lo à sua compra.',
        '4 - Responsividade: Garantimos que o site seja totalmente responsivo, adaptando-se automaticamente ao tamanho da tela do dispositivo do usuário. Isso proporciona uma experiência de compra agradável em qualquer lugar e a qualquer momento.',
        '5 - Estilo e Layout Atraentes: Utilizamos CSS3 para criar um design atraente e moderno, com elementos de navegação claros, tipografia legível e imagens de alta qualidade. Isso contribui para a usabilidade e a estética do site.',
        '6 - Validação de Dados: Implementamos validações de dados em tempo real nos formulários para prevenir erros e garantir que as informações sejam inseridas de forma precisa e válida.',
        '7 - JavaScript Interativo: O uso de JavaScript enriquece a experiência do usuário com recursos como atualizações de preço em tempo real, sugestões de compra relacionadas e validação de campos de formulário.',
        'Essa aplicação de venda de bicicletas é um exemplo impressionante de como as tecnologias HTML5, CSS3 e JavaScript podem ser combinadas para criar uma experiência de usuário envolvente e funcional. Ela demonstra habilidades sólidas no desenvolvimento front-end, com foco na usabilidade, responsividade e interatividade, tornando-a uma opção atraente para entusiastas de bicicletas em busca de suas próximas aventuras sobre rodas.',
      ], 
      imgs: [BickraftImg,BickraftImg2,BickraftImg3,BickraftImg4,BickraftImg5,BickraftImg6,BickraftImg7], 
      link: 'https://vittorrafael.github.io/bikcraft/' 
    },
    { 
      id: 5, 
      nome: 'Carrossel App', 
      sobre: [
        'Nossa aplicação é um aplicativo completo de construção de carrosséis de imagens, incorporando um amplo conjunto de tecnologias modernas no frontend e no backend. No frontend, utilizamos React, React-router-dom, react-icons, axios, CSS3, Tailwind CSS, framer-motion e JavaScript para criar uma interface de usuário intuitiva e visualmente atraente. No backend, contamos com Node.js, Express, MongoDB, Firebase Admin, JSON Web Token (JWT), Bcrypt, dotenv, Multer e Mongoose para gerenciar toda a lógica de negócios e a segurança da aplicação.',
        'Funcionalidades Principais:',
        '1 - Construção de Carrosséis: Os usuários com contas de administrador têm a capacidade de criar, editar e excluir carrosséis de imagens. Cada carrossel pode conter várias imagens e ser personalizado de acordo com suas preferências.',
        '2 - Gerenciamento de Imagens: Os administradores podem adicionar ou excluir imagens em carrosséis existentes, proporcionando flexibilidade na criação de apresentações de slides visualmente atraentes.',
        '3 - Login de Usuários: A aplicação oferece autenticação de usuário, com dois tipos de contas: administrador (admin) e público (public). Os administradores têm acesso total para manipular o aplicativo, enquanto os usuários públicos têm apenas acesso de leitura aos carrosséis criados.',
        '4 - Segurança com Firebase Admin e JWT: O Firebase Admin é usado para autenticar e autorizar os administradores, garantindo a segurança dos dados e a autenticação segura. O JSON Web Token (JWT) é utilizado para gerar tokens de autenticação.',
        '5 - Criptografia de Senha com Bcrypt: As senhas dos administradores são armazenadas com segurança, usando Bcrypt para criptografá-las e protegê-las contra acesso não autorizado.',
        '6 - Envio de Imagens com Multer: A capacidade de fazer o upload de imagens é facilitada pelo Multer, que lida com o armazenamento e gerenciamento de arquivos de imagem enviados pelos administradores.',
        '7 - Persistência de Dados com MongoDB e Mongoose: Os dados sobre carrosséis, imagens e informações de usuário são armazenados no MongoDB, com o Mongoose facilitando a criação de modelos de dados e as operações CRUD.',
        '8 - Estilo Visual com Tailwind CSS: A aplicação é estilizada com o Tailwind CSS para criar uma experiência de usuário agradável e responsiva.',
        '9 - Roteamento com React-router-dom: O React-router-dom é usado para criar uma navegação suave e intuitiva entre as páginas da aplicação.', 
        'Esta aplicação completa é um exemplo impressionante de como as tecnologias podem ser combinadas para criar uma plataforma flexível e segura para a construção e compartilhamento de carrosséis de imagens. Ela atende tanto aos administradores quanto aos usuários públicos, garantindo uma experiência de usuário envolvente e segura.'
      ], 
      imgs: [carrosselImg,carrosselImg1,carrosselImg2,carrosselImg3,carrosselImg4,carrosselImg5], 
      link: 'https://carrosselfront.vercel.app/' 
    },
    { 
      id: 6, 
      nome: 'Biodermis App', 
      sobre: [
        'A aplicação Biodermis é uma plataforma backend robusta focada na compra, venda e revenda de produtos. Ela se destaca ao permitir que diferentes tipos de usuários interajam de forma segura e eficiente. A estrutura principal do sistema é dividida em três papéis: Clientes: Visualizam produtos disponíveis e realizam suas compras diretamente no aplicativo. Consultores: Adquirem produtos com a autorização de administradores (admins) para revender, obtendo lucro ao vendê-los a preços mais elevados. Admins: São responsáveis por autorizar consultores e gerenciar o fluxo de produtos e pedidos na plataforma.',
        'No backend, foram incorporadas as seguintes tecnologias para garantir o bom funcionamento e segurança da aplicação:',
        '- Node.js: Plataforma usada para gerenciar a lógica e o desempenho do servidor.',
        '- Express: Framework para rotas e middleware, facilitando a criação de APIs RESTful.',
        '- PostgreSQL: Banco de dados relacional utilizado para armazenar e gerenciar dados de produtos, usuários e pedidos.',
        '- Knex.js: Query builder usado para facilitar a interação com o banco de dados PostgreSQL.',
        '- Bcrypt: Implementado para criptografar senhas e proteger as informações dos usuários.',
        '- JWT (JSON Web Token): Utilizado para gerar e verificar tokens de autenticação de usuários.',
        '- Multer: Facilita o upload e gerenciamento de arquivos (como imagens de produtos).',
        '- Nodemailer + Nodemailer-Express-Handlebars: Ferramenta usada para enviar e-mails automáticos de confirmação de pedidos e notificações.',
        '- MercadoPago: Integração para facilitar os pagamentos e transações financeiras, simulando uma carteira digital dentro da aplicação.',
        '- Swagger: Ferramenta para documentação automatizada de APIs, tornando o processo de integração mais transparente e acessível.',
        'Funcionalidades Principais:',
        '1 - Autenticação e Validação de Dados: A aplicação implementa autenticação robusta usando JWT e bcrypt, garantindo segurança e privacidade. Validações de dados são aplicadas em todos os endpoints, com regras de negócios específicas para cada operação.',
        '2 - Regras de Negócio e Lógica por Endpoint: A lógica da aplicação define claramente como os consultores podem adquirir produtos para revenda e como os administradores controlam essas operações.',
        '3 - Integração de Pagamentos com MercadoPago: A aplicação permite que os usuários façam pagamentos diretamente pela plataforma, além de realizar saques e gerenciar pedidos de maneira segura e eficiente, atuando como uma carteira digital.',
        '4 - Segurança com JWT: O app tem uma rota que é usada para autenticar e autorizar os administradores, garantindo a segurança dos dados e a autenticação segura. O JSON Web Token (JWT) é utilizado para gerar tokens de autenticação.',
        '5 - Criptografia de Senha com Bcrypt: As senhas dos administradores são armazenadas com segurança, usando Bcrypt para criptografá-las e protegê-las contra acesso não autorizado.',
        '6 - Envio de Imagens com Multer: A capacidade de fazer o upload de imagens é facilitada pelo Multer, que lida com o armazenamento e gerenciamento de arquivos de imagem enviados pelos administradores.',
        '7 - Gerenciamento de Pedidos e Saques: Consultores podem gerenciar seus pedidos e saques diretamente no aplicativo, garantindo que seus lucros sejam contabilizados de forma clara e acessível.',
        'Essa aplicação backend foi desenvolvida para oferecer um sistema seguro, eficiente e funcional, atendendo tanto às necessidades dos consultores que desejam lucrar com a revenda quanto dos administradores que gerenciam a operação.        '
      ], 
      imgs: [biodermisImg,biodermisImg1], 
      link: 'http://85.31.61.50:3000/api-docs/' 
    },
  ]

export default projetoArray

