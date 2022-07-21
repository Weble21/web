import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState();
  const [coinMoney, setCoinMoney] = useState(0);
  const onChange = (event) => {
    setMyMoney(event.target.value);
  };
  const changeCoin = (event) => {
    setCoinMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? <strong>Loading...</strong> :
        <div>
          <input
            value={myMoney}
            onChange={onChange}
            type="number" placeholder="Enter money you have">
          </input>
          <select onChange={changeCoin}>
            {coins.map((coin) => 
            <option
            placeholder="Choose the Coin"
            key={coin.quotes.USD.price}
            value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
            )
            }
          </select>
          {
            (coinMoney === 0 || myMoney === null) ? 
            "Type!" : <h1>You can buy {myMoney / coinMoney} coins!</h1>

          }
         
        </div>
      }


    </div>
  );
}

export default App;
