import '../styling/Item.css';

function Item(props) {
  return (
    <div className='card'>
      <img src='https://bit.ly/3d5CBZN' alt=''/>
      <h3>{props.title}</h3>
      <div className='quantity'>
        <button onClick={props.minus}>-</button>
        <input type='text' value={props.quantity} readOnly/>
        <button onClick={props.plus}>+</button>
      </div>
      <button className='cart' onClick={props.pushToCart}>Add to Cart</button>
    </div>
  )
}

export default Item;