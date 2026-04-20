import{a as Fn,b as Nn,c as Te,d as Vn,e as Ln,f as Ei,g as it,h as Wt}from"./chunk-X3ZB4YLQ.js";import{a as Ye}from"./chunk-X7T2SYL4.js";import{a as Ut,b as ua}from"./chunk-DEGHX2SP.js";import{A as tt,a as Oi,b as ct,c as et,d as ea,f as ta,g as Bt,h as ia,i as na,j as aa,k as Ai,l as oa,m as ra,n as mt,o as ht,p as zt,q as sa,r as la,s as da,t as ca,v as jt,w as ma,x as ha,y as Pi,z as Fi}from"./chunk-RX6CQ4YD.js";import{a as Ht}from"./chunk-QPNUUWHR.js";import{a as $n,b as Et,c as ue,d as Qn,e as Ot,f as At,g as Xn,h as Pt,i as Ft,j as Ze,k as Nt,l as Kn,m as Ee,n as Vt,o as Je,p as Yn,q as Zn,r as pe,s as Lt,t as Oe,u as Jn}from"./chunk-KZ6BS6ER.js";import{a as wn,b as zn}from"./chunk-UFVCK5SZ.js";import{a as he,b as Wn}from"./chunk-UKMX7TJA.js";import{B as Ti,C as An,D as Ii,E as Pn,F as Bn,G as Ke,H as me,I as It,a as Tt,b as Dn,c as Ri,d as kn,f as Sn,g as xn,k as Rn,l as Mn,m as Tn,n as In,o as Me,p as En,q as ge,r as On,s as Mi}from"./chunk-SK2XRRJQ.js";import{a as Gn,g as qn}from"./chunk-VX63CTHF.js";import{$ as H,$a as te,A as Ce,Bb as ae,Cb as Xe,Da as un,Db as x,Ea as O,Eb as j,Fa as A,Fb as vn,Ga as P,Ha as pn,I as Pe,Ia as fn,J as ki,Ja as Dt,Jb as Se,K as Y,Ka as kt,Kb as xe,La as f,Ma as s,Mb as yn,Na as l,Nb as bn,O as cn,Oa as g,P as we,Pb as Cn,Q as U,R as E,S as Si,Sa as G,T as d,Ta as q,Ua as X,V as Z,Va as de,W as J,Wa as xi,X as Fe,Xa as w,Xb as Re,Y as mn,Z as ee,Za as b,_ as wt,_a as ke,a as Q,aa as Ge,ab as Le,b as Ct,bb as ce,bc as Be,ca as qe,cb as k,cc as ve,db as S,dc as Ie,ea as De,fa as $,fc as jn,g as R,ga as N,gc as Un,h as Ue,hb as St,i as lt,ib as Qe,ic as Hn,j as rn,jb as ne,k as sn,kb as dt,lb as m,ma as h,mb as T,n as He,na as Ne,nb as F,oa as re,p as ln,pb as L,q as fe,qa as Ve,qb as _n,r as le,ra as V,s as We,sa as $e,sb as xt,tb as Rt,ua as D,v as _e,va as W,w as be,wa as v,x as dn,xa as hn,xb as gn,ya as M,yb as Mt,za as y}from"./chunk-H3TXPVYT.js";var Gt=class{applyChanges(a,e,t,i,o){a.forEachOperation((r,c,u)=>{let _,C;if(r.previousIndex==null){let I=t(r,c,u);_=e.createEmbeddedView(I.templateRef,I.context,I.index),C=et.INSERTED}else u==null?(e.remove(c),C=et.REMOVED):(_=e.get(c),e.move(_,u),C=et.MOVED);o&&o({context:_?.context,operation:C,record:r})})}detach(){}};var Ha=[[["caption"]],[["colgroup"],["col"]],"*"],Wa=["caption","colgroup, col","*"];function Ga(n,a){n&1&&te(0,2)}function qa(n,a){n&1&&(s(0,"thead",0),X(1,1),l(),s(2,"tbody",0),X(3,2)(4,3),l(),s(5,"tfoot",0),X(6,4),l())}function $a(n,a){n&1&&X(0,1)(1,2)(2,3)(3,4)}var se=new E("CDK_TABLE");var Qt=(()=>{class n{template=d(re);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Xt=(()=>{class n{template=d(re);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),_a=(()=>{class n{template=d(re);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),nt=(()=>{class n{_table=d(se,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,o){if(t&1&&Le(o,Qt,5)(o,Xt,5)(o,_a,5),t&2){let r;k(r=S())&&(i.cell=r.first),k(r=S())&&(i.headerCell=r.first),k(r=S())&&(i.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",x],stickyEnd:[2,"stickyEnd","stickyEnd",x]}})}return n})(),$t=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}},ga=(()=>{class n extends $t{constructor(){super(d(nt),d(N))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[M]})}return n})();var va=(()=>{class n extends $t{constructor(){let e=d(nt),t=d(N);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[M]})}return n})();var Vi=(()=>{class n{template=d(re);_differs=d(Xe);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof pt?e.headerCell.template:this instanceof Li?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,features:[De]})}return n})(),pt=(()=>{class n extends Vi{_table=d(se,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(re),d(Xe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",x]},features:[M,De]})}return n})(),Li=(()=>{class n extends Vi{_table=d(se,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(re),d(Xe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",x]},features:[M,De]})}return n})(),Kt=(()=>{class n extends Vi{_table=d(se,{optional:!0});when;constructor(){super(d(re),d(Xe))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[M]})}return n})(),ze=(()=>{class n{_viewContainer=d($e);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&X(0,0)},dependencies:[ze],encapsulation:2})}return n})();var zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&X(0,0)},dependencies:[ze],encapsulation:2})}return n})(),Yt=(()=>{class n{templateRef=d(re);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),pa=["top","bottom","left","right"],Ni=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,i=!0,o,r,c){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));Ne({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,i=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(oe=>oe)||t.some(oe=>oe))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],c=r.children.length,u=this.direction==="rtl",_=u?"right":"left",C=u?"left":"right",I=e.lastIndexOf(!0),B=t.indexOf(!0),z,nn,an;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),Ne({earlyRead:()=>{z=this._getCellWidths(r,i),nn=this._getStickyStartColumnPositions(z,e),an=this._getStickyEndColumnPositions(z,t)},write:()=>{for(let oe of a)for(let K=0;K<c;K++){let on=oe.children[K];e[K]&&this._addStickyStyle(on,_,nn[K],K===I),t[K]&&this._addStickyStyle(on,C,an[K],K===B)}this._positionListener&&z.some(oe=>!!oe)&&(this._positionListener.stickyColumnsUpdated({sizes:I===-1?[]:z.slice(0,I+1).map((oe,K)=>e[K]?oe:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:B===-1?[]:z.slice(B).map((oe,K)=>t[K+B]?oe:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let i=t==="bottom"?a.slice().reverse():a,o=t==="bottom"?e.slice().reverse():e,r=[],c=[],u=[];Ne({earlyRead:()=>{for(let _=0,C=0;_<i.length;_++){if(!o[_])continue;r[_]=C;let I=i[_];u[_]=this._isNativeHtmlTable?Array.from(I.children):[I];let B=this._retrieveElementSize(I).height;C+=B,c[_]=B}},write:()=>{let _=o.lastIndexOf(!0);for(let C=0;C<i.length;C++){if(!o[C])continue;let I=r[C],B=C===_;for(let z of u[C])this._addStickyStyle(z,t,I,B)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:r,elements:u}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:r,elements:u})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&Ne({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]="",a.classList.remove(this._borderCellCss[i]);pa.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of pa)a.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:"border-box"})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Qa(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Qa(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>n.classList.contains(a))}var ut=new E("STICKY_POSITIONING_LISTENER");var ji=(()=>{class n{viewContainer=d($e);elementRef=d(N);constructor(){let e=d(se);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","rowOutlet",""]]})}return n})(),Ui=(()=>{class n{viewContainer=d($e);elementRef=d(N);constructor(){let e=d(se);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Hi=(()=>{class n{viewContainer=d($e);elementRef=d(N);constructor(){let e=d(se);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Wi=(()=>{class n{viewContainer=d($e);elementRef=d(N);constructor(){let e=d(se);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Gi=(()=>{class n{_differs=d(Xe);_changeDetectorRef=d(ae);_elementRef=d(N);_dir=d(ve,{optional:!0});_platform=d(Re);_viewRepeater;_viewportRuler=d(Bt);_injector=d(ee);_virtualScrollViewport=d(ia,{optional:!0,host:!0});_positionListener=d(ut,{optional:!0})||d(ut,{optional:!0,skipSelf:!0});_document=d(wt);_data;_renderedRange;_onDestroy=new R;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new R;_footerRowStickyUpdates=new R;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new R;_dataStream=new R;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new H;viewChange=new Ue({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){d(new Mt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Y(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new ea:new Gt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ct(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===et.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=fa(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=fa(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let c=0;c<t.length;c++)this._renderRows[c].rowDef===o&&r.push(t[c]);this._addStickyColumnStyles(r,o)}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],c=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let u=0;u<c.length;u++){let _=c[u],C=this._cachedRenderRowsMap.get(_.data);C.has(_.rowDef)?C.get(_.rowDef).push(_):C.set(_.rowDef,[_]),e.push(_)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let c=i&&i.has(r)?i.get(r):[];if(c.length){let u=c.shift();return u.dataIndex=t,u}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),qt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=qt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=qt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=qt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,c)=>{let u=!!c.getColumnsDiff();return r||u},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],ct(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ct(this.dataSource)?e=this.dataSource.connect(this):ln(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=He(this.dataSource)),this._renderChangeSubscription=le([e,this.viewChange]).pipe(Y(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(c=>{let u=this._columnDefsByName.get(c);return u}),o=i.map(c=>c.sticky),r=i.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))ze.mostRecentCellOutlet&&ze.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Ni(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:He()).pipe(Y(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?sn:rn;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(dn(0,t),Y(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),le([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Y(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c){let u=o.offsets[r],_=i!==0?Math.max(i-u,u):-u;for(let C of c)C.style.top=`${-_}px`}}}),le([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Y(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c)for(let u of c)u.style.bottom=`${i+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let c=r.querySelectorAll(e._cellSelector);for(let u=0;u<c.length;u++)c[u].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let r=e.start-i.start,c=e.end-e.start,u,_;for(let B=0;B<c;B++){let z=o.get(B+r);if(z&&z.rootNodes.length){u=_=z.rootNodes[0];break}}for(let B=c-1;B>-1;B--){let z=o.get(B+r);if(z&&z.rootNodes.length){_=z.rootNodes[z.rootNodes.length-1];break}}let C=u?.getBoundingClientRect?.(),I=_?.getBoundingClientRect?.();return C&&I?I.bottom-C.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,o){if(t&1&&Le(o,Yt,5)(o,nt,5)(o,Kt,5)(o,pt,5)(o,Li,5),t&2){let r;k(r=S())&&(i._noDataRow=r.first),k(r=S())&&(i._contentColumnDefs=r),k(r=S())&&(i._contentRowDefs=r),k(r=S())&&(i._contentHeaderRowDefs=r),k(r=S())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&ne("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",x],fixedLayout:[2,"fixedLayout","fixedLayout",x],recycleRows:[2,"recycleRows","recycleRows",x]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[L([{provide:se,useExisting:n},{provide:ut,useValue:null}])],ngContentSelectors:Wa,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(ke(Ha),te(0),te(1,1),A(2,Ga,1,0),A(3,qa,7,0)(4,$a,4,0)),t&2&&(h(2),P(i._isServer?2:-1),h(),P(i._isNativeHtmlTable?3:4))},dependencies:[Ui,ji,Wi,Hi],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function qt(n,a){return n.concat(Array.from(a))}function fa(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[aa]})}return n})();var ft=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new R;constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Xa=[[["caption"]],[["colgroup"],["col"]],"*"],Ka=["caption","colgroup, col","*"];function Ya(n,a){n&1&&te(0,2)}function Za(n,a){n&1&&(s(0,"thead",0),X(1,1),l(),s(2,"tbody",2),X(3,3)(4,4),l(),s(5,"tfoot",0),X(6,5),l())}function Ja(n,a){n&1&&X(0,1)(1,3)(2,4)(3,5)}var Zt=(()=>{class n extends Gi{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&ne("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[L([{provide:Gi,useExisting:n},{provide:se,useExisting:n},{provide:ut,useValue:null}]),M],ngContentSelectors:Ka,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(ke(Xa),te(0),te(1,1),A(2,Ya,1,0),A(3,Za,7,0)(4,Ja,4,0)),t&2&&(h(2),P(i._isServer?2:-1),h(),P(i._isNativeHtmlTable?3:4))},dependencies:[Ui,ji,Wi,Hi],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2})}return n})(),Jt=(()=>{class n extends Qt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matCellDef",""]],features:[L([{provide:Qt,useExisting:n}]),M]})}return n})(),ei=(()=>{class n extends Xt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matHeaderCellDef",""]],features:[L([{provide:Xt,useExisting:n}]),M]})}return n})();var ti=(()=>{class n extends nt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[L([{provide:nt,useExisting:n}]),M]})}return n})(),ii=(()=>{class n extends ga{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[M]})}return n})();var ni=(()=>{class n extends va{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[M]})}return n})();var ai=(()=>{class n extends pt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",x]},features:[L([{provide:pt,useExisting:n}]),M]})}return n})();var oi=(()=>{class n extends Kt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[L([{provide:Kt,useExisting:n}]),M]})}return n})(),ri=(()=>{class n extends Bi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[L([{provide:Bi,useExisting:n}]),M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&X(0,0)},dependencies:[ze],encapsulation:2})}return n})();var si=(()=>{class n extends zi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[L([{provide:zi,useExisting:n}]),M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&X(0,0)},dependencies:[ze],encapsulation:2})}return n})(),li=(()=>{class n extends Yt{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matNoDataRow",""]],features:[L([{provide:Yt,useExisting:n}]),M]})}return n})();var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[ya,Ie]})}return n})(),eo=9007199254740991,at=class extends Oi{_data;_renderData=new Ue([]);_filter=new Ue("");_internalPageChanges=new R;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(a){a=Array.isArray(a)?a:[],this._data.next(a),this._renderChangesSubscription||this._filterData(a)}get filter(){return this._filter.value}set filter(a){this._filter.next(a),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(a){this._sort=a,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(a){this._paginator=a,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(a,e)=>{let t=a[e];if(kn(t)){let i=Number(t);return i<eo?i:t}return t};sortData=(a,e)=>{let t=e.active,i=e.direction;return!t||i==""?a:a.sort((o,r)=>{let c=this.sortingDataAccessor(o,t),u=this.sortingDataAccessor(r,t),_=typeof c,C=typeof u;_!==C&&(_==="number"&&(c+=""),C==="number"&&(u+=""));let I=0;return c!=null&&u!=null?c>u?I=1:c<u&&(I=-1):c!=null?I=1:u!=null&&(I=-1),I*(i=="asc"?1:-1)})};filterPredicate=(a,e)=>{let t=e.trim().toLowerCase();return Object.values(a).some(i=>`${i}`.toLowerCase().includes(t))};constructor(a=[]){super(),this._data=new Ue(a),this._updateChangeSubscription()}_updateChangeSubscription(){let a=this._sort?_e(this._sort.sortChange,this._sort.initialized):He(null),e=this._paginator?_e(this._paginator.page,this._internalPageChanges,this._paginator.initialized):He(null),t=this._data,i=le([t,this._filter]).pipe(fe(([c])=>this._filterData(c))),o=le([i,a]).pipe(fe(([c])=>this._orderData(c))),r=le([o,e]).pipe(fe(([c])=>this._pageData(c)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(c=>this._renderData.next(c))}_filterData(a){return this.filteredData=this.filter==null||this.filter===""?a:a.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(a){return this.sort?this.sortData(a.slice(),this.sort):a}_pageData(a){if(!this.paginator)return a;let e=this.paginator.pageIndex*this.paginator.pageSize;return a.slice(e,e+this.paginator.pageSize)}_updatePaginator(a){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=a,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var ao=["trigger"],oo=["panel"],ro=[[["mat-select-trigger"]],"*"],so=["mat-select-trigger","*"];function lo(n,a){if(n&1&&(s(0,"span",4),m(1),l()),n&2){let e=b();h(),T(e.placeholder)}}function co(n,a){n&1&&te(0)}function mo(n,a){if(n&1&&(s(0,"span",11),m(1),l()),n&2){let e=b(2);h(),T(e.triggerValue)}}function ho(n,a){if(n&1&&(s(0,"span",5),A(1,co,1,0)(2,mo,2,1,"span",11),l()),n&2){let e=b();h(),P(e.customTrigger?1:2)}}function uo(n,a){if(n&1){let e=de();s(0,"div",12,1),w("keydown",function(i){Z(e);let o=b();return J(o._handleKeydown(i))}),te(2,1),l()}if(n&2){let e=b();dt(e.panelClass),ne("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),O("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var po=new E("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(ee);return()=>sa(n)}}),fo=new E("MAT_SELECT_CONFIG"),_o=new E("MatSelectTrigger"),qi=class{source;value;constructor(a,e){this.source=a,this.value=e}},ot=(()=>{class n{_viewportRuler=d(Bt);_changeDetectorRef=d(ae);_elementRef=d(N);_dir=d(ve,{optional:!0});_idGenerator=d(ge);_renderer=d(Ve);_parentFormField=d(Zn,{optional:!0});ngControl=d(Qn,{self:!0,optional:!0});_liveAnnouncer=d(Tn);_defaultOptions=d(fo,{optional:!0});_animationsDisabled=Be();_popoverLocation;_initialized=new R;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Vn(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=Ln(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new qi(this,e)}_scrollStrategyFactory=d(po);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new R;_errorStateTracker;stateChanges=new R;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=qe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ue.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=We(()=>{let e=this.options;return e?e.changes.pipe(Pe(e),ki(()=>_e(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ki(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(be(e=>e),fe(()=>{}));_closedStream=this.openedChange.pipe(be(e=>!e),fe(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let e=d(wn),t=d(Xn,{optional:!0}),i=d(Ze,{optional:!0}),o=d(new Mt("tabindex"),{optional:!0}),r=d(ma,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new zn(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ft(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Y(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Y(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Pe(null),Y(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ce(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Mi(this._trackedModal,"aria-owns",t),On(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Mi(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!Me(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;r.onKeydown(e);let u=this.selected;u&&c!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!Me(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let c=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(c?u.select():u.deselect())})}else{let c=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==c&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Me(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Pi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new En(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=_e(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Y(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),_e(...this.options.map(t=>t._stateChanges)).pipe(Y(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Dn(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,o){if(t&1&&Le(o,_o,5)(o,Te,5)(o,Nn,5),t&2){let r;k(r=S())&&(i.customTrigger=r.first),k(r=S())&&(i.options=r),k(r=S())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&ce(ao,5)(oo,5)(Fi,5),t&2){let o;k(o=S())&&(i.trigger=o.first),k(o=S())&&(i.panel=o.first),k(o=S())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&w("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(O("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),ne("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",x],disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:j(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",x],placeholder:"placeholder",required:[2,"required","required",x],multiple:[2,"multiple","multiple",x],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",x],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",j],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",x]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[L([{provide:Yn,useExisting:n},{provide:Fn,useExisting:n}]),De],ngContentSelectors:so,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(ke(ro),s(0,"div",2,0),w("click",function(){return i.open()}),s(3,"div",3),A(4,lo,2,1,"span",4)(5,ho,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),Fe(),s(8,"svg",8),g(9,"path",9),l()()()(),y(10,uo,3,16,"ng-template",10),w("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let o=St(1);h(3),O("id",i._valueId),h(),P(i.empty?4:5),h(6),f("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Pi,Fi],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[tt,Ei,Ie,na,Lt,Ei]})}return n})();function go(n,a){if(n&1&&(s(0,"mat-option",17),m(1),l()),n&2){let e=a.$implicit;f("value",e),h(),F(" ",e," ")}}function vo(n,a){if(n&1){let e=de();s(0,"mat-form-field",14)(1,"mat-select",16,0),w("selectionChange",function(i){Z(e);let o=b(2);return J(o._changePageSize(i.value))}),Dt(3,go,2,2,"mat-option",17,fn),l(),s(5,"div",18),w("click",function(){Z(e);let i=St(2);return J(i.open())}),l()()}if(n&2){let e=b(2);f("appearance",e._formFieldAppearance)("color",e.color),h(),f("value",e.pageSize)("disabled",e.disabled),un("aria-labelledby",e._pageSizeLabelId),f("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),h(2),kt(e._displayedPageSizeOptions)}}function yo(n,a){if(n&1&&(s(0,"div",15),m(1),l()),n&2){let e=b(2);h(),T(e.pageSize)}}function bo(n,a){if(n&1&&(s(0,"div",3)(1,"div",13),m(2),l(),A(3,vo,6,7,"mat-form-field",14),A(4,yo,2,1,"div",15),l()),n&2){let e=b();h(),O("id",e._pageSizeLabelId),h(),F(" ",e._intl.itemsPerPageLabel," "),h(),P(e._displayedPageSizeOptions.length>1?3:-1),h(),P(e._displayedPageSizeOptions.length<=1?4:-1)}}function Co(n,a){if(n&1){let e=de();s(0,"button",19),w("click",function(){Z(e);let i=b();return J(i._buttonClicked(0,i._previousButtonsDisabled()))}),Fe(),s(1,"svg",8),g(2,"path",20),l()()}if(n&2){let e=b();f("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),O("aria-label",e._intl.firstPageLabel)}}function wo(n,a){if(n&1){let e=de();s(0,"button",21),w("click",function(){Z(e);let i=b();return J(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),Fe(),s(1,"svg",8),g(2,"path",22),l()()}if(n&2){let e=b();f("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),O("aria-label",e._intl.lastPageLabel)}}var Do=(()=>{class n{changes=new R;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,r=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${r} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ko=50;var So=new E("MAT_PAGINATOR_DEFAULT_OPTIONS"),_t=(()=>{class n{_intl=d(Do);_changeDetectorRef=d(ae);_formFieldAppearance;_pageSizeLabelId=d(ge).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new lt(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>j(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new H;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=d(So,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:r,showFirstLastButtons:c}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),r!=null&&(this.hidePageSize=r),c!=null&&(this.showFirstLastButtons=c)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ko),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",j],length:[2,"length","length",j],pageSize:[2,"pageSize","pageSize",j],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",x],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",x],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",x]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(s(0,"div",1)(1,"div",2),A(2,bo,5,4,"div",3),s(3,"div",4)(4,"div",5),m(5),l(),A(6,Co,3,5,"button",6),s(7,"button",7),w("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),Fe(),s(8,"svg",8),g(9,"path",9),l()(),mn(),s(10,"button",10),w("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),Fe(),s(11,"svg",8),g(12,"path",11),l()(),A(13,wo,3,5,"button",12),l()()()),t&2&&(h(2),P(i.hidePageSize?-1:2),h(3),F(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),h(),P(i.showFirstLastButtons?6:-1),h(),f("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),O("aria-label",i._intl.previousPageLabel),h(3),f("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),O("aria-label",i._intl.nextPageLabel),h(3),P(i.showFirstLastButtons?13:-1))},dependencies:[pe,ot,Te,Ke,it],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ra=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[It,ci,Wt,_t]})}return n})();function Ro(n,a){}var Ae=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Qi=(()=>{class n extends ra{_elementRef=d(N);_focusTrapFactory=d(Mn);_config;_interactivityChecker=d(Rn);_ngZone=d(Ge);_focusMonitor=d(Sn);_renderer=d(Ve);_changeDetectorRef=d(ae);_injector=d(ee);_platform=d(Re);_document=d(wt);_portalOutlet;_focusTrapped=new R;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(Ae,{optional:!0})||new Ae,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),r=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Ne(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=Tt(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Tt();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Tt()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&ce(mt,7),t&2){let o;k(o=S())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&O("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[M],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&y(0,Ro,0,0,"ng-template",0)},dependencies:[mt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),gt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new R;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Me(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},Mo=new E("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=d(ee);return()=>zt(n)}}),To=new E("DialogData"),Io=new E("DefaultDialogConfig");function Eo(n){let a=qe(n),e=new H;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Xi=(()=>{class n{_injector=d(ee);_defaultOptions=d(Io,{optional:!0});_parentDialog=d(n,{optional:!0,skipSelf:!0});_overlayContainer=d(da);_idGenerator=d(ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new R;_afterOpenedAtThisLevel=new R;_ariaHiddenElements=new Map;_scrollStrategy=d(Mo);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=We(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pe(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new Ae;t=Q(Q({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=ha(this._injector,o),c=new gt(r,t),u=this._attachContainer(r,c,t);if(c.containerInstance=u,!this.openDialogs.length){let _=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(Ce(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(_)}):this._hideNonDialogContentFromAssistiveTechnology(_)}return this._attachDialogContent(e,c,u,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){$i(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){$i(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),$i(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new la({positionStrategy:e.positionStrategy||jt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let o=i.injector||i.viewContainerRef?.injector,r=[{provide:Ae,useValue:i},{provide:gt,useValue:t},{provide:ca,useValue:e}],c;i.container?typeof i.container=="function"?c=i.container:(c=i.container.type,r.push(...i.container.providers(i))):c=Qi;let u=new Ai(c,i.viewContainerRef,ee.create({parent:o||this._injector,providers:r}));return e.attach(u).instance}_attachDialogContent(e,t,i,o){if(e instanceof re){let r=this._createInjector(o,t,i,void 0),c={$implicit:o.data,dialogRef:t};o.templateContext&&(c=Q(Q({},c),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new oa(e,null,c,r))}else{let r=this._createInjector(o,t,i,this._injector),c=i.attachComponentPortal(new Ai(e,o.viewContainerRef,r));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,i,o){let r=e.injector||e.viewContainerRef?.injector,c=[{provide:To,useValue:e.data},{provide:gt,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,i)):c.push(...e.providers)),e.direction&&(!r||!r.get(ve,null,{optional:!0}))&&c.push({provide:ve,useValue:Eo(e.direction)}),ee.create({parent:r||o,providers:c})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let o=t[i];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $i(n,a){let e=n.length;for(;e--;)a(n[e])}var Ma=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({providers:[Xi],imports:[tt,ht,In,ht]})}return n})();function Oo(n,a){}var hi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ki="mdc-dialog--open",Ta="mdc-dialog--opening",Ia="mdc-dialog--closing",Ao=150,Po=75,Fo=(()=>{class n extends Qi{_animationStateChanged=new H;_animationsEnabled=!Be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Oa(this._config.enterAnimationDuration)??Ao:0;_exitAnimationDuration=this._animationsEnabled?Oa(this._config.exitAnimationDuration)??Po:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ea,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ta,Ki)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ki),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ki),this._animationsEnabled?(this._hostElement.style.setProperty(Ea,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ia)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ta,Ia)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(xi("id",i._config.id),O("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),ne("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[M],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1),y(2,Oo,0,0,"ng-template",2),l()())},dependencies:[mt],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return n})(),Ea="--mat-dialog-transition-duration";function Oa(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ri(n.substring(0,n.length-2)):n.endsWith("s")?Ri(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var mi=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(mi||{}),ye=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new lt(1);_beforeClosed=new lt(1);_result;_closeFallbackTimeout;_state=mi.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(be(i=>i.state==="opened"),Ce(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(be(i=>i.state==="closed"),Ce(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),_e(this.backdropClick(),this.keydownEvents().pipe(be(i=>i.keyCode===27&&!this.disableClose&&!Me(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Aa(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(be(t=>t.state==="closing"),Ce(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=mi.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=mi.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Aa(n,a,e){return n._closeInteractionType=a,n.close(e)}var vt=new E("MatMdcDialogData"),No=new E("mat-mdc-dialog-default-options"),Vo=new E("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(ee);return()=>zt(n)}}),je=(()=>{class n{_defaultOptions=d(No,{optional:!0});_scrollStrategy=d(Vo);_parentDialog=d(n,{optional:!0,skipSelf:!0});_idGenerator=d(ge);_injector=d(ee);_dialog=d(Xi);_animationsDisabled=Be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new R;_afterOpenedAtThisLevel=new R;dialogConfigClass=hi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=We(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pe(void 0)));constructor(){this._dialogRefConstructor=ye,this._dialogContainerType=Fo,this._dialogDataToken=vt}open(e,t){let i;t=Q(Q({},this._defaultOptions||new hi),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Ct(Q({},t),{positionStrategy:jt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Ae,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,c,u)=>(i=new this._dialogRefConstructor(r,t,u),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ui=(()=>{class n{dialogRef=d(ye,{optional:!0});_elementRef=d(N);_dialog=d(je);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Fa(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Aa(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,i){t&1&&w("click",function(r){return i._onButtonClick(r)}),t&2&&O("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[De]})}return n})(),Pa=(()=>{class n{_dialogRef=d(ye,{optional:!0});_elementRef=d(N);_dialog=d(je);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Fa(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n})}return n})(),pi=(()=>{class n extends Pa{id=d(ge).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,i){t&2&&xi("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[M]})}return n})(),fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[hn([ta])]})}return n})(),_i=(()=>{class n extends Pa{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,i){t&2&&ne("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[M]})}return n})();function Fa(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Na=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({providers:[je],imports:[Ma,tt,ht,Ie]})}return n})();var Lo=["knob"],Bo=["valueIndicatorContainer"];function zo(n,a){if(n&1&&(s(0,"div",2,1)(2,"div",5)(3,"span",6),m(4),l()()()),n&2){let e=b();h(4),T(e.valueIndicatorText)}}var jo=["trackActive"],Uo=["*"];function Ho(n,a){if(n&1&&g(0,"div"),n&2){let e=a.$implicit,t=a.$index,i=b(3);dt(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Qe("transform",i._calcTickMarkTransform(t))}}function Wo(n,a){if(n&1&&Dt(0,Ho,1,4,"div",8,pn),n&2){let e=b(2);kt(e._tickMarks)}}function Go(n,a){if(n&1&&(s(0,"div",6,1),A(2,Wo,2,0),l()),n&2){let e=b();h(2),P(e._cachedWidth?2:-1)}}function qo(n,a){if(n&1&&g(0,"mat-slider-visual-thumb",7),n&2){let e=b();f("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var p=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(p||{}),rt=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(rt||{}),Yi=new E("_MatSlider"),Va=new E("_MatSliderThumb"),$o=new E("_MatSliderRangeThumb"),La=new E("_MatSliderVisualThumb");var Qo=(()=>{class n{_cdr=d(ae);_ngZone=d(Ge);_slider=d(Yi);_renderer=d(Ve);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=d(N).nativeElement;_platform=d(Re);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,"pointermove",this._onPointerMove),i.listen(t,"pointerdown",this._onDragStart),i.listen(t,"pointerup",this._onDragEnd),i.listen(t,"pointerleave",this._onMouseLeave),i.listen(t,"focus",this._onFocus),i.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Ti.FADING_IN||e?.state===Ti.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===p.START?p.END:p.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===p.START?p.END:p.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,i){if(t&1&&ce(Ii,5)(Lo,5)(Bo,5),t&2){let o;k(o=S())&&(i._ripple=o.first),k(o=S())&&(i._knob=o.first),k(o=S())&&(i._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[L([{provide:La,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,i){t&1&&(A(0,zo,5,1,"div",2),g(1,"div",3,0)(3,"div",4)),t&2&&(P(i.discrete?0:-1),h(3),f("matRippleDisabled",!0))},dependencies:[Ii],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ba=(()=>{class n{_ngZone=d(Ge);_cdr=d(ae);_elementRef=d(N);_dir=d(ve,{optional:!0});_globalRippleOptions=d(An,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(p.END),i=this._getInput(p.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(p.END),i=this._getInput(p.START),o=t.value,r=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),o!==t.value&&this._onValueChange(t),r!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(p.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(p.END),i=this._getInput(p.START),o=t.value,r=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),o!==t.value&&this._onValueChange(t),r!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(p.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(p.END),t=this._getInput(p.START),i=e.value,o=t.value,r=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<r?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(p.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Be();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=gn(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=d(Re);constructor(){d(xn).load(Pn);let e=this._isRtl();vn(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(p.END),t=this._getInput(p.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(p.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(p.END),t=this._getInput(p.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(p.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(p.START)._isActive||this._getThumb(p.END)._isActive}_getValue(e=p.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(p.START)?._skipUIUpdate||this._getInput(p.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(p.END),t=this._getInput(p.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(p.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(p.START),t=this._getInput(p.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===p.END?p.END:p.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===p.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(p.END),t=this._getInput(p.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:o++,this._tickMarks=Array(i).fill(rt.ACTIVE).concat(Array(o).fill(rt.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(p.START),o=Math.max(Math.round((i-this.min)/e),0),r=Math.max(Math.round((t-i)/e)+1,0),c=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(rt.INACTIVE).concat(Array(r).fill(rt.ACTIVE),Array(c).fill(rt.INACTIVE))}_getInput(e){if(e===p.END&&this._input)return this._input;if(this._inputs?.length)return e===p.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===p.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,o=t.x+i,r=t.y+i,c=e.clientX-o,u=e.clientY-r;return Math.pow(c,2)+Math.pow(u,2)<Math.pow(i,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider"]],contentQueries:function(t,i,o){if(t&1&&Le(o,Va,5)(o,$o,4),t&2){let r;k(r=S())&&(i._input=r.first),k(r=S())&&(i._inputs=r)}},viewQuery:function(t,i){if(t&1&&ce(jo,5)(La,5),t&2){let o;k(o=S())&&(i._trackActive=o.first),k(o=S())&&(i._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,i){t&2&&(dt("mat-"+(i.color||"primary")),ne("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",x],discrete:[2,"discrete","discrete",x],showTickMarks:[2,"showTickMarks","showTickMarks",x],min:[2,"min","min",j],color:"color",disableRipple:[2,"disableRipple","disableRipple",x],max:[2,"max","max",j],step:[2,"step","step",j],displayWith:"displayWith"},exportAs:["matSlider"],features:[L([{provide:Yi,useExisting:n}])],ngContentSelectors:Uo,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,i){t&1&&(ke(),te(0),s(1,"div",2),g(2,"div",3),s(3,"div",4),g(4,"div",5,0),l(),A(6,Go,3,1,"div",6),l(),A(7,qo,1,3,"mat-slider-visual-thumb",7),g(8,"mat-slider-visual-thumb",7)),t&2&&(h(6),P(i.showTickMarks?6:-1),h(),P(i._isRange?7:-1),h(),f("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText))},dependencies:[Qo],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var Xo={provide:$n,useExisting:cn(()=>Zi),multi:!0};var Zi=(()=>{class n{_ngZone=d(Ge);_elementRef=d(N);_cdr=d(ae);_slider=d(Yi);_platform=d(Re);_listenerCleanups;get value(){return j(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new H;dragStart=new H;dragEnd=new H;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=p.END;get min(){return j(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return j(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return j(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return x(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=qe("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new R;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=d(Ve);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,r=Math.floor((this._slider.max-this._slider.min)/o),c=this._slider._isRtl()?1-t/i:t/i,_=Math.round(c*r)/r*(this._slider.max-this._slider.min)+this._slider.min,C=Math.round(_/o)*o,I=this.value;if(C===I){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=C,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,i){t&1&&w("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),t&2&&O("aria-valuetext",i._valuetext())},inputs:{value:[2,"value","value",j]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[L([Xo,{provide:Va,useExisting:n}])]})}return n})();var za=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[Bn,Ie]})}return n})();var st=class n{constructor(a,e){this.auth=a;this.router=e}canActivate(){return this.auth.isLoggedIn?!0:(this.router.navigate(["/auth/login"]),!1)}static \u0275fac=function(e){return new(e||n)(Si(Ht),Si(jn))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})};function Jo(n,a){if(n&1&&(G(0),s(1,"div",8)(2,"mat-card",9)(3,"mat-icon"),m(4,"work"),l(),s(5,"div",10),m(6),l(),s(7,"div",11),m(8,"Projects"),l()(),s(9,"mat-card",9)(10,"mat-icon"),m(11,"psychology"),l(),s(12,"div",10),m(13),l(),s(14,"div",11),m(15,"Skills"),l()(),s(16,"mat-card",9)(17,"mat-icon"),m(18,"business_center"),l(),s(19,"div",10),m(20),l(),s(21,"div",11),m(22,"Experiences"),l()()(),q()),n&2){let e=a.ngIf;h(6),T(e.projects),h(7),T(e.skills),h(7),T(e.experiences)}}function er(n,a){if(n&1&&(s(0,"a",12)(1,"mat-icon"),m(2),l(),m(3),l()),n&2){let e=a.$implicit;f("routerLink",e.route),h(2),T(e.icon),h(),F(" ",e.label," ")}}var vi=class n{constructor(a,e){this.auth=a;this.data=e}stats$;quickLinks=[{label:"Manage Projects",icon:"work",route:"/admin/projects"},{label:"Manage Skills",icon:"psychology",route:"/admin/skills"},{label:"View Portfolio",icon:"open_in_new",route:"/"}];ngOnInit(){this.stats$=le([this.data.getProjects(),this.data.getSkills(),this.data.getExperiences()]).pipe(fe(([a,e,t])=>({projects:a.length,skills:e.length,experiences:t.length})))}static \u0275fac=function(e){return new(e||n)(V(Ht),V(Ye))};static \u0275cmp=D({type:n,selectors:[["app-dashboard"]],standalone:!1,decls:12,vars:5,consts:[[1,"section-wrapper"],[1,"section-label"],[1,"section-title"],[1,"divider"],[4,"ngIf"],[1,"quick-title"],[1,"quick-links"],["mat-raised-button","","class","quick-btn",3,"routerLink",4,"ngFor","ngForOf"],[1,"stats-row"],[1,"stat-card"],[1,"stat-num"],[1,"stat-label"],["mat-raised-button","",1,"quick-btn",3,"routerLink"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1),m(2,"Admin Panel"),l(),s(3,"h2",2),m(4),l(),g(5,"div",3),y(6,Jo,23,3,"ng-container",4),xt(7,"async"),s(8,"h3",5),m(9,"Quick Actions"),l(),s(10,"div",6),y(11,er,4,3,"a",7),l()()),e&2&&(h(4),F("Welcome, ",t.auth.currentUser==null?null:t.auth.currentUser.username," \u{1F44B}"),h(2),f("ngIf",Rt(7,3,t.stats$)),h(5),f("ngForOf",t.quickLinks))},dependencies:[Se,xe,Un,Gn,he,me,yn],styles:[".stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1.5rem;margin-bottom:3rem}.stat-card[_ngcontent-%COMP%]{padding:2rem!important;text-align:center}.stat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:2.5rem;width:2.5rem;height:2.5rem;color:var(--cyan);margin-bottom:1rem}.stat-num[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:2.5rem;color:#fff}.stat-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--text-dim);text-transform:uppercase;letter-spacing:.1em;margin-top:.25rem}.quick-title[_ngcontent-%COMP%]{font-family:var(--font-mono);font-size:.8rem;color:var(--cyan);letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.25rem}.quick-links[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap}.quick-btn[_ngcontent-%COMP%]{display:inline-flex!important;align-items:center;gap:.5rem}"],changeDetection:0})};function ir(n,a){n&1&&(s(0,"mat-error"),m(1,"Required"),l())}function nr(n,a){n&1&&(s(0,"mat-error"),m(1,"Required"),l())}function ar(n,a){if(n&1&&(s(0,"mat-option",19),m(1),xt(2,"titlecase"),l()),n&2){let e=a.$implicit;f("value",e),h(),T(Rt(2,2,e))}}function or(n,a){n&1&&(s(0,"mat-error"),m(1,"Required"),l())}var yt=class n{constructor(a,e,t){this.fb=a;this.dialogRef=e;this.data=t;this.isEdit=!!t?.project;let i=t?.project;this.form=this.fb.group({title:[i?.title||"",ue.required],description:[i?.description||"",ue.required],category:[i?.category||"government",ue.required],duration:[i?.duration||""],techStack:[i?.techStack?.join(", ")||"",ue.required],highlights:[i?.highlights?.join(`
`)||""],liveUrl:[i?.liveUrl||""],githubUrl:[i?.githubUrl||""]})}form;isEdit;categories=["government","enterprise","personal"];save(){if(this.form.invalid){this.form.markAllAsTouched();return}let a=this.form.value,e=Ct(Q({},this.data?.project),{title:a.title,description:a.description,category:a.category,duration:a.duration,techStack:a.techStack.split(",").map(t=>t.trim()).filter(Boolean),highlights:a.highlights.split(`
`).map(t=>t.trim()).filter(Boolean),liveUrl:a.liveUrl||void 0,githubUrl:a.githubUrl||void 0});this.dialogRef.close(e)}static \u0275fac=function(e){return new(e||n)(V(Nt),V(ye),V(vt))};static \u0275cmp=D({type:n,selectors:[["app-project-dialog"]],standalone:!1,decls:53,vars:7,consts:[["mat-dialog-title",""],[1,"dialog-form",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","title"],[4,"ngIf"],["matInput","","formControlName","description","rows","3"],[1,"row-two"],["appearance","outline"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","duration","placeholder","e.g. ~956 days"],["matInput","","formControlName","techStack","placeholder","Angular, TypeScript, RxJS"],["matInput","","formControlName","highlights","rows","4","placeholder",`Led frontend for 500+ stakeholders
25% response time improvement`],["matInput","","formControlName","liveUrl","type","url"],["matSuffix",""],["matInput","","formControlName","githubUrl","type","url"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(e,t){if(e&1&&(s(0,"h2",0),m(1),l(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Title"),l(),g(7,"input",3),y(8,ir,2,0,"mat-error",4),l(),s(9,"mat-form-field",2)(10,"mat-label"),m(11,"Description"),l(),g(12,"textarea",5),y(13,nr,2,0,"mat-error",4),l(),s(14,"div",6)(15,"mat-form-field",7)(16,"mat-label"),m(17,"Category"),l(),s(18,"mat-select",8),y(19,ar,3,4,"mat-option",9),l()(),s(20,"mat-form-field",7)(21,"mat-label"),m(22,"Duration"),l(),g(23,"input",10),l()(),s(24,"mat-form-field",2)(25,"mat-label"),m(26,"Tech Stack (comma-separated)"),l(),g(27,"input",11),y(28,or,2,0,"mat-error",4),l(),s(29,"mat-form-field",2)(30,"mat-label"),m(31,"Highlights (one per line)"),l(),g(32,"textarea",12),l(),s(33,"div",6)(34,"mat-form-field",7)(35,"mat-label"),m(36,"Live URL (optional)"),l(),g(37,"input",13),s(38,"mat-icon",14),m(39,"open_in_new"),l()(),s(40,"mat-form-field",7)(41,"mat-label"),m(42,"GitHub URL (optional)"),l(),g(43,"input",15),s(44,"mat-icon",14),m(45,"code"),l()()()()(),s(46,"mat-dialog-actions",16)(47,"button",17),m(48,"Cancel"),l(),s(49,"button",18),w("click",function(){return t.save()}),s(50,"mat-icon"),m(51,"save"),l(),m(52),l()()),e&2){let i,o,r;h(),F("",t.isEdit?"Edit":"Add"," Project"),h(2),f("formGroup",t.form),h(5),f("ngIf",(i=t.form.get("title"))==null?null:i.hasError("required")),h(5),f("ngIf",(o=t.form.get("description"))==null?null:o.hasError("required")),h(6),f("ngForOf",t.categories),h(9),f("ngIf",(r=t.form.get("techStack"))==null?null:r.hasError("required")),h(24),F(" ",t.isEdit?"Update":"Add"," Project ")}},dependencies:[Se,xe,Pt,Et,Ot,At,Ze,Ft,he,me,ui,pi,_i,fi,pe,Ee,Vt,Je,Oe,ot,Te,bn],styles:[".dialog-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding-top:.5rem;min-width:520px}.full-width[_ngcontent-%COMP%]{width:100%}.row-two[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:600px){.dialog-form[_ngcontent-%COMP%]{min-width:unset}.row-two[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var lr=()=>[5,10];function dr(n,a){n&1&&(s(0,"th",22),m(1,"Title"),l())}function cr(n,a){if(n&1&&(s(0,"td",23),m(1),l()),n&2){let e=a.$implicit;h(),T(e.title)}}function mr(n,a){n&1&&(s(0,"th",22),m(1,"Category"),l())}function hr(n,a){if(n&1&&(s(0,"td",23)(1,"span",24),m(2),l()()),n&2){let e=a.$implicit;h(2),T(e.category)}}function ur(n,a){n&1&&(s(0,"th",22),m(1,"Duration"),l())}function pr(n,a){if(n&1&&(s(0,"td",23),m(1),l()),n&2){let e=a.$implicit;h(),T(e.duration||"\u2014")}}function fr(n,a){n&1&&(s(0,"th",22),m(1,"Tech Stack"),l())}function _r(n,a){if(n&1&&(s(0,"span",24),m(1),l()),n&2){let e=a.$implicit;h(),T(e)}}function gr(n,a){if(n&1&&(s(0,"span",27),m(1),l()),n&2){let e=b().$implicit;h(),F("+",e.techStack.length-3)}}function vr(n,a){if(n&1&&(s(0,"td",23),y(1,_r,2,1,"span",25)(2,gr,2,1,"span",26),l()),n&2){let e=a.$implicit;h(),f("ngForOf",e.techStack.slice(0,3)),h(),f("ngIf",e.techStack.length>3)}}function yr(n,a){n&1&&(s(0,"th",22),m(1,"Actions"),l())}function br(n,a){if(n&1){let e=de();s(0,"td",23)(1,"button",28),w("click",function(){let i=Z(e).$implicit,o=b();return J(o.openEdit(i))}),s(2,"mat-icon"),m(3,"edit"),l()(),s(4,"button",29),w("click",function(){let i=Z(e).$implicit,o=b();return J(o.delete(i))}),s(5,"mat-icon"),m(6,"delete"),l()()()}}function Cr(n,a){n&1&&g(0,"tr",30)}function wr(n,a){n&1&&g(0,"tr",31)}function Dr(n,a){if(n&1&&(s(0,"tr",32)(1,"td",33),m(2,"No projects found."),l()()),n&2){let e=b();h(),O("colspan",e.displayedColumns.length)}}var wi=class n{constructor(a,e,t){this.data=a;this.dialog=e;this.snack=t}displayedColumns=["title","category","duration","techStack","actions"];dataSource=new at;projects$;paginator;ngOnInit(){this.data.projects$.subscribe(a=>{this.dataSource.data=a,this.paginator&&(this.dataSource.paginator=this.paginator)})}openAdd(){this.dialog.open(yt,{data:{},width:"620px"}).afterClosed().subscribe(e=>{e&&(this.data.addProject(e),this.snack.open("Project added! \u2705","",{duration:2500}))})}openEdit(a){this.dialog.open(yt,{data:{project:a},width:"620px"}).afterClosed().subscribe(t=>{t&&(this.data.updateProject(t),this.snack.open("Project updated! \u2705","",{duration:2500}))})}delete(a){confirm(`Delete "${a.title}"?`)&&(this.data.deleteProject(a.id),this.snack.open("Project deleted.","",{duration:2e3}))}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase()}static \u0275fac=function(e){return new(e||n)(V(Ye),V(je),V(Ut))};static \u0275cmp=D({type:n,selectors:[["app-manage-projects"]],viewQuery:function(e,t){if(e&1&&ce(_t,5),e&2){let i;k(i=S())&&(t.paginator=i.first)}},standalone:!1,decls:39,vars:5,consts:[[1,"section-wrapper"],[1,"page-header"],[1,"section-label"],[1,"section-title"],["mat-raised-button","","color","primary",3,"click"],[1,"divider"],["appearance","outline",1,"search-field"],["matInput","",3,"input"],["matSuffix",""],[1,"table-wrapper"],["mat-table","",1,"mat-elevation-z0","data-table",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","category"],["matColumnDef","duration"],["matColumnDef","techStack"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"tag"],["class","tag",4,"ngFor","ngForOf"],["class","more",4,"ngIf"],[1,"more"],["mat-icon-button","","color","primary","matTooltip","Edit",3,"click"],["mat-icon-button","","color","warn","matTooltip","Delete",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],[1,"mat-cell","no-data"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),m(4,"Admin \u2192 Projects"),l(),s(5,"h2",3),m(6,"Manage Projects"),l()(),s(7,"button",4),w("click",function(){return t.openAdd()}),s(8,"mat-icon"),m(9,"add"),l(),m(10," Add Project "),l()(),g(11,"div",5),s(12,"mat-form-field",6)(13,"mat-label"),m(14,"Search projects\u2026"),l(),s(15,"input",7),w("input",function(o){return t.applyFilter(o)}),l(),s(16,"mat-icon",8),m(17,"search"),l()(),s(18,"div",9)(19,"table",10),G(20,11),y(21,dr,2,0,"th",12)(22,cr,2,1,"td",13),q(),G(23,14),y(24,mr,2,0,"th",12)(25,hr,3,1,"td",13),q(),G(26,15),y(27,ur,2,0,"th",12)(28,pr,2,1,"td",13),q(),G(29,16),y(30,fr,2,0,"th",12)(31,vr,3,2,"td",13),q(),G(32,17),y(33,yr,2,0,"th",12)(34,br,7,0,"td",13),q(),y(35,Cr,1,0,"tr",18)(36,wr,1,0,"tr",19)(37,Dr,3,1,"tr",20),l(),g(38,"mat-paginator",21),l()()),e&2&&(h(19),f("dataSource",t.dataSource),h(16),f("matHeaderRowDef",t.displayedColumns),h(),f("matRowDefColumns",t.displayedColumns),h(2),f("pageSizeOptions",_n(4,lr)))},dependencies:[Se,xe,he,me,Ke,Zt,ei,ai,ti,Jt,oi,ii,ni,ri,si,li,_t,pe,Ee,Je,Oe,it],styles:[".page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:.5rem}.search-field[_ngcontent-%COMP%]{width:100%;max-width:400px;margin-bottom:1.5rem}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;border:1px solid var(--card-border);border-radius:8px}.data-table[_ngcontent-%COMP%]{width:100%;background:transparent!important}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--text-dim);font-size:.78rem;font-family:var(--font-mono);letter-spacing:.05em;text-transform:uppercase;background:#ffffff08}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--text);border-bottom-color:var(--card-border)!important;vertical-align:middle;padding:12px 16px}.more[_ngcontent-%COMP%]{color:var(--text-dim);font-size:.7rem;margin-left:4px}.no-data[_ngcontent-%COMP%]{text-align:center;padding:2rem!important;color:var(--text-dim)}"],changeDetection:0})};function kr(n,a){n&1&&(s(0,"mat-error"),m(1,"Required"),l())}function Sr(n,a){if(n&1&&(s(0,"mat-option",15),m(1),l()),n&2){let e=a.$implicit;f("value",e),h(),T(e)}}var bt=class n{constructor(a,e,t){this.fb=a;this.dialogRef=e;this.data=t;this.isEdit=!!t?.skill;let i=t?.skill;this.form=this.fb.group({name:[i?.name||"",ue.required],category:[i?.category||"Frontend",ue.required],icon:[i?.icon||"\u26A1"],proficiency:[i?.proficiency||80]})}form;isEdit;categories=["Frontend","Backend","Database","Tools","Other"];save(){if(this.form.invalid){this.form.markAllAsTouched();return}this.dialogRef.close(Q(Q({},this.data?.skill),this.form.value))}static \u0275fac=function(e){return new(e||n)(V(Nt),V(ye),V(vt))};static \u0275cmp=D({type:n,selectors:[["app-skill-dialog"]],standalone:!1,decls:32,vars:6,consts:[["mat-dialog-title",""],[1,"dialog-form",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name"],[4,"ngIf"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","icon","placeholder","\u26A1"],[1,"slider-field"],[1,"slider-label"],["min","10","max","100","step","5",1,"full-slider"],["matSliderThumb","","formControlName","proficiency"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(e,t){if(e&1&&(s(0,"h2",0),m(1),l(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Skill Name"),l(),g(7,"input",3),y(8,kr,2,0,"mat-error",4),l(),s(9,"mat-form-field",2)(10,"mat-label"),m(11,"Category"),l(),s(12,"mat-select",5),y(13,Sr,2,2,"mat-option",6),l()(),s(14,"mat-form-field",2)(15,"mat-label"),m(16,"Icon (emoji)"),l(),g(17,"input",7),l(),s(18,"div",8)(19,"label",9),m(20,"Proficiency: "),s(21,"strong"),m(22),l()(),s(23,"mat-slider",10),g(24,"input",11),l()()()(),s(25,"mat-dialog-actions",12)(26,"button",13),m(27,"Cancel"),l(),s(28,"button",14),w("click",function(){return t.save()}),s(29,"mat-icon"),m(30,"save"),l(),m(31),l()()),e&2){let i,o;h(),F("",t.isEdit?"Edit":"Add"," Skill"),h(2),f("formGroup",t.form),h(5),f("ngIf",(i=t.form.get("name"))==null?null:i.hasError("required")),h(5),f("ngForOf",t.categories),h(9),F("",(o=t.form.get("proficiency"))==null?null:o.value,"%"),h(9),F(" ",t.isEdit?"Update":"Add"," ")}},dependencies:[Se,xe,Pt,Et,Ot,At,Ze,Ft,he,me,ui,pi,_i,fi,pe,Ee,Vt,Oe,ot,Te,Ba,Zi],styles:[".dialog-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding-top:.5rem;min-width:400px}.full-width[_ngcontent-%COMP%]{width:100%}.slider-label[_ngcontent-%COMP%]{font-size:.875rem;color:var(--text-dim);display:block;margin-bottom:.5rem}.slider-field[_ngcontent-%COMP%]{padding:.5rem 0}.full-slider[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})};function xr(n,a){n&1&&g(0,"th",22)}function Rr(n,a){if(n&1&&(s(0,"td",23),m(1),l()),n&2){let e=a.$implicit;h(),T(e.icon)}}function Mr(n,a){n&1&&(s(0,"th",22),m(1,"Skill"),l())}function Tr(n,a){if(n&1&&(s(0,"td",24)(1,"strong"),m(2),l()()),n&2){let e=a.$implicit;h(2),T(e.name)}}function Ir(n,a){n&1&&(s(0,"th",22),m(1,"Category"),l())}function Er(n,a){if(n&1&&(s(0,"td",24)(1,"span",25),m(2),l()()),n&2){let e=a.$implicit;h(2),T(e.category)}}function Or(n,a){n&1&&(s(0,"th",22),m(1,"Proficiency"),l())}function Ar(n,a){if(n&1&&(s(0,"td",24)(1,"div",26)(2,"div",27),g(3,"div",28),l(),s(4,"span",29),m(5),l()()()),n&2){let e=a.$implicit;h(3),Qe("width",e.proficiency,"%"),h(2),F("",e.proficiency,"%")}}function Pr(n,a){n&1&&(s(0,"th",22),m(1,"Actions"),l())}function Fr(n,a){if(n&1){let e=de();s(0,"td",24)(1,"button",30),w("click",function(){let i=Z(e).$implicit,o=b();return J(o.openEdit(i))}),s(2,"mat-icon"),m(3,"edit"),l()(),s(4,"button",31),w("click",function(){let i=Z(e).$implicit,o=b();return J(o.delete(i))}),s(5,"mat-icon"),m(6,"delete"),l()()()}}function Nr(n,a){n&1&&g(0,"tr",32)}function Vr(n,a){n&1&&g(0,"tr",33)}function Lr(n,a){if(n&1&&(s(0,"tr",34)(1,"td",35),m(2,"No skills found."),l()()),n&2){let e=b();h(),O("colspan",e.displayedColumns.length)}}var Di=class n{constructor(a,e,t){this.data=a;this.dialog=e;this.snack=t}displayedColumns=["icon","name","category","proficiency","actions"];dataSource=new at;ngOnInit(){this.data.skills$.subscribe(a=>this.dataSource.data=a)}openAdd(){this.dialog.open(bt,{data:{},width:"460px"}).afterClosed().subscribe(a=>{a&&(this.data.addSkill(a),this.snack.open("Skill added! \u2705","",{duration:2500}))})}openEdit(a){this.dialog.open(bt,{data:{skill:a},width:"460px"}).afterClosed().subscribe(e=>{e&&(this.data.updateSkill(e),this.snack.open("Skill updated! \u2705","",{duration:2500}))})}delete(a){confirm(`Delete "${a.name}"?`)&&(this.data.deleteSkill(a.id),this.snack.open("Skill deleted.","",{duration:2e3}))}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase()}static \u0275fac=function(e){return new(e||n)(V(Ye),V(je),V(Ut))};static \u0275cmp=D({type:n,selectors:[["app-manage-skills"]],standalone:!1,decls:38,vars:3,consts:[[1,"section-wrapper"],[1,"page-header"],[1,"section-label"],[1,"section-title"],["mat-raised-button","","color","primary",3,"click"],[1,"divider"],["appearance","outline",1,"search-field"],["matInput","",3,"input"],["matSuffix",""],[1,"table-wrapper"],["mat-table","",1,"data-table",3,"dataSource"],["matColumnDef","icon"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","icon-cell",4,"matCellDef"],["matColumnDef","name"],["mat-cell","",4,"matCellDef"],["matColumnDef","category"],["matColumnDef","proficiency"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell","",1,"icon-cell"],["mat-cell",""],[1,"tag"],[1,"bar-row"],[1,"bar-track"],[1,"bar-fill"],[1,"pct"],["mat-icon-button","","color","primary","matTooltip","Edit",3,"click"],["mat-icon-button","","color","warn","matTooltip","Delete",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],[1,"mat-cell","no-data"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),m(4,"Admin \u2192 Skills"),l(),s(5,"h2",3),m(6,"Manage Skills"),l()(),s(7,"button",4),w("click",function(){return t.openAdd()}),s(8,"mat-icon"),m(9,"add"),l(),m(10," Add Skill "),l()(),g(11,"div",5),s(12,"mat-form-field",6)(13,"mat-label"),m(14,"Search skills\u2026"),l(),s(15,"input",7),w("input",function(o){return t.applyFilter(o)}),l(),s(16,"mat-icon",8),m(17,"search"),l()(),s(18,"div",9)(19,"table",10),G(20,11),y(21,xr,1,0,"th",12)(22,Rr,2,1,"td",13),q(),G(23,14),y(24,Mr,2,0,"th",12)(25,Tr,3,1,"td",15),q(),G(26,16),y(27,Ir,2,0,"th",12)(28,Er,3,1,"td",15),q(),G(29,17),y(30,Or,2,0,"th",12)(31,Ar,6,3,"td",15),q(),G(32,18),y(33,Pr,2,0,"th",12)(34,Fr,7,0,"td",15),q(),y(35,Nr,1,0,"tr",19)(36,Vr,1,0,"tr",20)(37,Lr,3,1,"tr",21),l()()()),e&2&&(h(19),f("dataSource",t.dataSource),h(16),f("matHeaderRowDef",t.displayedColumns),h(),f("matRowDefColumns",t.displayedColumns))},dependencies:[he,me,Ke,Zt,ei,ai,ti,Jt,oi,ii,ni,ri,si,li,pe,Ee,Je,Oe,it],styles:[".page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:.5rem}.search-field[_ngcontent-%COMP%]{width:100%;max-width:400px;margin-bottom:1.5rem}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;border:1px solid var(--card-border);border-radius:8px}.data-table[_ngcontent-%COMP%]{width:100%;background:transparent!important}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--text-dim);font-size:.78rem;font-family:var(--font-mono);text-transform:uppercase;background:#ffffff08}.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--text);border-bottom-color:var(--card-border)!important;vertical-align:middle;padding:12px 16px}.icon-cell[_ngcontent-%COMP%]{font-size:1.5rem;width:50px}.bar-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.bar-track[_ngcontent-%COMP%]{flex:1;height:6px;background:#ffffff1a;border-radius:3px;overflow:hidden;min-width:100px}.bar-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:3px}.pct[_ngcontent-%COMP%]{font-family:var(--font-mono);font-size:.75rem;color:var(--text-dim);min-width:36px}.no-data[_ngcontent-%COMP%]{text-align:center;padding:2rem!important;color:var(--text-dim)}"],changeDetection:0})};var Br=[{path:"",component:vi,canActivate:[st]},{path:"projects",component:wi,canActivate:[st]},{path:"skills",component:Di,canActivate:[st]}],Ua=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=W({type:n});static \u0275inj=U({imports:[Cn,Hn.forChild(Br),Kn,qn,Wn,It,ba,Ra,Na,Lt,Jn,ci,za,Wt,ua]})};export{Ua as AdminModule};
