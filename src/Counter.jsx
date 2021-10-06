import React,{useState} from 'react';



function Counter(){
    const [count, setCount] = useState(0)

    const incVal = ()=>{
    setCount(count+1)
}
    return(
        <>
        <div className="counterContainer">
            <div className="counterbody">
                <h1 className="counter">{count}</h1>
                 <button onClick={incVal} className="button" >Click Me</button>
            </div>
        </div>
        </>
    )
}
export default Counter;