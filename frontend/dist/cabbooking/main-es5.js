function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./auth/auth.module": ["./src/app/auth/auth.module.ts", "auth-auth-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <app-header></app-header>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</main>\r\n\r\n<!-- <main>\r\n  <app-header></app-header>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</main> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/areas-served/areas-served.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas-served/areas-served.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAreasServedAreasServedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\" class=\"mat-body-1\">\r\n\r\n\r\n    <div fxFlex=\"30%\">\r\n      <div *ngIf=\"tokenInfo\">\r\n      <div class=\"mat-headline\">Add Area Detail</div>\r\n        \r\n      <form [formGroup]=\"areaInfoForm\" (ngSubmit)=storeAreaInfoDetails()>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Enter Area Name\" formControlName=\"areaName\" required>\r\n          <mat-error *ngIf=\"areaInfoForm.get('areaName').invalid\">Area name is required.</mat-error>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" placeholder=\"Enter latitude Name\" formControlName=\"latitude\" required>\r\n          <mat-error *ngIf=\"areaInfoForm.get('latitude').invalid\">latitude is required.</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" placeholder=\"Enter longitude Name\" formControlName=\"longitude\" required>\r\n          <mat-error *ngIf=\"areaInfoForm.get('longitude').invalid\">longitude is required.</mat-error>\r\n        </mat-form-field>\r\n\r\n\r\n        \r\n        <span fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n          <button mat-stroked-button type=\"submit\" [disabled]=\"!areaInfoForm.valid\">Submit</button>\r\n        </span>\r\n\r\n      </form>\r\n\r\n    </div>\r\n\r\n\r\n\r\n     </div> \r\n    <div fxFlex=\"30%\">\r\n      <div class=\"mat-headline\">Areas Served by Us</div>\r\n      <ul>\r\n        <li *ngFor='let area of areas'>{{area.areaName}}</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div fxFlex=\"40%\">\r\n      <agm-map\r\n        [latitude]=\"lat\"\r\n        [longitude]=\"lng\"\r\n        [fullscreenControl]='true'\r\n        [zoom]='11'\r\n        [usePanning]='true'\r\n        [mapTypeControl]='true'\r\n        (mapReady)=getMapInstance($event)\r\n        (mapClick)=resetMap()>\r\n          <agm-marker *ngFor='let marker of markers'\r\n            [latitude]=\"marker.lat\"\r\n            [longitude]=\"marker.lng\"\r\n            [animation]=\"'DROP'\">\r\n          </agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-edit/book-online-edit.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-edit/book-online-edit.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookOnlineEditBookOnlineEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\" class=\"mat-subheading-2\">\r\n    <div fxFlex=30%>\r\n      <span class=\"mat-title\">Edit cab booking -</span>\r\n      <p>Please note, you cannot change:</p>\r\n      <ul>\r\n        <li>Number of passengers</li>\r\n        <li>Pickup Location</li>\r\n        <li>Drop Location</li>\r\n      </ul>\r\n      <p>because it requires re-computation of fare</p>\r\n      <span>\r\n        <button id=\"first\" mat-stroked-button color=\"primary\" (click)=onBackButton()>Back to All Forms</button>\r\n      </span>\r\n    </div>\r\n    <div fxFlex=70%>\r\n      <mat-card>\r\n        <div class=\"mat-title\">Edit cab booking -</div>\r\n        <!-- <div class=\"mat-title\">{{ editScheduleCabFormId }}</div> -->\r\n        <form [formGroup]=\"editScheduleCabForm\" (ngSubmit)=onEditScheduleCabForm()>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Your name\" formControlName=\"name\" minlength=\"4\" required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('name').invalid\">Full name is required.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"tel\" placeholder=\"Mobile number\" formControlName=\"mobile\" required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('mobile').invalid\">\r\n              <div *ngIf=\"editScheduleCabForm.get('mobile').errors.required\">Phone number is required</div>\r\n              <div *ngIf=\"editScheduleCabForm.get('mobile').errors.pattern\">Please enter valid phone number</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('email').invalid\">\r\n              <div *ngIf=\"editScheduleCabForm.get('email').errors.required\">Email id is required</div>\r\n              <div *ngIf=\"editScheduleCabForm.get('email').errors.email\">Please enter valid email id</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"myPicker\" placeholder=\"Pickup Date\"\r\n              formControlName=\"pickup_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"myPicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #myPicker></mat-datepicker>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('pickup_date').invalid\">\r\n              <div *ngIf=\"editScheduleCabForm.get('pickup_date').errors.min\">Cabs can be scheduled for 1 week in advance\r\n              </div>\r\n              <div *ngIf=\"editScheduleCabForm.get('pickup_date').errors.max\">Cabs can be scheduled for 1 week in advance\r\n              </div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"time\" placeholder=\"Pickup Time\" formControlName=\"pickup_time\" required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('pickup_time').invalid\">Please enter correct time</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" min=\"1\" max=\"8\" placeholder=\"Passengers\" formControlName=\"passengers\"\r\n              required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('passengers').invalid\">\r\n              <div *ngIf=\"editScheduleCabForm.get('passengers').errors.min\">Minimum 1 passenger is required.</div>\r\n              <div *ngIf=\"editScheduleCabForm.get('passengers').errors.max\">Maximum 8 passengers.</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Pickup Location\" formControlName=\"pickup_loc\" #pickupLoc required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('pickup_loc').invalid\">Please enter pickup address</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Drop Location\" formControlName=\"drop_loc\" #dropLoc required>\r\n            <mat-error *ngIf=\"editScheduleCabForm.get('drop_loc').invalid\">Please enter drop address</mat-error>\r\n          </mat-form-field>\r\n          <span fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <button mat-stroked-button type=\"submit\" [disabled]=\"!editScheduleCabForm.valid\">Save</button>\r\n            <button mat-stroked-button type=\"reset\" color=\"warn\">Clear</button>\r\n          </span>\r\n\r\n        </form>\r\n        <!-- <p>\r\n          Form value: {{editScheduleCabForm.value|json}}\r\n        </p>\r\n        <p>\r\n          Form status: {{editScheduleCabForm.status}}\r\n        </p> -->\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-list/book-online-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-list/book-online-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookOnlineListBookOnlineListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-headline\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n  Schedule Cab Forms List View\r\n  <button mat-stroked-button color=\"primary\" (click)=onRefreshClick()>Refresh</button>\r\n</div>\r\n\r\n<mat-accordion multi=\"true\" *ngIf=\"scheduleCabForms.length > 0\">\r\n  <mat-expansion-panel *ngFor=\"let scheduleCabForm of scheduleCabForms\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <span>Form id: </span> {{scheduleCabForm.id}}\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <p><span>Name:</span> {{scheduleCabForm.name}}</p>\r\n    <p><span>Phone:</span> {{scheduleCabForm.phone}}</p>\r\n    <p><span>Email:</span> {{scheduleCabForm.email}}</p>\r\n    <p><span>Pickup Date:</span> {{scheduleCabForm.pickup_date}}</p>\r\n    <p><span>Pickup Time:</span> {{scheduleCabForm.pickup_time}}</p>\r\n    <p><span>Passengers:</span> {{scheduleCabForm.passengers}}</p>\r\n    <p><span>Pickup Location:</span> {{scheduleCabForm.pickup_location}}</p>\r\n    <p><span>Drop Location:</span> {{scheduleCabForm.drop_location}}</p>\r\n    <mat-action-row *ngIf=\"userIsAuthenticated\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <a mat-stroked-button color=\"primary\" [routerLink]=\"['/schedule-cab-edit/', scheduleCabForm.id]\">Edit Form</a>\r\n      <button *ngIf=\"role === 'admin'\" mat-stroked-button color=\"warn\"\r\n        (click)=\"onDeleteScheduleCabForm(scheduleCabForm.id)\">Delete Form</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<p class=\"mat-body-1\" *ngIf=\"scheduleCabForms.length <= 0\">No schedule cab forms available.</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online/book-online.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-online/book-online.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookOnlineBookOnlineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\" class=\"mat-subheading-2\">\r\n    <div fxFlex=30%>\r\n      <span class=\"mat-title\">AdvanceCabBooking -</span>\r\n      <ul>\r\n        <li>We provide cabs that can</li>\r\n        <li>be scheduled 1 week in advance.</li>\r\n      </ul>\r\n    </div>\r\n    <div fxFlex=70%>\r\n      <mat-card>\r\n        <div class=\"mat-title\">Schedule a Cab</div>\r\n        <form [formGroup]=\"scheduleCabForm\" (ngSubmit)=onSubmitScheduleCabForm()>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Your name\" formControlName=\"name\" minlength=\"4\" required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('name').invalid\">Full name is required.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"tel\" placeholder=\"Mobile number\" formControlName=\"mobile\" required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('mobile').invalid\">\r\n              <div *ngIf=\"scheduleCabForm.get('mobile').errors.required\">Phone number is required</div>\r\n              <div *ngIf=\"scheduleCabForm.get('mobile').errors.pattern\">Please enter valid phone number</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('email').invalid\">\r\n              <div *ngIf=\"scheduleCabForm.get('email').errors.required\">Email id is required</div>\r\n              <div *ngIf=\"scheduleCabForm.get('email').errors.email\">Please enter valid email id</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"myPicker\" placeholder=\"Pickup Date\"\r\n              formControlName=\"pickup_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"myPicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #myPicker></mat-datepicker>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('pickup_date').invalid\">\r\n              <div *ngIf=\"scheduleCabForm.get('pickup_date').errors\">Please enter correct date.</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"time\" placeholder=\"Pickup Time\" formControlName=\"pickup_time\" required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('pickup_time').invalid\">Please enter correct time</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" min=\"1\" max=\"8\" placeholder=\"Passengers\" formControlName=\"passengers\"\r\n              required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('passengers').invalid\">\r\n              <div *ngIf=\"scheduleCabForm.get('passengers').errors.min\">Minimum 1 passenger is required.</div>\r\n              <div *ngIf=\"scheduleCabForm.get('passengers').errors.max\">Maximum 8 passengers.</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Pickup Location\" formControlName=\"pickup_loc\" #pickupLoc required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('pickup_loc').invalid\">Please enter pickup address</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Drop Location\" formControlName=\"drop_loc\" #dropLoc required>\r\n            <mat-error *ngIf=\"scheduleCabForm.get('drop_loc').invalid\">Please enter drop address</mat-error>\r\n          </mat-form-field>\r\n          <span fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <button mat-stroked-button type=\"submit\" [disabled]=\"!scheduleCabForm.valid\">Submit</button>\r\n            <button mat-stroked-button type=\"clear\" color=\"warn\">Clear</button>\r\n          </span>\r\n\r\n        </form>\r\n        <!-- <p>\r\n          Form value: {{scheduleCabForm.value|json}}\r\n        </p>\r\n        <p>\r\n          Form status: {{scheduleCabForm.status}}\r\n        </p> -->\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-status/booking-status.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-status/booking-status.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingStatusBookingStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"bookingStatus === 'success'\">\r\n  <mat-card>\r\n    <mat-card-title>\r\n      Booking Status\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      Cab booked successfully! Payment received.\r\n    </mat-card-content>\r\n    <mat-card-actions fxLayoutAlign=\"center\">\r\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"'/book-online'\">Book Again!</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n<div *ngIf=\"bookingStatus !== 'success'\">\r\n  <mat-card>\r\n    <mat-card-title>\r\n      Booking Status\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      Cab booking failed for some reason.\r\n    </mat-card-content>\r\n    <mat-card-actions fxLayoutAlign=\"center\">\r\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"'/book-online'\">Try Again!</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us-list/contact-us-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us-list/contact-us-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactUsListContactUsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-headline\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n  Contact Forms List View\r\n  <button mat-stroked-button color=\"primary\" (click)=onRefreshClick()>Refresh</button>\r\n</div>\r\n<mat-accordion multi=\"true\" *ngIf=\"contactForms.length > 0\">\r\n  <mat-expansion-panel *ngFor=\"let contactForm of contactForms\">\r\n    <mat-expansion-panel-header>\r\n      <span>Form id: </span> {{contactForm.id}}\r\n    </mat-expansion-panel-header>\r\n    <p><span>Email:</span> {{contactForm.email}}</p>\r\n    <p><span>Name:</span> {{contactForm.name}}</p>\r\n    <p *ngIf=\"contactForm.phone\"><span>Phone No:</span> {{contactForm.phone}}</p>\r\n    <p><span>Subject:</span> {{contactForm.subject}}</p>\r\n    <p><span>Message:</span> {{contactForm.message}}</p>\r\n    <mat-action-row *ngIf=\"userIsAuthenticated\">\r\n      <button mat-stroked-button color=\"warn\" (click)=\"onDeleteForm(contactForm.id)\">Delete Form</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<p class=\"mat-body-1\" *ngIf=\"contactForms.length <= 0\">No contact forms available.</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\">\r\n    <div fxFlex=\"40%\" class=\"mat-body-1\">\r\n      <div class=\"mat-headline\">Contact Us</div>\r\n      <p class=\"mat-subheading-2\">\r\n        We Look Forward to Hearing From You!\r\n      </p>\r\n      <p>\r\n        If you wish to schedule a cab, edit or\r\n      </p>\r\n      <p>\r\n        cancel booking, contact us at 987-654-3210.\r\n      </p>\r\n      <p>\r\n        Or visit <a class=\"mat-subheading-2\" routerLink='/book-online'>Schedule Cab</a>\r\n      </p>\r\n      <p>\r\n        To leave a message, please submit this form:\r\n      </p>\r\n\r\n    </div>\r\n    <div fxFlex=\"60%\" class=\"mat-subheading-2\">\r\n      <mat-card>\r\n        <form #contactForm=\"ngForm\" (submit)=\"onContactFormSubmission(contactForm)\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Full Name\" ngModel name=\"name\" required minlength=\"2\"\r\n              #fullName=\"ngModel\">\r\n            <mat-error *ngIf=\"fullName.invalid\">\r\n              <div *ngIf=\"fullName.errors.required\">First name is required.</div>\r\n              <div *ngIf=\"fullName.errors.minlength\">First name should have atleast\r\n                {{fullName.errors.minlength.requiredLength}} characters.</div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input matInput type=\"email\" placeholder=\"Email\" ngModel name=\"email\" required #email=\"ngModel\"\r\n              email=\"true\">\r\n            <mat-error *ngIf=\"email.invalid\">Please enter valid email</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Phone\" ngModel name=\"phone\" #phone=\"ngModel\"\r\n              [pattern]=\"getPhoneRegex()\">\r\n            <mat-error *ngIf=\"phone.invalid\">Please enter valid phone number</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Subject\" ngModel name=\"subject\" required maxlength=\"70\"\r\n              #subject=\"ngModel\">\r\n            <mat-error *ngIf=\"subject.invalid\">Subject is required.</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Message\" rows=\"5\" ngModel name=\"message\" required #message=\"ngModel\">\r\n            </textarea>\r\n            <mat-error *ngIf=\"message.invalid\">Message is required.</mat-error>\r\n          </mat-form-field>\r\n\r\n          <section fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <button mat-stroked-button type=\"submit\" color=\"primary\">Submit</button>\r\n            <button mat-stroked-button type=\"reset\" color=\"warn\">Clear</button>\r\n          </section>\r\n\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 mat-dialog-title>Error!</h4>\r\n<mat-dialog-content>\r\n  <p class=\"mat-body-1\">{{ data.message }}</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions fxLayoutAlign=\"center\">\r\n  <button mat-button color=\"accent\" (click)=snackBarRef.dismiss()>Dismiss</button>\r\n</mat-dialog-actions>\r\n\r\n<!-- Using this component to display all error messages. -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fare-info/fare-info.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fare-info/fare-info.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFareInfoFareInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <main>\r\n  <div class=\"mat-headline\">Fare Information</div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\" class=\"mat-body-1\">\r\n    <div fxFlex=\"50%\">\r\n      <p class=\"mat-title\">Fares</p>\r\n      <p class=\"mat-subheading-2\">Boston</p>\r\n      <ul>\r\n        <li>First 1/7 Mile: $2.60</li>\r\n        <li>Each 1/7 Mile thereafter: $.40</li>\r\n        <li>Idling/Waiting time: $28.00 per hour</li>\r\n      </ul>\r\n\r\n      <p class=\"mat-body-2\">All cities/towns beyond 20 miles from Boston:</p>\r\n\r\n      <ul>\r\n        <li>Flat rate of $3.20 per mile as published in the \"Flat Rate Book\"</li>\r\n        <li>There is no charge for luggage - Please take all of your property</li>\r\n        <li>Receipt required by the Boston Police Department.</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div fxFlex=\"50%\">\r\n      <p class=\"mat-title\">Tolls and Fees</p>\r\n      <p class=\"mat-subheading-2\">From Boston to East Boston - $2.65</p>\r\n\r\n      <p class=\"mat-body-2\">From Logan Airport to Boston:</p>\r\n\r\n      <table>\r\n        <tr>\r\n          <td>Via Summer or Ted Williams Tunnel</td>\r\n          <td>$2.65</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Plus MASSPORT Taxi Pool Fee</td>\r\n          <td>$2.25</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Total Fee/Toll added to meter</td>\r\n          <td>$4.90</td>\r\n        </tr>\r\n        <tr>\r\n          <td>VIA Tobin Bridge</td>\r\n          <td>$2.25</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Plus MASSPORT Taxi Pool Fee</td>\r\n          <td>$2.25</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Total Fee/Toll added to meter</td>\r\n          <td>$4.50</td>\r\n        </tr>\r\n      </table>\r\n\r\n      <p class=\"mat-body-2\">From Boston to Logan Airport, or to North Shore Communities:</p>\r\n\r\n      <table>\r\n        <tr>\r\n          <td>VIA Callahan or Ted Williams Tunnel</td>\r\n          <td>$2.65</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Total Fee/Toll added to meter</td>\r\n          <td>$2.65</td>\r\n        </tr>\r\n        <tr>\r\n          <td>VIA Tobin Bridge</td>\r\n          <td>$2.25</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Total Fee/Toll added to meter</td>\r\n          <td>$2.25</td>\r\n        </tr>\r\n      </table>\r\n\r\n      <p class=\"mat-body-2\">CUSTOMER PAYS ALL OTHER TOLLS AND FEES</p>\r\n    </div>\r\n  </div>\r\n</main> -->\r\n\r\n\r\n<main>\r\n  <div class=\"mat-headline\">Our Taxi Tariffs</div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\" class=\"mat-body-1\">\r\n    <!-- <div fxFlex=\"50%\">\r\n      <p class=\"mat-title\">Fares</p>\r\n      <p class=\"mat-subheading-2\">Boston</p>\r\n      <ul>\r\n        <li>First 1/7 Mile: $2.60</li>\r\n        <li>Each 1/7 Mile thereafter: $.40</li>\r\n        <li>Idling/Waiting time: $28.00 per hour</li>\r\n      </ul>\r\n\r\n      <p class=\"mat-body-2\">All cities/towns beyond 20 miles from Boston:</p>\r\n\r\n      <ul>\r\n        <li>Flat rate of $3.20 per mile as published in the \"Flat Rate Book\"</li>\r\n        <li>There is no charge for luggage - Please take all of your property</li>\r\n        <li>Receipt required by the Boston Police Department.</li>\r\n      </ul>\r\n    </div> -->\r\n\r\n    <div fxFlex=\"100%\">\r\n       <table>\r\n        <tr>\r\n          <th>Vehicle Type</th>\r\n          <th>Rate/KM</th>\r\n          <th>Driver Betta</th>\r\n          <th>Additional Charge</th>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"3\">One Way Tariff</th>\r\n        </tr>\r\n        <tr>\r\n          <td>SEDAN</td>\r\n          <td>Rs. 13/KM</td>\r\n          <td>RS. 300</td>\r\n        </tr>\r\n        <tr>\r\n          <td>MUV</td>\r\n          <td>Rs. 17/KM</td>\r\n          <td>RS. 400</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Only Innova</td>\r\n          <td>Rs. 18/KM</td>\r\n          <td>RS. 500</td>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"3\">Round Trip Tarriff</th>\r\n        </tr>\r\n        <tr>\r\n          <td>SEDAN</td>\r\n          <td>Rs. 13/KM</td>\r\n          <td>RS. 300</td>\r\n        </tr>\r\n        <tr>\r\n          <td>MUV</td>\r\n          <td>Rs. 14/KM</td>\r\n          <td>RS. 400</td>\r\n        </tr>\r\n      </table>\r\n\r\n      <p class=\"mat-body-2\">TERMS AND CONDITIONS</p>\r\n\r\n      <ul type=\"circle\">\r\n        <ol>Initial Km and final Km will be calculated from Customer Location.</ol>\r\n        <ol>Lowest one way Drop 130 km for all the cars.</ol>\r\n        <ol>Round trip Smallest 300 Kms Per day</ol>\r\n        <ol>Toll, State Tax, Permit will be Bourne by the customer for Round trips as per Travels policy.</ol>\r\n        <ol>Driver Bata for Round trips Rs.300/- per day for sedan and Mini, Rs.400/- for SUV</ol>\r\n        <ol>Hill station charges Rs. 300 for mini and sedan, Rs. 400/- for SUV</ol>\r\n        <ol>Extra hour charges Rs.125/- for Mini, sedan and SUV</ol>\r\n        <ol>Night charges Additional Rs.300/- for round trip</ol>\r\n      </ul>\r\n   \r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row class=\"mat-body-1\" fxLayoutAlign=\"center center\">\r\n    <div>&copy; by Simplilearn</div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"#13abab\">\r\n\r\n  <mat-toolbar-row>\r\n    <span><a routerLink=\"/\">My Cab Booking App!</a></span>\r\n    <span class=\"spacer\"></span>\r\n    <span><i class=\"material-icons md-18\">\r\n        phone\r\n      </i></span>\r\n    <span>1234567891</span>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row>\r\n\r\n    <ul fxLayout=\"row wrap\">\r\n      <li>\r\n        <a mat-button routerLink=\"/book-online\" routerLinkActive=\"mat-accent\">Schedule Cab\r\n          <img src=\"https://thumbs.dreamstime.com/b/round-clock-taxi-service-car-deadline-schedule-ride-flat-color-line-icon-vector-symbol-sign-illustration-design-isolated-166813087.jpg\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mat-button routerLink=\"/fare\" routerLinkActive=\"mat-accent\">Fare Information\r\n          <img src=\"../../assets/fare.jpg\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mat-button routerLink=\"/areas-served\" routerLinkActive=\"mat-accent\">Areas Serve\r\n          <img src=\"../../assets/route.jpg\" width=\"70px\" height=\"70px\"/>       \r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mat-button routerLink=\"/contact-us\" routerLinkActive=\"mat-accent\">Contact Us\r\n          <img src=\"../../assets/contact.jpg\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"userIsAuthenticated && role === 'admin'\">\r\n        <a mat-button routerLink=\"/contact-us-list\" routerLinkActive=\"mat-accent\">View ContactUsForms\r\n          <img src=\"../../assets/contactforms.png\" width=\"70px\" height=\"70px\"/>\r\n\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"userIsAuthenticated\">\r\n        <a mat-button routerLink=\"/schedule-cab-list\" routerLinkActive=\"mat-accent\">View ScheduleCabForms\r\n\r\n          <img src=\"../../assets/viewscheduleform.png\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <!-- <li *ngIf=\"userIsAuthenticated\">\r\n        <a mat-button routerLink=\"/schedule-cab-edit\" routerLinkActive=\"mat-accent\">Edit ScheduleCabForms</a>\r\n      </li> -->\r\n      <li *ngIf=\"!userIsAuthenticated\">\r\n        <a mat-button routerLink=\"/auth/login\" routerLinkActive=\"mat-accent\">Login\r\n          <img src=\"../../assets/login.jpg\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"!userIsAuthenticated\">\r\n        <a mat-button routerLink=\"/auth/signup\" routerLinkActive=\"mat-accent\">Sign-Up\r\n          <img src=\"../../assets/signup.jpg\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"userIsAuthenticated\">\r\n        <a mat-button  (click)=onLogout() routerLinkActive=\"mat-accent\">Logout\r\n          <img src=\"../../assets/logout.png\" width=\"70px\" height=\"70px\"/>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </mat-toolbar-row>\r\n\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 mat-dialog-title>Success!</h4>\r\n<mat-dialog-content>\r\n  <p class=\"mat-body-1\">{{ data.message }}</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions fxLayoutAlign=\"center\">\r\n  <button mat-button color=\"accent\" (click)=snackBarRef.dismiss()>Dismiss</button>\r\n</mat-dialog-actions>\r\n\r\n<!-- Using this component to display all success messages. -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <h4 mat-dialog-title>Complete Booking</h4>\r\n  <mat-dialog-content class=\"mat-typography\">\r\n    <table>\r\n      <tr>\r\n        <td>Total Distance:</td>\r\n        <td>{{ distance }} miles</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Total Fare:</td>\r\n        <td> {{ fare | currency:'INR' }}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions fxLayoutAlign=\"center\">\r\n    <button mat-stroked-button color=\"primary\" (click)=enterCardDetails()>Enter Card Details</button>\r\n    <button mat-stroked-button color=\"basic\" (click)=onCancelClick()>Cancel Payment</button>\r\n  </mat-dialog-actions>\r\n  \r\n  <div *ngIf=\"paymentFlag\">\r\n    \r\n    <section class=\"p-4 p-md-12\"> \r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-10 col-lg-8 col-xl-5\">\r\n      \r\n        <div class=\"card rounded-3\">\r\n          <div class=\"card-body p-4\">\r\n          <div class=\"text-center mb-4\">\r\n            <h6>Payment</h6>\r\n          </div>\r\n       \r\n  \r\n            <div class=\"form-outline mb-8\">\r\n              <input type=\"text\" id=\"formControlLgXsd\" class=\"form-control form-control-lg\" placeholder=\"Card Holder Name\"/>\r\n            </div>\r\n  \r\n            <div class=\"row mb-12\">\r\n              <div class=\"col-8\">\r\n                <div class=\"form-outline\">\r\n                  <input type=\"text\" id=\"formControlLgXM\" class=\"form-control form-control-lg\" placeholder=\"8723-8912-6578\" />\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col-6\">\r\n                <div class=\"form-outline\">\r\n                  <label class=\"form-label\" for=\"formControlLgExpk\">Expire</label>\r\n                  <input type=\"password\" id=\"formControlLgExpk\" class=\"form-control form-control-lg\"\r\n                    placeholder=\"MM/YYYY\" />\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div class=\"form-outline\">\r\n                  <label class=\"form-label\" for=\"formControlLgcvv\">CVV</label>\r\n                  <input type=\"password\" id=\"formControlLgcvv\" class=\"form-control form-control-lg\" placeholder=\"CVV\" />\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col-4\">\r\n                <mat-dialog-actions fxLayoutAlign=\"center\">\r\n                  <button mat-stroked-button color=\"primary\" (click)=onProceedClick()>Proceed to Payment</button>\r\n                  <button mat-stroked-button color=\"basic\" (click)=onCancelClick()>Cancel Payment</button>\r\n                </mat-dialog-actions> \r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  </section>\r\n    \r\n\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]]
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fare_info_fare_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fare-info/fare-info.component */
    "./src/app/fare-info/fare-info.component.ts");
    /* harmony import */


    var _areas_served_areas_served_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./areas-served/areas-served.component */
    "./src/app/areas-served/areas-served.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _contact_us_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-us-list/contact-us-list.component */
    "./src/app/contact-us-list/contact-us-list.component.ts");
    /* harmony import */


    var _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./book-online/book-online.component */
    "./src/app/book-online/book-online.component.ts");
    /* harmony import */


    var _book_online_list_book_online_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./book-online-list/book-online-list.component */
    "./src/app/book-online-list/book-online-list.component.ts");
    /* harmony import */


    var _book_online_edit_book_online_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./book-online-edit/book-online-edit.component */
    "./src/app/book-online-edit/book-online-edit.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./booking-status/booking-status.component */
    "./src/app/booking-status/booking-status.component.ts");

    var routes = [{
      path: "",
      component: _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_7__["BookOnlineComponent"]
    }, {
      path: "book-online",
      component: _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_7__["BookOnlineComponent"]
    }, {
      path: "fare",
      component: _fare_info_fare_info_component__WEBPACK_IMPORTED_MODULE_3__["FareInfoComponent"]
    }, {
      path: "areas-served",
      component: _areas_served_areas_served_component__WEBPACK_IMPORTED_MODULE_4__["AreasServedComponent"]
    }, {
      path: "contact-us",
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    }, {
      path: "contact-us-list",
      component: _contact_us_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsListComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: "schedule-cab-list",
      component: _book_online_list_book_online_list_component__WEBPACK_IMPORTED_MODULE_8__["BookOnlineListComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: "schedule-cab-edit/:formId",
      component: _book_online_edit_book_online_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookOnlineEditComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: "payment-status/:stat",
      component: _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_11__["BookingStatusComponent"]
    }, // Login and Signup components are part of Lazy Loading.
    // Find their routes in './auth/auth-routing.module.ts' file,
    // which is used in './auth/auth.module.ts' file
    {
      path: "auth",
      loadChildren: "./auth/auth.module#AuthModule"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  min-height: 100vh;  /* this made all the difference for sticky footer */\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\ndiv {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n  margin: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  width: 60%;\r\n}\r\napp-footer {\r\n  flex-shrink: 0;\r\n}\r\n/* main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\ndiv {\r\n  flex: 1 0 auto;\r\n  margin: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  width: 60%;\r\n}\r\napp-footer {\r\n  flex-shrink: 0;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUIsR0FBRyxtREFBbUQ7RUFDdkUsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7ICAvKiB0aGlzIG1hZGUgYWxsIHRoZSBkaWZmZXJlbmNlIGZvciBzdGlja3kgZm9vdGVyICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5kaXYge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5hcHAtZm9vdGVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLyogbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmRpdiB7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbmFwcC1mb290ZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59ICovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'My Cab Booking';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./book-online/book-online.component */
    "./src/app/book-online/book-online.component.ts");
    /* harmony import */


    var _book_online_list_book_online_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./book-online-list/book-online-list.component */
    "./src/app/book-online-list/book-online-list.component.ts");
    /* harmony import */


    var _book_online_edit_book_online_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./book-online-edit/book-online-edit.component */
    "./src/app/book-online-edit/book-online-edit.component.ts");
    /* harmony import */


    var _fare_info_fare_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./fare-info/fare-info.component */
    "./src/app/fare-info/fare-info.component.ts");
    /* harmony import */


    var _areas_served_areas_served_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./areas-served/areas-served.component */
    "./src/app/areas-served/areas-served.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _contact_us_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./contact-us-list/contact-us-list.component */
    "./src/app/contact-us-list/contact-us-list.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./error-interceptor */
    "./src/app/error-interceptor.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/app/payment/payment.component.ts");
    /* harmony import */


    var _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./booking-status/booking-status.component */
    "./src/app/booking-status/booking-status.component.ts");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/message/message.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_10__["BookOnlineComponent"], _book_online_list_book_online_list_component__WEBPACK_IMPORTED_MODULE_11__["BookOnlineListComponent"], _book_online_edit_book_online_edit_component__WEBPACK_IMPORTED_MODULE_12__["BookOnlineEditComponent"], _fare_info_fare_info_component__WEBPACK_IMPORTED_MODULE_13__["FareInfoComponent"], _areas_served_areas_served_component__WEBPACK_IMPORTED_MODULE_14__["AreasServedComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"], _contact_us_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__["PaymentDialogComponent"], _booking_status_booking_status_component__WEBPACK_IMPORTED_MODULE_23__["BookingStatusComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageSnackbarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_25__["AngularMaterialModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBUaPamxgAHua3PgOHtZkbcHnILZh1RGJQ',
        libraries: ['places']
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__["PaymentDialogComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageSnackbarComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/area.service.ts":
  /*!*********************************!*\
    !*** ./src/app/area.service.ts ***!
    \*********************************/

  /*! exports provided: AreaService */

  /***/
  function srcAppAreaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaService", function () {
      return AreaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AreaService =
    /*#__PURE__*/
    function () {
      function AreaService(http) {
        _classCallCheck(this, AreaService);

        this.http = http;
      }

      _createClass(AreaService, [{
        key: "createAreaDetails",
        value: function createAreaDetails(areaInfo) {
          return this.http.post("http://localhost:3000/api/areaDetails/create", areaInfo);
        }
      }, {
        key: "getAllAreaDetails",
        value: function getAllAreaDetails() {
          return this.http.get("http://localhost:3000/api/areaDetails/findAll");
        }
      }]);

      return AreaService;
    }();

    AreaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AreaService);
    /***/
  },

  /***/
  "./src/app/areas-served/areas-served.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/areas-served/areas-served.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAreasServedAreasServedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "agm-map {\r\n     height: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMtc2VydmVkL2FyZWFzLXNlcnZlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssYUFBYTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzLXNlcnZlZC9hcmVhcy1zZXJ2ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/areas-served/areas-served.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/areas-served/areas-served.component.ts ***!
    \********************************************************/

  /*! exports provided: AreasServedComponent */

  /***/
  function srcAppAreasServedAreasServedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasServedComponent", function () {
      return AreasServedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../area.service */
    "./src/app/area.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AreasServedComponent =
    /*#__PURE__*/
    function () {
      function AreasServedComponent(areaService) {
        _classCallCheck(this, AreasServedComponent);

        this.areaService = areaService;
        this.lat = 12.972442;
        this.lng = 77.580643;
        this.areaInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          areaName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.tokenInfo = false;
      }

      _createClass(AreasServedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllAreaDetails(); //let obj = localStorage.getItem("token");

          var obj = localStorage.getItem("role");

          if (obj != null) {
            if (obj == "admin") {
              this.tokenInfo = true;
            }
          }
        }
      }, {
        key: "getAllAreaDetails",
        value: function getAllAreaDetails() {
          var _this = this;

          this.areaService.getAllAreaDetails().subscribe({
            next: function next(result) {
              //console.log(result)
              _this.areas = result.areaForms;
            },
            error: function error(_error) {},
            complete: function complete() {
              console.log("daone");
            }
          });
        }
      }, {
        key: "getMapInstance",
        value: function getMapInstance(map) {
          this.map = map;
        }
      }, {
        key: "resetMap",
        value: function resetMap() {
          this.map.setCenter({
            lat: 12.972442,
            lng: 77.580643
          });
          console.log('resetMap Method executed');
        }
      }, {
        key: "storeAreaInfoDetails",
        value: function storeAreaInfoDetails() {
          var _this2 = this;

          var areaInfo = this.areaInfoForm.value;
          this.areaService.createAreaDetails(areaInfo).subscribe({
            next: function next(result) {
              console.log(result);
            },
            error: function error(_error2) {},
            complete: function complete() {
              _this2.getAllAreaDetails();
            }
          });
          this.areaInfoForm.reset();
        }
      }]);

      return AreasServedComponent;
    }();

    AreasServedComponent.ctorParameters = function () {
      return [{
        type: _area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"]
      }];
    };

    AreasServedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-areas-served',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./areas-served.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/areas-served/areas-served.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./areas-served.component.css */
      "./src/app/areas-served/areas-served.component.css")).default]
    })], AreasServedComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // this method is called for all "http requests" leaving angular. So kind of middleware on front-end.
          // injecting token into outgoing requests.
          // The Basic Authentication Interceptor intercepts http requests from the application to add
          // basic authentication credentials to the Authorization header if the user is logged in.
          var authToken = this.authService.getToken();
          var authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
          }); // console.log('AuthInterceptor used, authToken: ' + authToken + ' , authReq: ' + JSON.stringify(authReq));

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuthenticated = this.authService.getIsAuthStatus();

          if (!isAuthenticated) {
            this.router.navigate(['/auth/login']);
          }

          return isAuthenticated;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/user/";

    var AuthService =
    /*#__PURE__*/
    function () {
      // listener that listens to changes in auth status
      // basically if wegot token or not.
      function AuthService(http, router, snackBar) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.roleValueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isAuthenticated = false;
        this.authStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "getAuthStatusUpdateListener",
        value: function getAuthStatusUpdateListener() {
          return this.authStatusSubject.asObservable(); // this returns an observable.
          // whenever auth status changes, whatever subscribes to this will get updated value.
        }
      }, {
        key: "getRoleValueUpdateListener",
        value: function getRoleValueUpdateListener() {
          return this.roleValueSubject.asObservable();
        }
      }, {
        key: "getIsAuthStatus",
        value: function getIsAuthStatus() {
          return this.isAuthenticated;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return this.role;
        }
      }, {
        key: "createUser",
        value: function createUser(email, password) {
          var _this3 = this;

          var newUser = {
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + "signup/", newUser).subscribe(function (result) {
            console.log(result);

            _this3.router.navigate(["/"]).catch(function (err) {
              return console.log("error navigating away from create user" + err);
            });
          }, function (error) {
            // console.log("Error creating new user" + JSON.stringify(error));
            _this3.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: error.error.message
              }
            });

            _this3.authStatusSubject.next(false);
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(email, password) {
          var _this4 = this;

          var user = {
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + "login/", user).subscribe(function (result) {
            // console.log(result);
            var token = result.token;
            _this4.token = token;

            if (token) {
              _this4.isAuthenticated = true;

              _this4.authStatusSubject.next(true); // setting auth status as true, since we got the token.


              _this4.role = result.role;

              _this4.roleValueSubject.next(_this4.role);

              var expiresInDuration = result.expiresIn; // in seconds
              // console.log(expiresInDuration);
              // Setting timer to logout in 1 hour (3600s or 3600*1000ms)

              _this4.setAuthTimer(expiresInDuration); // Saving token, expiration date and role in local storage


              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

              _this4.saveAuthDataInLS(token, expirationDate, _this4.role); // console.log(expirationDate);
              // After successful authentication, navigate to home page.


              _this4.router.navigate(["/"]).catch(function (err) {
                console.log("Error in navigating away from login page: " + err);
              });
            }
          }, function (error) {
            // console.log("Error logging in user: " + JSON.stringify(error));
            _this4.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: error.error.message
              }
            });

            _this4.authStatusSubject.next(false);
          });
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(expiresInDuration) {
          var _this5 = this;

          this.tokenTimer = setTimeout(function () {
            _this5.logout();
          }, expiresInDuration * 1000); // nodeJs setTimeout() works with milliseconds.
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          // to prevent info being lost during page reloads,
          // automatically check this info every time app.component.ts loads
          // coz it is the bootstrap component: first component to be loaded/initialized.
          // called in app.component.ts in ngOnInit()
          var authInfo = this.getAuthDataFromLS(); // console.log('authInfo: ' + authInfo);

          if (!authInfo) {
            return;
          }

          var now = new Date();
          var expiresIn = authInfo.expirationDate.getTime() - now.getTime(); // in milliseconds

          if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.authStatusSubject.next(true);
            this.role = authInfo.role; // console.log("autoAuthUser: role:  " + this.role);

            this.roleValueSubject.next(this.role);
            this.setAuthTimer(expiresIn / 1000);
          }
        }
      }, {
        key: "saveAuthDataInLS",
        value: function saveAuthDataInLS(token, expirationDate, role) {
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
          localStorage.setItem("role", role);
        }
      }, {
        key: "clearAuthDataInLS",
        value: function clearAuthDataInLS() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("role");
        }
      }, {
        key: "getAuthDataFromLS",
        value: function getAuthDataFromLS() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");
          var role = localStorage.getItem("role");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            role: role
          };
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusSubject.next(false); // setting auth status as false on logout

          this.role = null;
          this.roleValueSubject.next(this.role);
          console.log("User logged out");
          clearTimeout(this.tokenTimer);
          this.clearAuthDataInLS();
          this.router.navigate(["/"]).catch(function (err) {
            console.log("Error in navigating away from login page: " + err);
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/book-online-edit/book-online-edit.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/book-online-edit/book-online-edit.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookOnlineEditBookOnlineEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\ndiv#alert {\r\n  margin-top: 1rem;\r\n}\r\n\r\nbutton {\r\n  width: 5rem;\r\n}\r\n\r\n#first {\r\n  width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1vbmxpbmUtZWRpdC9ib29rLW9ubGluZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib29rLW9ubGluZS1lZGl0L2Jvb2stb25saW5lLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2I2FsZXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4jZmlyc3Qge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book-online-edit/book-online-edit.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/book-online-edit/book-online-edit.component.ts ***!
    \****************************************************************/

  /*! exports provided: BookOnlineEditComponent */

  /***/
  function srcAppBookOnlineEditBookOnlineEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookOnlineEditComponent", function () {
      return BookOnlineEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../scheduleCab.service */
    "./src/app/scheduleCab.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var BookOnlineEditComponent =
    /*#__PURE__*/
    function () {
      function BookOnlineEditComponent(mapsAPILoader, scheduleCabService, authService, router, route, snackBar) {
        _classCallCheck(this, BookOnlineEditComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.scheduleCabService = scheduleCabService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.userIsAuthenticated = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_3__().format();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.minDate).add(7, "days").format();
        this.editScheduleCabForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]
          }),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/)]
          }),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
          }),
          pickup_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.minDate, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // custom validator not required for date

          }),
          pickup_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          passengers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: "",
            disabled: true
          }, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          pickup_loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: "",
            disabled: true
          }, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          drop_loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: "",
            disabled: true
          }, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          })
        }); // why need ngZone??
        // refer book-online.component.ts_copy at root level for reference
      }

      _createClass(BookOnlineEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // get auth info
          this.userIsAuthenticated = this.authService.getIsAuthStatus();
          this.authStatusListenerSub = this.authService.getAuthStatusUpdateListener().subscribe(function (isAuthenticated) {
            _this6.userIsAuthenticated = isAuthenticated;
          });
          this.role = this.authService.getUserRole();
          this.roleValueListenerSub = this.authService.getRoleValueUpdateListener().subscribe(function (role) {
            _this6.role = role;
          }); // Getting info about form to edit

          this.editScheduleCabFormId = this.route.snapshot.paramMap.get("formId"); // console.log("this.editScheduleCabFormId" + this.editScheduleCabFormId);

          this.scheduleCabService.getScheduleCabForm(this.editScheduleCabFormId).subscribe(function (responseData) {
            // console.log(responseData);
            _this6.scheduleCabFormToEdit = responseData.scheduleCabForm; // console.log("form to edit: " + JSON.stringify(this.scheduleCabFormToEdit));

            _this6.editScheduleCabForm.setValue({
              name: _this6.scheduleCabFormToEdit.name,
              mobile: _this6.scheduleCabFormToEdit.phone,
              email: _this6.scheduleCabFormToEdit.email,
              pickup_date: _this6.scheduleCabFormToEdit.pickup_date,
              pickup_time: _this6.scheduleCabFormToEdit.pickup_time,
              passengers: _this6.scheduleCabFormToEdit.passengers,
              pickup_loc: _this6.scheduleCabFormToEdit.pickup_location,
              drop_loc: _this6.scheduleCabFormToEdit.drop_location
            });

            _this6.editScheduleCabForm.markAllAsTouched(); // for validators to detect form errors again

          }, function (error) {
            console.log("Error getting schedule cab form: " + JSON.stringify(error));

            _this6.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error getting schedule cab form"
              }
            });
          }); // Loading Google Places for autopopulating addresses.
          // www.freakyjolly.com/angular-7-6-add-google-maps-in-angular-2-plus-applications-using-angular-google-maps-module-agm-core-easily/

          this.mapsAPILoader.load().then(function () {
            _this6.autocomplete1 = new google.maps.places.Autocomplete(_this6.pickupLoc.nativeElement, {
              componentRestrictions: {
                country: "US"
              },
              types: ["address"]
            });
            _this6.autocomplete2 = new google.maps.places.Autocomplete(_this6.dropLoc.nativeElement, {
              componentRestrictions: {
                country: "US"
              },
              types: ["address"]
            });

            _this6.autocomplete1.addListener("place_changed", function () {
              _this6.place1 = _this6.autocomplete1.getPlace(); // console.log(this.place1);

              _this6.setPickupLoc(); // verify result


              if (_this6.place1.formatted_address === undefined || _this6.place1.formatted_address === null) {
                return;
              }
            });

            _this6.autocomplete2.addListener("place_changed", function () {
              _this6.place2 = _this6.autocomplete2.getPlace(); // console.log(this.place2);

              _this6.setDropLoc();

              if (_this6.place2.formatted_address === undefined || _this6.place2.formatted_address === null) {
                return;
              }
            });
          });
        }
      }, {
        key: "setPickupLoc",
        value: function setPickupLoc() {
          this.editScheduleCabForm.patchValue({
            pickup_loc: this.place1.formatted_address
          });
        }
      }, {
        key: "setDropLoc",
        value: function setDropLoc() {
          this.editScheduleCabForm.patchValue({
            drop_loc: this.place2.formatted_address
          });
        }
      }, {
        key: "onBackButton",
        value: function onBackButton() {
          // console.log('Clicked back button');
          this.router.navigate(["/schedule-cab-list"]).catch(function (err) {
            return console.log("error navigating away from edit schedule cab form" + err);
          });
        }
      }, {
        key: "onEditScheduleCabForm",
        value: function onEditScheduleCabForm() {
          var _this7 = this;

          // console.log(this.editScheduleCabForm.value);
          this.scheduleCabService.editScheduleCabForm(this.editScheduleCabFormId, this.editScheduleCabForm.value);
          this.editScheduleCabForm.reset({
            name: "",
            mobile: "",
            email: "",
            pickup_date: "",
            pickup_time: "",
            passengers: this.scheduleCabFormToEdit.passengers,
            pickup_loc: this.scheduleCabFormToEdit.pickup_location,
            drop_loc: this.scheduleCabFormToEdit.drop_location
          });
          Object.keys(this.editScheduleCabForm.controls).forEach(function (key) {
            _this7.editScheduleCabForm.get(key).setErrors(null);
          }); // console.log(this.editScheduleCabForm.value);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusListenerSub.unsubscribe();
          this.roleValueListenerSub.unsubscribe();
        }
      }]);

      return BookOnlineEditComponent;
    }();

    BookOnlineEditComponent.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]
      }, {
        type: _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleCabService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pickupLoc", {
      static: false
    })], BookOnlineEditComponent.prototype, "pickupLoc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropLoc", {
      static: false
    })], BookOnlineEditComponent.prototype, "dropLoc", void 0);
    BookOnlineEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-online-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-edit/book-online-edit.component.html")).default,
      selector: "<app-book-online-edit>",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-online-edit.component.css */
      "./src/app/book-online-edit/book-online-edit.component.css")).default]
    })], BookOnlineEditComponent);
    /***/
  },

  /***/
  "./src/app/book-online-list/book-online-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/book-online-list/book-online-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookOnlineListBookOnlineListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\r\n  font-weight: 500;\r\n}\r\ndiv {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\ndiv#alert {\r\n  margin-top: 1rem;\r\n}\r\nbutton {\r\n  width: 5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1vbmxpbmUtbGlzdC9ib29rLW9ubGluZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stb25saW5lLWxpc3QvYm9vay1vbmxpbmUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuZGl2I2FsZXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDVyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/book-online-list/book-online-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/book-online-list/book-online-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: BookOnlineListComponent */

  /***/
  function srcAppBookOnlineListBookOnlineListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookOnlineListComponent", function () {
      return BookOnlineListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _scheduleCab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scheduleCab.service */
    "./src/app/scheduleCab.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var BookOnlineListComponent =
    /*#__PURE__*/
    function () {
      function BookOnlineListComponent(scheduleCabService, authService) {
        _classCallCheck(this, BookOnlineListComponent);

        this.scheduleCabService = scheduleCabService;
        this.authService = authService;
        this.scheduleCabForms = [];
        this.userIsAuthenticated = false;
      }
      /*
      altenative to using
      <a  mat-stroked-button color="primary" [routerLink]="['/schedule-cab-edit/', scheduleCabForm.id]">Edit Form</a>,
      use
      <button mat-stroked-button color="primary" (click)="onEditScheduleCabForm(scheduleCabForm.id)">Edit Form</button>
      onEditScheduleCabForm(formId) {
        console.log('Edit form clicked, formId: ' + formId);
        this.router
          .navigate(["/schedule-cab-edit/", formId])
          .catch(err =>
            console.log("error navigating away from create user" + err)
          );
          // https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular
      }
      */


      _createClass(BookOnlineListComponent, [{
        key: "onRefreshClick",
        value: function onRefreshClick() {
          this.scheduleCabService.getScheduleCabForms();
        }
      }, {
        key: "onDeleteScheduleCabForm",
        value: function onDeleteScheduleCabForm(formId) {
          this.scheduleCabService.onDeleteForm(formId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.scheduleCabService.getScheduleCabForms();
          this.scheduleCabFormsUpdateSub = this.scheduleCabService // to listen to:
          // this.scheduleCabFormsUpdated.next([...this.scheduleCabForms]);
          // in ScheduleCabService
          .getScheduleCabFormsUpdateListener().subscribe(function (scheduleCabForms) {
            _this8.scheduleCabForms = scheduleCabForms;
          });
          this.userIsAuthenticated = this.authService.getIsAuthStatus();
          this.authStatusListenerSub = this.authService.getAuthStatusUpdateListener().subscribe(function (isAuthenticated) {
            _this8.userIsAuthenticated = isAuthenticated;
          });
          this.role = this.authService.getUserRole();
          this.roleValueListenerSub = this.authService.getRoleValueUpdateListener().subscribe(function (role) {
            _this8.role = role;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scheduleCabFormsUpdateSub.unsubscribe();
          this.authStatusListenerSub.unsubscribe();
          this.roleValueListenerSub.unsubscribe();
        }
      }]);

      return BookOnlineListComponent;
    }();

    BookOnlineListComponent.ctorParameters = function () {
      return [{
        type: _scheduleCab_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleCabService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    BookOnlineListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-online-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-online-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online-list/book-online-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-online-list.component.css */
      "./src/app/book-online-list/book-online-list.component.css")).default]
    })], BookOnlineListComponent);
    /***/
  },

  /***/
  "./src/app/book-online/book-online.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/book-online/book-online.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookOnlineBookOnlineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\ndiv#alert {\r\n  margin-top: 1rem;\r\n}\r\n\r\nbutton {\r\n  width: 5rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1vbmxpbmUvYm9vay1vbmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm9vay1vbmxpbmUvYm9vay1vbmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2I2FsZXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book-online/book-online.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/book-online/book-online.component.ts ***!
    \******************************************************/

  /*! exports provided: BookOnlineComponent */

  /***/
  function srcAppBookOnlineBookOnlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookOnlineComponent", function () {
      return BookOnlineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../scheduleCab.service */
    "./src/app/scheduleCab.service.ts");
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../payment/payment.component */
    "./src/app/payment/payment.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../payment.service */
    "./src/app/payment.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../error/error.component */
    "./src/app/error/error.component.ts");

    var BookOnlineComponent =
    /*#__PURE__*/
    function () {
      function BookOnlineComponent(mapsAPILoader, scheduleCabService, paymentService, dialog, snackBar) {
        _classCallCheck(this, BookOnlineComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.scheduleCabService = scheduleCabService;
        this.paymentService = paymentService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_3__().format();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.minDate).add(7, "days").format();
        this.scheduleCabForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]
          }),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/)]
          }),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
          }),
          pickup_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.minDate, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // custom validator not required for date

          }),
          pickup_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          passengers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          pickup_loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          drop_loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          })
        }); // why need ngZone??
        // refer book-online.component.ts_copy at root level for reference
      }

      _createClass(BookOnlineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          // Loading Google Places for auto-populating addresses.
          // www.freakyjolly.com/angular-7-6-add-google-maps-in-angular-2-plus-applications-using-angular-google-maps-module-agm-core-easily/
          this.mapsAPILoader.load().then(function () {
            _this9.autocomplete1 = new google.maps.places.Autocomplete(_this9.pickupLoc.nativeElement, {
              componentRestrictions: {
                country: "IND"
              },
              types: ["address"]
            });
            _this9.autocomplete2 = new google.maps.places.Autocomplete(_this9.dropLoc.nativeElement, {
              componentRestrictions: {
                country: "IND"
              },
              types: ["address"]
            });

            _this9.autocomplete1.addListener("place_changed", function () {
              _this9.place1 = _this9.autocomplete1.getPlace(); // pickup location

              console.log(_this9.place1); // verify result

              if (_this9.place1.formatted_address === undefined || _this9.place1.formatted_address === null) {
                return;
              }

              _this9.setPickupLoc();
            });

            _this9.autocomplete2.addListener("place_changed", function () {
              _this9.place2 = _this9.autocomplete2.getPlace(); // drop location

              console.log(_this9.place2);

              if (_this9.place2.formatted_address === undefined || _this9.place2.formatted_address === null) {
                return;
              }

              _this9.setDropLoc();
            });
          });
        }
      }, {
        key: "setPickupLoc",
        value: function setPickupLoc() {
          this.scheduleCabForm.patchValue({
            pickup_loc: this.place1.formatted_address
          });
        }
      }, {
        key: "setDropLoc",
        value: function setDropLoc() {
          this.scheduleCabForm.patchValue({
            drop_loc: this.place2.formatted_address
          });
        }
      }, {
        key: "onSubmitScheduleCabForm",
        value: function onSubmitScheduleCabForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // console.log(this.scheduleCabForm.value);
                    this.paymentService.setScheduleCabForm(this.scheduleCabForm.value);
                    _context.prev = 1;
                    _context.next = 4;
                    return this.getDistance();

                  case 4:
                    this.distance = _context.sent;
                    console.log("Obtained distance before opening dialog box, distance = " + this.distance);
                    this.distanceIntermediate = this.distance.split(" ")[0];
                    this.distanceNumerical = Number(this.distanceIntermediate.replace(/[^0-9.]+/g, ""));
                    this.paymentService.setDistance(this.distanceNumerical);
                    this.fare = +(this.distanceNumerical * 2.6).toFixed(2);
                    this.paymentService.setFare(this.fare);
                    this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentDialogComponent"]);

                    if (this.paymentService.isPaid) {
                      console.log("why is this running");
                      this.scheduleCabService.submitScheduleCabForm(this.scheduleCabForm.value);
                      this.scheduleCabForm.reset();
                      Object.keys(this.scheduleCabForm.controls).forEach(function (key) {
                        _this10.scheduleCabForm.get(key).setErrors(null);
                      }); // console.log(this.scheduleCabForm.value);
                    }

                    _context.next = 19;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](1);
                    console.log("Error in obtaining distance, Error: " + _context.t0);
                    this.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], {
                      duration: 4000,
                      data: {
                        message: "Error in obtaining distance. Cannot proceed further."
                      }
                    });

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 15]]);
          }));
        }
      }, {
        key: "getDistance",
        value: function getDistance() {
          var _this11 = this;

          // Don't use async getDistance() because it already returns a Promise.
          // https://developers.google.com/maps/documentation/javascript/distancematrix#DrivingOptions
          this.distService = new google.maps.DistanceMatrixService();
          return new Promise(function (resolve, reject) {
            _this11.distService.getDistanceMatrix({
              origins: [_this11.place1.formatted_address],
              destinations: [_this11.place2.formatted_address],
              travelMode: google.maps.TravelMode.DRIVING,
              unitSystem: google.maps.UnitSystem.IMPERIAL,
              avoidHighways: false,
              avoidTolls: false
            }, function (response, status) {
              if (status === google.maps.DistanceMatrixStatus.OK) {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;

                for (var i = 0; i < origins.length; i++) {
                  var results = response.rows[i].elements;

                  for (var j = 0; j < results.length; j++) {
                    var element = results[j];
                    var distance = element.distance.text; // distance obtained here.
                    // console.log('dist = ' + distance);

                    if (distance) {
                      resolve(distance);
                    } else {
                      reject(new Error("Could not get distance in getDistanceMatrix()"));
                    }
                  }
                }
              } else {
                console.log("Error getting distance from google.maps.DistanceMatrix");
              }
            });
          });
        }
      }]);

      return BookOnlineComponent;
    }();

    BookOnlineComponent.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]
      }, {
        type: _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleCabService"]
      }, {
        type: _payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pickupLoc", {
      static: false
    })], BookOnlineComponent.prototype, "pickupLoc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropLoc", {
      static: false
    })], BookOnlineComponent.prototype, "dropLoc", void 0);
    BookOnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-online",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-online.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-online/book-online.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-online.component.css */
      "./src/app/book-online/book-online.component.css")).default]
    })], BookOnlineComponent);
    /***/
  },

  /***/
  "./src/app/booking-status/booking-status.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/booking-status/booking-status.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingStatusBookingStatusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctc3RhdHVzL2Jvb2tpbmctc3RhdHVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/booking-status/booking-status.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/booking-status/booking-status.component.ts ***!
    \************************************************************/

  /*! exports provided: BookingStatusComponent */

  /***/
  function srcAppBookingStatusBookingStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingStatusComponent", function () {
      return BookingStatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BookingStatusComponent =
    /*#__PURE__*/
    function () {
      function BookingStatusComponent(route) {
        _classCallCheck(this, BookingStatusComponent);

        this.route = route;
      }

      _createClass(BookingStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bookingStatus = this.route.snapshot.paramMap.get("stat");
          console.log('this.booking Status: ' + this.bookingStatus);
        }
      }]);

      return BookingStatusComponent;
    }();

    BookingStatusComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BookingStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-status.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-status/booking-status.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-status.component.css */
      "./src/app/booking-status/booking-status.component.css")).default]
    })], BookingStatusComponent);
    /***/
  },

  /***/
  "./src/app/contact-us-list/contact-us-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/contact-us-list/contact-us-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactUsListContactUsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\r\n  font-weight: 500;\r\n}\r\ndiv {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\ndiv#alert {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy1saXN0L2NvbnRhY3QtdXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy1saXN0L2NvbnRhY3QtdXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuZGl2I2FsZXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact-us-list/contact-us-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/contact-us-list/contact-us-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactUsListComponent */

  /***/
  function srcAppContactUsListContactUsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsListComponent", function () {
      return ContactUsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _contactForms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contactForms.service */
    "./src/app/contactForms.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var ContactUsListComponent =
    /*#__PURE__*/
    function () {
      function ContactUsListComponent(contactFormsService, authService) {
        _classCallCheck(this, ContactUsListComponent);

        this.contactFormsService = contactFormsService;
        this.authService = authService;
        this.contactForms = [];
        this.userIsAuthenticated = false;
      }

      _createClass(ContactUsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.contactFormsService.getContactForms();
          this.contactFormsSub = this.contactFormsService.getContactFormUpdatedListener().subscribe(function (contactForms) {
            _this12.contactForms = contactForms;
          });
          this.userIsAuthenticated = this.authService.getIsAuthStatus();
          this.authStatusListenerSub = this.authService.getAuthStatusUpdateListener().subscribe(function (isAuthenticated) {
            _this12.userIsAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.contactFormsSub.unsubscribe();
          this.authStatusListenerSub.unsubscribe();
        }
      }, {
        key: "onRefreshClick",
        value: function onRefreshClick() {
          this.contactFormsService.getContactForms();
        }
      }, {
        key: "onDeleteForm",
        value: function onDeleteForm(formId) {
          // console.log("I'm here! Formid: "+formId);
          this.contactFormsService.deleteForm(formId);
        }
      }]);

      return ContactUsListComponent;
    }();

    ContactUsListComponent.ctorParameters = function () {
      return [{
        type: _contactForms_service__WEBPACK_IMPORTED_MODULE_2__["ContactFormsService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    ContactUsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us-list/contact-us-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us-list.component.css */
      "./src/app/contact-us-list/contact-us-list.component.css")).default]
    })], ContactUsListComponent);
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactUsContactUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  width: 5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\ndiv#alert {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNXJlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5kaXYjYWxlcnQge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _contactForms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contactForms.service */
    "./src/app/contactForms.service.ts");

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent(contactFormService) {
        _classCallCheck(this, ContactUsComponent);

        this.contactFormService = contactFormService;
      }

      _createClass(ContactUsComponent, [{
        key: "onContactFormSubmission",
        value: function onContactFormSubmission(form) {
          if (form.invalid) {
            return;
          }

          this.contactFormService.submitContactForm(form.value);
          form.resetForm();
        }
      }, {
        key: "getPhoneRegex",
        value: function getPhoneRegex() {
          return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ctorParameters = function () {
      return [{
        type: _contactForms_service__WEBPACK_IMPORTED_MODULE_2__["ContactFormsService"]
      }];
    };

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact-us",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.css */
      "./src/app/contact-us/contact-us.component.css")).default]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/contactForms.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/contactForms.service.ts ***!
    \*****************************************/

  /*! exports provided: ContactFormsService */

  /***/
  function srcAppContactFormsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormsService", function () {
      return ContactFormsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/message/message.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + "/ContactForms/";

    var ContactFormsService =
    /*#__PURE__*/
    function () {
      function ContactFormsService(http, snackBar) {
        _classCallCheck(this, ContactFormsService);

        this.http = http;
        this.snackBar = snackBar;
        this.contactForms = [];
        this.contactFormsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ContactFormsService, [{
        key: "getContactFormUpdatedListener",
        value: function getContactFormUpdatedListener() {
          return this.contactFormsUpdated.asObservable();
        }
      }, {
        key: "getContactForms",
        value: function getContactForms() {
          var _this13 = this;

          this.http.get(BACKEND_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (responseData) {
            return responseData.contactForms.map(function (contactForm) {
              return {
                id: contactForm._id,
                name: contactForm.name,
                email: contactForm.email,
                phone: contactForm.phone,
                subject: contactForm.subject,
                message: contactForm.message
              };
            });
          })).subscribe(function (responseData) {
            // console.log(responseData);
            _this13.contactForms = responseData; // console.log(this.contactForms);

            _this13.contactFormsUpdated.next(_toConsumableArray(_this13.contactForms));
          }, function (error) {
            console.log("Error getting contact form: " + JSON.stringify(error));

            _this13.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error getting contact forms"
              }
            });
          });
        }
      }, {
        key: "submitContactForm",
        value: function submitContactForm(formValue) {
          var _this14 = this;

          // console.log("Inside ContactFormsService, submitContactForm");
          // console.log(formValue);
          this.http.post(BACKEND_URL, formValue).subscribe(function (responseData) {
            console.log(responseData);

            _this14.contactForms.push(formValue); // console.log('Value of array' + this.contactForms);


            _this14.contactFormsUpdated.next(_toConsumableArray(_this14.contactForms));

            _this14.snackBar.openFromComponent(_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageSnackbarComponent"], {
              duration: 4000,
              data: {
                message: "Contact form submitted successfully."
              }
            });
          }, function (error) {
            console.log("Error submitting contact form: " + JSON.stringify(error));

            _this14.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error submitting contact form."
              }
            });
          });
        }
      }, {
        key: "deleteForm",
        value: function deleteForm(formId) {
          var _this15 = this;

          this.http.delete(BACKEND_URL + formId).subscribe(function (responseData) {
            console.log(responseData);

            var updatedContactForms = _this15.contactForms.filter(function (form) {
              return form.id !== formId;
            });

            _this15.contactForms = updatedContactForms;

            _this15.contactFormsUpdated.next(_toConsumableArray(_this15.contactForms));

            _this15.snackBar.openFromComponent(_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageSnackbarComponent"], {
              duration: 4000,
              data: {
                message: "Contact form deleted successfully."
              }
            });
          }, function (error) {
            console.log("Error deleting contact form: " + JSON.stringify(error));

            _this15.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error deleting contact form."
              }
            });
          });
        }
      }]);

      return ContactFormsService;
    }();

    ContactFormsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    ContactFormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ContactFormsService);
    /***/
  },

  /***/
  "./src/app/error-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/error-interceptor.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts"); // import { MatDialog } from "@angular/material/dialog";


    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(snackBar) {
        _classCallCheck(this, ErrorInterceptor);

        this.snackBar = snackBar;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this16 = this;

          return next.handle(req).pipe( // we can listen to response using handle.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMessage = 'An unknown error occurred!';

            if (error.error.message) {
              errorMessage = error.error.message;
            }

            console.log(error); // alert(error.error.message);

            _this16.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: errorMessage
              }
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); // to emit the error notification
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var ErrorComponent = function ErrorComponent(snackBarRef, data) {
      _classCallCheck(this, ErrorComponent);

      this.snackBarRef = snackBarRef;
      this.data = data;
    };

    ErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]]
        }]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/fare-info/fare-info.component.css":
  /*!***************************************************!*\
    !*** ./src/app/fare-info/fare-info.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFareInfoFareInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ntd {\r\n  padding-right: 1rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFyZS1pbmZvL2ZhcmUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmFyZS1pbmZvL2ZhcmUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/fare-info/fare-info.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fare-info/fare-info.component.ts ***!
    \**************************************************/

  /*! exports provided: FareInfoComponent */

  /***/
  function srcAppFareInfoFareInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FareInfoComponent", function () {
      return FareInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FareInfoComponent =
    /*#__PURE__*/
    function () {
      function FareInfoComponent() {
        _classCallCheck(this, FareInfoComponent);
      }

      _createClass(FareInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FareInfoComponent;
    }();

    FareInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fare-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fare-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fare-info/fare-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fare-info.component.css */
      "./src/app/fare-info/fare-info.component.css")).default]
    })], FareInfoComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  /* mat-toolbar-row:nth-of-type(2){\r\n    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4) ;\r\n  } */\r\n  \r\n  ul {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  li {\r\n    display: inline;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  .mat-toolbar {\r\n    background: violet;\r\n    color: #fff;\r\n  }\r\n  \r\n  .material-icons.md-18 { font-size: 22px;text-align: center;}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBOztLQUVHOztFQUVIO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUEsd0JBQXdCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIG1hdC10b29sYmFyLXJvdzpudGgtb2YtdHlwZSgyKXtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC40KSA7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHZpb2xldDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAubWF0ZXJpYWwtaWNvbnMubWQtMTggeyBmb250LXNpemU6IDIycHg7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n/* mat-toolbar-row:nth-of-type(2){\r\n  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4) ;\r\n} */\r\n\r\nul {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  display: inline;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: violet;\r\n  color: #fff;\r\n}\r\n\r\n.material-icons.md-18 { font-size: 22px;text-align: center;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsd0JBQXdCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vKiBtYXQtdG9vbGJhci1yb3c6bnRoLW9mLXR5cGUoMil7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjQpIDtcclxufSAqL1xyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubGkge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHZpb2xldDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAyMnB4O3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.userIsAuthenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.userIsAuthenticated = this.authService.getIsAuthStatus();
          this.role = this.authService.getUserRole();
          this.authStatusListenerSub = this.authService.getAuthStatusUpdateListener().subscribe(function (isAuthenticated) {
            _this17.userIsAuthenticated = isAuthenticated;
          });
          this.roleValueListenerSub = this.authService.getRoleValueUpdateListener().subscribe(function (role) {
            _this17.role = role; // console.log("inside header init, inside roleValueListenerSub. Role: " + this.role);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusListenerSub.unsubscribe();
          this.roleValueListenerSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/message/message.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/message/message.component.ts ***!
    \**********************************************/

  /*! exports provided: MessageSnackbarComponent */

  /***/
  function srcAppMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSnackbarComponent", function () {
      return MessageSnackbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var MessageSnackbarComponent = function MessageSnackbarComponent(snackBarRef, data) {
      _classCallCheck(this, MessageSnackbarComponent);

      this.snackBarRef = snackBarRef;
      this.data = data;
    };

    MessageSnackbarComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]]
        }]
      }];
    };

    MessageSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))], MessageSnackbarComponent);
    /***/
  },

  /***/
  "./src/app/payment.service.ts":
  /*!************************************!*\
    !*** ./src/app/payment.service.ts ***!
    \************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaymentService =
    /*#__PURE__*/
    function () {
      function PaymentService() {
        _classCallCheck(this, PaymentService);

        this.isPaid = false;
      }

      _createClass(PaymentService, [{
        key: "setScheduleCabForm",
        value: function setScheduleCabForm(form) {
          this.scheduleCabForm = form;
        }
      }, {
        key: "getScheduleCabForm",
        value: function getScheduleCabForm() {
          return this.scheduleCabForm;
        }
      }, {
        key: "setDistance",
        value: function setDistance(distance) {
          this.distance = distance;
        }
      }, {
        key: "getDistance",
        value: function getDistance() {
          return this.distance;
        }
      }, {
        key: "setFare",
        value: function setFare(fare) {
          this.fare = fare;
        }
      }, {
        key: "getFare",
        value: function getFare() {
          return this.fare;
        }
      }]);

      return PaymentService;
    }();

    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PaymentService);
    /***/
  },

  /***/
  "./src/app/payment/payment.component.css":
  /*!***********************************************!*\
    !*** ./src/app/payment/payment.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentPaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n  width: 8rem;\r\n}\r\n\r\ndiv#paypal {\r\n  margin-top: 2rem;\r\n}\r\n\r\ntd {\r\n  padding-right: 2rem;\r\n}\r\n\r\ntable {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDhyZW07XHJcbn1cclxuXHJcbmRpdiNwYXlwYWwge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/payment/payment.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/payment/payment.component.ts ***!
    \**********************************************/

  /*! exports provided: PaymentDialogComponent */

  /***/
  function srcAppPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDialogComponent", function () {
      return PaymentDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../payment.service */
    "./src/app/payment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../scheduleCab.service */
    "./src/app/scheduleCab.service.ts");

    var PaymentDialogComponent =
    /*#__PURE__*/
    function () {
      function PaymentDialogComponent(paymentService, router, ngZone, scheduleCabService, dialogRef, data) {
        _classCallCheck(this, PaymentDialogComponent);

        this.paymentService = paymentService;
        this.router = router;
        this.ngZone = ngZone;
        this.scheduleCabService = scheduleCabService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.paidFor = false;
        this.buttonRendered = false;
        this.paymentFlag = false;
      }

      _createClass(PaymentDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log("inside ngOnInit");
          this.scheduleCabForm = this.paymentService.getScheduleCabForm(); // console.log(this.scheduleCabForm);

          this.distance = this.paymentService.getDistance();
          console.log('Distance = ' + this.distance);
          this.fare = this.paymentService.getFare() * 80.0; // console.log('Fare = ' + this.fare);

          this.product = {
            price: this.fare * 80,
            description: 'Booking the cab'
          };
          console.log('Fare = ' + this.product.price);
        }
      }, {
        key: "enterCardDetails",
        value: function enterCardDetails() {
          this.paymentFlag = true;
        }
      }, {
        key: "onProceedClick",
        value: function onProceedClick() {
          var _this18 = this;

          console.log("done");
          this.scheduleCabService.submitScheduleCabForm(this.scheduleCabForm);

          if (!this.buttonRendered) {
            paypal.Buttons({
              createOrder: function createOrder(data, actions) {
                return actions.order.create({
                  purchase_units: [{
                    description: _this18.product.description,
                    amount: {
                      currency_code: 'USD',
                      value: _this18.product.price
                    }
                  }]
                });
              },
              onApprove: function onApprove(data, actions) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2() {
                  var order;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return actions.order.capture();

                        case 2:
                          order = _context2.sent;
                          this.paidFor = true;
                          this.scheduleCabService.submitScheduleCabForm(this.scheduleCabForm);
                          this.router.navigate(['/payment-status/success']);

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              },
              onError: function onError(err) {
                console.log(err);

                _this18.ngZone.run(function () {
                  _this18.router.navigate(['/payment-status/failure']);
                });
              }
            });
          }

          this.buttonRendered = true;
          this.dialogRef.close();
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.dialogRef.close();
        }
      }]);

      return PaymentDialogComponent;
    }();

    PaymentDialogComponent.ctorParameters = function () {
      return [{
        type: _payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _scheduleCab_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleCabService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', {
      static: true
    })], PaymentDialogComponent.prototype, "paypalElement", void 0);
    PaymentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.component.css */
      "./src/app/payment/payment.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], PaymentDialogComponent);
    /***/
  },

  /***/
  "./src/app/scheduleCab.service.ts":
  /*!****************************************!*\
    !*** ./src/app/scheduleCab.service.ts ***!
    \****************************************/

  /*! exports provided: ScheduleCabService */

  /***/
  function srcAppScheduleCabServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleCabService", function () {
      return ScheduleCabService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/message/message.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + "/scheduleCabForm/";

    var ScheduleCabService =
    /*#__PURE__*/
    function () {
      function ScheduleCabService(http, snackBar) {
        _classCallCheck(this, ScheduleCabService);

        this.http = http;
        this.snackBar = snackBar;
        this.scheduleCabForms = [];
        this.scheduleCabFormsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ScheduleCabService, [{
        key: "getScheduleCabFormsUpdateListener",
        value: function getScheduleCabFormsUpdateListener() {
          return this.scheduleCabFormsUpdated.asObservable();
        }
      }, {
        key: "submitScheduleCabForm",
        value: function submitScheduleCabForm(scheduleCabForm) {
          var _this19 = this;

          this.http.post(BACKEND_URL, scheduleCabForm).subscribe(function (responseData) {
            console.log(responseData.message);

            _this19.snackBar.openFromComponent(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageSnackbarComponent"], {
              duration: 4000,
              data: {
                message: "Form submitted successfully."
              }
            });
          }, function (error) {
            console.log("Error submitting schedule cab form: " + JSON.stringify(error));

            _this19.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error submitting schedule cab form."
              }
            });
          });
        }
      }, {
        key: "editScheduleCabForm",
        value: function editScheduleCabForm(editScheduleCabFormId, _editScheduleCabForm) {
          var _this20 = this;

          var phoneToEdit = +_editScheduleCabForm.mobile; // console.log(editScheduleCabForm);

          this.http.patch(BACKEND_URL + editScheduleCabFormId, {
            name: _editScheduleCabForm.name,
            phone: phoneToEdit,
            email: _editScheduleCabForm.email,
            pickup_date: _editScheduleCabForm.pickup_date,
            pickup_time: _editScheduleCabForm.pickup_time
          }).subscribe(function (responseData) {
            console.log(responseData.message);
            var updatedScheduleCabForms = _this20.scheduleCabForms;
            var oldFormIndex = updatedScheduleCabForms.findIndex(function (form) {
              return form.id === editScheduleCabFormId;
            });
            updatedScheduleCabForms[oldFormIndex] = _editScheduleCabForm;
            _this20.scheduleCabForms = updatedScheduleCabForms;

            _this20.scheduleCabFormsUpdated.next(_toConsumableArray(_this20.scheduleCabForms));

            _this20.snackBar.openFromComponent(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageSnackbarComponent"], {
              duration: 4000,
              data: {
                message: "Form updated successfully."
              }
            });
          }, function (error) {
            console.log("Error submitting edited schedule cab form: " + JSON.stringify(error));

            _this20.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error updating form."
              }
            });
          });
        }
      }, {
        key: "getScheduleCabForm",
        value: function getScheduleCabForm(formId) {
          return this.http.get(BACKEND_URL + formId);
        }
      }, {
        key: "getScheduleCabForms",
        value: function getScheduleCabForms() {
          var _this21 = this;

          // return [...this.scheduleCabForms];
          this.http.get(BACKEND_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (responseData) {
            return responseData.cabForms.map(function (cabForm) {
              return {
                id: cabForm._id,
                name: cabForm.name,
                email: cabForm.email,
                phone: cabForm.phone,
                pickup_date: moment__WEBPACK_IMPORTED_MODULE_5__(cabForm.pickup_date).format("LL"),
                pickup_time: cabForm.pickup_time,
                passengers: cabForm.passengers,
                pickup_location: cabForm.pickup_location,
                drop_location: cabForm.drop_location,
                creator: cabForm.creator
              };
            });
          })).subscribe(function (responseData) {
            // console.log(responseData);
            _this21.scheduleCabForms = responseData;

            _this21.scheduleCabFormsUpdated.next(_toConsumableArray(_this21.scheduleCabForms));
          }, function (error) {
            console.log("Error getting schedule cab form: " + JSON.stringify(error));

            _this21.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error getting schedule cab forms."
              }
            });
          });
        }
      }, {
        key: "onDeleteForm",
        value: function onDeleteForm(scheduleCabFormId) {
          var _this22 = this;

          // console.log(scheduleCabFormId);
          this.http.delete(BACKEND_URL + scheduleCabFormId).subscribe(function (responseData) {
            // console.log(responseData);
            var updatedScheduleCabForms = _this22.scheduleCabForms.filter(function (form) {
              return form.id !== scheduleCabFormId;
            });

            _this22.scheduleCabForms = updatedScheduleCabForms;

            _this22.scheduleCabFormsUpdated.next(_toConsumableArray(_this22.scheduleCabForms));

            _this22.snackBar.openFromComponent(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageSnackbarComponent"], {
              duration: 4000,
              data: {
                message: "Schedule Cab Form deleted successfully."
              }
            });
          }, function (error) {
            console.log("Error deleting schedule cab form: " + JSON.stringify(error));

            _this22.snackBar.openFromComponent(_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], {
              duration: 4000,
              data: {
                message: "Error deleting schedule cab form."
              }
            });
          });
        }
      }]);

      return ScheduleCabService;
    }();

    ScheduleCabService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    ScheduleCabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ScheduleCabService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! zone.js/dist/zone-error */
    "./node_modules/zone.js/dist/zone-error.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      'apiUrl': "http://localhost:3000/api"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Desktop\MEAN Stack  All Project SME\All Project Document and code\Final Capstone Cab Service\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map