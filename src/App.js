import React from "react";
import SearchForm from "./SearchForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card outside">
          <div className="card-body">
            <SearchForm />
          </div>
        </div>
        <footer className="coder">
          Coded by Anel Sanders and open-sourced on{" "}
          <a href="https://github.com/art-591/react-weather-app-v2">GitHub</a>.
        </footer>
      </div>
    </div>
  );
}
