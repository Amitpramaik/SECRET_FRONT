import { useState } from "react";
import { api } from "..";
import { useUserStore, type IUser } from "../../store/UserStore";
import type { ApiRespone } from "../types";

export default function useAuthApi() {
    const [loading, setloading] = useState(false)
    const setUser = useUserStore((store) => store.setUser)

    async function login(email: string, password: string) {
        setloading(true)
        try {
            const result = await api.post<ApiRespone<IUser>>('/auth/login', {
                email: email,
                password: password
            })
            console.log(result)
            setUser(result.data.message)
            localStorage.setItem("token", result.data.message.token)
        }
        catch (error: any) {
            console.log(error)
            alert(error.response.data.message)
        } finally {
            setloading(false)
        }
    }

    async function signUp(email:string,password:string,firstName:string,lastName:string) {
        setloading(true)
            try {
                    const result = await api.post<ApiRespone<IUser>>('/auth/signup', {
                        email,
                        password,
                        firstName,
                        lastName
                    })
                    console.log(result)
                    if (result.status === 201)
                        alert("Sign up Complete")
                }
                catch (error: any) {
                    console.log(error)
                    alert(error.message)
                }finally{
                    setloading(false)
                }
    }
    return {
        loading,
        login,
        signUp
    }
}

