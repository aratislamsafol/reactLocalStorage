import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../Bottle/Bottle';
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]); 
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('Data/data.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    },[]);

    const handleClick = (bottle) => {
        let selectedData = [...cart, bottle];
        setCart(selectedData);
    }
    return (
        <div className="">
            <h3>Total Bottles : { bottles.length }</h3>
            <h3>Cart Items : { cart.length }</h3>
            <div className="flex flex-wrap gap-2">
                {cart.map(item => <Cart item={item}></Cart>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                bottles.map(bottle => <Bottle bottle={bottle} handleClick={handleClick}/>)
                } 
            </div>
         
        </div>
    );
};

export default Bottles;