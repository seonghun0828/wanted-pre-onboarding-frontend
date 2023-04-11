import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp.tsx';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
