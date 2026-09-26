import{A as Vt,B as Nt,C as Di,D as Si,E as _r,F as yr,G as br,H as vr,I as Mi,J as Cr,K as Ei,L as Dn,M as Sn,N as Xe,O as xr,P as wr,Q as Dr,R as Sr,S as Mr,T as Er,U as kr,V as Tr,a as hi,b as nr,c as or,d as rr,e as yt,f as ar,g as sr,h as xn,i as yi,k as Ye,l as Ke,m as bi,n as wn,o as vi,p as vt,q as cr,r as mr,s as ur,t as Ci,u as hr,v as xi,w as pr,x as Pt,y as fr,z as gr}from"./chunk-ILLBZLIT.js";import{B as Ko,C as Zo,D as Xo,E as Jo,F as fi,G as we,H as er,J as re,K as tr,L as vn,M as gi,R as Cn,T as ze,V as ir,W as _i,X as ve,Y as le,Z as lr,a as yn,aa as dr,ba as bt,c as $o,d as mi,fa as Ct,g as Wo,ga as wi,h as ui,ha as Ze,l as xe,n as qo,o as Qo,q as ye,t as pi,u as Yo,v as at,w as bn,x as Qe,y as _t}from"./chunk-LAKUJYAT.js";import{$a as To,$b as _n,A as he,Aa as E,Ab as $e,Ac as Go,B as Do,Bb as We,Bc as ne,C as Ie,Cb as _,Cc as gt,Db as l,E as So,Eb as d,Ec as x,F as je,Fb as B,Fc as qe,Gb as H,Gc as Uo,H as Mo,Hb as j,Ib as fe,Jb as Oe,Kb as Fe,L as Eo,Lb as ge,Mb as te,N as ri,Nb as rt,P as Ae,Q as Ge,Qb as g,R as $,Rb as Po,Sa as si,Sb as p,Tb as ue,U as ai,Ua as c,Ub as P,Vb as Ne,W as ot,Wb as Ce,X as se,Xb as S,Y as L,Yb as M,Za as Se,Zb as Vo,_ as b,_a as Me,_b as No,a as O,aa as s,ab as pe,ac as Ee,b as de,bb as K,cc as T,d as po,db as Ue,dc as ht,ec as u,f as fo,fc as k,ga as F,gc as ie,h as D,ha as A,hb as y,hc as Lo,i as go,ia as Pe,ib as z,ic as zo,j as nt,ja as ko,jb as f,jc as Bo,k as _o,ka as oe,kb as Ro,kc as Ft,l as yo,la as Ve,lb as Io,lc as G,m as bo,ma as gn,mb as R,mc as li,n as vo,nb as Y,nc as pt,o as It,oa as W,oc as di,p as Co,pa as ce,pc as ci,q as xo,qb as Oo,qc as Ho,rb as Fo,s as ae,t as oi,ta as q,tc as Le,uc as Q,vb as Ao,vc as jo,wa as ut,wb as I,wc as ft,x as mt,xa as me,xb as v,xc as _e,y as wo,ya as ee,yb as C,yc as U,z as Re,zb as Ot,zc as At}from"./chunk-PBD67Y2Z.js";var ki=class i{breadcrumbs=s(Tr);id=U.required();constructor(){ut(()=>this.breadcrumbs.setLabel(`Employee ${this.id()}`))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-details"]],inputs:{id:[1,"id"]},decls:6,vars:1,consts:[[1,"page-header"],[1,"page-title"],[1,"page-subtitle"]],template:function(e,t){e&1&&(H(0,"header",0)(1,"div")(2,"h1",1),u(3),j(),H(4,"p",2),u(5,"Profile, documents and activity will appear here."),j()()()),e&2&&(c(3),ie("Employee ",t.id()))},encapsulation:2,changeDetection:0})};var Lt=class i{id=U();isEdit=Q(()=>this.id()!==void 0);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-form"]],inputs:{id:[1,"id"]},decls:6,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-subtitle"]],template:function(e,t){e&1&&(H(0,"header",0)(1,"div")(2,"h1",1),u(3),j(),H(4,"p",2),u(5),j()()()),e&2&&(c(3),k(t.isEdit()?"Edit Employee":"Add Employee"),c(2),ie(" ",t.isEdit()?"Update personal, job and document details.":"Fill in personal, job and document details for the new team member."," "))},encapsulation:2,changeDetection:0})};var Pr=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(K(pe),K(E))};static \u0275dir=f({type:i})}return i})(),ps=(()=>{class i extends Pr{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,features:[R]})}return i})(),Hi=new b("");var fs={provide:Hi,useExisting:ot(()=>ji),multi:!0};function gs(){let i=yn()?yn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var _s=new b(""),ji=(()=>{class i extends Pr{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!gs())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(K(pe),K(E),K(_s,8))};static \u0275dir=f({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&g("input",function(a){return n._handleInput(a.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(a){return n._compositionEnd(a.target.value)})},standalone:!1,features:[G([fs]),R]})}return i})();function kn(i){return i==null||Tn(i)===0}function Tn(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Rn=new b(""),In=new b(""),ys=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Dt=class{static min(o){return bs(o)}static max(o){return vs(o)}static required(o){return Cs(o)}static requiredTrue(o){return xs(o)}static email(o){return ws(o)}static minLength(o){return Ds(o)}static maxLength(o){return Ss(o)}static pattern(o){return Ms(o)}static nullValidator(o){return Vr()}static compose(o){return jr(o)}static composeAsync(o){return Gr(o)}};function bs(i){return o=>{if(o.value==null||i==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e<i?{min:{min:i,actual:o.value}}:null}}function vs(i){return o=>{if(o.value==null||i==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e>i?{max:{max:i,actual:o.value}}:null}}function Cs(i){return kn(i.value)?{required:!0}:null}function xs(i){return i.value===!0?null:{required:!0}}function ws(i){return kn(i.value)||ys.test(i.value)?null:{email:!0}}function Ds(i){return o=>{let e=o.value?.length??Tn(o.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Ss(i){return o=>{let e=o.value?.length??Tn(o.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Ms(i){if(!i)return Vr;let o,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=i.toString(),o=i),t=>{if(kn(t.value))return null;let n=t.value;return o.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function Vr(i){return null}function Nr(i){return i!=null}function Lr(i){return Fo(i)?vo(i):i}function zr(i){let o={};return i.forEach(e=>{o=e!=null?O(O({},o),e):o}),Object.keys(o).length===0?null:o}function Br(i,o){return o.map(e=>e(i))}function Es(i){return!i.validate}function Hr(i){return i.map(o=>Es(o)?o:e=>o.validate(e))}function jr(i){if(!i)return null;let o=i.filter(Nr);return o.length==0?null:function(e){return zr(Br(e,o))}}function On(i){return i!=null?jr(Hr(i)):null}function Gr(i){if(!i)return null;let o=i.filter(Nr);return o.length==0?null:function(e){let t=Br(e,o).map(Lr);return wo(t).pipe(ae(zr))}}function Fn(i){return i!=null?Gr(Hr(i)):null}function Rr(i,o){return i===null?[o]:Array.isArray(i)?[...i,o]:[i,o]}function Ur(i){return i._rawValidators}function $r(i){return i._rawAsyncValidators}function Mn(i){return i?Array.isArray(i)?i:[i]:[]}function Ri(i,o){return Array.isArray(i)?i.includes(o):i===o}function Ir(i,o){let e=Mn(o);return Mn(i).forEach(n=>{Ri(e,n)||e.push(n)}),e}function Or(i,o){return Mn(o).filter(e=>!Ri(i,e))}var Ii=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=On(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Fn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},St=class extends Ii{name;get formDirective(){return null}get path(){return null}},He=class extends Ii{_parent=null;name=null;valueAccessor=null},En=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Wr=(()=>{class i extends En{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(K(He,2))};static \u0275dir=f({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&T("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[R]})}return i})();var zt="VALID",Ti="INVALID",xt="PENDING",Bt="DISABLED",Je=class{},Oi=class extends Je{value;source;constructor(o,e){super(),this.value=o,this.source=e}},jt=class extends Je{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},Gt=class extends Je{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},wt=class extends Je{status;source;constructor(o,e){super(),this.status=o,this.source=e}},Fi=class extends Je{source;constructor(o){super(),this.source=o}},Ai=class extends Je{source;constructor(o){super(),this.source=o}};function qr(i){return(Gi(i)?i.validators:i)||null}function ks(i){return Array.isArray(i)?On(i):i||null}function Qr(i,o){return(Gi(o)?o.asyncValidators:i)||null}function Ts(i){return Array.isArray(i)?Fn(i):i||null}function Gi(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Rs(i,o,e){let t=i.controls;if(!(o?Object.keys(t):t).length)throw new ai(1e3,"");if(!t[e])throw new ai(1001,"")}function Is(i,o,e){i._forEachChild((t,n)=>{if(e[n]===void 0)throw new ai(-1002,"")})}var Pi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Le(this.statusReactive)}set status(o){Le(()=>this.statusReactive.set(o))}_status=Q(()=>this.statusReactive());statusReactive=q(void 0);get valid(){return this.status===zt}get invalid(){return this.status===Ti}get pending(){return this.status===xt}get disabled(){return this.status===Bt}get enabled(){return this.status!==Bt}errors;get pristine(){return Le(this.pristineReactive)}set pristine(o){Le(()=>this.pristineReactive.set(o))}_pristine=Q(()=>this.pristineReactive());pristineReactive=q(!0);get dirty(){return!this.pristine}get touched(){return Le(this.touchedReactive)}set touched(o){Le(()=>this.touchedReactive.set(o))}_touched=Q(()=>this.touchedReactive());touchedReactive=q(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Ir(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Ir(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Or(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Or(o,this._rawAsyncValidators))}hasValidator(o){return Ri(this._rawValidators,o)}hasAsyncValidator(o){return Ri(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(de(O({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new Gt(!0,t))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:t})}),o.onlySelf||this._parent?._updateTouched(o,t),e&&o.emitEvent!==!1&&this._events.next(new Gt(!1,t))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(de(O({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new jt(!1,t))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,t),e&&o.emitEvent!==!1&&this._events.next(new jt(!0,t))}markAsPending(o={}){this.status=xt;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new wt(this.status,e)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(de(O({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Bt,this.errors=null,this._forEachChild(n=>{n.disable(de(O({},o),{onlySelf:!0}))}),this._updateValue();let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Oi(this.value,t)),this._events.next(new wt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(de(O({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=zt,this._forEachChild(t=>{t.enable(de(O({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(de(O({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(o,e){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===zt||this.status===xt)&&this._runAsyncValidator(t,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Oi(this.value,e)),this._events.next(new wt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(de(O({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Bt:zt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=xt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let t=Lr(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(o,e){let t=e?this.get(e):this;return t?.errors?t.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,t){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||t)&&this._events.next(new wt(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,t)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Bt:this.errors?Ti:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xt)?xt:this._anyControlsHaveStatus(Ti)?Ti:zt}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,o.onlySelf||this._parent?._updatePristine(o,e),n&&this._events.next(new jt(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Gt(this.touched,e)),o.onlySelf||this._parent?._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Gi(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=ks(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Ts(this._rawAsyncValidators)}},Vi=class extends Pi{constructor(o,e,t){super(qr(e),Qr(t,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,t={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){Is(this,!0,o),Object.keys(o).forEach(t=>{Rs(this,!0,t),this.controls[t].setValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(t=>{let n=this.controls[t];n&&n.patchValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((t,n)=>{t.reset(o?o[n]:null,de(O({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ai(this))}getRawValue(){return this._reduceChildren({},(o,e,t)=>(o[t]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&o(t,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&o(t))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(o,e){let t=o;return this._forEachChild((n,r)=>{t=e(t,n,r)}),t}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var Ui=new b("",{factory:()=>An}),An="always";function Ni(i,o,e=An){Pn(i,o),o.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(i.disabled),Fs(i,o),Ps(i,o),As(i,o),Os(i,o)}function Li(i,o,e=!0){let t=()=>{};o?.valueAccessor?.registerOnChange(t),o?.valueAccessor?.registerOnTouched(t),Bi(i,o),i&&(o._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function zi(i,o){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Os(i,o){if(o.valueAccessor.setDisabledState){let e=t=>{o.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),o._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Pn(i,o){let e=Ur(i);o.validator!==null?i.setValidators(Rr(e,o.validator)):typeof e=="function"&&i.setValidators([e]);let t=$r(i);o.asyncValidator!==null?i.setAsyncValidators(Rr(t,o.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();zi(o._rawValidators,n),zi(o._rawAsyncValidators,n)}function Bi(i,o){let e=!1;if(i!==null){if(o.validator!==null){let n=Ur(i);if(Array.isArray(n)&&n.length>0){let r=n.filter(a=>a!==o.validator);r.length!==n.length&&(e=!0,i.setValidators(r))}}if(o.asyncValidator!==null){let n=$r(i);if(Array.isArray(n)&&n.length>0){let r=n.filter(a=>a!==o.asyncValidator);r.length!==n.length&&(e=!0,i.setAsyncValidators(r))}}}let t=()=>{};return zi(o._rawValidators,t),zi(o._rawAsyncValidators,t),e}function Fs(i,o){o.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Yr(i,o)})}function As(i,o){o.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Yr(i,o),i.updateOn!=="submit"&&i.markAsTouched()})}function Yr(i,o){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ps(i,o){let e=(t,n)=>{o.valueAccessor.writeValue(t),n&&o.viewToModelUpdate(t)};i.registerOnChange(e),o._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Kr(i,o){i==null,Pn(i,o)}function Vs(i,o){return Bi(i,o)}function Ns(i,o){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Ls(i){return Object.getPrototypeOf(i.constructor)===ps}function Zr(i,o){i._syncPendingControls(),o.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function zs(i,o){if(!o)return null;Array.isArray(o);let e,t,n;return o.forEach(r=>{r.constructor===ji?e=r:Ls(r)?t=r:n=r}),n||t||e||null}function Bs(i,o){let e=i.indexOf(o);e>-1&&i.splice(e,1)}var Hs={provide:St,useExisting:ot(()=>Ut)},Ht=Promise.resolve(),Ut=(()=>{class i extends St{callSetDisabledState;get submitted(){return Le(this.submittedReactive)}_submitted=Q(()=>this.submittedReactive());submittedReactive=q(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new Vi({},On(e),Fn(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ht.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Ni(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ht.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ht.then(()=>{let t=this._findContainer(e.path),n=new Vi({});Kr(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ht.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ht.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Zr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Fi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(K(Rn,10),K(In,10),K(Ui,8))};static \u0275dir=f({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&g("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[G([Hs]),R]})}return i})();function Fr(i,o){let e=i.indexOf(o);e>-1&&i.splice(e,1)}function Ar(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Vn=class extends Pi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,t){super(qr(e),Qr(t,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Gi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ar(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ai(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Fr(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Fr(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Ar(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var js=i=>i instanceof Vn;var Gs=(()=>{class i extends St{callSetDisabledState;get submitted(){return Le(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Q(()=>this._submittedReactive());_submittedReactive=q(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Bi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Ni(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Li(e.control||null,e,!1),Bs(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Zr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Fi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(Li(t||null,e),js(n)&&(Ni(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Kr(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Vs(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Pn(this.form,this),this._oldForm&&Bi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(K(Rn,10),K(In,10),K(Ui,8))};static \u0275dir=f({type:i,features:[R,me]})}return i})();var Xr=new b(""),Us={provide:He,useExisting:ot(()=>Nn)},Nn=(()=>{class i extends He{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,r,a){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=zs(this,n)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&Li(t,this,!1),Ni(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Ns(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Li(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||i)(K(Rn,10),K(In,10),K(Hi,10),K(Xr,8),K(Ui,8))};static \u0275dir=f({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[G([Us]),R,me]})}return i})();var $s={provide:St,useExisting:ot(()=>$t)},$t=(()=>{class i extends Gs{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,n){t&1&&g("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[G([$s]),R]})}return i})();var Ws=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({})}return i})();var Jr=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Xr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ui,useValue:e.callSetDisabledState??An}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[Ws]})}return i})();var st=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(o=!1,e,t=!0,n){this._multiple=o,this._emitChanges=t,this.compareWith=n,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var $i=class{applyChanges(o,e,t,n,r){o.forEachOperation((a,m,h)=>{let w,N;if(a.previousIndex==null){let X=t(a,m,h);w=e.createEmbeddedView(X.templateRef,X.context,X.index),N=vt.INSERTED}else h==null?(e.remove(m),N=vt.REMOVED):(w=e.get(m),e.move(w,h),N=vt.MOVED);r&&r({context:w?.context,operation:N,record:a})})}detach(){}};var Qs=["button"],Ys=["*"];function Ks(i,o){if(i&1&&(l(0,"div",2),B(1,"mat-pseudo-checkbox",6),d()),i&2){let e=p();c(),_("disabled",e.disabled)}}var ea=new b("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ta=new b("MatButtonToggleGroup"),Zs={provide:Hi,useExisting:ot(()=>Bn),multi:!0},Wi=class{source;value;constructor(o,e){this.source=o,this.value=e}},Bn=(()=>{class i{_changeDetector=s(ne);_dir=s(ve,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(re).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new W;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new W;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(ea,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new st(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||we(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(m=>m.buttonId===n),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(r)||null;break;case 38:a=this._getNextButton(r,-1);break;case 37:a=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(r,1);break;case 39:a=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new Wi(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let a=(e+t*r+n.length)%n.length,m=n.get(a);if(m&&!m.disabled)return m}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,r){if(t&1&&Ne(r,Yi,5),t&2){let a;S(a=M())&&(n._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&g("keydown",function(a){return n._keydown(a)}),t&2&&(I("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),T("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",x],value:"value",multiple:[2,"multiple","multiple",x],disabled:[2,"disabled","disabled",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",x],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",x]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[G([Zs,{provide:ta,useExisting:i}])]})}return i})(),Yi=(()=>{class i{_changeDetectorRef=s(ne);_elementRef=s(E);_focusMonitor=s(Qe);_idGenerator=s(re);_animationDisabled=ye();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new W;constructor(){s(_t).load(_i);let e=s(ta,{optional:!0}),t=s(new ft("tabindex"),{optional:!0})||"",n=s(ea,{optional:!0});this._tabIndex=q(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Wi(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&Ce(Qs,5),t&2){let r;S(r=M())&&(n._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&g("focus",function(){return n.focus()}),t&2&&(I("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),T("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",x],appearance:"appearance",checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Ys,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(ue(),l(0,"button",1,0),g("click",function(){return n._onButtonClick()}),v(2,Ks,2,1,"div",2),l(3,"span",3),P(4),d()(),B(5,"span",4)(6,"span",5)),t&2){let r=Ee(1);_("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),I("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),c(2),C(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),c(4),_("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[ir,nr],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[lr,Yi,le]})}return i})();function Js(i,o){}var et=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var jn=(()=>{class i extends gr{_elementRef=s(E);_focusTrapFactory=s(Xo);_config;_interactivityChecker=s(Zo);_ngZone=s(ce);_focusMonitor=s(Qe);_renderer=s(pe);_changeDetectorRef=s(ne);_injector=s(oe);_platform=s(xe);_document=s(Ve);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(et,{optional:!0})||new et,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",n),a=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Se(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=pi(),r=this._elementRef.nativeElement;(!n||n===this._document.body||n===r||r.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=pi();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=pi()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&Ce(Vt,7),t&2){let r;S(r=M())&&(n._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&I("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[R],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&Y(0,Js,0,0,"ng-template",0)},dependencies:[Vt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Qt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!we(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},el=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(oe);return()=>Di(i)}}),tl=new b("DialogData"),il=new b("DefaultDialogConfig");function nl(i){let o=q(i),e=new W;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Gn=(()=>{class i{_injector=s(oe);_defaultOptions=s(il,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(yr);_idGenerator=s(re);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=s(el);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=mt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new et;t=O(O({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=Ei(this._injector,r),m=new Qt(a,t),h=this._attachContainer(a,m,t);if(m.containerInstance=h,!this.openDialogs.length){let w=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(je(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(w)}):this._hideNonDialogContentFromAssistiveTechnology(w)}return this._attachDialogContent(e,m,h,t),this.openDialogs.push(m),m.closed.subscribe(()=>this._removeOpenDialog(m,!0)),this.afterOpened.next(m),m}closeAll(){Hn(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Hn(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Hn(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new _r({positionStrategy:e.positionStrategy||Mi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,a=[{provide:et,useValue:n},{provide:Qt,useValue:t},{provide:br,useValue:e}],m;n.container?typeof n.container=="function"?m=n.container:(m=n.container.type,a.push(...n.container.providers(n))):m=jn;let h=new Pt(m,n.viewContainerRef,oe.create({parent:r||this._injector,providers:a}));return e.attach(h).instance}_attachDialogContent(e,t,n,r){if(e instanceof Me){let a=this._createInjector(r,t,n,void 0),m={$implicit:r.data,dialogRef:t};r.templateContext&&(m=O(O({},m),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),n.attachTemplatePortal(new fr(e,null,m,a))}else{let a=this._createInjector(r,t,n,this._injector),m=n.attachComponentPortal(new Pt(e,r.viewContainerRef,a));t.componentRef=m,t.componentInstance=m.instance}}_createInjector(e,t,n,r){let a=e.injector||e.viewContainerRef?.injector,m=[{provide:tl,useValue:e.data},{provide:Qt,useValue:t}];return e.providers&&(typeof e.providers=="function"?m.push(...e.providers(t,e,n)):m.push(...e.providers)),e.direction&&(!a||!a.get(ve,null,{optional:!0}))&&m.push({provide:ve,useValue:nl(e.direction)}),oe.create({parent:a||r,providers:m})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Hn(i,o){let e=i.length;for(;e--;)o(i[e])}var na=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({providers:[Gn],imports:[Xe,Nt,fi,Nt]})}return i})();function ol(i,o){}var Zi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Un="mdc-dialog--open",oa="mdc-dialog--opening",ra="mdc-dialog--closing",rl=150,al=75,sl=(()=>{class i extends jn{_animationStateChanged=new W;_animationsEnabled=!ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?sa(this._config.enterAnimationDuration)??rl:0;_exitAnimationDuration=this._animationsEnabled?sa(this._config.exitAnimationDuration)??al:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(aa,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(oa,Un)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Un),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Un),this._animationsEnabled?(this._hostElement.style.setProperty(aa,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ra)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(oa,ra)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(rt("id",n._config.id),I("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),T("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[R],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(l(0,"div",0)(1,"div",1),Y(2,ol,0,0,"ng-template",2),d()())},dependencies:[Vt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),aa="--mat-dialog-transition-duration";function sa(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?at(i.substring(0,i.length-2)):i.endsWith("s")?at(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Ki=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Ki||{}),Yt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new nt(1);_beforeClosed=new nt(1);_result;_closeFallbackTimeout;_state=Ki.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(he(n=>n.state==="opened"),je(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(he(n=>n.state==="closed"),je(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Re(this.backdropClick(),this.keydownEvents().pipe(he(n=>n.keyCode===27&&!this.disableClose&&!we(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),la(this,n.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(he(t=>t.state==="closing"),je(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ki.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Ki.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function la(i,o,e){return i._closeInteractionType=o,i.close(e)}var $n=new b("MatMdcDialogData"),ll=new b("mat-mdc-dialog-default-options"),dl=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(oe);return()=>Di(i)}}),Kt=(()=>{class i{_defaultOptions=s(ll,{optional:!0});_scrollStrategy=s(dl);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(re);_injector=s(oe);_dialog=s(Gn);_animationsDisabled=ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=Zi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=mt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));constructor(){this._dialogRefConstructor=Yt,this._dialogContainerType=sl,this._dialogDataToken=$n}open(e,t){let n;t=O(O({},this._defaultOptions||new Zi),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,de(O({},t),{positionStrategy:Mi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:et,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(a,m,h)=>(n=new this._dialogRefConstructor(a,t,h),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(n);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),da=(()=>{class i{dialogRef=s(Yt,{optional:!0});_elementRef=s(E);_dialog=s(Kt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=pa(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){la(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&g("click",function(a){return n._onButtonClick(a)}),t&2&&I("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[me]})}return i})(),ca=(()=>{class i{_dialogRef=s(Yt,{optional:!0});_elementRef=s(E);_dialog=s(Kt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=pa(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i})}return i})(),ma=(()=>{class i extends ca{id=s(re).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&rt("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[R]})}return i})(),ua=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Io([ur])]})}return i})(),ha=(()=>{class i extends ca{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&T("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[R]})}return i})();function pa(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var fa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({providers:[Kt],imports:[na,Xe,Nt,le]})}return i})();var Wn=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new fo(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(he(e=>e.some(t=>t.target===o)),ri({bufferSize:1,refCount:!0}),$(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ga=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(ce);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Wn(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ml=["notch"],ul=["matFormFieldNotchedOutline",""],hl=["*"],_a=["iconPrefixContainer"],ya=["textPrefixContainer"],ba=["iconSuffixContainer"],va=["textSuffixContainer"],pl=["textField"],fl=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],gl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function _l(i,o){i&1&&B(0,"span",21)}function yl(i,o){if(i&1&&(l(0,"label",20),P(1,1),v(2,_l,1,0,"span",21),d()),i&2){let e=p(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),I("for",e._control.disableAutomaticLabeling?null:e._control.id),c(2),C(!e.hideRequiredMarker&&e._control.required?2:-1)}}function bl(i,o){if(i&1&&v(0,yl,3,5,"label",20),i&2){let e=p();C(e._hasFloatingLabel()?0:-1)}}function vl(i,o){i&1&&B(0,"div",7)}function Cl(i,o){}function xl(i,o){if(i&1&&Y(0,Cl,0,0,"ng-template",13),i&2){p(2);let e=Ee(1);_("ngTemplateOutlet",e)}}function wl(i,o){if(i&1&&(l(0,"div",9),v(1,xl,1,1,null,13),d()),i&2){let e=p();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),c(),C(e._forceDisplayInfixLabel()?-1:1)}}function Dl(i,o){i&1&&(l(0,"div",10,2),P(2,2),d())}function Sl(i,o){i&1&&(l(0,"div",11,3),P(2,3),d())}function Ml(i,o){}function El(i,o){if(i&1&&Y(0,Ml,0,0,"ng-template",13),i&2){p();let e=Ee(1);_("ngTemplateOutlet",e)}}function kl(i,o){i&1&&(l(0,"div",14,4),P(2,4),d())}function Tl(i,o){i&1&&(l(0,"div",15,5),P(2,5),d())}function Rl(i,o){i&1&&B(0,"div",16)}function Il(i,o){i&1&&(l(0,"div",18),P(1,6),d())}function Ol(i,o){if(i&1&&(l(0,"mat-hint",22),u(1),d()),i&2){let e=p(2);_("id",e._hintLabelId),c(),k(e.hintLabel)}}function Fl(i,o){if(i&1&&(l(0,"div",19),v(1,Ol,2,2,"mat-hint",22),P(2,7),B(3,"div",23),P(4,8),d()),i&2){let e=p();c(),C(e.hintLabel?1:-1)}}var qn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["mat-label"]]})}return i})(),Al=new b("MatError");var Qn=(()=>{class i{align="start";id=s(re).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(rt("id",n.id),I("align",null),T("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ea=new b("MatPrefix"),Yn=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[G([{provide:Ea,useExisting:i}])]})}return i})(),ka=new b("MatSuffix"),Kn=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[G([{provide:ka,useExisting:i}])]})}return i})(),Ta=new b("FloatingLabelParent"),Ca=(()=>{class i{_elementRef=s(E);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(ga);_ngZone=s(ce);_parent=s(Ta);_resizeSubscription=new po;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Pl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Pl(i){let o=i;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var xa="mdc-line-ripple--active",Xi="mdc-line-ripple--deactivating",wa=(()=>{class i{_elementRef=s(E);_cleanupTransitionEnd;constructor(){let e=s(ce),t=s(pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Xi),e.add(xa)}deactivate(){this._elementRef.nativeElement.classList.add(Xi)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Xi);e.propertyName==="opacity"&&n&&t.remove(xa,Xi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Da=(()=>{class i{_elementRef=s(E);_ngZone=s(ce);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&Ce(ml,5),t&2){let r;S(r=M())&&(n._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ul,ngContentSelectors:hl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(ue(),fe(0,"div",1),H(1,"div",2,0),P(3),j(),fe(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Zt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i})}return i})();var Xt=new b("MatFormField"),Vl=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Sa="fill",Nl="auto",Ma="fixed",Ll="translateY(-50%)",Et=(()=>{class i{_elementRef=s(E);_changeDetectorRef=s(ne);_platform=s(xe);_idGenerator=s(re);_ngZone=s(ce);_defaults=s(Vl,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=At("iconPrefixContainer");_textPrefixContainerSignal=At("textPrefixContainer");_iconSuffixContainerSignal=At("iconSuffixContainer");_textSuffixContainerSignal=At("textSuffixContainer");_prefixSuffixContainers=Q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Go(qn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ze(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Nl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Sa;this._appearanceSignal.set(t)}_appearanceSignal=q(Sa);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ma}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ma}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ye();constructor(){let e=this._defaults,t=s(ve);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ut(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ae([void 0,void 0]),ae(()=>[t.errorState,t.userAriaDescribedBy]),Eo(),he(([[r,a],[m,h]])=>r!==m||a!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe($(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Re(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Uo({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(m=>m.align==="start"):null,a=this._hintChildren?this._hintChildren.find(m=>m.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(a=>a&&!r.includes(a)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,m=t?.getBoundingClientRect().width??0,h=n?.getBoundingClientRect().width??0,w=r?.getBoundingClientRect().width??0,N=this._currentDirection==="rtl"?"-1":"1",X=`${a+m}px`,Z=`calc(${N} * (${X} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ii=`var(--mat-mdc-form-field-label-transform, ${Ll} translateX(${Z}))`,ni=a+m+h+w;return[ii,ni]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,r){if(t&1&&(Vo(r,n._labelChild,qn,5),Ne(r,Zt,5)(r,Ea,5)(r,ka,5)(r,Al,5)(r,Qn,5)),t&2){_n();let a;S(a=M())&&(n._formFieldControl=a.first),S(a=M())&&(n._prefixChildren=a),S(a=M())&&(n._suffixChildren=a),S(a=M())&&(n._errorChildren=a),S(a=M())&&(n._hintChildren=a)}},viewQuery:function(t,n){if(t&1&&(No(n._iconPrefixContainerSignal,_a,5)(n._textPrefixContainerSignal,ya,5)(n._iconSuffixContainerSignal,ba,5)(n._textSuffixContainerSignal,va,5),Ce(pl,5)(_a,5)(ya,5)(ba,5)(va,5)(Ca,5)(Da,5)(wa,5)),t&2){_n(4);let r;S(r=M())&&(n._textField=r.first),S(r=M())&&(n._iconPrefixContainer=r.first),S(r=M())&&(n._textPrefixContainer=r.first),S(r=M())&&(n._iconSuffixContainer=r.first),S(r=M())&&(n._textSuffixContainer=r.first),S(r=M())&&(n._floatingLabel=r.first),S(r=M())&&(n._notchedOutline=r.first),S(r=M())&&(n._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&T("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[G([{provide:Xt,useExisting:i},{provide:Ta,useExisting:i}])],ngContentSelectors:gl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(ue(fl),Y(0,bl,1,1,"ng-template",null,0,Ho),l(2,"div",6,1),g("click",function(a){return n._control.onContainerClick(a)}),v(4,vl,1,0,"div",7),l(5,"div",8),v(6,wl,2,2,"div",9),v(7,Dl,3,0,"div",10),v(8,Sl,3,0,"div",11),l(9,"div",12),v(10,El,1,1,null,13),P(11),d(),v(12,kl,3,0,"div",14),v(13,Tl,3,0,"div",15),d(),v(14,Rl,1,0,"div",16),d(),l(15,"div",17),v(16,Il,2,0,"div",18)(17,Fl,5,1,"div",19),d()),t&2){let r;c(2),T("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),c(2),C(!n._hasOutline()&&!n._control.disabled?4:-1),c(2),C(n._hasOutline()?6:-1),c(),C(n._hasIconPrefix?7:-1),c(),C(n._hasTextPrefix?8:-1),c(2),C(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),c(2),C(n._hasTextSuffix?12:-1),c(),C(n._hasIconSuffix?13:-1),c(),C(n._hasOutline()?-1:14),c(),T("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let a=n._getSubscriptMessageType();c(),C((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Ca,Da,$o,wa,Qn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[Ko,Et,le]})}return i})();var Bl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Hl={passive:!0},Ra=(()=>{class i{_platform=s(xe);_ngZone=s(ce);_renderer=s(To).createRenderer(null,null);_styleLoader=s(_t);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return bo;this._styleLoader.load(Bl);let t=bn(e),n=this._monitoredElements.get(t);if(n)return n.subject;let r=new D,a="cdk-text-field-autofilled",m=w=>{w.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:w.target,isAutofilled:!0}))):w.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:w.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",m,Hl)));return this._monitoredElements.set(t,{subject:r,unlisten:h}),r}stopMonitoring(e){let t=bn(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({})}return i})();var Oa=new b("MAT_INPUT_VALUE_ACCESSOR");var jl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Gl=new b("MAT_INPUT_CONFIG"),Fa=(()=>{class i{_elementRef=s(E);_platform=s(xe);ngControl=s(He,{optional:!0,self:!0});_autofillMonitor=s(Ra);_ngZone=s(ce);_formField=s(Xt,{optional:!0});_renderer=s(pe);_uid=s(re).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Gl,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ze(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Dt.required)??!1}set required(e){this._required=ze(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Cn().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ze(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Cn().has(e));constructor(){let e=s(Ut,{optional:!0}),t=s($t,{optional:!0}),n=s(hi),r=s(Oa,{optional:!0,self:!0}),a=this._elementRef.nativeElement,m=a.nodeName.toLowerCase();r?Oo(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new yi(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m==="select",this._isTextarea=m==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ut(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){jl.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&g("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(rt("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),I("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),T("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x]},exportAs:["matInput"],features:[G([{provide:Zt,useExisting:i}]),me]})}return i})(),Aa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[lt,lt,Ia,le]})}return i})();var Wl=["trigger"],ql=["panel"],Ql=[[["mat-select-trigger"]],"*"],Yl=["mat-select-trigger","*"];function Kl(i,o){if(i&1&&(l(0,"span",4),u(1),d()),i&2){let e=p();c(),k(e.placeholder)}}function Zl(i,o){i&1&&P(0)}function Xl(i,o){if(i&1&&(l(0,"span",11),u(1),d()),i&2){let e=p(2);c(),k(e.triggerValue)}}function Jl(i,o){if(i&1&&(l(0,"span",5),v(1,Zl,1,0)(2,Xl,2,1,"span",11),d()),i&2){let e=p();c(),C(e.customTrigger?1:2)}}function ed(i,o){if(i&1){let e=te();l(0,"div",12,1),g("keydown",function(n){F(e);let r=p();return A(r._handleKeydown(n))}),P(2,1),d()}if(i&2){let e=p();ht(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),I("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var td=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(oe);return()=>Si(i)}}),id=new b("MAT_SELECT_CONFIG"),nd=new b("MatSelectTrigger"),Zn=class{source;value;constructor(o,e){this.source=o,this.value=e}},Ji=(()=>{class i{_viewportRuler=s(Ci);_changeDetectorRef=s(ne);_elementRef=s(E);_dir=s(ve,{optional:!0});_idGenerator=s(re);_renderer=s(pe);_parentFormField=s(Xt,{optional:!0});ngControl=s(He,{self:!0,optional:!0});_liveAnnouncer=s(Jo);_defaultOptions=s(id,{optional:!0});_animationsDisabled=ye();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,r=ar(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?n.scrollTop=0:n.scrollTop=sr(a.offsetTop,a.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Zn(this,e)}_scrollStrategyFactory=s(td);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=q(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Dt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=mt(()=>{let e=this.options;return e?e.changes.pipe(Ae(e),Ge(()=>Re(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ge(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(he(e=>e),ae(()=>{}));_closedStream=this.openedChange.pipe(he(e=>!e),ae(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let e=s(hi),t=s(Ut,{optional:!0}),n=s($t,{optional:!0}),r=s(new ft("tabindex"),{optional:!0}),a=s(Cr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new yi(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new st(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe($(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe($(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ae(null),$(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(je(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&vn(this._trackedModal,"aria-owns",t),tr(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;vn(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!we(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;a.onKeydown(e);let h=this.selected;h&&m!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,r=n===40||n===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(n===13||n===32)&&t.activeItem&&!we(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(m?h.select():h.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!we(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Dn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new er(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Re(this.options.changes,this._destroy);this.optionSelectionChanges.pipe($(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Re(...this.options.map(t=>t._stateChanges)).pipe($(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Yo(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,r){if(t&1&&Ne(r,nd,5)(r,yt,5)(r,rr,5),t&2){let a;S(a=M())&&(n.customTrigger=a.first),S(a=M())&&(n.options=a),S(a=M())&&(n.optionGroups=a)}},viewQuery:function(t,n){if(t&1&&Ce(Wl,5)(ql,5)(Sn,5),t&2){let r;S(r=M())&&(n.trigger=r.first),S(r=M())&&(n.panel=r.first),S(r=M())&&(n._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&g("keydown",function(a){return n._handleKeydown(a)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(I("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),T("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",x],disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:qe(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",x],placeholder:"placeholder",required:[2,"required","required",x],multiple:[2,"multiple","multiple",x],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",x],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",qe],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",x]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[G([{provide:Zt,useExisting:i},{provide:or,useExisting:i}]),me],ngContentSelectors:Yl,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(ue(Ql),l(0,"div",2,0),g("click",function(){return n.open()}),l(3,"div",3),v(4,Kl,2,1,"span",4)(5,Jl,3,1,"span",5),d(),l(6,"div",6)(7,"div",7),Pe(),l(8,"svg",8),B(9,"path",9),d()()()(),Y(10,ed,3,16,"ng-template",10),g("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(a){return n._handleOverlayKeydown(a)})),t&2){let r=Ee(1);c(3),I("id",n._valueId),c(),C(n.empty?4:5),c(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Dn,Sn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var en=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[Xe,xn,le,xi,lt,xn]})}return i})();var rd=["tooltip"],ad=20;var sd=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(oe);return()=>Si(i,{scrollThrottle:ad})}}),ld=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Pa="tooltip-panel",dd={passive:!0},cd=8,md=8,ud=24,hd=200,Va=(()=>{class i{_elementRef=s(E);_ngZone=s(ce);_platform=s(xe);_ariaDescriber=s(gi);_focusMonitor=s(Qe);_dir=s(ve);_injector=s(oe);_viewContainerRef=s(Ue);_mediaMatcher=s(qo);_document=s(Ve);_renderer=s(pe);_animationsDisabled=ye();_defaultOptions=s(ld,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=pd;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ze(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=ze(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=at(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=at(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new D;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=cd}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe($(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new Pt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe($(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof E)return this._overlayRef;this._detach()}let t=this._injector.get(mr).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Pa}`,r=vr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe($(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ei(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(sd)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe($(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe($(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe($(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe($(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(O(O({},n.main),r.main)),this._addOffset(O(O({},n.fallback),r.fallback))])}_addOffset(e){let t=md,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Se(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=n==="end"?"left":"right":a=n==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let m=this._overlayRef;if(m){let h=`${this._cssClassPrefix}-${Pa}-`;m.removePanelClass(h+this._currentPosition),m.addPanelClass(h+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,dd))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Se({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!we(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),pd=(()=>{class i{_changeDetectorRef=s(ne);_elementRef=s(E);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ye();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new D;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ud&&e.width>=hd}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&Ce(rd,7),t&2){let r;S(r=M())&&(n._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&g("mouseleave",function(a){return n._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(H(0,"div",1,0),Po("animationend",function(a){return n._handleAnimationEnd(a)}),H(2,"div",2),u(3),j()()),t&2&&(ht(n.tooltipClass),T("mdc-tooltip--multiline",n._isMultiline),c(3),k(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Na=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[fi,Xe,le,xi]})}return i})();function fd(i,o){if(i&1&&(l(0,"mat-option",17),u(1),d()),i&2){let e=o.$implicit;_("value",e),c(),ie(" ",e," ")}}function gd(i,o){if(i&1){let e=te();l(0,"mat-form-field",14)(1,"mat-select",16,0),g("selectionChange",function(n){F(e);let r=p(2);return A(r._changePageSize(n.value))}),$e(3,fd,2,2,"mat-option",17,Ot),d(),l(5,"div",18),g("click",function(){F(e);let n=Ee(2);return A(n.open())}),d()()}if(i&2){let e=p(2);_("appearance",e._formFieldAppearance)("color",e.color),c(),_("value",e.pageSize)("disabled",e.disabled),Ao("aria-labelledby",e._pageSizeLabelId),_("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),c(2),We(e._displayedPageSizeOptions)}}function _d(i,o){if(i&1&&(l(0,"div",15),u(1),d()),i&2){let e=p(2);c(),k(e.pageSize)}}function yd(i,o){if(i&1&&(l(0,"div",3)(1,"div",13),u(2),d(),v(3,gd,6,7,"mat-form-field",14),v(4,_d,2,1,"div",15),d()),i&2){let e=p();c(),I("id",e._pageSizeLabelId),c(),ie(" ",e._intl.itemsPerPageLabel," "),c(),C(e._displayedPageSizeOptions.length>1?3:-1),c(),C(e._displayedPageSizeOptions.length<=1?4:-1)}}function bd(i,o){if(i&1){let e=te();l(0,"button",19),g("click",function(){F(e);let n=p();return A(n._buttonClicked(0,n._previousButtonsDisabled()))}),Pe(),l(1,"svg",8),B(2,"path",20),d()()}if(i&2){let e=p();_("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),I("aria-label",e._intl.firstPageLabel)}}function vd(i,o){if(i&1){let e=te();l(0,"button",21),g("click",function(){F(e);let n=p();return A(n._buttonClicked(n.getNumberOfPages()-1,n._nextButtonsDisabled()))}),Pe(),l(1,"svg",8),B(2,"path",22),d()()}if(i&2){let e=p();_("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),I("aria-label",e._intl.lastPageLabel)}}var Cd=(()=>{class i{changes=new D;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,n)=>{if(n==0||t==0)return`0 of ${n}`;n=Math.max(n,0);let r=e*t,a=r<n?Math.min(r+t,n):r+t;return`${r+1} \u2013 ${a} of ${n}`};static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),xd=50;var wd=new b("MAT_PAGINATOR_DEFAULT_OPTIONS"),Jt=(()=>{class i{_intl=s(Cd);_changeDetectorRef=s(ne);_formFieldAppearance;_pageSizeLabelId=s(re).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new nt(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>qe(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new W;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(wd,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:n,pageSizeOptions:r,hidePageSize:a,showFirstLastButtons:m}=t;n!=null&&(this._pageSize=n),r!=null&&(this._pageSizeOptions=r),a!=null&&(this.hidePageSize=a),m!=null&&(this.showFirstLastButtons=m)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:xd),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",qe],length:[2,"length","length",qe],pageSize:[2,"pageSize","pageSize",qe],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",x],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",x],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",x]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,n){t&1&&(l(0,"div",1)(1,"div",2),v(2,yd,5,4,"div",3),l(3,"div",4)(4,"div",5),u(5),d(),v(6,bd,3,5,"button",6),l(7,"button",7),g("click",function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),Pe(),l(8,"svg",8),B(9,"path",9),d()(),ko(),l(10,"button",10),g("click",function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),Pe(),l(11,"svg",8),B(12,"path",11),d()(),v(13,vd,3,5,"button",12),d()()()),t&2&&(c(2),C(n.hidePageSize?-1:2),c(3),ie(" ",n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length)," "),c(),C(n.showFirstLastButtons?6:-1),c(),_("matTooltip",n._intl.previousPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("disabled",n._previousButtonsDisabled())("tabindex",n._previousButtonsDisabled()?-1:null),I("aria-label",n._intl.previousPageLabel),c(3),_("matTooltip",n._intl.nextPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("disabled",n._nextButtonsDisabled())("tabindex",n._nextButtonsDisabled()?-1:null),I("aria-label",n._intl.nextPageLabel),c(3),C(n.showFirstLastButtons?13:-1))},dependencies:[Et,Ji,yt,Ct,Va],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return i})(),tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[Ze,en,Na,Jt]})}return i})();function Ba(i,o){return i.open(Xn,{data:o,width:"440px",maxWidth:"calc(100vw - 32px)",restoreFocus:!0}).afterClosed().pipe(ae(e=>e===!0))}var Xn=class i{data=s($n);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-confirmation-dialog"]],decls:9,vars:8,consts:[["mat-dialog-title",""],["mat-stroked-button","","type","button",3,"mat-dialog-close"],["mat-flat-button","","type","button",1,"confirm",3,"mat-dialog-close"]],template:function(e,t){e&1&&(l(0,"h2",0),u(1),d(),l(2,"mat-dialog-content"),u(3),d(),l(4,"mat-dialog-actions")(5,"button",1),u(6),d(),l(7,"button",2),u(8),d()()),e&2&&(c(),k(t.data.title),c(2),k(t.data.message),c(2),_("mat-dialog-close",!1),c(),ie(" ",t.data.cancelText," "),c(),T("btn-danger",t.data.danger),_("mat-dialog-close",!0),c(),ie(" ",t.data.confirmText," "))},dependencies:[Ze,wi,fa,da,ma,ha,ua],encapsulation:2,changeDetection:0})};var Dd=["*"],nn=class i{icon=U.required();title=U.required();message=U("");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-empty-state"]],inputs:{icon:[1,"icon"],title:[1,"title"],message:[1,"message"]},ngContentSelectors:Dd,decls:8,vars:3,consts:[["aria-hidden","true",1,"icon-circle"],[1,"icon-24"],[1,"title"],[1,"message"]],template:function(e,t){e&1&&(ue(),l(0,"span",0)(1,"mat-icon",1),u(2),d()(),l(3,"h2",2),u(4),d(),l(5,"p",3),u(6),d(),P(7)),e&2&&(c(2),k(t.icon()),c(2),k(t.title()),c(2),k(t.message()))},dependencies:[Ke,Ye],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:72px 24px;text-align:center}.icon-circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;margin-bottom:8px;border-radius:var(--radius-full);background:var(--hover);color:var(--muted)}.title[_ngcontent-%COMP%]{margin:0;font-size:16px;line-height:24px;font-weight:600}.message[_ngcontent-%COMP%]{max-width:420px;margin:0 0 12px;color:var(--muted)}"],changeDetection:0})};function Sd(i,o){i&1&&(H(0,"div",9)(1,"span",10),fe(2,"span",11),H(3,"span",12),fe(4,"span",13)(5,"span",14),j()(),fe(6,"span",5)(7,"span",6)(8,"span",15)(9,"span",4)(10,"span",16),j())}function Md(i,o){if(i&1&&(H(0,"div",1)(1,"div",3),fe(2,"span",4)(3,"span",5)(4,"span",6)(5,"span",7)(6,"span",6)(7,"span",8),j(),$e(8,Sd,11,0,"div",9,Ot),j()),i&2){let e=p();c(8),We(e.items())}}function Ed(i,o){i&1&&(H(0,"div",17)(1,"span",10),fe(2,"span",18),H(3,"span",12),fe(4,"span",13)(5,"span",19),j()(),fe(6,"span",14)(7,"span",20),H(8,"span",21),fe(9,"span",16),j()())}function kd(i,o){if(i&1&&(H(0,"div",2),$e(1,Ed,10,0,"div",17,Ot),j()),i&2){let e=p();c(),We(e.items())}}var on=class i{variant=U("table");count=U(5);label=U("Loading\u2026");items=Q(()=>Array.from({length:Math.max(0,this.count())},(o,e)=>e));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-loading-skeleton"]],hostAttrs:["role","status","aria-live","polite"],inputs:{variant:[1,"variant"],count:[1,"count"],label:[1,"label"]},decls:4,vars:2,consts:[[1,"sr-only"],["aria-hidden","true",1,"card","table"],["aria-hidden","true",1,"card-grid"],[1,"table-head"],[1,"bar","w-80"],[1,"bar","w-56"],[1,"bar","w-64"],[1,"bar","w-72"],[1,"bar","w-48"],[1,"table-row"],[1,"who"],[1,"bar","circle-32"],[1,"stack"],[1,"bar","w-112"],[1,"bar","w-140","thin"],[1,"bar","w-96"],[1,"bar","pill"],[1,"card","tile"],[1,"bar","circle-48"],[1,"bar","w-56","thin"],[1,"bar","w-112","thin"],[1,"tile-foot"]],template:function(e,t){e&1&&(H(0,"span",0),u(1),j(),v(2,Md,10,0,"div",1)(3,kd,3,0,"div",2)),e&2&&(c(),k(t.label()),c(),C(t.variant()==="table"?2:3))},styles:["[_nghost-%COMP%]{display:block;container-type:inline-size}.bar[_ngcontent-%COMP%]{display:block;flex:none;height:12px;border-radius:var(--radius-sm);background:linear-gradient(90deg,var(--hover) 0%,var(--row-hover) 40%,var(--hover) 80%);background-size:300% 100%;animation:_ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite}.bar.thin[_ngcontent-%COMP%]{height:10px}@keyframes _ngcontent-%COMP%_shimmer{0%{background-position:100% 0}to{background-position:0 0}}@media(prefers-reduced-motion:reduce){.bar[_ngcontent-%COMP%]{animation:none}}.w-48[_ngcontent-%COMP%]{width:48px;max-width:100%}.w-56[_ngcontent-%COMP%]{width:56px;max-width:100%}.w-64[_ngcontent-%COMP%]{width:64px;max-width:100%}.w-72[_ngcontent-%COMP%]{width:72px;max-width:100%}.w-80[_ngcontent-%COMP%]{width:80px;max-width:100%}.w-96[_ngcontent-%COMP%]{width:96px;max-width:100%}.w-112[_ngcontent-%COMP%]{width:112px;max-width:100%}.w-140[_ngcontent-%COMP%]{width:140px;max-width:100%}.circle-32[_ngcontent-%COMP%], .circle-48[_ngcontent-%COMP%]{border-radius:var(--radius-full)}.circle-32[_ngcontent-%COMP%]{width:32px;height:32px}.circle-48[_ngcontent-%COMP%]{width:48px;height:48px}.pill[_ngcontent-%COMP%]{width:72px;height:22px;border-radius:var(--radius-full)}.who[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;min-width:0}.table[_ngcontent-%COMP%]{overflow:hidden}.table-head[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(200px,2.2fr) repeat(4,minmax(72px,1fr)) 96px;align-items:center;gap:16px;padding:0 16px}.table-head[_ngcontent-%COMP%]{height:44px;border-bottom:1px solid var(--border)}.table-row[_ngcontent-%COMP%]{height:56px}.table-row[_ngcontent-%COMP%] + .table-row[_ngcontent-%COMP%]{border-top:1px solid var(--border)}@container (max-width: 699.98px){.table-head[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) 72px}.table-head[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(:last-child), .table-row[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(:last-child){display:none}}.tile[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px;padding:20px}.tile-foot[_ngcontent-%COMP%]{padding-top:14px;border-top:1px solid var(--border)}"],changeDetection:0})};var Ha=[5,10,20],dt={search:"",department:null,sortField:"joiningDate",sortDirection:"desc",pageIndex:0,pageSize:5},Td=["name","employeeId","department","designation","joiningDate","status"];function ja(i){return Td.includes(i)}function ke(i){return`${i.firstName} ${i.lastName}`.trim()}var rn={production:!0,apiUrl:"http://localhost:3000"};function tt(i){return o=>Co(()=>new Error(`Couldn't ${i}. ${Rd(o)}`))}function Rd(i){return i instanceof Wo?i.status===0?"The server could not be reached. Check your connection and try again.":i.status===404?"The record was not found. It may have been deleted.":i.status>=500?"The server ran into a problem. Please try again.":`The server responded with ${i.statusText?`${i.status} ${i.statusText}`:`${i.status}`}.`:i instanceof Error?i.message:"Something went wrong."}var an=class i{http=s(ui);departments$=this.lookup("departments","load departments");designations$=this.lookup("designations","load designations");nationalities$=this.lookup("nationalities","load nationalities");skills$=this.lookup("skills","load skills");documentTypes$=this.lookup("documentTypes","load document types");countryCodes$=this.lookup("countryCodes","load country codes");getDepartments(){return this.departments$}getDesignations(o){return this.designations$.pipe(ae(e=>e.filter(t=>t.departmentId===o)))}getNationalities(){return this.nationalities$}getSkills(){return this.skills$}getDocumentTypes(){return this.documentTypes$}getCountryCodes(){return this.countryCodes$}lookup(o,e){return this.http.get(`${rn.apiUrl}/${o}`).pipe(Ie(tt(e)),ri(1))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})};var Id=/^E-(\d+)$/,Od=1e3;function Fd(i){let o=i.map(t=>Id.exec(t.employeeId)?.[1]).filter(t=>t!==void 0).map(Number);return`E-${o.length?Math.max(...o)+1:Od}`}var sn=class i{http=s(ui);url=`${rn.apiUrl}/employees`;getEmployees(){return this.http.get(this.url).pipe(Ie(tt("load employees")))}getEmployee(o){return this.http.get(`${this.url}/${o}`).pipe(Ie(tt("load the employee")))}addEmployee(o){return this.http.get(this.url).pipe(Ge(e=>{let t=new Date().toISOString(),n=de(O({},o),{employeeId:Fd(e),createdAt:t,updatedAt:t});return this.http.post(this.url,n)}),Ie(tt("add the employee")))}updateEmployee(o,e){let t=`${this.url}/${o}`;return this.http.get(t).pipe(Ge(n=>{let r=de(O({},e),{id:o,createdAt:n.createdAt,updatedAt:new Date().toISOString()});return this.http.put(t,r)}),Ie(tt("update the employee")))}deleteEmployee(o){return this.http.delete(`${this.url}/${o}`).pipe(ae(()=>{}),Ie(tt("delete the employee")))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})};var kt=class i{transform(o){let e=(o??"").trim().split(/\s+/).filter(Boolean);if(!e.length)return"";let t=e[0][0],n=e.length>1?e[e.length-1][0]:"";return`${t}${n}`.toUpperCase()}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=Ro({name:"initials",type:i,pure:!0})};var Tt=class i{name=U.required();view=_e();edit=_e();delete=_e();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-action-menu"]],inputs:{name:[1,"name"]},outputs:{view:"view",edit:"edit",delete:"delete"},decls:21,vars:2,consts:[["menu","matMenu"],["mat-icon-button","","type","button",1,"icon-btn-sm","trigger",3,"click","keydown.enter","keydown.space","matMenuTriggerFor"],["xPosition","before"],["mat-menu-item","","type","button",3,"click"],["mat-menu-item","","type","button",1,"menu-item-danger",3,"click"]],template:function(e,t){if(e&1&&(l(0,"button",1),g("click",function(r){return r.stopPropagation()})("keydown.enter",function(r){return r.stopPropagation()})("keydown.space",function(r){return r.stopPropagation()}),l(1,"mat-icon"),u(2,"more_vert"),d()(),l(3,"mat-menu",2,0)(5,"button",3),g("click",function(){return t.view.emit()}),l(6,"mat-icon"),u(7,"visibility"),d(),l(8,"span"),u(9,"View"),d()(),l(10,"button",3),g("click",function(){return t.edit.emit()}),l(11,"mat-icon"),u(12,"edit"),d(),l(13,"span"),u(14,"Edit"),d()(),B(15,"mat-divider"),l(16,"button",4),g("click",function(){return t.delete.emit()}),l(17,"mat-icon"),u(18,"delete"),d(),l(19,"span"),u(20,"Delete"),d()()()),e&2){let n=Ee(4);_("matMenuTriggerFor",n),I("aria-label","Actions for "+t.name())}},dependencies:[Ze,Ct,Er,Mr,Ke,Ye,Sr,wr,xr,Dr],styles:["[_nghost-%COMP%]{display:inline-flex}.trigger[_ngcontent-%COMP%]{color:var(--muted)}"],changeDetection:0})};var Ad={Active:"badge--green",Probation:"badge--orange",Inactive:"badge--grey"},Rt=class i{status=U.required();tone=Q(()=>Ad[this.status()]);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-status-badge"]],inputs:{status:[1,"status"]},decls:2,vars:3,consts:[[1,"badge"]],template:function(e,t){e&1&&(H(0,"span",0),u(1),j()),e&2&&(ht(t.tone()),c(),k(t.status()))},encapsulation:2,changeDetection:0})};var Pd=i=>["/employees",i];function Vd(i,o){if(i&1&&B(0,"img",2),i&2){p();let e=Ft(0);_("src",e.photoUrl,si)}}function Nd(i,o){if(i&1&&(u(0),pt(1,"initials")),i&2){let e=p();ie(" ",di(1,1,e.name())," ")}}var ln=class i{employee=U.required();view=_e();edit=_e();delete=_e();name=Q(()=>ke(this.employee()));onCardClick(o){(!(o.target instanceof Element)||!o.target.closest("a, button"))&&this.view.emit(this.employee())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-card"]],hostAttrs:["role","listitem"],hostBindings:function(e,t){e&1&&g("click",function(r){return t.onCardClick(r)})},inputs:{employee:[1,"employee"]},outputs:{view:"view",edit:"edit",delete:"delete"},decls:24,vars:15,consts:[[1,"top"],["aria-hidden","true",1,"avatar","avatar--48"],["alt","",3,"src"],[1,"identity"],[1,"name","truncate",3,"routerLink"],[1,"id"],[1,"menu",3,"view","edit","delete","name"],[1,"line"],[1,"icon-16"],[1,"truncate"],[1,"foot"],[3,"status"]],template:function(e,t){if(e&1){let n=te();zo(0),l(1,"div",0)(2,"span",1),v(3,Vd,1,1,"img",2)(4,Nd,2,3),d(),l(5,"div",3)(6,"a",4),u(7),d(),l(8,"span",5),u(9),d()()(),l(10,"app-employee-action-menu",6),g("view",function(){F(n);let a=Ft(0);return A(t.view.emit(a))})("edit",function(){F(n);let a=Ft(0);return A(t.edit.emit(a))})("delete",function(){F(n);let a=Ft(0);return A(t.delete.emit(a))}),d(),l(11,"div",7)(12,"mat-icon",8),u(13,"work"),d(),l(14,"span",9),u(15),d()(),l(16,"div",7)(17,"mat-icon",8),u(18,"calendar_today"),d(),l(19,"span"),u(20),pt(21,"date"),d()(),l(22,"div",10),B(23,"app-employee-status-badge",11),d()}if(e&2){let n=Bo(t.employee());c(3),C(n.photoUrl?3:4),c(3),_("routerLink",li(13,Pd,n.id)),c(),k(t.name()),c(2),k(n.employeeId),c(),_("name",t.name()),c(5),Lo("",n.designation," \xB7 ",n.department),c(5),ie("Joined ",ci(21,10,n.joiningDate,"dd MMM yyyy")),c(3),_("status",n.status)}},dependencies:[Tt,Rt,Ke,Ye,bt,mi,kt],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;gap:14px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--card);cursor:pointer;transition:background-color .15s}[_nghost-%COMP%]:hover{background:var(--row-hover)}.top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0;padding-right:28px}.identity[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.name[_ngcontent-%COMP%]{color:var(--text);font-weight:500;border-radius:4px}.name[_ngcontent-%COMP%]:hover{text-decoration:underline;text-underline-offset:2px}.id[_ngcontent-%COMP%]{color:var(--muted);font-size:12px;line-height:16px;font-variant-numeric:tabular-nums}.menu[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px}.line[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-width:0;color:var(--muted);font-size:13px;line-height:18px}.foot[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--border)}"],changeDetection:0})};var Ld="\uFEFF",zd=["Employee ID","Name","Email","Department","Designation","Joining Date","Status"];function Ga(i){let o=i.map(t=>[t.employeeId,ke(t),t.email,t.department,t.designation,t.joiningDate,t.status]),e=[zd,...o].map(t=>t.map(Bd).join(","));return Ld+e.join(`\r
`)+`\r
`}function Ua(i){let o=e=>String(e).padStart(2,"0");return`employees-${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}.csv`}function Bd(i){return`"${(/^[=+\-@\t\r]/.test(i)?`'${i}`:i).replace(/"/g,'""')}"`}var jd=[[["caption"]],[["colgroup"],["col"]],"*"],Gd=["caption","colgroup, col","*"];function Ud(i,o){i&1&&P(0,2)}function $d(i,o){i&1&&(l(0,"thead",0),ge(1,1),d(),l(2,"tbody",0),ge(3,2)(4,3),d(),l(5,"tfoot",0),ge(6,4),d())}function Wd(i,o){i&1&&ge(0,1)(1,2)(2,3)(3,4)}var Te=new b("CDK_TABLE");var mn=(()=>{class i{template=s(Me);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),un=(()=>{class i{template=s(Me);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),qa=(()=>{class i{template=s(Me);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),it=(()=>{class i{_table=s(Te,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,r){if(t&1&&Ne(r,mn,5)(r,un,5)(r,qa,5),t&2){let a;S(a=M())&&(n.cell=a.first),S(a=M())&&(n.headerCell=a.first),S(a=M())&&(n.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",x],stickyEnd:[2,"stickyEnd","stickyEnd",x]}})}return i})(),cn=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}},Qa=(()=>{class i extends cn{constructor(){super(s(it),s(E))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[R]})}return i})();var Ya=(()=>{class i extends cn{constructor(){let e=s(it),t=s(E);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[R]})}return i})();var to=(()=>{class i{template=s(Me);_differs=s(gt);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ti?e.headerCell.template:this instanceof io?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,features:[me]})}return i})(),ti=(()=>{class i extends to{_table=s(Te,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Me),s(gt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",x]},features:[R,me]})}return i})(),io=(()=>{class i extends to{_table=s(Te,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Me),s(gt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",x]},features:[R,me]})}return i})(),hn=(()=>{class i extends to{_table=s(Te,{optional:!0});when;constructor(){super(s(Me),s(gt))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[R]})}return i})(),ct=(()=>{class i{_viewContainer=s(Ue);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),no=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&ge(0,0)},dependencies:[ct],encapsulation:2})}return i})();var oo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&ge(0,0)},dependencies:[ct],encapsulation:2})}return i})(),Ka=(()=>{class i{templateRef=s(Me);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),$a=["top","bottom","left","right"],eo=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,r,a,m){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=r,this._positionListener=a,this._tableInjector=m,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Se({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,r=!0){if(!o.length||!this._isBrowser||!(e.some(De=>De)||t.some(De=>De))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=o[0],m=a.children.length,h=this.direction==="rtl",w=h?"right":"left",N=h?"left":"right",X=e.lastIndexOf(!0),J=t.indexOf(!0),Z,ii,ni;r&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),Se({earlyRead:()=>{Z=this._getCellWidths(a,n),ii=this._getStickyStartColumnPositions(Z,e),ni=this._getStickyEndColumnPositions(Z,t)},write:()=>{for(let De of o)for(let be=0;be<m;be++){let ho=De.children[be];e[be]&&this._addStickyStyle(ho,w,ii[be],be===X),t[be]&&this._addStickyStyle(ho,N,ni[be],be===J)}this._positionListener&&Z.some(De=>!!De)&&(this._positionListener.stickyColumnsUpdated({sizes:X===-1?[]:Z.slice(0,X+1).map((De,be)=>e[be]?De:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:J===-1?[]:Z.slice(J).map((De,be)=>t[be+J]?De:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t==="bottom"?o.slice().reverse():o,r=t==="bottom"?e.slice().reverse():e,a=[],m=[],h=[];Se({earlyRead:()=>{for(let w=0,N=0;w<n.length;w++){if(!r[w])continue;a[w]=N;let X=n[w];h[w]=this._isNativeHtmlTable?Array.from(X.children):[X];let J=this._retrieveElementSize(X).height;N+=J,m[w]=J}},write:()=>{let w=r.lastIndexOf(!0);for(let N=0;N<n.length;N++){if(!r[N])continue;let X=a[N],J=N===w;for(let Z of h[N])this._addStickyStyle(Z,t,X,J)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:m,offsets:a,elements:h}):this._positionListener?.stickyFooterRowsUpdated({sizes:m,offsets:a,elements:h})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&Se({write:()=>{let t=o.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]="",o.classList.remove(this._borderCellCss[n]);$a.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex="",this._needsPositionStickyOnElement&&(o.style.position=""),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of $a)o.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let r=0;r<n.length;r++){let a=n[r];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let r=0;r<o.length;r++)e[r]&&(t[r]=n,n+=o[r]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let r=o.length;r>0;r--)e[r]&&(t[r]=n,n+=o[r]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:"border-box"})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&qd(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function qd(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(o=>i.classList.contains(o))}var ei=new b("STICKY_POSITIONING_LISTENER");var ro=(()=>{class i{viewContainer=s(Ue);elementRef=s(E);constructor(){let e=s(Te);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","rowOutlet",""]]})}return i})(),ao=(()=>{class i{viewContainer=s(Ue);elementRef=s(E);constructor(){let e=s(Te);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),so=(()=>{class i{viewContainer=s(Ue);elementRef=s(E);constructor(){let e=s(Te);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),lo=(()=>{class i{viewContainer=s(Ue);elementRef=s(E);constructor(){let e=s(Te);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),co=(()=>{class i{_differs=s(gt);_changeDetectorRef=s(ne);_elementRef=s(E);_dir=s(ve,{optional:!0});_platform=s(xe);_viewRepeater;_viewportRuler=s(Ci);_injector=s(oe);_virtualScrollViewport=s(hr,{optional:!0,host:!0});_positionListener=s(ei,{optional:!0})||s(ei,{optional:!0,skipSelf:!0});_document=s(Ve);_data;_renderedRange;_onDestroy=new D;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new D;_footerRowStickyUpdates=new D;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new D;_dataStream=new D;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new W;viewChange=new go({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new ft("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe($(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new cr:new $i,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),vi(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,r,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===vt.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let r=t.get(n.currentIndex);r.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Wa(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Wa(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let m=0;m<t.length;m++)this._renderRows[m].rowDef===r&&a.push(t[m]);this._addStickyColumnStyles(a,r)}),n.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let a=this._data[r],m=this._getRenderRowsForData(a,r,n.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let h=0;h<m.length;h++){let w=m[h],N=this._cachedRenderRowsMap.get(w.data);N.has(w.rowDef)?N.get(w.rowDef).push(w):N.set(w.rowDef,[w]),e.push(w)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(a=>{let m=n&&n.has(a)?n.get(a):[];if(m.length){let h=m.shift();return h.dataIndex=t,h}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),dn(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=dn(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=dn(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=dn(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,m)=>{let h=!!m.getColumnsDiff();return a||h},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||n||r}_switchDataSource(e){this._data=[],vi(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;vi(this.dataSource)?e=this.dataSource.connect(this):xo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=It(this.dataSource)),this._renderChangeSubscription=oi([e,this.viewChange]).pipe($(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(m=>{let h=this._columnDefsByName.get(m);return h}),r=n.map(m=>m.sticky),a=n.map(m=>m.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let r=e.viewContainer.get(n);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;r&&n.push(r)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,r={$implicit:e.data};return{templateRef:n.template,context:r,index:t}}_renderRow(e,t,n,r={}){let a=e.viewContainer.createEmbeddedView(t.template,r,n);return this._renderCellTemplateForItem(t,r),a}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))ct.mostRecentCellOutlet&&ct.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let a=e.get(t).context;a.count=n,a.first=t===0,a.last=t===n-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new eo(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:It()).pipe($(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?yo:_o;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Do(0,t),$(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,r)=>this._measureRangeSize(n,r)}),oi([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe($(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let m=r.elements[a];if(m){let h=r.offsets[a],w=n!==0?Math.max(n-h,h):-h;for(let N of m)N.style.top=`${-w}px`}}}),oi([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe($(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let m=r.elements[a];if(m)for(let h of m)h.style.bottom=`${n+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let r=n.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let m=a.querySelectorAll(e._cellSelector);for(let h=0;h<m.length;h++)m[h].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let a=e.start-n.start,m=e.end-e.start,h,w;for(let J=0;J<m;J++){let Z=r.get(J+a);if(Z&&Z.rootNodes.length){h=w=Z.rootNodes[0];break}}for(let J=m-1;J>-1;J--){let Z=r.get(J+a);if(Z&&Z.rootNodes.length){w=Z.rootNodes[Z.rootNodes.length-1];break}}let N=h?.getBoundingClientRect?.(),X=w?.getBoundingClientRect?.();return N&&X?X.bottom-N.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,r){if(t&1&&Ne(r,Ka,5)(r,it,5)(r,hn,5)(r,ti,5)(r,io,5),t&2){let a;S(a=M())&&(n._noDataRow=a.first),S(a=M())&&(n._contentColumnDefs=a),S(a=M())&&(n._contentRowDefs=a),S(a=M())&&(n._contentHeaderRowDefs=a),S(a=M())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&T("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",x],fixedLayout:[2,"fixedLayout","fixedLayout",x],recycleRows:[2,"recycleRows","recycleRows",x]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[G([{provide:Te,useExisting:i},{provide:ei,useValue:null}])],ngContentSelectors:Gd,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(ue(jd),P(0),P(1,1),v(2,Ud,1,0),v(3,$d,7,0)(4,Wd,4,0)),t&2&&(c(2),C(n._isServer?2:-1),c(),C(n._isNativeHtmlTable?3:4))},dependencies:[ao,ro,lo,so],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function dn(i,o){return i.concat(Array.from(o))}function Wa(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var Za=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[pr]})}return i})();var Qd=["mat-sort-header",""],Yd=["*",[["","matSortHeaderIcon",""]]],Kd=["*","[matSortHeaderIcon]"];function Zd(i,o){i&1&&(Pe(),H(0,"svg",3),fe(1,"path",4),j())}function Xd(i,o){i&1&&(H(0,"div",2),P(1,1,null,Zd,2,0),j())}var Xa=new b("MAT_SORT_DEFAULT_OPTIONS"),mo=(()=>{class i{_defaultOptions;_initializedStream=new nt(1);sortables=new Map;_stateChanges=new D;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new W;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=Jd(e.start||this.start,t),r=n.indexOf(this.direction)+1;return r>=n.length&&(r=0),n[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||i)(K(Xa,8))};static \u0275dir=f({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",x],disabled:[2,"matSortDisabled","disabled",x]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[me]})}return i})();function Jd(i,o){let e=["asc","desc"];return i=="desc"&&e.reverse(),o||e.push(""),e}var Ja=(()=>{class i{_sort=s(mo,{optional:!0});_columnDef=s(it,{optional:!0});_changeDetectorRef=s(ne);_focusMonitor=s(Qe);_elementRef=s(E);_ariaDescriber=s(gi,{optional:!0});_renderChanges;_animationsDisabled=ye();_recentlyCleared=q(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(_t).load(_i);let e=s(Xa,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Re(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,n){t&1&&g("click",function(){return n._toggleOnInteraction()})("keydown",function(a){return n._handleKeydown(a)})("mouseleave",function(){return n._recentlyCleared.set(null)}),t&2&&(I("aria-sort",n._getAriaSortAttribute()),T("mat-sort-header-disabled",n._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",x],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",x]},exportAs:["matSortHeader"],attrs:Qd,ngContentSelectors:Kd,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,n){t&1&&(ue(Yd),H(0,"div",0)(1,"div",1),P(2),j(),v(3,Xd,3,0,"div",2),j()),t&2&&(T("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before",n.arrowPosition==="before")("mat-sort-header-descending",n._sort.direction==="desc")("mat-sort-header-ascending",n._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",n._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",n._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",n._animationsDisabled),I("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),c(3),C(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),es=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[le]})}return i})();var tc=[[["caption"]],[["colgroup"],["col"]],"*"],ic=["caption","colgroup, col","*"];function nc(i,o){i&1&&P(0,2)}function oc(i,o){i&1&&(l(0,"thead",0),ge(1,1),d(),l(2,"tbody",2),ge(3,3)(4,4),d(),l(5,"tfoot",0),ge(6,5),d())}function rc(i,o){i&1&&ge(0,1)(1,3)(2,4)(3,5)}var ts=(()=>{class i extends co{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[G([{provide:co,useExisting:i},{provide:Te,useExisting:i},{provide:ei,useValue:null}]),R],ngContentSelectors:ic,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(ue(tc),P(0),P(1,1),v(2,nc,1,0),v(3,oc,7,0)(4,rc,4,0)),t&2&&(c(2),C(n._isServer?2:-1),c(),C(n._isNativeHtmlTable?3:4))},dependencies:[ao,ro,lo,so],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),is=(()=>{class i extends mn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matCellDef",""]],features:[G([{provide:mn,useExisting:i}]),R]})}return i})(),ns=(()=>{class i extends un{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matHeaderCellDef",""]],features:[G([{provide:un,useExisting:i}]),R]})}return i})();var os=(()=>{class i extends it{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[G([{provide:it,useExisting:i}]),R]})}return i})(),rs=(()=>{class i extends Qa{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[R]})}return i})();var as=(()=>{class i extends Ya{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[R]})}return i})();var ss=(()=>{class i extends ti{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",x]},features:[G([{provide:ti,useExisting:i}]),R]})}return i})();var ls=(()=>{class i extends hn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[G([{provide:hn,useExisting:i}]),R]})}return i})(),ds=(()=>{class i extends no{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[G([{provide:no,useExisting:i}]),R],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&ge(0,0)},dependencies:[ct],encapsulation:2})}return i})();var cs=(()=>{class i extends oo{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[G([{provide:oo,useExisting:i}]),R],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&ge(0,0)},dependencies:[ct],encapsulation:2})}return i})();var ms=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=L({imports:[Za,le]})}return i})();var sc=i=>["/employees",i];function lc(i,o){i&1&&(l(0,"th",18),u(1,"Name"),d())}function dc(i,o){if(i&1&&B(0,"img",22),i&2){let e=p().$implicit;_("src",e.photoUrl,si)}}function cc(i,o){if(i&1&&(u(0),pt(1,"initials")),i&2){let e=p().$implicit,t=p();ie(" ",di(1,1,t.fullName(e))," ")}}function mc(i,o){if(i&1&&(l(0,"td",19)(1,"div",20)(2,"span",21),v(3,dc,1,1,"img",22)(4,cc,2,3),d(),l(5,"div",23)(6,"a",24),u(7),d(),l(8,"span",25),u(9),d()()()()),i&2){let e=o.$implicit,t=p();c(3),C(e.photoUrl?3:4),c(3),_("routerLink",li(4,sc,e.id)),c(),k(t.fullName(e)),c(2),k(e.email)}}function uc(i,o){i&1&&(l(0,"th",26),u(1,"Employee ID"),d())}function hc(i,o){if(i&1&&(l(0,"td",27),u(1),d()),i&2){let e=o.$implicit;c(),k(e.employeeId)}}function pc(i,o){i&1&&(l(0,"th",26),u(1,"Department"),d())}function fc(i,o){if(i&1&&(l(0,"td",19),u(1),d()),i&2){let e=o.$implicit;c(),k(e.department)}}function gc(i,o){i&1&&(l(0,"th",26),u(1,"Designation"),d())}function _c(i,o){if(i&1&&(l(0,"td",19),u(1),d()),i&2){let e=o.$implicit;c(),k(e.designation)}}function yc(i,o){i&1&&(l(0,"th",28),u(1," Joining Date "),d())}function bc(i,o){if(i&1&&(l(0,"td",19),u(1),pt(2,"date"),d()),i&2){let e=o.$implicit;c(),k(ci(2,1,e.joiningDate,"dd MMM yyyy"))}}function vc(i,o){i&1&&(l(0,"th",26),u(1,"Status"),d())}function Cc(i,o){if(i&1&&(l(0,"td",19),B(1,"app-employee-status-badge",29),d()),i&2){let e=o.$implicit;c(),_("status",e.status)}}function xc(i,o){i&1&&(l(0,"th",26)(1,"span",30),u(2,"Actions"),d()())}function wc(i,o){if(i&1){let e=te();l(0,"td",31)(1,"app-employee-action-menu",32),g("view",function(){let n=F(e).$implicit,r=p();return A(r.view.emit(n))})("edit",function(){let n=F(e).$implicit,r=p();return A(r.edit.emit(n))})("delete",function(){let n=F(e).$implicit,r=p();return A(r.delete.emit(n))}),d()()}if(i&2){let e=o.$implicit,t=p();c(),_("name",t.fullName(e))}}function Dc(i,o){i&1&&B(0,"tr",33)}function Sc(i,o){if(i&1){let e=te();l(0,"tr",34),g("click",function(n){let r=F(e).$implicit,a=p();return A(a.onRowClick(n,r))}),d()}}var pn=class i{employees=U.required();sort=U.required();total=U.required();pageIndex=U.required();pageSize=U.required();pageSizeOptions=U.required();compact=U(!1);sortChange=_e();pageChange=_e();view=_e();edit=_e();delete=_e();columns=["name","employeeId","department","designation","joiningDate","status","actions"];fullName=ke;trackById=(o,e)=>e.id;onSortChange({active:o,direction:e}){ja(o)&&this.sortChange.emit({field:o,direction:e})}onRowClick(o,e){(!(o.target instanceof Element)||!o.target.closest("a, button"))&&this.view.emit(e)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-table"]],inputs:{employees:[1,"employees"],sort:[1,"sort"],total:[1,"total"],pageIndex:[1,"pageIndex"],pageSize:[1,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"],compact:[1,"compact"]},outputs:{sortChange:"sortChange",pageChange:"pageChange",view:"view",edit:"edit",delete:"delete"},decls:26,vars:12,consts:[[1,"scroll"],["mat-table","","matSort","","matSortDisableClear","","aria-label","Employees",3,"matSortChange","dataSource","trackBy","matSortActive","matSortDirection"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","name","start","asc",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","employeeId"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","id",4,"matCellDef"],["matColumnDef","department"],["matColumnDef","designation"],["matColumnDef","joiningDate"],["mat-header-cell","","mat-sort-header","joiningDate","start","desc",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","actions"],["mat-cell","","class","actions",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","row",3,"click",4,"matRowDef","matRowDefColumns"],["aria-label","Employee pages",3,"page","length","pageIndex","pageSize","pageSizeOptions","hidePageSize","showFirstLastButtons"],["mat-header-cell","","mat-sort-header","name","start","asc"],["mat-cell",""],[1,"who"],["aria-hidden","true",1,"avatar"],["alt","",3,"src"],[1,"who-text"],[1,"name","truncate",3,"routerLink"],[1,"email","truncate"],["mat-header-cell",""],["mat-cell","",1,"id"],["mat-header-cell","","mat-sort-header","joiningDate","start","desc"],[3,"status"],[1,"sr-only"],["mat-cell","",1,"actions"],[3,"view","edit","delete","name"],["mat-header-row",""],["mat-row","",1,"row",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"table",1),g("matSortChange",function(r){return t.onSortChange(r)}),Oe(2,2),Y(3,lc,2,0,"th",3)(4,mc,10,6,"td",4),Fe(),Oe(5,5),Y(6,uc,2,0,"th",6)(7,hc,2,1,"td",7),Fe(),Oe(8,8),Y(9,pc,2,0,"th",6)(10,fc,2,1,"td",4),Fe(),Oe(11,9),Y(12,gc,2,0,"th",6)(13,_c,2,1,"td",4),Fe(),Oe(14,10),Y(15,yc,2,0,"th",11)(16,bc,3,4,"td",4),Fe(),Oe(17,12),Y(18,vc,2,0,"th",6)(19,Cc,2,1,"td",4),Fe(),Oe(20,13),Y(21,xc,3,0,"th",6)(22,wc,2,1,"td",14),Fe(),Y(23,Dc,1,0,"tr",15)(24,Sc,1,0,"tr",16),d()(),l(25,"mat-paginator",17),g("page",function(r){return t.pageChange.emit(r)}),d()),e&2&&(c(),_("dataSource",t.employees())("trackBy",t.trackById)("matSortActive",t.sort().field)("matSortDirection",t.sort().direction),c(22),_("matHeaderRowDef",t.columns),c(),_("matRowDefColumns",t.columns),c(),_("length",t.total())("pageIndex",t.pageIndex())("pageSize",t.pageSize())("pageSizeOptions",t.pageSizeOptions())("hidePageSize",t.compact())("showFirstLastButtons",!t.compact()))},dependencies:[Tt,Rt,tn,Jt,es,mo,Ja,ms,ts,ns,ss,os,is,ls,rs,as,ds,cs,bt,mi,kt],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--card)}.scroll[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;min-width:860px}th.mat-mdc-header-cell[_ngcontent-%COMP%], td.mat-mdc-cell[_ngcontent-%COMP%]{white-space:nowrap}th[aria-sort=ascending][_ngcontent-%COMP%], th[aria-sort=descending][_ngcontent-%COMP%]{color:var(--text)}.row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .15s}.row[_ngcontent-%COMP%]:hover{background:var(--row-hover)}.who[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.who-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.name[_ngcontent-%COMP%]{color:var(--text);font-weight:500;line-height:18px;border-radius:4px}.name[_ngcontent-%COMP%]:hover{text-decoration:underline;text-underline-offset:2px}.email[_ngcontent-%COMP%]{color:var(--muted);font-size:12px;line-height:16px}.id[_ngcontent-%COMP%]{color:var(--muted);font-variant-numeric:tabular-nums}.actions[_ngcontent-%COMP%]{width:56px;text-align:right}mat-paginator[_ngcontent-%COMP%]{border-top:1px solid var(--border)}"],changeDetection:0})};var hs=(i,o)=>o.id;function Mc(i,o){if(i&1){let e=te();l(0,"button",26),g("click",function(){F(e);let n=p();return A(n.clearSearch())}),l(1,"mat-icon",18),u(2,"close"),d()()}}function Ec(i,o){if(i&1&&(l(0,"mat-option",15),u(1),d()),i&2){let e=o.$implicit;_("value",e.name),c(),k(e.name)}}function kc(i,o){if(i&1&&B(0,"app-loading-skeleton",21),i&2){let e=p();_("variant",e.view())("count",e.view()==="table"?5:8)}}function Tc(i,o){if(i&1){let e=te();l(0,"app-empty-state",22)(1,"button",27),g("click",function(){F(e);let n=p();return A(n.load())}),l(2,"mat-icon"),u(3,"refresh"),d(),u(4," Retry "),d()()}if(i&2){let e=p();_("message",e.error()??"")}}function Rc(i,o){i&1&&(l(0,"app-empty-state",23)(1,"a",5)(2,"mat-icon"),u(3,"add"),d(),u(4," Add Employee "),d()())}function Ic(i,o){if(i&1){let e=te();l(0,"app-empty-state",24)(1,"button",27),g("click",function(){F(e);let n=p();return A(n.clearFilters())}),u(2,"Clear filters"),d()()}}function Oc(i,o){if(i&1){let e=te();l(0,"app-employee-table",28),g("sortChange",function(n){F(e);let r=p();return A(r.sort.set(n))})("pageChange",function(n){F(e);let r=p();return A(r.onPage(n))})("view",function(n){F(e);let r=p();return A(r.open(n))})("edit",function(n){F(e);let r=p();return A(r.edit(n))})("delete",function(n){F(e);let r=p();return A(r.confirmDelete(n))}),d()}if(i&2){let e=p();_("employees",e.paged())("sort",e.sort())("total",e.sorted().length)("pageIndex",e.currentPageIndex())("pageSize",e.pageSize())("pageSizeOptions",e.pageSizeOptions)("compact",e.compact())}}function Fc(i,o){if(i&1){let e=te();l(0,"app-employee-card",32),g("view",function(n){F(e);let r=p(2);return A(r.open(n))})("edit",function(n){F(e);let r=p(2);return A(r.edit(n))})("delete",function(n){F(e);let r=p(2);return A(r.confirmDelete(n))}),d()}if(i&2){let e=o.$implicit;_("employee",e)}}function Ac(i,o){if(i&1){let e=te();l(0,"div",29),$e(1,Fc,1,1,"app-employee-card",30,hs),d(),l(3,"mat-paginator",31),g("page",function(n){F(e);let r=p();return A(r.onPage(n))}),d()}if(i&2){let e=p();c(),We(e.paged()),c(2),_("length",e.sorted().length)("pageIndex",e.currentPageIndex())("pageSize",e.pageSize())("pageSizeOptions",e.pageSizeOptions)("hidePageSize",e.compact())("showFirstLastButtons",!e.compact())}}var us="infithra-employee-view",uo="(max-width: 767.98px)",Pc=300,fn=class i{employeeService=s(sn);dialog=s(Kt);notifications=s(kr);router=s(dr);document=s(Ve);destroyRef=s(gn);breakpointObserver=s(Qo);pageSizeOptions=Ha;searchControl=new Vn("",{nonNullable:!0});employees=q([]);loading=q(!0);error=q(null);search=q(dt.search);department=q(dt.department);view=q(this.initialView());sort=q({field:dt.sortField,direction:dt.sortDirection});pageIndex=jo({source:()=>[this.search(),this.department(),this.sort()],computation:()=>dt.pageIndex});pageSize=q(dt.pageSize);compact=wn(this.breakpointObserver.observe(uo).pipe(ae(o=>o.matches)),{initialValue:this.breakpointObserver.isMatched(uo)});departments=wn(s(an).getDepartments().pipe(Ie(()=>It([]))),{initialValue:[]});filtered=Q(()=>{let o=this.search().toLowerCase(),e=this.department();return this.employees().filter(t=>(!e||t.department===e)&&(!o||Vc(t,o)))});sorted=Q(()=>{let{field:o,direction:e}=this.sort();if(!e)return this.filtered();let t=e==="asc"?1:-1;return[...this.filtered()].sort((n,r)=>Nc(o,n,r)*t||n.employeeId.localeCompare(r.employeeId,void 0,{numeric:!0}))});currentPageIndex=Q(()=>{let o=Math.max(1,Math.ceil(this.sorted().length/this.pageSize()));return Math.min(this.pageIndex(),o-1)});paged=Q(()=>{let o=this.currentPageIndex()*this.pageSize();return this.sorted().slice(o,o+this.pageSize())});constructor(){this.searchControl.valueChanges.pipe(So(Pc),ae(o=>o.trim()),Mo(),bi()).subscribe(o=>this.search.set(o)),this.load()}load(){this.loading.set(!0),this.error.set(null),this.employeeService.getEmployees().pipe(bi(this.destroyRef)).subscribe({next:o=>{this.employees.set(o),this.loading.set(!1)},error:o=>{this.error.set(o.message),this.loading.set(!1)}})}setDepartment(o){this.department.set(o||null)}setView(o){this.view.set(o);try{this.document.defaultView?.localStorage.setItem(us,o)}catch{}}onPage(o){this.pageSize.set(o.pageSize),this.pageIndex.set(o.pageIndex)}clearSearch(){this.searchControl.setValue(""),this.search.set("")}clearFilters(){this.clearSearch(),this.department.set(null)}open(o){this.router.navigate(["/employees",o.id])}edit(o){this.router.navigate(["/employees",o.id,"edit"])}confirmDelete(o){Ba(this.dialog,{title:"Delete employee?",message:`${ke(o)} (${o.employeeId}) will be permanently removed.`,confirmText:"Delete",cancelText:"Cancel",danger:!0}).pipe(he(e=>e),Ge(()=>this.employeeService.deleteEmployee(o.id)),bi(this.destroyRef)).subscribe({next:()=>{this.employees.update(e=>e.filter(t=>t.id!==o.id)),this.notifications.success("Employee deleted")},error:e=>this.notifications.error(e.message)})}exportCsv(){let o=this.document.defaultView;if(!o)return;let e=new Blob([Ga(this.sorted())],{type:"text/csv;charset=utf-8"}),t=o.URL.createObjectURL(e),n=this.document.createElement("a");n.href=t,n.download=Ua(new Date),n.hidden=!0,this.document.body.append(n),n.click(),n.remove(),o.setTimeout(()=>o.URL.revokeObjectURL(t))}initialView(){try{let o=this.document.defaultView?.localStorage.getItem(us);if(o==="table"||o==="cards")return o}catch{}return this.breakpointObserver.isMatched(uo)?"cards":"table"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-employee-list"]],decls:45,vars:6,consts:[[1,"page-header","header"],[1,"page-title"],[1,"page-subtitle"],[1,"header-actions"],["mat-stroked-button","","type","button",3,"click","disabled"],["mat-flat-button","","routerLink","/employees/new"],[1,"toolbar"],["appearance","outline","subscriptSizing","dynamic",1,"search"],["matPrefix",""],["matInput","","type","search","placeholder","Search name, ID or email","aria-label","Search employees",3,"formControl"],["matSuffix","","mat-icon-button","","type","button","aria-label","Clear search",1,"icon-btn-sm","clear"],[1,"toolbar-row"],["appearance","outline","subscriptSizing","dynamic",1,"department"],["aria-label","Filter by department",3,"valueChange","value"],["value",""],[3,"value"],["aria-label","Layout","hideSingleSelectionIndicator","",1,"view-toggle",3,"change","value"],["value","table","aria-label","Table view"],[1,"icon-18"],[1,"toggle-label"],["value","cards","aria-label","Card view"],["label","Loading employees\u2026",3,"variant","count"],["icon","error","title","Something went wrong",1,"card",3,"message"],["icon","group","title","No employees yet","message","Add your first team member to get started.",1,"card"],["icon","search_off","title","No employees found","message","Try a different name, ID or department.",1,"card"],[3,"employees","sort","total","pageIndex","pageSize","pageSizeOptions","compact"],["matSuffix","","mat-icon-button","","type","button","aria-label","Clear search",1,"icon-btn-sm","clear",3,"click"],["mat-stroked-button","","type","button",3,"click"],[3,"sortChange","pageChange","view","edit","delete","employees","sort","total","pageIndex","pageSize","pageSizeOptions","compact"],["role","list","aria-label","Employees",1,"card-grid"],[3,"employee"],["aria-label","Employee pages",1,"card","cards-paginator",3,"page","length","pageIndex","pageSize","pageSizeOptions","hidePageSize","showFirstLastButtons"],[3,"view","edit","delete","employee"]],template:function(e,t){e&1&&(l(0,"header",0)(1,"div")(2,"h1",1),u(3,"Employees"),d(),l(4,"p",2),u(5,"Manage your team members and their details"),d()(),l(6,"div",3)(7,"button",4),g("click",function(){return t.exportCsv()}),l(8,"mat-icon"),u(9,"download"),d(),u(10," Export CSV "),d(),l(11,"a",5)(12,"mat-icon"),u(13,"add"),d(),u(14," Add Employee "),d()()(),l(15,"div",6)(16,"mat-form-field",7)(17,"mat-icon",8),u(18,"search"),d(),B(19,"input",9),v(20,Mc,3,0,"button",10),d(),l(21,"div",11)(22,"mat-form-field",12)(23,"mat-select",13),g("valueChange",function(r){return t.setDepartment(r)}),l(24,"mat-option",14),u(25,"All Departments"),d(),$e(26,Ec,2,2,"mat-option",15,hs),d()(),l(28,"mat-button-toggle-group",16),g("change",function(r){return t.setView(r.value)}),l(29,"mat-button-toggle",17)(30,"mat-icon",18),u(31,"table_rows"),d(),l(32,"span",19),u(33,"Table"),d()(),l(34,"mat-button-toggle",20)(35,"mat-icon",18),u(36,"grid_view"),d(),l(37,"span",19),u(38,"Cards"),d()()()()(),v(39,kc,1,2,"app-loading-skeleton",21)(40,Tc,5,1,"app-empty-state",22)(41,Rc,5,0,"app-empty-state",23)(42,Ic,3,0,"app-empty-state",24)(43,Oc,1,7,"app-employee-table",25)(44,Ac,4,6)),e&2&&(c(7),_("disabled",t.loading()||!t.sorted().length),c(12),_("formControl",t.searchControl),c(),C(t.searchControl.value?20:-1),c(3),_("value",t.department()??""),c(3),We(t.departments()),c(2),_("value",t.view()),c(11),C(t.loading()?39:t.error()?40:t.employees().length?t.sorted().length?t.view()==="table"?43:44:42:41))},dependencies:[ln,pn,nn,on,Ze,wi,Ct,ia,Bn,Yi,lt,Et,Yn,Kn,Ke,Ye,Aa,Fa,tn,Jt,en,Ji,yt,Jr,ji,Wr,Nn,bt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:24px;container-type:inline-size}.header-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.search[_ngcontent-%COMP%]{width:320px}.clear[_ngcontent-%COMP%]{color:var(--muted)}.toolbar-row[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;gap:12px;min-width:0}.department[_ngcontent-%COMP%]{width:200px}.view-toggle[_ngcontent-%COMP%]{flex:none;margin-left:auto}.cards-paginator[_ngcontent-%COMP%]{display:block;overflow:hidden}@media(max-width:767.98px){[_nghost-%COMP%]{gap:16px}.header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.header-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.toolbar[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.search[_ngcontent-%COMP%]{width:100%}.department[_ngcontent-%COMP%]{flex:1;width:auto;min-width:0}.toggle-label[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})};function Vc(i,o){return[ke(i),i.employeeId,i.email].some(e=>e.toLowerCase().includes(o))}function Nc(i,o,e){switch(i){case"name":return ke(o).localeCompare(ke(e),void 0,{sensitivity:"base"});case"employeeId":return o.employeeId.localeCompare(e.employeeId,void 0,{numeric:!0});default:return o[i].localeCompare(e[i])}}var cy=[{path:"",title:"Employees \xB7 infithra",component:fn},{path:"new",title:"Add Employee \xB7 infithra",data:{breadcrumb:"Add Employee"},component:Lt},{path:":id",title:"Employee \xB7 infithra",data:{breadcrumb:"Employee Details"},component:ki},{path:":id/edit",title:"Edit Employee \xB7 infithra",data:{breadcrumb:"Edit Employee"},component:Lt}];export{cy as EMPLOYEES_ROUTES};
