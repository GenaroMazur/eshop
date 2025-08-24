export default class Purchase {
    id?: number
    userId: number
    totalPrice: number
    createdAt: Date

    static create(props: Omit<Purchase, "id" | "createdAt">) {
        const now = new Date()

        return new Purchase(undefined, props.userId, props.totalPrice, now)
    }

    constructor(id: number | undefined, userId: number, shopId, createdAt: Date) {
        this.id = id
        this.userId = userId
        this.totalPrice = 0
        this.createdAt = createdAt
    }
}