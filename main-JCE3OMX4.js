import{O as Ce,P as Me,Q as xe,R as $,S as Rt,T as Nt,U as zt,V as Lt,j as St,k as P,l as A,m as Pt,n as At,r as Bt,s as W,t as Ft,v as Ve}from"./chunk-ILLBZLIT.js";import{$ as ve,C as be,D as yt,F as wt,G as Ct,J as Mt,M as xt,T as L,U as je,X as Dt,Y as _e,_ as kt,aa as Et,ba as B,ca as Tt,da as It,e as pt,ea as Ot,f as ut,fa as ye,ha as we,i as ht,j as gt,l as ge,o as ft,q as fe,v as Le,x as bt,y as _t,z as vt}from"./chunk-LAKUJYAT.js";import{$a as rt,$b as lt,A as F,Aa as V,Ab as U,Ba as tt,Bb as G,Bc as ue,Cb as f,Db as a,E as Ye,Eb as s,Ec as he,F as qe,Fb as y,G as Be,Ga as nt,Mb as k,P as Fe,Qb as h,R as C,Sb as g,Tb as R,U as Ke,Ua as d,Ub as w,Vb as Ne,Wb as ze,X as re,Xb as N,Y as ae,Ya as it,Yb as z,Za as Re,_ as X,_b as dt,a as ne,aa as o,ab as de,ac as te,b as ie,ba as Xe,bc as ce,cb as at,cc as b,ec as l,fc as u,ga as x,h as T,ha as D,hb as m,ib as le,jb as ot,ka as J,la as I,lc as H,mb as ee,oa as oe,pa as O,s as K,sa as Je,sb as st,ta as j,ua as et,uc as me,vc as ct,wb as S,xb as _,xc as pe,ya as se,yb as v,yc as E,z as Qe,zc as mt}from"./chunk-PBD67Y2Z.js";var Xt="@",Jt=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=o(J);loadingSchedulerFn=o(en,{optional:!0});_engine;constructor(e,t,n,c,p){this.doc=e,this.delegate=t,this.zone=n,this.animationType=c,this.moduleImpl=p}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-NS7BXXLJ.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new Ke(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:c})=>{this._engine=n(this.animationType,this.doc);let p=new c(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let c=new Ue(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let Kt=p.createRenderer(e,t);c.use(Kt),this.scheduler??=this.injector.get(et,null,{optional:!0}),this.scheduler?.notify(10)}).catch(p=>{c.use(n)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){at()};static \u0275prov=re({token:i,factory:i.\u0275fac})}return i})(),Ue=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,n){this.delegate.insertBefore(r,e,t,n)}removeChild(r,e,t,n){this.delegate.removeChild(r,e,t,n)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,n){this.delegate.setAttribute(r,e,t,n)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,n){this.delegate.setStyle(r,e,t,n)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t,n){return this.shouldReplay(e)&&this.replay.push(c=>c.listen(r,e,t,n)),this.delegate.listen(r,e,t,n)}shouldReplay(r){return this.replay!==null&&r.startsWith(Xt)}},en=new X("");function jt(i="animations"){return it("NgAsyncAnimations"),Xe([{provide:rt,useFactory:()=>new Jt(o(I),o(pt),o(O),i)},{provide:nt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ke=["*"],nn=["content"],rn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],an=["mat-drawer","mat-drawer-content","*"];function on(i,r){if(i&1){let e=k();a(0,"div",1),h("click",function(){x(e);let n=g();return D(n._onBackdropClicked())}),s()}if(i&2){let e=g();b("mat-drawer-shown",e._isShowingBackdrop())}}function sn(i,r){i&1&&(a(0,"mat-drawer-content"),w(1,2),s())}var dn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ln=["mat-sidenav","mat-sidenav-content","*"];function cn(i,r){if(i&1){let e=k();a(0,"div",1),h("click",function(){x(e);let n=g();return D(n._onBackdropClicked())}),s()}if(i&2){let e=g();b("mat-drawer-shown",e._isShowingBackdrop())}}function mn(i,r){i&1&&(a(0,"mat-sidenav-content"),w(1,2),s())}var pn=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var un=new X("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),We=new X("MAT_DRAWER_CONTAINER"),De=(()=>{class i extends W{_platform=o(ge);_changeDetectorRef=o(ue);_container=o(He);constructor(){let e=o(V),t=o(Bt),n=o(O);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(ce("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),b("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[H([{provide:W,useExisting:i}]),ee],ngContentSelectors:ke,decls:1,vars:0,template:function(t,n){t&1&&(R(),w(0))},encapsulation:2,changeDetection:0})}return i})(),Ge=(()=>{class i{_elementRef=o(V);_focusTrapFactory=o(yt);_focusMonitor=o(bt);_platform=o(ge);_ngZone=o(O);_renderer=o(de);_interactivityChecker=o(be);_doc=o(I);_container=o(We,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=L(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=L(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(L(e))}_opened=j(!1);_openedVia=null;_animationStarted=new T;_animationEnd=new T;openedChange=new oe(!0);_openedStream=this.openedChange.pipe(F(e=>e),K(()=>{}));openedStart=this._animationStarted.pipe(F(()=>this.opened),Be(void 0));_closedStream=this.openedChange.pipe(F(e=>!e),K(()=>{}));closedStart=this._animationStarted.pipe(F(()=>!this.opened),Be(void 0));_destroyed=new T;onPositionChanged=new oe;_content;_modeChanged=new T;_injector=o(J);_changeDetectorRef=o(ue);constructor(){this.openedChange.pipe(C(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Ct(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{c(),p(),e.removeAttribute("tabindex")},c=this._renderer.listen(e,"blur",n),p=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Re(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(qe(1)).subscribe(p=>c(p?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&ze(nn,5),t&2){let c;N(c=z())&&(n._content=c.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(S("align",null)("tabIndex",n.mode!=="side"?"-1":null),ce("visibility",!n._container&&!n.opened?"hidden":null),b("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ke,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(R(),a(0,"div",1,0),w(2),s())},dependencies:[W],encapsulation:2,changeDetection:0})}return i})(),He=(()=>{class i{_dir=o(Dt,{optional:!0});_element=o(V);_ngZone=o(O);_changeDetectorRef=o(ue);_animationDisabled=fe();_transitionsEnabled=!1;_allDrawers;_drawers=new tt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=L(e)}_autosize=o(un);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:L(e)}_backdropOverride=null;backdropClick=new oe;_start=null;_end=null;_left=null;_right=null;_destroyed=new T;_doCheckSubject=new T;_contentMargins={left:null,right:null};_contentMarginChanges=new T;get scrollable(){return this._userContent||this._content}_injector=o(J);constructor(){let e=o(ge),t=o(Ft);this._dir?.change.pipe(C(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(C(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Fe(this._allDrawers),C(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Fe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ye(10),C(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(C(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(C(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(C(this._drawers.changes)).subscribe(()=>{Re({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(C(Qe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,c){if(t&1&&Ne(c,De,5)(c,Ge,5),t&2){let p;N(p=z())&&(n._content=p.first),N(p=z())&&(n._allDrawers=p)}},viewQuery:function(t,n){if(t&1&&ze(De,5),t&2){let c;N(c=z())&&(n._userContent=c.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&b("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[H([{provide:We,useExisting:i}])],ngContentSelectors:an,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(R(rn),_(0,on,1,2,"div",0),w(1),w(2,1),_(3,sn,2,0,"mat-drawer-content")),t&2&&(v(n.hasBackdrop?0:-1),d(3),v(n._content?-1:3))},dependencies:[De],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})(),Se=(()=>{class i extends De{static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[H([{provide:W,useExisting:i}]),ee],ngContentSelectors:ke,decls:1,vars:0,template:function(t,n){t&1&&(R(),w(0))},encapsulation:2,changeDetection:0})}return i})(),$e=(()=>{class i extends Ge{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=L(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Le(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Le(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(S("tabIndex",n.mode!=="side"?"-1":null)("align",null),ce("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),b("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[H([{provide:Ge,useExisting:i}]),ee],ngContentSelectors:ke,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(R(),a(0,"div",1,0),w(2),s())},dependencies:[W],encapsulation:2,changeDetection:0})}return i})(),Vt=(()=>{class i extends He{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,c){if(t&1&&Ne(c,Se,5)(c,$e,5),t&2){let p;N(p=z())&&(n._content=p.first),N(p=z())&&(n._allDrawers=p)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&b("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[H([{provide:We,useExisting:i},{provide:He,useExisting:i}]),ee],ngContentSelectors:ln,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(R(dn),_(0,cn,1,2,"div",0),w(1),w(2,1),_(3,mn,2,0,"mat-sidenav-content")),t&2&&(v(n.hasBackdrop?0:-1),d(3),v(n._content?-1:3))},dependencies:[Se],styles:[pn],encapsulation:2,changeDetection:0})}return i})(),Ut=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=le({type:i});static \u0275inj=ae({imports:[Ve,_e,Ve]})}return i})();var Z={name:"Ganesh Kumar",email:"ganesh.kumar@infithra.com",initials:"GK"};var Q=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-logo"]],decls:5,vars:0,consts:[["routerLink","/","aria-label","infithra home",1,"logo"],["aria-hidden","true",1,"logo-mark"],["aria-hidden","true",1,"logo-word"]],template:function(e,t){e&1&&(a(0,"a",0)(1,"span",1),l(2,"i"),s(),a(3,"span",2),l(4,"infithra"),s()())},dependencies:[B],styles:[".logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;height:48px;padding:0 8px;border-radius:var(--radius-md);color:var(--text)}.logo-mark[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--radius-md);background:var(--text);color:var(--side);font-size:15px;font-weight:600;letter-spacing:-.5px}.logo-word[_ngcontent-%COMP%]{font-size:17px;font-weight:600;letter-spacing:-.4px}"],changeDetection:0})};var gn=["menu"];function fn(i,r){if(i&1&&(a(0,"div",4)(1,"span",5),l(2),s(),a(3,"span",6),l(4),s()(),y(5,"mat-divider")),i&2){let e=g();d(2),u(e.user.name),d(2),u(e.user.email)}}var q=class i{notifications=o(zt);showIdentity=E(!1);xPosition=E("before");yPosition=E("below");menu=mt.required("menu");user=Z;logout(){this.notifications.success("Signed out")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-user-menu"]],viewQuery:function(e,t){e&1&&dt(t.menu,gn,5),e&2&&lt()},inputs:{showIdentity:[1,"showIdentity"],xPosition:[1,"xPosition"],yPosition:[1,"yPosition"]},decls:19,vars:3,consts:[["menu","matMenu"],[3,"xPosition","yPosition"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","","type","button",3,"click"],[1,"identity"],[1,"identity-name"],[1,"identity-email"]],template:function(e,t){e&1&&(a(0,"mat-menu",1,0),_(2,fn,6,2),a(3,"a",2)(4,"mat-icon"),l(5,"person"),s(),a(6,"span"),l(7,"Profile"),s()(),a(8,"a",2)(9,"mat-icon"),l(10,"settings"),s(),a(11,"span"),l(12,"Settings"),s()(),y(13,"mat-divider"),a(14,"button",3),h("click",function(){return t.logout()}),a(15,"mat-icon"),l(16,"logout"),s(),a(17,"span"),l(18,"Logout"),s()()()),e&2&&(f("xPosition",t.xPosition())("yPosition",t.yPosition()),d(2),v(t.showIdentity()?2:-1))},dependencies:[Nt,Rt,A,P,$,Me,Ce,B],styles:[".identity[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:8px 10px}.identity-name[_ngcontent-%COMP%]{font-weight:500}.identity-email[_ngcontent-%COMP%]{color:var(--muted);font-size:12px;line-height:16px}"],changeDetection:0})};var _n=(i,r)=>r.path;function vn(i,r){if(i&1){let e=k();a(0,"button",12),h("click",function(){x(e);let n=g();return D(n.closeSidebar.emit())}),a(1,"mat-icon"),l(2,"close"),s()()}}function yn(i,r){if(i&1&&(a(0,"a",4)(1,"mat-icon"),l(2),s(),a(3,"span"),l(4),s()()),i&2){let e=r.$implicit;f("routerLink",e.path),d(2),u(e.icon),d(2),u(e.label)}}var Ee=class i{showClose=E(!1);closeSidebar=pe();user=Z;navItems=[{label:"Dashboard",icon:"space_dashboard",path:"/dashboard"},{label:"Employees",icon:"group",path:"/employees"},{label:"Settings",icon:"settings",path:"/settings"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-sidebar"]],inputs:{showClose:[1,"showClose"]},outputs:{closeSidebar:"closeSidebar"},decls:19,vars:5,consts:[["userMenu",""],[1,"sidebar-head"],["mat-icon-button","","type","button","aria-label","Close navigation"],["aria-label","Main",1,"nav"],["routerLinkActive","nav-item--active","ariaCurrentWhenActive","page",1,"nav-item",3,"routerLink"],[1,"user-card"],["aria-hidden","true",1,"avatar"],[1,"user-text"],[1,"user-name","truncate"],[1,"user-email","truncate"],["mat-icon-button","","type","button","aria-label","Account options",1,"icon-btn-sm","user-more",3,"matMenuTriggerFor"],["xPosition","after","yPosition","above"],["mat-icon-button","","type","button","aria-label","Close navigation",3,"click"]],template:function(e,t){if(e&1&&(a(0,"div",1),y(1,"app-logo"),_(2,vn,3,0,"button",2),s(),a(3,"nav",3),U(4,yn,5,3,"a",4,_n),s(),a(6,"div",5)(7,"span",6),l(8),s(),a(9,"div",7)(10,"span",8),l(11),s(),a(12,"span",9),l(13),s()(),a(14,"button",10)(15,"mat-icon"),l(16,"more_vert"),s()()(),y(17,"app-user-menu",11,0)),e&2){let n=te(18);d(2),v(t.showClose()?2:-1),d(2),G(t.navItems),d(4),u(t.user.initials),d(3),u(t.user.name),d(2),u(t.user.email),d(),f("matMenuTriggerFor",n.menu())}},dependencies:[Q,we,ye,A,P,$,xe,B,Tt,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px;height:100%;padding:12px}.sidebar-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.nav-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:40px;padding:0 12px;border:1px solid transparent;border-radius:var(--radius-md);color:var(--muted);font-weight:500;transition:background-color .15s,color .15s}.nav-item[_ngcontent-%COMP%]:hover{background:var(--nav-hover)}.nav-item--active[_ngcontent-%COMP%], .nav-item--active[_ngcontent-%COMP%]:hover{border-color:var(--border);background:var(--nav-active);color:var(--text)}.user-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:auto;padding:8px;border:1px solid var(--border);border-radius:var(--radius-md);background:var(--nav-active)}.user-text[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;min-width:0}.user-name[_ngcontent-%COMP%]{font-weight:500}.user-email[_ngcontent-%COMP%]{color:var(--muted);font-size:12px;line-height:16px}.user-more[_ngcontent-%COMP%]{color:var(--muted)}"],changeDetection:0})};var Ht="mat-badge-content",wn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Wt=(()=>{class i{_ngZone=o(O);_elementRef=o(V);_ariaDescriber=o(xt);_renderer=o(de);_animationsDisabled=fe();_idGenerator=o(Mt);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=o(be);_document=o(I);constructor(){let e=o(_t);e.load(wn),e.load(vt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Ht),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Ht}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ot({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){t&2&&b("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",he],disabled:[2,"matBadgeDisabled","disabled",he],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",he]}})}return i})(),$t=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=le({type:i});static \u0275inj=ae({imports:[wt,_e]})}return i})();var Zt="infithra-theme",Te=class i{document=o(I);themeState=j(this.readStoredTheme());theme=this.themeState.asReadonly();isDark=me(()=>this.themeState()==="dark");constructor(){this.applyTheme(this.themeState())}toggle(){this.setTheme(this.isDark()?"light":"dark")}setTheme(r){this.themeState.set(r),this.applyTheme(r);try{this.storage()?.setItem(Zt,r)}catch{}}applyTheme(r){this.document.documentElement.classList.toggle("light",r==="light")}readStoredTheme(){try{return this.storage()?.getItem(Zt)==="light"?"light":"dark"}catch{return"dark"}}storage(){return this.document.defaultView?.localStorage}static \u0275fac=function(e){return new(e||i)};static \u0275prov=re({token:i,factory:i.\u0275fac,providedIn:"root"})};var Mn=(i,r)=>r.url;function xn(i,r){if(i&1&&(a(0,"span",3),l(1),s()),i&2){let e=g().$implicit;d(),u(e.label)}}function Dn(i,r){if(i&1&&(a(0,"a",4),l(1),s(),a(2,"mat-icon",5),l(3,"chevron_right"),s()),i&2){let e=g().$implicit;f("routerLink",e.url),d(),u(e.label)}}function Sn(i,r){if(i&1&&(a(0,"li",2),_(1,xn,2,1,"span",3)(2,Dn,4,2),s()),i&2){let e=r.$index,t=r.$count;d(),v(e===t-1?1:2)}}var Ie=class i{breadcrumbs=o(Lt).breadcrumbs;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-breadcrumb"]],decls:4,vars:0,consts:[["aria-label","Breadcrumb"],[1,"crumbs"],[1,"crumb"],["aria-current","page",1,"crumb-current"],[1,"crumb-link",3,"routerLink"],[1,"crumb-separator","icon-16"]],template:function(e,t){e&1&&(a(0,"nav",0)(1,"ol",1),U(2,Sn,3,1,"li",2,Mn),s()()),e&2&&(d(2),G(t.breadcrumbs()))},dependencies:[A,P,B],styles:["[_nghost-%COMP%]{display:block;min-width:0}.crumbs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;margin:0;padding:0;list-style:none;color:var(--muted);font-size:14px}.crumb[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;min-width:0}.crumb-link[_ngcontent-%COMP%]{border-radius:4px;color:var(--muted);white-space:nowrap;transition:color .15s}.crumb-link[_ngcontent-%COMP%]:hover{color:var(--text)}.crumb-separator[_ngcontent-%COMP%]{flex:none;color:var(--muted)}.crumb-current[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--text);font-weight:500}"],changeDetection:0})};var kn=(i,r)=>r.id;function En(i,r){if(i&1){let e=k();a(0,"button",15),h("click",function(){x(e);let n=g();return D(n.toggleSidebar.emit())}),a(1,"mat-icon"),l(2,"menu"),s()(),y(3,"app-logo")}if(i&2){let e=g();S("aria-expanded",e.sidebarOpen())}}function Tn(i,r){if(i&1){let e=k();a(0,"button",16),h("click",function(){x(e);let n=g();return D(n.toggleSidebar.emit())}),a(1,"mat-icon"),l(2),s()(),y(3,"span",17)(4,"app-breadcrumb",18)}if(i&2){let e=g();S("aria-label",e.sidebarOpen()?"Collapse sidebar":"Expand sidebar")("aria-expanded",e.sidebarOpen()),d(2),u(e.sidebarOpen()?"left_panel_close":"left_panel_open")}}function In(i,r){i&1&&(a(0,"span",26)(1,"span",27),l(2,"Unread"),s()())}function On(i,r){if(i&1){let e=k();a(0,"button",19),h("click",function(){let n=x(e).$implicit,c=g();return D(c.markRead(n.id))}),a(1,"span",20)(2,"span",21)(3,"mat-icon",22),l(4),s()(),a(5,"span",23)(6,"span",24),l(7),s(),a(8,"span",25),l(9),s()(),_(10,In,3,0,"span",26),s()()}if(i&2){let e=r.$implicit;d(2),b("notification-icon--danger",e.tone==="danger")("notification-icon--warning",e.tone==="warning"),d(2),u(e.icon),d(3),u(e.text),d(2),u(e.time),d(),v(e.unread?10:-1)}}var Pn=[{id:1,icon:"event_busy",tone:"danger",text:"Visa expiring for Sara Ahmed",time:"5 min ago",unread:!0},{id:2,icon:"badge",tone:"warning",text:"Emirates ID for Sara Ahmed expires in 20 days",time:"1 hour ago",unread:!0},{id:3,icon:"person_off",tone:"neutral",text:"Priya Nair was marked Inactive",time:"3 hours ago",unread:!0},{id:4,icon:"task_alt",tone:"neutral",text:"Omar Haddad completed probation",time:"Yesterday",unread:!1},{id:5,icon:"upload_file",tone:"neutral",text:"Fatima Al Zaabi uploaded a new passport copy",time:"2 days ago",unread:!1}],Oe=class i{theme=o(Te);sidebarOpen=E.required();isMobile=E.required();toggleSidebar=pe();user=Z;notifications=j(Pn);unreadCount=me(()=>this.notifications().filter(r=>r.unread).length);markAllRead(r){r.stopPropagation(),this.notifications.update(e=>e.map(t=>ie(ne({},t),{unread:!1})))}markRead(r){this.notifications.update(e=>e.map(t=>t.id===r?ie(ne({},t),{unread:!1}):t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-top-bar"]],inputs:{sidebarOpen:[1,"sidebarOpen"],isMobile:[1,"isMobile"]},outputs:{toggleSidebar:"toggleSidebar"},decls:25,vars:12,consts:[["notificationsMenu","matMenu"],["userMenu",""],[1,"top-bar"],[1,"top-bar-start"],[1,"top-bar-end"],["mat-icon-button","","type","button",1,"icon-btn-outlined",3,"click"],["mat-icon-button","","type","button",1,"icon-btn-outlined",3,"matBadge","matBadgeHidden","matMenuTriggerFor"],["mat-icon-button","","type","button",1,"icon-btn-sm","avatar-trigger",3,"matMenuTriggerFor"],[1,"avatar"],["xPosition","before",1,"menu-wide"],[1,"notifications-head",3,"click"],[1,"notifications-title"],["mat-menu-item","","type","button",1,"mark-all",3,"click","disabled"],["mat-menu-item","","type","button",1,"notification"],[3,"showIdentity"],["mat-icon-button","","type","button","aria-label","Open navigation","aria-controls","app-sidebar",3,"click"],["mat-icon-button","","type","button","aria-controls","app-sidebar",3,"click"],["aria-hidden","true",1,"divider"],[1,"breadcrumb"],["mat-menu-item","","type","button",1,"notification",3,"click"],[1,"notification-row"],["aria-hidden","true",1,"notification-icon"],[1,"icon-18"],[1,"notification-body"],[1,"notification-text"],[1,"notification-time"],[1,"unread-dot"],[1,"sr-only"]],template:function(e,t){if(e&1&&(a(0,"header",2)(1,"div",3),_(2,En,4,1)(3,Tn,5,3),s(),a(4,"div",4)(5,"button",5),h("click",function(){return t.theme.toggle()}),a(6,"mat-icon"),l(7),s()(),a(8,"button",6)(9,"mat-icon"),l(10,"notifications"),s()(),a(11,"button",7)(12,"span",8),l(13),s()()()(),a(14,"mat-menu",9,0)(16,"div",10),h("click",function(c){return c.stopPropagation()}),a(17,"span",11),l(18,"Notifications"),s(),a(19,"button",12),h("click",function(c){return t.markAllRead(c)}),l(20," Mark all as read "),s()(),U(21,On,11,8,"button",13,kn),s(),y(23,"app-user-menu",14,1)),e&2){let n=te(15),c=te(24);d(2),v(t.isMobile()?2:3),d(3),S("aria-label",t.theme.isDark()?"Switch to light theme":"Switch to dark theme"),d(2),u(t.theme.isDark()?"light_mode":"dark_mode"),d(),f("matBadge",t.unreadCount())("matBadgeHidden",t.unreadCount()===0)("matMenuTriggerFor",n),S("aria-label",t.unreadCount()?"Notifications, "+t.unreadCount()+" unread":"Notifications"),d(3),f("matMenuTriggerFor",c.menu()),S("aria-label","Account menu for "+t.user.name),d(2),u(t.user.initials),d(6),f("disabled",t.unreadCount()===0),d(2),G(t.notifications()),d(2),f("showIdentity",!0)}},dependencies:[Ie,Q,$t,Wt,we,ye,A,P,$,Me,Ce,xe,q],styles:["[_nghost-%COMP%]{display:block;flex:none}.top-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:64px;padding:0 16px;border-bottom:1px solid var(--border)}.top-bar-start[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;gap:12px;min-width:0}.divider[_ngcontent-%COMP%]{flex:none;width:1px;height:20px;background:var(--border)}.breadcrumb[_ngcontent-%COMP%]{min-width:0}.top-bar-end[_ngcontent-%COMP%]{display:flex;flex:none;align-items:center;gap:8px;margin-left:auto}.avatar-trigger[_ngcontent-%COMP%]{padding:0;border-radius:var(--radius-full)}@media(max-width:1023.98px){.top-bar[_ngcontent-%COMP%]{gap:8px;height:56px;padding:0 12px}.top-bar-start[_ngcontent-%COMP%]{gap:4px}}.notifications-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:4px 4px 6px 10px}.notifications-title[_ngcontent-%COMP%]{font-weight:600}.mark-all[_ngcontent-%COMP%]{width:auto;min-height:28px;padding:0 6px;color:var(--accent);font-size:13px;font-weight:500}.mark-all[disabled][_ngcontent-%COMP%]{color:var(--muted)}.notification[_ngcontent-%COMP%]{align-items:flex-start;padding:10px}.notification-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px}.notification-icon[_ngcontent-%COMP%]{display:flex;flex:none;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--border);border-radius:var(--radius-md);background:var(--panel);color:var(--muted)}.notification-icon--warning[_ngcontent-%COMP%]{color:var(--badge-orange-fg)}.notification-icon--danger[_ngcontent-%COMP%]{color:var(--badge-red-fg)}.notification-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:inherit}.notification-body[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}.notification-time[_ngcontent-%COMP%]{color:var(--muted);font-size:12px;line-height:16px}.unread-dot[_ngcontent-%COMP%]{flex:none;width:8px;height:8px;margin-top:6px;border-radius:var(--radius-full);background:var(--accent)}"],changeDetection:0})};var Qt="(max-width: 1023.98px)",Pe=class i{breakpointObserver=o(ft);isMobile=At(this.breakpointObserver.observe(Qt).pipe(K(r=>r.matches)),{initialValue:this.breakpointObserver.isMatched(Qt)});sidebarOpen=ct(()=>!this.isMobile());constructor(){o(Et).events.pipe(F(r=>r instanceof kt),Pt()).subscribe(()=>{this.isMobile()&&this.sidebarOpen.set(!1)})}toggleSidebar(){this.sidebarOpen.update(r=>!r)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-shell"]],decls:8,vars:10,consts:[[1,"shell"],["id","app-sidebar",1,"sidenav",3,"openedChange","mode","opened","disableClose"],[3,"closeSidebar","showClose"],[1,"content"],[1,"panel"],[3,"toggleSidebar","sidebarOpen","isMobile"],[1,"page"]],template:function(e,t){e&1&&(a(0,"mat-sidenav-container",0)(1,"mat-sidenav",1),h("openedChange",function(c){return t.sidebarOpen.set(c)}),a(2,"app-sidebar",2),h("closeSidebar",function(){return t.sidebarOpen.set(!1)}),s()(),a(3,"mat-sidenav-content",3)(4,"div",4)(5,"app-top-bar",5),h("toggleSidebar",function(){return t.toggleSidebar()}),s(),a(6,"main",6),y(7,"router-outlet"),s()()()()),e&2&&(d(),b("sidenav--drawer",t.isMobile()),f("mode",t.isMobile()?"over":"side")("opened",t.sidebarOpen())("disableClose",!t.isMobile()),d(),f("showClose",t.isMobile()),d(2),b("panel--solo",!t.sidebarOpen()),d(),f("sidebarOpen",t.sidebarOpen())("isMobile",t.isMobile()))},dependencies:[Ut,$e,Vt,Se,ve,Ee,Oe],styles:["[_nghost-%COMP%]{display:block;height:100dvh}.shell[_ngcontent-%COMP%]{height:100%}.sidenav--drawer[_ngcontent-%COMP%]{--mat-sidenav-container-width: 288px;max-width:calc(100vw - 48px);border-right:1px solid var(--border)}.content[_ngcontent-%COMP%]{display:flex;overflow:hidden}.panel[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;min-width:0;margin:8px 8px 8px 0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--panel);transition:margin .2s ease}.panel--solo[_ngcontent-%COMP%]{margin:8px}.page[_ngcontent-%COMP%]{flex:1;min-height:0;padding:24px;overflow:auto}@media(max-width:1023.98px){.panel[_ngcontent-%COMP%]{margin:0;border:0;border-radius:0}.page[_ngcontent-%COMP%]{padding:16px}}"],changeDetection:0})};var Yt=[{path:"",pathMatch:"full",redirectTo:"employees"},{path:"",component:Pe,children:[{path:"dashboard",title:"Dashboard \xB7 infithra",data:{breadcrumb:"Dashboard"},loadComponent:()=>import("./chunk-JFXIDHC2.js").then(i=>i.DashboardComponent)},{path:"employees",data:{breadcrumb:"Employees"},loadChildren:()=>import("./chunk-UWEPXRVB.js").then(i=>i.EMPLOYEES_ROUTES)},{path:"settings",title:"Settings \xB7 infithra",data:{breadcrumb:"Settings"},loadComponent:()=>import("./chunk-J6LZQU35.js").then(i=>i.SettingsComponent)},{path:"**",title:"Page not found \xB7 infithra",data:{breadcrumb:"Page not found"},loadComponent:()=>import("./chunk-NMQZIG53.js").then(i=>i.NotFoundComponent)}]}];var qt={providers:[Je(),It(Yt,Ot()),ht(gt()),jt(),{provide:je,useValue:{disabled:!0}},st(()=>{o(St).setDefaultFontSetClass("material-symbols-outlined")})]};var Ae=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&y(0,"router-outlet")},dependencies:[ve],encapsulation:2,changeDetection:0})};ut(Ae,qt).catch(i=>console.error(i));
