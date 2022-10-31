import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function Input(props: InputProps){
    return (
        <input 
            {...props}

            className="bg-zinc-500 py-3 px-4 rounded text-sm
            placeholder-zinc-300"
            required
            
        />
    )
}