export default class Employee {
    id?: number
    fullName: string
    userId: number
    shopId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    static create(props: Omit<Employee, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>): Employee {
        const now = new Date()
        return new Employee(undefined, props.fullName, props.userId, props.shopId, now, now, null)
    }

    constructor(id: number | undefined, fullname: string, userId: number, shopId: number, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
        this.id = id
        this.fullName = fullname
        this.userId = userId
        this.shopId = shopId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
    }
}