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

export const isRequestFresh = (lastRequest) => {
  const oneHour = 60 * 60 * 1000
  const now = new Date().getTime()
  return now - lastRequest < oneHour
}

let lastRequest = 0
let rates = { CAD: 1.36, EUR: 1.03, USD: 1 }

export const getRates = () => {
  const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
  const mockRates = { CAD: 1.36, EUR: 1.03, USD: 1 }

  if (isRequestFresh(lastRequest)) return rates

  return axios
    .get(url)
    .then(({ data }) => {
      lastRequest = new Date().getTime()
      rates = data.rates
      return data.rates
    })
    .catch((err) => {
      console.log(err)
      return mockRates
    })
}
