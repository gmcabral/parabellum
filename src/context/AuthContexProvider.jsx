import { useState } from "react"
import { AuthContext } from "./AuthContext"

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState()

    return (
        <AuthContext.Provider value={{
            token,
            setToken
        }}

        >
            {children}
        </AuthContext.Provider>
    )
}