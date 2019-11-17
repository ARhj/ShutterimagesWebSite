import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CommonService
{
    public obj : Data = new Data();
}

export class Data
{
    public imagesrc : string;
}