const Producto = use("App/Models/Producto")

class getProductosController {

    async index({response, view}) {
        const result = await Producto.all()
        const productos = result.toJSON()
        return view.render("productosVista", {
            productos
        })
    }

    async store({request, response}) {        
        const body = request.body
        const producto = await Producto.create(body)
        return producto
    }

    async show({params, view}) {
        const producto = await Producto.findOrFail(params.id)
        return view.render("productoVista", {
            producto: producto
        })
    }

    async update({params, request}) {
        const body = request.body
        const producto = await Producto.findOrFail(params.id)

        producto.nombre = body.nombre
        producto.descripcion = body.descripcion
        producto.codigo = body.codigo 
        producto.foto = body.foto
        producto.precio = body.precio 
        producto.stock = body.stock

        return producto.save()
    }

    async destroy({params}){
        const producto = await Producto.findOrFail(params.id)
        return producto.delete()
    }
}

module.exports = getProductosController
 