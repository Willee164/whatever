import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                controlId="formBasicEmail"
                label="Email"
                placeholder="We'll never share your email with anyone else."
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                controlId="formBasicPassword"
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;