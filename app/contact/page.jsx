"use client"
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"
import { SignInWithGithub, SignInWithGoogle } from "@/components/sign-in";
import Link from 'next/link'
import { useState } from "react";

// const url = "https://jsonplaceholder.typicode.com/todos";
// const options = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//   },
//   body: JSON.stringify({
//     a: 10,
//     b: 20,
//   }),
// };

// const bang = () => {
//     console.log("PRIAVATE PARTY")
//     fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => {
//         console.table(data);
//     });
// }




export default function Contact() {
    
    const url = "https://expressapp-cjlk.onrender.com/api"
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            name: "Hello World",
            email: "This is a test post.",
            message: 1,
            
        }),
    };
    
    const sumbitAction = () => {
        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log("POST request successful. Response:", data);
        });
    }

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    return (
        <div>
            <div className="container mx-auto max-w-3xl p-5 rounded-xl">

                <div className="btn btn-outline btn-primary">
                    TESTING API
                </div>
                
                <h1>
                    Get in touch!
                </h1>
                <h2 className="px-5">
                    drop a line online
                </h2>
                <div className="flex justify-center gap-10 p-5">
                    <Link href="https://bsky.app/profile/jarenwhitehouse.bsky.social" target="_blank">
                        <FaBluesky className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                    <Link href="https://github.com/m4cbeth" target="_blank">
                        <FaGithub className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jaren-whitehouse" target="_blank">
                        <FaLinkedin className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                </div>
                <h2 className="px-5">
                    ask away, or just say hi!
                </h2>
                <p>
                    {formData.name}
                </p>
                <p>
                    {formData.email}
                </p>
                <p>
                    {formData.message}
                </p>
                <form className="flex flex-col gap-4 p-5">
                    <label htmlFor="name">Name</label>
                    <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" />
                    <label htmlFor="message">Message</label>
                    <textarea value={formData.message}rea onChange={handleChange} id="message" name="message" rows={10}></textarea>
                    <button onSubmit={sumbitAction} type="submit">Send</button>
                </form>
            </div>
            {/* <div className=" container mx-auto max-w-3xl p-5 rounded-xl ">
                <h1>
                    Or sign in and message!
                </h1>
                <div className="btn btn-primary m-1 ">
                    <FaGithub />
                    <SignInWithGithub/>
                </div>
                <div className="btn btn-primary m-1 ">
                    <FaGoogle />
                    <SignInWithGoogle />
                </div>
            </div> */}
        </div>
    )
}