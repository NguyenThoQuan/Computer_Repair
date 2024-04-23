import Nav from './Components/Nav/Nav';
import Menu from './Components/Menu/Menu';
import Services from './Components/Services/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Style/Body.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Menu />
        </header>
      </div>

      <div className="body">
        <div className="title-body">Phần này chưa biết xử lý như nào duma !!!</div>
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/datlichhen" element />
            <Route path="/tracuulichhen" element />
            <Route path="/tinhtrangsuachua" element />
            <Route path="/thanhtoan" element />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
