"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "/components/ui/hero-highlight";
import { useContext } from "react";
import { ThemeContext } from "@/app/layout";

export default function HeroSection() {
  const theme = useContext(ThemeContext)
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed ${ !theme ? "text-slate-900" : "text-slate-100"} lg:leading-snug text-center mx-auto`}>
        With insomnia, nothing&apos;s real. <br />
        Everything is far away. <br />
        Everything is a<br/>
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>)
  );
}
