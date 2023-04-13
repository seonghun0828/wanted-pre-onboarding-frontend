import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp.tsx';
import SignIn from './pages/SignIn.tsx';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'https://www.pre-onboarding-selection-task.shop';
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
