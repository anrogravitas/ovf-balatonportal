import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css?v=1']
})
export class AppComponent {
  title = 'balaton-atfogo-portal';
  menuItems = [
    { label: 'Szél adatok', link: '/szaladatok' },
  ];
}
