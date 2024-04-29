import Nav from './Components/Nav/Nav';
import Menu from './Components/Menu/Menu';
import Services from './Components/Services/Services';
import AppointmentCalendar from './Components/AppointmentCalendar/AppointmentCalendar';
import RepairCondition from './Components/RepairCondition/RepairCondition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./Style/Body.scss"
import 'react-toastify/dist/ReactToastify.css';
import CalendarSearch from './Components/CalendarSearch/CalendarSearch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Menu />
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

      <div className="body">
        <div className="title-body">Phần này chưa biết xử lý như nào duma !!!</div>
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/datlichhen" element={<AppointmentCalendar />} />
            <Route path="/tracuulichhen" element={<CalendarSearch />} />
            <Route path="/tinhtrangsuachua" element={<RepairCondition />} />
            <Route path="/thanhtoan" element />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
