import '../styling/App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.js';
import Shop from './Shop.js';

function App() {
  const [ cartQty, setCartQty ] = useState(0),
        addToShoppingCart = (index, array, callback) => {
          let tempArr = array;
          setCartQty(cartQty + array[index]);
          tempArr[index] = 0;
          callback([...tempArr]);

          console.log(cartQty);
        }

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <div className='shoppingCart'>
          <span>{cartQty ? cartQty : ''}</span>
          <i className='fas fa-shopping-cart'/>
        </div>
      </nav>

      <Switch>
        <Route path='/shop'>
          <Shop pushToCart={addToShoppingCart}/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
