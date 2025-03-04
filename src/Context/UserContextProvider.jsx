import React, {useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider= ({children}) => {
    const [mode, setmode] = useState(null)
    return (
        <UserContext.Provider value={{mode, setmode}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider