export default function Page({children}) {
    return (
        <div>
            {/* <div className="typewriter">
                <div>
                    <p className="text-lg m-auto">
                        CSS Typewriter 
                    </p>
                </div>
            </div>
            <div className="typewriter">
                <div>
                    <p className="text-lg m-auto">
                        CSS Typewriter effect and boy howdy htye how are you
                    </p>
                </div>
            </div> */}
            <div className="typewriter">
                <div>
                    <p className="text-4xl m-auto delay-500">
                        You and me are gonna shake it up 
                    </p>
                </div>
            </div>    
            <div className="typewriter delay">
                <div>
                <p className=" text-4xl m-auto">
                        You and me are gonna shake it up 
                    </p>
                </div>
            </div> 
            <div>
                <div className="w-10 h-10 bg-secondary  animate-bounce duration-25"></div>
            </div>
        </div>
    )
}