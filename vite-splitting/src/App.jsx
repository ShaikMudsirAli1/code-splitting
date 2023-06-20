import { useState } from "react";
import { makeUpperCase } from "./utilities";

import "./App.css";

function App() {
  const [names, setNames] = useState(null);

  // LOAD DATA ASYNC WAY.

  const onLoad = () => {
    // Async importing default Exports.
    import("./names").then((module) => {
      // console.log(module);
      setNames(module.default);
      // Async importing named Exports.
      import("./utilities").then(({ makeUpperCase }) => {
        setNames((names) => makeUpperCase(names));
      });
    });
  };
  return (
    <>
      <div>HomeApp</div>
      <div>{JSON.stringify(names)}</div>
      {/* When clicked on this button we asynchronously import the data. */}
      <button onClick={onLoad}>Load</button>
    </>
  );
}

export default App;
