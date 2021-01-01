import CartItem from './CartItem/CartItem'
import { Container, Grid, Button, Typography } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'


const Cart = ({ carts, handleUpdateToCart, handleRemoveToCart, handleEmptyToChart }) => {
  const classes = useStyles()
 
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, 
      <Link to="/" className={classes.link}>start adding some!</Link>
    </Typography>
  )
  
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {
          carts.line_items.map(cart => (
            <Grid item xs={12} sm={4} key={cart.id}>
              <CartItem item={cart} onRemoveCart={handleRemoveToCart} onUpdateCart={handleUpdateToCart} />
            </Grid>
          ))
        }
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: { carts.subtotal.formatted_with_symbol }
        </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyToChart}>Empty Cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  )

  if (!carts.line_items) return 'Loading';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      { !carts.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart
