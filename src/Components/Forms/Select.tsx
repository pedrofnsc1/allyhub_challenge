import React from "react";

export default function Select(props: SelectProps){ 
        return(
            <select
                {...props}
                
                className="bg-zinc-500 py-3 px-4 rounded text-sm
                placeholder-zinc-500"
                required>
                    <option value="">{}</option>
            </select>
        )
}