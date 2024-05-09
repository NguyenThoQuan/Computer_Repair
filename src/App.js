import './App.css';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
      </div>

      <body>
        <Routes>
          <Route path='/' element />
          <Route path='/serviceManagement' element />
          <Route path='/calendarManagement' element />
          <Route path='/statusUpdate' element />
          <Route path='/transactionManagement' element />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
