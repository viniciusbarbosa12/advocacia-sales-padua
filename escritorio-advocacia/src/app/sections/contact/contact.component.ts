import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup;
  success = false;
  error = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendMessage() {
    if (this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) =>
      formData.append(key, value as string)
    );
    formData.append('_subject', 'Novo contato do site da advogada');

    this.http.post('https://formspree.io/f/xldbajew', formData).subscribe({
      next: () => {
        this.success = true;
        this.form.reset();
      },
      error: () => {
        this.error = true;
      },
    });
  }
}
