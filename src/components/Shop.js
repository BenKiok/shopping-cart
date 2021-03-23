import '../styling/Shop.css';
import { useState } from 'react';
import Item from './Item.js';

function Shop(props) {
  const [ itemQty, setQty ] = useState([0,0,0,0,0,0]),
        incrementQty = index => {
          let arr = itemQty;
          if (arr[index] < 99) {
            arr[index]++;
          }
          setQty([...arr]);
        },
        decrementQty = index => {
          let arr = itemQty;
          if (arr[index] > 0) {
            arr[index]--;
          }
          setQty([...arr]);
        }

  return (
    <div className='shop'>
      <h2>Items for Sale</h2>
      <div className='items'>
        <Item 
          title='Item' 
          quantity={itemQty[0]}
          plus={incrementQty.bind(null, 0)}
          minus={decrementQty.bind(null, 0)}
          pushToCart={props.pushToCart.bind(null, 0, itemQty, setQty)}
        />
        <Item 
          title='Idk' 
          quantity={itemQty[1]}
          plus={incrementQty.bind(null, 1)}
          minus={decrementQty.bind(null, 1)}
          pushToCart={props.pushToCart.bind(null, 1, itemQty, setQty)}
        />
        <Item 
          title='I' 
          quantity={itemQty[2]}
          plus={incrementQty.bind(null, 2)}
          minus={decrementQty.bind(null, 2)}
          pushToCart={props.pushToCart.bind(null, 2, itemQty, setQty)}
        />
        <Item 
          title="Didn't" 
          quantity={itemQty[3]}
          plus={incrementQty.bind(null, 3)}
          minus={decrementQty.bind(null, 3)}
          pushToCart={props.pushToCart.bind(null, 3, itemQty, setQty)}
        />
        <Item 
          title='Think' 
          quantity={itemQty[4]}
          plus={incrementQty.bind(null, 4)}
          minus={decrementQty.bind(null, 4)}
          pushToCart={props.pushToCart.bind(null, 4, itemQty, setQty)}
        />
        <Item 
          title='This Far' 
          quantity={itemQty[5]}
          plus={incrementQty.bind(null, 5)}
          minus={decrementQty.bind(null, 5)}
          pushToCart={props.pushToCart.bind(null, 5, itemQty, setQty)}
        />
      </div>
    </div>
  )
}

export default Shop;