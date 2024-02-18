import React from "react";
import Options from "./components/Options";
import MM from "./components/MM";

export default function App() {
  return (
    <div className="cntnr">
      <div className="optn">
        <Options />
      </div>
      <div className="model">
        <MM />
      </div>
    </div>
  );
}
