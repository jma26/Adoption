import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  pet: any;
  pets: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Grab id from url parameter
      this.id = params['id'];
      this.getOnePet(this.id);
    })
  }
  // Retrieve data of specific pet from database and fill in the input values
  getOnePet(id) {
    let observable = this._httpService.getOnePet({id: id});
    observable.subscribe(data => {
      console.log(data);
      this.pet = {
        name: data[0]['Name'],
        description: data[0]['Description'],
        type: data[0]['Type'],
        likes: data[0]['Like'],
        skill1: data[0]['Skill_1'],
        skill2: data[0]['Skill_2'],
        skill3: data[0]['Skill_3']
      }
    })
  }
  //Rerout to details component of specific pet
  cancel() {
    this.router.navigate(['/details', this.id]);
  }
  //Update pet
  updatePet() {
    let observable = this._httpService.updatePet(this.pet, this.id);
    observable.subscribe(data => {
      console.log(data);
      // If validation error shows
      if (data['errors']) {
        this.errors = data['message'];
        // If duplicate error shows
      } else if (data['code'] === 11000) {
        this.errors = 'Duplicate pet name found: Error';
      }
      // If no errors, reroute to details of specific pet
       else {
        this.router.navigate(['/details', this.id]);
      }
    })
  }

}
