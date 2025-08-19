import React,{ createContext, useReducer} from "react";


export const DataContext = createContext()

export const DataProvider = ({ Children,reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {Children}
    </DataContext.Provider>
  );
};

// import React, { createContext, useReducer, useContext } from "react";

// export const DataContext = createContext();

// export const DataProvider = ({ reducer, initialState, children }) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useDataLayer = () => useContext(DataContext);