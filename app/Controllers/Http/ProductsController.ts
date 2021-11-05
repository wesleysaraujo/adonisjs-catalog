import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from "App/Models/Product";

export default class ProductsController {
    public async index(ctx: HttpContextContract) {
        const products = await Product.all()

        return products
    }
}
