import { useEffect, useState } from "react"

export const useFont = () => {
    const changeFont = (size) => {
        if(size){
            document.documentElement.className = '';
            document.documentElement.classList.add(size)
        }else{
            document.documentElement.className = '';
        }
    }
    return { changeFont }

}