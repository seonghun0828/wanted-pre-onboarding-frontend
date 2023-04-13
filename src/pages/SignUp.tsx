import React, { ChangeEvent, useEffect, useState } from 'react';
import { postSignUp } from '../axios_fns/postSignUp.ts';
import { useNavigate } from 'react-router-dom';

export interface InputsType {
  email: string;
  password: string;
}

const SignUp = () => {
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    password: '',
  });

  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if (inputs.email.includes('@') && inputs.password.length >= 8) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const clickHandler = async () => {
    postSignUp(inputs).then(() => {
      window.alert('회원 가입이 완료되었습니다!');
      navigate('/signin');
    });
  };

  useEffect(() => {
    validate();
  }, [inputs]);

  return (
    <div className="flex justify-center w-full p-10">
      <div className="flex flex-col justify-center w-1/2 gap-2">
        <div className="flex justify-center">
          <h1 className="text-2xl">Sign up</h1>
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
            className={`border p-1 rounded ${
              isValidated ? 'bg-blue-300 cursor-pointer' : 'bg-slate-300'
            }`}
            disabled={!isValidated}
            onClick={clickHandler}
            data-testid="signup-button"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
