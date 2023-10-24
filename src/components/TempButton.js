import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../contexts';


function TempButton({ id }) {
    const { socket } = useGlobalContext();
    const [state, setState] = useState({});

    useEffect(()=>{
        socket.current.on("joinedQueue",(data)=>{
            setState(data)
            
            console.log(data);
        })
    },[socket])
    const handleOnClick =()=>{
        socket.current.emit("joinQueue", {id})
    }
    return (
        <>
            <button className="btn btn-primary" onClick={handleOnClick}>
                Add to Queue
            </button>
        </>
    )
}

export default TempButton