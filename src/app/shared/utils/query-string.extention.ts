export class QueryString {
    public static toString(obj: any): string {
        const params = new URLSearchParams();
        for (const key in obj) {
            params.set(key, obj[key]);
        }
        return params.toString();
    }
}