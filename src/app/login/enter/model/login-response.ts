import { BaseResponse } from "src/app/shared/models/response/base-response";

export class LoginResponse extends BaseResponse {
    token: string = '';
}