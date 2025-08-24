import UserAbstractUseCase from "./User.Abstract.useCase";

export default class CreateUserUseCase extends UserAbstractUseCase {
    override execute(): Promise<any> {
        return Promise.resolve(undefined);
    }
}