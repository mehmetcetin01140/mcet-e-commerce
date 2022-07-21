import {createContext,useEffect,useState} from "react"
import {auth} from "../firebase/index"

export const AuthContext = createContext();


export default function AuthContextProvider({children}){
    const [currentUser,setCurrentUser] = useState(null)
    const [loading,setLoading] = useState(null)

    useEffect(()=>{
        return auth.onIdTokenChanged(async (user) =>{
            if(!user){
                console.log("kullanıcı bulunamadı")
                setCurrentUser(null)
                setLoading(false)
                return
            }

            const token = await user.getIdToken()
            console.log('token:' + token)
            console.log('user:' + user)
            setCurrentUser(user)
            setLoading(false)
        })
    },[])
    
        return(
            <AuthContext.Provider value={{currentUser}}>
                {children}
            </AuthContext.Provider>
        )
    
}
