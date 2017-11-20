webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		395,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    HomePage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/claudia/Documentos/4 Periodo/Aplicativos/ProjetoAplicativos/cutePuppyPics/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{ viewTitle }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n\n  <page-starter> \n    \n  </page-starter>\n<calendar [eventSource]="eventSource"\n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        (onEventSelected)="onEventSelected($event)"\n        (onTitleChanged)="onViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)"\n        step="30"\n        class="calendar">\n      </calendar>\n</ion-content>'/*ion-inline-end:"/home/claudia/Documentos/4 Periodo/Aplicativos/ProjetoAplicativos/cutePuppyPics/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(332);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_calendar__ = __webpack_require__(384);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 151,
	"./af.js": 151,
	"./ar": 152,
	"./ar-dz": 153,
	"./ar-dz.js": 153,
	"./ar-kw": 154,
	"./ar-kw.js": 154,
	"./ar-ly": 155,
	"./ar-ly.js": 155,
	"./ar-ma": 156,
	"./ar-ma.js": 156,
	"./ar-sa": 157,
	"./ar-sa.js": 157,
	"./ar-tn": 158,
	"./ar-tn.js": 158,
	"./ar.js": 152,
	"./az": 159,
	"./az.js": 159,
	"./be": 160,
	"./be.js": 160,
	"./bg": 161,
	"./bg.js": 161,
	"./bm": 162,
	"./bm.js": 162,
	"./bn": 163,
	"./bn.js": 163,
	"./bo": 164,
	"./bo.js": 164,
	"./br": 165,
	"./br.js": 165,
	"./bs": 166,
	"./bs.js": 166,
	"./ca": 167,
	"./ca.js": 167,
	"./cs": 168,
	"./cs.js": 168,
	"./cv": 169,
	"./cv.js": 169,
	"./cy": 170,
	"./cy.js": 170,
	"./da": 171,
	"./da.js": 171,
	"./de": 172,
	"./de-at": 173,
	"./de-at.js": 173,
	"./de-ch": 174,
	"./de-ch.js": 174,
	"./de.js": 172,
	"./dv": 175,
	"./dv.js": 175,
	"./el": 176,
	"./el.js": 176,
	"./en-au": 177,
	"./en-au.js": 177,
	"./en-ca": 178,
	"./en-ca.js": 178,
	"./en-gb": 179,
	"./en-gb.js": 179,
	"./en-ie": 180,
	"./en-ie.js": 180,
	"./en-nz": 181,
	"./en-nz.js": 181,
	"./eo": 182,
	"./eo.js": 182,
	"./es": 183,
	"./es-do": 184,
	"./es-do.js": 184,
	"./es-us": 185,
	"./es-us.js": 185,
	"./es.js": 183,
	"./et": 186,
	"./et.js": 186,
	"./eu": 187,
	"./eu.js": 187,
	"./fa": 188,
	"./fa.js": 188,
	"./fi": 189,
	"./fi.js": 189,
	"./fo": 190,
	"./fo.js": 190,
	"./fr": 191,
	"./fr-ca": 192,
	"./fr-ca.js": 192,
	"./fr-ch": 193,
	"./fr-ch.js": 193,
	"./fr.js": 191,
	"./fy": 194,
	"./fy.js": 194,
	"./gd": 195,
	"./gd.js": 195,
	"./gl": 196,
	"./gl.js": 196,
	"./gom-latn": 197,
	"./gom-latn.js": 197,
	"./gu": 198,
	"./gu.js": 198,
	"./he": 199,
	"./he.js": 199,
	"./hi": 200,
	"./hi.js": 200,
	"./hr": 201,
	"./hr.js": 201,
	"./hu": 202,
	"./hu.js": 202,
	"./hy-am": 203,
	"./hy-am.js": 203,
	"./id": 204,
	"./id.js": 204,
	"./is": 205,
	"./is.js": 205,
	"./it": 206,
	"./it.js": 206,
	"./ja": 207,
	"./ja.js": 207,
	"./jv": 208,
	"./jv.js": 208,
	"./ka": 209,
	"./ka.js": 209,
	"./kk": 210,
	"./kk.js": 210,
	"./km": 211,
	"./km.js": 211,
	"./kn": 212,
	"./kn.js": 212,
	"./ko": 213,
	"./ko.js": 213,
	"./ky": 214,
	"./ky.js": 214,
	"./lb": 215,
	"./lb.js": 215,
	"./lo": 216,
	"./lo.js": 216,
	"./lt": 217,
	"./lt.js": 217,
	"./lv": 218,
	"./lv.js": 218,
	"./me": 219,
	"./me.js": 219,
	"./mi": 220,
	"./mi.js": 220,
	"./mk": 221,
	"./mk.js": 221,
	"./ml": 222,
	"./ml.js": 222,
	"./mr": 223,
	"./mr.js": 223,
	"./ms": 224,
	"./ms-my": 225,
	"./ms-my.js": 225,
	"./ms.js": 224,
	"./my": 226,
	"./my.js": 226,
	"./nb": 227,
	"./nb.js": 227,
	"./ne": 228,
	"./ne.js": 228,
	"./nl": 229,
	"./nl-be": 230,
	"./nl-be.js": 230,
	"./nl.js": 229,
	"./nn": 231,
	"./nn.js": 231,
	"./pa-in": 232,
	"./pa-in.js": 232,
	"./pl": 233,
	"./pl.js": 233,
	"./pt": 234,
	"./pt-br": 235,
	"./pt-br.js": 235,
	"./pt.js": 234,
	"./ro": 236,
	"./ro.js": 236,
	"./ru": 237,
	"./ru.js": 237,
	"./sd": 238,
	"./sd.js": 238,
	"./se": 239,
	"./se.js": 239,
	"./si": 240,
	"./si.js": 240,
	"./sk": 241,
	"./sk.js": 241,
	"./sl": 242,
	"./sl.js": 242,
	"./sq": 243,
	"./sq.js": 243,
	"./sr": 244,
	"./sr-cyrl": 245,
	"./sr-cyrl.js": 245,
	"./sr.js": 244,
	"./ss": 246,
	"./ss.js": 246,
	"./sv": 247,
	"./sv.js": 247,
	"./sw": 248,
	"./sw.js": 248,
	"./ta": 249,
	"./ta.js": 249,
	"./te": 250,
	"./te.js": 250,
	"./tet": 251,
	"./tet.js": 251,
	"./th": 252,
	"./th.js": 252,
	"./tl-ph": 253,
	"./tl-ph.js": 253,
	"./tlh": 254,
	"./tlh.js": 254,
	"./tr": 255,
	"./tr.js": 255,
	"./tzl": 256,
	"./tzl.js": 256,
	"./tzm": 257,
	"./tzm-latn": 258,
	"./tzm-latn.js": 258,
	"./tzm.js": 257,
	"./uk": 259,
	"./uk.js": 259,
	"./ur": 260,
	"./ur.js": 260,
	"./uz": 261,
	"./uz-latn": 262,
	"./uz-latn.js": 262,
	"./uz.js": 261,
	"./vi": 263,
	"./vi.js": 263,
	"./x-pseudo": 264,
	"./x-pseudo.js": 264,
	"./yo": 265,
	"./yo.js": 265,
	"./zh-cn": 266,
	"./zh-cn.js": 266,
	"./zh-hk": 267,
	"./zh-hk.js": 267,
	"./zh-tw": 268,
	"./zh-tw.js": 268
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 357;

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/claudia/Documentos/4 Periodo/Aplicativos/ProjetoAplicativos/cutePuppyPics/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/claudia/Documentos/4 Periodo/Aplicativos/ProjetoAplicativos/cutePuppyPics/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[313]);
//# sourceMappingURL=main.js.map