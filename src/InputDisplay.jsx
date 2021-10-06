import React,{useState} from 'react';

function InputDisplay(){
const[name, setName] = useState();
const[fullName, setFullName] = useState();

const inputEvent = (data) =>{
//     // console.log(data.target.value)
    setName(data.target.value)
}
const onSubmit = () =>{
    setFullName(name)
}

    return(
        <>
            <div className="container" >
            <h1>Hello, {fullName}</h1>
            <input type="text" onChange={inputEvent} value={name} className="inputBox" placeholder="Enter Your Name"></input>
            <button className="button" onClick={onSubmit}>Submit</button>
            </div>
        </>
    );
}

export default InputDisplay;