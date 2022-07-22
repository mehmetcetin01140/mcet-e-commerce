
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
    <div>
        {
            !currentUser ?    <span onClick={loginGoogle}>Giriş Yap</span> :  <span onClick={()=>auth.signOut()}>Çıkış Yap</span>
        }

    </div>
  )
}
