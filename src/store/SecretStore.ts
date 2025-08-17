import { create } from "zustand"
import type { AddSecretResponse } from "../api/types"

// export interface ISecret {
//     id: number,
//     title: string,
//     value: string
// }

interface ISecretStore {
    secretList: AddSecretResponse[],
    selectedSecret?: AddSecretResponse,
    addSecret: (item: AddSecretResponse) => void,
    // removeSecret: (item: number) => void,
    // updateSecret: (item: ISecret) => void,
    setSelectedSecret: (item?: AddSecretResponse) => void
}

export const useSecretStore = create<ISecretStore>((set, get) => ({ // This is reuseable function
    secretList: [],
    selectedSecret: undefined,
    addSecret: (item: AddSecretResponse) => {
        const secret = get().secretList
        set({
            secretList: [...secret, item] //item is added because you want to append the new secret to the existing list. 
        })
    },

    setSelectedSecret: (item?: AddSecretResponse) => {
        set({
            selectedSecret: item
        })
    }
}))


