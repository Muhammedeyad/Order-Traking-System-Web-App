import React, { createContext, useContext, useState } from "react";
import type { AuthTypes } from "../../types/authTypes";
import type { FormDataType } from "../../types/formDataType";


export const UserContext = createContext<AuthTypes | null>(null)

export const UseUserContext = (): AuthTypes => useContext(UserContext)


const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const formDataobject = {
    //     userid: null,
    //     name:"",
    //     email: "",
    //     password: "",
    //     userTypeId: 0,
    //     phoneNumber: 0
    // }
    const [formData, setFormData] = useState<FormDataType | null>(JSON.parse(localStorage.getItem('authuser')))
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

    const toggleChangeTheme = () => {
        setIsDarkTheme((theme) => !theme)
    }
    return (< UserContext.Provider value={{
        user: formData,
        setUser: setFormData,
        currentTheme: isDarkTheme,
        toggleChangeTheme: toggleChangeTheme
    }
    }>
        {children}
    </UserContext.Provider >)
}

export default AuthContextProvider;