import RepositoryInterface from "../../../../share/interfaces/Repository.interface";
import User from "../entity/User";

export default interface UserRepository extends RepositoryInterface<User> {

    list(page: number, limit: number): Promise<User[]>;

    count(): Promise<number>;

}