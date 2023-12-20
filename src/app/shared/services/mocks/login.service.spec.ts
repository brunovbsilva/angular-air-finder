import { of } from "rxjs";
import { LoginRequest } from "../models/user/requests/login-request.model";
import { UserRequest } from "../models/user/requests/user-request";
import { VerifyTokenRequest } from "../models/user/requests/verify-token-request.model";
import { ChangePasswordRequest } from "../models/user/requests/change-password-request.model";

export class LoginServiceSpec {

  public login(request: LoginRequest) {
    return of({
        success: true,
        error: null
    });
  }

  public createUser(request: UserRequest) {
    return of({
        success: true,
        error: null
    });
  }

  public sendToken(email: string) {
    return of({
        success: true,
        error: null
    });
  }

  public verifyToken(request: VerifyTokenRequest) {
    return of({
        success: true,
        error: null
    });
  }
  
  public changePasswordToken(request: ChangePasswordRequest) {
    return of({
        success: true,
        error: null
    });
  }
}

