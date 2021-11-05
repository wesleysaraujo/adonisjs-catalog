import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Xiaomi Redmi Note 10',
        stock: 100,
        description: 'Smartphone Xiaomi Redmi Note 10, 128GB, 4Gb Ram, Branco',
        price: 1758.99,
        is_active: true
      },
      {
        name: 'Xiaomi Redmi 9',
        stock: 100,
        description: 'Smartphone Xiaomi Redmi 9, 64GB, 4Gb Ram, Amarelo',
        price: 1299,
        is_active: true
      },
      {
        name: 'Xiaomi Redmi 9T',
        stock: 100,
        description: 'Smartphone Xiaomi Redmi Note 10, 64GB, 4Gb Ram, Azul',
        price: 1458.99,
        is_active: true
      },
      {
        name: 'Moto G 9 Plus',
        stock: 100,
        description: 'Smartphone Motorola Moto G 9 Plus, 64GB, 4Gb Ram, Branco',
        price: 1758.99,
        is_active: true
      },
      {
        name: 'Moto G 9 Play',
        stock: 100,
        description: 'Smartphone Motorola Moto G 9 Play, 64GB, 3Gb Ram, Azul Turquesa',
        price: 1758.99,
        is_active: true
      },
      {
        name: 'Xiaomi MI 10',
        stock: 100,
        description: 'Smartphone Xiaomi Mi 10, 256, 6Gb Ram, Ouro',
        price: 2569,
        is_active: true
      },
      {
        name: 'Xiaomi Redmi Note 10 Pro',
        stock: 100,
        description: 'Smartphone Xiaomi Redmi Note 10 Pro, 128GB, 6Gb Ram, Verde Oliva',
        price: 2098.99,
        is_active: true
      }
    ])
  }
}
