import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function LoginRegisterForm({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  let responseText = "";
  let endPoint = "";
  let location = "";
  if (title === "Register") {
    responseText = "Registered";
    endPoint = "register";
    location = "/";
  } else {
    responseText = "Logged in";
    endPoint = "login";
    location = "/auth";
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowComponent(true);
    const configuration = {
      method: "post",
      url: `https://nodejs-mongodb-aut-53af94a6d4c0.herokuapp.com/${endPoint}`,
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = location;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col items-center gap-3 ">
      <h2>{title}</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail" className=" border-red-600">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* submit button */}
      </Form>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
      {showComponent && (
        <SubmitMessage
          login={login}
          responseText={responseText}
          setShowComponent={setShowComponent}
        />
      )}
    </div>
  );
}
function SubmitMessage({
  login,
  responseText,

  setShowComponent,
}) {
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 3000);
  });

  return login ? (
    <p className="text-success">You Are {responseText} Successfully</p>
  ) : (
    <p className="text-danger">You Are Not {responseText}</p>
  );
}
