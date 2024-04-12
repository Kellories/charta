'use client'
import { useState } from "react"
const ContactBox = () => {

    const [contact,setContact] = useState("")

    return(
        <div className = 'bg-neutral-100 p-[0.5rem] shadow-md my-[0.75rem]'>
            <h1>Contact</h1>
            <input></input>
        </div>

    )
}
export default ContactBox;