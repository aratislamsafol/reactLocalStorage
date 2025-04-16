import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../Bottle/Bottle';
import Cart from "../Cart/Cart";
import {addProduct, getItem, removeFromLocal} from '../../../public/LocalStorage/LocalStorge.js';

const Bottles = () => {
    const [bottles, setBottles] = useState([]); 
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('Data/data.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    },[]);

    useEffect(()=>{
        if(bottles.length){
            let localData = getItem();
            const saveCart = [];
            for(const id of localData) {
                const bottle =  bottles.find(bottle=> bottle.id === id)
                if(bottle) {
                    saveCart.push(bottle);
                }
            }

            setCart(saveCart);
        }
    },[bottles]);

    const handleClick = (bottle) => {
        let selectedData = [...cart, bottle];
        addProduct(bottle.id);
        setCart(selectedData);
    }

    const handleRemoveCart = id => {
        const remaingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remaingCart);
        removeFromLocal(id);
    }
    return (
        <div className="">
            <h3>Total Bottles : { bottles.length }</h3>
            <h3>Cart Items : { cart.length }</h3>
            <div className="flex flex-wrap gap-2">
                {cart.map((item, index) => <Cart key={index} item={item} handleRemoveCart={handleRemoveCart}></Cart>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleClick={handleClick}/>)
                } 
            </div>
         
        </div>
    );
};

export default Bottles;