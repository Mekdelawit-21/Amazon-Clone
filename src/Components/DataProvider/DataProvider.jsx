import React,{ createContext, useReducer} from "react";



export const DataContext = createContext()

export const DataProvider = ({ Children,reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {Children}
    </DataContext.Provider>
  );
};

