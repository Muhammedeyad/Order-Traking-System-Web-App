import { useNavigate } from "react-router-dom"
import type { FormDataType } from "../types/formDataType"
import api from "../axios/axios"
import {  toast } from 'react-toastify';
import { UseUserContext } from "../context/UserContext/UserContext";


export const AuthenticationService = () => {
    const navigate = useNavigate()
    const { setUser:setAuthUser } = UseUserContext();


    async function useAuthService(data:FormDataType, isSignInPage:boolean, setUser ){
        const message= !isSignInPage? "Registration Success!" : "Login Success!"
        const url:string = !isSignInPage ? "http://localhost:5000/api/user/register": "http://localhost:5000/api/user/login"
        const res = await api.post(url, data)
    
        toast(message, {
            position: 'bottom-center',
            type: 'success'
        })
        
        setUser({name:"", email: '', password:"", phoneNumber: ""})
        if(isSignInPage) {
            localStorage.setItem("authuser", JSON.stringify(res.data?.data))
            const loggedRouteName = res.data.data?.usertypeid == 1 ? "/admin/dashboard" : res.data.data?.usertypeid == 4 ? "/agent/dashboard" : "/"
            navigate(loggedRouteName)
        }
        setAuthUser({
            name: res.data.data.username,
            email: res.data.data.email,
            phoneNumber: res.data.data.phoneno,
            password: res.data.data.password,
            userTypeId: res.data.data.usertypeid,
            userid: res.data.data.userid
        })
        return res.data

    }
    return {useAuthService}
}
