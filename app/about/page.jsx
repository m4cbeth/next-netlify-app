// import { SiFirebase } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { RiNextjsFill } from "react-icons/ri";
// import { FaCss3 } from "react-icons/fa";
// import { FaJs } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { FaGitAlt } from "react-icons/fa6";
import PortAcc from "@/components/made-components/portfolio-accordian";


export default function About() {
    return (               
        <div className="md:max-w-lg md:mx-auto  mx-5 h-full">
            <title>About Jaren</title>
            <h1>
                about me
            </h1>
            <section>
                <h2 className="text-center font-thin text-4xl pb-5">
                    My Current Strong Suites
                </h2>
                <div>
                    <PortAcc className="size-10" />
                </div>
            </section>
            
        </div>
    )
}