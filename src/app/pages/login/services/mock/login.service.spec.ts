import { of } from "rxjs";
import { LoginRequest } from "../../enter/model/login-request.model";
import { UserRequest } from "../../create/model/user-request";
import { VerifyTokenRequest } from "../../forgot-password/model/verify-token-request.model";
import { ChangePasswordRequest } from "../../forgot-password/model/change-password-request.model";

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

