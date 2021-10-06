import React,{useState} from 'react'

function DigitalClock(){
    let ClockTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(ClockTime)

    const ubdateTime = ()=>{
         ClockTime = new Date().toLocaleTimeString();
         setCtime(ClockTime)

    }

    setInterval(ubdateTime, 1000);

    return(
        <>
            <div className="mainCon">
                <div className="digitalCon">
                <h1>{ctime}</h1>
                </div>
                 <h5 className="footer">Developed By Arun</h5>
            </div>
            
        </>
    )
}

export default DigitalClock;