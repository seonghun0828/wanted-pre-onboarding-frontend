import axios from 'axios';
import Router from './routes/Router.tsx';

function App() {
  axios.defaults.baseURL = 'https://www.pre-onboarding-selection-task.shop';
  return <Router />;
}

export default App;
