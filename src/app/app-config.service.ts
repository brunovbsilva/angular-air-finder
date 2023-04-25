import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class AppConfig {
    url_api?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private configs?: AppConfig;

    constructor(private http: HttpClient) {}

    public loadAppConfig() {
        return new Promise((resolve) => {
            let url_api = "./assets/config.json";

            this.http.get(url_api).subscribe(data =>  {
                this.configs = data
                resolve(data);
            })
        })
    }
    
    get config() {
        return this.configs;
    }
}