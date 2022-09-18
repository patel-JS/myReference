import React from 'react'
import { createContext } from 'react'


const AppContext = createContext();

const AppProvider = ({children}) => {

    const userData = {
        username : "Jis779",
        age : '29'
    }

    return <AppContext.Provider value={userData} >{children}</AppContext.Provider>
}


export {AppContext, AppProvider};