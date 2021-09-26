import React from 'react';
import './Troops.css';

const Troops = (props) => {
    // using distructuring
    const { name, img, age, role, salary, country } = props.team;
    return (
        <div className='troops-container'>
            {/* display all data */}
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
            <h5>Role: {role}</h5>
            <h5>Salary: ৳{salary}</h5>
            <h5>Country: {country}</h5>
            {/* using btn and icon */}
            <button onClick={() => props.handleBtnTroops(props.team)} className='regular-btn'><i class="fas fa-cart-plus cart-icon"></i> Add To Cart</button> <br />
            <div className='contact-icon'>
            <i style={{color:'#1da1f2',margin:'15px',fontSize:'25px'}} class="fab fa-twitter"></i>
            <i  style={{color:'#1873eb',margin:'15px',fontSize:'25px'}} class="fab fa-facebook"></i>
            <i  style={{color:'#6459a6',margin:'15px',fontSize:'25px'}} class="fab fa-viber"></i>
            </div>
        </div>
    );
};

export default Troops;