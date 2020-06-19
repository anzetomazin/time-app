import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/token.service';

@Component({
  selector: 'app-token-settings',
  templateUrl: './token-settings.component.html',
  styleUrls: ['./token-settings.component.css']
})
export class TokenSettingsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private tokenService: TokenService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      token: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Z\-]*')
        ]
      ]
    });
}

  submitToken(formData): void {
    const token = formData.token;
    if (token !== '' && token !== null && token.length >= 10) {
      this.tokenService.setToken(formData.token);
      this.form.reset();
    }
  }
}
