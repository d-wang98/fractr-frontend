import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Prices = (props: { p_type: string }) => {
  const [count, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      switch (props.p_type) {
        case "Lowest Ask":
          setState((count) => count + 1);
          break;
        case "Highest Bid":
          setState((count) => count + 10);
          break;
        case "Latest Transaction":
          setState((count) => count + 100);
          break;
        default:
          console.log("not a correct type of button!");
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{count}</p>
      {props.p_type}
    </div>
  );
};

// export enum price_type {
//   LOWASK = 0,
//   HIGHBID = 1,
//   LASTTX = 2,
// }

// export const price_type2 = {
//   LOWASK: "Lowest Ask",
//   HIGHBID: "Higest Bid",
//   LASTTX: "Latest Transaction",
// };
// export const Prices = (p_type: price_type) => {
//   let price_str = "";
//   switch (p_type) {
//     case 0:
//       price_str = "Lowest Ask";
//       break;
//     case 1:
//       price_str = "Higest Bid";
//       break;
//     case 2:
//       price_str = "Latest Transaction";
//       break;
//   }
//   return (
//     <div>
//       <h3>WELCOME TO FRACTR HOME</h3>
//       <p>{price_str}</p>
//     </div>
//   );
// };
