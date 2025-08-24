import UserAbstractUseCase from "./User.Abstract.useCase";

export default class FindByUserIdUseCase extends UserAbstractUseCase {
    override execute(): Promise<any> {
        return Promise.resolve(undefined);
    }
}