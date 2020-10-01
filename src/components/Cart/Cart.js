import React from 'react';

const  Cart = (props) => {
    const cart =props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
         totalSalary = totalSalary + user.salary;
        
    }
    return (
        <div>
            <h1>this is user add : {cart.length}</h1>
            <h3>Tota salary: {totalSalary}</h3>
        </div>
    );
};

export default Cart;