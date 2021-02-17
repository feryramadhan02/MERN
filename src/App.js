import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={LandingPage} exact>Home</Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
