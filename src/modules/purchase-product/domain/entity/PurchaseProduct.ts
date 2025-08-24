export default class PurchaseProduct {
    id?: number
    productId: number
    purchaseId: number
    quantity: number
    price: number
    total: number

    static create(props: Omit<PurchaseProduct, "id">) {
        return new PurchaseProduct(undefined, props.productId, props.purchaseId, props.quantity, props.price, props.total)
    }

    constructor(id: number | undefined, productId: number, purchaseId: number, quantity: number, price: number, total: number) {
        this.id = id
        this.productId = productId
        this.purchaseId = purchaseId
        this.quantity = quantity
        this.price = price
        this.total = total
    }
}