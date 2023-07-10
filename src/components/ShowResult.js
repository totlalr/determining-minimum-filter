//hooks
import React from "react";
import { useEffect } from "react";

//Utilities
import minFiltersShowAllInfo from "./../utilities/minFiltersShowAllInfo.util";

export default function ShowResult({ number, setFinalResult, finalResult }) {
  //Watcher
  useEffect(() => {
    setTimeout(() => {
      if (number != "") {
        const array = number.split(",");

        let totalPol = array
          .map((item) => parseFloat(item))
          .filter((num) => !isNaN(num))
          .reduce((sum, val) => sum + val, 0);
        const result = minFiltersShowAllInfo(array, totalPol);
        setFinalResult(result);
      }
    }, 1000);
  }, [number]);

  return (
    <div>
      <p>filterCount : {finalResult.filterCount}</p>
      <p>finalCreatedPollution : {finalResult.finalCreatedPollution}</p>
      <p>numberOfFactories : {finalResult.numberOfFactories}</p>
      <p>totalPollution : {finalResult.totalPollution}</p>
    </div>
  );
}
