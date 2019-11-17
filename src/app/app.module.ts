import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from "@agm/core";

//#region CustomCreated Components

//#region About Us Components

import { AboutUsIntroductionComponent } from "../app/About/Components/AboutUsIntroduction/AboutUsIntroduction.component";
import { OurTeamComponent } from "../app/About/Components/OurTeam/OurTeam.component";
import { AboutIndexComponent } from './About/aboutIndex.component';
//#endregion

//#region Common Components
import { FooterComponent } from "../app/Common/Components/Footer/footer.component";
import { HeaderComponent } from "../app/Common/Components/Header/header.component";
//#endregion

//#region Contact Detail Components
import { ContactDetailsComponent } from "../app/Contact/Components/ContactDetails/ContactDetails.component";
import { ContactIntroductionComponent } from "../app/Contact/Components/ContactIntroduction/ContactIntroduction.component";
import { GetInTouchComponent } from "../app/Contact/Components/GetInTouch/GetInTouch.component";
import { MapsComponent } from "../app/Contact/Components/Maps/Maps.component";
import { ContactIndexComponent } from './Contact/ContactIndex.component';
//#endregion

//#region  Gallery Components
import { GalleryIntroductionComponent } from "../app/Gallery/Components/GalleryIntroduction/GalleryIntroduction.component";
import { GalleryIndexComponent } from './Gallery/GalleryIndex.component';
//#endregion

//#region Home components
import { GallerySimpleTextComponent } from "../app/Home/Components/GallerySimpleText/GallerySimpleText.component";
import { HomeIntroductionComponent } from "../app/Home/Components/HomeIntroduction/HomeIntroduction.component";
import { OneLinerTextComponent } from "../app/Home/Components/OneLinerText/OneLinerText.component";
import { OneLinerWithPhotoComponent } from "../app/Home/Components/OneLinerWithPhoto/OneLinerWithPhoto.component";
import { HomeIndexComponent} from './Home/homeIndex.component';
import { GalleryComponent } from './Common/Components/Gallery/Gallery.component';
import { LatestShootComponent } from './Home/Components/LatestShoot/latestShoot.component';
import { CurrentYearClickedComponent } from './Home/Components/CurrentYearClicked/CurrentYearClicked.component';

//#endregion

//#region Service components
import { ServicesIntroductionComponent } from "../app/Services/Components/ServicesIntroduction/ServicesIntroduction.component";
import { ServicesOneLinerTextComponent } from "../app/Services/Components/ServicesOneLinerText/ServicesOneLinerText.component";
import { ServicesIndexComponent } from './Services/ServicesIndex.component';
//#endregion

//#endregion

//#region CustomCreaed Modules
import { modelModule } from "../models/models.module";
import { apiModule } from "../api/api.module";
//#endregion

import { AppComponent } from './app.component';
import { RouterModule , Route, Router} from '@angular/router';
import { routes } from './app.routing';
import { ImageViewerComponent } from './Common/Components/ImageViewer/imageViewer.component';


@NgModule({
  declarations: [
    AppComponent, ServicesIntroductionComponent, ServicesOneLinerTextComponent,
    GallerySimpleTextComponent, HomeIntroductionComponent, OneLinerTextComponent, OneLinerWithPhotoComponent,
    GalleryIntroductionComponent, ContactDetailsComponent, ContactIntroductionComponent, GetInTouchComponent, MapsComponent,
    FooterComponent, HeaderComponent, AboutUsIntroductionComponent, OurTeamComponent, HomeIndexComponent,
    GalleryIndexComponent, GalleryComponent,ServicesIndexComponent, AboutIndexComponent,
    ContactIndexComponent, LatestShootComponent , CurrentYearClickedComponent,ImageViewerComponent
  ],
  imports: [
    BrowserModule, modelModule, apiModule,RouterModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDNFYYvefpNLyPaORv0LBWnQx52_IG-dFU'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }