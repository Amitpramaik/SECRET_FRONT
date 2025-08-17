import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import { useUserStore, type IUser } from "../../store/UserStore";
import { api } from "../../api";
import useAuthApi from "../../api/auth/useAuthApi";
import Loading from "../../components/Loading";


export default function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? <LoginForm /> : <SignupForm />}
            <button onClick={() => { setShowLogin(prev => !prev) }}>{showLogin ? "go to sign up" : "go to login"}</button>
        </div>
    )
}
function LoginForm() {
    const { control, handleSubmit } = useForm({
        values: {
            email: '',
            password: ''
        }
    })
    const { loading, login, } = useAuthApi()

    return (
        <>
            {loading && <Loading />}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 300, border: '1px solid #a09e9eff', padding: 8, alignItems: "center" }}
                onSubmit={handleSubmit(async (data) => {
                    login(data.email, data.password)
                })}
            >
                <h3>LOGIN</h3>
                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type="email" placeholder="Enter email" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="email"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid Email"
                        }
                    }}
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input placeholder="Enter password" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="password"
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password is minimum 8 characters"
                        }
                    }}
                />
                <button style={{ width: 70 }} type="submit">Login</button>
            </form>
        </>
    )
}

function SignupForm() {
    const { control, handleSubmit } = useForm({
        values: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    })
    const { loading, signUp } = useAuthApi()
    return (
        <>
            {loading && <Loading />}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 300, border: '1px solid #a09e9eff', padding: 8, alignItems: "center" }}
                onSubmit={handleSubmit(async (data) => {
                    signUp(data.email, data.password, data.firstName, data.lastName)

                })}
            >
                <h3>SIGN UP</h3>
                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type="email" placeholder="Enter email" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="email"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid Email"
                        }
                    }}
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input placeholder="Enter password" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="password"
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password is minimum 8 characters"
                        }
                    }}
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type='text' placeholder="Enter first name" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="firstName"
                    rules={{
                        required: "First Name is required"
                    }}
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type='text' placeholder="Enter last name" onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    name="lastName"
                />
                <button style={{ width: 50 }} type="submit">Sign up</button>
            </form>
        </>
    )
}