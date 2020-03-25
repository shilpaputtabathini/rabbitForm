import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getInTouch: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    $('#homeSlider').carousel({ 
      interval: 150000    
    })
    
    this.getInTouch = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      mobileNumber: [null, Validators.compose([Validators.required])]
    });
  }

}
