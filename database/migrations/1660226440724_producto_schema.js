'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string("nombre", 80).unique(),
      table.string("descripcion", 150),
      table.integer("codigo", 250),
      table.string("foto", 150),
      table.integer("precio",150),
      table.integer("stock", 100),                        
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
