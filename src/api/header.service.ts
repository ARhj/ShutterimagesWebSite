import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import { header, headerSchema, SubItems } from "../models/header";

@Injectable()
export class headerService{

    public getHeaders() : header{
        let obj : header = new header();
            obj.items = new Map<string, headerSchema>();
        
        let headerschemaOfHome = new headerSchema();
            headerschemaOfHome.url = "/home";
            headerschemaOfHome.subitems = null;

        let headerschemaOfGallery = new headerSchema();
            headerschemaOfGallery.url = "/gallery";
            headerschemaOfGallery.subitems = new SubItems();
            headerschemaOfGallery.subitems.items.set("Gallery1","/Gallery1");
             

            obj.items.set("Gallery", headerschemaOfGallery);

        return obj;
    }
}