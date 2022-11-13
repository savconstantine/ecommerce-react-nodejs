import { readFile } from 'fs/promises'
import axios from 'axios'

export const getProducts = () => {
  return readFile(`${__dirname}/../data/products.json`, 'utf-8')
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err))
}

export const sortProductsList = (products, sort, order, search = '') => {
  const filteredProducts =
    search !== ''
      ? products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      : products

  switch (sort) {
    case 'price':
      return filteredProducts.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price
      })
    case 'name':
      return filteredProducts.sort((a, b) => {
        return order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      })
    default:
      return filteredProducts
  }
}

function rateChecker() {
  let ratesRequestDate = 0
  const msAtHour = 1000 * 60 * 60
  let currency = {}
  return {
    checkDate: (dateMs = 0) => ratesRequestDate + msAtHour <= dateMs,
    setRateDate(dateMs = 0) {
      ratesRequestDate = dateMs
    },
    setCurrency(newCurrency = {}) {
      currency = { ...newCurrency }
    },
    getRates: () => currency
  }
}

const myRates = rateChecker()

export const getRates = async () => {
  const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
  const mockRates = { CAD: 1.36, EUR: 1.03, USD: 1 }

  const date = +new Date()

  if (myRates.checkDate(date)) {
    await axios(url)
      .then(({ data }) => data.rates)
      .then((currency) => myRates.setCurrency(currency))
      .catch(() => mockRates)
    myRates.setRateDate(date)
  }

  return myRates.getRates()
}
