// import components
import * as React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">ミリコメ</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" activeKey="/#home">
            <Nav.Item>
              <Nav.Link href="/#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="設定" id="nav-config">
                <NavDropdown.Item href="#clear"><i className="fas fa-eraser mr-2"></i>検索履歴クリア</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#help"><i className="fas fa-question-circle mr-2"></i></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
