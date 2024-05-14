import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldsetComponent } from "./fieldset/fieldset.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FieldsetComponent]
})
export class AppComponent {
  legend: string = '';
  isOpen: boolean = true;
}
