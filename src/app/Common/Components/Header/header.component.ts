import { Component} from "@angular/core";
import { headerService } from "../../../../api/header.service";
@Component({
    selector:'header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent
{
    public constructor(private headerService : headerService){

    }
}