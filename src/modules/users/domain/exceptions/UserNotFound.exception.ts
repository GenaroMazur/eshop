import UserException from "../../../../share/exceptions/UserException";

export default class UserNotFoundException extends UserException {
    constructor(id: number) {
        super(`Usuario con id ${id} no encontrado`);
        this.name = "UserNotFoundException";
    }
}