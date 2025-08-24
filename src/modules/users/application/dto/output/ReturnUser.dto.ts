import User from "../../../domain/entity/User";
import SystemException from "../../../../../share/exceptions/SystemException";

export default class ReturnUserDto {
    public readonly id: number
    public readonly username: string
    public readonly email: string
    public readonly createdAt: Date
    public readonly updatedAt: Date

    constructor(user: User) {
        if (!user.id) throw new SystemException("User ID is required")

        this.id = user.id
        this.username = user.username
        this.email = user.email
        this.createdAt = user.createdAt
        this.updatedAt = user.updatedAt
    }
}