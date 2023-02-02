import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';



const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'section', component: SectionComponent },
  { path: 'footer', component: FooterComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    SectionComponent,
    FooterComponent,
    SliderComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
