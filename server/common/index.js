import { readFile } from 'fs/promises'
import axios from 'axios'

export const getProducts = () => {
  return readFile(`${__dirname}/../data/products.json`, 'utf-8')
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err))
}

export const sortProductsList = (products, sort, order) => {
  switch (sort) {
    case 'price':
      return products.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price
      })
    case 'name':
      return products.sort((a, b) => {
        return order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      })
    default:
      return products
  }
}

export const getRates = () => {
  const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
  const mockRates = { CAD: 1.36, EUR: 1.03, USD: 1 }

  return axios(url)
    .then(({ data }) => data.rates)
    .catch(() => mockRates)
}
