import '../styling/Home.css';

function Home() {
  return (
    <div className='home'>
      <h1>Your first pick for a quality shopping experience.</h1>
      <img src='https://bit.ly/38XBEBr' alt=''/>
      <p>
        <strong>Everything you want and more...</strong>
        Go ahead. Buy that one item that's been on your mind for the past week. The one that's been sitting in your cart begging to be purchased. It's okay, we won't tell. You deserve it.
      </p>
      <button onClick={
        e => e.view.location.pathname = '/shop'
      }>
        Shop Now
      </button>
    </div>
  )
}

export default Home;