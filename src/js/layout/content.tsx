// import components
import * as React from "react";
import { Container, Row, Col, Button, FormControl, InputGroup } from "react-bootstrap";

export class Content extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2}}>
            <InputGroup className="mb-3 mt-3" size="lg">
              <FormControl placeholder="input words"></FormControl>
              <InputGroup.Append>
                <Button variant="secondary"><i className="fas fa-search"></i></Button>
              </InputGroup.Append>
            </InputGroup>
            <h1>Hello React!</h1>
            <button className="btn btn-primary mr-2">primary</button>
            <button className="btn btn-secondary mr-2">secondary</button>
            <button className="btn btn-success mr-2">success</button>
            <button className="btn btn-info mr-2">info</button>
            <button className="btn btn-warning mr-2">warn</button>
            <button className="btn btn-danger mr-2">danger</button>
            <button className="btn btn-accent mr-2">accent</button>
          </Col>
        </Row>
      </Container>
    );
  }
}
