'use client'
import { useState } from "react"
import {Avatar} from "@nextui-org/react";
const ImageField = () => {


    return(
        <div className = 'bg-neutral-100 p-[0.5rem] shadow-md my-[0.75rem]'>
            <h1>Image</h1>
            <Avatar name="sample"/>
        </div>

    )
}
export default ImageField;