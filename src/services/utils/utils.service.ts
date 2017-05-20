import { Injectable } from "@angular/core";

@Injectable()
export class UtilsApp {
    public screenWidth():Number {
        return window.innerWidth - 42;
    };
    public screenHeight():Number {
        return 380;
    };

}