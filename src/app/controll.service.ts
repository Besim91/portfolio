import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControllService {
  sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  isBurgerMenuVisible = true;

  

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
    { img: '/assets/img/icons/material.png', title: 'Material design' },
  ];

  constructor() {}

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    this.loadBurgerMenuImages();
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
  }

  loadBurgerMenuImages() {
    this.images.forEach((imageUrl, index) => {
      setTimeout(() => {
        let img = document.getElementById(
          'burgerMenuSlide'
        ) as HTMLImageElement;
        img.src = imageUrl;
      }, 125 * index);
    });
  }
}
