import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InitialPageComponent } from "../Components/initial-page/initial-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<app-initial-page/>`,
    imports: [CommonModule, RouterOutlet, InitialPageComponent]
})
export class AppComponent {
  title = 'angular-crud-study';
}
