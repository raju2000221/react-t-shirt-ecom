import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    
    const [cart, setCart] =useState([]);
   
    const handletshirt = tShirt =>{
        const newCart = [...cart, tShirt]; 
        setCart(newCart);
    }

    const removefromCart = id =>{
       const remaining = cart.filter(ts =>ts._id !==id);
       setCart(remaining)
    }
    return (
        <div className='home-container'>
           <div className='tshirt-container'>
           {
            tShirts.map(tShirt=><Tshirt
            key={tShirt._id}
            tShirt ={tShirt}
            handletshirt={handletshirt}
            ></Tshirt>)
           }
           </div>
           <div className="cart-container">
            <Cart
            cart={cart}
            removefromCart={removefromCart}
            ></Cart>
            
           </div>
        </div>
    );
};

export default Home;