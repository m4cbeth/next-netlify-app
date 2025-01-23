'use client'

import { getUser, test } from "@/appServerActions/serveractions"
import { useState } from "react"



export default function Page({children}) {

    const [data, setData] = useState()

    const handleClick = async() => {
        try {
            const data = await getUser()
            const users = data.json()
            setData(users)            
        } catch(err) {
            console.error(err)
        }
    }
    

    return (
        <div>
            <h1>TESTING SERVER ACTIONS</h1>
            <h2>Get Client</h2>
            <button onClick={test}  className="btn btn-primary">get users</button>













            {/* <div className="typewriter">
                <div>
                    <p className="text-lg m-auto">
                        CSS Typewriter 
                    </p>
                </div>
            </div>
            <div className="typewriter">
                <div>
                    <p className="text-lg m-auto">
                        CSS Typewriter effect and boy howdy htye how are you
                    </p>
                </div>
            </div> */}
            {/* <div className="typewriter">
                <div>
                    <p className="text-4xl m-auto delay-5000">
                        You and me are gonna shake it up 
                    </p>
                </div>
            </div>    
            <div className="typewriter delay">
                <div>
                <p className=" text-4xl m-auto">
                        You and me are gonna shake it up 
                    </p>
                </div>
            </div> 
            <div>
                <div className="w-10 h-10 bg-secondary  animate-bounce duration-25"></div>
            </div> */}
        
        </div>
    )
}