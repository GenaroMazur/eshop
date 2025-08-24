export default class Product {
    id?: number
    shop_id: number
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    static create(props: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>): Product {
        const now = new Date()
        return new Product(undefined, props.shop_id, props.name, props.price, now, now, null)
    }

    constructor(id: number | undefined, shop_id: number, name: string, price: number, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
        this.id = id
        this.shop_id = shop_id
        this.name = name
        this.price = price
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
    }
}