import {
  Component,
  HostListener,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: [
    './landingpage.component.scss',
    './responsive.component.scss',
    './responsivegerman.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LandingpageComponent implements OnInit {
  currentPixel!: number;
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private controllService = inject(ControllService);

  ngOnInit(): void {
    this.updatePixelWidth();
    this.loadResponsiveStyles(this.controllService.selectedLanguage);
    this.controllService.languageChangeSubject.subscribe((language) => {
      console.log(`Language changed to: ${language}`); // Debug log
      this.loadResponsiveStyles(language);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updatePixelWidth();
  }

  updatePixelWidth(): void {
    this.currentPixel = window.innerWidth;
  }

  loadResponsiveStyles(language: string): void {
    console.log(`Loading responsive styles for language: ${language}`); // Debug log
    const head = this.document.getElementsByTagName('head')[0];
    const existingLink = this.document.getElementById(
      'dynamic-responsive-style'
    );
    if (existingLink) {
      this.renderer.removeChild(head, existingLink);
    }

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'type', 'text/css');

    // Random number to bypass cache
    const randomCacheBuster = Math.floor(Math.random() * 10000);
    const href =
      language === 'en'
        ? `./responsive.component.scss?v=${randomCacheBuster}`
        : `./responsivegerman.component.scss?v=${randomCacheBuster}`;

    console.log(`Setting href for stylesheet: ${href}`); // Debug log
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.setAttribute(link, 'id', 'dynamic-responsive-style');
    this.renderer.listen(link, 'load', () => {
      console.log(`Stylesheet loaded successfully: ${link.href}`); // Debug log
    });
    this.renderer.listen(link, 'error', (event) => {
      console.error(`Error loading stylesheet: ${link.href}`, event); // Debug log
    });
    this.renderer.appendChild(head, link);
    console.log(`Stylesheet appended: ${link.href}`); // Debug log
  }
}
