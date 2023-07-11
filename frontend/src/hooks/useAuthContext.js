import { AuthContext } from '../contextAuthContext'
import { useContext } from 'react'

export const useAuthsContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}