import { Route , RouterModule } from '@angular/router';
import { HomeIndexComponent } from './Home/homeIndex.component';
import { GalleryIndexComponent } from './Gallery/GalleryIndex.component';
import { ServicesIndexComponent } from './Services/ServicesIndex.component';
import { AboutIndexComponent } from './About/aboutIndex.component';
import { ContactIndexComponent } from './Contact/ContactIndex.component';

export const routes = [
    {path : 'home', component : HomeIndexComponent},
    {path : 'gallery', component : GalleryIndexComponent},
    {path : 'services', component : ServicesIndexComponent},
    {path : 'about', component : AboutIndexComponent},
    {path : 'contact', component : ContactIndexComponent},
    {path : '**', component : HomeIndexComponent}
];
