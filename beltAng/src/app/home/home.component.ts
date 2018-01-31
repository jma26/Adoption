import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllPets();
  }
  getAllPets() {
    let observable = this._httpService.getAllPets();
    observable.subscribe(data => {
      this.pets = data;
      console.log(data);
    })
  }
  // Reroute to new component
  routeToNew() {
    this.router.navigate(['/new']);
  }


}
