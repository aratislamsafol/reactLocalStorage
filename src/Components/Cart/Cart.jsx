const Cart = ({item, handleRemoveCart}) => {
    const {img, id} = item;
    return (
        <div className="my-2 border rounded border-gray-300">
            <img className="w-[60px] p-1 rounded-md" src={img} alt={id} />
            <button type="button" className="w-full bg-gray-400" onClick={()=>handleRemoveCart(id)}>Del</button>
        </div>
    );
};

export default Cart;