const Bottle = ({bottle, handleClick}) => {
    const {name, img, price} = bottle;
    return (
        <div>
            <h2 className="text-teal-500 text-lg">PName : {name}</h2>
            <img src={img} alt="bottle images" />
            <p className="font-bold text-green-600">Price : {price}</p>
            <button type="button" className="bg-gray-200" onClick={()=>handleClick(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;