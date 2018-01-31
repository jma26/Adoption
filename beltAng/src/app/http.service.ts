import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  //Get all pets
  getAllPets() {
    console.log('Getting all pets @service');
    return this._http.get('/pet');
  }
  // Add new pet
  addPet(pet) {
    console.log('Adding new pet to database @service');
    return this._http.post('/pet', pet);
  }
  getOnePet(id) {
    console.log('Grabbing specific pet from database @service');
    console.log(id.id);
    return this._http.get('/pet/' + id.id);
  }
  adopt(id) {
    console.log('Adopting this pet from database @service');
    return this._http.delete('/pet/' + id.id);
  }
  like(id) {
    console.log('Liking this pet from database @service');
    return this._http.get('/pet/like/' + id.id);
  }
  updatePet(pet, id) {
    console.log(pet);
    console.log('Updating this pet from database @service');
    return this._http.put(`/pet/${id}`, pet);
  }
}
