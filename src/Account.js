import { Row, Col } from "react-bootstrap";
import Register from "./LoginRegisterForm";
export default function Account() {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Register title={"Register"} />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Register title={"Login"} />
      </Col>
    </Row>
  );
}
