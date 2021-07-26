import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
                
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

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

export default Signup;
