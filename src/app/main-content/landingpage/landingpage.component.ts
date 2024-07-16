import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss', './responsive.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LandingpageComponent implements OnInit {
  currentPixel!: number;

  constructor() {}

  ngOnInit(): void {
    this.updatePixelWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updatePixelWidth();
  }

  updatePixelWidth(): void {
    this.currentPixel = window.innerWidth;
  }
}
