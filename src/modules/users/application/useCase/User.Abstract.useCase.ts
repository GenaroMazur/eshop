import UserRepository from "../../domain/interface/User.repository";

export default abstract class UserAbstractUseCase {
    constructor(protected readonly userRepository: UserRepository) {
    }

    abstract execute(...args: any[]): Promise<any>;
}