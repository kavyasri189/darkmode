import React, {useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider= ({children}) => {
    const [isChecked, setIsChecked] = useState(null)
    return (
        <UserContext.Provider value={{isChecked, setIsChecked}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider