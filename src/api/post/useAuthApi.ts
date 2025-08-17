import { useState } from "react";
import { useSecretStore } from "../../store/SecretStore";
import { api } from "..";
import type { AddSecretResponse } from "../types";

export default function usePostApi() {
    const [loading, setLoading] = useState(false);
    const addSecret = useSecretStore((store) => store.addSecret);


    async function createSecret(title: string, value: string) {
        setLoading(true)
        try {
                const res = await api.post<{ message: AddSecretResponse, statusCode: number }>('/secret/add', {
                    title: title,
                    value: value
                })
                addSecret(res.data.message);
            } catch (error: any) {
                console.error("Error adding secret:", error);
                alert("Failed to add secret: " + error.message);
            } finally {
                setLoading(false)
            }
    }

    return {
        loading,
        createSecret
    }
}    