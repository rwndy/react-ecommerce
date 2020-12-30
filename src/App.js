import { useState, useEffect, } from 'react'
import { Navbar, Products, Cart } from './components'
import { commerce } from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCarts = async () => {
    const data = await commerce.cart.retrieve()
    setCart(data)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCarts()
  }, [])

  return (
    <>
      <Navbar totalItems={ cart.total_items } />
      {/* <Products products={products} onAddToCart={handleAddToCart}  /> */}
      <Cart carts={cart} />
    </>
  )
}

export default App