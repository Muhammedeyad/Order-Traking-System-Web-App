import {useMutation} from '@tanstack/react-query'
import type { AuthTypes } from '../types/authTypes'
import { AuthenticationService } from '../services/AuthenticationService'
import type { FormDataType } from '../types/formDataType'
import {  toast } from 'react-toastify';


export const UseAuthenticationHook = () => {   

    const mutation = useMutation({
        mutationFn: useAuthHook,
        onSuccess: (data)=>{
            console.log(data, 'mutation data')
        },
        onError: (err)=>{
            console.log(err?.response.data.error);
            toast(err?.response.data.error, {
                position: 'bottom-center',
                type: 'error'
            })
        }
    })
    const { useAuthService }  = AuthenticationService()
    async function useAuthHook ({data, isSignInPage, setUser}: {data: AuthTypes, isSignInPage:boolean, setUser: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
    }>> }){
        if(!isSignInPage){
            const isvalid = isValidData(data, isSignInPage)
            if(!isvalid){
                return
            }
            return useAuthService(data, isSignInPage, setUser)
        }else{
            const isvalid = isValidData(data, isSignInPage)
            if(!isvalid){
                return 
            }
            return useAuthService(data, isSignInPage, setUser)
        }
    }
    return {mutation}
}



function isValidData(data:FormDataType, isSignInPage:boolean): boolean{
    if(!isSignInPage){
        if(!data.name || !data.email || !data.password || !data.phoneNumber){
            toast("All feilds must be required !", {
                position:'bottom-center',
                theme: 'light',
                type: 'error'
            })
            return false
        }
    }else{
        if(!data.email || !data.password){
            toast("All feilds must be required ! ")
            return false
        }
    }
    return true
}