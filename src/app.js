import cors from 'cors';
import express from 'express';
import { startConnection } from './config/database.config.js';
import environment from './config/environment.js';
import authRouter from './resources/auth/routes/auth.routes.js';
import ordersRouter from './resources/orders/routes/orders.route.js';
import productsRouter from './resources/products/routes/products.routes.js';
import usersRouter from './resources/users/routes/users.routes.js';

const app = express();

startConnection()
app.use( cors() )
app.use( express.json() )
app.get( '/', function ( req, res ) {
  res.json( { message: "hola mundo" } );
} );
app.use( authRouter )
app.use( productsRouter )
app.use(usersRouter)
app.use(ordersRouter)

console.log( `APLICACION INICIARÁ EN EL PUERTO: ${ environment.PORT }` )
app.listen( environment.PORT );