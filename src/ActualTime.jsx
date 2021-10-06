// AcTual time on Click

import React,{useState} from 'react';



function ActualTime(){
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

   const ubdateTime = ()=>{
       newTime = new Date().toLocaleTimeString();
        setCtime(newTime)
   }
      return(
        <>
        <div className="counterContainer">
            <div className="counterbody">
                <h1 className="counter">{ctime}</h1>
                 <button onClick={ubdateTime} className="button" >Get Time</button>
            </div>
        </div>
        </>
    )
}
export default ActualTime;