import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnterComponent } from "./enter/enter.component";
import { CreateComponent } from "./create/create.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const routes: Routes = [
    { path: 'login', component: EnterComponent },
    { path: 'create', component: CreateComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '**', redirectTo: 'login' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}