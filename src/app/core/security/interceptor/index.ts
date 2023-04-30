import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppHttpInterceptor } from "./app.http-interceptor";
import { AppSnackbarInterceptor } from "./app.snackbar-interceptor";
import { AppDevInterceptor } from "./app.dev-interceptor";

export const HttpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AppSnackbarInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: AppDevInterceptor, multi: true },
]