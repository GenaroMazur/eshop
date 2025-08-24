import UserAbstractUseCase from "./User.Abstract.useCase";
import ReturnUserDto from "../dto/output/ReturnUser.dto";

export default class ListUsersUseCase extends UserAbstractUseCase {
    override async execute(page: number, limit: number): Promise<{
        users: ReturnUserDto[],
        count: number,
        limit: number,
        page: number
    }> {
        const [user, count] = await Promise.all([
            this.userRepository.list(page, limit),
            this.userRepository.count()
        ])

        return {
            users: user.map(user => new ReturnUserDto(user)),
            count,
            limit,
            page
        }
    }
}