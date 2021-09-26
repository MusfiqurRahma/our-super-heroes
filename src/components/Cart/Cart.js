import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // total amount count
    let total = 0;
    for (const team of cart) {
        total = total + team.salary;
    }
    return (
        // started cart list
        <div className='main-cart'>
            <h2><i class="fas fa-user-friends"></i>Troops Count:{cart.length}</h2>
            <h2>Total Cost: ৳ {total}</h2>
            <ul>
                {
                    cart?.map(meal => <li>{meal.name} <img className='cart-img' src={meal.img} alt="" /></li>)
                }
            </ul>
            <button className='btn-cart'><i style={{fontSize:'18px'}} class="fas fa-phone-volume"></i> Call</button>
        </div>
    );
};

export default Cart;