import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Calendar from './Components/Calendar/Calendar';
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

        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/serviceManagement' element={<Service />} />
            <Route path='/calendarManagement' element={<Calendar />} />
            <Route path='/statusUpdate' element />
            <Route path='/transactionManagement' element />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
