import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.contactUsForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      mobileNumber: [null, Validators.compose([Validators.required])],
      subject: [null, Validators.compose([Validators.required])],
      message: [null, Validators.compose([Validators.required])],
    });
  }

  

}
