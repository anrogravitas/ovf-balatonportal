import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SzaladatokComponent } from './szaladatok/szaladatok.component';
import { CsapadekComponent } from './csapadek/csapadek.component';
import { LeghomersekletComponent } from './leghomerseklet/leghomerseklet.component';
import { VizmertekComponent } from './vizmertek/vizmertek.component';
import { ZminosegComponent } from './zminoseg/zminoseg.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SzaladatokComponent,
    CsapadekComponent,
    LeghomersekletComponent,
    VizmertekComponent,
    ZminosegComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
