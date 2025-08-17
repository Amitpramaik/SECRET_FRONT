import { useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { useSecretStore } from "../../../store/SecretStore";
import { api } from "../../../api";
import type { AddSecretResponse } from "../../../api/types";
import usePostApi from "../../../api/post/useAuthApi";
import Progress from "../../../components/Progress";




export default function AddSecret() {

    const { control, handleSubmit, reset } = useForm({
        values: {
            title: '',
            value: ''
        }
    })
    const {loading, createSecret} = usePostApi();

    return (
        <>
        {loading && <Progress />}
        <div style={{ height: '100%', width: '100%' }}>
                <form onSubmit={handleSubmit(async(data) => {
                 createSecret(data.title, data.value)
                 reset({
                            title: '',
                            value: ''
                        });
                })}>

                    <Controller
                        control={control}
                        render={({ field: { onChange, ...rest } }) => {
                            return <input placeholder="Enter a title" onChange={(e) => onChange(e.target.value)} {...rest} />
                        }}
                        name="title"
                        rules={{
                            required: "Title is required"
                        }}
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, ...rest } }) => {
                            return <input placeholder="Enter secret value" onChange={(e) => onChange(e.target.value)} {...rest} />
                        }}
                        name="value"
                        rules={{
                            required: "Secret value is required"
                        }}
                    />

                    <button type="submit"> create</button>

                </form>
                <SecretList/>
            </div>
        </>    
    )
}

function SecretList() {
    const secretList = useSecretStore((store) => store.secretList)
    return (<div>
        {secretList.map((item) => (
            <SecretItem item = {item} />
        ))}
        </div >
    )
}
interface ISecretItemProps {
    item: AddSecretResponse
}

function SecretItem({item}: ISecretItemProps) {
    const setSecretSecret = useSecretStore((store) => store.setSelectedSecret)
    return (
        <div key={item.id} style={{ marginBottom: 12, padding: 8, border: '1px solid black' }} onClick={() => setSecretSecret(item)}>
            title: {item.title}<br />
            value: {item.Value}
        </div>
    )
}