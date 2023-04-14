import React, { ChangeEvent, useState } from 'react';
import { InputsType } from './SignUp';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../axios_fns/postSignIn.ts';

const SignIn = () => {
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const clickHandler = () => {
    postSignIn(inputs).then(() => {
      window.alert('로그인에 성공했습니다!');
      navigate('/todo');
    });
  };
  return (
    <div className="flex justify-center w-full p-10">
      <div className="flex flex-col justify-center w-1/2 gap-2">
        <div className="flex justify-center">
          <h1 className="text-2xl">Sign in</h1>
        </div>
        <div className="flex justify-center gap-2">
          <label htmlFor="email">email</label>
          <input
            className="border"
            type="email"
            id="email"
            value={inputs.email}
            onChange={(e) => changeHandler(e)}
            data-testid="email-input"
          />
        </div>
        <div className="flex justify-center gap-2">
          <label htmlFor="password">password</label>
          <input
            className="border"
            type="password"
            id="password"
            value={inputs.password}
            onChange={(e) => changeHandler(e)}
            data-testid="password-input"
          />
        </div>
        <div className="flex justify-center">
          <button
            className={'border p-1 rounded bg-blue-300 cursor-pointer'}
            onClick={clickHandler}
            data-testid="signin-button"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
