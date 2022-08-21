import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Artwork from "./components/artwork";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App;

//   return (
//     <>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/settings">Settings</Link>
//           </li>
//           <li>
//             <Link to="/secondaryArt">Secondary Art</Link>
//           </li>
//         </ul>
//         <hr />
//         <Main />
//       </div>
//     </>
//   );
// }
