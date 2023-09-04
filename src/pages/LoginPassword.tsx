import { useState } from 'react';
import Header from '../components/Header';

function LoginPassword() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Header pageName="Login e Senha" />
      <form>
        <fieldset>
          <label htmlFor="userName">
            <input
              type="text"
              name={ name }
              id="userName"
              className=""
              onChange={ ({ target }) => setName(target.value) }
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="userPwd">
            <input
              type="password"
              name={ password }
              id="userPwd"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPassword;
