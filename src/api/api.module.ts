import { NgModule} from "@angular/core";
import { modelModule } from "../models/models.module";
import { headerService } from "./header.service";

@NgModule({
    imports : [modelModule],
    providers : [headerService]
})
export class apiModule
{

}