'use client'
import { useState } from "react";
import { TextGenerateEffect } from "/components/ui/text-generate-effect";

const words = "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows.";


export default function AboutPage() {
    return (
        <div className='MAIN max-w-4xl mx-auto'>
            <h1>a little about me</h1>
            <TextGenerateEffect words={words} />
            <div className="animate-fadeIn delay-[10000ms] float-right mr-10 text-lg">-Tyler Durden</div>           
        </div>
    );
}