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
  styleUrls: ['./landingpage.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LandingpageComponent implements OnInit {
  currentPixel!: number;
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private controllService = inject(ControllService);

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePixelWidth();
    }, 200);
    this.loadResponsiveStyles(this.controllService.selectedLanguage);
    this.controllService.languageChangeSubject.subscribe((language) => {
      this.loadResponsiveStyles(language);
    });
  }

  constructor() {
    setTimeout(() => {
      this.updatePixelWidth();
    }, 200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updatePixelWidth();
    console.log('Aktuell Bildschirmbreite1:' + this.currentPixel);
  }

  updatePixelWidth(): void {
    this.currentPixel = window.innerWidth;
    console.log('Aktuell Bildschirmbreite2:' + this.currentPixel);
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
        ? `./assets/css/responsive.component.css?v=${randomCacheBuster}`
        : `./assets/css/responsivegerman.component.css?v=${randomCacheBuster}`;

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
