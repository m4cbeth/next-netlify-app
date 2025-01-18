"use client"
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"
import { SignInWithGithub, SignInWithGoogle } from "@/components/sign-in";
import Link from 'next/link'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
    const initState = {
        name:"",
        email:"",
        message:"",
    }
    const [formData, setFormData] = useState(initState)
    const url = "https://expressapp-cjlk.onrender.com/messages"
    // const url = "http://localhost:3001/messages"
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.name,
            message: formData.message,
            
        }),
    };
    
    const sumbitAction = () => {
        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log("POST request successful. Response:", data);
        });
        setFormData(initState)
        toast.dark('Thank you for your message', {
            position: "bottom-right",

        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    return (
        <div>
            <title>JW: Contact</title>
            <ToastContainer />
            <div className="container mx-auto max-w-3xl p-5 rounded-xl">
                <h1>
                    Get in touch!
                </h1>
                <h2 className="px-5">
                    Drop a line online
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
                <h2 className="px-5 pt-5">
                    Or if you've got a question, ask away!
                </h2>
                <form action={sumbitAction} className="flex flex-col gap-4 p-5">
                    <label htmlFor="name">Name</label>
                    <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" />
                    <label htmlFor="message">Message</label>
                    <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows={10}></textarea>
                    <button type="submit">Send</button>
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