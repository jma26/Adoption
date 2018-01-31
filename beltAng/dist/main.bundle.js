webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("../../../../../src/app/new/new.component.ts");
var detail_component_1 = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var routes = [
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'details/:id', component: detail_component_1.DetailComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', redirectTo: '/home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <h1> Pet Shelter </h1>\n  <router-outlet></router-outlet>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("../../../../../src/app/new/new.component.ts");
var detail_component_1 = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                detail_component_1.DetailComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <p> <a [routerLink]='[\"home\"]'> Home </a> </p>\n  <div>\n    <h1> Details about {{ pet.name }} </h1>\n    <h2> Pet Type: {{ pet.type }} </h2>\n    <h2> Description: {{ pet.description }} </h2> \n    <h2> {{ pet.name }}'s skills: {{ pet.skills1 }}, {{ pet.skills2 }}, {{ pet.skills3 }} </h2> \n    <h2> Likes: {{ pet.likes }} </h2>\n    <button (click)='like()' *ngIf='likeBoolean'> Like this pet </button>\n    <button (click)='adopt()'> Adopt this pet! </button>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(_httpService, router, route) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Grab id from url parameter
            _this.id = params['id'];
            _this.getOnePet(_this.id);
        });
        // On load enable likeBoolean to true
        this.likeBoolean = true;
    };
    // Retrieving the detail of specific pet
    DetailComponent.prototype.getOnePet = function (id) {
        var _this = this;
        var observable = this._httpService.getOnePet({ id: id });
        observable.subscribe(function (data) {
            console.log(data);
            _this.pet = {
                name: data[0]['Name'],
                description: data[0]['Description'],
                type: data[0]['Type'],
                likes: data[0]['Like'],
                skills1: data[0]['Skill_1'],
                skills2: data[0]['Skill_2'],
                skills3: data[0]['Skill_3']
            };
        });
    };
    DetailComponent.prototype.adopt = function () {
        var _this = this;
        var observable = this._httpService.adopt({ id: this.id });
        observable.subscribe(function (data) {
            _this.router.navigate(['/home']);
        });
    };
    DetailComponent.prototype.like = function () {
        var _this = this;
        var observable = this._httpService.like({ id: this.id });
        observable.subscribe(function (data) {
            console.log(data);
            _this.pet = {
                name: data[0]['Name'],
                description: data[0]['Description'],
                type: data[0]['Type'],
                likes: data[0]['Like'],
                skills1: data[0]['Skill_1'],
                skills2: data[0]['Skill_2'],
                skills3: data[0]['Skill_3']
            };
            // Turn off/Disable like button after one click
            _this.likeBoolean = false;
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_2.Router, router_1.ActivatedRoute])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;


/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Edit this pet </h1> \n  <form (submit)='updatePet()'>\n      <p> {{ pet | json }} </p>\n      <label> Pet name: </label>\n      <input type='text' name='name' [(ngModel)]='pet[\"name\"]'>\n      <label> Pet type: </label>\n      <input type='text' name='type' [(ngModel)]='pet[\"type\"]'>\n      <label> Description: </label>\n      <input type='text' name='description' [(ngModel)]='pet[\"description\"]'>\n      <label> Skills (optional)</label>\n      <input type='text' name='skill1'[(ngModel)]='pet[\"skill1\"]'>\n      <input type='text' name='skill2'[(ngModel)]='pet[\"skill2\"]'>\n      <input type='text' name='skill3' [(ngModel)]='pet[\"skill3\"]'>\n      <button> Add Pet </button>\n      <input type='button' value='Cancel' (click)='cancel()'>\n    </form>\n    <p> {{ errors }} </p>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, router, route) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Grab id from url parameter
            _this.id = params['id'];
            _this.getOnePet(_this.id);
        });
    };
    // Retrieve data of specific pet from database and fill in the input values
    EditComponent.prototype.getOnePet = function (id) {
        var _this = this;
        var observable = this._httpService.getOnePet({ id: id });
        observable.subscribe(function (data) {
            console.log(data);
            _this.pet = {
                name: data[0]['Name'],
                description: data[0]['Description'],
                type: data[0]['Type'],
                likes: data[0]['Like'],
                skill1: data[0]['Skill_1'],
                skill2: data[0]['Skill_2'],
                skill3: data[0]['Skill_3']
            };
        });
    };
    //Rerout to details component of specific pet
    EditComponent.prototype.cancel = function () {
        this.router.navigate(['/details', this.id]);
    };
    //Update pet
    EditComponent.prototype.updatePet = function () {
        var _this = this;
        var observable = this._httpService.updatePet(this.pet, this.id);
        observable.subscribe(function (data) {
            console.log(data);
            // If validation error shows
            if (data['errors']) {
                _this.errors = data['message'];
                // If duplicate error shows
            }
            else if (data['code'] === 11000) {
                _this.errors = 'Duplicate pet name found: Error';
            }
            else {
                _this.router.navigate(['/details', _this.id]);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_2.ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <h1> These pets are looking for a home! </h1>\n  <button (click)='routeToNew()'> Add a pet to the shelter </button>\n  <table>\n    <tr>\n      <th> Name </th>\n      <th> Type </th>\n      <th> Actions </th>\n    </tr>\n    <tr *ngFor='let pet of pets'>\n      <td> {{ pet.Name }} </td>\n      <td> {{ pet.Type }} </td>\n      <td> <a [routerLink]=\"['/details', pet._id]\"> Details </a> <a [routerLink]=\"['/edit', pet._id]\"> Edit </a></td> \n    </tr>\n  </table>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllPets();
    };
    HomeComponent.prototype.getAllPets = function () {
        var _this = this;
        var observable = this._httpService.getAllPets();
        observable.subscribe(function (data) {
            _this.pets = data;
            console.log(data);
        });
    };
    // Reroute to new component
    HomeComponent.prototype.routeToNew = function () {
        this.router.navigate(['/new']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //Get all pets
    HttpService.prototype.getAllPets = function () {
        console.log('Getting all pets @service');
        return this._http.get('/pet');
    };
    // Add new pet
    HttpService.prototype.addPet = function (pet) {
        console.log('Adding new pet to database @service');
        return this._http.post('/pet', pet);
    };
    HttpService.prototype.getOnePet = function (id) {
        console.log('Grabbing specific pet from database @service');
        console.log(id.id);
        return this._http.get('/pet/' + id.id);
    };
    HttpService.prototype.adopt = function (id) {
        console.log('Adopting this pet from database @service');
        return this._http.delete('/pet/' + id.id);
    };
    HttpService.prototype.like = function (id) {
        console.log('Liking this pet from database @service');
        return this._http.get('/pet/like/' + id.id);
    };
    HttpService.prototype.updatePet = function (pet, id) {
        console.log(pet);
        console.log('Updating this pet from database @service');
        return this._http.put("/pet/" + id, pet);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <h1> Know of a pet needing a home? </h1>\n  <form (submit)='addPet()'>\n    <p> {{ newPet | json }} </p>\n    <label> Pet name: </label>\n    <input type='text' name='name' [(ngModel)]='newPet[\"name\"]'>\n    <label> Pet type: </label>\n    <input type='text' name='type' [(ngModel)]='newPet[\"type\"]'>\n    <label> Description: </label>\n    <input type='text' name='description' [(ngModel)]='newPet[\"description\"]'>\n    <label> Skills (optional)</label>\n    <input type='text' name='skill1'[(ngModel)]='newPet[\"skill1\"]'>\n    <input type='text' name='skill2'[(ngModel)]='newPet[\"skill2\"]'>\n    <input type='text' name='skill3' [(ngModel)]='newPet[\"skill3\"]'>\n    <button> Add Pet </button>\n    <input type='button' value='Cancel' (click)='cancel()'>\n  </form>\n  <p> {{ errors }} </p>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newPet = {
            name: '',
            type: '',
            description: '',
            skill1: '',
            skill2: '',
            skill3: ''
        };
    };
    // Add new pet
    NewComponent.prototype.addPet = function () {
        var _this = this;
        console.log(this.newPet);
        var observable = this._httpService.addPet(this.newPet);
        observable.subscribe(function (data) {
            // Code 110000 => Duplicate error found
            if (data['code'] === 11000) {
                _this.errors = 'Duplicate pet names found: ERROR';
                // If minlength or requirement validation is present
            }
            else if (data['errors']) {
                _this.errors = data['message'];
                // If no errors, reroute
            }
            else {
                _this.router.navigate(['/home']);
            }
        });
    };
    // Cancel button to reroute
    NewComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map