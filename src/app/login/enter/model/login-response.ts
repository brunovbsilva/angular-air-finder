import { BaseResponse } from "src/app/shared/models/response/base-response";
import { User } from "./user.model";

export class LoginResponse extends BaseResponse {
    user: User = new User();
}