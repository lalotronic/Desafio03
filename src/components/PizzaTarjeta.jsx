import { useState } from 'react';

const PizzaTarjeta = ({ pizza, increment, decrement }) => {
  return (
    <div
      style={{
        border: '3px solid grey',
        borderRadius:'8px',
        margin: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'50px',
        marginBottom:'50px'
        
      }}>
      <img src={pizza.img} alt="" style={{ width: '150px', borderRadius:'8px'}} />
      <h3>{pizza.name}</h3>
      <p>$ {pizza.price}</p>
      <div style={{ display: 'flex' }}>
      <button
            type="button"
            className="btn btn-secondary"
            style={{
            width: '30px',
            height: '30px'
                   }}
            onClick={() => {
              decrement(pizza.id);
             }}>
               -
      </button>
        <p style={{ margin: '10px' }}>{pizza.count}</p>
        <button
            type="button"
            className="btn btn-primary"
            style={{
            width: '30px',
            height: '30px'
                   }}
          onClick={() => {
            increment(pizza.id);
          }}>
          +
        </button>
      </div>
    </div>
  );
};

export default PizzaTarjeta;
