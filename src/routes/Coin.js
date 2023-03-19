import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}
`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setCoin(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
