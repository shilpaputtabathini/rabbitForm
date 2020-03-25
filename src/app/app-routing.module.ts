import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { RabbitFarmingComponent } from './shared/rabbit-farming/rabbit-farming.component';
import { ImageGalleryComponent } from './shared/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './shared/video-gallery/video-gallery.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'aboutUs', component:AboutUsComponent},
  { path: 'contactUs', component:ContactUsComponent},
  { path: 'rabbitFarming', component:RabbitFarmingComponent},
  { path: 'imageGallery', component:ImageGalleryComponent},
  { path: 'videoGallary', component:VideoGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
