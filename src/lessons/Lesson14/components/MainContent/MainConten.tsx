import { useState, createContext, ChangeEvent} from "react";
import Section from "../Section/Section";
import {MainContentComponent, MainTitle} from "./styles"
import { UserData } from "./types";



export const MainContext = createContext({
    firstName: '',
    lastName: '',
    age: 0
})

function MainContent(){

const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 12
})



    return (
        <MainContext.Provider  value={userData}>
            <MainContentComponent>
            <MainTitle>Main Block</MainTitle>
            {/* <Section userData={userData}/> */}
            <Section/>
        </MainContentComponent>
        </MainContext.Provider>
        
    )
}

export default MainContent;