import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent() {
  const [message, setMessage] = useState("");
  const token = cookies.get("TOKEN");
  function logout() {
    cookies.remove("TOKEN", { path: "/" });

    window.location.href = "/";
  }
  console.log(token);
  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://nodejs-mongodb-aut-53af94a6d4c0.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return token ? (
    <div className="text-center">
      <h1>Auth Component</h1>
      <h3 className=" text-danger">{message}</h3>
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  ) : (
    <div className="text-center">
      <h1>You are not Logged In!</h1>
      <Button variant="danger" onClick={() => (window.location.href = "/")}>
        Go To Login
      </Button>
    </div>
  );
}
