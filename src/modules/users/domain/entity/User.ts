export default class User {
    id?: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    static create(props: Omit<User, "id" | "updatedAt" | "deletedAt" | "createdAt">): User {
        const now = new Date()

        return new User(
            undefined,
            props.username,
            props.password,
            now, now,
            null
        )
    }

    constructor(id: number | undefined, username: string, password: string, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
        this.id = id
        this.username = username
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
    }
}