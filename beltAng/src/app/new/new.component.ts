import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newPet = {
      name: '',
      type: '',
      description: '',
      skill1: '',
      skill2: '',
      skill3: ''
    } 
  }
  // Add new pet
  addPet() {
    console.log(this.newPet);
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe( data => {
      // Code 110000 => Duplicate error found
      if (data['code'] === 11000) {
        this.errors = 'Duplicate pet names found: ERROR';
      // If minlength or requirement validation is present
      } else if (data['errors']) {
        this.errors = data['message'];
      // If no errors, reroute
      } else {
        this.router.navigate(['/home']);
      }
    })
  }
  // Cancel button to reroute
  cancel() {
    this.router.navigate(['/home']);
  }

}
