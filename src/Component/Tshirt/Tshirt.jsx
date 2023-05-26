import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,handletshirt}) => {
    const{picture,name,price}=tShirt;
    console.log(tShirt)
    return (
        <div className='tshirt'>
            <img  src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:{price}</p>
            <button onClick={() => handletshirt(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;