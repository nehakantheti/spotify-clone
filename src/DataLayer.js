import React, {Children, createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

// children is <App/> - things that are wrapped inside the root
export const DataLayer = ( {initialState, reducer, children} ) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);