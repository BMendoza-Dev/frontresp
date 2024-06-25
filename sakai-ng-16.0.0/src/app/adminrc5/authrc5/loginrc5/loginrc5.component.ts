import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-loginrc5',
  templateUrl: './loginrc5.component.html',
  styleUrls: ['./loginrc5.component.scss']
})
export class Loginrc5Component {
  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) { }
}
