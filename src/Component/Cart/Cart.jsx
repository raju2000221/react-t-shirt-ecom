import React from 'react';

const Cart = ({cart, removefromCart}) => {
    
    return (
        <div className='cart-container'>
            <h2>order summery:{cart.length}</h2>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                > {tshirt.name}<button onClick={() => removefromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;