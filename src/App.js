import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='allApp'>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
        </div>

        <body>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/serviceManagement' element />
            <Route path='/calendarManagement' element />
            <Route path='/statusUpdate' element />
            <Route path='/transactionManagement' element />
          </Routes>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
