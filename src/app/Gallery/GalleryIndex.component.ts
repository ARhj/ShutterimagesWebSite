import { Component} from "@angular/core";
@Component({
    selector:'gallery',
    templateUrl:'./GalleryIndex.component.html'
})
export class GalleryIndexComponent
{
    imageSrc : string;
    imageNames : string[]= [];
  
    public imageClicked1(obj : any) : void
    {
        this.imageSrc = obj;
    }
}