import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './fieldset.component.html',
  styleUrl: './fieldset.component.scss'
})
export class FieldsetComponent {
  @Input() legend = '';
  @Input() isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
