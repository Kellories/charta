'use client'
import { useState } from "react"
const NameBox = () => {

    const [name,setName] = useState("")

    return(
        <div className = 'bg-neutral-100 p-[0.5rem] shadow-md'>
            <h1>Name</h1>
            <input></input>
        </div>

    )
}
export default NameBox;