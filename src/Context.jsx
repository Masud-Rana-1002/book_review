import React, {useState} from "react";
import LevelContext from "./LevelContext";
const UserContext = ({children})=>{
const [readBook, setReadBook] = useState([])

return(
    <LevelContext.Provider value={{readBook, setReadBook}}>
       {children}
    </LevelContext.Provider>
)
}
export default UserContext