"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("cc2894d9-25ea-4d50-914e-7a235c71c7e5")
    },[]);
    
    return null;
}