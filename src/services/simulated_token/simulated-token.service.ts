import { Injectable } from "@angular/core";

@Injectable()
export class SimulatedToken {
    public getToken():String {
        return 'YSBzaW11bGF0ZWQgdG9rZW4uIGhhaGEuIDpE';
    };

    /**
     * Try Connection
     * 
     * @param {String} token 
     * @returns {Boolean} Connected?
     * 
     * @memberOf SimulatedToken
     */
    public connect(token:String):Boolean {
        return Boolean(this.getToken() === token);
    };

}