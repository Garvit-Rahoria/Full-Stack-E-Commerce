'use client'

import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";


export default function ViewBtn({ prod }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-lime-100 text-lime-500 p-2 cursor-pointer rounded-lg hover:bg-lime-200'>
            <FaEye 
            onClick={() => setToggle(!toggle)}
            className='duration-1000'
             />
            {
                toggle && <Overlay prod={prod} onclose={() => setToggle(false)} />
            }
        </div>
    )
}


function Overlay({ onclose, prod }) {
    return (
        <div className='fixed bottom-0 left-0 w-full p-6 bg-blue-950'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sint architecto cumque dolores laboriosam perspiciatis nulla eos ut alias provident!
        </div>
    )
}