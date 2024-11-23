import {create} from "zustand"

type State ={
    active:String
    setActive:(active:String)=>void
}

export const useActive = create<State>((set)=>({
    active:"",
    setActive:(active)=>set(()=>({active:active}))
}))