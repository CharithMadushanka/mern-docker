import React, { useState } from 'react'

export const Context = React.createContext();

function ContextController({ children }) {
    const [state, setState] = useState({ todos: [] }); //Initial state

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default ContextController
