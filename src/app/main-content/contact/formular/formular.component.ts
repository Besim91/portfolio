import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss'],
})
export class FormularComponent {
  http = inject(HttpClient); // In der app.config muss der Provider dazu eingefügt werden

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false as boolean,
  };

  mailTest = true;
  formSubmitted = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text' as const,
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;

    const formElement = document.querySelector('form');
    if (ngForm.valid) {
      formElement?.classList.add('submittedAllValid');
    } else {
      formElement?.classList.remove('submittedAllValid');
    }

    if (ngForm.valid && !this.mailTest) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formSubmitted = false; // Reset formSubmitted after successful submission
            formElement?.classList.remove('submittedAllValid'); // Remove class after reset
            this.contactData.privacy = false; // Reset the privacy field
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.valid && this.mailTest) {
      ngForm.resetForm();
      this.formSubmitted = false; // Reset formSubmitted after successful test submission
      formElement?.classList.remove('submittedAllValid'); // Remove class after reset
      this.contactData.privacy = false; // Reset the privacy field
    }
  }

  allFieldsValid(): boolean {
    return (
      !!this.contactData.name &&
      !!this.contactData.email &&
      !!this.contactData.message &&
      this.contactData.privacy
    );
  }
}
