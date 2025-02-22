'use server'
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";


import { revalidatePath } from 'next/cache'
// import prisma from '@/lib/prisma'




import { auth } from '@/auth'




export default async function Contact() {

    // const something = await prisma.users.findMany()
    // console.log(something)

    const session = await auth()
    console.log(session)

    const leftMessages = []
    console.log('HEHEHEHEHEHEHEHEHEHEHE')
    
    // taking these out too; doing session style will mean:
    // clean up this, remove any old things that make it a client     [ X ]
    // that the messages will be fetched session side (prisma?)       [   ]
    // the form will cause a refresh when submited (next.refresh()?)  [   ]
    
    // const formInitState = {
    //     name:"",
    //     email:"",
    //     message:"",
    // }
    // const [formData, setFormData] = useState(formInitState)
    // const [leftMessages, setMessages] = useState([])
    
    // trying to switch to auth v5 universal auth() and make this a server comp (even if this page is lowest need of ssr)
    // if user, get db messages
    // useEffect(() => {
    //     if (!session?.user.email) return
    //     const url = 'http://localhost:3001/getmessages'
    //     const options = {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json", "Accept": "application/json"},
    //         body: JSON.stringify({
    //             email: session?.user.email
    //         })
    //     }
    //     fetch(url, options) 
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         if (Array.isArray(data.messages)) {
    //             setMessages(data.messages)
    //             console.log('set messages')
    //         } else {
    //             console.error('expected array got', data.messages)
    //         }
    //     })
    //     .catch((err) => console.error(`tis nobller to ${err}`))

    // }, [session])
    
    const sumbitAction = () => {
        // const url = "http://localhost:3001/messages"
        const url = "https://expressapp-cjlk.onrender.com/messages"
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,                
            }),
        };
        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log("POST request successful. Response:", data);
        })
        .catch((err)=> console.error(`SUMBIT ACTION FAILED, err: ${err}`))
        // setFormData(formInitState)
        toast.dark('Thank you for your message', {
            position: "bottom-right",
            className: "z-[9999999999999999999999999999]"

        })

    }



    return (
        <div>
            <title>JW: Contact</title>
            <ToastContainer />
            <div className="container mx-auto max-w-3xl p-5 rounded-xl">
                <pre>{JSON.stringify(session,0,8)}</pre>
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
                    Or if you&apos;ve got a question, ask away!
                </h2>
                <form action={"sumbitAction"} className="flex flex-col gap-4 p-5">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="bg-slate-900" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="bg-slate-900" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={10} className="bg-slate-900"></textarea>
                    <button type="submit">Send</button>
                </form>
                {
                // userDbData && (
                true && (
                <>
                    {Array.isArray(leftMessages) && leftMessages.length > 0 ?
                    <PrevMessages leftMessages={leftMessages}/> : ("")
                    }
                </>)}
            </div>
        </div>
    )
}



const PrevMessages = ({leftMessages}) => (
    <div>
    <h2 className="text-3xl font-thin">Previous Messages</h2>
        <Table>
        <TableCaption>Thank you for your messages!</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">From</TableHead>
            <TableHead>Sent On</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {leftMessages.map((message, index) => (
            <TableRow key={index}>
            <TableCell className="font-medium">{message.name}</TableCell>
            <TableCell>{message.createdAt.slice(0,10)}</TableCell>
            <TableCell>{message.message}</TableCell>
            <TableCell className="text-right">received</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    </div>
)