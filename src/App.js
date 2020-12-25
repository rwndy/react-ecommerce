import { useState, useEffect, } from 'react'
import { Navbar, Products } from './components'
import { commerce } from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      <Navbar />
      <Products products={products}/>
    </>
  )
}

export default App