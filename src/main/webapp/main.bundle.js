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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({ selector: 'answer',
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



var Test = 1;
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'CoLAB';
        this.tempNewPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]();
        this.profbadge = {
            amountposts: 1
        };
    }
    AppComponent.prototype.ngOnInit = function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "    <navbar> </navbar>\n   <router-outlet></router-outlet>\n  ",
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
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
            __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            // TODO Settings, Logout, 404, Login form
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '', component: __WEBPACK_IMPORTED_MODULE_13__mainpage_component__["a" /* MainpageComponent */]
                },
                {
                    path: 'profile/:id',
                    component: __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */]
                },
                {
                    path: 'profile',
                    component: __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
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
    function ChoiceComponent(postService) {
        this.postService = postService;
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
    /* ngOnChanges() : void {
     this.calculateType();
   } */
    ChoiceComponent.prototype.ngOnInit = function () {
        console.log("INIT CHOICE with " + this.isNewPost);
        this.calculateType();
        this.tempNewPost = Object.assign({}, this.selPost);
    };
    //  https://plnkr.co/edit/eB1CiS87hSmxEnDKZMwv?p=preview
    // Mozilla API zu FormData
    // Alle ELemente (ist hier nur 1)  aus FileList in FormData packen, die dann posten für image
    // TODO Popup falls was schiefgeht bzw handleError mit Popup einbauen
    ChoiceComponent.prototype.sendWithText = function () {
        var _this = this;
        var res;
        console.log("tempnewpost before sending" + this.tempNewPost.title + " --- " + this.tempNewPost.contentText);
        res = this.postService.createPostText(this.tempNewPost).subscribe(function (data) { return _this.reset(); }, function (error) { return _this.handleError(); });
        console.log(res);
        this.reset();
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
    ChoiceComponent.prototype.sendWithImage = function () {
        var _this = this;
        var files = this.imgUp.nativeElement.files;
        if (files.length === 0) {
            console.log("RETURNED SINCE EMPTYX");
            return;
        }
        ;
        var formData = new FormData();
        formData.append(files[0].name, files[0]);
        console.log(files);
        this.postService.createPostImage(formData, this.tempNewPost.title)
            .subscribe(function (data) { return _this.reset(); }, function (error) { return _this.handleError(); });
        this.reset();
    };
    ChoiceComponent.prototype.updateText = function () {
        var _this = this;
        console.log("Selected post is  " + this.selPost.title + " --- " + this.selPost.contentText);
        this.postService.updatePostText(this.selPost.id, this.tempNewPost).subscribe(function (data) { return _this.updateAffected(data); });
        this.reset();
        this.cancel(new Event("egal"));
    };
    ChoiceComponent.prototype.updateImage = function () {
        this.reset();
        this.cancel(new Event("egal"));
    };
    // TODO ANzeige bug fixen
    ChoiceComponent.prototype.updateAffected = function (data) {
        var _this = this;
        if (data.status == 200 || data.status == 201) {
            console.log("response was ok");
            console.log("Array length : " + this.fp.length);
            var ind_1 = this.fp.indexOf(this.selPost, 0);
            // get by id and then set to post ion array
            this.postService.getById(this.tempNewPost.id).then(function (res) {
                if (res.status == 200) {
                    console.log(("0: Index" + ind_1));
                    console.log("1 : " + _this.fp[ind_1].title);
                    res = res.json().postit;
                    console.log("RES SHOULD BE JSON NOW : " + res);
                    _this.fp[ind_1] = Object.assign({}, res);
                    _this.type = 100;
                    _this.fp[ind_1].isBeingEdited = false;
                    _this.fp[ind_1].isTypingReply = false;
                    console.log("2: " + _this.fp[ind_1].title);
                }
                else {
                    console.log("update response was not ok");
                    _this.handleError();
                }
            });
        }
        else {
            console.log("data status was not ok");
            this.handleError();
        }
    };
    ChoiceComponent.prototype.handleError = function () {
    };
    ChoiceComponent.prototype.reset = function () {
        this.type = 0;
        this.tempNewPost = Object.assign({}, this.selPost);
        this.editMode.emit(false);
        this.emit();
    };
    // TODO: Aus der Response muss JSON geparst werden und dann in das entsprechende objekt gepackt werden!
    // Sowohl bei new Post als auch bei new reply
    // dafür von auf chris warten (hab ID ja vorher nicht)
    ChoiceComponent.prototype.postReplyText = function () {
        var _this = this;
        this.postService.createReplyText(this.tempNewPost, this.topLevelPost).subscribe(function (data) { return _this.updateAffected(data); });
        this.reset();
    };
    ChoiceComponent.prototype.postReplyImage = function () {
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
            console.log("New post");
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
                    console.log("author == null");
                    console.log("should be a new reply without yet an author");
                }
                else {
                    console.log("AUTHOR NOT NULL!!");
                    // Post was passed --> check if post contained image or not
                    if (this.selPost.contentImage === null) {
                        this.type = 1;
                        console.log("IMG = NULL");
                        console.log("ContentIMG undefined, should be text");
                    }
                    else {
                        console.log("NTEXT = NULL");
                        console.log("THIS ; " + this.selPost.author);
                        this.type = 2;
                        console.log("ContentImg defined, shold be IMG");
                    }
                }
            }
        }
    };
    return ChoiceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('imgUpload'),
    __metadata("design:type", Object)
], ChoiceComponent.prototype, "imgUp", void 0);
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
    __metadata("design:type", Array)
], ChoiceComponent.prototype, "fp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]) === "function" && _b || Object)
], ChoiceComponent.prototype, "topLevelPost", void 0);
ChoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({ selector: 'choice',
        template: "    \n    \n    <div *ngIf=\"isNewPost === true\">\n        <div *ngIf=\"type == 0\">\n            <div (click)=\"writeText($event)\">\n                Write a text  \n            </div>\n          <div (click)=\"uploadImage($event)\">\n            Or upload an image!\n          </div>\n          \n        </div>\n        \n        <div *ngIf=\"type == 1\">\n          <form (ngSubmit)=\"sendWithText()\" (click)=\"testLog()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\" placeholder=\"Give your post a title!\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" placeholder=\"Give your post some content!\"></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack()\">\n    \n          </form>\n        </div>\n        <div *ngIf=\"type == 2\">\n          <form (ngSubmit)=\"sendWithImage()\" enctype=\"multipart/form-data\"> \n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\" placeholder=\"Give your post a title!\"></textarea>\n          <br> Upload your image! <br> <br>    \n          <input type=\"file\" #imgUpload accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack($event)\">\n          </form>\n        </div>\n    </div>\n    \n    <div *ngIf=\"isNewPost === false\">\n      <!--Aufpassen mit type: Bearbeiten eines Posts hat nur 2 Types, img und text\n       Deshalb; Hier OnInit MEthode, die guckt welcher der Inputs leer ist und welcher nicht -->\n      <div *ngIf=\"type == 1\">\n        <div (click)=\"editModeText($event)\">\n          Edit text\n        </div>\n        <div (click)=\"editModeImage($event)\">\n          Replace your text with an image!\n        </div>\n        <div (click)=\"cancel($event)\"> Cancel edit\n        </div>\n      </div>\n\n      <div *ngIf=\"type == 2\">\n        <div (click)=\"editModeImage($event)\">\n          Choose a different image to upload\n        </div>\n        <div (click)=\"editModeText($event)\">\n          Replace your image with a text\n        </div>\n        <div (click)=\"cancel($event)\"> Cancel edit\n        </div>\n      </div>\n      \n      <div *ngIf=\"type == 3\">\n        <form (ngSubmit)=\"updateText()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" ></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>        \n      </div>\n\n      <div *ngIf=\"type == 4\">\n        <form (ngSubmit)=\"updateImage()\" enctype=\"multipart/form-data\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <br> Upload your new image! <br> <br>\n          <input type=\"file\" #imgUpload accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n      \n      <div *ngIf=\"type == 5\">\n        <div (click)=\"replyText($event)\">\n          Reply with text\n        </div>\n        <div (click)=\"replyImage($event)\">\n          Reply with an image instead!\n        </div>\n        <div (click)=\"cancelReply($event)\"> Cancel edit\n        </div>        \n      </div>\n\n      <div *ngIf=\"type == 6\">\n        <form (ngSubmit)=\"postReplyText()\">\n          <textarea [(ngModel)]=\"tempNewPost.title\" name=\"why\" class=\"materialize-textarea\"></textarea>\n          <textarea [(ngModel)]=\"tempNewPost.contentText\" name=\"why2\" class=\"materialize-textarea\" ></textarea>\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n\n      <div *ngIf=\"type == 7\">\n        <form (ngSubmit)=\"postReplyImage()\">\n          <br> Upload your new image! <br> <br>\n          <input type=\"file\" #imgUpload accept=\"image/*\">\n          <input type=\"submit\" class=\"btn\" value=\"Post\">\n          <input type=\"submit\" class=\"btn\" value=\"Go back\" (click)=\"goBack_2($event)\">\n        </form>\n      </div>\n\n    </div>\n    \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]) === "function" && _c || Object])
], ChoiceComponent);

var _a, _b, _c;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({ selector: 'edit',
        template: "\n   <div *ngIf=\"type == 1\">\n     <div>\n       Edit text\n     </div>\n     <div>\n       Replace your text with an image!\n     </div>\n     <div> Cancel edit\n     </div>\n   </div>\n   \n   <div *ngIf=\"type == 2\">\n      <div>\n        Choose a different image to upload\n      </div>\n      <div>\n        Replace your image with a text\n      </div>\n      <div> Cancel edit\n      </div>\n   </div> \n \t\n  "
    })
], EditComponent);

var _a;
//# sourceMappingURL=edit.component.js.map

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
        this.feedPosts = [];
        this.repliesForCurrent = [];
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'mainpage',
        template: "   <main>\n    <div class=\"col_1\">\n      <profileBadge>\n      </profileBadge>\n    </div>\n    <div class=\"col_2\">\n      <h2>Das ist ein Test: </h2>\n      <div class=\"formdiv\">\n        <choice [isNewPost]=\"true\">\n        </choice>\n      </div>\n      <h2 class=\"morespace\">See what everyone in your company is up to!</h2>\n\n      <post [feedPosts]=\"feedPosts\" [repliesForCurrent]=\"repliesForCurrent\"></post>\n    </div>\n\n    <div class=\"col_3\">\n      <sortby></sortby>\n    </div>\n  </main>\n  "
    })
], MainpageComponent);

//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({ selector: 'navbar',
        template: "<div class=\"navbar\">\n                <nav>\n                  <ul class=\"navul\">\n                     <li class=\"mmenu midmenu\" routerLink=\"/profile\"> <i class=\"material-icons\">account_circle</i><span class=\"atest\">PROFILE</span></li>\n                     <li class=\"mmenu midmenu\" routerLink=\"/settings\"><i class=\"material-icons\">build</i><span class=\"atest\">SETTINGS</span></li>\n                     <li class=\"mmenu colab\" routerLink=\"\" ><span class=\"co\"><i class=\"material-icons\">keyboard_arrow_right</i>Co</span><span class=\"lab\">LAB<i class=\"material-icons\">keyboard_arrow_left</i></span></li>\n                     <li class=\"mmenu midmenu\" routerLink=\"/logout\"><i class=\"material-icons\">power_settings_new</i><span class=\"atest\">SIGN OUT</span></li>\n                     <li class=\"mmenu midmenu searchbar\">                       \n                       <form action=\"#\">\n                           <input type=\"search\" name=\"search\" class=\"mainsearch\" placeholder=\"Search for things\">\n                       </form>\n                    </li>\n                  </ul>\n                </nav>\n                </div>\n   "
    })
], NavbarComponent);

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
    function PostComponent(postService) {
        this.postService = postService;
        this.title = 'CoLAB';
        this.editMode = false;
    }
    // TODO DELETE, USER, RELOAD FIXEWN
    PostComponent.prototype.onSelectAnswer = function (selected, ev) {
        this.selectedAnswer = selected;
        ev.stopPropagation();
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnINIT for PostItComponent was called");
        this.postService.getAllPosts().then(function (res) {
            // this.feedPosts = res;
            _this.feedPosts = [];
            console.log("res was : " + res.toString());
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var elem = res_1[_i];
                console.log("Current element in for loop : " + elem);
                // add to feedPosts if element is post
                if (elem.isPost === 0) {
                    console.log("Current element " + elem.id + " is Post ");
                    var len = _this.feedPosts.push(elem);
                    console.log("AL Length after push: " + _this.feedPosts.length);
                    _this.feedPosts[len - 1].repliesVisible = false;
                    _this.feedPosts[len - 1].isBeingEdited = false;
                    _this.feedPosts[len - 1].isTypingReply = false;
                }
            }
        });
    };
    PostComponent.prototype.cancelReply = function (post) {
        post.isTypingReply = false;
        // temporarily added element can be deleted now as user chose to cancel editing
        this.repliesForCurrent.shift();
    };
    //TODO Answer in eigene Component lagern, die dann dynamically GEADDET WIRD
    //DADURCH DANN HOFFENTLICH KEIN RERENDER MEHR!
    // https://angular.io/guide/dynamic-component-loader#dynamic-component-loading
    // https://medium.com/tixdo-labs/angular-2-dynamic-component-loader-752c3235bf9
    PostComponent.prototype.onSelect = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        this.repliesForCurrent = [];
        if (this.selectedPost === selected) {
            // if is already showing replies --> hide
            if (this.selectedPost.repliesVisible) {
                this.selectedPost.repliesVisible = false;
            }
            else {
                this.selectedPost.repliesVisible = true;
                // fetch replies
                this.postService.getRepliesTo(selected.id).then(function (res) {
                    for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                        var elem = res_2[_i];
                        // add to feedPosts if element is answer / responseTo
                        if (elem.isPost === 1) {
                            // console.log("Current answer " + elem.id + " is answer ");
                            var len = _this.repliesForCurrent.push(elem);
                            //   console.log("AL Length after push: " +  this.repliesForCurrent.length);
                            _this.repliesForCurrent[len - 1].repliesVisible = false;
                            _this.repliesForCurrent[len - 1].isBeingEdited = false;
                            _this.repliesForCurrent[len - 1].isTypingReply = false;
                        }
                    }
                });
            }
        }
        else {
            if (this.selectedPost != null) {
                this.selectedPost.repliesVisible = false;
            }
            this.repliesForCurrent = [];
            this.selectedPost = selected;
            this.postService.getRepliesTo(selected.id).then(function (res) {
                for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                    var elem = res_3[_i];
                    // add to feedPosts if element is post
                    if (elem.isPost === 1) {
                        //  console.log("Current answer " + elem.id + " is answer ");
                        var len = _this.repliesForCurrent.push(elem);
                        //   console.log("AL Length after push: " +  this.repliesForCurrent.length);
                        _this.repliesForCurrent[len - 1].repliesVisible = false;
                        _this.repliesForCurrent[len - 1].isBeingEdited = false;
                        _this.repliesForCurrent[len - 1].isTypingReply = false;
                    }
                }
            });
            this.selectedPost.repliesVisible = true;
        }
    };
    PostComponent.prototype.test = function () {
        //  const factory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
        // const ref = this.viewContainerRef.createComponent(factory);
        //   ref.changeDetectorRef.detectChanges();
    };
    PostComponent.prototype.assignPost = function (post) {
    };
    PostComponent.prototype.refresh = function () {
        var _this = this;
        this.postService.getAllPosts().then(function (res) {
            // this.feedPosts = res;
            _this.feedPosts = [];
            for (var _i = 0, res_4 = res; _i < res_4.length; _i++) {
                var elem = res_4[_i];
                // add to feedPosts if element is post
                if (elem.isPost === 0) {
                    console.log("Current element " + elem.id + " is Post ");
                    var len = _this.feedPosts.push(elem);
                    console.log("AL Length after push: " + _this.feedPosts.length);
                    _this.feedPosts[len - 1].repliesVisible = false;
                    _this.feedPosts[len - 1].isBeingEdited = false;
                }
            }
        });
    };
    PostComponent.prototype.editAnswer = function (selected, ev) {
        console.log("Clicked edit answer on " + selected.title);
        this.selectedAnswer = selected;
        this.editedPost = Object.assign({}, selected);
        ev.stopPropagation();
        if (selected.isBeingEdited == true) {
            selected.isBeingEdited = false;
        }
        else {
            for (var _i = 0, _a = this.repliesForCurrent; _i < _a.length; _i++) {
                var elem = _a[_i];
                //console.log("Compare " + elem.id + " to " + selected.id);
                if (elem === selected) {
                    selected.isBeingEdited = true;
                    //   console.log("IF: Selected being edited = true");
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
                // console.log("Compare " + elem.id + " to " + selected.id);
                if (elem === selected) {
                    selected.isBeingEdited = true;
                    //  console.log("IF: Selected being edited = true");
                }
                else {
                    elem.isBeingEdited = false;
                }
            }
        }
        if (selected.isBeingEdited == false) {
            console.log("Current.isBeingEdited is now set to false");
        }
        else {
            console.log("Current.isBeingEdited is now set to true");
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
        this.postService.deletePost(selected.id).subscribe(function (data) { return _this.updateFeed(data, selected); });
    };
    // Backup
    /* reply(selected : Post, ev : any): void {
      ev.stopPropagation();
      // if it wasnt selected previously, get replies
      if(selected.repliesVisible == false ){
        this.repliesForCurrent = [];
        console.log("For reply: replies were not visible, not set to visible");
        selected.repliesVisible = true;
        this.postService.getRepliesTo(selected.id).then(res => {
          for (let elem of res) {
  
            // add to feedPosts if element is answer / responseTo
            if (elem.isPost === 1) {
             // console.log("Current answer " + elem.id + " is answer ");
              let len = this.repliesForCurrent.push(elem);
            //  console.log("AL Length after push: " +  this.repliesForCurrent.length);
  
              this.repliesForCurrent[len-1].repliesVisible = false;
              this.repliesForCurrent[len-1].isBeingEdited = false;
              this.repliesForCurrent[len-1].isTypingReply = false;
            }
          }
        });
  
        console.log("Unshift test: Length before : " + this.repliesForCurrent.length);
        // replies are loaded. shift arreay 1 to right
        this.repliesForCurrent.unshift(new Post());
        this.repliesForCurrent[0].isTypingReply = true;
        console.log("0 set to true");
      }
  
      else {
        selected.repliesVisible = false;
      }
  
  
    } */
    PostComponent.prototype.updateFeed = function (data, element) {
        if (data.status == 200) {
            // isPost --> delete from feedPosts
            if (element.isPost == 0) {
                console.log("Delete Post");
                var ind = this.feedPosts.indexOf(element);
                this.feedPosts.splice(ind, 1);
            }
            else {
                console.log("Delete reply");
                var ind = this.repliesForCurrent.indexOf(element);
                this.repliesForCurrent.splice(ind, 1);
            }
        }
        else {
            console.log("Error int rying to delete");
        }
    };
    PostComponent.prototype.reply = function (selected, ev) {
        var _this = this;
        ev.stopPropagation();
        // if it wasnt selected previously, get replies
        this.repliesForCurrent = [];
        console.log("For reply: replies were not visible, not set to visible");
        selected.repliesVisible = true;
        this.postService.getRepliesTo(selected.id).then(function (res) {
            for (var _i = 0, res_5 = res; _i < res_5.length; _i++) {
                var elem = res_5[_i];
                // add to feedPosts if element is answer / responseTo
                if (elem.isPost === 1) {
                    // console.log("Current answer " + elem.id + " is answer ");
                    var len = _this.repliesForCurrent.push(elem);
                    //  console.log("AL Length after push: " +  this.repliesForCurrent.length);
                    _this.repliesForCurrent[len - 1].repliesVisible = false;
                    _this.repliesForCurrent[len - 1].isBeingEdited = false;
                    _this.repliesForCurrent[len - 1].isTypingReply = false;
                }
            }
        });
        console.log("Unshift test: Length before : " + this.repliesForCurrent.length);
        // replies are loaded. shift arreay 1 to right
        this.repliesForCurrent.unshift(new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]());
        this.repliesForCurrent[0].isTypingReply = true;
        console.log("0 set to true");
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PostComponent.prototype, "feedPosts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "repliesForCurrent", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'post',
        template: "    <!-- TODO Eventuell Style wegen Umrandung und Markierung welcher selected ist anpassen\n        Jquery In Angular: https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular2\n        Scrollen mit Jquery: https://stackoverflow.com/questions/6677035/jquery-scroll-to-element\n     -->\n \n      <div *ngFor=\"let current of feedPosts\" (click)=\"onSelect(current, $event)\" > <!-- [class.selected]=\"current === selectedPost\"-->\n      <div class=\"content\" >\n    <div class=\"flexcol\">\n      <div class=\"flexrow\">\n        <div class=\"item stats\">\n          <span class=\"markertest\">\n            \n          </span>\n          <img class=\"feedpic\" src=\"kermit.jpg\">\n\n          <div class=\"text\">\n            <ul class=\"ulstat\">\n              <li>Likes: TODO </li>\n              <li>Replies: TODO {{current.answers}}</li>\n              <li>Views: TODO {{current.clicks}}</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"item_2 flexcol\">\n         <div *ngIf=\"current.isBeingEdited == true\">\n           <choice [fp]=\"feedPosts\" [selPost] = \"selectedPost\" [isNewPost]=\"false\">                 \n                </choice>\n         </div>\n        <div *ngIf=\"current.isBeingEdited == false\"> \n          <div *ngIf=\"!current.contentImage\"> \n             <div class=\"item\">\n                 <h1>{{current.title}}</h1>\n             </div>\n            <br>\n            {{current.contentText}}\n          </div>\n\n          <div *ngIf=\"!current.contentText\">\n            <div class=\"item\">\n              <h1>{{current.title}}</h1>\n            </div>\n            <br>\n            TODO: ADD INAGE (POSTITCOMPONENT)\n          </div>\n          <span class=\"created\"> Created: {{current.date}} Last modified: {{current.lmod}} </span>\n          </div>          \n       </div> \n        <div class=\"item_4 symbols\">\n          <a href=\"#\" class=\"nounder\" (click)=\"editPost(current,$event)\">\n            <i class=\"material-icons\">create</i>\n          </a>\n          <br>\n          <br>\n          <a href=\"#\" class=\"nounder\" (click)=\"deletePost(current, $event)\">\n            <i class=\"material-icons\">clear</i>\n          </a>\n          <br>\n          <br>\n          <a href=\"#\" class=\"nounder\" (click)=\"reply(current, $event)\">\n            <i class=\"material-icons\">reply</i>\n          </a>\n        </div>\n    </div>\n  </div>\n       <div *ngFor=\"let answers of repliesForCurrent\" (click)=\"onSelectAnswer(current, $event)\">\n         <div *ngIf=\"current.repliesVisible\">\n           <div class=\"content answer\" style=\"background-color: green;\">\n             <div class=\"flexcol\">\n               <div class=\"flexrow\" >\n                 <div class=\"flexcol\" style=\"flex-basis: 8%\">\n                   <div class=\"item stats\">\n                     <img src=\"pic.jpg\" class=\"feedpic\">\n                     <div class=\"text\">\n                       <ul class=\"ulstat\">\n                         <li>Likes</li>\n                         <li>{{answers.clicks}}</li>\n                       </ul>\n                     </div>\n                   </div>\n                 </div>\n                 <div class=\"item_2 flexcol\">\n                   <div class=\"item\">\n                     <div *ngIf=\"answers.isBeingEdited == true\">\n                       <choice [fp]=\"repliesForCurrent\" [selPost] = \"answers\" [isNewPost]=\"false\">\n                       </choice>\n                     </div>                     \n                     <div *ngIf=\"answers.isBeingEdited == false\">\n                       <div *ngIf=\"answers.isTypingReply == true\">\n                         <choice (endReply)=\"cancelReply(answers)\" [topLevelPost]=\"current\" [fp]=\"repliesForCurrent\" [selPost] = \"answers\" [isNewPost]=\"false\">\n                         </choice>\n                       </div>\n                       <div *ngIf=\"answers.isTypingReply == false \">\n                        <div *ngIf=\"!answers.contentImage\">\n                         <h1> {{answers.title}} </h1>\n                         {{answers.contentText}}\n                        </div>\n                         <div *ngIf=\"!answers.contentText\">\n                           <h1> {{answers.title}} </h1>\n                           TODO: ADD IMAGE (POSTITCOMPONENT)\n                         </div>\n                       </div>                       \n                   </div>\n                   <br>\n                   <span class=\"created\">Created: {{answers.date}} Last modified: {{answers.lastModified}}</span>\n                 </div>\n                 </div>\n                 <div class=\"item_4 symbols\">\n                   <a href=\"#\" class=\"nounder\" (click)=\"editAnswer(answers, $event)\">\n                     <i class=\"material-icons\">create</i>\n                   </a>\n                   <br>\n                   <br>\n                   <a href=\"#\" class=\"nounder\" (click)=\"deletePost(answers, $event)\">\n                     <i class=\"material-icons\">clear</i>\n                   </a>\n                 </div>\n               </div>\n             </div>\n           </div>\n           \n         </div>\n         \n       </div>\n        \n      </div>\n    </div>\n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__postit_service__["a" /* PostService */]) === "function" && _a || Object])
], PostComponent);

var _a;
//# sourceMappingURL=postit.component.js.map

/***/ }),

/***/ "../../../../../src/app/postit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function PostService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/Webtech2Project/rest/postitservice/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
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
    // TODO
    PostService.prototype.getSortedByNewest = function () {
        return this.http.get(this.url + 'fetchallnewest').
            toPromise().
            then(function (response) { return response.json(); });
    };
    // TODO
    PostService.prototype.getSortedByOldest = function () {
        return this.http.get(this.url + 'fetchalloldest').
            toPromise().
            then(function (response) { return response.json(); });
    };
    // TODO
    PostService.prototype.getSortedByPopular = function () {
        return this.http.get(this.url + 'fetchallpopular').
            toPromise().
            then(function (response) { return response.json(); });
    };
    // TODO
    PostService.prototype.getAllPostsByUser = function (id) {
        return this.http.get(this.url + 'allpostsbyuser/' + id).
            toPromise().
            then(function (response) { return response.json(); });
    };
    // TODO
    PostService.prototype.getOnlyRepliesByUser = function (id) {
        return this.http.get(this.url + 'repliesbyuser/' + id).
            toPromise().
            then(function (response) { return response.json(); });
    };
    // TODO
    PostService.prototype.getOnlyPostsByUser = function (id) {
        return this.http.get(this.url + 'postsbyuser/' + id).
            toPromise().
            then(function (response) { return response.json(); });
    };
    PostService.prototype.createPostText = function (internalPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + internalPost.title + '","author":2}}';
        console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("post text method called inside");
        return this.http.post(this.url + 'create_by_json', body, options);
    };
    // TODO
    PostService.prototype.createPostImage = function (payload, title) {
        console.log("test: image has a result like : " + payload);
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":' + payload + ',"contentText":null,"date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + title + '","author":2}}';
        console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("post image method called inside");
        //  return this.http.post(this.url+'create_by_json', body, options);
        //HIer irgendwo
        console.log("calling url:  http://localhost:8080/Webtech2Project/rest/file/avatar");
        return this.http.post('http://localhost:8080/Webtech2Project/rest/file/avatar', payload);
    };
    PostService.prototype.updatePostText = function (id, internalPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + internalPost.title + '","author":2}}';
        console.log("Stringified post : " + body + " --- ID : " + id);
        console.log(this.url + 'update/' + id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(body + " +++ " + options);
        return this.http.post(this.url + 'update/' + id, body, options);
    };
    // TODO
    PostService.prototype.updatePostImage = function (id, internalPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":0,"lastModified":1498663847000,"responseTo":0,"title":"' + internalPost.title + '","author":2}}';
        console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + 'update/' + id, body, options);
    };
    PostService.prototype.createReplyText = function (internalPost, parentPost) {
        var body = '{ "postit":{"id":-1,"answers":0,"clicks":0,"contentImage":null,"contentText":"' + internalPost.contentText + '","date":1498663847000,"isPost":1,"lastModified":1498663847000,"responseTo":' + parentPost.id + ',"title":"' + internalPost.title + '","author":2}}';
        console.log("Stringified post : " + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("post text method called inside");
        return this.http.post(this.url + 'create_by_json', body, options);
    };
    // TODO
    PostService.prototype.createReplyImage = function () {
    };
    PostService.prototype.deletePost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.url + 'delete/' + id, headers);
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=postit.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
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
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.help = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.setUser();
        });
    };
    ProfileComponent.prototype.setUser = function () {
        var _this = this;
        // falls es keine Nummer ist
        if (isNaN(this.id)) {
            // getGlobalUser details for profile page
            this.postService.getAllPostsByUser(this.userService.getGlobalUser().id).then(function (res) { return _this.profilePosts = res; });
        }
        else {
            // get details for User with param ID from URL
            this.postService.getAllPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
        }
        this.user = this.userService.getGlobalUser();
    };
    ProfileComponent.prototype.showAll = function (id) {
        var _this = this;
        this.postService.getAllPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.onlyOwnPosts = function (id) {
        var _this = this;
        this.postService.getOnlyPostsByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.onlyOwnReplies = function (id) {
        var _this = this;
        this.postService.getOnlyRepliesByUser(this.id).then(function (res) { return _this.profilePosts = res; });
    };
    ProfileComponent.prototype.setId = function (num) {
        this.id = num;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'profilepage',
        template: "\n    <main>\n      <div class=\"col_4\">\n        <div class=\"infos\">\n          <div class=\"avatar\">\n            <img src=\"vivalderino.jpg\" class=\"profpicfull\">\n          </div>\n\n          <div class=\"contactinfos\">\n            <span class=\"contact\"><i class=\"material-icons\">face</i> {{user.name}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">business</i>{{user.location}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">phone</i>{{user.phone}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">print</i>{{user.fax}}</span>\n            <span class=\"contact\"><i class=\"material-icons\">cake</i>{{user.birth_date}}</span>\n          </div>\n        </div>\n\n        <div class=\"sort\">\n          <span class=\"sortspan\" (click)=\"showAll()\">Alles anzeigen</span>\n          <span class=\"sortspan\" (click)=\"onlyOwnPosts()\">Nur eigene Posts anzeigen</span>\n          <span class=\"sortspan\" (click)=\"onlyOwnReplies()\">Nur Antworten anzeigen</span>\n        </div>\n\n        <div *ngFor=\"let posts of profilePosts\">\n          <div class=\"results\">\n            <div class=\"content\">\n              <div class=\"flexcol\">\n                <div class=\"flexrow\">\n                  <div class=\"item stats\">\n                    <img class=\"feedpic\" src=\"kermit.jpg\">\n  \n                    <div class=\"text\">\n                      <ul class=\"ulstat\">\n                        <li>Likes: TODO</li>\n                        <li>Replies:TODO</li>\n                        <li>Views: TODO</li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"item_2 flexcol\">\n                   <div *ngIf=\"!posts.contentImage\">\n                     <div class=\"item\">\n                       <h1>{{posts.title}} </h1>\n                       {{posts.contentText}}\n                       </div>\n                   </div>\n                    <div *ngIf=\"!posts.contentText\">\n                      <div class=\"item\">\n                        <h1>{{posts.title}} </h1>\n                            TODO: ADD IMAGE SRC (PROFILE COMPONENT)\n                      </div>\n                    </div>\n                    <!--  <div class=\"item lmod\">\n                                      Created: 01.06.2017 13:37. Last modified: -\n                                  </div> -->\n                    <br>\n                    <span class=\"created\"> Created: 02.06.2017 17:31 Last modified: - </span>\n                  </div>\n                 <!-- <div class=\"item_4 symbols\">\n                    <a href=\"#\" class=\"nounder\">\n                      <i class=\"material-icons\">create</i>\n                    </a>\n                    <br>\n                    <br>\n                    <a href=\"#\" class=\"nounder\">\n                      <i class=\"material-icons\">clear</i>\n                    </a>\n                    <br>\n                    <br>\n                    <a href=\"#\" class=\"nounder\">\n                      <i class=\"material-icons\">reply</i>\n                    </a>\n                  </div> -->\n                </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>        \n    </main> ",
        providers: [__WEBPACK_IMPORTED_MODULE_4__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__postit_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */]) === "function" && _d || Object])
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
        this.userService = userService;
    }
    ProfileBadge.prototype.ngOnInit = function () {
        this.user = this.userService.getGlobalUser();
        console.log(this.user.name);
    };
    return ProfileBadge;
}());
ProfileBadge = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'profileBadge',
        template: "\t\t\n    <div class=\"col_1_adjusted\">\n      <div class=\"feedtext\">\n        You\n      </div>\n\n      <img src=\"vivalderino.jpg\" class=\"profilepic\">\n      <br>\n      <div class=\"profilestats\">\n        Amount of posts:\n        <br> {{user.name}}test\n        <br>\n        Amount of views:\n        <br>\n        1337\n      </div>\n      <br>\n      <div class=\"profstatdiv\">\n        <ul class=\"profilestatul\">\n          <li class=\"leftli\" routerLink=\"\"><a><i class=\"material-icons\">keyboard_arrow_right</i> Feed</a></li>\n          <li class=\"leftli\" routerLink=\"/profile\"><a ><i class=\"material-icons\">keyboard_arrow_right</i> Profile</a></li>\n          <li class=\"leftli\" routerLink=\"/settings\"><a><i class=\"material-icons\">keyboard_arrow_right</i> Settings</a></li>\n          <li class=\"leftli\" routerLink=\"/logout\"><a><i class=\"material-icons\">keyboard_arrow_right</i> Signout</a></li>\n        </ul>\n      </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileBadge);

var _a;
//# sourceMappingURL=profilebadge.component.js.map

/***/ }),

/***/ "../../../../../src/app/sortfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postit_service__ = __webpack_require__("../../../../../src/app/postit.service.ts");
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
    function SortBy(postService) {
        this.postService = postService;
    }
    SortBy.prototype.sortNewest = function () {
        var _this = this;
        this.postService.getSortedByNewest().then(function (res) { return _this.feedPosts = res; });
    };
    SortBy.prototype.sortOldest = function () {
        var _this = this;
        this.postService.getSortedByOldest().then(function (res) { return _this.feedPosts = res; });
    };
    SortBy.prototype.sortPopular = function () {
        var _this = this;
        this.postService.getSortedByPopular().then(function (res) { return _this.feedPosts = res; });
    };
    return SortBy;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], SortBy.prototype, "feedPosts", void 0);
SortBy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sortby',
        template: "\t\t\t<div class=\"sortby\">\n    <div class=\"sortheading\">\n      <i class=\"material-icons\">sort</i> Sort feed\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortNewest()\">Newest</span>\n      </a>\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortOldest()\">Oldest</span>\n      </a>\n    </div>\n    <div class=\"ulersatz\">\n      <a href=\"#\">\n        <!-- <span class=\"marker\">&nbsp;</span> --><span (click)=\"sortPopular()\">Most popular</span>\n      </a>\n    </div>\n  </div>\n",
        providers: [__WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__postit_service__["a" /* PostService */]) === "function" && _a || Object])
], SortBy);

var _a;
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
        this.url = 'http://127.0.0.1:8080/Webtech2Project/rest/userservice/find/';
        this.testUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    UserService.prototype.ngOnInit = function () {
        this.testUser.id = 1;
        this.testUser.avatar = "test";
        this.testUser.birth_date = 1111111;
        this.testUser.email = "test@test";
        this.testUser.fax = "fax123";
        this.testUser.gender = "male";
        this.testUser.location = "zuhause";
        this.testUser.name = "aram sam sam sam";
        this.testUser.password = "niemals";
        this.testUser.phone = "Telefooooon";
        this.testUser.register_date = 11223344;
        this.testUser.surname = "nachname";
        this.testUser.postits = null;
        this.testUser.position = 2;
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + id)
            .toPromise()
            .then(function (response) { return response.json().user; });
    };
    UserService.prototype.setUser = function (u) {
        this.testUser = u;
    };
    UserService.prototype.getGlobalUser = function () {
        return this.testUser;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
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