import { FaPen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavBut from "./navbut";

const navItems = [
    { linkText: 'Home', href: '/', icon: <FaHome /> },
    { linkText: 'Coding', href: '/image-cdn', icon: <FaCode /> },
    { linkText: 'Writing', href: '/edge', icon: <FaPen /> },
    { linkText: 'About', href: '/about', icon: <FaInfo /> },
    { linkText: 'Contact', href: '/contact', icon: <FaAt /> },
];

export default function Sidenav() {
    return (
        <div className="flex flex-col items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <div className="flex flex-col items-center gap-4">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-2 px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                    >
                        {item.icon}
                        <span>{item.linkText}</span>
                    </Link>
                ))}
            </div>
            <NavBut />
        </div>
    )
}