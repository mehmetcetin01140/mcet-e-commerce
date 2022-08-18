
import React, { useState ,useContext} from 'react'

import { auth,provider } from '../../firebase/index'
import {signInWithPopup} from "firebase/auth"
import {AuthContext} from "../../contexts/AuthContext"
export default function Login() {
    const {currentUser} = useContext(AuthContext)
  const loginGoogle = () => {
    signInWithPopup(auth,provider)
  }
  return (
    <div className='login-container'>
        {
            !currentUser ? <button onClick={loginGoogle}>Giriş Yap</button> :  <button onClick={()=>auth.signOut()}>Çıkış Yap</button>
        }

    </div>
  )
}
