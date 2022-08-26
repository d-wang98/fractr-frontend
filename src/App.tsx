import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Artwork from "./components/artwork";

const { ServiceClient } = require("./pb/service/service_grpc_web_pb");

const App = () => {
  const client = new ServiceClient('http://localhost:8080', null, null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/artwork/:artworkId" 
            element={< Artwork client={client} />}
          />
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
