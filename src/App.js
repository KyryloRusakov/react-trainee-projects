import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef([])

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(res => res.json())
      .then(json => {
        ratesRef.current = json;
        onChangeToPrice(1)
      })
      .catch (err => {
        console.warn(err);
      })
  }, [])

  const getRate = (currency) => {
    if (currency === "UAH") {
      return 1;
    }
    const currencyData = ratesRef.current.find(rate => rate.cc === currency);
    return currencyData ? currencyData.rate : 1;
  };

  const onChangeFromPrice = (value) => {
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);
    const result = (value / toRate) * fromRate;
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);
    const result = (value / fromRate) * toRate;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice)
  }, [fromCurrency])

  useEffect(() => {
    onChangeToPrice(toPrice)
  }, [toCurrency])

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />
    </div>
  );
}

export default App;
