import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Contact() {
    return (
        <div className="container mx-auto max-w-3xl p-5">
            <h1>
                Get in touch!
            </h1>
            <h2 className="px-5">
                drop a line online
            </h2>
            <div className="flex justify-center gap-10 p-5">
                <FaBluesky className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                <FaGithub className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                <FaLinkedin className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
            </div>
            <h2 className="px-5">
                ask away, or just say hi!
            </h2>
            <form className="flex flex-col gap-4 p-5">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Send</button> 
            </form>
        </div>
    )
}