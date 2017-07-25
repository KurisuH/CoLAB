webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = (function () {
    function AnswerComponent() {
    }
    AnswerComponent.prototype.editPost = function () {
    };
    AnswerComponent.prototype.deletePost = function () {
    };
    return AnswerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]) === "function" && _a || Object)
], AnswerComponent.prototype, "data", void 0);
AnswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({ selector: 'answer',
        template: "<div class=\"content answer\">\n                 <div class=\"flexcol\">\n                   <div class=\"flexrow\" >\n                     <div class=\"flexcol\" style=\"flex-basis: 8%\">\n                       <div class=\"item stats\">\n                         <img src=\"pic.jpg\" class=\"feedpic\">\n                           <div class=\"text\">\n                             <ul class=\"ulstat\">\n                               <li>Likes</li>\n                               <li>{{data.clicks}}w</li>\n                             </ul>\n                            </div>\n                        </div>\n                     </div>                     \n                     <div class=\"item_2 flexcol\">\n                        <div class=\"item\">\n                           <h1> {{data.title}} </h1>\n                              {{data.content_text}} \n                        </div>\n                            <br>\n                             <span class=\"created\">Created: 02.06.2017 17:31 Last modified: 03.06.2017 11:30</span>\n                        </div>\n                     <div class=\"item_4 symbols\">\n                        <a href=\"#\" class=\"nounder\" (click)=\"editPost()\">\n                          <i class=\"material-icons\">create</i>\n                        </a>\n                        <br>\n                        <br>\n                        <a href=\"#\" class=\"nounder\" (click)=\"deletePost()\">\n                          <i class=\"material-icons\">clear</i>\n                        </a>\n                     </div>\n                   </div>\n                 </div>\n                </div> "
    })
], AnswerComponent);

var _a;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService) {
        // this.subscriptionFeed = this.feedService.needToUpdateFeed.subscribe( (val) =>  { this.feedPosts = this.feedService.getFeedPost(); console.log("update me"); });
        this.userService = userService;
        this.title = 'CoLAB';
        this.tempNewPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]();
        this.profbadge = {
            amountposts: 1
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(" ###################### APP COMPONENT ON INIT ##############################");
        console.log("app component calling check");
        this.userService.check();
        this.isLoggedIn = this.userService.isLoggedIn;
        this.subscriptionUser = this.userService.updateUserStatus.subscribe(function (val) { return _this.isLoggedIn = _this.userService.isLoggedIn; });
    };
    AppComponent.prototype.handleError = function (error) {
        console.error('Fehleeeer', error); // for demo purposes onlyg
        return Promise.reject(error.message || error);
    };
    AppComponent.prototype.setGlobalUser = function (u) {
        this.userService.setUser(u);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: "   \n   \n    <div *ngIf=\"isLoggedIn\">\n    <navbar> </navbar>\n    </div>\n   <router-outlet></router-outlet>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postit_component__ = __webpack_require__("../../../../../src/app/postit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_component__ = __webpack_require__("../../../../../src/app/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profilebadge_component__ = __webpack_require__("../../../../../src/app/profilebadge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sortfeed_component__ = __webpack_require__("../../../../../src/app/sortfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_component__ = __webpack_require__("../../../../../src/app/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__choice_component__ = __webpack_require__("../../../../../src/app/choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mainpage_component__ = __webpack_require__("../../../../../src/app/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_component__ = __webpack_require__("../../../../../src/app/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sort_service__ = __webpack_require__("../../../../../src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__feed_service__ = __webpack_require__("../../../../../src/app/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_component__ = __webpack_require__("../../../../../src/app/settings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule(title) {
        title.setTitle("CoLAB - share your thoughts and ideas!");
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__postit_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_12__choice_component__["a" /* ChoiceComponent */],
            __WEBPACK_IMPORTED_MODULE_4__answer_component__["a" /* AnswerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profilebadge_component__["a" /* ProfileBadge */],
            __WEBPACK_IMPORTED_MODULE_7__sortfeed_component__["a" /* SortBy */],
            __WEBPACK_IMPORTED_MODULE_10__edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__mainpage_component__["a" /* MainpageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'profile/:id',
                    component: __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                },
                {
                    path: 'profile',
                    component: __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                }, {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_18__login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'settings',
                    component: __WEBPACK_IMPORTED_MODULE_20__settings_component__["a" /* SettingsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                }, {
                    path: 'test',
                    component: __WEBPACK_IMPORTED_MODULE_20__settings_component__["a" /* SettingsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                },
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_13__mainpage_component__["a" /* MainpageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                },
                {
                    path: 'logout',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },
                {
                    path: '*',
                    component: __WEBPACK_IMPORTED_MODULE_13__mainpage_component__["a" /* MainpageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */]]
                },
            ], { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__sort_service__["a" /* SortService */], __WEBPACK_IMPORTED_MODULE_17__feed_service__["a" /* FeedService */], __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, userService, http) {
        this.router = router;
        this.userService = userService;
        this.http = http;
    }
    AuthGuard.prototype.ngOnInit = function () {
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log("auth guard deciding activation status");
        console.log("User service on init");
        return this.http.get('http://localhost:8080/Webtech2Project/rest/login/getPrincipal').map(function (res) {
            console.log("user service on init called getPrincipal");
            if (res.status == 200) {
                console.log("principal set, so should be logged in");
                _this.userService.setToTrue();
                _this.http.get('http://localhost:8080/Webtech2Project/rest/userservice/find_mail/' + res.json().user).subscribe(function (data) {
                    _this.userService.setUser(data.json().user);
                    console.log(" Get User by Principal");
                    _this.userService.callUpdate();
                });
                console.log("TRUUUUUUUUUE");
                return true;
            }
            else {
                console.log("user service oninit principal was empty / 204 status code, so not logged in");
                _this.userService.setToFalse();
                _this.router.navigate(['/login']);
                console.log("faaaaalse");
                return false;
            }
        });
        /*  if(this.userService.isLoggedIn) {
            console.log("auth guard : user IS logged in ");
            return true;
          }
          console.log("User is NOT logged in!");
          this.router.navigate(['/login']);
          return false;  */
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_service__ = __webpack_require__("../../../../../src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_service__ = __webpack_require__("../../../../../src/app/feed.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChoiceComponent = (function () {
    function ChoiceComponent(postService, sortService, feedService) {
        this.postService = postService;
        this.sortService = sortService;
        this.feedService = feedService;
        this.onFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.editMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.endReply = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        // 0 = NOT DECIDED YET
        // 1 = TITLE & TEXT
        // 2 = TITLE & IMAGE
        // 3 = Edit Reply Text
        // 4 = Edit Reply Image
        // 5 = New Answer
        // 6 = Reply Text
        // 7 = Reply IMage
        this.type = 0;
    }
    ChoiceComponent.prototype.test = function (ev) {
        console.log("Edite clicked");
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.ngOnInit = function () {
        this.calculateType();
        this.tempNewPost = Object.assign({}, this.selPost);
    };
    //  https://plnkr.co/edit/eB1CiS87hSmxEnDKZMwv?p=preview
    // Mozilla API zu FormData
    // Alle ELemente (ist hier nur 1)  aus FileList in FormData packen, die dann posten für image
    // TODO Popup falls was schiefgeht bzw handleError mit Popup einbauen
    // Create Post Text
    ChoiceComponent.prototype.sendWithText = function () {
        var _this = this;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempNewPost.contentText == null || this.tempNewPost.contentText.replace(/\s/g, '').length == 0) {
            return;
        }
        var res;
        res = this.postService.createPostText(this.tempNewPost).subscribe(function (data) {
            _this.reset();
            _this.addAffected(data);
        }, function (error) { return _this.handleError(); });
    };
    // TODO: Use AddAffected!
    ChoiceComponent.prototype.sendWithImage = function () {
        var _this = this;
        var files = this.imgUp.nativeElement.files;
        if (files.length === 0) {
            console.log("RETURNED SINCE EMPTYX");
            return;
        }
        ;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        var formData = new FormData();
        formData.append("image", files[0]);
        console.log(files);
        this.postService.uploadImage(formData).subscribe(function (data) { return _this.sendCreation(data); }, function (error) { return _this.handleError(); });
    };
    ChoiceComponent.prototype.sendCreation = function (data) {
        var _this = this;
        this.postService.createPostImage(data, this.tempNewPost.title).subscribe(function (res) { _this.reset(); _this.addAffected(res); }, function (error) { return _this.handleError(); });
    };
    ChoiceComponent.prototype.editModeText = function (ev) {
        this.type = 3;
        this.editMode.emit(true);
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.replyText = function (ev) {
        this.type = 6;
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.replyImage = function (ev) {
        this.type = 7;
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.cancelReply = function () {
        this.endReply.emit(true);
    };
    ChoiceComponent.prototype.testLog = function () {
        console.log("Click inside form registered");
    };
    ChoiceComponent.prototype.editModeImage = function (ev) {
        this.type = 4;
        this.editMode.emit(true);
        ev.stopPropagation();
    };
    // Update Post / reply Text
    ChoiceComponent.prototype.updateText = function () {
        // is post
        var _this = this;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempNewPost.contentText == null || this.tempNewPost.contentText.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.selPost.isPost == 0) {
            this.postService.updatePostText(this.selPost.id, this.tempNewPost).subscribe(function (data) { return _this.updateAffected(data); });
        }
        else {
            this.postService.updatePostText(this.selPost.id, this.tempNewPost).subscribe(function (data) { return _this.updateAffectedReply(data); });
        }
        this.reset();
        this.cancel(new Event("egal"));
    };
    ChoiceComponent.prototype.updateImage = function () {
        var _this = this;
        var files = this.imgUp2.nativeElement.files;
        if (files.length === 0 || files.length != 1) {
            console.log("RETURNED SINCE EMPTYX or TOO LARGE");
            return;
        }
        ;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        var formData = new FormData();
        formData.append("image", files[0]);
        console.log(files);
        this.postService.uploadImage(formData).subscribe(function (data) { return _this.sendUpdate(data); }, function (error) { return _this.handleError(); });
        this.cancel(new Event("egal"));
    };
    ChoiceComponent.prototype.sendUpdate = function (data) {
        var _this = this;
        if (this.selPost.isPost == 0) {
            this.postService.updatePostImage(data, this.tempNewPost.title, this.selPost.id).subscribe(function (data) { return _this.updateAffected(data); });
            console.log("pls compare : " + this.selPost.title + " to  " + this.tempNewPost.title);
        }
        else {
            this.postService.updatePostImage(data, this.tempNewPost.title, this.selPost.id).subscribe(function (data) { return _this.updateAffectedReply(data); });
        }
        this.reset();
    };
    ChoiceComponent.prototype.addAffected = function (data) {
        var temp = data.json().postit;
        var order = this.sortService.getSortOrder();
        if (data.status == 201) {
            this.feedService.increment();
            if (temp.isPost == 1) {
                this.feedService.incrementReplies(this.topLevelPost);
                console.log("is reply, so sort order can only be -1");
                // this.rp.push(temp);
                this.feedService.movePostedReply();
                this.feedService.repliesPush(temp);
                this.feedService.callUpdateReply();
            }
            else {
                if (order == 0) {
                    console.log("SortOrder 0 --> must have been newest");
                    // this.fp.unshift(temp);
                    this.feedService.feedUnshift(temp);
                    this.feedService.callUpdateFeed();
                }
                if (order == 1) {
                    console.log("SortOrder 1 --> must have been oldest");
                    // this.fp.push(temp);
                    this.feedService.feedPush(temp);
                    this.feedService.callUpdateFeed();
                }
                if (order == 2) {
                    this.feedService.feedPush(temp);
                    this.feedService.callUpdateFeed();
                }
            }
        }
        else {
            console.log("http response statust was not 201. there must have been an error!");
        }
    };
    ChoiceComponent.prototype.updateAffected = function (data) {
        if (data.status == 200) {
            var temp = data.json().postit;
            this.feedService.updatePost(this.selPost, temp);
            this.type = 100;
        }
        else {
            this.handleError();
        }
    };
    ChoiceComponent.prototype.updateAffectedReply = function (data) {
        if (data.status == 200) {
            var temp = data.json().postit;
            this.feedService.updateReply(this.selPost, temp);
            this.type = 100;
        }
        else {
            this.handleError();
        }
    };
    ChoiceComponent.prototype.handleError = function () {
    };
    ChoiceComponent.prototype.reset = function () {
        console.log("reset called");
        this.type = 0;
        this.tempNewPost = Object.assign({}, this.selPost);
        this.editMode.emit(false);
        this.emit();
    };
    ChoiceComponent.prototype.postReplyText = function () {
        var _this = this;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempNewPost.contentText == null || this.tempNewPost.contentText.replace(/\s/g, '').length == 0) {
            return;
        }
        this.postService.createReplyText(this.tempNewPost, this.topLevelPost).subscribe(function (data) { _this.addAffected(data); });
        this.reset();
    };
    ChoiceComponent.prototype.postReplyImage = function () {
        var _this = this;
        if (this.tempNewPost.title == null || this.tempNewPost.title.replace(/\s/g, '').length == 0) {
            return;
        }
        var files = this.imgUp3.nativeElement.files;
        if (files.length === 0) {
            console.log("RETURNED SINCE EMPTYX");
            return;
        }
        ;
        var formData = new FormData();
        formData.append("image", files[0]);
        console.log(files);
        this.postService.uploadImage(formData).subscribe(function (data) { return _this.sendReply(data); }, function (error) { return _this.handleError(); });
        this.cancel(new Event("egal"));
    };
    ChoiceComponent.prototype.sendReply = function (data) {
        var _this = this;
        // vo updateAffectedReply geöndert
        this.postService.createReplyImage(this.tempNewPost, this.topLevelPost, data).subscribe(function (res) { _this.reset(); _this.addAffected(res); });
    };
    ChoiceComponent.prototype.goBack = function (ev) {
        this.reset();
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.goBack_2 = function (ev) {
        this.calculateType();
        this.tempNewPost = Object.assign({}, this.selPost);
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.cancel = function (ev) {
        this.type = 0;
        this.editMode.emit(false);
        this.selPost.isBeingEdited = false;
        this.selPost.isTypingReply = false;
        console.log("Cancel edit; Edit property of " + this.selPost.title + " is now set to " + this.selPost.isBeingEdited);
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.writeText = function (ev) {
        this.editMode.emit(true);
        this.type = 1;
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.uploadImage = function (ev) {
        this.editMode.emit(true);
        this.type = 2;
        ev.stopPropagation();
    };
    ChoiceComponent.prototype.emit = function () {
        this.onFinished.emit(true);
    };
    ChoiceComponent.prototype.calculateType = function () {
        if (this.isNewPost) {
            this.type = 0;
        }
        else {
            // check if post was passed
            if (this.selPost === null) {
                this.handleError();
            }
            else {
                if (this.selPost.isTypingReply == true) {
                    this.type = 5;
                }
                else {
                    // Post was passed --> check if post contained image or not
                    if (this.selPost.contentImage === null) {
                        this.type = 1;
                    }
                    else {
                        this.type = 2;
                    }
                }
            }
        }
    };
    return ChoiceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgUpload'),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "imgUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgUpload2'),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "imgUp2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgUpload3'),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "imgUp3", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "onFinished", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "editMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "endReply", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ChoiceComponent.prototype, "isNewPost", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]) === "function" && _a || Object)
], ChoiceComponent.prototype, "selPost", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]) === "function" && _b || Object)
], ChoiceComponent.prototype, "topLevelPost", void 0);
ChoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({ selector: 'choice',
        template: "    \n    \n    <div *ngIf=\"isNewPost === true\">\n        <div *ngIf=\"type == 0\">\n            <div (click)=\"writeText($event)\">\n                Write a text  \n            </div>\n          <div (click)=\"uploadImage($event)\">\n            Or upload an image!\n          </div>\n          \n        </div>\n        \n        <div *ngIf=\"type == 1\">\n          <form (ngSubmit)=\"sendWithText()\" (click)=\"testLog()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\" placeholder=\"Give your post a title!\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" placeholder=\"Give your post some content!\"></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack($event)\">\n    \n          </form>\n        </div>\n        <div *ngIf=\"type == 2\">\n          <form (ngSubmit)=\"sendWithImage()\"> \n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\" placeholder=\"Give your post a title!\"></textarea>\n          <br> Upload your image! <br> <br>    \n          <input type=\"file\" #imgUpload accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack($event)\">\n          </form>\n        </div>\n    </div>\n    \n    <div *ngIf=\"isNewPost === false\">\n      <div *ngIf=\"type == 1\">\n        <div (click)=\"editModeText($event)\">\n          Edit text\n        </div>\n        <div (click)=\"editModeImage($event)\">\n          Replace your text with an image!\n        </div>\n        <div (click)=\"cancel($event)\"> Cancel edit\n        </div>\n      </div>\n\n      <div *ngIf=\"type == 2\">\n        <div (click)=\"editModeImage($event)\">\n          Choose a different image to upload\n        </div>\n        <div (click)=\"editModeText($event)\">\n          Replace your image with a text\n        </div>\n        <div (click)=\"cancel($event)\"> Cancel edit\n        </div>\n      </div>\n      \n      <div *ngIf=\"type == 3\">\n        <form (ngSubmit)=\"updateText()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" ></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>        \n      </div>\n\n      <div *ngIf=\"type == 4\">\n        <form (ngSubmit)=\"updateImage()\" enctype=\"multipart/form-data\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <br> Upload your new image! <br> <br>\n          <input type=\"file\" #imgUpload2 accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n      \n      <div *ngIf=\"type == 5\">\n        <div (click)=\"replyText($event)\">\n          Reply with text\n        </div>\n        <div (click)=\"replyImage($event)\">\n          Reply with an image instead!\n        </div>\n        <div (click)=\"cancelReply($event)\"> Cancel edit\n        </div>        \n      </div>\n\n      <div *ngIf=\"type == 6\">\n        <form (ngSubmit)=\"postReplyText()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" ></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n\n      <div *ngIf=\"type == 7\">\n        <form (ngSubmit)=\"postReplyImage()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <br> Upload your image! <br> <br>\n          <input type=\"file\" #imgUpload3 accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n\n    </div>\n    \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__sort_service__["a" /* SortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sort_service__["a" /* SortService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedService */]) === "function" && _e || Object])
], ChoiceComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=choice.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = (function () {
    function EditComponent() {
        this.tempNewPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]();
    }
    EditComponent.prototype.ngOnInit = function () {
        if (this.selPost.contentImage === null) {
            this.type = 1;
            console.log("ContentIMG undefined, should be text");
        }
        else {
            this.type = 2;
            console.log("ContentImg defined, shold be IMG");
        }
    };
    return EditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]) === "function" && _a || Object)
], EditComponent.prototype, "selPost", void 0);
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({ selector: 'edit',
        template: "\n   <div *ngIf=\"type == 1\">\n     <div>\n       Edit text\n     </div>\n     <div>\n       Replace your text with an image!\n     </div>\n     <div> Cancel edit\n     </div>\n   </div>\n   \n   <div *ngIf=\"type == 2\">\n      <div>\n        Choose a different image to upload\n      </div>\n      <div>\n        Replace your image with a text\n      </div>\n      <div> Cancel edit\n      </div>\n   </div> \n \t\n  "
    })
], EditComponent);

var _a;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_service__ = __webpack_require__("../../../../../src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedService = (function () {
    function FeedService(sortService, userService) {
        this.sortService = sortService;
        this.userService = userService;
        this.feedPosts = [];
        this.repliesForCurrent = [];
        this.needToUpdateFeed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.needToUpdateReply = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    FeedService.prototype.ngOnInit = function () {
        this.feedPosts = [];
        this.repliesForCurrent = [];
    };
    FeedService.prototype.initFeed = function () {
        for (var _i = 0, _a = this.feedPosts; _i < _a.length; _i++) {
            var elem = _a[_i];
            elem.repliesVisible = false;
            elem.isBeingEdited = false;
            elem.isTypingReply = false;
            console.log("isTypingReply = false [35]");
        }
    };
    FeedService.prototype.initReplies = function () {
        for (var _i = 0, _a = this.repliesForCurrent; _i < _a.length; _i++) {
            var elem = _a[_i];
            elem.repliesVisible = false;
            elem.isBeingEdited = false;
            elem.isTypingReply = false;
            console.log("isTypingReply = false [43]");
        }
    };
    FeedService.prototype.deleteFromFeed = function (p) {
        var ind = this.feedPosts.indexOf(p);
        this.feedPosts.splice(ind, 1);
    };
    FeedService.prototype.deleteFromReplies = function (p) {
        var ind = this.repliesForCurrent.indexOf(p);
        this.repliesForCurrent.splice(ind, 1);
    };
    FeedService.prototype.feedUnshift = function (p) {
        var order = this.sortService.getSortOrder();
        this.feedPosts.unshift(p);
        this.feedPosts[0].repliesVisible = false;
        this.feedPosts[0].isBeingEdited = false;
        this.feedPosts[0].isTypingReply = false;
        console.log("isTypingReply = false [63]");
    };
    FeedService.prototype.feedPush = function (p) {
        var order = this.sortService.getSortOrder();
        var n = this.feedPosts.push(p);
        this.feedPosts[n - 1].repliesVisible = false;
        this.feedPosts[n - 1].isBeingEdited = false;
        this.feedPosts[n - 1].isTypingReply = false;
        console.log("isTypingReply = false [70]");
        return n;
    };
    FeedService.prototype.repliesUnshift = function (p) {
        this.repliesForCurrent.unshift(p);
        this.repliesForCurrent[0].isBeingEdited = false;
        this.repliesForCurrent[0].postit_replies = 0;
        var usr = this.userService.getGlobalUser();
        console.log("wockbocklock");
        this.repliesForCurrent[0].author_name = usr.name;
        this.repliesForCurrent[0].author_surname = usr.surname;
        this.repliesForCurrent[0].avatar_path = usr.avatar;
    };
    FeedService.prototype.repliesShift = function () {
        this.repliesForCurrent.shift();
    };
    FeedService.prototype.repliesPush = function (p) {
        var n = this.repliesForCurrent.push(p);
        this.repliesForCurrent[n - 1].isBeingEdited = false;
        this.repliesForCurrent[n - 1].isTypingReply = false;
        this.repliesForCurrent[n - 1].repliesVisible = false;
        console.log("rep : " + this.repliesForCurrent[n - 1].contentText);
        return n;
    };
    FeedService.prototype.movePostedReply = function () {
        var a = this.repliesForCurrent.shift();
        console.log("replies size is now 1 less, it is " + this.repliesForCurrent.length);
        // this.repliesPush(a);
    };
    FeedService.prototype.getFeedPost = function () {
        return this.feedPosts;
    };
    FeedService.prototype.getRepliesForCurrent = function () {
        return this.repliesForCurrent;
    };
    FeedService.prototype.spliceFeed = function (a, b) {
        this.feedPosts.splice(a, b);
    };
    FeedService.prototype.spliceReplies = function (a, b) {
        this.repliesForCurrent.splice(a, b);
    };
    FeedService.prototype.resetReplies = function () {
        console.log("~~~~ Replies for current with experimental splice called");
        this.repliesForCurrent.splice(0, this.repliesForCurrent.length);
        // this.repliesForCurrent = [];
    };
    FeedService.prototype.resetFeed = function () {
        this.feedPosts = this.feedPosts.splice(0, this.feedPosts.length);
    };
    FeedService.prototype.printInternalFeed = function () {
        console.log("compare to internal feed in FPS:");
        for (var _i = 0, _a = this.feedPosts; _i < _a.length; _i++) {
            var elem = _a[_i];
            console.log("~~~~~~~~~~~~~~~~~~~~~ " + elem.id);
        }
    };
    FeedService.prototype.setIsTyping = function () {
        this.repliesForCurrent[0].isTypingReply = true;
        this.repliesForCurrent[0].id = this.userService.getGlobalUser().id;
        console.log("isTypingReply = true");
    };
    FeedService.prototype.pushFeedFromSort = function (p) {
        this.resetFeed();
        for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
            var elem = p_1[_i];
            if (elem.isPost == 0) {
                var n = this.feedPosts.push(elem);
                this.feedPosts[n - 1].repliesVisible = false;
                this.feedPosts[n - 1].isBeingEdited = false;
                this.feedPosts[n - 1].isTypingReply = false;
                console.log("isTypingReply = false [134]");
            }
        }
        this.needToUpdateFeed.next(true);
    };
    FeedService.prototype.callUpdateFeed = function () {
        this.needToUpdateFeed.next(true);
    };
    FeedService.prototype.callUpdateReply = function () {
        this.needToUpdateReply.next(true);
    };
    FeedService.prototype.updatePost = function (p, data) {
        var ind = this.feedPosts.indexOf(p, 0);
        console.log("update from " + this.feedPosts[ind].title);
        this.feedPosts[ind] = Object.assign({}, data);
        this.feedPosts[ind].isBeingEdited = false;
        this.feedPosts[ind].isTypingReply = false;
        console.log("to " + this.feedPosts[ind].title);
        this.needToUpdateFeed.next(true);
    };
    FeedService.prototype.updateReply = function (p, data) {
        console.log("passed post in upd.reply: " + p.title);
        var ind = this.repliesForCurrent.indexOf(p, 0);
        this.repliesForCurrent[ind] = Object.assign({}, data);
        this.repliesForCurrent[ind].isBeingEdited = false;
        this.repliesForCurrent[ind].isTypingReply = false;
        this.needToUpdateReply.next(true);
    };
    FeedService.prototype.decrement = function () {
        this.userService.decrement();
    };
    FeedService.prototype.increment = function () {
        this.userService.increment();
    };
    FeedService.prototype.incrementReplies = function (tlp) {
        tlp.postit_replies = tlp.postit_replies + 1;
    };
    FeedService.prototype.decrementReplies = function (tlp) {
        tlp.postit_replies = tlp.postit_replies - 1;
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sort_service__["a" /* SortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sort_service__["a" /* SortService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], FeedService);

var _a, _b;
//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.type = 0;
        this.checkpw = '';
        //this.tempUser = new User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("login component init");
        this.tempUser = this.userService.getGlobalUser();
    };
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        var body = ' {"user":{"id":-1,"avatar":"/colab/resources/avatar/default.jpg","birthDate": 0 ,"email":"' + this.tempUser.email + '","fax":"","gender":"","location":"","name":"","password":"' + this.tempUser.password + '","phone":"","registerDate":0,"surname":"","postits":[],"position":3}}';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post('http://localhost:8080/Webtech2Project/rest/login/json', body, options).subscribe(function (data) { return _this.check(data); });
    };
    LoginComponent.prototype.setTo1 = function () {
        this.type = 1;
    };
    LoginComponent.prototype.setTo0 = function () {
        this.type = 0;
    };
    LoginComponent.prototype.check = function (data) {
        var _this = this;
        // alles ok
        if (data.status == 200) {
            // find user by email and setGlobalUser & isLoggedIn
            this.http.get('http://localhost:8080/Webtech2Project/rest/userservice/find_mail/' + this.tempUser.email).subscribe(function (res) { return _this.set(res); });
        }
        else {
            console.log("User nicht bekannt");
        }
    };
    LoginComponent.prototype.set = function (data) {
        // alles ok
        if (data.status == 200) {
            var usr = data.json().user;
            this.userService.setUser(usr);
            this.router.navigate(['/']);
            this.tempUser = this.userService.getGlobalUser();
        }
        else {
            console.log("error while trying to fetch user");
        }
    };
    LoginComponent.prototype.signup = function () {
        this.type = 1;
        this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    LoginComponent.prototype.goBack = function () {
        this.type = 0;
        this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    LoginComponent.prototype.tryRegister = function () {
        if (this.tempUser.name == null || this.tempUser.name.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.surname == null || this.tempUser.surname.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.email == null || this.tempUser.email.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.password == null || this.tempUser.password.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.checkpw == null || this.checkpw.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.birthDate == null) {
            return;
        }
        if (this.tempUser.location == null || this.tempUser.location.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.phone == null || this.tempUser.phone.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.fax == null || this.tempUser.fax.replace(/\s/g, '').length == 0) {
            return;
        }
        if (this.tempUser.gender == null || this.tempUser.gender.replace(/\s/g, '').length == 0) {
            return;
        }
        console.log("Birth da ist " + this.tempUser.birthDate);
        if (this.checkpw === this.tempUser.password) {
            console.log("try register called and password matches");
            this.userService.createUser(this.tempUser).subscribe(function (data) { return console.log("res was " + data); });
            this.type = 0;
            this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
            this.checkpw = '';
        }
        else {
            console.log("passoword doesnt match, try again");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'login',
        template: "\n    <div *ngIf=\"type == 0\">\n\n      <form>\n\n        <input type=\"text\" [(ngModel)]=\"tempUser.email\" name=\"whytho\" placeholder=\"E-Mail\">\n        <input type=\"password\" [(ngModel)]=\"tempUser.password\" name=\"whytho2\" placeholder=\"password\">\n        <input type=\"submit\" value=\"Login\" (click)=\"tryLogin()\">\n      </form>\n\n      Dont have an account yet? Click <span (click)=\"signup()\">here</span> to crete one!\n\n    </div>\n\n    <div *ngIf=\"type == 1 \">\n      Register now!\n      <br>\n      Simply fill out the fields below and you are ready to go!\n      <br>\n      <form>\n\n        <input type=\"text\" [(ngModel)]=\"tempUser.email\" name=\"whytho\" placeholder=\"E-Mail\">\n        <input type=\"password\" [(ngModel)]=\"tempUser.password\" name=\"whytho2\" placeholder=\"password\">\n        <input type=\"password\" [(ngModel)]=\"checkpw\" name=\"whytho25\" placeholder=\"enter password again\">\n        <input type=\"date\" [(ngModel)]=\"tempUser.birth_date\" name=\"whytho3\" placeholder=\"Birth date (YYYY-MM-DD)\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.name\" name=\"whytho4\" placeholder=\"first name\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.surname\" name=\"whytho5\" placeholder=\"last name\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.location\" name=\"whytho6\" placeholder=\"Your location inside the company\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.phone\" name=\"whytho7\" placeholder=\"your phone\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.fax\" name=\"whytho8\" placeholder=\"your fax\">\n        <input type=\"text\" [(ngModel)]=\"tempUser.gender\" name=\"whytho9\" placeholder=\"your gender\">\n\n\n        <input type=\"submit\" value=\"Register\" (click)=\"tryRegister()\">\n      </form>\n\n      <span (click)=\"goBack()\">Go back</span>\n    </div>\n  ",
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainpageComponent = (function () {
    function MainpageComponent() {
        this.title = 'CoLAB';
    }
    MainpageComponent.prototype.ngOnInit = function () {
        console.log("INIT MAINPAGE");
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'mainpage',
        template: "   <main>\n    <div class=\"col_1\">\n      <profileBadge>\n      </profileBadge>\n    </div>\n    <div class=\"col_2\">\n      <h2>Express yourself with a post!</h2>\n      <div class=\"formdiv\">\n        <choice [isNewPost]=\"true\">\n        </choice>\n      </div>\n      <h2 class=\"morespace\">See what everyone in your company is up to!</h2>\n\n      <post></post>\n    </div>\n\n    <div class=\"col_3\">\n      <sortby></sortby>\n    </div>\n  </main>\n  "
    })
], MainpageComponent);

//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(userService) {
        this.userService = userService;
    }
    NavbarComponent.prototype.logUserOut = function () {
        var _this = this;
        console.log("Log user out called. proceeding");
        this.userService.logOut().subscribe(function (data) {
            console.log("log out data status was " + data.status);
            _this.userService.setToLoggedOut();
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({ selector: 'navbar',
        template: "<div class=\"navbar\">\n                <nav>\n                  <ul class=\"navul\">\n                    <li class=\"mmenu colab\" routerLink=\"\" ><span class=\"co\"><i class=\"material-icons\">keyboard_arrow_right</i>Co</span><span class=\"lab\">LAB<i class=\"material-icons\">keyboard_arrow_left</i></span></li>\n                     <li class=\"mmenu midmenu\" routerLink=\"/profile\"> <i class=\"material-icons\">account_circle</i><span class=\"atest\">PROFILE</span></li>\n                     <li class=\"mmenu midmenu\" routerLink=\"/settings\"><i class=\"material-icons\">build</i><span class=\"atest\">SETTINGS</span></li>                    \n                     <li class=\"mmenu midmenu\" routerLink=\"/login\" (click)=\"logUserOut()\"><i class=\"material-icons\">power_settings_new</i><span class=\"atest\">SIGN OUT</span></li>\n                     <li class=\"mmenu midmenu searchbar\">\n                    </li>\n                  </ul>\n                </nav>\n                </div>\n   "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
        this.repliesVisible = false;
        this.isBeingEdited = false;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/postit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_service__ = __webpack_require__("../../../../../src/app/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// IN MODULE AUSLAGERN
var PostComponent = (function () {
    function PostComponent(postService, userService, feedService, router) {
        var _this = this;
        this.postService = postService;
        this.userService = userService;
        this.feedService = feedService;
        this.router = router;
        this.title = 'CoLAB';
        // -------------------
        this.feedPosts = this.feedService.getFeedPost();
        this.repliesForCurrent = this.feedService.getRepliesForCurrent();
        this.editMode = false;
        this.subscriptionFeed = this.feedService.needToUpdateFeed.subscribe(function (val) {
            _this.feedPosts = _this.feedService.getFeedPost();
            console.log("update me");
        });
        this.subscriptionReply = this.feedService.needToUpdateReply.subscribe(function (val) {
            _this.repliesForCurrent = _this.feedService.getRepliesForCurrent();
            console.log("update me");
        });
    }
    PostComponent.prototype.gotoProfile = function (sel) {
        this.router.navigate(['profile/' + sel.author]);
    };
    PostComponent.prototype.onSelectAnswer = function (selected, ev) {
        this.selectedAnswer = selected;
        ev.stopPropagation();
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getGlobalUser();
        this.postService.getSortedByNewest().then(function (res) {
            _this.feedService.resetFeed();
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var elem = res_1[_i];
                // add to feedPosts if element is post
                if (elem.isPost === 0) {
                    var len = _this.feedService.feedPush(elem);
                }
            }
            _this.feedService.initFeed();
            _this.feedPosts = _this.feedService.getFeedPost();
        });
    };
    PostComponent.prototype.cancelReply = function (post) {
        post.isTypingReply = false;
        // temporarily added element can be deleted now as user chose to cancel editing
        this.feedService.repliesShift();
        this.feedPosts = this.feedService.getFeedPost();
    };
    PostComponent.prototype.onSelect = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        if (this.selectedPost === selected) {
            // if is already showing replies --> hide
            if (this.selectedPost.repliesVisible) {
                this.selectedPost.repliesVisible = false;
            }
            else {
                this.feedService.resetReplies();
                this.selectedPost.repliesVisible = true;
                // fetch replies
                this.postService.getRepliesTo(selected.id).then(function (res) {
                    // let rp = this.feedService.getRepliesForCurrent();
                    for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                        var elem = res_2[_i];
                        // add to feedPosts if element is answer / responseTo
                        if (elem.isPost === 1) {
                            // console.log("fetched reply with text " + elem.contentText);
                            var len = _this.feedService.repliesPush(elem);
                        }
                    }
                    _this.feedService.initReplies();
                    _this.repliesForCurrent = _this.feedService.getRepliesForCurrent();
                });
            }
        }
        else {
            if (this.selectedPost != null) {
                this.selectedPost.repliesVisible = false;
            }
            this.selectedPost = selected;
            this.postService.getRepliesTo(selected.id).then(function (res) {
                _this.feedService.resetReplies();
                for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                    var elem = res_3[_i];
                    // add to feedPosts if element is post
                    if (elem.isPost === 1) {
                        var len = _this.feedService.repliesPush(elem);
                    }
                }
                _this.feedService.initReplies();
                _this.repliesForCurrent = _this.feedService.getRepliesForCurrent();
            });
            this.selectedPost.repliesVisible = true;
        }
    };
    PostComponent.prototype.assignPost = function (post) {
    };
    PostComponent.prototype.refresh = function () {
        var _this = this;
        this.postService.getAllPosts().then(function (res) {
            _this.feedService.resetFeed();
            for (var _i = 0, res_4 = res; _i < res_4.length; _i++) {
                var elem = res_4[_i];
                // add to feedPosts if element is post
                if (elem.isPost === 0) {
                    var len = _this.feedService.feedPush(elem);
                }
            }
            _this.feedService.initFeed();
            _this.feedPosts = _this.feedService.getFeedPost();
        });
    };
    PostComponent.prototype.editAnswer = function (selected, ev) {
        // console.log("Clicked edit answer on " + selected.title);
        this.selectedAnswer = selected;
        this.editedPost = Object.assign({}, selected);
        ev.stopPropagation();
        if (selected.isBeingEdited == true) {
            selected.isBeingEdited = false;
        }
        else {
            for (var _i = 0, _a = this.repliesForCurrent; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem === selected) {
                    selected.isBeingEdited = true;
                }
                else {
                    elem.isBeingEdited = false;
                }
            }
        }
    };
    PostComponent.prototype.editPost = function (selected, ev) {
        // deep copy of post in order to roll back changes if user decides to cancel editing
        this.selectedPost = selected;
        this.editedPost = Object.assign({}, selected);
        ev.stopPropagation();
        if (this.editMode) {
            this.editMode = false;
        }
        else {
            this.editMode = true;
        }
        if (selected.isBeingEdited == true) {
            selected.isBeingEdited = false;
        }
        else {
            for (var _i = 0, _a = this.feedPosts; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem === selected) {
                    selected.isBeingEdited = true;
                }
                else {
                    elem.isBeingEdited = false;
                }
            }
        }
        if (selected.isBeingEdited == false) {
            //  console.log("Current.isBeingEdited is now set to false");
        }
        else {
            // console.log("Current.isBeingEdited is now set to true");
        }
    };
    PostComponent.prototype.onSubmitEdit = function () {
        /* selected.isBeingEdited = false; */
    };
    PostComponent.prototype.onCancelEdit = function () {
        /* selected.isBeingEdited = false; */ ;
    };
    PostComponent.prototype.deletePost = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        this.postService.deletePost(selected.id).subscribe(function (data) {
            _this.updateFeed(data, selected);
            _this.userService.refreshUser();
        });
    };
    PostComponent.prototype.deleteReply = function (tlp, selected, ev) {
        var _this = this;
        ev.stopPropagation();
        this.postService.deletePost(selected.id).subscribe(function (data) {
            _this.updateFeedWithParent(tlp, data, selected);
            _this.userService.refreshUser();
        });
    };
    PostComponent.prototype.updateFeed = function (data, element) {
        if (data.status == 200) {
            // isPost --> delete from feedPosts
            if (element.isPost == 0) {
                this.feedService.decrement();
                this.feedService.deleteFromFeed(element);
                this.feedPosts = this.feedService.getFeedPost();
            }
            else {
                this.feedService.deleteFromReplies(element);
                this.repliesForCurrent = this.feedService.getRepliesForCurrent();
            }
        }
        else { }
    };
    PostComponent.prototype.updateFeedWithParent = function (tlp, data, element) {
        if (data.status == 200) {
            this.feedService.decrementReplies(tlp);
            this.feedService.deleteFromReplies(element);
            this.repliesForCurrent = this.feedService.getRepliesForCurrent();
        }
    };
    PostComponent.prototype.reply = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        // if not already replying --> new one
        if (!selected.isTypingReply) {
            // if it wasnt selected previously, get replies
            // console.log("arr length b4 : " + this.repliesForCurrent.length);
            for (var _i = 0, _a = this.feedPosts; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem !== selected) {
                    elem.isTypingReply = false;
                    elem.repliesVisible = false;
                }
            }
            this.feedService.resetReplies();
            selected.repliesVisible = true;
            this.postService.getRepliesTo(selected.id).then(function (res) {
                for (var _i = 0, res_5 = res; _i < res_5.length; _i++) {
                    var elem = res_5[_i];
                    // add to feedPosts if element is answer / responseTo
                    if (elem.isPost === 1) {
                        var len = _this.feedService.repliesPush(elem);
                    }
                }
                _this.feedService.initReplies();
                _this.feedService.repliesUnshift(new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]());
                _this.feedService.setIsTyping();
                _this.repliesForCurrent = _this.feedService.getRepliesForCurrent();
            });
        }
        // else: do nothing since already in reply mode
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'post',
        template: "    <!-- TODO Eventuell Style wegen Umrandung und Markierung welcher selected ist anpassen\n        Jquery In Angular: https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular2\n        Scrollen mit Jquery: https://stackoverflow.com/questions/6677035/jquery-scroll-to-element\n     -->\n \n      <div *ngFor=\"let current of feedPosts\" (click)=\"onSelect(current, $event)\" > <!-- [class.selected]=\"current === selectedPost\"-->\n      <div class=\"content\" >\n    <div class=\"flexcol\">\n      <div class=\"flexrow\">\n        <div class=\"item stats\">\n          <span class=\"markertest\">\n            \n          </span>\n          <img class=\"feedpic\" src=\"http://localhost:8080/{{current.avatar_path}}\" (click)=\"gotoProfile(current)\">\n\n          <div class=\"text\">\n            <ul class=\"ulstat\">\n              <li></li>\n              <li>by {{current.author_name}} {{current.author_surname}}</li>\n              <li>Replies: {{current.postit_replies}}</li>             \n            </ul>\n          </div>\n        </div>\n        <div class=\"item_2 flexcol\">\n         <div *ngIf=\"current.isBeingEdited == true\">\n           <choice [selPost] = \"selectedPost\" [isNewPost]=\"false\">                 \n                </choice>\n         </div>\n        <div *ngIf=\"current.isBeingEdited == false\"> \n          <div *ngIf=\"!current.contentImage\"> \n             <div class=\"item\">\n                 <h1>{{current.title}}</h1>\n             </div>\n            <br>\n            {{current.contentText}}\n          </div>\n\n          <div *ngIf=\"!current.contentText\">\n            <div class=\"item\">\n              <h1>{{current.title}}</h1>\n            </div>\n            <br>\n           <img class=\"postimg\" src=\"{{current.contentImage}}\">\n          </div>\n          <span class=\"created\"> Created: {{current.date | date }} \n            <span *ngIf=\"current.lastModified == null\"> Last modified: -</span>\n            <span *ngIf=\"current.lastModified != null\">Last modified: {{current.lastModified | date}}</span>\n             </span>\n          </div>          \n       </div>\n        <div class=\"item_4 symbols\">\n         <div *ngIf=\"current.author == user.id\">         \n            <span class=\"nounder\" (click)=\"editPost(current,$event)\">\n              <i class=\"material-icons\">create</i>\n            </span>\n            <br>\n            <br>\n        </div>\n           <div *ngIf=\"current.author == user.id || user.position == 3 \"> \n            <span class=\"nounder\" (click)=\"deletePost(current, $event)\">\n              <i class=\"material-icons\">clear</i>\n            </span>\n            <br>\n            <br>            \n         </div>\n       \n          <span class=\"nounder\" (click)=\"reply(current, $event)\">\n            <i class=\"material-icons\">reply</i>\n          </span>\n        </div>\n    </div>\n  </div>\n       <div *ngFor=\"let answers of repliesForCurrent\" (click)=\"onSelectAnswer(current, $event)\">\n         <div *ngIf=\"current.repliesVisible\">\n           <div class=\"content answer\" style=\"background-color: green;\">\n             <div class=\"flexcol\">\n               <div class=\"flexrow\" >\n                 <div class=\"flexcol\" style=\"flex-basis: 8%\">\n                   <div class=\"item stats\">\n                     <img src=\"http://localhost:8080{{answers.avatar_path}}\" class=\"feedpic\" (click)=\"gotoProfile(answers)\"/>\n                     <div class=\"text\">\n                       <ul class=\"ulstat\">\n                         <li></li>\n                         <li>by {{answers.author_name}} {{answers.author_surname}}</li>\n                       </ul>\n                     </div>\n                   </div>\n                 </div>\n                 <div class=\"item_2 flexcol\">\n                   <div class=\"item\">\n                     <div *ngIf=\"answers.isBeingEdited == true\">\n                       <choice [selPost] = \"answers\" [isNewPost]=\"false\">\n                       </choice>\n                     </div>                     \n                     <div *ngIf=\"answers.isBeingEdited == false\">\n                       <div *ngIf=\"answers.isTypingReply == true\">\n                         <choice (endReply)=\"cancelReply(answers)\" [topLevelPost]=\"current\" [selPost] = \"answers\" [isNewPost]=\"false\">\n                         </choice>\n                       </div>\n                       <div *ngIf=\"answers.isTypingReply == false \">\n                          <div *ngIf=\"!answers.contentImage\">\n                           <h1> {{answers.title}} </h1>\n                           {{answers.contentText}}\n                          </div>\n                           <div *ngIf=\"!answers.contentText\">\n                             <h1> {{answers.title}} </h1>\n                             <img class=\"postimg\" src=\"{{answers.contentImage}}\">\n                           </div>\n                       </div>\n                       <div *ngIf=\"answers.isTypingReply == false\">\n                        <span class=\"created\">Created: {{answers.date | date}}\n                         <span *ngIf=\"current.lastModified == null\"> Last modified: -</span>\n                         <span *ngIf=\"current.lastModified != null\">Last modified: {{current.lastModified | date}}</span>\n                       </span>\n                       </div>\n                   </div>\n                   <br>                \n                 </div>\n                 </div>              \n                 <div class=\"item_4 symbols\">\n                   <div *ngIf=\"answers.author == user.id && answers.isTypingReply == false\"> \n                   <div *ngIf=\"answers.isTypingReply == false\">\n                     <span class=\"nounder\" (click)=\"editAnswer(answers, $event)\">\n                       <i class=\"material-icons\">create</i>\n                     </span>\n                     <br>\n                     <br>\n                   </div>\n                   <div *ngIf=\" (answers.author == user.id || user.position == 1 )&& answers.isTypingReply == false\"> \n                   <div *ngIf=\" answers.isTypingReply == false\">\n                     <span class=\"nounder\" (click)=\"deleteReply(current, answers, $event)\">\n                       <i class=\"material-icons\">clear</i>\n                     </span>\n                   </div>                  \n                 </div>\n               </div>\n             </div>\n           </div>           \n         </div>         \n       </div>        \n      </div>\n    </div>\n      </div>\n      </div>\n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=postit.component.js.map

/***/ }),

/***/ "../../../../../src/app/postit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.url = 'http://localhost:8080/Webtech2Project/rest/postitservice/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    PostService.prototype.getAllPosts = function () {
        return this.http.get(this.url + 'fetch_all').
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getRepliesTo = function (id) {
        return this.http.get(this.url + 'responses/' + id).
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getById = function (id) {
        return this.http.get(this.url + 'find/' + id).toPromise();
    };
    PostService.prototype.getSortedByNewest = function () {
        return this.http.get(this.url + 'fetch_all_sort_date_oldest').
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getSortedByOldest = function () {
        return this.http.get(this.url + 'fetch_all_sort_date').
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getSortedByPopular = function () {
        return this.http.get(this.url + 'fetch_all_sort_clicks').
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getAllPostsByUser = function (id) {
        return this.http.get(this.url + 'postits_by/' + id).
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getOnlyRepliesByUser = function (id) {
        return this.http.get(this.url + 'postits_responses_by/' + id).
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.getOnlyPostsByUser = function (id) {
        return this.http.get(this.url + 'postits_only_posts/' + id).
            toPromise().
            then(function (response) { return response.json().postit; });
    };
    PostService.prototype.createPostText = function (internalPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + internalPost.title + '","author":' + this.userService.getGlobalUser().id + '}}';
        // console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //  console.log("post text method called inside");
        return this.http.post(this.url + 'create_by_json', body, options);
    };
    PostService.prototype.uploadImage = function (payload) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // console.log("post image method called inside");
        return this.http.post('http://localhost:8080/Webtech2Project/rest/file/postit', payload);
    };
    PostService.prototype.createPostImage = function (res, title) {
        if (res.status == 200) {
            // console.log("img post appears to be succesful");
            var path = res.json().location;
            console.log("path from json : " + path);
            var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":"' + path + '","contentText":null,"date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + title + '","author":' + this.userService.getGlobalUser().id + '}}';
            //  console.log("Stringified post : " + body);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            //  console.log("post text method called inside");
            return this.http.post(this.url + 'create_by_json', body, options);
        }
        else {
            // console.log("CreatePostImage: Response status other than 200, in fact it was " + res.status);
        }
    };
    PostService.prototype.updatePostText = function (id, internalPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + internalPost.title + '","author":' + this.userService.getGlobalUser().id + '}}';
        // console.log("Stringified post : " + body + " --- ID : " +  id);
        //console.log(this.url+'update/'+id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // console.log(body + " +++ " +  options);
        return this.http.post(this.url + 'update/' + id, body, options);
    };
    PostService.prototype.updatePostImage = function (res, title, id) {
        if (res.status == 200) {
            // console.log("img post appears to be succesful");
            var path = res.json().location;
            //  console.log("path from json : " + path);
            var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":"' + path + '","contentText":null,"date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + title + '","author":' + this.userService.getGlobalUser().id + '}}';
            // console.log("Stringified post : " + body);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            //  console.log("post text method called inside");
            //  console.log("call post for UPDATAETE");
            return this.http.post(this.url + 'update/' + id, body, options);
        }
        else {
            // console.log("CreatePostImage: Response status other than 200, in fact it was " + res.status);
        }
    };
    // TODO Wie oben: erst neues Bild hochladen, dann status prüfen und path aus der response als neuen Wert setzen
    // TODO Entsprechend muss nur Title & ContentImage aktualisiert werden!!!s
    /* updatePostImage(payload : any, title: string, id : number) : any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log("post image method called inside");
      this.http.post('http://localhost:8080/Webtech2Project/rest/file/postit', payload).toPromise().then(
        res => {
          if(res.status == 200) {
            console.log("img post appears to be succesful");
            let path = res.json();
            console.log("path from json : " + path);
  
            let body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage"' + path +',"contentText":null,"date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + title + '","author":' + this.userService.getGlobalUser().id + '}}';
            console.log("Stringified post : " + body);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log("post text method called inside");
            return this.http.post(this.url+'update/'+id, body, options);
          }
          else {
            console.log("CreatePostImage: Response status other than 200, in fact it was " + res.status);
          }
        }
  
      );
  
    } */
    PostService.prototype.createReplyText = function (internalPost, parentPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":1,"lastModified":1498663847000,"responseTo":' + parentPost.id + ',"title":"' + internalPost.title + '","author":' + this.userService.getGlobalUser().id + '}}';
        // console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // console.log("post text method called inside");
        return this.http.post(this.url + 'create_by_json', body, options);
    };
    PostService.prototype.createReplyImage = function (internalPost, parentPost, path) {
        var p = path.json().location;
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":"' + p + '","contentText": null,"date":1498663847000,"isPost":1,"lastModified":1498663847000,"responseTo":' + parentPost.id + ',"title":"' + internalPost.title + '","author":' + this.userService.getGlobalUser().id + '}}';
        // console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // console.log("post text method called inside");
        return this.http.post(this.url + 'create_by_json', body, options);
    };
    PostService.prototype.deletePost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.url + 'delete/' + id, headers);
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], PostService);

var _a, _b;
//# sourceMappingURL=postit.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(userService, postService, route, location) {
        this.userService = userService;
        this.postService = postService;
        this.route = route;
        this.location = location;
        this.title = 'CoLAB';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.help = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.setUser();
        });
        this.globlUsr = this.userService.getGlobalUser();
    };
    ProfileComponent.prototype.setUser = function () {
        var _this = this;
        // falls es keine Nummer ist
        if (isNaN(this.id)) {
            // getGlobalUser details for profile page
            this.postService.getAllPostsByUser(this.userService.getGlobalUser().id).then(function (res) { return _this.profilePosts = res; });
            this.user = this.userService.getGlobalUser();
            this.path = 'http://localhost:8080/' + this.user.avatar;
            this.id = this.user.id;
        }
        else {
            // get details for User with param ID from URL
            this.postService.getAllPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
            this.userService.getUser(this.id).then(function (res) { return _this.user = res; });
            this.path = 'http://localhost:8080/' + this.user.avatar;
        }
    };
    ProfileComponent.prototype.showAll = function () {
        var _this = this;
        this.postService.getAllPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.onlyOwnPosts = function () {
        var _this = this;
        this.postService.getOnlyPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.onlyOwnReplies = function () {
        var _this = this;
        this.postService.getOnlyRepliesByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.setId = function (num) {
        this.id = num;
    };
    ProfileComponent.prototype.deletePost = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        this.postService.deletePost(selected.id).subscribe(function (data) {
            _this.updateFeed(data, selected);
            //   this.userService.refreshUser();
        });
    };
    ProfileComponent.prototype.updateFeed = function (data, element) {
        if (data.status == 200) {
            var ind = this.profilePosts.indexOf(element);
            this.profilePosts.splice(ind, 1);
        }
        else {
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'profilepage',
        template: "\n    <main>\n      <div class=\"col_4\">\n        <div class=\"infos\">\n          <div class=\"avatar\">\n            <img src=\"http://localhost:8080/{{user?.avatar}}\" class=\"profpicfull\"/>\n          </div>\n\n          <div class=\"contactinfos\">\n            <span class=\"contact\"><i class=\"material-icons\">face</i> {{user?.name}} {{user?.surname}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">business</i>{{user?.location}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">phone</i>{{user?.phone}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">print</i>{{user?.fax}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">cake</i>{{user?.birthDate | date}}</span>\n          </div>\n        </div>\n\n        <div class=\"sort\">\n          <span class=\"sortspan\" (click)=\"showAll()\">Alles anzeigen</span>\n          <span class=\"sortspan\" (click)=\"onlyOwnPosts()\">Nur eigene Posts anzeigen</span>\n          <span class=\"sortspan\" (click)=\"onlyOwnReplies()\">Nur Antworten anzeigen</span>\n        </div>\n\n        <div *ngFor=\"let posts of profilePosts\">\n          <div class=\"results\">\n            <div class=\"content\">\n              <div class=\"flexcol\">\n                <div class=\"flexrow\">\n                  <div class=\"item stats\">\n                    <img class=\"feedpic\" src=\"http://localhost:8080/{{posts.avatar_path}}\">\n\n                    <div class=\"text\">\n                      <ul class=\"ulstat\">\n                        <li>by {{posts.author_name}} {{posts.author_surname}}</li>\n                        <li>Replies:{{posts.postit_replies}}</li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"item_2 flexcol\">\n                    <div *ngIf=\"!posts.contentImage\">\n                      <div class=\"item\">\n                        <h1>{{posts.title}} </h1>\n                        {{posts.contentText}}\n                      </div>\n                    </div>\n                    <div *ngIf=\"!posts.contentText\">\n                      <div class=\"item\">\n                        <h1>{{posts.title}} </h1>\n                        <img class=\"postimg\" src=\"{{posts.contentImage}}\"/>\n                      </div>\n                    </div>\n                    <!--  <div class=\"item lmod\">\n                                      Created: 01.06.2017 13:37. Last modified: -\n                                  </div> -->\n                    <br>\n                    <span class=\"created\"> Created: {{ ( posts.date | date )}}\n                      <span *ngIf=\"posts.lastModified == null\"> Last modified: -</span>\n                      <span *ngIf=\"posts.lastModified != null\">Last modified: {{posts.lastModified || date}}</span>\n                    </span>\n                  </div>\n                  <div class=\"item_4 symbols\">\n                    <!-- <a href=\"#\" class=\"nounder\">\n                      <i class=\"material-icons\">create</i>\n                    </a> -->\n                    <div *ngIf=\"posts.author == globlUsr.id || globlUsr.position == 1\">\n                      <br>\n                      <br>\n                      <div class=\"nounder\" (click)=\"deletePost(posts, $event)\">\n                        <i class=\"material-icons\">clear</i>\n                      </div>\n                      <br>\n                      <br>\n                    </div>\n                    <!--\n                  <a href=\"#\" class=\"nounder\">\n                    <i class=\"material-icons\">reply</i>\n                  </a> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main> ",
        providers: [__WEBPACK_IMPORTED_MODULE_5__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__postit_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profilebadge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileBadge; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileBadge = (function () {
    function ProfileBadge(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.updateUserStatus.subscribe(function (val) { _this.user = _this.userService.getGlobalUser(); console.log("update in profbadge called"); });
    }
    ProfileBadge.prototype.ngOnInit = function () {
        this.user = this.userService.getGlobalUser();
        console.log(this.user.name);
        this.path = 'http://localhost:8080/' + this.user.avatar;
        console.log("AVATAR PATH : " + this.user.avatar);
    };
    ProfileBadge.prototype.logUserOut = function () {
        this.userService.logOut();
    };
    return ProfileBadge;
}());
ProfileBadge = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'profileBadge',
        template: "\t\t\n    <div class=\"col_1_adjusted\">\n      <div class=\"feedtext\">\n        You\n      </div>\n      <img src={{path}} class=\"profilepic\"/>\n      <br>\n      <div class=\"profilestats\">\n        Amount of posts:\n        <br> {{user.postit_count}}\n       <!-- <br>\n        Amount of views:\n        <br>\n        1337 -->\n      </div>\n      <br>\n      <div class=\"profstatdiv\">\n        <ul class=\"profilestatul\">\n          <li class=\"leftli\" routerLink=\"\"><a><i class=\"material-icons\">keyboard_arrow_right</i> Feed</a></li>\n          <li class=\"leftli\" routerLink=\"/profile\"><a ><i class=\"material-icons\">keyboard_arrow_right</i> Profile</a></li>\n          <li class=\"leftli\" routerLink=\"/settings\"><a><i class=\"material-icons\">keyboard_arrow_right</i> Settings</a></li>\n          <li class=\"leftli\" routerLink=\"/logout\" (click)=\"logUserOut()\" ><a><i class=\"material-icons\">keyboard_arrow_right</i> Signout</a></li>\n        </ul>\n      </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileBadge);

var _a;
//# sourceMappingURL=profilebadge.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.checkpw = '';
        this.updateUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.confirmpw = '';
        this.tempUser = userService.getGlobalUser();
        console.log("OnInit is bday set to " + this.tempUser.birthDate);
        this.tempUser.password = '';
        this.updateUser.password = '';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.http.get('http://localhost:8080/Webtech2Project/rest/login/getPrincipal').subscribe(function (data) { return console.log("PRINCIPAL TEST IN SETTINGS : " + data); });
    };
    SettingsComponent.prototype.tryUpdate = function () {
        var _this = this;
        if (this.updateUser.email != null) {
            // wanted to update, but invalid input
            if (this.updateUser.email.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("email gefüllt");
                this.tempUser.email = this.updateUser.email;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user email null");
        }
        if (this.updateUser.birthDate != null) {
            console.log("birthdate gefüllt");
            this.tempUser.birthDate = this.updateUser.birthDate;
        }
        else {
            console.log("update user birth date null");
        }
        if (this.updateUser.name != null) {
            // wanted to update, but invalid input
            if (this.updateUser.name.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("name gefüllt");
                this.tempUser.name = this.updateUser.name;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user name null");
        }
        if (this.updateUser.surname != null) {
            // wanted to update, but invalid input
            if (this.updateUser.surname.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("surname gefüllt");
                this.tempUser.surname = this.updateUser.surname;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user surname null");
        }
        if (this.updateUser.location != null) {
            // wanted to update, but invalid input
            if (this.updateUser.location.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("location gefüllt");
                this.tempUser.location = this.updateUser.location;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user locatoin null");
        }
        if (this.updateUser.phone != null) {
            // wanted to update, but invalid input
            if (this.updateUser.phone.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("phone gefüllt");
                this.tempUser.phone = this.updateUser.phone;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user phine null");
        }
        if (this.updateUser.fax != null) {
            // wanted to update, but invalid input
            if (this.updateUser.phone.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("fax gefüllt");
                this.tempUser.fax = this.updateUser.fax;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user fax null");
        }
        if (this.updateUser.gender != null) {
            // wanted to update, but invalid input
            if (this.updateUser.phone.replace(/\s/g, '').length == 0) {
                console.log("nur aus whitespaces bestehend!");
            }
            else {
                // valid input
                console.log("gender gefüllt");
                this.tempUser.gender = this.updateUser.gender;
            }
        }
        else {
            // --> No changes to tempUser
            console.log("update user gender null");
        }
        // Now: all valid changes are already propagated to the tempUser Object.
        // Check for passwords now, then try to update user on the db
        if (this.checkpw.replace(/\s/g, '').length == 0) {
            if (this.updateUser.password.replace(/\s/g, '').length == 0) {
                console.log("beide leer / nur whitespaces");
                if (this.confirmpw.replace(/\s/g, '').length == 0) {
                    // invalid, weil nichtmal confirm pw eingegebn wurde
                    console.log("no conform pw --> invalid (or only not allowed whitespaces)");
                    return;
                }
                else {
                    // beide leer, nur confirmation pw eingebgegen --> valid for update
                    this.tempUser.password = this.confirmpw;
                    console.log("confirm pw not empty, PROCEED");
                }
            }
            else {
                // invalid,
                console.log("nur zweites leer");
                return;
            }
        }
        else {
            if (this.updateUser.password.replace(/\s/g, '').length != 0) {
                console.log("beide felder gefüllt");
                if (this.updateUser.password == this.checkpw) {
                    console.log("beide pws matchen");
                    if (this.confirmpw.replace(/\s/g, '').length != 0) {
                        // valid
                        console.log("valid, alle necessary felder von pw gefüllt, PROCEED");
                        this.tempUser.password = this.updateUser.password;
                    }
                    else {
                        // invalid
                        console.log("beide pw felder gefüllt, aber connfirm pw leer --> invalid");
                        return;
                    }
                }
                else {
                    // invalid
                    console.log("beide pws matchen nicht");
                    return;
                }
            }
            else {
                // invalid
                console.log("nur erstes pw empty");
                return;
            }
        }
        var files = this.imgUp.nativeElement.files;
        if (files.length > 1) {
            console.log("RETURNED SINCE EMPTYX or TOO LARGE");
            return;
        }
        var formData = new FormData();
        formData.append("image", files[0]);
        console.log(files);
        console.log("tempUsr bd = " + this.tempUser.birthDate);
        this.userService.checkPassoword(this.confirmpw).subscribe(function (data) {
            if (data.status != 200) {
                console.log("error in trying to check pw");
                return;
            }
            else {
                // confirm pw was valid
                if (files.length == 1) {
                    // if wants new avatar --> upload avatar first and then updateUser
                    _this.http.post('http://localhost:8080/Webtech2Project/rest/file/avatar', formData).subscribe(function (res) {
                        if (res.status == 200) {
                            var loc = res.json().location;
                            _this.tempUser.avatar = loc;
                            // update Usre with avaar
                            _this.userService.updateUser(_this.tempUser).subscribe(function (data) { return _this.userService.refreshUser(); });
                        }
                        else {
                            console.log("Settings Component: Res status was other than 200");
                        }
                    });
                }
                else {
                    // updateUser with new avatar
                    _this.userService.updateUser(_this.tempUser).subscribe(function (data) { return _this.userService.refreshUser(); });
                }
            }
        });
    };
    return SettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgUpload'),
    __metadata("design:type", Object)
], SettingsComponent.prototype, "imgUp", void 0);
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'settings',
        template: "\n\n    Update your personal information here. <br>\n    All fields are optional, except your current password, which you always need to provide in order to verify yourself.\n    <br>\n   \n    <br>\n    <br>\n    <br>\n    <form>\n      <input type=\"file\" #imgUpload accept=\"image/*\"> <br>\n\n      <input type=\"text\" [(ngModel)]=\"updateUser.email\" name=\"whytho\" placeholder=\"new email\"> <br>\n      <input type=\"password\" [(ngModel)]=\"updateUser.password\" name=\"whytho2\" placeholder=\"change password\"> <br>\n      <input type=\"password\" [(ngModel)]=\"checkpw\" name=\"whytho25\" placeholder=\"confirm new password\"> <br>\n      <input type=\"date\" [(ngModel)]=\"updateUser.birthDate\" name=\"whytho3\" placeholder=\"change Birth date (YYYY-MM-DD)\"> <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.name\" name=\"whytho4\" placeholder=\"change first name\"> <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.surname\" name=\"whytho5\" placeholder=\"change last name\"> <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.location\" name=\"whytho6\"\n             placeholder=\"Change your location inside the company\">  <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.phone\" name=\"whytho7\" placeholder=\"Change your phone\">  <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.fax\" name=\"whytho8\" placeholder=\"Change your fax\">  <br>\n      <input type=\"text\" [(ngModel)]=\"updateUser.gender\" name=\"whytho9\" placeholder=\"Change your gender\"> <br>\n\n\n      <br>\n      <br>\n      Please type in your current password to verify all changes upon sending.\n      <br>\n      <input type=\"password\" [(ngModel)]=\"confirmpw\" name=\"whytho10\" placeholder=\"Your password\">\n\n\n      <input type=\"submit\" value=\"Update your profile\" (click)=\"tryUpdate()\">\n    </form>\n\n  ",
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/sort.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortService = (function () {
    function SortService() {
        // 0 = newest
        // 1 = oldest
        // 2 = most popular
        this.sortOrder = 0;
    }
    SortService.prototype.ngOnInit = function () {
        this.sortOrder = 0;
    };
    SortService.prototype.setSortOrder = function (n) {
        this.sortOrder = n;
        console.log("Set sort order in SortService to " + n);
    };
    SortService.prototype.getSortOrder = function () {
        return this.sortOrder;
    };
    return SortService;
}());
SortService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], SortService);

//# sourceMappingURL=sort.service.js.map

/***/ }),

/***/ "../../../../../src/app/sortfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_service__ = __webpack_require__("../../../../../src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_service__ = __webpack_require__("../../../../../src/app/feed.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortBy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SortBy = (function () {
    function SortBy(postService, sortService, feedService) {
        this.postService = postService;
        this.sortService = sortService;
        this.feedService = feedService;
    }
    SortBy.prototype.sortNewest = function () {
        var _this = this;
        this.sortService.setSortOrder(0);
        this.postService.getSortedByNewest().then(function (res) {
            _this.feedService.resetFeed();
            _this.feedService.pushFeedFromSort(res);
        });
    };
    SortBy.prototype.sortOldest = function () {
        var _this = this;
        this.sortService.setSortOrder(1);
        this.postService.getSortedByOldest().then(function (res) {
            _this.feedService.resetFeed();
            _this.feedService.pushFeedFromSort(res);
        });
    };
    SortBy.prototype.sortPopular = function () {
        var _this = this;
        this.sortService.setSortOrder(2);
        this.postService.getSortedByPopular().then(function (res) {
            _this.feedService.resetFeed();
            _this.feedService.pushFeedFromSort(res);
        });
    };
    return SortBy;
}());
SortBy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sortby',
        template: "\t\t\t<div class=\"sortby\">\n    <div class=\"sortheading\">\n      <i class=\"material-icons\">sort</i> Sort feed\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortNewest()\">Newest</span>\n      </a>\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortOldest()\">Oldest</span>\n      </a>\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortPopular()\">Most popular</span>\n      </a>\n    </div>\n  </div>\n",
        providers: [__WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sort_service__["a" /* SortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sort_service__["a" /* SortService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__feed_service__["a" /* FeedService */]) === "function" && _c || Object])
], SortBy);

var _a, _b, _c;
//# sourceMappingURL=sortfeed.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.updateUserStatus = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.canCheckRouter = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.url = 'http://localhost:8080/Webtech2Project/rest/userservice/find/';
        this.isLoggedIn = false;
        this.testUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    UserService.prototype.ngOnInit = function () {
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + id)
            .toPromise()
            .then(function (response) { return response.json().user; });
    };
    UserService.prototype.check = function () {
    };
    UserService.prototype.setUser = function (u) {
        this.testUser = u;
        this.isLoggedIn = true;
        this.updateUserStatus.next(true);
    };
    UserService.prototype.getGlobalUser = function () {
        return this.testUser;
    };
    UserService.prototype.logOut = function () {
        var body = '';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log("wub");
        return this.http.post('http://localhost:8080/Webtech2Project/rest/login/logout', body, options);
    };
    UserService.prototype.setToLoggedOut = function () {
        this.testUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.isLoggedIn = false;
        this.updateUserStatus.next(true);
    };
    UserService.prototype.createUser = function (tempUser) {
        console.log("Create user called");
        var d = new Date(tempUser.birthDate);
        var t = d.getTime();
        console.log("t; " + t);
        var body = ' {"user":{"id":-1,"avatar":"/colab/resources/avatar/default.jpg","birthDate":' + t + ',"email":"' + tempUser.email + '","fax":"' + tempUser.fax + '","gender":"' + tempUser.gender + '","location":"' + tempUser.location + '","name":"' + tempUser.name + '","password":"' + tempUser.password + '","phone":"' + tempUser.phone + '","registerDate":0,"surname":"' + tempUser.surname + '","postits":[],"position":3}}';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log("create user : body : " + body);
        return this.http.post('http://localhost:8080/Webtech2Project/rest/userservice/create_by_json', body, options);
        // {"user":{"id":2,"avatar":"https://randomuser.me/api/portraits/men/14.jpg","birthDate":1500242400000,"email":"nicolas.lavigne@example.com","fax":"284-484-5005","gender":"male","location":"stratford","name":"nicolas","password":null,"phone":"647-028-3924","registerDate":1500310302217,"surname":"lavigne","postits":[],"position":3}}
    };
    UserService.prototype.checkPassoword = function (pw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = ' {"user":{"id":-1,"avatar":"a","birthDate":0,"email":"a","fax":"a","gender":"a","location":"a","name":"a","password":"' + pw + '","phone":"a","registerDate":0,"surname":"a","postits":[],"position":3}} ';
        return this.http.post('http://localhost:8080/Webtech2Project/rest/userservice/check_password', body, options);
    };
    UserService.prototype.updateUser = function (tempUser) {
        console.log("Create user called");
        // let d = new Date(tempUser.birthDate);
        //  let t = d.getTime();
        console.log("tempUser bday =  " + tempUser.birthDate);
        var body = ' {"user":{"id":-1,"avatar":"' + tempUser.avatar + '","birthDate":' + tempUser.birthDate + ',"email":"' + tempUser.email + '","fax":"' + tempUser.fax + '","gender":"' + tempUser.gender + '","location":"' + tempUser.location + '","name":"' + tempUser.name + '","password":"' + tempUser.password + '","phone":"' + tempUser.phone + '","registerDate":0,"surname":"' + tempUser.surname + '","postits":[],"position":3}}';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log("create user : body : " + body);
        return this.http.post('http://localhost:8080/Webtech2Project/rest/userservice/update/' + tempUser.id, body, options);
    };
    UserService.prototype.refreshUser = function () {
        var _this = this;
        this.http.get('http://localhost:8080/Webtech2Project/rest/userservice/find_mail/' + this.testUser.email).subscribe(function (res) {
            _this.testUser = res.json().user;
            _this.updateUserStatus.next(true);
        });
    };
    UserService.prototype.decrement = function () {
        this.testUser.postit_count = this.testUser.postit_count - 1;
        this.updateUserStatus.next(true);
    };
    UserService.prototype.setToTrue = function () {
        this.isLoggedIn = true;
    };
    UserService.prototype.setToFalse = function () {
        this.isLoggedIn = false;
    };
    UserService.prototype.callUpdate = function () {
        this.updateUserStatus.next(true);
    };
    UserService.prototype.increment = function () {
        this.testUser.postit_count = this.testUser.postit_count + 1;
        this.updateUserStatus.next(true);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map