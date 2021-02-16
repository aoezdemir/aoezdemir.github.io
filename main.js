(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ayr":
/*!***************************************************!*\
  !*** ./src/assets/services/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (sessionStorage.getItem("currentUser") !== null) {
            //authorized, so return true
            return true;
        }
        else {
            // not logged in so redirect to login page
            this.router.navigateByUrl("login");
            return false;
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aliozdemir/Documents/UNI/UniKoblenzAktuell/Wise20_21/Worklflowmanagement/wm_bvis_ui/src/main.ts */"zUnb");


/***/ }),

/***/ "3dBE":
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmDialogComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    closeConfirmDialog() {
        this.dialog.closeAll();
    }
    ngOnInit() {
    }
    navigateToLandingPage() {
        this.router.navigateByUrl("");
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 8, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["href", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank you for your order!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shortly you will get you order details via email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-focus-indicator, .mat-button[_ngcontent-%COMP%], .mat-button-base[_ngcontent-%COMP%] {\n  background-color: #eab55a !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9jdXMtaW5kaWNhdG9yLCAubWF0LWJ1dHRvbiwgLm1hdC1idXR0b24tYmFzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjU1YSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4gew":
/*!**********************************************************!*\
  !*** ./src/app/small-spinner/small-spinner.component.ts ***!
  \**********************************************************/
/*! exports provided: SmallSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallSpinnerComponent", function() { return SmallSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SmallSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmallSpinnerComponent.ɵfac = function SmallSpinnerComponent_Factory(t) { return new (t || SmallSpinnerComponent)(); };
SmallSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallSpinnerComponent, selectors: [["app-small-spinner"]], decls: 4, vars: 0, consts: [[1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function SmallSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: 40px;\n  max-height: 40px;\n  width: 7vh;\n  height: 7vh;\n  background-color: #333;\n  margin-right: 15px;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NtYWxsLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLHdEQUFBO0FBQ0o7O0FBRUU7RUFFRSx1QkFBQTtBQUNKOztBQUVFO0VBRUUsdUJBQUE7QUFDSjs7QUFPRTtFQUNFO0lBRUUsbUJBQUE7RUFJSjtFQUhJO0lBRUEsbUJBQUE7RUFLSjtBQUNGIiwiZmlsZSI6InNtYWxsLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAgIFxuICAuc3Bpbm5lciA+IGRpdiB7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDd2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICB9XG4gIFxuICAuc3Bpbm5lciAuYm91bmNlMSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgfVxuICBcbiAgLnNwaW5uZXIgLmJvdW5jZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAwJSwgODAlLCAxMDAlIHsgXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH0gNDAlIHsgXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG4gIH0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmallSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-small-spinner',
                templateUrl: './small-spinner.component.html',
                styleUrls: ['./small-spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5gZA":
/*!*****************************************************!*\
  !*** ./src/assets/services/data-sharing.service.ts ***!
  \*****************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataSharingService {
    constructor() {
    }
    set carSelectionResults(input) {
        this._carSelectionResults = input;
    }
    get carSelectionResults() {
        return this._carSelectionResults;
    }
    set insuranceSelectionResult(input) {
        this._insuranceSelectionResult = input;
    }
    get insuranceSelectionResult() {
        return this._insuranceSelectionResult;
    }
    set carSelected(input) {
        this._carSelected = input;
    }
    get carSelected() {
        return this._carSelected;
    }
    set totalPrice(input) {
        this._totalPrice = input;
    }
    get totalPrice() {
        return this._totalPrice;
    }
    set insurancePrice(input) {
        this._insurancePrice = input;
    }
    get insurancePrice() {
        return this._insurancePrice;
    }
    set insurance(input) {
        this._insurance = input;
    }
    get insurance() {
        return this._insurance;
    }
    set fromDate(input) {
        this._fromDate = input;
    }
    get fromDate() {
        return this._fromDate;
    }
    set toDate(input) {
        this._toDate = input;
    }
    get toDate() {
        return this._toDate;
    }
    set processInstanceId(input) {
        this._processInstanceId = input;
    }
    get processInstanceId() {
        return this._processInstanceId;
    }
    set selectCarResponse(input) {
        this._selectCarResponse = input;
    }
    get selectCarResponse() {
        return this._selectCarResponse;
    }
}
DataSharingService.ɵfac = function DataSharingService_Factory(t) { return new (t || DataSharingService)(); };
DataSharingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataSharingService, factory: DataSharingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataSharingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7N50":
/*!********************************************************************************!*\
  !*** ./src/app/insurance-selection-page/insurance-selection-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: InsuranceSelectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceSelectionPageComponent", function() { return InsuranceSelectionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../small-spinner/small-spinner.component */ "4gew");








function InsuranceSelectionPageComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceSelectionPageComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceSelectionPageComponent_h4_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "insurance cost not included");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceSelectionPageComponent_h4_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "insurance cost included");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceSelectionPageComponent_button_83_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceSelectionPageComponent_button_83_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r4.insurance1 || ctx_r4.insurance2));
} }
function InsuranceSelectionPageComponent_app_small_spinner_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spinner", 58);
} }
class InsuranceSelectionPageComponent {
    constructor(dataSharingService, router, searchService) {
        this.dataSharingService = dataSharingService;
        this.router = router;
        this.searchService = searchService;
        this.expanded = false;
        this.insurance1 = false;
        this.insurance2 = false;
        this.insurancePrice1 = +this.dataSharingService.selectCarResponse.fullInsurancePricePrice; //fullInsurance
        this.insurancePrice2 = +this.dataSharingService.selectCarResponse.partialInsurancePrice; // partialInsurance
        this.choosenCar = this.dataSharingService.carSelected;
        this.totalPrice = this.choosenCar.dailyRentalPrice;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    selectInsurance() {
        if (this.insurance1) {
            this.totalPrice = this.choosenCar.dailyRentalPrice + this.insurancePrice1;
            this.dataSharingService.insurance = "Insurance 1";
            this.dataSharingService.insurancePrice = this.insurancePrice1;
            this.insuranceId = 0; //Full Insurance
        }
        else {
            this.totalPrice = this.choosenCar.dailyRentalPrice + this.insurancePrice2;
            this.dataSharingService.insurance = "Insurance 2";
            this.dataSharingService.insurancePrice = this.insurancePrice2;
            this.insuranceId = 1; //Partial Insurance
        }
        this.dataSharingService.totalPrice = this.totalPrice;
    }
    navigate() {
        let input = {
            insuranceId: this.insuranceId,
            processInstanceId: this.dataSharingService.processInstanceId
        };
        this.isLoading = true;
        this.searchService.postSelectInsurance(input).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                if (response.body != null) {
                    this.dataSharingService.insuranceSelectionResult = response.body;
                }
                this.router.navigateByUrl("bookingDetails");
            }
        });
    }
}
InsuranceSelectionPageComponent.ɵfac = function InsuranceSelectionPageComponent_Factory(t) { return new (t || InsuranceSelectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"])); };
InsuranceSelectionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceSelectionPageComponent, selectors: [["app-insurance-selection-page"]], decls: 94, vars: 25, consts: [[1, "topContainer"], [1, "arrowContainer", 3, "click"], [1, "material-icons"], [1, "topContainer1"], [1, "middleContainer"], [1, "middleContainer1"], [2, "margin-left", "20px"], [1, "middleContainer2"], ["name", "seatSvg", 1, "svgContainer"], ["heigth", "2vh", "width", "2vh", "x", "0px", "y", "0px", "viewBox", "0 0 240.235 240.235", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 240.235 240.235"], ["d", "M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436\n                \tc-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761\n                \tc-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69\n                \tc-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618\n                \tc2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981\n                \tc0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97\n                \tC217.214,15.205,215.407,10.016,211.744,6.089z"], [2, "margin-right", "20px"], ["name", "doorSvg", 1, "svgContainer"], ["version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "width", "2vh", "height", "2vh", 2, "enable-background", "new 0 0 512 512"], ["points", "75.501,60 75.501,144.998 330.526,145 206.357,60  "], ["d", "M496.497,195.004c0-4.922-2.415-9.531-6.462-12.333L230.039,2.667C227.53,0.931,224.552,0,221.501,0h-191   c-3.979,0-7.794,1.581-10.606,4.394C17.081,7.207,15.501,11.022,15.501,15l0.003,377h352.09   c28.341-30.721,68.912-49.999,113.905-50c3.979,0,7.794-1.581,10.606-4.394c2.813-2.813,4.394-6.628,4.394-10.607L496.497,195.004z    M108.501,281h-48c-8.284,0-15-6.716-15-15s6.716-15,15-15h48c8.284,0,15,6.716,15,15S116.785,281,108.501,281z M393.322,164.436   c-1.944,6.282-7.753,10.565-14.329,10.565l-318.492-0.003c-8.284,0-15-6.716-15-15V45c0-8.284,6.716-15,15-15H211   c3.024,0,5.978,0.914,8.473,2.623l167.994,115C392.893,151.337,395.267,158.153,393.322,164.436z"], ["d", "M15.504,422l0.001,75c0,8.284,6.716,15,15,15h280.996c8.284,0,15-6.716,15-15c0-27.19,7.046-52.762,19.395-75H15.504z"], ["name", "manualSvg", "class", "svgContainer", 4, "ngIf"], ["name", "automaticSvg", "class", "svgContainer", 4, "ngIf"], ["name", "airConditioner  Svg", 1, "svgContainer"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "2vh", "height", "2vh", "viewBox", "0 0 219.781 219.781", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 219.781 219.781"], ["d", "M202.314,154.591l-22.323-12.888l19.345-11.407c3.568-2.104,4.755-6.702,2.651-10.27c-2.104-3.567-6.701-4.754-10.27-2.651\n           l-26.648,15.713l-40.179-23.198l40.172-23.194l26.656,15.711c1.195,0.705,2.507,1.039,3.801,1.039c2.568,0,5.069-1.32,6.468-3.693\n           c2.103-3.568,0.915-8.166-2.653-10.27L179.986,78.08l22.328-12.891c3.587-2.071,4.816-6.658,2.745-10.245\n           c-2.071-3.588-6.658-4.817-10.245-2.745l-22.323,12.889l-0.203-22.461c-0.037-4.142-3.435-7.489-7.567-7.432\n           c-4.142,0.037-7.47,3.425-7.432,7.567l0.279,30.941L117.391,96.9V50.51l26.937-15.224c3.606-2.038,4.877-6.613,2.839-10.22\n           c-2.038-3.606-6.614-4.878-10.22-2.839L117.391,33.28V7.5c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v25.78\n           L82.835,22.228c-3.608-2.039-8.181-0.768-10.22,2.839c-2.038,3.606-0.767,8.182,2.839,10.22l26.936,15.224V96.9L62.213,73.703\n           l0.279-30.941c0.038-4.142-3.29-7.53-7.432-7.567c-0.023,0-0.045,0-0.069,0c-4.11,0-7.461,3.313-7.498,7.433L47.29,65.088\n           L24.967,52.199c-3.587-2.072-8.174-0.842-10.245,2.745c-2.071,3.587-0.842,8.174,2.745,10.245L39.794,78.08L20.443,89.485\n           c-3.568,2.103-4.756,6.701-2.653,10.27c1.399,2.373,3.9,3.693,6.469,3.693c1.294,0,2.605-0.335,3.801-1.039l26.659-15.711\n           l40.173,23.194l-40.18,23.198L28.06,117.374c-3.566-2.103-8.166-0.917-10.27,2.651c-2.104,3.568-0.917,8.166,2.651,10.269\n           l19.348,11.408l-22.323,12.888c-3.587,2.071-4.816,6.658-2.745,10.245c1.389,2.406,3.91,3.751,6.502,3.751\n           c1.272,0,2.562-0.324,3.743-1.006l22.323-12.889l0.203,22.462c0.037,4.119,3.388,7.433,7.498,7.433c0.023,0,0.046,0,0.069-0.001\n           c4.142-0.037,7.47-3.425,7.432-7.567l-0.279-30.942l40.178-23.197v46.391l-26.936,15.224c-3.606,2.038-4.877,6.613-2.839,10.22\n           c1.379,2.44,3.92,3.811,6.536,3.811c1.25,0,2.518-0.313,3.684-0.972l19.556-11.052v25.78c0,4.142,3.358,7.5,7.5,7.5\n           c4.142,0,7.5-3.358,7.5-7.5v-25.78l19.556,11.052c1.166,0.659,2.433,0.972,3.684,0.972c2.616,0,5.157-1.371,6.536-3.811\n           c2.038-3.606,0.767-8.182-2.839-10.22l-26.937-15.224V122.88l40.177,23.196l-0.286,30.941c-0.039,4.142,3.288,7.531,7.43,7.569\n           c0.024,0.001,0.047,0.001,0.071,0.001c4.109,0,7.46-3.313,7.498-7.431l0.208-22.465l22.326,12.89\n           c1.181,0.682,2.471,1.006,3.743,1.006c2.592,0,5.113-1.346,6.502-3.751C207.131,161.249,205.902,156.662,202.314,154.591z"], [1, "bottomContainer"], [1, "bottomContainer1"], [1, "textContent"], [1, "insuranceContainer"], ["name", "insurance1", 1, "insuranceContent", 3, "click"], [1, "header"], [1, "price"], ["name", "insurance2", 1, "insuranceContent", 3, "click"], [1, "sumContent"], [2, "font-size", "5vh", "font-weight", "500", "padding-bottom", "0", "margin-bottom", "0"], ["style", "padding-top: 0; margin-top: 0;font-weight:400", 4, "ngIf"], ["class", "detailsButton", "mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["style", "transform: scale(0.2); margin: 0;", 4, "ngIf"], [1, "impressumContainer"], [1, "cont"], [1, "cont", "impressumCont"], [1, "cont", "privCont"], ["name", "manualSvg", 1, "svgContainer"], ["id", "Layer_1", "enable-background", "new 0 0 512 512", "height", "2vh", "viewBox", "0 0 512 512", "width", "2vh", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m278 381.051v-105.051h127c33.084 0 60-26.916 60-60v-85.051c27.205-8.527 47-33.969 47-63.949 0-36.944-30.056-67-67-67s-67 30.056-67 67c0 29.98 19.795 55.423 47 63.949v85.051c0 11.028-8.972 20-20 20h-127v-105.051c27.205-8.527 47-33.969 47-63.949 0-36.944-30.056-67-67-67s-67 30.056-67 67c0 29.98 19.795 55.423 47 63.949v105.051h-131c-11.028 0-20-8.972-20-20v-85.051c27.205-8.527 47-33.969 47-63.949 0-36.944-30.056-67-67-67s-67 30.056-67 67c0 29.98 19.795 55.423 47 63.949v85.051c0 15.355 5.805 29.376 15.327 40-9.522 10.624-15.327 24.645-15.327 40v85.051c-27.205 8.526-47 33.969-47 63.949 0 36.944 30.056 67 67 67s67-30.056 67-67c0-29.98-19.795-55.423-47-63.949v-85.051c0-11.028 8.972-20 20-20h131v105.051c-27.205 8.527-47 33.969-47 63.949 0 36.944 30.056 67 67 67s67-30.056 67-67c0-29.98-19.795-55.423-47-63.949zm167-341.051c14.888 0 27 12.112 27 27s-12.112 27-27 27-27-12.112-27-27 12.112-27 27-27zm-187 0c14.888 0 27 12.112 27 27s-12.112 27-27 27-27-12.112-27-27 12.112-27 27-27zm-191 0c14.888 0 27 12.112 27 27s-12.112 27-27 27-27-12.112-27-27 12.112-27 27-27zm0 432c-14.888 0-27-12.112-27-27s12.112-27 27-27 27 12.112 27 27-12.112 27-27 27zm191 0c-14.888 0-27-12.112-27-27s12.112-27 27-27 27 12.112 27 27-12.112 27-27 27zm254-76.5c0-30.603-24.897-55.5-55.5-55.5h-66.5v172h40v-61h5.324l31.065 61h44.889l-33.274-65.337c19.954-8.419 33.996-28.181 33.996-51.163zm-82-15.5h26.5c8.547 0 15.5 6.953 15.5 15.5s-6.953 15.5-15.5 15.5h-26.5z"], ["name", "automaticSvg", 1, "svgContainer"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 492 492", 0, "xml", "space", "preserve", "width", "2vh", "height", "2vh", 2, "enable-background", "new 0 0 492 492"], ["d", "M314.585,15c0-8.28-6.72-15-15-15h-71.81c-8.28,0-15,6.72-15,15v16.27h101.81V15z"], ["d", "M212.775,477c0,8.28,6.72,15,15,15h71.81c8.28,0,15-6.72,15-15V168.38h-101.81V477z M248.675,211.45c0-8.29,6.72-15,15-15   c8.29,0,15,6.71,15,15v231.51c0,8.28-6.71,15-15,15c-8.28,0-15-6.72-15-15V211.45z"], ["d", "M407.675,77.12h-19v45.41h19c9.8,0,17.74-7.95,17.74-17.75v-9.91C425.415,85.07,417.475,77.12,407.675,77.12z"], ["d", "M183.685,138.38h95.11V61.27h-95.11c-8.284,0-15,6.716-15,15v47.11C168.685,131.664,175.401,138.38,183.685,138.38z"], ["d", "M351.495,61.27c-29.124,0-25.619,0-42.7,0v77.11c27.933,0,25.023,0,42.7,0c3.96,0,7.18-3.21,7.18-7.17   c0-7.302,0-56.438,0-62.77C358.675,64.48,355.455,61.27,351.495,61.27z"], ["d", "M107.567,54.167H80.085c-7.456,0-13.5,6.044-13.5,13.5c0,6.126,0,60.007,0,66c0,7.456,6.044,13.5,13.5,13.5   s13.5-6.044,13.5-13.5v-12.902h13.981c18.361,0,33.299-14.938,33.299-33.299S125.928,54.167,107.567,54.167z M107.567,93.765   H93.585V81.167h13.981c3.474,0,6.299,2.825,6.299,6.299S111.04,93.765,107.567,93.765z"], ["d", "M127.365,269.678c-7.456,0-13.5,6.044-13.5,13.5v23.974L91.06,275.316c-7.612-10.629-24.475-5.234-24.475,7.861v66.001   c0,7.456,6.044,13.5,13.5,13.5s13.5-6.044,13.5-13.5v-23.974l22.806,31.835c7.617,10.634,24.475,5.263,24.475-7.861v-66.001   C140.865,275.722,134.821,269.678,127.365,269.678z"], ["d", "M107.191,377.434H80.085c-7.456,0-13.5,6.044-13.5,13.5v66c0,7.456,6.044,13.5,13.5,13.5h27.105   c18.568,0,33.675-15.106,33.675-33.675v-25.65C140.865,392.54,125.759,377.434,107.191,377.434z M113.865,436.759   c0,3.681-2.994,6.675-6.675,6.675H93.585v-39h13.605c3.681,0,6.675,2.994,6.675,6.675V436.759z"], ["d", "M107.567,161.922H80.085c-7.456,0-13.5,6.044-13.5,13.5c0,6.125,0,60.008,0,66.001c0,7.456,6.044,13.5,13.5,13.5   s13.5-6.044,13.5-13.5v-12.902h4.108l19.615,21.907c4.974,5.555,13.508,6.026,19.063,1.053c5.555-4.974,6.026-13.508,1.053-19.063   l-9.637-10.764c7.944-6.091,13.08-15.671,13.08-26.433C140.865,176.86,125.928,161.922,107.567,161.922z M107.567,201.521H93.585   v-12.599h13.981c3.474,0,6.299,2.826,6.299,6.3S111.04,201.521,107.567,201.521z"], ["d", "M172.068,226.521h9.5c6.352,0,11.5-5.148,11.5-11.5s-5.148-11.5-11.5-11.5h-9.5c-6.352,0-11.5,5.148-11.5,11.5   S165.717,226.521,172.068,226.521z"], ["d", "M181.568,329.167c6.352,0,11.5-5.148,11.5-11.5s-5.148-11.5-11.5-11.5h-9.5c-6.352,0-11.5,5.148-11.5,11.5   s5.148,11.5,11.5,11.5H181.568z"], ["d", "M184.98,411.095h-9.5c-6.352,0-11.5,5.148-11.5,11.5s5.148,11.5,11.5,11.5h9.5c6.352,0,11.5-5.148,11.5-11.5   S191.331,411.095,184.98,411.095z"], [2, "padding-top", "0", "margin-top", "0", "font-weight", "400"], ["mat-button", "", 1, "detailsButton", 3, "disabled", "click"], [2, "transform", "scale(0.2)", "margin", "0"]], template: function InsuranceSelectionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceSelectionPageComponent_Template_div_click_1_listener() { return ctx.expanded = !ctx.expanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " expand_more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5 Seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "polygon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5 Doors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InsuranceSelectionPageComponent_span_24_Template, 3, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InsuranceSelectionPageComponent_span_25_Template, 15, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Air Conditioner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Choose your desired insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceSelectionPageComponent_Template_div_click_40_listener() { ctx.insurance1 = true; ctx.insurance2 = false; return ctx.selectInsurance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Insurance 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Full Coverage Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Carefree Driving ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Full Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceSelectionPageComponent_Template_div_click_58_listener() { ctx.insurance1 = false; ctx.insurance2 = true; return ctx.selectInsurance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Insurance 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Partial Coverage Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Basic Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " check_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Full Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, InsuranceSelectionPageComponent_h4_81_Template, 2, 0, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, InsuranceSelectionPageComponent_h4_82_Template, 2, 0, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, InsuranceSelectionPageComponent_button_83_Template, 2, 1, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, InsuranceSelectionPageComponent_app_small_spinner_84_Template, 1, 0, "app-small-spinner", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.expanded ? "70%" : "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.expanded ? "rotate(180deg)" : "rotate(0deg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.choosenCar.make, " ", ctx.choosenCar.model, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, ctx.choosenCar.carClass), " Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.choosenCar.transmissionType == "manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.choosenCar.transmissionType == "manual"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 23, ctx.choosenCar.transmissionType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx.insurance1 ? "var(--green)" : "#111b19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.insurancePrice1, " \u20AC/Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx.insurance2 ? "var(--green)" : "#111b19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.insurancePrice2, " \u20AC/Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalPrice, "\u20AC/Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.insurance1 || ctx.insurance2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.insurance1 || ctx.insurance2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SmallSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".topContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  transition-duration: 0.8s;\n  position: relative;\n}\n\n.topContainer1[_ngcontent-%COMP%] {\n  width: 90%;\n  background-image: url('BMW1er.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.arrowContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #d6d6d6;\n  opacity: 0.8;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  font-size: 40px;\n  font-weight: 500;\n  transition-duration: 0.8s;\n}\n\n.middleContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  height: 7%;\n}\n\n.middleContainer1[_ngcontent-%COMP%], .middleContainer2[_ngcontent-%COMP%] {\n  width: 45%;\n  background-color: #2b2b2b;\n  color: white;\n  font-size: 3vh;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n\n.middleContainer1.middleContainer2[_ngcontent-%COMP%], .middleContainer2.middleContainer2[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  font-size: 2vh;\n}\n\n.svgContainer[_ngcontent-%COMP%] {\n  display: flex;\n  fill: white;\n  margin-right: 2px;\n}\n\n.bottomContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 53%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottomContainer1[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.textContent[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 70%;\n}\n\n.sumContent[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 30%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 4.5vh;\n  color: #111b19;\n  font-weight: 500;\n}\n\n.insuranceContainer[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.insuranceContent[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  border: solid #111b19 3px;\n  border-radius: 10px;\n  min-width: 30%;\n  height: 90%;\n  margin-right: 40px;\n  background-color: #f7f7fb;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\n.insuranceContent[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  cursor: pointer;\n}\n\n.insuranceContent[_ngcontent-%COMP%]:hover   .header[_ngcontent-%COMP%] {\n  color: #eab55a;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\nul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-left: 15px;\n}\n\nli[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 15px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 4vh;\n  font-weight: 400;\n  text-align: center;\n}\n\n.impressumContainer[_ngcontent-%COMP%] {\n  height: 5%;\n  width: 100%;\n  background-color: #2b2b2b;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cont[_ngcontent-%COMP%] {\n  width: 33%;\n  font-size: 2vh;\n  color: white;\n}\n\n.impressumCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.detailsButton[_ngcontent-%COMP%] {\n  background-color: #eab55a;\n  width: 200px;\n  height: 50px;\n  color: white;\n  font-size: 24px;\n  border-radius: 20px;\n  transition-duration: 0.2s !important;\n  transition-timing-function: linear !important;\n}\n\n  .mat-button.mat-button-disabled.mat-button-disabled {\n  color: white;\n  background-color: var(--grey);\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luc3VyYW5jZS1zZWxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQVNKOztBQVJJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQVVSOztBQVJJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFVUjs7QUFQQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUFWQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQWFKOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0FBY0o7O0FBWEE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBY0oiLCJmaWxlIjoiaW5zdXJhbmNlLXNlbGVjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvcENvbnRhaW5lcjEge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9CTVcxZXIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cblxuLmFycm93Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6OTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgY29sb3I6IzJiMmIyYjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xufVxuLm1pZGRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTsgXG4gICAgaGVpZ2h0OjclO1xufVxuLm1pZGRsZUNvbnRhaW5lcjEsIC5taWRkbGVDb250YWluZXIyIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYubWlkZGxlQ29udGFpbmVyMiB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIH1cbn1cbi5zdmdDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uYm90dG9tQ29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG59XG5cbi5ib3R0b21Db250YWluZXIxIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4udGV4dENvbnRlbnQge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogNzAlO1xufVxuLnN1bUNvbnRlbnQge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogMzAlO1xufVxuaDEge1xuICAgIGZvbnQtc2l6ZTogNC41dmg7XG4gICAgY29sb3I6ICAjMTExYjE5O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW5zdXJhbmNlQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaW5zdXJhbmNlQ29udGVudCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBib3JkZXI6IHNvbGlkICMxMTFiMTkgM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZmI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgJjpob3ZlciAuaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNlYWI1NWE7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxufVxudWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5saSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLy9JbXByZXNzdW1cbi5pbXByZXNzdW1Db250YWluZXIge1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pbXByZXNzdW0ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnQge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uaW1wcmVzc3VtQ29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByaXZDb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGV0YWlsc0J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjU1YTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceSelectionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-insurance-selection-page',
                templateUrl: './insurance-selection-page.component.html',
                styleUrls: ['./insurance-selection-page.component.scss']
            }]
    }], function () { return [{ type: _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B3kp":
/*!**********************************************************!*\
  !*** ./src/app/test-rest-api/test-rest-api.component.ts ***!
  \**********************************************************/
/*! exports provided: TestRestApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRestApiComponent", function() { return TestRestApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/enums/carClass */ "DC3P");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function TestRestApiComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carClass_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", carClass_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carClass_r2);
} }
class TestRestApiComponent {
    constructor(restSearchService) {
        this.restSearchService = restSearchService;
        this.carClasses = Object.values(src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_1__["CarClass"]);
    }
    ngOnInit() {
        // for ( let carClass in CarClass) {
        //   console.log( carClass);
        // }
    }
    postSearchInput(searchInput) {
        this.restSearchService.postSearch(searchInput).subscribe(data => {
            console.log(data);
        });
    }
}
TestRestApiComponent.ɵfac = function TestRestApiComponent_Factory(t) { return new (t || TestRestApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
TestRestApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestRestApiComponent, selectors: [["app-test-rest-api"]], decls: 75, vars: 4, consts: [[1, "pageWidth", "navContainer"], ["src", "assets/img/LogoOhne.png", "alt", "Bvis", 1, "imageOhne"], [1, "cName"], [1, "navRestContainer"], [1, "iconsTop", "material-icons"], ["routerLink", "/login"], [1, "pageWidth", "searchContainer"], [1, "searchContainer2"], ["id", "searchForm", "ngForm", "", "name", "searchForm", 1, "searchContainerHeader"], ["searchForm", "ngForm"], ["id", "inputWidth"], ["id", "label"], [1, "material-icons"], ["matInput", "", "type", "text", "name", "site", 3, "ngModel", "ngModelChange"], ["name", "carClass", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "min", "0", "name", "dailyRentalPrice", 3, "ngModel", "ngModelChange"], [1, "searchContainerBottom"], ["mat-button", "", 1, "searchButton", 3, "click"], [1, "checkbox"], [1, "pageWidth", "advantagesContainer"], [1, "advContainer"], [1, "advText"], [1, "contentContainer"], [1, "contentCont"], [1, "contentContTop"], [1, "greyCircle"], ["src", "assets/img/customer-review.png", "alt", "Customer", 1, "customer"], [1, "textContainer"], ["src", "assets/img/gradient.png", "alt", "Gradient", 1, "gradient"], ["src", "assets/img/car-insurance.png", "alt", "Car Insurance", 1, "carInsurance"], [1, "pageWidth", "impressumContainer"], [1, "cont"], [1, "cont", "impressumCont"], [1, "cont", "privCont"], [2, "margin-right", "20px"], [3, "value"]], template: function TestRestApiComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BVIS - Mobility Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " directions_car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " location_on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Location area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestRestApiComponent_Template_input_ngModelChange_19_listener($event) { return ctx.inputLoc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestRestApiComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.carClass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TestRestApiComponent_mat_option_24_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestRestApiComponent_Template_input_ngModelChange_28_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestRestApiComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.postSearchInput(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Driver older than 23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Advantages of BVIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Customer oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " The entire renting process is designed to maximize customer satisfaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "High quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " All presented cars are in best conditions and fulfill our high quality standards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Car insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " No longer difficulties and risks in case of damage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputLoc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.navContainer[_ngcontent-%COMP%] {\n  height: 8%;\n  background-color: #343F4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageOhne[_ngcontent-%COMP%] {\n  height: 37px;\n  margin-top: 2px;\n  margin-left: 5px;\n  background-size: cover;\n  transform: scale(1);\n}\n\n.cName[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20%;\n  margin-left: 20px;\n  font-size: 22px;\n  font-family: \"Segoe UI\";\n  color: var(--creme);\n  display: flex;\n  align-items: center;\n}\n\n.navRestContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.iconsTop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n  transform: scale(1.5);\n  color: var(--creme);\n}\n\n.iconsTop[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.8);\n}\n\n.searchContainer[_ngcontent-%COMP%] {\n  height: 35%;\n  background: linear-gradient(0deg, #184a73 75%, #343f4d 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.searchContainer2[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 80%;\n  background-color: white;\n  border-radius: 30px;\n}\n\n.searchContainerHeader[_ngcontent-%COMP%] {\n  height: 60%;\n  padding: 0px 45px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#inputWidth[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n#label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\n.searchContainerBottom[_ngcontent-%COMP%] {\n  height: 40%;\n  position: relative;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-left: 45px;\n  color: var(--blue);\n}\n\n  .mat-checkbox-checked .mat-checkbox-background,   .mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: var(--lightBlue) !important;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 1;\n  background-color: var(--green);\n  color: white;\n  font-family: \"Roboto\" sans-serif;\n  font-size: 24px;\n  width: 200px;\n  height: 50px;\n  border-radius: 20px;\n}\n\n.advantagesContainer[_ngcontent-%COMP%] {\n  height: 52%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.advContainer[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.advText[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  font-family: \"Roboto\" sans-serif;\n  color: var(--lightBlue);\n}\n\n.contentContainer[_ngcontent-%COMP%] {\n  height: 85%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.contentCont[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 33%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.contentContTop[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.greyCircle[_ngcontent-%COMP%] {\n  height: 115px;\n  width: 115px;\n  background-color: var(--creme);\n  border-radius: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.customer[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background: transparent;\n  margin-left: 30px;\n  width: 60%;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background: transparent;\n  width: 50%;\n}\n\n.carInsurance[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background: transparent;\n  width: 50%;\n}\n\n.textCont[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.textContainer[_ngcontent-%COMP%] {\n  width: 70%;\n  align-items: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--lightBlue);\n  font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--grey);\n  line-height: 22px;\n}\n\n.impressumContainer[_ngcontent-%COMP%] {\n  height: 5%;\n  background-color: var(--lightBlue);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cont[_ngcontent-%COMP%] {\n  width: 33%;\n  color: var(--creme);\n}\n\n.impressumCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QtcmVzdC1hcGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUlBO0VBQ0ksV0FBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBOztFQUVFLDZDQUFBO0FBRUY7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUVJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBRUksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBRUksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBT0oiLCJmaWxlIjoidGVzdC1yZXN0LWFwaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vL05hdmlnYXRvclxuLm5hdkNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OjglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNGNEQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VPaG5le1xuICAgIGhlaWdodDozN3B4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvTG9nb09obmUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5jTmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG4gICAgY29sb3I6IHZhcigtLWNyZW1lKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZSZXN0Q29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmljb25zVG9wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIGNvbG9yOiB2YXIoLS1jcmVtZSk7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuICAgIH1cbn1cblxuLy9TZWFyY2hcbi5zZWFyY2hDb250YWluZXIge1xuICAgIGhlaWdodDogMzUlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI0LDc0LDExNSwxKSA3NSUsIHJnYmEoNTIsNjMsNzcsMSkgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaENvbnRhaW5lcjIge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLnNlYXJjaENvbnRhaW5lckhlYWRlciB7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgcGFkZGluZzogMHB4IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2lucHV0V2lkdGgge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuI2xhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWFyY2hDb250YWluZXJCb3R0b20ge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGVja2JveCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpICA7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCbHVlKSAhaW1wb3J0YW50O1xufVxuLnNlYXJjaEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbn1cbi8vQWR2YW50YWdlc1xuLmFkdmFudGFnZXNDb250YWluZXIge1xuICAgIGhlaWdodDogNTIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hZHZDb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5hZHZUZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGhlaWdodDogMTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbn1cblxuLmNvbnRlbnRDb250YWluZXIge1xuICAgIGhlaWdodDogODUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRDb250IHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMzMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnRDb250VG9wIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICBcbn1cbi5ncmV5Q2lyY2xlIHtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVtZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmN1c3RvbWVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL2N1c3RvbWVyLXJldmlldy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHdpZHRoOiA2MCU7XG59XG4uZ3JhZGllbnQge1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvZ3JhZGllbnQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogNTAlO1xufVxuLmNhckluc3VyYW5jZSB7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZy9jYXItaW5zdXJhbmNlLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi50ZXh0Q29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnRleHRDb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLy9JbXByZXNzdW1cbi5pbXByZXNzdW1Db250YWluZXIge1xuICAgIGhlaWdodDogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250IHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGNvbG9yOiB2YXIoLS1jcmVtZSk7XG59XG4uaW1wcmVzc3VtQ29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByaXZDb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestRestApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-rest-api',
                templateUrl: './test-rest-api.component.html',
                styleUrls: ['./test-rest-api.component.scss']
            }]
    }], function () { return [{ type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 4, vars: 0, consts: [[1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  height: 40vh;\n  margin: 100px auto 0;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: 40px;\n  max-height: 40px;\n  width: 7vh;\n  height: 7vh;\n  background-color: #333;\n  margin-right: 15px;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLHdEQUFBO0FBQ0Y7O0FBRUE7RUFFRSx1QkFBQTtBQUNGOztBQUVBO0VBRUUsdUJBQUE7QUFDRjs7QUFPQTtFQUNFO0lBRUUsbUJBQUE7RUFJRjtFQUhFO0lBRUEsbUJBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xufVxuICBcbi5zcGlubmVyID4gZGl2IHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogN3ZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cbiAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7IFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9IDQwJSB7IFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgfVxufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Cqan":
/*!***********************************************!*\
  !*** ./src/assets/services/search.service.ts ***!
  \***********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class SearchService {
    constructor(http, datepipe) {
        this.http = http;
        this.datepipe = datepipe;
        //private url= "http://localhost:8080/"
        this.url = "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/";
    }
    //carselection
    postSearch(searchInfo) {
        const body = new FormData();
        body.append("site", searchInfo.site);
        body.append("startDate", searchInfo.from.format("YYYY-MM-DD"));
        body.append("endDate", searchInfo.to.format("YYYY-MM-DD"));
        body.append("numberOfDrivers", searchInfo.numberOfDrivers.toString());
        body.append("olderThan23", searchInfo.older23.toString());
        body.append("numberOfCars", searchInfo.numberOfCars.toString());
        return this.http.post(this.url + "carselection", body);
    }
    //selectCar
    postSelectCar(selectCarInput) {
        const body = new FormData();
        body.append("carClass", selectCarInput.carClass.valueOf());
        body.append("processInstanceId", selectCarInput.processInstanceId);
        return this.http.post(this.url + "selectcar", body);
    }
    //selectInsurance
    postSelectInsurance(selectInsuranceInput) {
        const body = new FormData();
        body.append("insuranceId", selectInsuranceInput.insuranceId.toString());
        body.append("processInstanceId", selectInsuranceInput.processInstanceId);
        return this.http.post(this.url + "selectinsurance", body, { observe: "response" });
    }
    //acceptAgreement
    postAcceptAgreement(acceptAgreementInput) {
        const body = new FormData();
        body.append("acceptAgreement", acceptAgreementInput.acceptAgreement.toString());
        body.append("processInstanceId", acceptAgreementInput.processInstanceId);
        acceptAgreementInput.firstName ? body.append("firstName", acceptAgreementInput.firstName) : "";
        acceptAgreementInput.lastName ? body.append("lastName", acceptAgreementInput.lastName) : "";
        acceptAgreementInput.email ? body.append("email", acceptAgreementInput.email) : "";
        acceptAgreementInput.phoneNumber ? body.append("phoneNumber", acceptAgreementInput.phoneNumber) : "";
        acceptAgreementInput.street ? body.append("street", acceptAgreementInput.street) : "";
        acceptAgreementInput.zipCode ? body.append("zipCode", acceptAgreementInput.zipCode) : "";
        acceptAgreementInput.city ? body.append("city", acceptAgreementInput.city) : "";
        acceptAgreementInput.country ? body.append("country", acceptAgreementInput.country) : "";
        acceptAgreementInput.birthDate ? body.append("birthDate", acceptAgreementInput.birthDate.format("YYYY-MM-DD")) : "";
        acceptAgreementInput.cardHolder ? body.append("cardHolder", acceptAgreementInput.cardHolder) : "";
        acceptAgreementInput.cardNumber ? body.append("cardNumber", acceptAgreementInput.cardNumber.toString()) : "";
        acceptAgreementInput.expiryMonth ? body.append("expiryMonth", acceptAgreementInput.expiryMonth.toString()) : "";
        acceptAgreementInput.expiryYear ? body.append("expiryYear", acceptAgreementInput.expiryYear.toString()) : "";
        acceptAgreementInput.cvv ? body.append("cvv", acceptAgreementInput.cvv.toString()) : "";
        return this.http.post(this.url + "acceptagreement", body, { observe: "response" });
    }
    // incident Report
    postIncidentReport(incidentReportInput) {
        const body = new FormData();
        body.append("incidentDate", incidentReportInput.incidentDate.format("YYYY-MM-DD"));
        body.append("licensePlate", incidentReportInput.licensePlate);
        body.append("driverFirstName", incidentReportInput.driverFirstName);
        body.append("driverLastName", incidentReportInput.driverLastName);
        body.append("driverAge", incidentReportInput.driverAge.toString());
        body.append("driverLicense", incidentReportInput.driverLicense);
        body.append("driverCountry", incidentReportInput.driverCountry);
        body.append("driverCity", incidentReportInput.driverCity);
        body.append("driverZipCode", incidentReportInput.driverZipCode);
        body.append("driverStreet", incidentReportInput.driverStreet);
        body.append("driverPhoneNumber", incidentReportInput.driverPhoneNumber);
        body.append("driverEmail", incidentReportInput.driverEmail);
        body.append("incidentSummary", incidentReportInput.incidentSummary);
        body.append("towingNeeded", incidentReportInput.towingNeeded.toString());
        body.append("accidentCity", incidentReportInput.accidentCity);
        body.append("accidentZipCode", incidentReportInput.accidentZipCode);
        body.append("accidentAddress", incidentReportInput.accidentAddress);
        return this.http.post(this.url + "reportincident", body, { observe: "response" });
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "DC3P":
/*!**************************************!*\
  !*** ./src/assets/enums/carClass.ts ***!
  \**************************************/
/*! exports provided: CarClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarClass", function() { return CarClass; });
var CarClass;
(function (CarClass) {
    CarClass["SMALL"] = "small";
    CarClass["MEDIUM"] = "medium";
    CarClass["LARGE"] = "large";
    CarClass["LUXURY"] = "luxury";
    CarClass["MINIVAN"] = "minivan";
    CarClass["VAN"] = "van";
    CarClass["BUS"] = "bus";
    CarClass["SMALL_TRANSPORTER"] = "small_transporter";
    CarClass["TRANSPORTER"] = "transporter";
    CarClass["SPORTS"] = "sports";
})(CarClass || (CarClass = {}));


/***/ }),

/***/ "EEyO":
/*!**********************************************!*\
  !*** ./src/assets/services/login.service.ts ***!
  \**********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
        //private url= "http://localhost:8080/"
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', accept: 'text/plain' }),
            responseType: 'text'
        };
        this.url = "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/";
    }
    login(credentials) {
        return this.http.post(this.url + "login", credentials, { observe: "response", responseType: "text" });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "F3wk":
/*!********************************************************************************************!*\
  !*** ./src/app/car-accident-notification-page/car-accident-notification-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CarAccidentNotificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAccidentNotificationPageComponent", function() { return CarAccidentNotificationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../small-spinner/small-spinner.component */ "4gew");














function CarAccidentNotificationPageComponent_button_112_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarAccidentNotificationPageComponent_button_112_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx_r4.incidentReport(_r0.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarAccidentNotificationPageComponent_app_small_spinner_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spinner");
} }
class CarAccidentNotificationPageComponent {
    constructor(router, searchService) {
        this.router = router;
        this.searchService = searchService;
        this.towingNeeded = false;
        this.maxFromDate = new Date();
        this.isLoading = false;
        this.towingNeeded = false;
    }
    ngOnInit() {
    }
    navigateHomePage() {
        this.router.navigateByUrl("");
    }
    incidentReport(input) {
        this.isLoading = true;
        this.searchService.postIncidentReport(input).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.isLoading = false;
                this.router.navigateByUrl("");
            }
        });
    }
}
CarAccidentNotificationPageComponent.ɵfac = function CarAccidentNotificationPageComponent_Factory(t) { return new (t || CarAccidentNotificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
CarAccidentNotificationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarAccidentNotificationPageComponent, selectors: [["app-car-accident-notification-page"]], decls: 123, vars: 22, consts: [[1, "pageWidth", "navContainer"], [1, "cName"], [1, "navRestContainer"], [1, "iconsTop", "material-icons", 3, "click"], [1, "iconsTop", "material-icons"], ["routerLink", "/login"], [1, "pageWidth", "middleContainer"], ["ngForm", "", "name", "incidentReportForm", 1, "middleContentContainer"], ["incidentReportForm", "ngForm"], [1, "middleContentContainer2"], [1, "middleContentContainer2_all"], [1, "middleContentContainer2_left"], [1, "besides"], ["id", "inputWidth"], ["id", "label"], ["name", "driverFirstName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverLastName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverEmail", "matInput", "", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverPhoneNumber", "matInput", "", "type", "tel", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverStreet", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [2, "width", "40%", "margin-right", "10%"], ["name", "driverZipCode", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [2, "width", "50%"], ["name", "driverCity", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverLicense", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "licensePlate", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverCountry", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "Germany"], ["value", "England"], ["value", "France"], [1, "birthDay"], ["name", "driverAge", "matInput", "", "type", "number", "required", "", "min", "18", 3, "ngModel", "ngModelChange"], ["name", "accidentCity", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "accidentZipCode", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "accidentAddress", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [2, "width", "15%", "font-size", "20px"], ["matInput", "", "name", "incidentDate", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], [2, "font-size", "16px", "margin-top", "10px"], ["name", "descriptionOfIncident", "rows", "10", 2, "margin-top", "5px", "width", "100%", 3, "ngModel", "ngModelChange"], [1, "besides", 2, "margin", "20px 0px"], ["name", "towingNeeded", 1, "checkbox", 2, "margin", "0px 15px", 3, "ngModel", "ngModelChange"], [1, "buttonContainer"], ["class", "detailsButton", "mat-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "impressumContainer"], [1, "cont"], [1, "cont", "impressumCont"], [1, "cont", "privCont"], [2, "margin-right", "20px"], ["mat-button", "", 1, "detailsButton", 3, "click"]], template: function CarAccidentNotificationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BVIS - Mobility Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarAccidentNotificationPageComponent_Template_span_click_4_listener() { return ctx.navigateHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1. Personal Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_22_listener($event) { return ctx.driverFirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.driverLastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_31_listener($event) { return ctx.driverEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_35_listener($event) { return ctx.driverPhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_40_listener($event) { return ctx.driverStreet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Postal Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_45_listener($event) { return ctx.driverZipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_49_listener($event) { return ctx.driverCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Driver License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_54_listener($event) { return ctx.driverLicense = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "License Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_58_listener($event) { return ctx.licensePlate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_mat_select_ngModelChange_63_listener($event) { return ctx.driverCountry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "England");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Driver Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_77_listener($event) { return ctx.driverAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2. Accident Scene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_88_listener($event) { return ctx.accidentCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Postal Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_92_listener($event) { return ctx.accidentZipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_96_listener($event) { return ctx.accidentAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Incident Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_input_ngModelChange_101_listener($event) { return ctx.incidentDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-datepicker-toggle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "mat-datepicker", null, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Description of Incident: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_textarea_ngModelChange_107_listener($event) { return ctx.incidentSummary = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Towing Needed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-checkbox", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarAccidentNotificationPageComponent_Template_mat_checkbox_ngModelChange_110_listener($event) { return ctx.towingNeeded = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, CarAccidentNotificationPageComponent_button_112_Template, 2, 0, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, CarAccidentNotificationPageComponent_app_small_spinner_113_Template, 1, 0, "app-small-spinner", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverFirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverLastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverStreet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverZipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverLicense);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.licensePlate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.driverAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accidentCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accidentZipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accidentAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("max", ctx.maxFromDate)("ngModel", ctx.incidentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.incidentSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.towingNeeded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SmallSpinnerComponent"]], styles: [".pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.navContainer[_ngcontent-%COMP%] {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #2b2b2b;\n}\n\n.cName[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-left: 20px;\n  font-size: 3vh;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.navRestContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.iconsTop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n  transform: scale(1.5);\n  color: white;\n}\n\n.iconsTop[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.8);\n}\n\n.middleContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.middleContentContainer[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.middleContentContainer1[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 70px;\n}\n\n.middleContentContainer1_all[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 100%;\n  display: flex;\n}\n\n.middleContentContainer1_1[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.middleContentContainer1_1_IMG[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 40%;\n  background-image: url('mediumCar.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-right: 40px;\n}\n\n.middleContentContainer1_1_TEXT[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n}\n\n.middleContentContainer1_2[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n}\n\n.middleContentContainer1_2_TEXT[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.middleContentContainer2[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.middleContentContainer2_all[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 100%;\n  display: flex;\n}\n\n.middleContentContainer2_left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.besides[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n#inputWidth[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 42.5%;\n  margin-right: 5%;\n}\n\n  .mat-form-field-underline .mat-form-field-ripple {\n  \n  background-color: #111b19 !important;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #111b19 !important;\n}\n\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #111b19 !important;\n}\n\n  .mat-select-panel {\n  margin-top: 27px !important;\n  margin-left: 15px !important;\n}\n\n  .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #111b19;\n}\n\n  .mat-calendar-body-selected {\n  background-color: #111b19 !important;\n}\n\n  .mat-datepicker-toggle-active {\n  color: #111b19;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  \n  caret-color: #111b19 !important;\n}\n\n  .mat-select-arrow-selected {\n  color: #111b19;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #111b19 !important;\n  \n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #111b19 !important;\n  \n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  color: #2b2b2b;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.birthDay[_ngcontent-%COMP%], .creditCard[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: #2b2b2b;\n}\n\n.birthDay.creditCard[_ngcontent-%COMP%], .creditCard.creditCard[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nhr[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  height: 2px;\n  background-color: #2b2b2b;\n}\n\na[_ngcontent-%COMP%] {\n  width: 100%;\n  text-decoration: none;\n  background-color: none;\n  color: white;\n}\n\n.impressumContainer[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  background-color: #2b2b2b;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cont[_ngcontent-%COMP%] {\n  width: 33%;\n  font-size: 2vh;\n  color: white;\n}\n\n.impressumCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.detailsButton[_ngcontent-%COMP%] {\n  background-color: #eab55a;\n  width: 200px;\n  height: 50px;\n  color: white;\n  font-size: 24px;\n  border-radius: 20px;\n  transition-duration: 0.2s !important;\n  transition-timing-function: linear !important;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.confirmation[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhci1hY2NpZGVudC1ub3RpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUdSOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBRUksVUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUdJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlDQUFBO0VBQ0Esb0NBQUE7QUFJSjs7QUFGQTtFQUNFLHdCQUFBO0VBQ0QseUJBQUE7QUFLRDs7QUFGQTtFQUNJLHlCQUFBO0FBS0o7O0FBRkE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBRkE7RUFDSSxvQ0FBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFIQTtFQUNJLG9DQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FBUUY7O0FBTkE7RUFDRyxjQUFBO0FBU0g7O0FBUEE7RUFDSSxvQ0FBQTtBQVVKOztBQVBBO0VBQ0ksb0NBQUE7RUFBdUMsNEJBQUE7QUFXM0M7O0FBUkE7RUFDSSxnQ0FBQTtFQUFtQywwQkFBQTtBQVl2Qzs7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWkk7RUFDSSxnQkFBQTtBQWNSOztBQVhBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFjSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVhBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFlSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQWVKOztBQVpBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0FBZUo7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWVKOztBQVpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFlSiIsImZpbGUiOiJjYXItYWNjaWRlbnQtbm90aWZpY2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXZDb250YWluZXIge1xuICAgIGhlaWdodDo1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xufVxuLmNOYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gcGFkZGluZy10b3A6IDdweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2UmVzdENvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uc1RvcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuICAgIH1cbn1cblxuLm1pZGRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBoZWlnaHQ6IDE1MHZoO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJvcmRlcjogc29saWQ7XG59XG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjEge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxX2FsbCB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV8xIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxXzFfSU1HIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbWVkaXVtQ2FyLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxXzFfVEVYVCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG59XG5oMiwgaDMge1xuICAgIGNvbG9yOiAjMmIyYjJiO1xufVxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxXzIge1xuICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJvcmRlcjogc29saWQgcmVkO1xufVxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxXzJfVEVYVCB7XG4gICAgLy8gd2lkdGg6MTAwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMiB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMl9hbGwge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMl9sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5iZXNpZGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiNpbnB1dFdpZHRoIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDQyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IzExMWIxOSAhaW1wb3J0YW50O1xuICB9XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1hcmdpbi10b3A6MjdweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gbWluLXdpZHRoOiAxNnZ3ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5O1xuICB9XG5cbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6ICMxMTFiMTk7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICAvKmNoYW5nZSBjb2xvciBvZiBlbGVtZW50IGxpbmUqL1xuICBjYXJldC1jb2xvcjogIzExMWIxOSAgICAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93LXNlbGVjdGVkIHtcbiAgIGNvbG9yOiAjMTExYjE5IDtcbn1cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgICFpbXBvcnRhbnQ7ICBcbn1cbiAgICBcbjo6bmctZGVlcCAgIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgICFpbXBvcnRhbnQ7IC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovICBcbn1cbiAgICBcbjo6bmctZGVlcCAgIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExMWIxOSAgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovICBcbn1cblxuXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbn1cbmgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmJpcnRoRGF5LCAuY3JlZGl0Q2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICMyYjJiMmI7XG4gICAgJi5jcmVkaXRDYXJkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG5ociB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYiA7XG59XG5cbmEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi8vSW1wcmVzc3VtXG4uaW1wcmVzc3VtQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ltcHJlc3N1bS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5pbXByZXNzdW1Db250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJpdkNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRldGFpbHNCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWI1NWE7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29uZmlybWF0aW9uIHtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgd2lkdGg6IDQwdmg7XG4gICAgXG59XG5cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarAccidentNotificationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-accident-notification-page',
                templateUrl: './car-accident-notification-page.component.html',
                styleUrls: ['./car-accident-notification-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "LY7L":
/*!************************************************************************!*\
  !*** ./src/app/booking-details-page/booking-details-page.component.ts ***!
  \************************************************************************/
/*! exports provided: BookingDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsPageComponent", function() { return BookingDetailsPageComponent; });
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../confirm-dialog/confirm-dialog.component */ "3dBE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function BookingDetailsPageComponent_mat_option_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](month_r2);
} }
class BookingDetailsPageComponent {
    constructor(dataSharingService, dialog, searchService, router) {
        this.dataSharingService = dataSharingService;
        this.dialog = dialog;
        this.searchService = searchService;
        this.router = router;
        this.monthArray = [];
        this.daysArray = [];
        this.yearsArray = [];
        this.createMonthArray();
        this.createDaysArray();
        this.createYearsArray();
        this.choosenCar = this.dataSharingService.carSelected;
        this.totalPrice = this.dataSharingService.totalPrice;
        this.insurancePrice = this.dataSharingService.insurancePrice;
        this.insurance = this.dataSharingService.insurance;
        this.fromDate = this.dataSharingService.fromDate;
        this.toDate = this.dataSharingService.toDate;
        this.data = this.dataSharingService.insuranceSelectionResult;
        //set maxDate
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    ngOnInit() {
    }
    createMonthArray() {
        let start = 1;
        while (start <= 12) {
            this.monthArray.push(start);
            start++;
        }
    }
    createDaysArray() {
        let start = 1;
        while (start <= 31) {
            this.daysArray.push(start);
            start++;
        }
    }
    createYearsArray() {
        let start = 1980;
        while (start <= 2002) {
            this.yearsArray.push(start);
            start++;
        }
    }
    openConfirmDialog() {
        this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"]);
    }
    cancel() {
        let input = {
            acceptAgreement: false,
            processInstanceId: this.dataSharingService.processInstanceId
        };
        this.searchService.postAcceptAgreement(input).subscribe(response => {
            var _a;
            if (response.status >= 200 && response.status < 300) {
                if (((_a = response.body) === null || _a === void 0 ? void 0 : _a.response) === "Success") {
                    this.router.navigateByUrl("");
                }
            }
        });
    }
    book() {
        let input = {
            acceptAgreement: true,
            processInstanceId: this.dataSharingService.processInstanceId,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country: this.country,
            birthDate: this.birthDate,
            cardHolder: this.cardHolder,
            cardNumber: this.cardNumber,
            expiryMonth: this.expiryMonth,
            expiryYear: this.expiryYear,
            cvv: this.cvv
        };
        this.searchService.postAcceptAgreement(input).subscribe(response => {
            var _a;
            if (response.status >= 200 && response.status < 300) {
                if (((_a = response.body) === null || _a === void 0 ? void 0 : _a.response) === "Success") {
                    this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"]);
                }
            }
        });
    }
}
BookingDetailsPageComponent.ɵfac = function BookingDetailsPageComponent_Factory(t) { return new (t || BookingDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
BookingDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingDetailsPageComponent, selectors: [["app-booking-details-page"]], decls: 198, vars: 33, consts: [[1, "pageWidth", "navContainer"], [1, "cName"], [1, "navRestContainer"], [1, "iconsTop", "material-icons"], ["routerLink", "/login"], [1, "pageWidth", "middleContainer"], [1, "middleContentContainer"], [1, "middleContentContainer1"], [1, "middleContentContainer1_all"], [1, "middleContentContainer1_1"], [1, "middleContentContainer1_1_IMG"], [1, "middleContentContainer1_1_TEXT"], [2, "font-weight", "600"], [1, "middleContentContainer1_2"], [1, "middleContentContainer1_2_TEXT"], [2, "font-size", "14px"], [2, "margin", "0"], [1, "middleContentContainer2"], [1, "middleContentContainer2_all"], [1, "middleContentContainer2_left"], ["aria-label", "Select an option"], ["value", "Mr.", 2, "font-size", "20px", "margin-right", "20px", "margin-top", "15px"], ["value", "Mrs.", 2, "font-size", "20px", "margin-top", "15px"], ["id", "inputWidth"], ["id", "label"], ["matInput", "", "type", "text"], [1, "besides"], ["name", "firstName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "lastName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "email", "matInput", "", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "required", "", "name", "phoneNumber", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "required", "", "name", "street", 3, "ngModel", "ngModelChange"], [2, "width", "40%", "margin-right", "10%"], ["matInput", "", "type", "text", "required", "", "name", "zipCode", 3, "ngModel", "ngModelChange"], [2, "width", "50%"], ["matInput", "", "type", "text", "required", "", "name", "city", 3, "ngModel", "ngModelChange"], ["name", "country", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "Germany"], ["value", "England"], ["value", "France"], [1, "birthDay"], [2, "width", "10vw"], ["name", "birthDate", "matInput", "", "name", "birthDate", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], [1, "middleContentContainer3"], [1, "credizCard"], [2, "width", "30%", "margin-right", "5%"], ["matInput", "", "type", "text", "required", "", "name", "cardHolder", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "required", "", "name", "cardNumber", 3, "ngModel", "ngModelChange"], [2, "width", "7.5%", "margin-right", "5%"], ["name", "expiryMonth", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "month", 4, "ngFor", "ngForOf"], ["name", "expiryYear", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "01"], ["value", "02"], ["value", "03"], ["value", "04"], ["value", "05"], ["value", "06"], ["value", "07"], ["value", "08"], ["value", "09"], ["value", "10"], ["value", "11"], ["value", "12"], [2, "width", "5%"], ["matInput", "", "type", "number", "required", "", "name", "cvv", 3, "ngModel", "ngModelChange"], [1, "middleContentContainer4"], [1, "buttonContainer"], ["mat-button", "", 1, "detailsButton", 3, "disabled", "click"], ["mat-button", "", 1, "cancelButton", 3, "click"], [1, "confirmatiomContainer"], [1, "impressumContainer"], [1, "cont"], [1, "cont", "impressumCont"], [1, "cont", "privCont"], [2, "margin-right", "20px"], ["value", "month"]], template: function BookingDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "BVIS - Mobility Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " directions_car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "1. Review & Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Daily Rental Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "2. Personal Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-radio-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Mrs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_70_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_74_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_79_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_83_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Street & Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_88_listener($event) { return ctx.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-form-field", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Postal Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_93_listener($event) { return ctx.zipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_97_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_mat_select_ngModelChange_102_listener($event) { return ctx.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "England");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_113_listener($event) { return ctx.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "mat-datepicker-toggle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "mat-datepicker", null, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "3. Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h2", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-form-field", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Card Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_126_listener($event) { return ctx.cardHolder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-form-field", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_130_listener($event) { return ctx.cardNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-form-field", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Expiry Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_mat_select_ngModelChange_134_listener($event) { return ctx.expiryMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, BookingDetailsPageComponent_mat_option_135_Template, 2, 1, "mat-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-form-field", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Expiry Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_mat_select_ngModelChange_139_listener($event) { return ctx.expiryYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "mat-option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "2027");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "2028");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "mat-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "2029");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "2030");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "2031");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "mat-option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "2032");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "mat-form-field", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookingDetailsPageComponent_Template_input_ngModelChange_167_listener($event) { return ctx.cvv = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "4. Booking Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "I confirm that I am booking a prepaid rate where the total rental price indicated above will be charged immediately to the credit card indicated. I accept the fees associated with this rate in case of");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Change of reservation (reduced fee until March 31) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Cancellation (Charges will be retained for the first three days of the rental including fees and extras. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, " If the rental period is less than three days, the full rental cost including fees and extras will be retained) or Non-collection of the vehicle (no refund of the rental price).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "The total amount will be charged in Euro (with the valid exchange rate at the time of debiting). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDetailsPageComponent_Template_button_click_184_listener() { return ctx.book(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDetailsPageComponent_Template_button_click_186_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.choosenCar.make, " ", ctx.choosenCar.model, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 31, ctx.choosenCar.carClass), " Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.choosenCar.site);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.fromDate, " - ", ctx.toDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.choosenCar.dailyRentalPrice, " \u20AC / Day)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.totalCarPrice, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.insurance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.insurancePrice, " \u20AC / Day) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.totalInsurancePrice, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.totalPrice, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.maxDate)("ngModel", ctx.birthDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cardHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cardNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.expiryMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monthArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.expiryYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cvv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.firstName && ctx.lastName && ctx.email && ctx.phoneNumber && ctx.street && ctx.zipCode && ctx.city && ctx.country && ctx.birthDate && ctx.cardHolder && ctx.cardNumber && ctx.expiryMonth && ctx.expiryYear && ctx.cvv));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"]], styles: [".pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.navContainer[_ngcontent-%COMP%] {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #2b2b2b;\n}\n\n.cName[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-left: 20px;\n  font-size: 3vh;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.navRestContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.iconsTop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n  transform: scale(1.5);\n  color: white;\n}\n\n.iconsTop[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.8);\n}\n\n.middleContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.middleContentContainer[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.middleContentContainer1[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 70px;\n}\n\n.middleContentContainer1_all[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 100%;\n  display: flex;\n}\n\n.middleContentContainer1_1[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.middleContentContainer1_1_IMG[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 40%;\n  background-image: url('mediumCar.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-right: 40px;\n}\n\n.middleContentContainer1_1_TEXT[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n}\n\n.middleContentContainer1_2[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n}\n\n.middleContentContainer1_2_TEXT[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.middleContentContainer2[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 50px;\n}\n\n.middleContentContainer2_all[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 100%;\n  display: flex;\n}\n\n.middleContentContainer2_left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.besides[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n#inputWidth[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 42.5%;\n  margin-right: 5%;\n}\n\n  .mat-form-field-underline .mat-form-field-ripple {\n  \n  background-color: #111b19 !important;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #111b19 !important;\n}\n\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #111b19 !important;\n}\n\n  .mat-select-panel {\n  margin-top: 27px !important;\n  margin-left: 15px !important;\n}\n\n  .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-calendar-body-selected {\n  background-color: #111b19 !important;\n}\n\n  .mat-select-arrow-selected {\n  color: #111b19;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #111b19 !important;\n  \n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #111b19 !important;\n  \n}\n\n  .mat-calendar-body-selected {\n  background-color: #111b19 !important;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  \n  caret-color: #111b19 !important;\n}\n\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #111b19 !important;\n}\n\n.middleContentContainer3[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 100px;\n}\n\n.middleContentContainer4[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  width: 120%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  color: #2b2b2b;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.birthDay[_ngcontent-%COMP%], .creditCard[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: #2b2b2b;\n}\n\n.birthDay.creditCard[_ngcontent-%COMP%], .creditCard.creditCard[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nhr[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  height: 2px;\n  background-color: #2b2b2b;\n}\n\na[_ngcontent-%COMP%] {\n  width: 100%;\n  text-decoration: none;\n  background-color: none;\n  color: white;\n}\n\n.impressumContainer[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  background-color: #2b2b2b;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cont[_ngcontent-%COMP%] {\n  width: 33%;\n  font-size: 2vh;\n  color: white;\n}\n\n.impressumCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.detailsButton[_ngcontent-%COMP%] {\n  background-color: #eab55a;\n  width: 200px;\n  height: 50px;\n  color: white;\n  font-size: 24px;\n  border-radius: 20px;\n  transition-duration: 0.2s !important;\n  transition-timing-function: linear !important;\n}\n\n.cancelButton[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  background-color: grey;\n  width: 200px;\n  height: 50px;\n  color: white;\n  font-size: 24px;\n  border-radius: 20px;\n  transition-duration: 0.2s !important;\n  transition-timing-function: linear !important;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.confirmation[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jvb2tpbmctZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBR1I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZBO0VBR0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx5Q0FBQTtFQUNBLG9DQUFBO0FBSUo7O0FBRkE7RUFDRSx3QkFBQTtFQUNELHlCQUFBO0FBS0Q7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUZBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUtKOztBQUZBO0VBQ0ksb0NBQUE7QUFLSjs7QUFGQTtFQUNJLG9DQUFBO0FBS0o7O0FBRkE7RUFDRyxjQUFBO0FBS0g7O0FBSEE7RUFDSSxvQ0FBQTtBQU1KOztBQUhBO0VBQ0ksb0NBQUE7RUFBdUMsNEJBQUE7QUFPM0M7O0FBSkE7RUFDSSxnQ0FBQTtFQUFtQywwQkFBQTtBQVF2Qzs7QUFMQTtFQUNJLG9DQUFBO0FBUUo7O0FBTkE7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FBU0Y7O0FBUEE7RUFDRSx5QkFBQTtBQVVGOztBQVBBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FBVUo7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBVUo7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVhJO0VBQ0ksZ0JBQUE7QUFhUjs7QUFWQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBYUo7O0FBVkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFhSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBY0o7O0FBWEE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFjSjs7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw2Q0FBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkNBQUE7QUFlSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBZUo7O0FBWkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWVKIiwiZmlsZSI6ImJvb2tpbmctZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubmF2Q29udGFpbmVyIHtcbiAgICBoZWlnaHQ6NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbn1cbi5jTmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdlJlc3RDb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaWNvbnNUb3Age1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcbiAgICB9XG59XG5cbi5taWRkbGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gaGVpZ2h0OiAxNTB2aDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWlkZGxlQ29udGVudENvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBib3JkZXI6IHNvbGlkO1xufVxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIxIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV9hbGwge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjFfMSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV8xX0lNRyB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL21lZGl1bUNhci5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV8xX1RFWFQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xufVxuaDIsIGgzIHtcbiAgICBjb2xvcjogIzJiMmIyYjtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV8yIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBib3JkZXI6IHNvbGlkIHJlZDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMV8yX1RFWFQge1xuICAgIC8vIHdpZHRoOjEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuXG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjIge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMl9hbGwge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyMl9sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5iZXNpZGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiNpbnB1dFdpZHRoIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDQyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IzExMWIxOSAhaW1wb3J0YW50O1xuICB9XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1hcmdpbi10b3A6MjdweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gbWluLXdpZHRoOiAxNnZ3ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdy1zZWxlY3RlZCB7XG4gICBjb2xvcjogIzExMWIxOSA7XG59XG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICAhaW1wb3J0YW50OyAgXG59XG4gICAgXG46Om5nLWRlZXAgICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICAhaW1wb3J0YW50OyAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqLyAgXG59XG4gICAgXG46Om5nLWRlZXAgICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMxMTFiMTkgICFpbXBvcnRhbnQ7IC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqLyAgXG59XG5cbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgIWltcG9ydGFudDtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGVsZW1lbnQgbGluZSovXG4gIGNhcmV0LWNvbG9yOiAjMTExYjE5ICAgICFpbXBvcnRhbnQ7XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMTExYjE5ICFpbXBvcnRhbnQ7XG4gfVxuXG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjMge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyNCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIHdpZHRoOiAxMjAlO1xufVxuXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbn1cbmgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmJpcnRoRGF5LCAuY3JlZGl0Q2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICMyYjJiMmI7XG4gICAgJi5jcmVkaXRDYXJkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG5ociB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYiA7XG59XG5cbmEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi8vSW1wcmVzc3VtXG4uaW1wcmVzc3VtQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ltcHJlc3N1bS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5pbXByZXNzdW1Db250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJpdkNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRldGFpbHNCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWI1NWE7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWltcG9ydGFudDtcbn1cbi5jYW5jZWxCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29uZmlybWF0aW9uIHtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgd2lkdGg6IDQwdmg7XG4gICAgXG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-booking-details-page',
                templateUrl: './booking-details-page.component.html',
                styleUrls: ['./booking-details-page.component.scss']
            }]
    }], function () { return [{ type: src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "NbiC":
/*!*************************************************!*\
  !*** ./src/assets/services/employee.service.ts ***!
  \*************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/data-sharing.service */ "5gZA");





class EmployeeService {
    constructor(http, dataSharingService) {
        this.http = http;
        this.dataSharingService = dataSharingService;
        //private url= "http://localhost:8080/"
        this.url = "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/";
        //private camundaUrl ="http://localhost:8080/engine-rest/"
        this.camundaUrl = "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/engine-rest/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": sessionStorage.getItem("token")
            }),
            observe: "response"
        };
    }
    getActiveTasks() {
        const body = {};
        return this.http.get(this.url + "taskdata", this.httpOptions);
    }
    postRecordVehicleHandover(id) {
        const body = {};
        return this.http.post(this.camundaUrl + "task/" + id + "/complete", body, this.httpOptions);
    }
    postReturnVehicle(licensePlate, contractId) {
        const body = new FormData();
        body.append("licensePlate", licensePlate);
        if (contractId !== undefined) {
            body.append("contractId", contractId.toString());
        }
        //body.forEach(element => console.log(element));
        return this.http.post(this.url + "vehiclereturn", body, this.httpOptions);
    }
    postEmployeeChecksCar(input, id) {
        let damageDetected;
        if (input.vehicleStatus === "noDeficiencis") {
            damageDetected = false;
        }
        else {
            damageDetected = true;
        }
        const body = { "variables": {
                "damageDetected": { "value": damageDetected },
                "incidentSummary": { "value": input.descriptionOfDefects }
            }
        };
        return this.http.post(this.camundaUrl + "task/" + id + "/complete", body, this.httpOptions);
    }
    postCheckInsuranceCoverage(input, id) {
        let repairCostCovered;
        if (input.coverage === "fullyCovered") {
            repairCostCovered = true;
        }
        else {
            repairCostCovered = false;
        }
        const body = {
            "variables": {
                "repairCostsCovered": {
                    "value": repairCostCovered
                },
                "coveredAmount": {
                    "value": input.coveredAmount
                }
            }
        };
        return this.http.post(this.camundaUrl + "task/" + id + "/complete", body, this.httpOptions);
    }
    requestIncidentReportData(processInstanceId) {
        return this.http.get(this.url + "getincidentreport/" + processInstanceId, this.httpOptions);
    }
    postEvaluateCarState(element, conductRepair, drivable) {
        let drivableB;
        let body = {};
        if (conductRepair === "conductRepair") {
            body = { "variables": {
                    "conductRepair": { "value": true }
                }
            };
        }
        else {
            if (drivable === "drivable") {
                drivableB = true;
            }
            else {
                drivableB = false;
            }
            body = { "variables": {
                    "conductRepair": { "value": false },
                    "drivable": { "value": drivableB }
                }
            };
        }
        return this.http.post(this.camundaUrl + "task/" + element.taskId + "/complete", body, this.httpOptions);
    }
    postRemoveFromStock(element) {
        const body = new FormData();
        body.append("carId", element.rentalCar.id.toString());
        return this.http.post(this.url + "removefromstock", body, this.httpOptions);
    }
    postFixIncidentReport(incidentReportInput, taskId, incidentIdInput) {
        const body = new FormData();
        body.append("taskId", taskId);
        body.append("incidentReportId", incidentIdInput.toString());
        body.append("incidentDate", incidentReportInput.incidentDate.format("YYYY-MM-DD"));
        body.append("driverFirstName", incidentReportInput.driverFirstName);
        body.append("driverLastName", incidentReportInput.driverLastName);
        body.append("driverAge", incidentReportInput.driverAge.toString());
        body.append("driverLicense", incidentReportInput.driverLicense);
        body.append("driverCountry", incidentReportInput.driverCountry);
        body.append("driverCity", incidentReportInput.driverCity);
        body.append("driverZipCode", incidentReportInput.driverZipCode);
        body.append("driverStreet", incidentReportInput.driverStreet);
        body.append("driverPhoneNumber", incidentReportInput.driverPhoneNumber);
        body.append("driverEmail", incidentReportInput.driverEmail);
        body.append("incidentSummary", incidentReportInput.incidentSummary);
        return this.http.post(this.url + "fixincidentreport", body, this.httpOptions);
    }
    getRepairCost(processInstanceId) {
        return this.http.get(this.url + "repairinvoice/" + processInstanceId, this.httpOptions);
    }
    getMaintanceCost(processInstanceId) {
        return this.http.get(this.url + "maintenanceinvoice/" + processInstanceId, this.httpOptions);
    }
    postPayRepairCosts(input) {
        const body = {};
        return this.http.post(this.camundaUrl + "task/" + input.taskId + "/complete", body, this.httpOptions);
    }
    postPayMaintenanceCosts(input) {
        const body = {};
        return this.http.post(this.camundaUrl + "task/" + input.taskId + "/complete", body, this.httpOptions);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'wm-bvis-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var _landing_page_car_selection_page_car_selection_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/car-selection-page/car-selection-page.component */ "cils");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_assets_directives_deferLoad_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/assets/directives/deferLoad.directive */ "mAgL");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _test_rest_api_test_rest_api_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./test-rest-api/test-rest-api.component */ "B3kp");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _insurance_selection_page_insurance_selection_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./insurance-selection-page/insurance-selection-page.component */ "7N50");
/* harmony import */ var _booking_details_page_booking_details_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./booking-details-page/booking-details-page.component */ "LY7L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "3dBE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _car_accident_notification_page_car_accident_notification_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./car-accident-notification-page/car-accident-notification-page.component */ "F3wk");
/* harmony import */ var _employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./employee-page/employee-page.component */ "oI+m");
/* harmony import */ var src_assets_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/assets/services/auth-guard.service */ "+Ayr");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./small-spinner/small-spinner.component */ "4gew");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "oxSv");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_assets_directives_deferLoad_directive__WEBPACK_IMPORTED_MODULE_15__["DeferLoadDirective"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["MY_FORMAT"] },
        src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_20__["SearchService"],
        _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_0__["DataSharingService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_26__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                { path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"] },
                { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: "carAccidentNotificationPage", component: _car_accident_notification_page_car_accident_notification_page_component__WEBPACK_IMPORTED_MODULE_29__["CarAccidentNotificationPageComponent"] },
                { path: "insuranceSelection", component: _insurance_selection_page_insurance_selection_page_component__WEBPACK_IMPORTED_MODULE_23__["InsuranceSelectionPageComponent"] },
                { path: "bookingDetails", component: _booking_details_page_booking_details_page_component__WEBPACK_IMPORTED_MODULE_24__["BookingDetailsPageComponent"] },
                { path: "employeePage", component: _employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_30__["EmployeePageComponent"], canActivate: [src_assets_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuardService"]] },
                { path: "**", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"],
        src_assets_directives_deferLoad_directive__WEBPACK_IMPORTED_MODULE_15__["DeferLoadDirective"],
        _test_rest_api_test_rest_api_component__WEBPACK_IMPORTED_MODULE_17__["TestRestApiComponent"],
        _landing_page_car_selection_page_car_selection_page_component__WEBPACK_IMPORTED_MODULE_1__["CarSelectionPageComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"],
        _insurance_selection_page_insurance_selection_page_component__WEBPACK_IMPORTED_MODULE_23__["InsuranceSelectionPageComponent"],
        _booking_details_page_booking_details_page_component__WEBPACK_IMPORTED_MODULE_24__["BookingDetailsPageComponent"],
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"],
        _car_accident_notification_page_car_accident_notification_page_component__WEBPACK_IMPORTED_MODULE_29__["CarAccidentNotificationPageComponent"],
        _employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_30__["EmployeePageComponent"],
        _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_34__["SmallSpinnerComponent"],
        _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_36__["SnackBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"],
                    src_assets_directives_deferLoad_directive__WEBPACK_IMPORTED_MODULE_15__["DeferLoadDirective"],
                    _test_rest_api_test_rest_api_component__WEBPACK_IMPORTED_MODULE_17__["TestRestApiComponent"],
                    _landing_page_car_selection_page_car_selection_page_component__WEBPACK_IMPORTED_MODULE_1__["CarSelectionPageComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"],
                    _insurance_selection_page_insurance_selection_page_component__WEBPACK_IMPORTED_MODULE_23__["InsuranceSelectionPageComponent"],
                    _booking_details_page_booking_details_page_component__WEBPACK_IMPORTED_MODULE_24__["BookingDetailsPageComponent"],
                    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"],
                    _car_accident_notification_page_car_accident_notification_page_component__WEBPACK_IMPORTED_MODULE_29__["CarAccidentNotificationPageComponent"],
                    _employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_30__["EmployeePageComponent"],
                    _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_34__["SmallSpinnerComponent"],
                    _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_36__["SnackBarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                        { path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"] },
                        { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                        { path: "carAccidentNotificationPage", component: _car_accident_notification_page_car_accident_notification_page_component__WEBPACK_IMPORTED_MODULE_29__["CarAccidentNotificationPageComponent"] },
                        { path: "insuranceSelection", component: _insurance_selection_page_insurance_selection_page_component__WEBPACK_IMPORTED_MODULE_23__["InsuranceSelectionPageComponent"] },
                        { path: "bookingDetails", component: _booking_details_page_booking_details_page_component__WEBPACK_IMPORTED_MODULE_24__["BookingDetailsPageComponent"] },
                        { path: "employeePage", component: _employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_30__["EmployeePageComponent"], canActivate: [src_assets_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuardService"]] },
                        { path: "**", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"] }
                    ])
                ],
                providers: [
                    src_assets_directives_deferLoad_directive__WEBPACK_IMPORTED_MODULE_15__["DeferLoadDirective"],
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]] },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["MY_FORMAT"] },
                    src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_20__["SearchService"],
                    _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_0__["DataSharingService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_26__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cils":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page/car-selection-page/car-selection-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CarSelectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSelectionPageComponent", function() { return CarSelectionPageComponent; });
/* harmony import */ var src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/enums/carClass */ "DC3P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../spinner/spinner.component */ "CZqF");








function CarSelectionPageComponent_app_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
function CarSelectionPageComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarSelectionPageComponent_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const result_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.selectCar(result_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Car Rental Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "plus insurance costs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", result_r3.make, " ", result_r3.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("4 Seats | ", result_r3.transmissionType, " | ", result_r3.carClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.getSource(result_r3.carClass), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", result_r3.dailyRentalPrice, " \u20AC/ Day");
} }
function CarSelectionPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarSelectionPageComponent_div_1_div_1_Template, 13, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.trimmedFittingCars);
} }
class CarSelectionPageComponent {
    constructor(dataSharingService, searchService, router) {
        this.dataSharingService = dataSharingService;
        this.searchService = searchService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.fittingCars = this.dataSharingService.carSelectionResults.fittingCars;
        let index = 0;
        while (index < this.fittingCars.length) {
            if (index === 0) {
                this.trimmedFittingCars = [this.fittingCars[index]];
            }
            else if (this.fittingCars[index - 1].carClass !== this.fittingCars[index].carClass) {
                let car;
                let carClassExists = false;
                for (car of this.trimmedFittingCars) {
                    if (car.carClass === this.fittingCars[index].carClass) {
                        carClassExists = true;
                        break;
                    }
                }
                if (!carClassExists) {
                    this.trimmedFittingCars.push(this.fittingCars[index]);
                }
            }
            index = index + 1;
        }
        console.log(this.fittingCars);
        console.log(this.trimmedFittingCars);
        this.dataSharingService.processInstanceId = this.dataSharingService.carSelectionResults.processInstanceId;
        // console.log(this.results.fittingCars.id);
    }
    selectCar(r) {
        // console.log(r);
        let input = {
            carClass: r.carClass,
            processInstanceId: this.dataSharingService.carSelectionResults.processInstanceId
        };
        this.isLoading = true;
        this.searchService.postSelectCar(input).subscribe(response => {
            this.dataSharingService.carSelected = r;
            this.dataSharingService.selectCarResponse = response;
            this.isLoading = false;
            this.router.navigateByUrl("insuranceSelection");
        });
    }
    getSource(input) {
        let source = "";
        switch (input) {
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].SMALL:
                source = "assets/img/smallCar.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].MEDIUM:
                source = "assets/img/mediumCar.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].SPORTS:
                source = "assets/img/sportCar.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].LARGE:
                source = "assets/img/swjCar.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].TRANSPORTER:
                source = "assets/img/bigTransporter.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].SMALL_TRANSPORTER:
                source = "assets/img/smallTransporter.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].BUS:
                source = "assets/img/smallBus.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].MINIVAN:
                source = "assets/img/minivanCar.png";
                break;
            case src_assets_enums_carClass__WEBPACK_IMPORTED_MODULE_0__["CarClass"].LUXURY:
                source = "assets/img/jaguar.png";
                break;
        }
        return source;
    }
}
CarSelectionPageComponent.ɵfac = function CarSelectionPageComponent_Factory(t) { return new (t || CarSelectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CarSelectionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarSelectionPageComponent, selectors: [["app-car-selection-page"]], inputs: { results: "results" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "resultsContainer", 4, "ngIf"], [1, "resultsContainer"], ["class", "resultContainer", 3, "click", 4, "ngFor", "ngForOf"], [1, "resultContainer", 3, "click"], [1, "resultArea1"], [1, "resultArea2"], [1, "resultArea3"], ["alt", "mediumCar", 3, "src"], [1, "resultArea4"], [1, "resultArea5"], [1, "resultArea6"]], template: function CarSelectionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarSelectionPageComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarSelectionPageComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".resultsContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\n.resultContainer[_ngcontent-%COMP%] {\n  border: solid var(--grey) 2px;\n  height: 400px;\n  width: 400px;\n  border-radius: 10px;\n  margin: 10px;\n  display: inline-flex;\n  flex-direction: column;\n  background-color: #f7f7fb;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\n.resultContainer[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  cursor: pointer;\n}\n\n.resultContainer[_ngcontent-%COMP%]:hover   .resultArea1[_ngcontent-%COMP%] {\n  color: #eab55a;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\n.resultArea1[_ngcontent-%COMP%] {\n  height: 15%;\n  width: 100%;\n  margin-left: 20px;\n  margin-top: 10px;\n  font-size: 24px;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\n.resultArea2[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n}\n\n.resultArea3[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: auto;\n}\n\n.resultArea4[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  font-size: 24px;\n}\n\n.resultArea5[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 26px;\n  font-weight: 600;\n}\n\n.resultArea6[_ngcontent-%COMP%] {\n  height: 7%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 12px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nhci1zZWxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBR0o7O0FBRkk7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRkk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQUlSOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFFSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KIiwiZmlsZSI6ImNhci1zZWxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cbi5yZXN1bHRDb250YWluZXIge1xuICAgIGJvcmRlcjogc29saWQgdmFyKC0tZ3JleSkgMnB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmYjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmOmhvdmVyIC5yZXN1bHRBcmVhMSB7XG4gICAgICAgIGNvbG9yOiAjZWFiNTVhO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbn1cblxuLnJlc3VsdEFyZWExIHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4ucmVzdWx0QXJlYTIge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4ucmVzdWx0QXJlYTMge1xuICAgIC8vIGJvcmRlcjogc29saWQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnJlc3VsdEFyZWE0IHtcbiAgICBoZWlnaHQ6IDEyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLnJlc3VsdEFyZWE1IHtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59ICAgXG4ucmVzdWx0QXJlYTYge1xuICAgIGhlaWdodDogNyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn0gICBcbiAiXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarSelectionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-car-selection-page',
                templateUrl: './car-selection-page.component.html',
                styleUrls: ['./car-selection-page.component.scss']
            }]
    }], function () { return [{ type: _assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] }, { type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { results: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "m0CG":
/*!***************************************!*\
  !*** ./src/assets/enums/locations.ts ***!
  \***************************************/
/*! exports provided: LocationClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationClass", function() { return LocationClass; });
var LocationClass;
(function (LocationClass) {
    LocationClass["KOBLENZ"] = "Koblenz";
    LocationClass["BERLIN"] = "Berlin";
    LocationClass["FRANKFURT"] = "Frankfurt";
    LocationClass["K\u00D6LN"] = "K\u00F6ln";
    LocationClass["HAMBURG"] = "Hamburg";
    LocationClass["M\u00DCNCHEN"] = "M\u00FCnchen";
    LocationClass["STUTTGART"] = "Stuttgart";
    LocationClass["BREMEN"] = "Bremen";
    LocationClass["LEIPZIG"] = "Leipzig";
})(LocationClass || (LocationClass = {}));


/***/ }),

/***/ "mAgL":
/*!******************************************************!*\
  !*** ./src/assets/directives/deferLoad.directive.ts ***!
  \******************************************************/
/*! exports provided: DeferLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadDirective", function() { return DeferLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DeferLoadDirective {
    constructor(_element) {
        this._element = _element;
        this.deferLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkForIntersection = (entries) => {
            entries.forEach((entry) => {
                if (this.checkIfIntersecting(entry)) {
                    this.deferLoad.emit();
                    if (this._intersectionObserver != undefined) {
                        this._intersectionObserver.unobserve((this._element.nativeElement));
                        this._intersectionObserver.disconnect();
                    }
                }
            });
        };
    }
    ngAfterViewInit() {
        const options = {
            root: null,
            threshold: 0.99
        };
        this._intersectionObserver = new IntersectionObserver(entries => {
            this.checkForIntersection(entries);
        }, options);
        this._intersectionObserver.observe((this._element.nativeElement));
    }
    checkIfIntersecting(entry) {
        // console.log(entry.intersectionRatio);
        // console.log("entry.isIntersecting", entry.isIntersecting);
        // console.log("this._element.nativeElement", this._element.nativeElement);
        // console.log("entry.target", entry.target);
        // console.log("----------------------------------");
        return entry.isIntersecting;
    }
}
DeferLoadDirective.ɵfac = function DeferLoadDirective_Factory(t) { return new (t || DeferLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DeferLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeferLoadDirective, selectors: [["", "deferLoad", ""]], outputs: { deferLoad: "deferLoad" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeferLoadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[deferLoad]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { deferLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: MY_FORMAT, LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMAT", function() { return MY_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _assets_enums_locations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/enums/locations */ "m0CG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/search.service */ "Cqan");
/* harmony import */ var src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");
/* harmony import */ var _car_selection_page_car_selection_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./car-selection-page/car-selection-page.component */ "cils");
















function LandingPageComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locationSite_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", locationSite_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](locationSite_r7);
} }
function LandingPageComponent_app_spinner_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
function LandingPageComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "What Services we offer to our clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "High Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "All presented cars are in best conditions and fulfill our high quality standards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Professional Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " The entire renting process is designed to maximize customer satisfaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Car Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "No longer difficulties and risks in case of damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Globally Connected by Large Network");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Help us connect!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Get Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Latest From Our Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Germanies Autobahn. Driving with no tempo limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Inappropriate behavior ipsum dolor sit amet, consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Germanies Autobahn. Driving with no tempo limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Inappropriate behavior ipsum dolor sit amet, consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Germanies Autobahn. Driving with no tempo limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Inappropriate behavior ipsum dolor sit amet, consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Germanies Autobahn. Driving with no tempo limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Inappropriate behavior ipsum dolor sit amet, consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](46, 4, ctx_r5.minFromDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](57, 7, ctx_r5.minFromDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](68, 10, ctx_r5.minFromDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](79, 13, ctx_r5.minFromDate, "mediumDate"), " ");
} }
function LandingPageComponent_app_car_selection_page_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-car-selection-page", 57);
} }
const MY_FORMAT = {
    parse: {
        dateInput: "DD/MM/YYYY"
    },
    display: {
        dateInput: "YYYY-MM-DD",
        monthYearLabel: "YYYY",
        dateA11yLabel: "LL",
        monthA11yLabel: "YYYY"
    }
};
class LandingPageComponent {
    constructor(restSearchService, dataSharingService, datepipe, router) {
        this.restSearchService = restSearchService;
        this.dataSharingService = dataSharingService;
        this.datepipe = datepipe;
        this.router = router;
        this.searchActive = false;
        this.locationSites = Object.values(_assets_enums_locations__WEBPACK_IMPORTED_MODULE_0__["LocationClass"]);
        this.minFromDate = new Date();
        this.minToDate = new Date();
        this.isLoading = false;
    }
    onSearch(input) {
        if (this.searchActive) {
            this.searchActive = false;
        }
        this.isLoading = true;
        this.dataSharingService.fromDate = this.datepipe.transform(this.fromDate, "YYYY-MM-dd");
        this.dataSharingService.toDate = this.datepipe.transform(this.toDate, "YYYY-MM-dd");
        this.restSearchService.postSearch(input).subscribe(data => {
            this.searchActive = true;
            this.data = data;
            this.dataSharingService.carSelectionResults = data;
            this.isLoading = false;
        });
    }
    getMaxFromDate() {
        if (this.toDate == undefined) {
            return undefined;
        }
        else {
            return this.maxFromDate = this.toDate;
        }
    }
    getMinToDate() {
        if (this.fromDate == undefined) {
            return this.minToDate;
        }
        else {
            return this.minToDate = this.fromDate;
        }
    }
    navigateToCarAccidentPage() {
        this.router.navigateByUrl("carAccidentNotificationPage");
    }
    navigateToEmployeePage() {
        this.router.navigateByUrl("employeePage");
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 62, vars: 18, consts: [[1, "topContainer"], [1, "pageWidth", "navContainer"], [1, "cName"], [1, "navRestContainer"], [1, "iconsTop", "material-icons", 3, "click"], [1, "pageWidth", "searchContainer"], [1, "searchContainer2"], ["id", "searchForm", "ngForm", "", "name", "searchForm", 1, "searchContainerHeader"], ["searchForm", "ngForm"], ["id", "inputWidth"], ["id", "label"], [1, "material-icons"], ["name", "site", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "from", 3, "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], ["matInput", "", "name", "to", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerTo", ""], [2, "width", "12.5%"], ["matInput", "", "name", "numberOfDrivers", "type", "number", "min", "0", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "older23", "type", "number", "min", "0", 3, "ngModel", "max", "ngModelChange"], ["matInput", "", "name", "numberOfCars", "type", "number", "min", "1", 3, "ngModel", "ngModelChange"], [1, "searchContainerBottom"], ["mat-button", "", 1, "searchButton", 3, "click"], [4, "ngIf"], ["style", "width: 100%; display: flex; justify-content: center; margin-top: 5vh;", 4, "ngIf"], [1, "pageWidth", "impressumContainer"], [1, "cont"], [1, "cont", "impressumCont"], [1, "cont", "privCont"], [2, "margin-right", "20px"], [3, "value"], [1, "serviceContainer"], [1, "serviceContainer1"], [1, "serviceContentContainer"], [1, "serviceContent"], [1, "serviceHeader"], [1, "serviceText"], [2, "display", "flex", "flex-direction", "row", "margin-bottom", "40px"], [2, "width", "50%"], ["src", "assets/img/Jeep.png", "width", "100%", "alt", "BILD"], [2, "width", "50%", "padding-left", "5vw"], [2, "width", "70%", "text-align", "left", "font-weight", "600", "padding", "0"], [2, "width", "60%", "text-align", "left", "color", "black", "font-weight", "400"], ["mat-button", "", 1, "detailsButton"], [2, "margin-top", "7vh"], [1, "blog"], [1, "blogContainer"], [1, "blogContentContainer"], [1, "blogImageContainer"], [1, "blogImage1"], [1, "blogContent"], [1, "dateDiv"], [1, "blogImage2"], [1, "blogImage3"], [1, "blogImage4"], [2, "width", "100%", "display", "flex", "justify-content", "center", "margin-top", "5vh"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BVIS - Mobility Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_5_listener() { return ctx.navigateToCarAccidentPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " directions_car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_7_listener() { return ctx.navigateToEmployeePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " location_on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Location area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.site = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LandingPageComponent_mat_option_19_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.fromDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_30_listener($event) { return ctx.toDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Number of drivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_37_listener($event) { return ctx.numberOfDrivers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Older than 23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_41_listener($event) { return ctx.older23 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Number of Cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_45_listener($event) { return ctx.numberOfCars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.onSearch(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, LandingPageComponent_app_spinner_49_Template, 1, 0, "app-spinner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, LandingPageComponent_div_50_Template, 84, 16, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, LandingPageComponent_app_car_selection_page_51_Template, 1, 0, "app-car-selection-page", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.site);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.locationSites);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r2)("min", ctx.minFromDate)("max", ctx.getMaxFromDate())("ngModel", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r3)("min", ctx.getMinToDate())("ngModel", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.numberOfDrivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.older23)("max", ctx.numberOfDrivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.numberOfCars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchActive);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _car_selection_page_car_selection_page_component__WEBPACK_IMPORTED_MODULE_14__["CarSelectionPageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.topContainer[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-image: url('BackgroundImg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.navContainer[_ngcontent-%COMP%] {\n  height: 8%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.imageOhne[_ngcontent-%COMP%] {\n  max-height: 4vh;\n  margin-top: 5px;\n  margin-left: 5px;\n  background-size: cover;\n  transform: scale(1);\n  color: #111b19;\n}\n\n.cName[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-left: 20px;\n  font-size: 3vh;\n  color: #04110e;\n  display: flex;\n  align-items: center;\n}\n\n.navRestContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  margin-top: 5px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n\n.iconsTop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n  transform: scale(1.5);\n  color: #04110e;\n}\n\n.iconsTop[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.8);\n}\n\n.searchContainer[_ngcontent-%COMP%] {\n  height: 92%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.searchContainer2[_ngcontent-%COMP%] {\n  height: 30%;\n  margin-top: 10vh;\n  width: 80%;\n  background-color: white;\n  border-radius: 30px;\n  opacity: 0.95;\n}\n\n.searchContainerHeader[_ngcontent-%COMP%] {\n  height: 60%;\n  padding: 0px 45px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#inputWidth[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n  .mat-form-field-underline .mat-form-field-ripple {\n  \n  background-color: #111b19 !important;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #111b19 !important;\n}\n\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #111b19 !important;\n}\n\n  .mat-select-panel {\n  margin-top: 27px !important;\n  margin-left: 15px !important;\n  min-width: 16vw !important;\n}\n\n  .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-calendar-body-selected {\n  background-color: #111b19 !important;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  \n  caret-color: #111b19 !important;\n}\n\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #111b19 !important;\n}\n\n#label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\n.searchContainerBottom[_ngcontent-%COMP%] {\n  height: 40%;\n  position: relative;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-left: 45px;\n  color: var(--blue);\n}\n\n  .mat-checkbox-checked .mat-checkbox-background,   .mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #111b19 !important;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 1;\n  background-color: #111b19;\n  color: white;\n  font-family: \"Roboto\" sans-serif;\n  font-size: 24px;\n  width: 200px;\n  height: 50px;\n  border-radius: 20px;\n}\n\n.contentContainer[_ngcontent-%COMP%] {\n  height: 85%;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n}\n\n.contentCont[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 33%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.contentContTop[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 4.5vh;\n  text-align: center;\n  color: #111b19;\n  font-weight: 500;\n  padding: 30px 0px;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--grey);\n  line-height: 22px;\n  font-weight: 300;\n}\n\n.textContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  font-size: 5vh;\n  font-weight: 400;\n  color: var(--grey);\n}\n\n.impressumContainer[_ngcontent-%COMP%] {\n  height: 4vh;\n  background-image: url('impressum.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cont[_ngcontent-%COMP%] {\n  width: 33%;\n  font-size: 2vh;\n  color: white;\n}\n\n.impressumCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.serviceContainer[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.serviceContainer1[_ngcontent-%COMP%] {\n  width: 62%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.serviceContentContainer[_ngcontent-%COMP%] {\n  height: 18vh;\n  width: 45vh;\n  max-height: 300px;\n  min-width: 250px;\n  min-height: 150px;\n  margin-right: 3vw;\n  background-color: #f7f7fb;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition-duration: 0.3s;\n}\n\n.serviceContentContainer[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: -11px 13px 27px -14px gray;\n  transition-duration: 0.3s;\n  color: #eab55a;\n}\n\n.serviceContent[_ngcontent-%COMP%] {\n  height: 55%;\n  width: 80%;\n  padding: 0px 10px 10px 10px;\n  text-align: start;\n}\n\n.serviceHeader[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: calc(16px+2vh);\n}\n\n.serviceText[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: calc(16px+2vh);\n  font-weight: 300;\n  font-family: \"Roboto\";\n  line-height: calc(10px+2vh);\n}\n\n.detailsButton[_ngcontent-%COMP%] {\n  background-color: #eab55a;\n  width: 150px;\n  height: 40px;\n  color: white;\n  font-size: 16px;\n}\n\n.blog[_ngcontent-%COMP%] {\n  min-height: 500px;\n  height: 45vh;\n  display: flex;\n  justify-content: center;\n}\n\n.blogContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.blogContentContainer[_ngcontent-%COMP%] {\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 2vw;\n}\n\n.blogImageContainer[_ngcontent-%COMP%] {\n  height: 180px;\n  width: inherit;\n  overflow: hidden;\n}\n\n.blogContent[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.dateDiv[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #111b19;\n  color: white;\n}\n\n.blogImage1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('Mustang.png');\n  background-size: cover;\n  background-position: center;\n  transition-duration: 0.6s;\n}\n\n.blogImage1[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  transition-duration: 0.6s;\n}\n\n.blogImage2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('Trabi.jpg');\n  background-size: cover;\n  background-position: center;\n  transition-duration: 0.6s;\n}\n\n.blogImage2[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  transition-duration: 0.6s;\n}\n\n.blogImage3[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('Lenkrad.png');\n  background-size: cover;\n  background-position: center;\n  transition-duration: 0.6s;\n}\n\n.blogImage3[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  transition-duration: 0.6s;\n}\n\n.blogImage4[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('Cars.png');\n  background-size: cover;\n  background-position: center;\n  transition-duration: 0.6s;\n}\n\n.blogImage4[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  transition-duration: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFFUjs7QUFHQTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBLGdDQUFBOztBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUNGOztBQUNBO0VBQ0kseUNBQUE7RUFDQSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0Usd0JBQUE7RUFDRCx5QkFBQTtBQUdEOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFBQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUdKOztBQUFBO0VBQ0ksb0NBQUE7QUFHSjs7QUFBQTtFQUNJLG9DQUFBO0FBR0o7O0FBREE7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtBQUtGOztBQUhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7O0VBRUUsb0NBQUE7QUFRRjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFHQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQVNKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBTUo7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFMSTtFQUNJLHNCQUFBO0VBR0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFPUjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFSQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFXSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBUkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBV0o7O0FBUkE7RUFDSSxlQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQVdKOztBQVZJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQVlSOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQVlKOztBQVhJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQWFSOztBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQWFKOztBQVpJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQWNSOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQWNKOztBQWJJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQWVSIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vL05hdmlnYXRvclxuLnRvcENvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQmFja2dyb3VuZEltZy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm5hdkNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OjglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5pbWFnZU9obmV7XG4gICAgbWF4LWhlaWdodDo0dmg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGNvbG9yOiAjMTExYjE5O1xufVxuLmNOYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgY29sb3I6ICMwNDExMGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBwYWRkaW5nLXRvcDogN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZSZXN0Q29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaWNvbnNUb3Age1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgY29sb3I6ICMwNDExMGU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuICAgIH1cbn1cblxuLy9TZWFyY2hcbi5zZWFyY2hDb250YWluZXIge1xuICAgIGhlaWdodDogOTIlO1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI0LDc0LDExNSwxKSA3NSUsIHJnYmEoNTIsNjMsNzcsMSkgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zZWFyY2hDb250YWluZXIyIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBvcGFjaXR5OiAwLjk1O1xufVxuXG4uc2VhcmNoQ29udGFpbmVySGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBwYWRkaW5nOiAwcHggNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaW5wdXRXaWR0aCB7XG4gICAgd2lkdGg6ICAyNSU7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IzExMWIxOSAhaW1wb3J0YW50O1xuICB9XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1hcmdpbi10b3A6MjdweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxNnZ3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgIWltcG9ydGFudDtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGVsZW1lbnQgbGluZSovXG4gIGNhcmV0LWNvbG9yOiAjMTExYjE5ICAgICFpbXBvcnRhbnQ7XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMTExYjE5ICFpbXBvcnRhbnQ7XG4gfVxuI2xhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWFyY2hDb250YWluZXJCb3R0b20ge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGVja2JveCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpICA7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuLnNlYXJjaEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMWIxOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRDb250IHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMzMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnRDb250VG9wIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICBcbn1cblxuXG5cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNC41dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAgIzExMWIxOTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xufVxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLnRleHRDb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTo1dmg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cblxuXG4vL0ltcHJlc3N1bVxuLmltcHJlc3N1bUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0dmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW1wcmVzc3VtLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnQge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uaW1wcmVzc3VtQ29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByaXZDb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnNlcnZpY2VDb250YWluZXIge1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlcnZpY2VDb250YWluZXIxIHsgXG4gICAgd2lkdGg6IDYyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uc2VydmljZUNvbnRlbnRDb250YWluZXIge1xuICAgIGhlaWdodDogMTh2aDtcbiAgICB3aWR0aDo0NXZoO1xuICAgIG1heC1oZWlnaHQ6MzAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2ZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTFweCAxM3B4IDI3cHggLTE0cHggcmdiYSgxMjgsMTI4LDEyOCwxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTFweCAxM3B4IDI3cHggLTE0cHggcmdiYSgxMjgsMTI4LDEyOCwxKTtcbiAgICAgICAgYm94LXNoYWRvdzogLTExcHggMTNweCAyN3B4IC0xNHB4IHJnYmEoMTI4LDEyOCwxMjgsMSk7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIGNvbG9yOiAjZWFiNTVhO1xuICAgIH1cbn1cbi5zZXJ2aWNlQ29udGVudCB7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5zZXJ2aWNlSGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4KzJ2aCk7XG59XG4uc2VydmljZVRleHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAgY2FsYygxNnB4KzJ2aCk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBsaW5lLWhlaWdodDogY2FsYygxMHB4KzJ2aCk7XG59XG4uZGV0YWlsc0J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjU1YTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uYmxvZyB7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmxvZ0NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmxvZ0NvbnRlbnRDb250YWluZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbn1cblxuLmJsb2dJbWFnZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmxvZ0NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICAvLyB3aWR0aDogMjV2aDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGF0ZURpdiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMWIxOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYmxvZ0ltYWdlMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvTXVzdGFuZy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgICB9XG4gfVxuLmJsb2dJbWFnZTIgeyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9UcmFiaS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgICB9XG4gfVxuLmJsb2dJbWFnZTMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9MZW5rcmFkLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgIH1cbiB9XG4uYmxvZ0ltYWdlNCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0NhcnMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgfVxuIH1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return [{ type: src_assets_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }, { type: src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "oI+m":
/*!**********************************************************!*\
  !*** ./src/app/employee-page/employee-page.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageComponent", function() { return EmployeePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snack-bar/snack-bar.component */ "oxSv");
/* harmony import */ var _assets_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/services/employee.service */ "NbiC");
/* harmony import */ var src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/services/data-sharing.service */ "5gZA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../small-spinner/small-spinner.component */ "4gew");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");





















function EmployeePageComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r51.customer.firstName, " ", element_r51.customer.lastName, " ");
} }
function EmployeePageComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rental Car ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r52.rentalCar.make, " ", element_r52.rentalCar.model, " ");
} }
function EmployeePageComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " License Plate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.rentalCar.licensePlate, " ");
} }
function EmployeePageComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r54.contractId, " ");
} }
function EmployeePageComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Task Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r55.taskName, " ");
} }
function EmployeePageComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 30);
} }
function EmployeePageComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r56 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r11.expandedElement === element_r56 && ctx_r11.expanded ? "rotate(180deg)" : "rotate(0deg)");
} }
function EmployeePageComponent_td_50_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r62.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r62.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r62.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r62.price);
} }
function EmployeePageComponent_td_50_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Amount to transfer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_50_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.amountToTransfer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Positions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeePageComponent_td_50_div_2_div_9_Template, 17, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_50_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const element_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.postPayMaintenanceCost(element_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r58.amountToTransfer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r58.positions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r58.amountToTransfer);
} }
function EmployeePageComponent_td_50_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r69.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r69.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r69.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r69.price);
} }
function EmployeePageComponent_td_50_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Amount to transfer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_50_div_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.amountToTransfer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Positions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeePageComponent_td_50_div_3_div_9_Template, 17, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_50_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const element_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.postPayRepairCost(element_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r59.amountToTransfer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r59.positions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r59.amountToTransfer);
} }
function EmployeePageComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeePageComponent_td_50_div_2_Template, 12, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeePageComponent_td_50_div_3_Template, 12, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r12.columnsToDisplay2.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r57 == ctx_r12.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r57.definitionKey === "Activity_13lv9t9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r57.definitionKey === "Activity_1ropxls");
} }
function EmployeePageComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
function EmployeePageComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_tr_52_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const element_r74 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r75.expandedElement = ctx_r75.expandedElement === element_r74 ? null : element_r74; return ctx_r75.expanded = !ctx_r75.expanded; })("click", function EmployeePageComponent_tr_52_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const element_r74 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.requestData(element_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r74 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r14.expandedElement === element_r74);
} }
function EmployeePageComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
} }
function EmployeePageComponent_app_small_spinner_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spinner", 56);
} }
function EmployeePageComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r79.customer.firstName, " ", element_r79.customer.lastName, " ");
} }
function EmployeePageComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rental Car ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r80.rentalCar.make, " ", element_r80.rentalCar.model, " ");
} }
function EmployeePageComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " License Plate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r81.rentalCar.licensePlate, " ");
} }
function EmployeePageComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r82.contractId, " ");
} }
function EmployeePageComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Task Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r83.taskName, " ");
} }
function EmployeePageComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 30);
} }
function EmployeePageComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r84 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r28.expandedElement === element_r84 && ctx_r28.expanded ? "rotate(180deg)" : "rotate(0deg)");
} }
function EmployeePageComponent_td_79_div_2_mat_radio_group_9_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_2_mat_radio_group_9_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.coverage = $event; })("change", function EmployeePageComponent_td_79_div_2_mat_radio_group_9_Template_mat_radio_group_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r92.getCoveredAmount(ctx_r92.coverage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fully covered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Partially covered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Not covered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r89.coverage);
} }
function EmployeePageComponent_td_79_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Repair costs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.repairCosts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covered by insurance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeePageComponent_td_79_div_2_mat_radio_group_9_Template, 7, 1, "mat-radio-group", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Covered Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_2_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r95.coveredAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_79_div_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const element_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.postCheckInsuranceCoverage(_r88.value, element_r85.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r86.repairCosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.expandedElement === element_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r86.coveredAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r86.coverage === "partiallyCovered" && (ctx_r86.coveredAmount === undefined || ctx_r86.coveredAmount === null));
} }
function EmployeePageComponent_td_79_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1. Personal Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r101.driverFirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r103.driverLastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r104.driverEmail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r105.driverPhoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.driverStreet = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Postal Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.driverZipCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r108.driverCity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Driver License");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r109.driverLicense = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_mat_select_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.driverCountry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "England");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "France");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Driver Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r111.driverAge = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "2. Accident Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Incident Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_input_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r112.incidentDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-datepicker-toggle", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-datepicker", null, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Description of Incident: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "textarea", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_79_div_3_Template_textarea_ngModelChange_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r113.incidentSummary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_79_div_3_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const element_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.postFixIncidentReport(_r99.value, element_r85); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverFirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverStreet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverLicense);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.driverAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r100)("max", ctx_r87.maxFromDate)("ngModel", ctx_r87.incidentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.incidentSummary);
} }
function EmployeePageComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeePageComponent_td_79_div_2_Template, 19, 4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeePageComponent_td_79_div_3_Template, 85, 15, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r85 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r29.columnsToDisplay2.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r85 == ctx_r29.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r85.definitionKey === "sid-8D4D40F2-4C01-4F08-83E7-F97CF172F79C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r85.definitionKey === "Activity_1ux3rvh");
} }
function EmployeePageComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
function EmployeePageComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_tr_81_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const element_r116 = ctx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r117.expandedElement = ctx_r117.expandedElement === element_r116 ? null : element_r116; return ctx_r117.expanded = !ctx_r117.expanded; })("click", function EmployeePageComponent_tr_81_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const element_r116 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.requestData(element_r116); })("click", function EmployeePageComponent_tr_81_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.setDefaultValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r31.expandedElement === element_r116);
} }
function EmployeePageComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
} }
function EmployeePageComponent_app_small_spinner_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spinner", 56);
} }
function EmployeePageComponent_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r122.customer.firstName, " ", element_r122.customer.lastName, " ");
} }
function EmployeePageComponent_th_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rental Car ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r123.rentalCar.make, " ", element_r123.rentalCar.model, " ");
} }
function EmployeePageComponent_th_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " License Plate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r124.rentalCar.licensePlate, " ");
} }
function EmployeePageComponent_th_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r125.contractId, " ");
} }
function EmployeePageComponent_th_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Task Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeePageComponent_td_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r126.taskName, " ");
} }
function EmployeePageComponent_th_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 30);
} }
function EmployeePageComponent_td_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r127 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r45.expandedElement === element_r127 && ctx_r45.expanded ? "rotate(180deg)" : "rotate(0deg)");
} }
function EmployeePageComponent_td_107_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle given to customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_107_div_2_Template_mat_checkbox_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r132.vehicleGiven = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_107_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const element_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.recordVehicleHandover(element_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r129.vehicleGiven);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r129.vehicleGiven);
} }
function EmployeePageComponent_td_107_form_3_mat_radio_group_4_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_107_form_3_mat_radio_group_4_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r138.vehicleStatus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deficiencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No deficiencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r137.vehicleStatus);
} }
function EmployeePageComponent_td_107_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeePageComponent_td_107_form_3_mat_radio_group_4_Template, 5, 1, "mat-radio-group", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description of Defects: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_107_form_3_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r140.descriptionOfDefects = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_107_form_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const element_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.employeeCheckCar(_r136.value, element_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.expandedElement === element_r128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.descriptionOfDefects);
} }
function EmployeePageComponent_td_107_div_4_mat_radio_group_4_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_107_div_4_mat_radio_group_4_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r147.conductRepair = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r145.conductRepair);
} }
function EmployeePageComponent_td_107_div_4_mat_radio_group_8_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_td_107_div_4_mat_radio_group_8_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r149.drivable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r146.drivable)("disabled", ctx_r146.conductRepair === "conductRepair");
} }
function EmployeePageComponent_td_107_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Conduct repair ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeePageComponent_td_107_div_4_mat_radio_group_4_Template, 5, 1, "mat-radio-group", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Is the car still drivable ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployeePageComponent_td_107_div_4_mat_radio_group_8_Template, 5, 2, "mat-radio-group", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_td_107_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const element_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r151.evaluateCarState(element_r128, ctx_r151.conductRepair, ctx_r151.drivable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.expandedElement === element_r128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.expandedElement === element_r128);
} }
function EmployeePageComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeePageComponent_td_107_div_2_Template, 7, 2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeePageComponent_td_107_form_3_Template, 10, 2, "form", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeePageComponent_td_107_div_4_Template, 11, 2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r128 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r46.columnsToDisplay2.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r128 == ctx_r46.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r128.definitionKey === "Activity_118ekol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r128.definitionKey === "Activity_1q67vt7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r128.definitionKey === "Activity_07c9zca");
} }
function EmployeePageComponent_tr_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
function EmployeePageComponent_tr_109_Template(rf, ctx) { if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_tr_109_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157); const element_r155 = ctx.$implicit; const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r156.expandedElement = ctx_r156.expandedElement === element_r155 ? null : element_r155; return ctx_r156.expanded = !ctx_r156.expanded; })("click", function EmployeePageComponent_tr_109_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157); const element_r155 = ctx.$implicit; const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r158.requestData(element_r155); })("click", function EmployeePageComponent_tr_109_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.setDefaultValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r155 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r48.expandedElement === element_r155);
} }
function EmployeePageComponent_tr_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
} }
function EmployeePageComponent_app_small_spinner_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spinner", 56);
} }
const _c0 = function () { return ["expandedDetail"]; };
class EmployeePageComponent {
    constructor(employeeService, dataSharingService, router, snackBar) {
        this.employeeService = employeeService;
        this.dataSharingService = dataSharingService;
        this.router = router;
        this.snackBar = snackBar;
        this.columnsToDisplay2 = ["customer", "rentalCar", "licensePlate", "contractId", "taskName", "expandIcon"];
        this.coverage = "fullyCovered";
        this.repairCosts = 1520;
        this.coveredAmount = this.repairCosts;
        this.vehicleGiven = false;
        this.towingNeccessary = "noTowing";
        this.removeFromStock = false;
        this.vehicleStatus = "noDeficiencis";
        this.descriptionOfDefects = "";
        this.maitenanceCosts = 1452;
        this.vehicleManagementData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.accountingData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.administrationData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.isLoading = false;
        //Evalaute State
        this.conductRepair = "conductRepair";
        this.maxFromDate = new Date();
        this.expanded = false;
        this.getActiveTasks();
    }
    openSnackBar(input, msg) {
        this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"], {
            duration: 5 * 1000,
            verticalPosition: "bottom",
            horizontalPosition: "right",
            data: {
                success: input,
                message: msg
            }
        });
    }
    setDefaultValues() {
        this.vehicleGiven = false;
        this.towingNeccessary = "noTowing";
        this.removeFromStock = false;
        this.vehicleStatus = "noDeficiencis";
        this.descriptionOfDefects = "";
    }
    getActiveTasks() {
        this.isLoading = true;
        this.employeeService.getActiveTasks().subscribe(response => {
            var _a;
            console.log(response);
            let usableArrayVehicleManagement = [];
            let usableArrayAccounting = [];
            let usableArrayAdministration = [];
            (_a = response.body) === null || _a === void 0 ? void 0 : _a.forEach(element => {
                // if Vehicle Management Task
                if (element.definitionKey === "Activity_118ekol" ||
                    element.definitionKey === "Activity_1q67vt7" ||
                    element.definitionKey === "Activity_07c9zca") {
                    usableArrayVehicleManagement.push(element);
                }
                else if (element.definitionKey === "Activity_1ropxls" ||
                    element.definitionKey === "Activity_13lv9t9" ||
                    element.definitionKey === "sid-66AFA939-85CF-4B27-A653-888F57B9138D") {
                    usableArrayAccounting.push(element);
                }
                else {
                    usableArrayAdministration.push(element);
                }
            });
            this.isLoading = false;
            this.vehicleManagementData.data = usableArrayVehicleManagement;
            this.accountingData.data = usableArrayAccounting;
            this.administrationData.data = usableArrayAdministration;
        });
    }
    ngOnInit() {
    }
    log(e, i) {
        console.log(e);
        console.log(i);
        //   let length = document.getElementsByName("checkCarForm").length;
        //   document.getElementsByName("checkCarForm").item(length)?.scrollIntoView({ behavior: 'smooth' }
        //   );
    }
    scrollIntoView(input) {
        input.scrollIntoView;
    }
    compare(i1, i2) {
        console.log(i1 === i2);
    }
    getCoveredAmount(input) {
        if (input === "fullyCovered") {
            this.coveredAmount = this.repairCosts;
        }
        else if (input === "notCovered") {
            this.coveredAmount = 0;
        }
        else {
            this.coveredAmount = undefined;
        }
    }
    navigateHomePage() {
        this.router.navigateByUrl("/");
    }
    returnVehicle(input, input2) {
        this.employeeService.postReturnVehicle(input, input2).subscribe(response => {
            var _a;
            if ((response.status >= 200 && response.status < 300) && ((_a = response.body) === null || _a === void 0 ? void 0 : _a.response) === "Success") {
                this.openSnackBar(true, "Success!");
                this.carLicense = "";
                this.contractId = undefined;
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    requestData(element) {
        if (this.expanded) {
            if (element.definitionKey === "Activity_1ux3rvh") {
                this.employeeService.requestIncidentReportData(element.taskProcessInstanceId).subscribe(response => {
                    if (response.status >= 200 && response.status < 300) {
                        if (response.body != undefined) {
                            this.incidentId = response.body.id;
                            this.driverFirstName = response.body.driverFirstName;
                            this.driverLastName = response.body.driverLastName;
                            this.driverEmail = response.body.driverEmail;
                            this.driverPhoneNumber = response.body.driverPhoneNumber;
                            this.driverStreet = response.body.driverStreet;
                            this.driverZipCode = response.body.driverZipCode;
                            this.driverCity = response.body.driverCity;
                            this.driverLicense = response.body.driverLicense;
                            this.driverCountry = response.body.driverCountry;
                            this.driverAge = response.body.driverAge;
                            this.incidentSummary = response.body.incidentSummary;
                            // this.driverLastName = response
                        }
                    }
                });
            }
            else if (element.definitionKey === "Activity_1ropxls") {
                this.employeeService.getRepairCost(element.taskProcessInstanceId).subscribe(response => {
                    if (response.status >= 200 && response.status < 300) {
                        if (response.body != undefined) {
                            this.amountToTransfer = response.body.amount;
                            this.positions = response.body.positions;
                        }
                    }
                    else {
                        this.openSnackBar(false, "Error!");
                    }
                });
            }
            else if (element.definitionKey === "Activity_13lv9t9") {
                this.employeeService.getMaintanceCost(element.taskProcessInstanceId).subscribe(response => {
                    if (response.status >= 200 && response.status < 300) {
                        if (response.body != undefined) {
                            this.amountToTransfer = response.body.amount;
                            this.positions = response.body.positions;
                        }
                    }
                    else {
                        this.openSnackBar(false, "Error!");
                    }
                });
            }
        }
    }
    // ACCOUNTING
    postPayMaintenanceCost(element) {
        this.employeeService.postPayMaintenanceCosts(element).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    postPayRepairCost(element) {
        this.employeeService.postPayRepairCosts(element).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    // ADMINISTRATION
    postCheckInsuranceCoverage(input, input2) {
        this.employeeService.postCheckInsuranceCoverage(input, input2).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    postFixIncidentReport(input, element) {
        console.log();
        this.employeeService.postFixIncidentReport(input, element.taskId, this.incidentId).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    // VEHICLE MANAGEMENT
    recordVehicleHandover(input) {
        this.employeeService.postRecordVehicleHandover(input.taskId).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.carLicense = "";
                this.contractId = undefined;
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    employeeCheckCar(input, task) {
        this.employeeService.postEmployeeChecksCar(input, task.taskId).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    evaluateCarState(element, conductRepair, drivable) {
        this.employeeService.postEvaluateCarState(element, conductRepair, drivable).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
    postRemoveFromStock(element) {
        this.employeeService.postRemoveFromStock(element).subscribe(response => {
            if (response.status >= 200 && response.status < 300) {
                this.openSnackBar(true, "Success!");
                this.getActiveTasks();
            }
            else {
                this.openSnackBar(false, "Error!");
            }
        });
    }
}
EmployeePageComponent.ɵfac = function EmployeePageComponent_Factory(t) { return new (t || EmployeePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
EmployeePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeePageComponent, selectors: [["app-employee-page"]], decls: 112, vars: 21, consts: [[1, "pageWidth", "navContainer"], [1, "cName"], [1, "navRestContainer"], [1, "iconsTop", "material-icons", 3, "click"], [1, "iconsTop", "material-icons"], ["routerLink", "/carAccidentNotificationPage"], ["href", "/login"], [1, "tableContainer"], [2, "width", "90%"], [2, "margin-bottom", "0px"], [2, "width", "10%", "font-size", "20px"], ["name", "carLicense", "matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], [2, "width", "10%", "font-size", "20px", "margin-left", "20px"], ["name", "contractId", "matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "detailsButton", 2, "margin-bottom", "20px", 3, "disabled", "click"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "customer"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pointer", 4, "matCellDef"], ["matColumnDef", "rentalCar"], ["matColumnDef", "licensePlate"], ["matColumnDef", "contractId"], ["matColumnDef", "taskName"], ["matColumnDef", "expandIcon"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["style", "transform: scale(0.8); margin-top: 0; margin-bottom: 20px;", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "pointer"], [1, "material-icons"], ["mat-cell", ""], [1, "example-element-detail"], ["ngForm", "", "name", "payMaintenanceCarsAndCo", "class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], ["ngForm", "", "name", "payRepairCostsCarsAndCo", "class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], ["ngForm", "", "name", "payMaintenanceCarsAndCo", 1, "example-element-description", 2, "width", "100%"], ["payMaintenanceCarsAndCo", "ngForm"], [2, "font-size", "16px"], ["matInput", "", "type", "number", "name", "amountToTransfer ", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["mat-button", "", 1, "detailsButton", 3, "disabled", "click"], [2, "margin-right", "10px", "width", "5%"], ["id", "label"], ["matInput", "", "type", "number", "name", "positionId", "readonly", "", 3, "value"], [2, "margin-right", "10px", "width", "30%"], ["matInput", "", "type", "text", "name", "positionDescription", "readonly", "", 3, "value"], ["matInput", "", "type", "number", "name", "positionQuantity", "readonly", "", 3, "value"], [2, "margin-right", "10px", "width", "15%"], ["matInput", "", "type", "number", "name", "positionPrice", "readonly", "", 3, "value"], ["ngForm", "", "name", "payRepairCostsCarsAndCo", 1, "example-element-description", 2, "width", "100%"], ["payRepairCostsCarsAndCo", "ngForm"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [2, "transform", "scale(0.8)", "margin-top", "0", "margin-bottom", "20px"], ["ngForm", "", "name", "insuranceCoverageForm", "class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], ["name", "fixIncidentReport", "class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], ["ngForm", "", "name", "insuranceCoverageForm", 1, "example-element-description", 2, "width", "100%"], ["insuranceCoverageForm", "ngForm"], ["matInput", "", "type", "number", "name", "repairCosts", "readonly", "", 3, "ngModel", "ngModelChange"], ["aria-label", "Select an option", "name", "coverage", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["matInput", "", "type", "number", "required", "", "name", "coveredAmount", 3, "ngModel", "ngModelChange"], ["aria-label", "Select an option", "name", "coverage", 3, "ngModel", "ngModelChange", "change"], ["value", "fullyCovered", 2, "margin", "0px 15px"], ["value", "partiallyCovered", 2, "margin-right", "15px"], ["value", "notCovered", 2, "margin-right", "15px"], ["name", "fixIncidentReport", 1, "example-element-description", 2, "width", "100%"], [1, "pageWidth", "middleContainer"], ["ngForm", "", "name", "incidentReportForm", 1, "middleContentContainer"], ["incidentReportForm", "ngForm"], [1, "middleContentContainer2"], [1, "middleContentContainer2_all"], [1, "middleContentContainer2_left"], [1, "besides"], ["id", "inputWidth"], ["name", "driverFirstName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverLastName", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverEmail", "matInput", "", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverPhoneNumber", "matInput", "", "type", "tel", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverStreet", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [2, "width", "40%", "margin-right", "10%"], ["name", "driverZipCode", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [2, "width", "50%"], ["name", "driverCity", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverLicense", "matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "driverCountry", "disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "Germany"], ["value", "England"], ["value", "France"], [1, "birthDay"], ["name", "driverAge", "matInput", "", "type", "number", "required", "", "min", "18", 3, "ngModel", "ngModelChange"], [2, "width", "15%", "font-size", "20px"], ["matInput", "", "name", "incidentDate", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], [2, "font-size", "16px", "margin-top", "10px"], ["name", "descriptionOfIncident", "rows", "10", 2, "margin-top", "5px", "width", "100%", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "detailsButton", 3, "click"], ["class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], ["ngForm", "", "name", "checkCarForm", "class", "example-element-description", "style", "width: 100%;", 4, "ngIf"], [1, "example-element-description", 2, "width", "100%"], [2, "margin-right", "10px"], ["name", "vehicleGiven", 1, "checkbox", 2, "margin-right", "15px", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "detailsButton", 2, "margin-top", "10px", 3, "disabled", "click"], ["ngForm", "", "name", "checkCarForm", 1, "example-element-description", 2, "width", "100%"], ["checkCarForm", "ngForm"], ["name", "vehicleStatus", "aria-label", "Select an option", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "descriptionOfDefects", "rows", "10", 2, "margin-top", "5px", "width", "100%", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "detailsButton", 2, "margin-top", "10px", 3, "click"], ["name", "vehicleStatus", "aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["value", "deficiencies", 2, "margin", "0px 15px"], ["value", "noDeficiencis"], [2, "font-size", "16px", "margin-bottom", "15px"], ["style", "margin-bottom: 10px;", "name", "conductRepair", "aria-label", "Select an option", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "margin-bottom", "20px"], ["name", "drivable", "aria-label", "Select an option", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["name", "conductRepair", "aria-label", "Select an option", 2, "margin-bottom", "10px", 3, "ngModel", "ngModelChange"], ["value", "conductRepair", 2, "margin-right", "15px", "margin-top", "5px"], ["value", "noConductRepair"], ["name", "drivable", "aria-label", "Select an option", 3, "ngModel", "disabled", "ngModelChange"], ["value", "drivable", 2, "margin-right", "15px", "margin-top", "5px"], ["value", "notDrivable"]], template: function EmployeePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BVIS - Mobility Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_Template_span_click_4_listener() { return ctx.navigateHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " directions_car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Return Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "License Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_Template_input_ngModelChange_19_listener($event) { return ctx.carLicense = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contract ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeePageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.contractId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeePageComponent_Template_button_click_25_listener() { return ctx.returnVehicle(ctx.carLicense, ctx.contractId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Accounting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EmployeePageComponent_th_32_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EmployeePageComponent_td_33_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EmployeePageComponent_th_35_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EmployeePageComponent_td_36_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EmployeePageComponent_th_38_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EmployeePageComponent_td_39_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EmployeePageComponent_th_41_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EmployeePageComponent_td_42_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EmployeePageComponent_th_44_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EmployeePageComponent_td_45_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EmployeePageComponent_th_47_Template, 1, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EmployeePageComponent_td_48_Template, 4, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EmployeePageComponent_td_50_Template, 4, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EmployeePageComponent_tr_51_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EmployeePageComponent_tr_52_Template, 1, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EmployeePageComponent_tr_53_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EmployeePageComponent_app_small_spinner_54_Template, 1, 0, "app-small-spinner", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, EmployeePageComponent_th_60_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EmployeePageComponent_td_61_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, EmployeePageComponent_th_63_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, EmployeePageComponent_td_64_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EmployeePageComponent_th_66_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, EmployeePageComponent_td_67_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, EmployeePageComponent_th_69_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, EmployeePageComponent_td_70_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, EmployeePageComponent_th_73_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, EmployeePageComponent_td_74_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, EmployeePageComponent_th_76_Template, 1, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, EmployeePageComponent_td_77_Template, 4, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, EmployeePageComponent_td_79_Template, 4, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, EmployeePageComponent_tr_80_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, EmployeePageComponent_tr_81_Template, 1, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, EmployeePageComponent_tr_82_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, EmployeePageComponent_app_small_spinner_83_Template, 1, 0, "app-small-spinner", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Vehicle Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, EmployeePageComponent_th_89_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, EmployeePageComponent_td_90_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, EmployeePageComponent_th_92_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, EmployeePageComponent_td_93_Template, 2, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](94, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, EmployeePageComponent_th_95_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, EmployeePageComponent_td_96_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](97, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, EmployeePageComponent_th_98_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, EmployeePageComponent_td_99_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](100, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, EmployeePageComponent_th_101_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, EmployeePageComponent_td_102_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](103, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, EmployeePageComponent_th_104_Template, 1, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, EmployeePageComponent_td_105_Template, 4, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](106, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, EmployeePageComponent_td_107_Template, 5, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, EmployeePageComponent_tr_108_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, EmployeePageComponent_tr_109_Template, 1, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, EmployeePageComponent_tr_110_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, EmployeePageComponent_app_small_spinner_111_Template, 1, 0, "app-small-spinner", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carLicense);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contractId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.carLicense && ctx.contractId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.accountingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.administrationData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.vehicleManagementData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _small_spinner_small_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SmallSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"]], styles: [".pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.navContainer[_ngcontent-%COMP%] {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #2b2b2b;\n}\n\n.cName[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-left: 20px;\n  font-size: 3vh;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.navRestContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.iconsTop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n  transform: scale(1.5);\n  color: white;\n}\n\n.iconsTop[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.8);\n}\n\na[_ngcontent-%COMP%] {\n  width: 100%;\n  text-decoration: none;\n  background-color: none;\n  color: white;\n}\n\n.tableContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #111b19 !important;\n  \n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #111b19 !important;\n  \n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n.detailsButton[_ngcontent-%COMP%] {\n  background-color: #eab55a;\n  color: white;\n  font-size: 18px;\n  transition-duration: 0.2s !important;\n  transition-timing-function: linear !important;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #2b2b2b;\n  color: white;\n  font-size: 16px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n  .mat-button.mat-button-disabled.mat-button-disabled {\n  color: white;\n  background-color: var(--grey);\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n}\n\n  .mat-form-field-underline .mat-form-field-ripple {\n  \n  background-color: #111b19 !important;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #111b19 !important;\n}\n\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #111b19 !important;\n}\n\n  .mat-select-panel {\n  margin-top: 27px !important;\n  margin-left: 15px !important;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-infix {\n  width: 5vw !important;\n}\n\n  .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #111b19 !important;\n}\n\n  .mat-checkbox-checked .mat-checkbox-background,   .mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #111b19 !important;\n}\n\n.pageWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.middleContentContainer[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.middleContentContainer2[_ngcontent-%COMP%] {\n  width: inherit;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 50px;\n}\n\n.middleContentContainer2_all[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 100%;\n  display: flex;\n}\n\n.middleContentContainer2_left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.besides[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n#inputWidth[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 42.5%;\n  margin-right: 5%;\n}\n\ntd[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  transition-duration: 0.6s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VtcGxveWVlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFHUjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBS0o7O0FBRkU7RUFDRSxTQUFBO0FBS0o7O0FBRkU7RUFDRSxzQkFBQTtBQUtKOztBQUZFO0VBQ0UsbUJBQUE7QUFLSjs7QUFGRTtFQUNFLHNCQUFBO0FBS0o7O0FBRkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBS0o7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZFO0VBQ0UsYUFBQTtBQUtKOztBQUZFO0VBQ0UsWUFBQTtBQUtKOztBQUZFO0VBQ0Usb0NBQUE7RUFBdUMsNEJBQUE7QUFNM0M7O0FBSEE7RUFDSSxnQ0FBQTtFQUFtQywwQkFBQTtBQU92Qzs7QUFMQTtFQUNFLG9DQUFBO0FBUUY7O0FBTEE7RUFDRSx5QkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFDQSw2Q0FBQTtBQUtGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQUtGOztBQUZBO0VBQ0UseUNBQUE7RUFDQSxvQ0FBQTtBQUtGOztBQUhBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQU1BOztBQUhBO0VBQ0UseUJBQUE7QUFNRjs7QUFIQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUFNRjs7QUFIQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFNRjs7QUFIQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFNRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSxvQ0FBQTtBQUtGOztBQUhBOztFQUVFLG9DQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBTUY7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBS0Y7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSEE7RUFDRSxvQ0FBQTtBQU1GIiwiZmlsZSI6ImVtcGxveWVlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXZDb250YWluZXIge1xuICAgIGhlaWdodDo1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xufVxuLmNOYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gcGFkZGluZy10b3A6IDdweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2UmVzdENvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uc1RvcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuICAgIH1cbn1cbmEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWJsZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgfVxuICBcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDo6bmctZGVlcCAgIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFiMTkgICFpbXBvcnRhbnQ7IC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovICBcbn1cbiAgICBcbjo6bmctZGVlcCAgIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExMWIxOSAgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovICBcbn1cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICAhaW1wb3J0YW50OyAgXG59XG5cbi5kZXRhaWxzQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjU1YTtcbiAgLy8gd2lkdGg6IDIwMHB4O1xuICAvLyBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWltcG9ydGFudDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjojMTExYjE5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4vKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG5jb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICMxMTFiMTkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgbWFyZ2luLXRvcDoyN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC8vIG1pbi13aWR0aDogMTZ2dyAhaW1wb3J0YW50O1xufVxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiA1dncgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYjE5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMWIxOSAhaW1wb3J0YW50O1xufVxuXG4ucGFnZVdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taWRkbGVDb250ZW50Q29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gYm9yZGVyOiBzb2xpZDtcbn1cblxuLm1pZGRsZUNvbnRlbnRDb250YWluZXIyIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjJfYWxsIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWlkZGxlQ29udGVudENvbnRhaW5lcjJfbGVmdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5iZXNpZGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4jaW5wdXRXaWR0aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDQyLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxudGQsIHRyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzICFpbXBvcnRhbnQ7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-page',
                templateUrl: './employee-page.component.html',
                styleUrls: ['./employee-page.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _assets_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }, { type: src_assets_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();
// -------------------------------------------------------------------------------------
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//Accounting
const ELEMENT_DATA1 = [
    {
        processId: "sd23r32kvsd",
        taskId: "sid-71EAB4D7-E226-4AD8-9F19-A52A95780ED6",
        state: "Pay maintenance to Cars & Co",
        customer: 'Angelo Merte',
        userAction: true,
    },
    {
        processId: "sd23r32kvsd",
        taskId: "sid-A7A9603D-0E90-4851-962C-F152ACE0BD64",
        state: "Pay repair costs to Cars & Co",
        customer: 'Angelo Merte',
        userAction: false,
    },
    {
        processId: "sd23r32kvsd",
        taskId: "sid-66AFA939-85CF-4B27-A653-888F57B9138D",
        state: "Pay towing service to Cars & Co",
        customer: 'Angelo Merte',
        userAction: false,
    }
];
//Administration
const ELEMENT_DATA2 = [
    {
        processId: "sd23r32kvsd",
        taskId: "sid-8D4D40F2-4C01-4F08-83E7-F97CF172F79C",
        state: "Check insurance coverage",
        customer: 'Celo Abdi',
        userAction: true,
    },
];
//Vehicle Management
const ELEMENT_DATA3 = [
    {
        processId: "sd23r32kvsd",
        taskId: "sid-47E79B33-F4D6-4011-AC06-6F72855966F2",
        state: "Check Car",
        customer: 'Hafti Abi',
        userAction: true,
    },
    {
        processId: "sd23r32kvsd",
        taskId: "sid-F16E542C-E06B-41AE-9A1F-E3C007775C24",
        state: "Record vehicle handover",
        customer: 'Angela Merkel',
        userAction: true,
    },
    {
        processId: "sd23r32kvsd",
        taskId: "sid-09A08190-A8D9-436D-8BFA-D372FB3185E7",
        state: "Remove from Stock",
        customer: 'Angelo Merte',
        userAction: true,
    }
];


/***/ }),

/***/ "oxSv":
/*!**************************************************!*\
  !*** ./src/app/snack-bar/snack-bar.component.ts ***!
  \**************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SnackBarComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.data.message, " ");
} }
function SnackBarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SnackBarComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.data.message, " ");
} }
function SnackBarComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SnackBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
SnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 5, vars: 6, consts: [[1, "snackBarContainer", 2, "padding", "0 10px"], [4, "ngIf"], ["style", "padding:0 10px ;", "class", "material-icons", 4, "ngIf"], [1, "material-icons", 2, "padding", "0 10px"]], template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SnackBarComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SnackBarComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SnackBarComponent_span_3_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SnackBarComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.data.success ? "green" : "#dc3545");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".snackBarContainer[_ngcontent-%COMP%] {\n  color: white;\n  height: 50px;\n  border-radius: 5px;\n  opacity: 95%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-snack-bar-container {\n  padding: 0 !important;\n  min-width: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NuYWNrLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJzbmFjay1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc25hY2tCYXJDb250YWluZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG9wYWNpdHk6IDk1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snack-bar',
                templateUrl: './snack-bar.component.html',
                styleUrls: ['./snack-bar.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/services/login.service */ "EEyO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");








function LoginComponent_mat_hint_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username and/or Password is wrong!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.hint = false;
        if (sessionStorage.length !== 0) {
            this.router.navigateByUrl("employeePage");
        }
    }
    ngOnInit() {
    }
    login(uName, pWord) {
        this.user = {
            username: uName,
            password: pWord
        };
        this.loginService.login(this.user).subscribe(response => {
            if (response.status == 200) {
                sessionStorage.setItem("currentUser", this.user.username);
                sessionStorage.setItem("token", response.body);
                this.router.navigateByUrl("employeePage");
            }
        });
        // if(sessionStorage.length === 0) {
        //   setTimeout((): boolean => {
        //     this.hint = true;
        //     return this.hint;
        //   },500);
        // }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 3, consts: [[1, "pageContainer"], [1, "loginContainer"], [1, "logoContainer"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/Logo.png", "alt", "Logo", 1, "logoImg"], [1, "credentialsContainer"], [1, "emailContainer"], [1, "iconContainer"], [1, "material-icons"], ["name", "username", "type", "email", "placeholder", "E-Mail", 1, "inputContainer", 3, "ngModel", "ngModelChange"], [1, "pwContainer"], ["name", "password", "type", "password", "placeholder", "Password", 1, "inputContainer", 3, "ngModel", "ngModelChange"], ["class", "hintContainer", "style", "color:red; text-align: end; font-size: 12px;", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "container"], [1, "registerForgot"], [1, "imageContainer"], [1, "hintContainer", 2, "color", "red", "text-align", "end", "font-size", "12px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " lock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_mat_hint_17_Template, 2, 0, "mat-hint", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.login(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hint);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"]], styles: [".pageContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.loginContainer[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n}\n\n.logoContainer[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 100%;\n  background-color: #2b2b2b;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logoImg[_ngcontent-%COMP%] {\n  max-height: 25vh;\n}\n\n.credentialsContainer[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 100%;\n  background-color: #2b2b2b;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.emailContainer[_ngcontent-%COMP%], .pwContainer[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .container[_ngcontent-%COMP%], .hintContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 80%;\n  margin-bottom: 25px;\n}\n\n.emailContainer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.inputContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 7vh;\n  min-height: 30px;\n  max-height: 55px;\n  border: solid var(--creme) 1px;\n  border-radius: 0px 10px 10px 0px;\n  font-size: 1vmax;\n  outline: none;\n  padding: 0px 10px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n}\n\n.iconContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  border: solid var(--creme) 1px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px 0px 0px 10px;\n  font-weight: bold;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  font-size: 2vmax;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 6vh;\n  background-color: #eab55a;\n  color: white;\n  font-family: \"Roboto\" \"sans-serif\";\n  font-size: 1.2vmax;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  max-height: 50px;\n}\n\n.container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  color: white;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  background-image: url('CarImage.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.registerForgot[_ngcontent-%COMP%] {\n  font-size: 1.1vmax;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZUNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmxvZ2luQ29udGFpbmVye1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvQ29udGFpbmVye1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG5cbn1cbi5sb2dve1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvTG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvSW1ne1xuICBtYXgtaGVpZ2h0OiAyNXZoO1xufVxuLmNyZWRlbnRpYWxzQ29udGFpbmVye1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IzJiMmIyYjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4vLyBFbWFpbCBJbnB1dFxuLmVtYWlsQ29udGFpbmVyLCAucHdDb250YWluZXIsIGJ1dHRvbiwgLmNvbnRhaW5lciwgLmhpbnRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5lbWFpbENvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pbnB1dENvbnRhaW5lcntcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDU1cHg7XG4gIGJvcmRlcjogc29saWQgdmFyKC0tY3JlbWUpIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gIC8vIGZvbnQtc2l6ZTogY2FsYygxMHB4KzEwMCUpO1xuICBmb250LXNpemU6IDF2bWF4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaWNvbkNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlcjogc29saWQgdmFyKC0tY3JlbWUpIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICMyYjJiMmI7XG4gIGZvbnQtc2l6ZToydm1heDtcblxufVxuXG5cbmJ1dHRvbiB7XG4gIGhlaWdodDogNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFiNTVhO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXNpemU6IDEuMnZtYXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29udGFpbmVye1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy9JbWFnZVxuLmltYWdlQ29udGFpbmVye1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQ2FySW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG59XG5cblxuLnJlZ2lzdGVyRm9yZ290IHtcbiAgZm9udC1zaXplOiAxLjF2bWF4O1xufVxuXG5cblxuXG5cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _assets_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map