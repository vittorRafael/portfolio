import React from 'react';
import emailJs from '@emailjs/browser';

const Contato = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [alert, setAlert] = React.useState(null);

  async function sendMail(e) {
    e.preventDefault();
    if (nome === '' || email === '' || msg === '') {
      setAlert({ error: true, text: 'Preencha todos os campos' });
      setTimeout(() => {
        setAlert(null);
      }, 4000);
      return;
    }

    const templateParams = {
      from_name: nome,
      message: msg,
      email,
    };

    try {
      const resp = await emailJs.send(
        'service_kavqfsw',
        'template_55zjvnz',
        templateParams,
        'F--jPYPjTH61MvbJK',
      );
      console.log(resp);
      setAlert({ error: false, text: 'Email enviado com sucesso!' });
    } catch (err) {
      console.log(err);
    }
    setNome('');
    setEmail('');
    setMsg('');
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  return (
    <main className="col-span-full">
      <div className="px-10 py-14 lg:max-w-limitText lg:mx-auto flex flex-col gap-10">
        <h2 className="font-bold text-3xl flex flex-col sm:flex-row justify-between gap-10 items-start sm:items-end">
          Contato
        </h2>
        <p className="text-gray-400 font-medium">
          Sinta-se à vontade para entrar em contato comigo das seguintes formas:
        </p>

        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            Email:{' '}
            <a
              href="mailto:rafaelsales202205@gmail.com"
              className="text-sky-700 underline"
            >
              rafaelsales202205@gmail.com
            </a>
          </li>
          <li>
            Whatsapp:{' '}
            <a
              className="text-sky-700 underline"
              href="https://api.whatsapp.com/send?phone=5585994344661&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio,%20podemos%20conversar?"
              target="_blank"
              rel="noreferrer"
            >
              (85) 9 9434-4661
            </a>
          </li>
          <li>
            Linkedin:{' '}
            <a
              className="text-sky-700 underline"
              href="https://www.linkedin.com/in/vittor-rafael-pinho-sales-295049224/"
              target="_blank"
              rel="noreferrer"
            >
              Meu Linkedin
            </a>
          </li>
        </ul>
        <p className="text-gray-400 font-medium">
          Ou use o formulário abaixo para me enviar um e-mail!
        </p>
        {alert && (
          <p
            className={`${
              alert.error
                ? 'border-red-900 bg-red-400 text-red-900'
                : 'border-green-900 bg-green-400 text-green-900'
            } border-2 rounded-md font-bold text-center p-4`}
          >
            {alert.text}
          </p>
        )}
        <form
          className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-2"
          onSubmit={sendMail}
        >
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              className="border-2 border-slate-600 rounded-lg px-4 py-2"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-slate-600 rounded-lg px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              name="mensagem"
              id="mensagem"
              className="border-2 border-slate-600 rounded-lg px-4 py-2"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </div>
          <button className="bg-sky-700 hover:bg-sky-800 w-fit px-8 py-3 text-white mx-auto rounded-md">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contato;
