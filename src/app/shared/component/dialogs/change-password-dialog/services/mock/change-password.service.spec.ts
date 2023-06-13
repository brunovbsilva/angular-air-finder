import { of } from "rxjs";
import { InternalChangePasswordRequest } from "../../model/InternalChangePasswordRequest.model";

export class ChangePasswordServiceSpec {
    public changePassword(request: InternalChangePasswordRequest) {
        return of({});
    }
}