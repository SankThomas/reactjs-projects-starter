import { useEffect, useState } from "react"
import Coins from "./Coins"

function App() {
  const [coins, setCoins] = useState([])
  const [initial, setInitial] = useState(20)

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${initial}&page=1&sparkline=false`
      )
      const data = await res.json()
      setCoins(data)
    }

    fetchCoins()
  }, [initial])

  const fetchMoreCoins = () => {
    setInitial(initial + 20)
  }

  return (
    <>
      <section className="container">
        <p className="number">Showing {coins.length} coins</p>
        <article>
          <h1>Latest Info From The Crypto Space</h1>
          <p>
            Powered by the <a href="https://coingecko.com">CoinGecko API</a>
          </p>
        </article>

        <div className="coins">
          {coins.map((coin) => (
            <Coins key={coin.id} {...coin} />
          ))}
        </div>

        <button onClick={fetchMoreCoins} className="fetch">
          Get More Coins
        </button>
      </section>
    </>
  )
}

export default App
