import { IProfile } from "../interfaces/profile.interface";

export class SessionUser {
    profile: IProfile
    scopes: string[];
    
    constructor(
        profile: IProfile,
        scopes: string[] = []
    ) {
        this.profile = profile;
        this.scopes = scopes;
    }
}