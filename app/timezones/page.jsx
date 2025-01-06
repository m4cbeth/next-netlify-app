'use client'
import { useState, useRef } from 'react';

export default function TimezonesApp() {
    const [utcTime, setUtcTime] = useState(12);
    // const formatTime = time => time > 0 ? time % 24 : 24 + time % 24;
    // cosnt formatTime2 = time => time < 0 ?
    const date = new Date()
    const hour = date.getHours()


    return (
        <div className='container mx-auto'>
            <h1>Timezones</h1>
            <p>Find out what time it is in other parts of the world</p>
            <p>Time in Calgary:</p>
            <input type="number" value={(+utcTime-7+24)%24} onChange={(e) => setUtcTime(+e.target.value + 7)} />
            <p>means</p>
            <p>Time in Germany:</p>
            <input type="number" value={(+utcTime+1+24)%24} onChange={(e) => setUtcTime(e.target.value - 1)} />
            <p>Time in Tokyo:</p>
            <input type="number" value={(+utcTime+9+24)%24} onChange={(e) => setUtcTime(e.target.value - 9)} />
        </div>
    )
}