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
    [<FaHtml5 className="transition-all" size={33}/>, "HTML", "Body"],
    [<FaJs className="transition-all" size={33} />, "JavaScript", jsBody()],
    [<FaCss3 className="transition-all" size={33} />, "CSS", "Body"],
    [<FaReact className="transition-all" size={33}/>, "React", "Body"],
    [<FaNodeJs className="transition-all" size={33}/>, "Node", "Body"],
    [<RiNextjsFill className="transition-all" size={33}/>, "Next.js", "Body"],
    [<RiTailwindCssFill className="transition-all" size={33}/>, "Tailwind CSS", "Body"],
    [<SiFirebase className="transition-all" size={33}/>, "Firebase", fireBody()],
    [<FaGitAlt className="transition-all" size={33}/>, "Git", "Body"],
    [<SiExpress className="transition-all" size={33}/>, "Express", expressBody() ],
    [<DiPostgresql className="transition-all" size={33} />, "PostgreSQL", postgresBody()]
]
    return (
        <div className="text">
            <Accordion type="multiple" collapsible>
            {accordItems.map((x,i) => {
                return (                                      
                    <React.Fragment key={x[1]}>
                        <AccordionItem  value={"item-"+i}>
                            <AccordionTrigger className="text-2xl">
                                {x[0]}{x[1]}
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                {x[2]}
                            </AccordionContent>
                        </AccordionItem>
                    </React.Fragment>               
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