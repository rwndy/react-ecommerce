import { useState, useEffect, } from 'react'
import { Navbar, Products, Cart } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    const {cart} = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity})
    setCart(cart)
  }

  const handleRemoveToCart = async productId => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyToCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCarts()
  }, [])

  return (
    
    <Router>
      <Navbar totalItems={ cart.total_items } />
      <Switch>
        <Route path="/" exact>
          <Products products={products} onAddToCart={handleAddToCart}  />
        </Route>
        <Route path="/cart">
          <Cart 
            carts={cart} 
            handleUpdateToCart={handleUpdateToCart} 
            handleRemoveToCart={handleRemoveToCart} 
            handleEmptyToChart={handleEmptyToCart} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App