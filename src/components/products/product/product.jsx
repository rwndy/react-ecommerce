import classes from '*.module.css'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

// membuat layout spesifik untuk jenis produk
function Product({product}) {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>
        <Typography variant='h2' color='textSecondary' >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>

      </CardActions>
    </Card>
  )
}

export default Product
