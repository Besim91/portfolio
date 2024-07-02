import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  controll = inject(ControllService);
  isSidebarOpen = false;

  ngOnInit() {
    this.controll.sidebarOpen$.subscribe((currentBoolean) => {
      this.isSidebarOpen = currentBoolean;
    });
  }
}
