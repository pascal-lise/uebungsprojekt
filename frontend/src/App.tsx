import './App.sass';
import Header from 'layouts/Header';
import Main from 'layouts/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
