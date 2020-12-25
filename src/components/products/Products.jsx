import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/product'

const products = [
  { id: 1, name: 'Sepatu', description: 'Sepatu lari', price: '$5' },
  { id: 2, name: 'Macbook', description: 'Macbook M1', price: '$1500' }
]

function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {
          products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Products
