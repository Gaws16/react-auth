import { Container, Col, Row, Button } from "react-bootstrap";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Account from "./Account";

export default function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section
            id="navigation"
            className={"d-flex justify-content-center gap-10 "}
          >
            <Button>
              <a
                className="link-light link-offset-2 link-underline link-underline-opacity-0"
                href="/"
              >
                Home
              </a>
            </Button>
            <Button>
              <a
                className="link-light link-offset-2 link-underline link-underline-opacity-0"
                href="/free"
              >
                Free Component
              </a>
            </Button>
            <Button>
              <a
                className="link-light link-offset-2 link-underline link-underline-opacity-0"
                href="/auth"
              >
                Auth Component
              </a>
            </Button>
          </section>
        </Col>
      </Row>

      <Routes>
        <Route exact path="/" element={<Account />} />
        <Route exact path="/free" element={<FreeComponent />} />
        <Route>
          <Route element={<ProtectedRoutes />} />
          <Route exact path="/auth" element={<AuthComponent />} />
        </Route>
      </Routes>
    </Container>
  );
}
