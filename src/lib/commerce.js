import Commerce from '@chec/commerce.js'

// akan diberi parameter berupa key
// diberi argument true karena kita membuat ecommerce store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true)