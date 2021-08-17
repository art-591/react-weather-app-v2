import React from "react";
import SearchForm from "./SearchForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card outside">
        <div className="card-body">
          <SearchForm />
        </div>
      </div>
      <small className="coder">
        Coded by Anel Sanders.{" "}
        <a href="https://github.com/art-591/weather-react">GitHub</a>.
      </small>
    </div>
  );
}

export default App;
