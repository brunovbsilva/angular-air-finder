import { BaseResponse } from "../../../../shared/models/response/base-response";

export class LoginResponse extends BaseResponse {
    token: string = '';
}