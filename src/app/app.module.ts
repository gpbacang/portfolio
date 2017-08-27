import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

import { ChartsModule } from 'ng2-charts';
import { NguiMapModule } from '@ngui/map';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBwL_Dj4L5WtUZ89_tjfK61E1dpwROj-nQ'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
