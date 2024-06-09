import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Calendar from './Components/Calendar/Calendar';
import Payment from './Components/Payment/Payment';
import Status from './Components/Status/Status';
import Account from './Components/Login&Signup/Account';
import PrivateRoutes from './Utils/PrivateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className='allApp'>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>

        <div className='body'>

          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/serviceManagement' element={<Service />} />
              <Route path='/calendarManagement' element={<Calendar />} />
              <Route path='/statusUpdate' element={<Status />} />
              <Route path='/transactionManagement' element={<Payment />} />
            </Route>
            <Route path='/login' element={<Account />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
