import { FaPen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link"

const navItems = [
    { linkText: 'Home', href: '/', icon: <FaHome size={25} /> },
    { linkText: 'Coding', href: '/image-cdn', icon: <FaCode size={25} /> },
    { linkText: 'Writing', href: '/edge', icon: <FaPen size={23} /> },
    { linkText: 'About', href: '/about', icon: <FaInfo size={25} /> },
    { linkText: 'Contact', href: '/contact', icon: <FaAt size={25} /> },
];

export default function Sidenav() {
    return (
        <div className="flex flex-col items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <div className="flex flex-col items-center gap-4">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="relative group flex items-center rounded-full justify-center h-12 w-12 bg-slate-950 shadow-lg hover:bg-fuchsia-950 hover:rounded-xl gap-2 transition hover:opacity-80"
                    >
                        {item.icon}
                        
                        <span className="p-3 rounded shadow-lg absolute left-20 scale-0 transition group-hover:scale-100">{item.linkText}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}