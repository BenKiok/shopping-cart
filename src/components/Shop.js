import '../styling/Shop.css';
import Item from './Item.js';

function Shop() {
  return (
    <div className='shop'>
      <h2>Items for Sale</h2>
      <div className='items'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}

export default Shop;