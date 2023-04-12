import React from 'react';

const SignIn = () => {
  return (
    <div className="flex justify-center w-full p-10">
      <div className="flex flex-col justify-center w-1/2">
        <div className="flex justify-center">
          <h1 className="text-2xl">Sign in</h1>
        </div>
        <div className="flex justify-center">
          <label htmlFor="email">email</label>
          <input
            className="border"
            type="email"
            id="email"
            data-testid="email-input"
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="password">password</label>
          <input
            className="border"
            type="password"
            id="password"
            data-testid="password-input"
          />
        </div>
        <div className="flex justify-center">
          <button className="border" data-testid="signin-button">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
