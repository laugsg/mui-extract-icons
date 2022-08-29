import React from "react";
import "./App.css";

// import { Star } from "./components/Star";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icons</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <section className="section">
          {/* Icons as Components */}
          <ul style={{ textAlign: "left" }}>
            <li>Icons as Components</li>
            <ul>
              <li>
                {/* <Star /> .euro_outlined */}
              </li>
            </ul>
          </ul>
          {/* Icons as css classes */}
          <ul style={{ textAlign: "left" }}>
            <li>Icons as css classes</li>
            <ul>
              <li>
                <span className="euro_outlined"></span> .euro_outlined
              </li>
              <li>
                <span className="euro_rounded"></span> .euro_rounded
              </li>
              <li>
                <span className="file_copy_outlined"></span> .file_copy_outlined
              </li>
              <li>
                <span className="file_copy_rounded"></span> .file_copy_rounded
              </li>
              <li>
                <span className="shopping_cart_outlined"></span>{" "}
                .shopping_cart_outlined
              </li>
              <li>
                <span className="shopping_cart_rounded"></span>{" "}
                .shopping_cart_rounded
              </li>
            </ul>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
