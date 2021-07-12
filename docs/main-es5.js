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
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-content/main-content.component */
    "./src/app/main-content/main-content.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'map-polyline-tool';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-content");
        }
      },
      directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__["MainContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main-content/main-content.component */
    "./src/app/main-content/main-content.component.ts");
    /* harmony import */


    var _main_content_leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main-content/leaflet-map/leaflet-map.component */
    "./src/app/main-content/leaflet-map/leaflet-map.component.ts");
    /* harmony import */


    var _main_content_sidebar_view_sidebar_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main-content/sidebar-view/sidebar-view.component */
    "./src/app/main-content/sidebar-view/sidebar-view.component.ts");
    /* harmony import */


    var _toolbar_export_data_export_data_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./toolbar/export-data/export-data.component */
    "./src/app/toolbar/export-data/export-data.component.ts");
    /* harmony import */


    var _main_content_sidebar_view_polyline_style_options_polyline_style_options_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./main-content/sidebar-view/polyline-style-options/polyline-style-options.component */
    "./src/app/main-content/sidebar-view/polyline-style-options/polyline-style-options.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_11__["MainContentComponent"], _main_content_leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_12__["LeafletMapComponent"], _main_content_sidebar_view_sidebar_view_component__WEBPACK_IMPORTED_MODULE_13__["SidebarViewComponent"], _toolbar_export_data_export_data_component__WEBPACK_IMPORTED_MODULE_14__["ExportDataComponent"], _main_content_sidebar_view_polyline_style_options_polyline_style_options_component__WEBPACK_IMPORTED_MODULE_15__["PolylineStyleOptionsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_11__["MainContentComponent"], _main_content_leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_12__["LeafletMapComponent"], _main_content_sidebar_view_sidebar_view_component__WEBPACK_IMPORTED_MODULE_13__["SidebarViewComponent"], _toolbar_export_data_export_data_component__WEBPACK_IMPORTED_MODULE_14__["ExportDataComponent"], _main_content_sidebar_view_polyline_style_options_polyline_style_options_component__WEBPACK_IMPORTED_MODULE_15__["PolylineStyleOptionsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-content/leaflet-map/leaflet-map.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/main-content/leaflet-map/leaflet-map.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LeafletMapComponent */

  /***/
  function srcAppMainContentLeafletMapLeafletMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeafletMapComponent", function () {
      return LeafletMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var _shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/map-data.service */
    "./src/app/shared/map-data.service.ts");

    var LeafletMapComponent = /*#__PURE__*/function () {
      function LeafletMapComponent(mapDataService) {
        _classCallCheck(this, LeafletMapComponent);

        this.mapDataService = mapDataService;
        this.mapCenter = [18.51, 80.81];
        this.defaultZoom = 4;
        this.minZoom = 2;
        this.maxZoom = 21;
        this.maxNativeZoom = 19;
        this.zoomControl = true;
        this.polylineOptions = {
          color: 'red',
          smoothFactor: 1,
          weight: 4
        };
        this.dataPoints = [];
        this.dataMarkers = [];
        this.baseLayers = {
          'Street': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["STREETMAP_TILE_LAYER"], {
            attribution: src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["STREETMAP_ATTRIBUTION"],
            maxNativeZoom: this.maxNativeZoom,
            maxZoom: this.maxZoom
          }),
          'Satellite': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["SATALLITEMAP_TILE_LAYER"], {
            attribution: src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["SATALLITEMAP_ATTRIBUTION"],
            maxNativeZoom: this.maxNativeZoom,
            maxZoom: this.maxZoom
          })
        };
      }

      _createClass(LeafletMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initMap();
          this.setupMapLayers(this.leafletMap);
          this.initMapEvents();
          this.subscribeToMapEvents();
        }
      }, {
        key: "initMap",
        value: function initMap() {
          this.leafletMap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('leaflet-map', {
            center: this.mapCenter,
            minZoom: this.minZoom,
            zoom: this.defaultZoom,
            zoomControl: this.zoomControl
          });
        }
      }, {
        key: "setupMapLayers",
        value: function setupMapLayers(map) {
          leaflet__WEBPACK_IMPORTED_MODULE_1__["control"].layers(this.baseLayers, null, {
            collapsed: true
          }).addTo(map);
          this.baseLayers["Street"].addTo(map);
        }
      }, {
        key: "initMapEvents",
        value: function initMapEvents() {
          var _this = this;

          this.leafletMap.on('click', function (event) {
            _this.mapDataService.onMapClick(event);
          });
          this.leafletMap.on('mousemove', function (event) {
            _this.mapDataService.onMapMouseOver(event);
          });
          this.leafletMap.on('zoom', function () {
            _this.mapDataService.onMapZoomLevelChanged(_this.leafletMap.getZoom());
          });
          this.leafletMap.on('move', function () {
            _this.mapDataService.onMapCenterChanged(_this.leafletMap.getBounds().getCenter());
          });
          this.mapDataService.onMapZoomLevelChanged(this.leafletMap.getZoom());
          this.mapDataService.onMapCenterChanged(this.leafletMap.getBounds().getCenter());
        }
      }, {
        key: "subscribeToMapEvents",
        value: function subscribeToMapEvents() {
          var _this2 = this;

          this.mapDataService.getMapActionEmitter().subscribe(function (mapActionEvent) {
            _this2.drawOrUpdateObjectsOnMap(mapActionEvent);
          });
        }
      }, {
        key: "drawOrUpdateObjectsOnMap",
        value: function drawOrUpdateObjectsOnMap(mapActionEvent) {
          var _this3 = this;

          switch (mapActionEvent.action) {
            case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].ADD:
              var marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"](mapActionEvent.latlng).addTo(this.leafletMap);
              this.dataMarkers.push(marker);
              this.dataPoints.push(mapActionEvent.latlng);

              if (this.dataPoints.length == 2) {
                this.polyline = leaflet__WEBPACK_IMPORTED_MODULE_1__["polyline"](this.dataPoints, this.polylineOptions).addTo(this.leafletMap);
              } else if (this.dataPoints.length > 2) {
                this.polyline.addLatLng(mapActionEvent.latlng);
              }

              break;

            case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].REMOVE:
              if (this.dataMarkers.length > 0) {
                var marker = this.dataMarkers.pop();
                this.leafletMap.removeLayer(marker);
              }

              if (this.dataPoints.length > 0) {
                this.dataPoints.pop();
                this.polyline.setLatLngs(this.dataPoints);
              }

              break;

            case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].CLEAR:
              this.dataMarkers.forEach(function (marker) {
                _this3.leafletMap.removeLayer(marker);
              });

              if (this.leafletMap.hasLayer(this.polyline)) {
                this.leafletMap.removeLayer(this.polyline);
              }

              this.dataMarkers.length = 0;
              this.dataPoints.length = 0;
              break;

            case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].UPDATE_STYLE:
              this.polyline.setStyle({
                color: mapActionEvent.style.color,
                opacity: mapActionEvent.style.opacity,
                weight: mapActionEvent.style.weight
              });
              this.polylineOptions.color = mapActionEvent.style.color;
              this.polylineOptions.smoothFactor = mapActionEvent.style.opacity;
              this.polylineOptions.weight = mapActionEvent.style.weight;
              break;
          }
        }
      }]);

      return LeafletMapComponent;
    }();

    LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) {
      return new (t || LeafletMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__["MapDataService"]));
    };

    LeafletMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeafletMapComponent,
      selectors: [["app-leaflet-map"]],
      decls: 1,
      vars: 0,
      consts: [["id", "leaflet-map", 1, "map-container"]],
      template: function LeafletMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".map-container[_ngcontent-%COMP%] {\n    width: 73vw;\n    height: 100%;\n    position: relative;\n    vertical-align: bottom;\n    z-index: 1;\n    position: relative;\n    top: 0;\n    left: 0;\n}\n\n\n.leaflet-grab[_ngcontent-%COMP%] {\n\tcursor: auto;\n}\n\n\n.leaflet-dragging[_ngcontent-%COMP%]   .leaflet-grab[_ngcontent-%COMP%]{\n\tcursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L2xlYWZsZXQtbWFwL2xlYWZsZXQtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYOzs7QUFHQTtDQUNDLFlBQVk7QUFDYjs7O0FBRUE7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbnRlbnQvbGVhZmxldC1tYXAvbGVhZmxldC1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzN2dztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cblxuLmxlYWZsZXQtZ3JhYiB7XG5cdGN1cnNvcjogYXV0bztcbn1cblxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYntcblx0Y3Vyc29yOiBtb3ZlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leaflet-map',
          templateUrl: './leaflet-map.component.html',
          styleUrls: ['./leaflet-map.component.css']
        }]
      }], function () {
        return [{
          type: _shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__["MapDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-content/main-content.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main-content/main-content.component.ts ***!
    \********************************************************/

  /*! exports provided: MainContentComponent */

  /***/
  function srcAppMainContentMainContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainContentComponent", function () {
      return MainContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./leaflet-map/leaflet-map.component */
    "./src/app/main-content/leaflet-map/leaflet-map.component.ts");
    /* harmony import */


    var _sidebar_view_sidebar_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar-view/sidebar-view.component */
    "./src/app/main-content/sidebar-view/sidebar-view.component.ts");

    var MainContentComponent = /*#__PURE__*/function () {
      function MainContentComponent() {
        _classCallCheck(this, MainContentComponent);
      }

      _createClass(MainContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainContentComponent;
    }();

    MainContentComponent.ɵfac = function MainContentComponent_Factory(t) {
      return new (t || MainContentComponent)();
    };

    MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainContentComponent,
      selectors: [["app-main-content"]],
      decls: 3,
      vars: 0,
      consts: [[1, "main-content"]],
      template: function MainContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-leaflet-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar-view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_1__["LeafletMapComponent"], _sidebar_view_sidebar_view_component__WEBPACK_IMPORTED_MODULE_2__["SidebarViewComponent"]],
      styles: [".main-content[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 93.3vh;\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogOTMuM3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-content',
          templateUrl: './main-content.component.html',
          styleUrls: ['./main-content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-content/sidebar-view/polyline-style-options/polyline-style-options.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/main-content/sidebar-view/polyline-style-options/polyline-style-options.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: PolylineStyleOptionsComponent */

  /***/
  function srcAppMainContentSidebarViewPolylineStyleOptionsPolylineStyleOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylineStyleOptionsComponent", function () {
      return PolylineStyleOptionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/map-data.service */
    "./src/app/shared/map-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0(a0) {
      return {
        "background": a0
      };
    };

    function PolylineStyleOptionsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolylineStyleOptionsComponent_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var paint_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.changeColor(paint_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paint_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, paint_r3));
      }
    }

    var PolylineStyleOptionsComponent = /*#__PURE__*/function () {
      function PolylineStyleOptionsComponent(mapDataService) {
        _classCallCheck(this, PolylineStyleOptionsComponent);

        this.mapDataService = mapDataService;
        this.listOfColors = ['#ffffff', '#000105', '#3e6158', '#3f7a89', '#96c582', '#b7d5c4', '#bcd6e7', '#7c90c1', '#9d8594', '#dad0d8', '#4b4fce', '#4e0a77', '#a367b5', '#ee3e6d', '#d63d62', '#f46600', '#cf0500', '#efabbd', '#8e0622', '#f0b89a', '#f0ca68', '#62382f', '#c97545', '#c1800b'];
        this.styleViewCloseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PolylineStyleOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToEvents();
        }
      }, {
        key: "subscribeToEvents",
        value: function subscribeToEvents() {
          var _this4 = this;

          this.mapDataService.getStyleOptionsEventEmitter().subscribe(function (options) {
            _this4.color = options.color;
            _this4.selectedColor = options.color;
            _this4.userSetColor = options.color;
            _this4.strokeOpacitySliderSetValue = options.opacity;
            _this4.strokeWeightSliderSetValue = options.weight;
            _this4.strokeOpacitySliderValue = options.opacity;
            _this4.strokeWeightSliderValue = options.weight;
          });
        }
      }, {
        key: "closeStyleOptionsView",
        value: function closeStyleOptionsView() {
          this.styleViewCloseEvent.emit(true);
          var style = {
            'color': this.userSetColor,
            'opacity': this.strokeOpacitySliderSetValue,
            'weight': this.strokeWeightSliderSetValue
          };
          this.mapDataService.saveStyles(style);
        }
      }, {
        key: "changeColor",
        value: function changeColor(color) {
          this.color = color;
        }
      }, {
        key: "updateStrokeOpacity",
        value: function updateStrokeOpacity(event) {
          this.strokeOpacitySliderValue = event.value;
        }
      }, {
        key: "updateStrokeWeight",
        value: function updateStrokeWeight(event) {
          this.strokeWeightSliderValue = event.value;
        }
      }, {
        key: "saveStyleOptions",
        value: function saveStyleOptions() {
          this.selectedColor = this.color;
          this.userSetColor = this.color;
          this.strokeOpacitySliderSetValue = this.strokeOpacitySliderValue;
          this.strokeWeightSliderSetValue = this.strokeWeightSliderValue;
          var style = {
            'color': this.color,
            'opacity': this.strokeOpacitySliderSetValue,
            'weight': this.strokeWeightSliderSetValue
          };
          this.mapDataService.updateStyles({
            'action': src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION"].UPDATE_STYLE,
            'style': style
          });
          this.mapDataService.saveStyles(style);
          this.styleViewCloseEvent.emit(true);
        }
      }]);

      return PolylineStyleOptionsComponent;
    }();

    PolylineStyleOptionsComponent.ɵfac = function PolylineStyleOptionsComponent_Factory(t) {
      return new (t || PolylineStyleOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_2__["MapDataService"]));
    };

    PolylineStyleOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PolylineStyleOptionsComponent,
      selectors: [["app-polyline-style-options"]],
      inputs: {
        color: "color"
      },
      outputs: {
        styleViewCloseEvent: "styleViewCloseEvent"
      },
      decls: 32,
      vars: 9,
      consts: [[1, "opened"], [1, "close", 3, "click"], [1, "summary-info"], [1, "info"], [1, "style"], [1, "style-value"], [1, "circle", 3, "ngStyle"], [1, "colors"], ["class", "circle", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["color", "primary", "min", "0", "max", "1", "step", "0.1", 3, "thumbLabel", "value", "change"], ["strokeOpacity", ""], ["color", "primary", "min", "0", "max", "20", "step", "1", 3, "thumbLabel", "value", "change"], ["strokeWeight", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "circle", 3, "ngStyle", "click"]],
      template: function PolylineStyleOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolylineStyleOptionsComponent_Template_p_click_1_listener() {
            return ctx.closeStyleOptionsView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selected color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stroke Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PolylineStyleOptionsComponent_div_14_Template, 1, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stroke Opacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slider", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PolylineStyleOptionsComponent_Template_mat_slider_change_18_listener($event) {
            return ctx.updateStrokeOpacity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stroke Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-slider", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PolylineStyleOptionsComponent_Template_mat_slider_change_24_listener($event) {
            return ctx.updateStrokeWeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Click on save to apply the changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolylineStyleOptionsComponent_Template_button_click_30_listener() {
            return ctx.saveStyleOptions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thumbLabel", true)("value", ctx.strokeOpacitySliderSetValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thumbLabel", true)("value", ctx.strokeWeightSliderSetValue);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".opened[_ngcontent-%COMP%] {\n  box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.07);\n  background: #fff;\n  width: 16vw;\n  padding: 12px;\n  border-radius: 4px;\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 1;\n  margin-left: 16px;\n}\n\n.opened[_ngcontent-%COMP%]:after {\n  border: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n  content: '';\n  left: 10px;\n  position: absolute;\n  top: -20px;\n  z-index: 10;\n  text-align: center;\n}\n\n.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px 8px;\n  color: black;\n  font-size: medium;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  background: rgb(221, 221, 221);\n}\n\n.summary-info[_ngcontent-%COMP%] {\n  box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.4);\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n  display: flex;\n  box-sizing: border-box;\n  margin-top: 20px;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n}\n\np.style[_ngcontent-%COMP%] {\n  color: #000;\n  margin-bottom: 5px;\n}\n\np.style-value[_ngcontent-%COMP%] {\n  color: #595b65;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n}\n\n.colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 40px 0 0;\n  box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.4);\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  box-sizing: border-box;\n  border-radius: 100%;\n  cursor: pointer;\n  border: 1px solid #dadada;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  margin: 4px auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 10vw;\n  padding: 0;\n  box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.4);\n  background: rgb(250, 250, 250);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L3NpZGViYXItdmlldy9wb2x5bGluZS1zdHlsZS1vcHRpb25zL3BvbHlsaW5lLXN0eWxlLW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsK0NBQStDO0VBQy9DLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLCtDQUErQztFQUMvQyw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1jb250ZW50L3NpZGViYXItdmlldy9wb2x5bGluZS1zdHlsZS1vcHRpb25zL3BvbHlsaW5lLXN0eWxlLW9wdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuZWQge1xuICBib3gtc2hhZG93OiAwIDdweCAxM3B4IDAgcmdiYSg4NiwgOTUsIDEwMiwgMC4wNyk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxNnZ3O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5vcGVuZWQ6YWZ0ZXIge1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ZmZjtcbiAgY29udGVudDogJyc7XG4gIGxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgei1pbmRleDogMTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbn1cblxuLnN1bW1hcnktaW5mbyB7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDEzcHggMCByZ2JhKDg2LCA5NSwgMTAyLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG59XG5cbnAuc3R5bGUge1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5wLnN0eWxlLXZhbHVlIHtcbiAgY29sb3I6ICM1OTViNjU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY29sb3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OiA0MHB4IDAgMDtcbiAgYm94LXNoYWRvdzogMCA3cHggMTNweCAwIHJnYmEoODYsIDk1LCAxMDIsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogNHB4IGF1dG87XG59XG5cbmgzIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDEwdnc7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDEzcHggMCByZ2JhKDg2LCA5NSwgMTAyLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolylineStyleOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-polyline-style-options',
          templateUrl: './polyline-style-options.component.html',
          styleUrls: ['./polyline-style-options.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_2__["MapDataService"]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleViewCloseEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main-content/sidebar-view/sidebar-view.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main-content/sidebar-view/sidebar-view.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SidebarViewComponent */

  /***/
  function srcAppMainContentSidebarViewSidebarViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarViewComponent", function () {
      return SidebarViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/map-data.service */
    "./src/app/shared/map-data.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _polyline_style_options_polyline_style_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./polyline-style-options/polyline-style-options.component */
    "./src/app/main-content/sidebar-view/polyline-style-options/polyline-style-options.component.ts");

    function SidebarViewComponent_app_polyline_style_options_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-polyline-style-options", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("styleViewCloseEvent", function SidebarViewComponent_app_polyline_style_options_9_Template_app_polyline_style_options_styleViewCloseEvent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.closeStyleViewEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarViewComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r4.lat, " , ", item_r4.lng, " ");
      }
    }

    var SidebarViewComponent = /*#__PURE__*/function () {
      function SidebarViewComponent(mapDataService) {
        _classCallCheck(this, SidebarViewComponent);

        this.mapDataService = mapDataService;
        this.observableData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.mouseCursor = 'Move cursor';
        this.show = false;
      }

      _createClass(SidebarViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToMapEvents();
        }
      }, {
        key: "clearMap",
        value: function clearMap() {
          this.mapDataService.clearDataPoints();
        }
      }, {
        key: "deleteLastDataPoint",
        value: function deleteLastDataPoint() {
          this.mapDataService.deleteLastDataPoint();
        }
      }, {
        key: "closeShape",
        value: function closeShape() {
          this.mapDataService.closeShape();
        }
      }, {
        key: "toggleStyleOptions",
        value: function toggleStyleOptions() {
          this.show = !this.show;
        }
      }, {
        key: "closeStyleViewEvent",
        value: function closeStyleViewEvent(event) {
          this.show = false;
        }
      }, {
        key: "subscribeToMapEvents",
        value: function subscribeToMapEvents() {
          var _this5 = this;

          this.mapDataService.getMapMouseOverEmitter().subscribe(function (event) {
            _this5.mouseCursor = event.latlng.lat + ', ' + event.latlng.lng;
          });
          this.mapDataService.getMapCenterChangeEmitter().subscribe(function (event) {
            _this5.mapCenter = event.lat + ', ' + event.lng;
          });
          this.mapDataService.getMapZoomLevelEmitter().subscribe(function (event) {
            _this5.zoom = event;
          });
          this.mapDataService.getMapActionEmitter().subscribe(function (event) {
            switch (event.action) {
              case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].ADD:
                var data = _this5.observableData.value.concat(event.latlng);

                _this5.observableData.next(data);

                break;

              case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].REMOVE:
                var data = _this5.observableData.value.slice(0, -1);

                _this5.observableData.next(data);

                break;

              case src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION"].CLEAR:
                var data = _this5.observableData.value.slice(0, 0);

                _this5.observableData.next(data);

            }
          });
        }
      }]);

      return SidebarViewComponent;
    }();

    SidebarViewComponent.ɵfac = function SidebarViewComponent_Factory(t) {
      return new (t || SidebarViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__["MapDataService"]));
    };

    SidebarViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarViewComponent,
      selectors: [["app-sidebar-view"]],
      decls: 31,
      vars: 9,
      consts: [[1, "side-bar-view"], ["color", "accent", "mat-raised-button", "", 1, "button-row", 3, "click"], [3, "styleViewCloseEvent", 4, "ngIf"], [1, "text-row"], [1, "cdk-viewport", 3, "itemSize"], ["class", "item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "dev-info"], ["href", "https://github.com/sarweshkumar47", "target", "_blank", 1, "dev-info"], [2, "float", "right"], [3, "styleViewCloseEvent"], [1, "item"]],
      template: function SidebarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarViewComponent_Template_button_click_1_listener() {
            return ctx.clearMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarViewComponent_Template_button_click_3_listener() {
            return ctx.deleteLastDataPoint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Undo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarViewComponent_Template_button_click_5_listener() {
            return ctx.closeShape();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close shape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarViewComponent_Template_button_click_7_listener() {
            return ctx.toggleStyleOptions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Style options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarViewComponent_app_polyline_style_options_9_Template, 1, 0, "app-polyline-style-options", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Map center :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zoom level :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mouse cursor :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "cdk-virtual-scroll-viewport", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidebarViewComponent_div_23_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Created by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sarweshkumar C R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Version 1.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mapCenter, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.zoom, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mouseCursor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 7, ctx.observableData))("cdkVirtualForTemplateCacheSize", 0);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualForOf"], _polyline_style_options_polyline_style_options_component__WEBPACK_IMPORTED_MODULE_7__["PolylineStyleOptionsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".side-bar-view[_ngcontent-%COMP%] {\n    width: 27vw;\n    height: 100%;\n    background-color: #424242;\n    color: rgb(255, 174, 0);\n}\n\n.button-row[_ngcontent-%COMP%] {\n    margin: 16px;\n    font-size: large;\n}\n\n.text-row[_ngcontent-%COMP%] {\n    margin: 16px 16px 8px 16px;\n    color: #ffd258;\n    font-size: medium;\n}\n\n.cdk-viewport[_ngcontent-%COMP%] {\n    height: 62vh;\n    width: 25vw;\n    border: 1px solid grey;\n    border-radius: 4px;\n    margin: 16px 16px 0 16px;\n}\n\n.cdk-virtual-scroll-content-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.item[_ngcontent-%COMP%] {\n    height: 24px;\n    margin: 8px 0 4px 16px;\n    color: cyan;\n    font-size: medium;\n}\n\n.dev-info[_ngcontent-%COMP%] {\n    color: lightgray;\n    margin: 12px 16px 0px 16px;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L3NpZGViYXItdmlldy9zaWRlYmFyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbnRlbnQvc2lkZWJhci12aWV3L3NpZGViYXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyLXZpZXcge1xuICAgIHdpZHRoOiAyN3Z3O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xufVxuXG4uYnV0dG9uLXJvdyB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi50ZXh0LXJvdyB7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggOHB4IDE2cHg7XG4gICAgY29sb3I6ICNmZmQyNTg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5jZGstdmlld3BvcnQge1xuICAgIGhlaWdodDogNjJ2aDtcbiAgICB3aWR0aDogMjV2dztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDE2cHggMTZweCAwIDE2cHg7XG59XG5cbi5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pdGVtIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiA4cHggMCA0cHggMTZweDtcbiAgICBjb2xvcjogY3lhbjtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmRldi1pbmZvIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIG1hcmdpbjogMTJweCAxNnB4IDBweCAxNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-view',
          templateUrl: './sidebar-view.component.html',
          styleUrls: ['./sidebar-view.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_3__["MapDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-constants.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/app-constants.ts ***!
    \*****************************************/

  /*! exports provided: STREETMAP_TILE_LAYER, STREETMAP_ATTRIBUTION, SATALLITEMAP_TILE_LAYER, SATALLITEMAP_ATTRIBUTION, WIKIMEDIAMAP_TILE_LAYER, WIKIMEDIA_ATTRIBUTION, ACTION */

  /***/
  function srcAppSharedAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STREETMAP_TILE_LAYER", function () {
      return STREETMAP_TILE_LAYER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STREETMAP_ATTRIBUTION", function () {
      return STREETMAP_ATTRIBUTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SATALLITEMAP_TILE_LAYER", function () {
      return SATALLITEMAP_TILE_LAYER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SATALLITEMAP_ATTRIBUTION", function () {
      return SATALLITEMAP_ATTRIBUTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WIKIMEDIAMAP_TILE_LAYER", function () {
      return WIKIMEDIAMAP_TILE_LAYER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WIKIMEDIA_ATTRIBUTION", function () {
      return WIKIMEDIA_ATTRIBUTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION", function () {
      return ACTION;
    });

    var STREETMAP_TILE_LAYER = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var STREETMAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    var SATALLITEMAP_TILE_LAYER = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    var SATALLITEMAP_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    var WIKIMEDIAMAP_TILE_LAYER = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png';
    var WIKIMEDIA_ATTRIBUTION = '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>';
    var ACTION;

    (function (ACTION) {
      ACTION[ACTION["ADD"] = 0] = "ADD";
      ACTION[ACTION["REMOVE"] = 1] = "REMOVE";
      ACTION[ACTION["CLEAR"] = 2] = "CLEAR";
      ACTION[ACTION["UPDATE_STYLE"] = 3] = "UPDATE_STYLE";
    })(ACTION || (ACTION = {}));

    ;
    /***/
  },

  /***/
  "./src/app/shared/map-data.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/map-data.service.ts ***!
    \********************************************/

  /*! exports provided: MapDataService */

  /***/
  function srcAppSharedMapDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapDataService", function () {
      return MapDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MapDataService = /*#__PURE__*/function () {
      function MapDataService() {
        _classCallCheck(this, MapDataService);

        this.isPolyline = true;
        this.onMapCenterChangeEmitter = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onMapMouseOverEmitter = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onMapZoomLevelEmitter = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mapDataPoints = [];
        this.mapActionEventEmitter = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.styleOptionsEventEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          color: '#cf0500',
          opacity: 1,
          weight: 4
        });
      }

      _createClass(MapDataService, [{
        key: "onMapClick",
        value: function onMapClick(event) {
          if (!this.isPolyline) {
            this.deleteLastDataPoint();
          }

          this.addDataPoint(event);
          this.isPolyline = true;
        }
      }, {
        key: "onMapMouseOver",
        value: function onMapMouseOver(event) {
          this.onMapMouseOverEmitter.next(event);
        }
      }, {
        key: "onMapZoomLevelChanged",
        value: function onMapZoomLevelChanged(zoom) {
          this.onMapZoomLevelEmitter.next(zoom);
        }
      }, {
        key: "onMapCenterChanged",
        value: function onMapCenterChanged(center) {
          this.onMapCenterChangeEmitter.next(center);
        }
      }, {
        key: "getDataPoints",
        value: function getDataPoints() {
          return this.mapDataPoints;
        }
      }, {
        key: "getMapActionEmitter",
        value: function getMapActionEmitter() {
          return this.mapActionEventEmitter;
        }
      }, {
        key: "getMapMouseOverEmitter",
        value: function getMapMouseOverEmitter() {
          return this.onMapMouseOverEmitter;
        }
      }, {
        key: "getMapZoomLevelEmitter",
        value: function getMapZoomLevelEmitter() {
          return this.onMapZoomLevelEmitter;
        }
      }, {
        key: "getMapCenterChangeEmitter",
        value: function getMapCenterChangeEmitter() {
          return this.onMapCenterChangeEmitter;
        }
      }, {
        key: "getStyleOptionsEventEmitter",
        value: function getStyleOptionsEventEmitter() {
          return this.styleOptionsEventEmitter;
        }
      }, {
        key: "deleteLastDataPoint",
        value: function deleteLastDataPoint() {
          this.mapDataPoints.pop();
          this.mapActionEventEmitter.next({
            action: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ACTION"].REMOVE
          });
        }
      }, {
        key: "clearDataPoints",
        value: function clearDataPoints() {
          this.mapDataPoints.length = 0;
          this.mapActionEventEmitter.next({
            action: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ACTION"].CLEAR
          });
        }
      }, {
        key: "closeShape",
        value: function closeShape() {
          this.convertPolylineToPolygon();
        }
      }, {
        key: "updateStyles",
        value: function updateStyles(event) {
          this.mapActionEventEmitter.next(event);
        }
      }, {
        key: "saveStyles",
        value: function saveStyles(options) {
          this.styleOptionsEventEmitter.next(options);
        }
      }, {
        key: "exportDataAsCSV",
        value: function exportDataAsCSV() {
          var blob = new Blob([this.convertToCSV(this.getDataPoints())], {
            type: 'application/csv'
          });
          Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'data.csv');
        }
      }, {
        key: "exportDataAsJSON",
        value: function exportDataAsJSON() {
          var blob = new Blob([this.convertToJSON(this.getDataPoints())], {
            type: 'application/json'
          });
          Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'data.json');
        }
      }, {
        key: "addDataPoint",
        value: function addDataPoint(event) {
          var item = event.latlng;
          this.mapDataPoints.push(item);
          this.mapActionEventEmitter.next({
            action: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ACTION"].ADD,
            latlng: item
          });
        }
      }, {
        key: "convertPolylineToPolygon",
        value: function convertPolylineToPolygon() {
          // Append the first datapoint to the end of the array when 
          // length of the array is > 2
          if (this.mapDataPoints.length > 2) {
            var first = this.mapDataPoints[0];
            this.mapDataPoints.push(first);
            this.mapActionEventEmitter.next({
              action: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ACTION"].ADD,
              latlng: first
            });
            this.isPolyline = false;
          }
        }
      }, {
        key: "convertToCSV",
        value: function convertToCSV(dataArray) {
          var array = [Object.keys(dataArray[0])].concat(dataArray);
          return array.map(function (row) {
            return Object.values(row);
          }).join('\n');
        }
      }, {
        key: "convertToJSON",
        value: function convertToJSON(dataArray) {
          return JSON.stringify(dataArray);
        }
      }]);

      return MapDataService;
    }();

    MapDataService.ɵfac = function MapDataService_Factory(t) {
      return new (t || MapDataService)();
    };

    MapDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MapDataService,
      factory: MapDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/toolbar/export-data/export-data.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/toolbar/export-data/export-data.component.ts ***!
    \**************************************************************/

  /*! exports provided: ExportDataComponent */

  /***/
  function srcAppToolbarExportDataExportDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportDataComponent", function () {
      return ExportDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/map-data.service */
    "./src/app/shared/map-data.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var ExportDataComponent = /*#__PURE__*/function () {
      function ExportDataComponent(mapDataService) {
        _classCallCheck(this, ExportDataComponent);

        this.mapDataService = mapDataService;
      }

      _createClass(ExportDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "exportAsJSON",
        value: function exportAsJSON(event) {
          this.mapDataService.exportDataAsJSON();
        }
      }, {
        key: "exportAsCSV",
        value: function exportAsCSV(event) {
          this.mapDataService.exportDataAsCSV();
        }
      }]);

      return ExportDataComponent;
    }();

    ExportDataComponent.ɵfac = function ExportDataComponent_Factory(t) {
      return new (t || ExportDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_1__["MapDataService"]));
    };

    ExportDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExportDataComponent,
      selectors: [["app-export-data"]],
      decls: 9,
      vars: 1,
      consts: [[1, "export-data-options"], ["mat-stroked-button", "", "color", "accent", 2, "font-size", "large", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
      template: function ExportDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Export As ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportDataComponent_Template_button_click_5_listener($event) {
            return ctx.exportAsJSON($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportDataComponent_Template_button_click_7_listener($event) {
            return ctx.exportAsCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
      styles: [".export-data-options[_ngcontent-%COMP%] {\n    font-size: x-large;\n    margin: 0 16px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci9leHBvcnQtZGF0YS9leHBvcnQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvZXhwb3J0LWRhdGEvZXhwb3J0LWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBvcnQtZGF0YS1vcHRpb25zIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgbWFyZ2luOiAwIDE2cHggMCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-export-data',
          templateUrl: './export-data.component.html',
          styleUrls: ['./export-data.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_map_data_service__WEBPACK_IMPORTED_MODULE_1__["MapDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _export_data_export_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./export-data/export-data.component */
    "./src/app/toolbar/export-data/export-data.component.ts");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary"], [1, "toolbar-spacer"], ["href", "https://github.com/sarweshkumar47/map-polyline-tool", "target", "_blank", 1, "dev-info"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Map polyline tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-export-data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Source on Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _export_data_export_data_component__WEBPACK_IMPORTED_MODULE_2__["ExportDataComponent"]],
      styles: [".mat-toolbar[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100vw;\n    display: flex;\n}\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.dev-info[_ngcontent-%COMP%] {\n    color: darkgray;\n    font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50b29sYmFyLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5kZXYtaW5mbyB7XG4gICAgY29sb3I6IGRhcmtncmF5O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /home/avatar/Workspace/VSCodeProjects/Personal/map-polyline-tool/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map