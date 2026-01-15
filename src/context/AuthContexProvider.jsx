import { useState, useEffect, useCallback } from "react"
import { AuthContext } from "./AuthContext"
import { obtenerTokenIOL, refreshTokenIOL } from "../services/IOLServices"

const refreshTimeoutRef = { current: null }

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState()

    const saveToken = ({ tokenToSave }) => {
        if (tokenToSave === null) {
            localStorage.removeItem('token_data')
        } else {
            localStorage.setItem('token_data', JSON.stringify(tokenToSave))
        }
        setToken(tokenToSave)
    }

    const login = async ({ username, password, setLoading }) => {
        const tokenToSave = await obtenerTokenIOL({ username, password, setLoading })
        saveToken({ tokenToSave })
        return tokenToSave
    }

    const logout = () => {
        saveToken({ tokenToSave: null })
    }


    // Uso useCallback porque sino se queja el useEffect con que estaria refrescando esta funcion continuamente y deberia 
    // pasarsela como parametro, no me interesa que genere una nueva funcion, la funcion es siempre igual
    const refreshToken = useCallback(async () => {
        try {
            const newToken = await refreshTokenIOL({ token })
            setToken(newToken)
        } catch {
            console.log('No se pudo refrescar el token')
            setToken(null)
        }
    }, [token]);

    useEffect(() => {
        if (!token) return

        const now = Date.now()
        const refreshAt = token.expiresAt - 2 * 60 * 1000 // 2 min antes
        const delay = refreshAt - now

        if (delay <= 0) {
            refreshTimeoutRef.current = setTimeout(() => {
                refreshToken()
            }, 0)
            return
        }

        refreshTimeoutRef.current = setTimeout(() => {
            refreshToken()
        }, delay)

        return () => clearTimeout(refreshTimeoutRef.current)
    }, [token, refreshToken])

    return (
        <AuthContext.Provider value={{
            token,
            login,
            logout
        }}

        >
            {children}
        </AuthContext.Provider>
    )
}