import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";

export default function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/secondaryArt">Secondary Art</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  );
}
