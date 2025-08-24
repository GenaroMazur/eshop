import UserAbstractUseCase from "./User.Abstract.useCase";
import UserNotFoundException from "../../domain/exceptions/UserNotFound.exception";
import ReturnUserDto from "../dto/output/ReturnUser.dto";

export default class FindByUserIdUseCase extends UserAbstractUseCase {
    override async execute(id: number): Promise<ReturnUserDto> {
        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new UserNotFoundException(id)
        }

        return new ReturnUserDto(user)
    }
}