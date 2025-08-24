import UserAbstractUseCase from "./User.Abstract.useCase";

export default class UpdateUserUseCase extends UserAbstractUseCase {
    override execute(): Promise<any> {
        return Promise.resolve(undefined);
    }
}