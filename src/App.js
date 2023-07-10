//hooks
import { useEffect, useState } from "react";

//Styles
import "./App.css";

//Utilities
import minFilters from "./utilities/minFilters.util";

//Components
import ShowResult from "./components/ShowResult";

function App() {
  //States
  const [error, setError] = useState(false);
  const [number, setNumber] = useState("");
  const [finalResult, setFinalResult] = useState({
    filterCount: "----",
    numberOfFactories: "----",
    totalPollution: "----",
    finalCreatedPollution: "----",
  });

  //Handler
  const inputHandler = (event) => {
    const pattern = /^[0-9,]+$/;

    if (pattern.test(event.target.value)) {
      setError(false);
      setNumber(event.target.value);
    } else {
      setError(true);
      setFinalResult({
        filterCount: "----",
        numberOfFactories: "----",
        totalPollution: "----",
        finalCreatedPollution: "----",
      });
    }
  };

  const pollutionArray = [1, 8, 19, 5, 30];
  let totalPollution = pollutionArray.reduce((sum, val) => sum + val, 0);

  console.log("result", minFilters(pollutionArray, totalPollution));

  return (
    <div className="App">
      <pre>{minFilters.toString()}</pre>
      <hr />
      Problem posed to display the minimum number of filters
      <br />
      <br />
      <br />
      <br />
      <input type="text" onChange={inputHandler} />
      {error && (
        <p className="textError">فقط میتوانید عدد و کاما وارد نمایید </p>
      )}
      <hr />
      <ShowResult
        number={number}
        finalResult={finalResult}
        setFinalResult={setFinalResult}
      />
    </div>
  );
}

export default App;
