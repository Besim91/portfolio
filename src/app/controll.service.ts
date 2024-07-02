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
