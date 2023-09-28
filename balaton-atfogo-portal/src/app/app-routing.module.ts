import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzaladatokComponent } from './szaladatok/szaladatok.component';
import { AppComponent } from './app.component';
import { CsapadekComponent } from './csapadek/csapadek.component';
import { LeghomersekletComponent } from './leghomerseklet/leghomerseklet.component';
import { VizmertekComponent } from './vizmertek/vizmertek.component';
import { ZminosegComponent } from './zminoseg/zminoseg.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'szeladatok', component: SzaladatokComponent},
  { path: 'csapadek', component: CsapadekComponent},
  { path: 'leghomerseklet', component: LeghomersekletComponent},
  { path: 'vizmercek', component: VizmertekComponent},
  { path: 'vizminoseg', component: ZminosegComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
