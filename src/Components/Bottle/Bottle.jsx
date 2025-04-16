const Bottle = ({bottle, handleClick}) => {
    const {name, img, price} = bottle;
    console.log(bottle);
    return (
        <div>
            <h2 className="text-teal-500 text-lg">Product Name : {name}</h2>
            <img src={img} alt="bottle images" />
            <p className="font-bold text-green-600">Price : {price}</p>
            <button type="button" className="bg-gray-200" onClick={handleClick}>Purchase</button>
        </div>
    );
};

export default Bottle;