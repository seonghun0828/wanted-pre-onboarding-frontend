import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp.tsx';
import SignIn from './pages/SignIn.tsx';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
