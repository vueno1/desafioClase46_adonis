const Producto = use("App/Models/Producto")

class getProductosController {
    async index({response, view}) {
        const result = await Producto.all()
        const productos = result.toJSON()
        return view.render("productosVista", {
            productos
        })
    }
}

module.exports = getProductosController
 