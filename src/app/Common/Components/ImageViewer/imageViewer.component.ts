import { Component, Input, OnInit } from "@angular/core";
import { CommonService } from "../../Services/common.service";
import { Data } from "@angular/router";
@Component({
    selector:'imageViewer',
    templateUrl:'./imageViewer.component.html',
    providers: [CommonService]
})
export class ImageViewerComponent implements OnInit
{ 
    public constructor(private service : CommonService)
    {

    } 

    ngOnInit(){
        
    }

    @Input()
    imageSrc:string;
}