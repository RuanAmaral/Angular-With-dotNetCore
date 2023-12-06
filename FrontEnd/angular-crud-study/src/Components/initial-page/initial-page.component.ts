import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {

}
