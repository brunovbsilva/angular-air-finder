import { Injectable } from "@angular/core";
import { InternalChangePasswordRequest } from "../model/InternalChangePasswordRequest.model";
import { InternalUpdatePasswordForm } from "src/app/shared/form/components/internal-update-password/internal-update-password.form";

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordDialogMapper {
    public mapInternalChangePasswordRequestForm(form: InternalUpdatePasswordForm): InternalChangePasswordRequest {
        return {
            currentPassword: form.currentPassword.value,
            newPassword: form.newPassword.value
        };
    }
}