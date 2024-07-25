import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ControllService {
  sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  isBurgerMenuVisible = true;
  selectedLanguage: string = 'en';
  languageChangeSubject = new BehaviorSubject<string>(this.selectedLanguage);

  images = [
    './../../../assets/img/forms/burger menu.png',
    './../../../assets/img/forms/property-close1.png',
    './../../../assets/img/forms/property-close2.png',
    './../../../assets/img/forms/property-close3.png',
  ];

  skillzArray = [
    { img: '/assets/img/icons/angular.png', title: 'Angular' },
    { img: '/assets/img/icons/ts.png', title: 'TypeScript' },
    { img: '/assets/img/icons/Javascript.png', title: 'JavaScript' },
    { img: '/assets/img/icons/html.png', title: 'HTML' },
    { img: '/assets/img/icons/firebase.png', title: 'Firebase' },
    { img: '/assets/img/icons/gitskillz.png', title: 'GIT' },
    { img: '/assets/img/icons/css.png', title: 'CSS' },
    { img: '/assets/img/icons/api.png', title: 'Rest-Api' },
    { img: '/assets/img/icons/scrum.png', title: 'Scrum' },
    { img: '/assets/img/icons/material.png', title: 'Material Design' },
  ];

  constructor(private translate: TranslateService) {}

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    this.loadBurgerMenuImages();
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
    this.toggleBodyScroll(!this.isBurgerMenuVisible);
  }

  toggleBodyScroll(disable: boolean) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  loadBurgerMenuImages() {
    this.images.forEach((imageUrl, index) => {
      setTimeout(() => {
        let img = document.getElementById(
          'burgerMenuSlide'
        ) as HTMLImageElement;
        if (img) {
          img.src = imageUrl;
        }
      }, 125 * index);
    });
  }

  setStandardLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(language: string): void {
    if (language && language !== this.selectedLanguage) {
      this.translate.use(language);
      this.selectedLanguage = language;
      this.languageChangeSubject.next(language); // Notify language change
      console.log(this.selectedLanguage); // Check
    }
  }

  linkToTop() {
    window.scroll(0, 0);
  }
}
