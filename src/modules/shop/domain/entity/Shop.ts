export default class Shop {
    id?: number
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    static create(props: Omit<Shop, "createdAt" | "updatedAt" | "deletedAt" | "id">): Shop {
        const now = new Date()

        return new Shop(undefined, props.name, now, now, null)
    }

    constructor(id: number | undefined, name: string, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
        this.id = id
        this.name = name
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
    }
}