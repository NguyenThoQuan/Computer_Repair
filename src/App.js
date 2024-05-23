import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Calendar from './Components/Calendar/Calendar';
import Payment from './Components/Payment/Payment';
import Status from './Components/Status/Status';
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
            <Route path='/statusUpdate' element={<Status />} />
            <Route path='/transactionManagement' element={<Payment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
