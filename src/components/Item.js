import '../styling/Item.css';

function Item(props) {
  return (
    <div className='card'>
      <img src='https://bit.ly/3d5CBZN' alt=''/>
      <h3>Item Pending</h3>
      <div className='quantity'>
        <button>-</button>
        <input type='text'/>
        <button>+</button>
      </div>
    </div>
  )
}

export default Item;