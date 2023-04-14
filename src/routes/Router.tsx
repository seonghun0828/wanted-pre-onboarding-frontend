import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp.tsx';
import SignIn from '../pages/SignIn.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import Todo from '../pages/Todo.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
