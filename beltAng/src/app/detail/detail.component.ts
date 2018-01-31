import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  pet: any;
  likeBoolean: boolean;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Grab id from url parameter
      this.id = params['id'];
      this.getOnePet(this.id);
    })
    // On load enable likeBoolean to true
    this.likeBoolean = true;
  }
  // Retrieving the detail of specific pet
  getOnePet(id) {
    let observable = this._httpService.getOnePet({id: id});
    observable.subscribe(data => {
      console.log(data);
      this.pet = {
        name: data[0]['Name'],
        description: data[0]['Description'],
        type: data[0]['Type'],
        likes: data[0]['Like'],
        skills1: data[0]['Skill_1'],
        skills2: data[0]['Skill_2'],
        skills3: data[0]['Skill_3']
      }
    })
  }
  adopt() {
    let observable = this._httpService.adopt({id: this.id});
    observable.subscribe(data => {
      this.router.navigate(['/home']);
    })
  }
  like() {
    let observable = this._httpService.like({id: this.id});
    observable.subscribe(data => {
      console.log(data);
      this.pet = {
        name: data[0]['Name'],
        description: data[0]['Description'],
        type: data[0]['Type'],
        likes: data[0]['Like'],
        skills1: data[0]['Skill_1'],
        skills2: data[0]['Skill_2'],
        skills3: data[0]['Skill_3']
      }
      // Turn off/Disable like button after one click
      this.likeBoolean = false;
    })
  }

}
