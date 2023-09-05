import { useState } from 'react';
import Header from '../components/Header';
import icon from '../assets/register.png';
import Logo from '../components/Logo';
import FieldSet from '../components/FieldSet';

type IForm = {
  firstName: string,
  lastName: string,
  email: string,
  job: string,
  phone: string,
  age: number,
  date: string
};

function Register() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', job: '', phone: '', age: 0, date: '',
  });
  const [formInfo, setFormInfo] = useState<IForm[]>([]);
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const formatDate = () => {
    const date = new Date();
    const formatter = new Intl
      .DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(date);
    return formattedDate;
  };

  const updateState = () => {
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      job: formData.job,
      phone: formData.phone,
      age: formData.age,
      date: formatDate(),
    };
    setFormInfo([...formInfo, newUser]);
  };

  const isFormValid = () => {
    const errors = [];
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(formData.email);
    if (formData.firstName === '') {
      errors.push('O campo de Nome é obrigatório');
    }
    if (!validEmail || formData.email === '') {
      errors.push('E-mail em formato inválido');
    }
    if (formData.lastName === '') {
      errors.push('O campo de Sobrenome é obrigatório');
    }
    if (formData.job === '') {
      errors.push('O campo de Profissão é obrigatório');
    }
    if (formData.phone === '') {
      errors.push('O campo de Telefone é obrigatório');
    }
    if (formData.age === 0) {
      errors.push('O campo de Idade é obrigatório');
    }
    setErrorMsg(errors);
    return errors.length === 0;
  };

  const resetForm = () => {
    setFormData({ firstName: '',
      lastName: '',
      email: '',
      job: '',
      phone: '',
      age: 0,
      date: '' });
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
      <Header pageName="Registro pessoal" />
      <main className="flex flex-row justify-items-center items-center justify-around">
        <form
          className="flex flex-col justify-items-center items-center justify-center
                  m-10 bg-slate-400 rounded-lg p-4
                  border-solid border-2 border-black shadow-2xl"
          onSubmit={ (event) => handleSubmit(event) }
        >
          <Logo image={ icon } />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="firstName"
            labelText="Nome:"
            name="firstName"
            placeholder=""
            type="text"
            value={ formData.firstName }
          />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="lastName"
            labelText="Sobrenome:"
            name="lastName"
            placeholder=""
            type="text"
            value={ formData.lastName }
          />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="email"
            labelText="E-mail:"
            name="email"
            placeholder=""
            type="text"
            value={ formData.email }
          />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="job"
            labelText="Profissão:"
            name="job"
            placeholder=""
            type="text"
            value={ formData.job }
          />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="phone"
            labelText="Telefone:"
            name="phone"
            placeholder="(DDD) 9XXXX-XXXX"
            type="string"
            value={ formData.phone }
          />
          <FieldSet
            handleChange={ (event) => handleChange(event) }
            id="age"
            labelText="Idade:"
            name="age"
            placeholder=""
            type="number"
            value={ formData.age }
          />
          {
              errorMsg.length > 0 && (
                <div className="w-4/5">
                  {errorMsg.map((msg) => (
                    <p
                      className="text-sm text-red-700 bg-red-300 border-l-4
                    mb-2 border-red-700 pl-2"
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
            Registrar
          </button>
        </form>
        <section
          className="border-solid border-2 border-black p-10
        flex flex-col flex-nowrap justify-items-center items-center"
        >

          {
              formInfo && (formInfo.map((info, key) => (
                <div
                  className="p-2"
                  key={ key }
                >
                  <p>
                    Nome:
                    {info.firstName}
                  </p>
                  <p>
                    Sobrenome:
                    {info.lastName}
                  </p>
                  <p>
                    E-mail:
                    {info.email}
                  </p>
                  <p>
                    Profissão:
                    {info.job}
                  </p>
                  <p>
                    Contato:
                    {info.phone}
                  </p>
                  <p>
                    Idade:
                    {info.age}
                    {' '}
                    anos
                  </p>
                  <p>
                    Data de envio:
                    {info.date}
                  </p>
                </div>
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

export default Register;
