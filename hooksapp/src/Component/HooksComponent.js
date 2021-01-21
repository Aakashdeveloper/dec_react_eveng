import React, { Fragment,useState,useEffect } from 'react';
import DisplayComponent from './DisplayComponent';

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [city,setCity] = useState();

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <Fragment>
            <center>
                <h2>{title}</h2>
                <h2>{count}</h2>
                <button onClick={() => {setCount("hiii")}}>Click Me</button>
                <h2>{count1}</h2>
                <button onClick={() => {setCount1(count1+1)}}>Click Me</button>
                <DisplayComponent cityData={city}/>
            </center>
        </Fragment>
    )
}


export default HooksComponent;