import { SiFirebase } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
export default function PortAcc() {
    const accordItems = [
    {icon: <FaHtml5 className="transition-all" size={33}/>, name: "HTML", body: "Body"},
    {icon: <FaJs className="transition-all" size={33}/>, name: "JavaScript",body:  jsBody()},
    {icon: <FaCss3 className="transition-all" size={33}/>, name: "CSS", body: "Body"},
    {icon: <FaReact className="transition-all" size={33}/>, name: "React", body: "Body"},
    {icon: <FaNodeJs className="transition-all" size={33}/>, name: "Node", body: "Body"},
    {icon: <RiNextjsFill className="transition-all" size={33}/>, name: "Next.js", body: "Body"},
    {icon: <RiTailwindCssFill className="transition-all" size={33}/>, name: "Tailwind CSS", body: "Body"},
    {icon: <SiFirebase className="transition-all" size={33}/>, name: "Firebase",body:  fireBody()},
    {icon: <FaGitAlt className="transition-all" size={33}/>, name: "Git", body: "Body"},
    {icon: <SiExpress className="transition-all" size={33}/>, name: "Express", body: expressBody() },
    {icon: <DiPostgresql className="transition-all" size={33}/>, name: "PostgreSQbody", body: postgresBody()},
]
    return (
        <div className="text">
            <Accordion type="single" collapsible>
            {accordItems.map((tech,i) => {
                return (                                      
                    <AccordionItem  key={i} value={"item-"+i}>
                        <AccordionTrigger className="text-2xl font-light">
                            {tech.icon}{tech.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-lg">
                            {tech.body}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
            </Accordion>
        </div>
    )
}


const jsBody = () => `
Oh JS, my first love. Back in high school once I had ingested HTML primer, 
I started addeding all sorts of easter eggs and annoying things to my websites. Ohhh Javascript.`
const expressBody = () => `
app.post, writing up routers. Express is a great time, a
great time by everyone, i'm sure.
Anyways LIke iw asy ssaying.`
const postgresBody = () => `
One of the newer things I've learned, ironically it being the oldest.
I'm finally coming to see the wisdom of relational databases.`
const fireBody = () => `
Firebase. Firebase is too good. Firebase fueled my imposter syndrome for about two years longer than I needed.
Here I was, making full stack apps, but it felt like I was cheating. I felt like I didn't know auth, I didn't know databases,
and, granted, at the time I didn't, but I couldn't see the forest for the trees.
Sometimes the stack doesn't matter if the project kicks the trick.`