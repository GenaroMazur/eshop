import UserAbstractUseCase from "./User.Abstract.useCase";

export default class DeleteUserUseCase extends UserAbstractUseCase {
    override execute(): Promise<any> {
        return Promise.resolve(undefined);
    }
}