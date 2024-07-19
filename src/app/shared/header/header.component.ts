import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  translate = inject(TranslateService);
  controll = inject(ControllService);

  switch(event: Event) {
    this.controll.switchLanguage(event);
  }

  toggleSidebar() {
    this.controll.toggleSidebar();
  }
}
