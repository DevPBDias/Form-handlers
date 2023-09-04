import { useState } from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import logo from '../assets/loginPwd.png';

type IForm = {
  login: string,
  password: string
};

function LoginPassword() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formInfo, setFormInfo] = useState<IForm[]>([]);
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  const resetForm = () => {
    setFormData({ email: '', password: '' });
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const updateState = () => {
    const newLogin = {
      login: formData.email,
      password: formData.password,
    };
    setFormInfo([...formInfo, newLogin]);
  };

  const isFormValid = () => {
    const errors = [];
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(formData.email);
    if (formData.email === '') {
      errors.push('O campo de Login é obrigatório');
    }
    if (!validEmail) {
      errors.push('E-mail em formato inválido');
    }
    if (formData.password === '') {
      errors.push('O campo de Senha é obrigatório');
    }
    setErrorMsg(errors);
    return errors.length === 0;
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid()) {
      updateState();
      resetForm();
      setErrorMsg([]);
    }
  }

  function handleClick() {
    setFormInfo([]);
  }

  return (
    <div className="h-screen flex flex-col">
      <Header pageName="Login e Senha" />
      <main className="flex flex-row justify-items-center items-center justify-around">
        <form
          className="flex flex-col justify-items-center items-center justify-center
          m-10 bg-slate-400 h-4/5 rounded-lg p-4 w-96
          border-solid border-2 border-black shadow-2xl"
          onSubmit={ (event) => handleSubmit(event) }
        >
          <Logo image={ logo } />
          <fieldset
            className="p-4 flex flex-col flex-nowrap justify-items-center items-center
             w-full"
          >
            <label htmlFor="userName" className="text-left w-full">
              Digite seu e-mail:
            </label>
            <input
              type="text"
              name="email"
              value={ formData.email }
              id="userName"
              className="p-2 bg-white placeholder:italic rounded-lg w-full mt-2"
              placeholder="Login"
              onChange={ handleChange }
            />
          </fieldset>
          <fieldset
            className="p-4 flex flex-col flex-nowrap justify-items-center items-center
            w-full"
          >
            <label htmlFor="userPwd" className="text-left w-full">
              Digite sua senha:
            </label>
            <input
              type="password"
              name="password"
              value={ formData.password }
              id="userPwd"
              className="p-2 bg-white placeholder:italic rounded-lg w-full mt-2"
              placeholder="Senha"
              onChange={ handleChange }
            />
          </fieldset>
          {
              errorMsg.length > 0 && (
                <div>
                  {errorMsg.map((msg) => (
                    <p
                      className="text-sm text-red-700 bg-red-300 border-l-4
                    mb-2 border-red-700 w-80 pl-2"
                      key={ msg }
                    >
                      {msg}
                    </p>))}
                </div>)
        }
          <button
            type="submit"
            className="p-2 rounded-lg w-40 bg-slate-700 text-white m-4 shadow-xl
          font-bold hover:bg-yellow-700 hover:text-blue-950"
          >
            Logar
          </button>
        </form>
        <section
          className="border-solid border-2 border-black p-10
        flex flex-col flex-nowrap justify-items-center items-center"
        >
          {
                formInfo && (formInfo.map((info, key) => (
                  <p
                    className="p-2"
                    key={ key }
                  >
                    Email:
                    {' '}
                    {info.login}
                    {' '}
                    Senha:
                    {' '}
                    {info.password}
                  </p>
                )))
            }
          <button
            type="button"
            onClick={ handleClick }
            className="p-2 rounded-lg w-40 bg-slate-700 text-white mt-4 shadow-xl
            font-bold hover:bg-yellow-700 hover:text-blue-950"
          >
            Apagar logins
          </button>
        </section>
      </main>
    </div>
  );
}

export default LoginPassword;
