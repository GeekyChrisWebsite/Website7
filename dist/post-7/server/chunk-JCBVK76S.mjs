import './polyfills.server.mjs';
import{Ga as E,H as z,Mc as x,N as C,Pa as r,S as p,U as I,Ua as _,V as w,Va as o,W as k,Y as u,c as v,g as b,lb as L,ma as D,tb as O,ub as P}from"./chunk-C2J4IULD.mjs";import{a as c,b as d}from"./chunk-KRLCULJA.mjs";var Z=["*"],g=class{_clearListeners(){for(let i of this._listeners)i.remove();this._listeners=[]}constructor(i){this._ngZone=i,this._pending=[],this._listeners=[],this._targetStream=new b(void 0)}getLazyEmitter(i){return this._targetStream.pipe(z(h=>{let e=new v(t=>{if(!h){this._pending.push({observable:e,observer:t});return}let n=h.addListener(i,a=>{this._ngZone.run(()=>t.next(a))});if(!n){t.complete();return}return this._listeners.push(n),()=>n.remove()});return e}))}setTarget(i){let h=this._targetStream.value;i!==h&&(h&&(this._clearListeners(),this._pending=[]),this._targetStream.next(i),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}},l={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},F="500px",A="500px",R=(()=>{let i=class i{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||l}constructor(e,t,n){if(this._elementRef=e,this._ngZone=t,this._eventManager=new g(p(o)),this.height=F,this.width=A,this._options=l,this.mapInitialized=new _,this.authFailure=new _,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=x(n),this._isBrowser){let a=window;a.google,this._existingAuthFailureCallback=a.gm_authFailure,a.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();let t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&this._zoom!=null&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){if(this._eventManager.destroy(),this._isBrowser){let e=window;e.gm_authFailure=this._existingAuthFailureCallback}}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){let e=this._mapEl.style;e.height=this.height===null?"":S(this.height)||F,e.width=this.width===null?"":S(this.width)||A}}_combineOptions(){let e=this._options||{};return d(c({},e),{center:this._center||e.center||l.center,zoom:this._zoom??e.zoom??l.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||l.mapTypeId})}_assertInitialized(){this.googleMap}};i.\u0275fac=function(t){return new(t||i)(r(E),r(o),r(D))},i.\u0275cmp=I({type:i,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[u],ngContentSelectors:Z,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,n){t&1&&(O(),L(0,"div",0),P(1))},encapsulation:2,changeDetection:0});let s=i;return s})(),T=/([A-Za-z%]+)$/;function S(s){return s==null?"":T.test(s)?s:`${s}px`}var j={position:{lat:37.421995,lng:-122.084092}},pe=(()=>{let i=class i{set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new g(p(o)),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){let{marker:t,_title:n,_position:a,_label:m,_clickable:y,_icon:f,_visible:M}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&n!==void 0&&t.setTitle(n),e.position&&a&&t.setPosition(a),e.label&&m!==void 0&&t.setLabel(m),e.clickable&&y!==void 0&&t.setClickable(y),e.icon&&f&&t.setIcon(f),e.visible&&M!==void 0&&t.setVisible(M))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){let e=this._options||j;return d(c({},e),{title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible})}_assertInitialized(){}};i.\u0275fac=function(t){return new(t||i)(r(R),r(o))},i.\u0275dir=k({type:i,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[u]});let s=i;return s})();var ue=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=w({type:i}),i.\u0275inj=C({});let s=i;return s})();export{R as a,pe as b,ue as c};