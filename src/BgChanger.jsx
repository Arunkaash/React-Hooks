import React,{useState} from 'react';

function BgChanger(){

    const pink = '#fab1a0';
    const [bg, setBg] = useState(pink);
    const [btnText, setBtntext] = useState('Click Me')
    const bgChange = () =>{
        const poster = '#81ecec';
        setBg(poster)
        setBtntext('Hurray!')
    }
    const bgBack = ()=>{
        setBg(pink)
        setBtntext('ayyo!')
    }


    return(
        <>
            <div className="container" style={{backgroundColor:bg}}>
                {/* bg and btn text changing on single ang back to bg on doubleclick */}
                <button className="button" onClick={bgChange} onDoubleClick={bgBack}>{btnText}</button> 
            </div>
        </>
    );
}

export default BgChanger;