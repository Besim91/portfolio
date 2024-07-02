import { Component, inject } from '@angular/core';
import { ControllService } from './../../controll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent {
  controll = inject(ControllService);

  constructor() {}

  toggleSidebar() {
    this.controll.toggleSidebar();
  }
}
