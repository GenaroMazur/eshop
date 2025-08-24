export default class Transaction {
    id?: number
    customerId: number
    purchaseId: number
    shopId: number
    amount: number
    createdAt: Date

    static create(props: Omit<Transaction, 'id' | 'createdAt'>): Transaction {
        return new Transaction(undefined, props.customerId, props.purchaseId, props.shopId, props.amount, new Date())
    }

    constructor(id: number | undefined, customerId: number, purchaseId: number, shopId: number, amount: number, createdAt: Date) {
        this.id = id
        this.customerId = customerId
        this.purchaseId = purchaseId
        this.shopId = shopId
        this.amount = amount
        this.createdAt = createdAt
    }
}