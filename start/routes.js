'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.resource("productos", "getProductosController").apiOnly
//en la ruta "productos" me retorna todos los productos
//pero para eso estan los controladores y aqui solo los definiremos. 
//como por ejemplo: "getProductosControllers.index"
//index es el metodo para traerme todos los productos.
// Route.get("productos", "getProductosController.index")
