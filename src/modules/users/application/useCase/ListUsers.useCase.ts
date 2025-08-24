import UserAbstractUseCase from "./User.Abstract.useCase";

export default class ListUsersUseCase extends UserAbstractUseCase {
    override execute(): Promise<any> {
        return Promise.resolve(undefined);
    }
}