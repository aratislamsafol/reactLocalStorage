const Cart = ({item}) => {
    const {img, id} = item;
    return (
        <div className="my-2 border rounded border-gray-300">
            <img className="w-[60px] p-1 rounded-md" src={img} alt={id} />
        </div>
    );
};

export default Cart;