import UserRepository from "../../domain/interface/User.repository";

export default abstract class UserAbstractUseCase {
    constructor(protected readonly userRepository: UserRepository) {
    }

    abstract execute(): Promise<any>;
}