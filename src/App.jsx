import React, { useContext, useEffect }  from 'react'
import Routing from './Router.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import {Type} from './Utility/action.type.js'
import {auth} from './Utility/firebase.js'

function App() {

    const [{user},dispatch] = useContext(DataProvider)

  useEffect(() => {
     auth.onAuthStateChanged((authUser) =>{
      if(authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        })
      }else{
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }
     })
  },[])
 
  return 
      <Routing/>
    
  
}

export default App

// import React from "react";
// import Routing from "./Router";

// function App() {
//   return (
//     <div>
//       <Routing />
//     </div>
//   );
// }

// export default App;
