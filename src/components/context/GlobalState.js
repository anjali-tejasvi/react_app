import React, { createContext, useReducer } from ' react';
import AppReducer from './AppReducer';


//Initial State
const initialState = {
    users:[
        {
         id:'1', 
        Name:'Shivansh',
        Age:'23'
    },
    {
        id:'2', 
        Name:'Simran',
        Age:'22'
    },
    {
        id:'3',
        Name:'Aakash',
        Age:'23'
    }
    ]
};

//create context
export const GlobleContext = createContext(initialState);


//provider Component
export const GlobleProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);


    return (
        <GlobleContext.Provider value={{

        }}>
            {children}
        </GlobleContext.Provider>
    )
}