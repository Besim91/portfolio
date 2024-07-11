import { Component } from '@angular/core';
import { FormularComponent } from './formular/formular.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormularComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
