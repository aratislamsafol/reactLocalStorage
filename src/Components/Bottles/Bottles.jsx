import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]); 
    
    useEffect(()=>{
        fetch('Data/data.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    },[]);

    const handleClick = () => {

    }
    return (
        <div>
            <h3>Total Bottles : {bottles.length}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                bottles.map(bottle => <Bottle bottle={bottle} handleClick={handleClick}/>)
                } 
            </div>
         
        </div>
    );
};

export default Bottles;