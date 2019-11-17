import { Component } from "@angular/core";
@Component({
    templateUrl:'./homeIndex.component.html',
    styleUrls:['homeIndex.component.scss'],
    selector :'home'
})
export class HomeIndexComponent{

    imageSrc : string;
    imageNames : string[]= [];
  
    public imageClicked1(obj : any) : void
    {
        this.imageSrc = obj;
    }
}