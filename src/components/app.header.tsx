import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  function AppHeader()  {
  return (
      <Navbar expand="lg" variant={"dark"} bg={"dark"}>
        <Container>
          <Navbar.Brand href="#home">Computer Repair</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Đặt lịch hẹn</Nav.Link>
              <Nav.Link href="#services">Các dịch vụ</Nav.Link>
              <Nav.Link href="#repair_condition">Tình trạng sửa chữa</Nav.Link>
              <Nav.Link href="#payments">Thanh toán</Nav.Link>
              <Nav.Link href="#schedule">Tra cứu lịch hẹn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default AppHeader;