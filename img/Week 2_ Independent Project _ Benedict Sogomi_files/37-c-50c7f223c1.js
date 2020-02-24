(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[37],{"98h6":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var i=n("1OyB")
n("DEX3")
var o=n("zt34")
var a=[]
var s=function e(){Object(i["a"])(this,e)}
s.focusRegion=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n
n="string"===typeof t?s.getEntry(e,t):s.addEntry(e,t)
if(n&&n.region&&"function"===typeof n.region.focus){n.region.focus()
return n.region}"[FocusRegionManager] Could not focus region with element: ".concat(e)}
s.activateRegion=function(e,t){var n=s.addEntry(e,t),i=n.region
return i}
s.getActiveEntry=function(){return a.find((function(e){var t=e.region
return t.focused}))}
s.findEntry=function(e,t){var n
n=t?a.findIndex((function(e){return e.id===t})):a.findIndex((function(t){return t.element===e}))
return n}
s.getEntry=function(e,t){return a[s.findEntry(e,t)]}
s.addEntry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=new o["a"](e,t)
var i=s.getActiveEntry()
var r=n.keyboardFocusable
a.forEach((function(e){var t=e.region
t&&t.deactivate(t.focused&&!r&&{keyboard:false})}))
n.activate()
t.shouldFocusOnOpen&&n.focus()
var u={id:n.id,element:e,region:n,children:[],parent:i}
a.push(u)
i&&i.children.push(u)
return u}
s.removeEntry=function(e,t){var n=s.findEntry(e,t)
var i=a[n]
n>-1&&a.splice(n,1)
return i}
s.isFocused=function(e,t){var n=s.getActiveEntry()
return t?n&&n.region&&n.id===t:n&&n.region&&n.element===e}
s.clearEntries=function(){a=[]}
s.blurRegion=function(e,t){var n=s.removeEntry(e,t)
if(n){var i=n.children,o=n.region,a=n.parent
o&&o.deactivate()
i&&i.forEach((function(e){var t=e.id,n=e.element
var i=s.removeEntry(n,t)
i&&i.region&&i.region.deactivate()}))
a&&a.region&&a.region.activate()
o&&o.blur()}}},ETsX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var i=n("1OyB")
var o=n("vuIU")
n("DEX3")
var a=n("ISHz")
var s=n("K7t/")
var r=n("QF4Q")
var u=n("yfCu")
var c=n("DUTp")
var l=n("gpCx")
var f=n("pgSO")
var h=n("3zPy")
var d=n.n(h)
var v=n("hGMy")
var b=n("e+xl")
var p=n("cFoZ")
var m=function(){function e(t,n){var o=this
Object(i["a"])(this,e)
this._contextElement=null
this._focusLaterElement=null
this._needToFocus=false
this._listeners=[]
this._raf=[]
this._active=false
this.handleDismiss=function(e){o._options.onDismiss(e)}
this.handleKeyDown=function(e){e.keyCode===d.a.codes.tab&&Object(v["a"])(o._contextElement,e)}
this.handleClick=function(e){o._wasDocumentClick=true}
this.handleWindowBlur=function(e){if(o._wasDocumentClick){o._wasDocumentClick=false
return}o._needToFocus=true}
this.handleFocus=function(e){if(o._needToFocus){o._needToFocus=false
if(!o._contextElement)return
o._raf.push(Object(a["a"])((function(){if(Object(s["a"])(o._contextElement))return
o.focusDefaultElement()})))}}
this.handleFirstTabbableKeyDown=function(e){e.keyCode===d.a.codes.tab&&e.shiftKey&&o._options.onBlur(e)}
this.handleLastTabbableKeyDown=function(e){e.keyCode!==d.a.codes.tab||e.shiftKey||o._options.onBlur(e)}
this._contextElement=Object(r["a"])(t)
this._options=n||{shouldContainFocus:true,shouldReturnFocus:true,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null}
this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}Object(o["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=Object(r["a"])(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
if(this.focused)return
this._raf.push(Object(a["a"])((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
if(!this._active&&(e||t)){if(t)this._listeners.push(Object(u["a"])(this.doc,"keydown",this.handleKeyDown))
else{this._listeners.push(Object(u["a"])(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown))
this._listeners.push(Object(u["a"])(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))}this._listeners.push(Object(u["a"])(this.doc,"click",this.handleClick,true))
this._listeners.push(Object(u["a"])(this.win,"blur",this.handleWindowBlur,false))
this._listeners.push(Object(u["a"])(this.doc,"focus",this.handleFocus,true))
this._active=true}}},{key:"deactivate",value:function(){if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
this._preventCloseOnDocumentClick=false
this._active=false}}},{key:"focused",get:function(){return Object(s["a"])(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return true===e||Array.isArray(e)&&e.includes["keyboard"]}},{key:"focusable",get:function(){return Object(p["a"])(this._contextElement,(function(){return true}),true)||[]}},{key:"tabbable",get:function(){return Object(b["a"])(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return Object(c["a"])(this._contextElement)}},{key:"win",get:function(){return Object(l["a"])(this._contextElement)}},{key:"activeElement",get:function(){return Object(f["a"])(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement
var t=Object(r["a"])("function"===typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
if(n)return n
if(this.focusable.includes(this._contextElement))return this._contextElement
return null}}])
return e}()},FVFf:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("1OyB")
var o=n("vuIU")
n("DEX3")
var a=function(){function e(t){var n=this
var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:true,liveRegion:[]}
Object(i["a"])(this,e)
this._observer=null
this._attributes=[]
this._nodes=[]
this._parents=[]
this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes)
var i=Array.from(e.removedNodes)
n.hideNodes(t)
i.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e)
var t=n.parseIframeBodies(e)
t.forEach((function(e){n.restoreNode(e)}))}))}))}
var a="function"===typeof o.liveRegion?o.liveRegion():o.liveRegion
this._liveRegion=Array.isArray(a)?a:[a]
this._contextElement=t
this._options=o}Object(o["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
if(e&&"script"!==e.tagName.toLowerCase()){["role","aria-label","aria-hidden"].forEach((function(n){var i=e.getAttribute(n)
if(null!==i){t._attributes.push([e,n,i])
e.removeAttribute(n)}}))
this._observer.observe(e,{childList:true})}}},{key:"hideNodes",value:function(e){var t=this
e.forEach((function(e){if(e&&1===e.nodeType&&"script"!==e.tagName.toLowerCase()&&-1===t._parents.indexOf(e)&&-1===t._nodes.indexOf(e)&&-1===t._liveRegion.indexOf(e)&&!t._contextElement.contains(e)){"iframe"!==e.tagName.toLowerCase()&&t.hideNode(e)
var n=t.parseIframeBodies(e)
n.forEach((function(e){t.hideNode(e)}))}}))}},{key:"hideNode",value:function(e){if("true"!==e.getAttribute("aria-hidden")){e.setAttribute("aria-hidden","true")
this._nodes.push(e)}}},{key:"restoreNode",value:function(e){var t=this._nodes.indexOf(e)
if(t>=0){e.removeAttribute("aria-hidden")
this._nodes.splice(t,1)}}},{key:"parseIframeBodies",value:function(e){if(!e)return[]
var t=[]
"iframe"===e.tagName.toLowerCase()?t.push(e):e.getElementsByTagName&&(t=Array.from(e.getElementsByTagName("iframe")))
return t.map((function(e){var t=null
try{t=e.contentDocument.body}catch(e){"[ui-a11y] could not find a document for iframe: ".concat(e)}return t})).filter((function(e){return null!==e}))}},{key:"activate",value:function(){if(!this._options.shouldContainFocus)return
this._observer=new MutationObserver(this.handleDOMMutation)
var e=this._contextElement
while(e&&1===e.nodeType&&"body"!==e.tagName.toLowerCase()){var t=e.parentElement
if(t){this._parents.push(t)
this.muteNode(t)
this.hideNodes(Array.prototype.slice.call(t.childNodes))}e=e.parentNode}}},{key:"deactivate",value:function(){if(this._observer){this._observer.disconnect()
this._observer=null}this._nodes.forEach((function(e){e.removeAttribute("aria-hidden")}))
this._nodes=[]
this._attributes.forEach((function(e){e[0].setAttribute(e[1],e[2]||"")}))
this._attributes=[]
this._parents=[]}}])
return e}()},cFoZ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("KQm4")
var o=n("QF4Q")
var a=n("xm5c")
var s=n("IPIv")
var r=n("DEX3")
function u(e,t,n){Object(r["warn"])(false,"[findFocusable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`")
var s=Object(o["a"])(e)
if(!s||"function"!==typeof s.querySelectorAll)return[]
var u="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var c=Array.from(s.querySelectorAll(u))
n&&Object(a["a"])(s,u)&&(c=[].concat(Object(i["a"])(c),[s]))
return c.filter((function(e){return"function"===typeof t?t(e)&&h(e):h(e)}))}function c(e){var t=Object(s["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function l(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(s["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function f(e){while(e){if(e===document.body)break
if(c(e))return false
if(l(e))break
e=e.parentNode}return true}function h(e){return!e.disabled&&f(e)}},"e+xl":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("DEX3")
var o=n("cFoZ")
function a(e,t){Object(i["warn"])(false,"[findTabbable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`")
return Object(o["a"])(e,(function(e){return!s(e.getAttribute("tabindex"))}),t)}function s(e){return!isNaN(e)&&e<0}},hGMy:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("QF4Q")
var o=n("K7t/")
var a=n("pgSO")
var s=n("/UXv")
var r=n("e+xl")
function u(e,t,n){var u=Object(i["a"])(e)
var c=Object(r["a"])(u)
if(!c.length){t.preventDefault()
return}if(Object(o["a"])(e)){var l=Object(a["a"])();-1===c.indexOf(l)&&c.push(l)}var f=c[t.shiftKey?0:c.length-1]
var h=Object(s["a"])(f)||Object(s["a"])(u)||!Object(o["a"])(e)
if(!h)return
if("function"===typeof n){n()
return}t.preventDefault()
var d=c[t.shiftKey?c.length-1:0]
d.focus()}},"o/UQ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return F}))
var i=n("VTBJ")
var o=n("Ff2n")
var a=n("1OyB")
var s=n("vuIU")
var r=n("md7G")
var u=n("foSv")
var c=n("Ji7U")
n("DEX3")
var l=n("q1tI")
var f=n.n(l)
var h=n("17x9")
var d=n.n(h)
var v=n("nAyT")
var b=n("KgFQ")
var p=n("jtGx")
var m=n("ISHz")
var y=n("QF4Q")
var _=n("98h6")
var g,E,O,k
var F=(g=Object(v["a"])("7.0.0",null,"Use Dialog from ui-dialog instead"),g(E=(k=O=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(a["a"])(this,t)
for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s]
n=Object(r["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(o)))
n._raf=[]
n._focusRegion=null
n.getRef=function(e){n._root=e}
return n}Object(s["a"])(t,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(o["a"])(t,["open","contentElement"]))
this._raf.push(Object(m["a"])((function(){e._focusRegion=_["a"].activateRegion(e.contentElement,Object(i["a"])({},n))})))}},{key:"close",value:function(){this._focusRegion&&_["a"].blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&_["a"].focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=Object(b["a"])(t,this.props)
return this.props.open?f.a.createElement(e,Object.assign({},Object(p["a"])(this.props,t.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(y["a"])(this.props.contentElement)
e||(e=Object(y["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&_["a"].isFocused(this.contentElement,this._focusRegion.id)}}])
t.displayName="Dialog"
return t}(l["Component"]),O.propTypes={children:d.a.node,as:d.a.elementType,display:d.a.oneOf(["auto","block","inline-block"]),label:d.a.string,open:d.a.bool,onBlur:d.a.func,onDismiss:d.a.func,defaultFocusElement:d.a.oneOfType([d.a.element,d.a.func]),contentElement:d.a.oneOfType([d.a.element,d.a.func]),liveRegion:d.a.oneOfType([d.a.arrayOf(d.a.element),d.a.element,d.a.func]),shouldContainFocus:d.a.oneOfType([d.a.bool,d.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:d.a.bool,shouldCloseOnDocumentClick:d.a.bool,shouldCloseOnEscape:d.a.bool,shouldFocusOnOpen:d.a.bool},O.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}},k))||E)},zt34:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var i=n("1OyB")
var o=n("vuIU")
n("DEX3")
var a=n("3zPy")
var s=n.n(a)
var r=n("EgqM")
var u=n("DUTp")
var c=n("yfCu")
var l=n("Fszh")
var f=n("BTe1")
var h=n("e+xl")
var d=n("FVFf")
var v=n("ETsX")
var b=function(){function e(t,n){var o=this
Object(i["a"])(this,e)
this._contextElement=null
this._preventCloseOnDocumentClick=false
this._listeners=[]
this._active=false
this.handleDismiss=function(e,t){o._options.onDismiss(e,t)}
this.captureDocumentClick=function(e){var t=e.target
o._preventCloseOnDocumentClick=0!==e.button||Object(r["a"])(o._contextElement,t)}
this.handleDocumentClick=function(e){o._options.shouldCloseOnDocumentClick&&!o._preventCloseOnDocumentClick&&o.handleDismiss(e,true)}
this.handleFrameClick=function(e,t){Object(r["a"])(o._contextElement,t)||o.handleDismiss(e,true)}
this.handleKeyUp=function(e){o._options.shouldCloseOnEscape&&e.keyCode===s.a.codes.escape&&!e.defaultPrevented&&o.handleDismiss(e)}
this._options=n||{shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,onDismiss:function(e){}}
this._contextElement=t
this._screenReaderFocusRegion=new d["a"](t,n)
this._keyboardFocusRegion=new v["a"](t,n)
this._id=Object(f["a"])()}Object(o["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e
this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e)
this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=Object(u["a"])(this._contextElement)
this._keyboardFocusRegion.activate()
this._screenReaderFocusRegion.activate()
if(this._options.shouldCloseOnDocumentClick){this._listeners.push(Object(c["a"])(t,"click",this.captureDocumentClick,true))
this._listeners.push(Object(c["a"])(t,"click",this.handleDocumentClick))
Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=Object(l["a"])(t)
n&&e._listeners.push(Object(c["a"])(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))}this._options.shouldCloseOnEscape&&this._listeners.push(Object(c["a"])(t,"keyup",this.handleKeyUp))
this._active=true}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
n&&this._keyboardFocusRegion.deactivate()
this._screenReaderFocusRegion.deactivate()
this._active=false}}},{key:"focus",value:function(){this._active
this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active
this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(Object(h["a"])(this._contextElement)||[]).length>0}}])
return e}()}}])

//# sourceMappingURL=37-c-50c7f223c1.js.map