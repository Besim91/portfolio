import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectReverseComponent } from './project-reverse/project-reverse.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, ProjectReverseComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
