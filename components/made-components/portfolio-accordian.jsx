import { SiFirebase } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function PortAcc() {
      const accordItems = [
      [<FaHtml5 size={33}/>, "HTML", "Body"],
      [<FaCss3 size={33} />, "CSS", "Body"],
      [<RiTailwindCssFill size={33}/>, "Tailwind CSS", "Body"],
      [<FaJs size={33} />, "JavaScript", "Body"],
      [<SiFirebase size={33}/>, "Title", "Body"],
      [<RiNextjsFill size={33}/>, "Title", "Body"],
      [<FaReact size={33}/>, "Title", "Body"],
      [<FaNodeJs size={33}/>, "Title", "Body"],
      [<FaGitAlt size={33}/>, "Title", "Body"],
    ]
    return (
        <div className="text">
            <Accordion type="multiple" collapsible>
            {accordItems.map((x,i) => {
                return (                                      
                    <AccordionItem value={"item-"+i}>
                        <AccordionTrigger className="text-2xl hover:text-4xl">
                        {x[0]}{x[1]}
                        </AccordionTrigger>
                        <AccordionContent>
                        {x[2]}
                </AccordionContent>
            </AccordionItem>
                
                )
            })}
        
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl hover:text-4xl">
                     HTML :
                </AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>

            
            
            </Accordion>

        </div>
    )
  }
