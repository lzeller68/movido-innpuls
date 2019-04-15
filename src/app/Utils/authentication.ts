import {repeat} from 'rxjs/operators';

export class Authentication {
    token_type: string;
    access_token: string;

    constructor(response: any) {
        this.token_type = response.token_type;
        this.access_token = response.access_token;
}
}
