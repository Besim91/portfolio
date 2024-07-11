import { Component, inject, HostListener } from '@angular/core';
import { ControllService } from './../../controll.service';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  controll = inject(ControllService);
  currentPixel!: number;

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
