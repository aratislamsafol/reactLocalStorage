function getItem () {
    let cart= [];
    const getData = localStorage.getItem('cart');
    if(getData) {
        cart = JSON.parse(getData);
    }
    return cart;
}

function addProduct(id) {
    let cart = getItem();
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export {addProduct, getItem};