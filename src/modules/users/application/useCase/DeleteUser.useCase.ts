import UserAbstractUseCase from "./User.Abstract.useCase";
import UserNotFoundException from "../../domain/exceptions/UserNotFound.exception";

export default class DeleteUserUseCase extends UserAbstractUseCase {
    override async execute(id: number): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new UserNotFoundException(id);
        }

        await this.userRepository.delete(user)
    }
}