import { CredentialsForm } from "src/app/shared/form/components/credentials/credentials.form";
import { PersonalForm } from "src/app/shared/form/components/personal-information/personal.form";
import { UserRequest } from "../model/user-request";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CreateMapper {
    public mapCreateForm(personal: PersonalForm, credentials: CredentialsForm): UserRequest {
        return { 
            ...personal.getValues(), 
            ...credentials.getValues() 
        };
    }
}