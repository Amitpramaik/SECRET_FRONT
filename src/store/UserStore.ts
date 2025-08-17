import { create } from "zustand"

export interface IUser {
   email: string,
   expiresAt: number,
   firstName: string,
   id: string,
   lastName: string,
   token: string
}

interface IUserStore {
   user?: IUser,
   setUser: ( user?: IUser ) => void
}

export const useUserStore = create<IUserStore>((set, get) => ({ 
  user: undefined,
  setUser: ( user?: IUser ) => {
    set({user})
  }
}))


