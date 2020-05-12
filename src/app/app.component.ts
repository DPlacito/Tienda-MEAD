import { Component } from '@angular/core';
import { TitleService } from './core/core.module';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-Tienda';


  constructor(private titleService: TitleService) {

  }
}
