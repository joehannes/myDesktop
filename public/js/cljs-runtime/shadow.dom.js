goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18863 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18863(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18871 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18871(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17823 = coll;
var G__17824 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17823,G__17824) : shadow.dom.lazy_native_coll_seq.call(null,G__17823,G__17824));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17829 = arguments.length;
switch (G__17829) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17834 = arguments.length;
switch (G__17834) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17838 = arguments.length;
switch (G__17838) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17882 = arguments.length;
switch (G__17882) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17901 = arguments.length;
switch (G__17901) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17907){if((e17907 instanceof Object)){
var e = e17907;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17907;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17918 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17919 = null;
var count__17920 = (0);
var i__17921 = (0);
while(true){
if((i__17921 < count__17920)){
var el = chunk__17919.cljs$core$IIndexed$_nth$arity$2(null,i__17921);
var handler_18889__$1 = ((function (seq__17918,chunk__17919,count__17920,i__17921,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17918,chunk__17919,count__17920,i__17921,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18889__$1);


var G__18890 = seq__17918;
var G__18891 = chunk__17919;
var G__18892 = count__17920;
var G__18893 = (i__17921 + (1));
seq__17918 = G__18890;
chunk__17919 = G__18891;
count__17920 = G__18892;
i__17921 = G__18893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17918);
if(temp__5804__auto__){
var seq__17918__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17918__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17918__$1);
var G__18895 = cljs.core.chunk_rest(seq__17918__$1);
var G__18896 = c__5568__auto__;
var G__18897 = cljs.core.count(c__5568__auto__);
var G__18898 = (0);
seq__17918 = G__18895;
chunk__17919 = G__18896;
count__17920 = G__18897;
i__17921 = G__18898;
continue;
} else {
var el = cljs.core.first(seq__17918__$1);
var handler_18899__$1 = ((function (seq__17918,chunk__17919,count__17920,i__17921,el,seq__17918__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17918,chunk__17919,count__17920,i__17921,el,seq__17918__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18899__$1);


var G__18903 = cljs.core.next(seq__17918__$1);
var G__18904 = null;
var G__18905 = (0);
var G__18906 = (0);
seq__17918 = G__18903;
chunk__17919 = G__18904;
count__17920 = G__18905;
i__17921 = G__18906;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17952 = arguments.length;
switch (G__17952) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17981 = cljs.core.seq(events);
var chunk__17982 = null;
var count__17983 = (0);
var i__17984 = (0);
while(true){
if((i__17984 < count__17983)){
var vec__18011 = chunk__17982.cljs$core$IIndexed$_nth$arity$2(null,i__17984);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18908 = seq__17981;
var G__18909 = chunk__17982;
var G__18910 = count__17983;
var G__18911 = (i__17984 + (1));
seq__17981 = G__18908;
chunk__17982 = G__18909;
count__17983 = G__18910;
i__17984 = G__18911;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17981);
if(temp__5804__auto__){
var seq__17981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17981__$1);
var G__18912 = cljs.core.chunk_rest(seq__17981__$1);
var G__18913 = c__5568__auto__;
var G__18914 = cljs.core.count(c__5568__auto__);
var G__18915 = (0);
seq__17981 = G__18912;
chunk__17982 = G__18913;
count__17983 = G__18914;
i__17984 = G__18915;
continue;
} else {
var vec__18016 = cljs.core.first(seq__17981__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18916 = cljs.core.next(seq__17981__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__17981 = G__18916;
chunk__17982 = G__18917;
count__17983 = G__18918;
i__17984 = G__18919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18023 = cljs.core.seq(styles);
var chunk__18024 = null;
var count__18025 = (0);
var i__18026 = (0);
while(true){
if((i__18026 < count__18025)){
var vec__18040 = chunk__18024.cljs$core$IIndexed$_nth$arity$2(null,i__18026);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18920 = seq__18023;
var G__18921 = chunk__18024;
var G__18922 = count__18025;
var G__18923 = (i__18026 + (1));
seq__18023 = G__18920;
chunk__18024 = G__18921;
count__18025 = G__18922;
i__18026 = G__18923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18023);
if(temp__5804__auto__){
var seq__18023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18023__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18023__$1);
var G__18924 = cljs.core.chunk_rest(seq__18023__$1);
var G__18925 = c__5568__auto__;
var G__18926 = cljs.core.count(c__5568__auto__);
var G__18927 = (0);
seq__18023 = G__18924;
chunk__18024 = G__18925;
count__18025 = G__18926;
i__18026 = G__18927;
continue;
} else {
var vec__18046 = cljs.core.first(seq__18023__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18928 = cljs.core.next(seq__18023__$1);
var G__18929 = null;
var G__18930 = (0);
var G__18931 = (0);
seq__18023 = G__18928;
chunk__18024 = G__18929;
count__18025 = G__18930;
i__18026 = G__18931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18054_18932 = key;
var G__18054_18933__$1 = (((G__18054_18932 instanceof cljs.core.Keyword))?G__18054_18932.fqn:null);
switch (G__18054_18933__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18942 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18942,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18942,"aria-");
}
})())){
el.setAttribute(ks_18942,value);
} else {
(el[ks_18942] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18078){
var map__18079 = p__18078;
var map__18079__$1 = cljs.core.__destructure_map(map__18079);
var props = map__18079__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18081 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18081,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18081,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18081,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18084 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18084,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18084;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18090 = arguments.length;
switch (G__18090) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18095){
var vec__18096 = p__18095;
var seq__18097 = cljs.core.seq(vec__18096);
var first__18098 = cljs.core.first(seq__18097);
var seq__18097__$1 = cljs.core.next(seq__18097);
var nn = first__18098;
var first__18098__$1 = cljs.core.first(seq__18097__$1);
var seq__18097__$2 = cljs.core.next(seq__18097__$1);
var np = first__18098__$1;
var nc = seq__18097__$2;
var node = vec__18096;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18099 = nn;
var G__18100 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18099,G__18100) : create_fn.call(null,G__18099,G__18100));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18101 = nn;
var G__18102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18101,G__18102) : create_fn.call(null,G__18101,G__18102));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18103 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(1),null);
var seq__18106_18954 = cljs.core.seq(node_children);
var chunk__18107_18955 = null;
var count__18108_18956 = (0);
var i__18109_18957 = (0);
while(true){
if((i__18109_18957 < count__18108_18956)){
var child_struct_18958 = chunk__18107_18955.cljs$core$IIndexed$_nth$arity$2(null,i__18109_18957);
var children_18959 = shadow.dom.dom_node(child_struct_18958);
if(cljs.core.seq_QMARK_(children_18959)){
var seq__18150_18960 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18959));
var chunk__18152_18961 = null;
var count__18153_18962 = (0);
var i__18154_18963 = (0);
while(true){
if((i__18154_18963 < count__18153_18962)){
var child_18964 = chunk__18152_18961.cljs$core$IIndexed$_nth$arity$2(null,i__18154_18963);
if(cljs.core.truth_(child_18964)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18964);


var G__18965 = seq__18150_18960;
var G__18966 = chunk__18152_18961;
var G__18967 = count__18153_18962;
var G__18968 = (i__18154_18963 + (1));
seq__18150_18960 = G__18965;
chunk__18152_18961 = G__18966;
count__18153_18962 = G__18967;
i__18154_18963 = G__18968;
continue;
} else {
var G__18969 = seq__18150_18960;
var G__18970 = chunk__18152_18961;
var G__18971 = count__18153_18962;
var G__18972 = (i__18154_18963 + (1));
seq__18150_18960 = G__18969;
chunk__18152_18961 = G__18970;
count__18153_18962 = G__18971;
i__18154_18963 = G__18972;
continue;
}
} else {
var temp__5804__auto___18973 = cljs.core.seq(seq__18150_18960);
if(temp__5804__auto___18973){
var seq__18150_18974__$1 = temp__5804__auto___18973;
if(cljs.core.chunked_seq_QMARK_(seq__18150_18974__$1)){
var c__5568__auto___18975 = cljs.core.chunk_first(seq__18150_18974__$1);
var G__18976 = cljs.core.chunk_rest(seq__18150_18974__$1);
var G__18977 = c__5568__auto___18975;
var G__18978 = cljs.core.count(c__5568__auto___18975);
var G__18979 = (0);
seq__18150_18960 = G__18976;
chunk__18152_18961 = G__18977;
count__18153_18962 = G__18978;
i__18154_18963 = G__18979;
continue;
} else {
var child_18980 = cljs.core.first(seq__18150_18974__$1);
if(cljs.core.truth_(child_18980)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18980);


var G__18981 = cljs.core.next(seq__18150_18974__$1);
var G__18982 = null;
var G__18983 = (0);
var G__18984 = (0);
seq__18150_18960 = G__18981;
chunk__18152_18961 = G__18982;
count__18153_18962 = G__18983;
i__18154_18963 = G__18984;
continue;
} else {
var G__18985 = cljs.core.next(seq__18150_18974__$1);
var G__18986 = null;
var G__18987 = (0);
var G__18988 = (0);
seq__18150_18960 = G__18985;
chunk__18152_18961 = G__18986;
count__18153_18962 = G__18987;
i__18154_18963 = G__18988;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18959);
}


var G__18989 = seq__18106_18954;
var G__18990 = chunk__18107_18955;
var G__18991 = count__18108_18956;
var G__18992 = (i__18109_18957 + (1));
seq__18106_18954 = G__18989;
chunk__18107_18955 = G__18990;
count__18108_18956 = G__18991;
i__18109_18957 = G__18992;
continue;
} else {
var temp__5804__auto___18993 = cljs.core.seq(seq__18106_18954);
if(temp__5804__auto___18993){
var seq__18106_18994__$1 = temp__5804__auto___18993;
if(cljs.core.chunked_seq_QMARK_(seq__18106_18994__$1)){
var c__5568__auto___18995 = cljs.core.chunk_first(seq__18106_18994__$1);
var G__18996 = cljs.core.chunk_rest(seq__18106_18994__$1);
var G__18997 = c__5568__auto___18995;
var G__18998 = cljs.core.count(c__5568__auto___18995);
var G__18999 = (0);
seq__18106_18954 = G__18996;
chunk__18107_18955 = G__18997;
count__18108_18956 = G__18998;
i__18109_18957 = G__18999;
continue;
} else {
var child_struct_19000 = cljs.core.first(seq__18106_18994__$1);
var children_19001 = shadow.dom.dom_node(child_struct_19000);
if(cljs.core.seq_QMARK_(children_19001)){
var seq__18165_19002 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19001));
var chunk__18167_19003 = null;
var count__18168_19004 = (0);
var i__18169_19005 = (0);
while(true){
if((i__18169_19005 < count__18168_19004)){
var child_19007 = chunk__18167_19003.cljs$core$IIndexed$_nth$arity$2(null,i__18169_19005);
if(cljs.core.truth_(child_19007)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19007);


var G__19008 = seq__18165_19002;
var G__19009 = chunk__18167_19003;
var G__19010 = count__18168_19004;
var G__19011 = (i__18169_19005 + (1));
seq__18165_19002 = G__19008;
chunk__18167_19003 = G__19009;
count__18168_19004 = G__19010;
i__18169_19005 = G__19011;
continue;
} else {
var G__19012 = seq__18165_19002;
var G__19013 = chunk__18167_19003;
var G__19014 = count__18168_19004;
var G__19015 = (i__18169_19005 + (1));
seq__18165_19002 = G__19012;
chunk__18167_19003 = G__19013;
count__18168_19004 = G__19014;
i__18169_19005 = G__19015;
continue;
}
} else {
var temp__5804__auto___19016__$1 = cljs.core.seq(seq__18165_19002);
if(temp__5804__auto___19016__$1){
var seq__18165_19017__$1 = temp__5804__auto___19016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18165_19017__$1)){
var c__5568__auto___19018 = cljs.core.chunk_first(seq__18165_19017__$1);
var G__19019 = cljs.core.chunk_rest(seq__18165_19017__$1);
var G__19020 = c__5568__auto___19018;
var G__19021 = cljs.core.count(c__5568__auto___19018);
var G__19022 = (0);
seq__18165_19002 = G__19019;
chunk__18167_19003 = G__19020;
count__18168_19004 = G__19021;
i__18169_19005 = G__19022;
continue;
} else {
var child_19023 = cljs.core.first(seq__18165_19017__$1);
if(cljs.core.truth_(child_19023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19023);


var G__19024 = cljs.core.next(seq__18165_19017__$1);
var G__19025 = null;
var G__19026 = (0);
var G__19028 = (0);
seq__18165_19002 = G__19024;
chunk__18167_19003 = G__19025;
count__18168_19004 = G__19026;
i__18169_19005 = G__19028;
continue;
} else {
var G__19029 = cljs.core.next(seq__18165_19017__$1);
var G__19030 = null;
var G__19031 = (0);
var G__19032 = (0);
seq__18165_19002 = G__19029;
chunk__18167_19003 = G__19030;
count__18168_19004 = G__19031;
i__18169_19005 = G__19032;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19001);
}


var G__19036 = cljs.core.next(seq__18106_18994__$1);
var G__19037 = null;
var G__19038 = (0);
var G__19039 = (0);
seq__18106_18954 = G__19036;
chunk__18107_18955 = G__19037;
count__18108_18956 = G__19038;
i__18109_18957 = G__19039;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18241 = cljs.core.seq(node);
var chunk__18242 = null;
var count__18243 = (0);
var i__18244 = (0);
while(true){
if((i__18244 < count__18243)){
var n = chunk__18242.cljs$core$IIndexed$_nth$arity$2(null,i__18244);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19046 = seq__18241;
var G__19047 = chunk__18242;
var G__19048 = count__18243;
var G__19049 = (i__18244 + (1));
seq__18241 = G__19046;
chunk__18242 = G__19047;
count__18243 = G__19048;
i__18244 = G__19049;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18241);
if(temp__5804__auto__){
var seq__18241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18241__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18241__$1);
var G__19051 = cljs.core.chunk_rest(seq__18241__$1);
var G__19052 = c__5568__auto__;
var G__19053 = cljs.core.count(c__5568__auto__);
var G__19054 = (0);
seq__18241 = G__19051;
chunk__18242 = G__19052;
count__18243 = G__19053;
i__18244 = G__19054;
continue;
} else {
var n = cljs.core.first(seq__18241__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19055 = cljs.core.next(seq__18241__$1);
var G__19056 = null;
var G__19057 = (0);
var G__19058 = (0);
seq__18241 = G__19055;
chunk__18242 = G__19056;
count__18243 = G__19057;
i__18244 = G__19058;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18301 = arguments.length;
switch (G__18301) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18306 = arguments.length;
switch (G__18306) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18308 = arguments.length;
switch (G__18308) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19065 = arguments.length;
var i__5770__auto___19066 = (0);
while(true){
if((i__5770__auto___19066 < len__5769__auto___19065)){
args__5775__auto__.push((arguments[i__5770__auto___19066]));

var G__19067 = (i__5770__auto___19066 + (1));
i__5770__auto___19066 = G__19067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18310_19069 = cljs.core.seq(nodes);
var chunk__18311_19070 = null;
var count__18312_19071 = (0);
var i__18313_19072 = (0);
while(true){
if((i__18313_19072 < count__18312_19071)){
var node_19074 = chunk__18311_19070.cljs$core$IIndexed$_nth$arity$2(null,i__18313_19072);
fragment.appendChild(shadow.dom._to_dom(node_19074));


var G__19075 = seq__18310_19069;
var G__19076 = chunk__18311_19070;
var G__19077 = count__18312_19071;
var G__19078 = (i__18313_19072 + (1));
seq__18310_19069 = G__19075;
chunk__18311_19070 = G__19076;
count__18312_19071 = G__19077;
i__18313_19072 = G__19078;
continue;
} else {
var temp__5804__auto___19079 = cljs.core.seq(seq__18310_19069);
if(temp__5804__auto___19079){
var seq__18310_19081__$1 = temp__5804__auto___19079;
if(cljs.core.chunked_seq_QMARK_(seq__18310_19081__$1)){
var c__5568__auto___19082 = cljs.core.chunk_first(seq__18310_19081__$1);
var G__19083 = cljs.core.chunk_rest(seq__18310_19081__$1);
var G__19084 = c__5568__auto___19082;
var G__19085 = cljs.core.count(c__5568__auto___19082);
var G__19086 = (0);
seq__18310_19069 = G__19083;
chunk__18311_19070 = G__19084;
count__18312_19071 = G__19085;
i__18313_19072 = G__19086;
continue;
} else {
var node_19088 = cljs.core.first(seq__18310_19081__$1);
fragment.appendChild(shadow.dom._to_dom(node_19088));


var G__19089 = cljs.core.next(seq__18310_19081__$1);
var G__19090 = null;
var G__19091 = (0);
var G__19092 = (0);
seq__18310_19069 = G__19089;
chunk__18311_19070 = G__19090;
count__18312_19071 = G__19091;
i__18313_19072 = G__19092;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18309){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18309));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18341_19093 = cljs.core.seq(scripts);
var chunk__18342_19094 = null;
var count__18343_19095 = (0);
var i__18344_19096 = (0);
while(true){
if((i__18344_19096 < count__18343_19095)){
var vec__18359_19097 = chunk__18342_19094.cljs$core$IIndexed$_nth$arity$2(null,i__18344_19096);
var script_tag_19098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18359_19097,(0),null);
var script_body_19099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18359_19097,(1),null);
eval(script_body_19099);


var G__19100 = seq__18341_19093;
var G__19101 = chunk__18342_19094;
var G__19102 = count__18343_19095;
var G__19103 = (i__18344_19096 + (1));
seq__18341_19093 = G__19100;
chunk__18342_19094 = G__19101;
count__18343_19095 = G__19102;
i__18344_19096 = G__19103;
continue;
} else {
var temp__5804__auto___19104 = cljs.core.seq(seq__18341_19093);
if(temp__5804__auto___19104){
var seq__18341_19105__$1 = temp__5804__auto___19104;
if(cljs.core.chunked_seq_QMARK_(seq__18341_19105__$1)){
var c__5568__auto___19106 = cljs.core.chunk_first(seq__18341_19105__$1);
var G__19107 = cljs.core.chunk_rest(seq__18341_19105__$1);
var G__19108 = c__5568__auto___19106;
var G__19109 = cljs.core.count(c__5568__auto___19106);
var G__19110 = (0);
seq__18341_19093 = G__19107;
chunk__18342_19094 = G__19108;
count__18343_19095 = G__19109;
i__18344_19096 = G__19110;
continue;
} else {
var vec__18375_19111 = cljs.core.first(seq__18341_19105__$1);
var script_tag_19112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375_19111,(0),null);
var script_body_19113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375_19111,(1),null);
eval(script_body_19113);


var G__19114 = cljs.core.next(seq__18341_19105__$1);
var G__19115 = null;
var G__19116 = (0);
var G__19117 = (0);
seq__18341_19093 = G__19114;
chunk__18342_19094 = G__19115;
count__18343_19095 = G__19116;
i__18344_19096 = G__19117;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18383){
var vec__18384 = p__18383;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18384,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18384,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18396 = arguments.length;
switch (G__18396) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18414 = cljs.core.seq(style_keys);
var chunk__18415 = null;
var count__18416 = (0);
var i__18417 = (0);
while(true){
if((i__18417 < count__18416)){
var it = chunk__18415.cljs$core$IIndexed$_nth$arity$2(null,i__18417);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19122 = seq__18414;
var G__19123 = chunk__18415;
var G__19124 = count__18416;
var G__19125 = (i__18417 + (1));
seq__18414 = G__19122;
chunk__18415 = G__19123;
count__18416 = G__19124;
i__18417 = G__19125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18414);
if(temp__5804__auto__){
var seq__18414__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18414__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18414__$1);
var G__19126 = cljs.core.chunk_rest(seq__18414__$1);
var G__19127 = c__5568__auto__;
var G__19128 = cljs.core.count(c__5568__auto__);
var G__19129 = (0);
seq__18414 = G__19126;
chunk__18415 = G__19127;
count__18416 = G__19128;
i__18417 = G__19129;
continue;
} else {
var it = cljs.core.first(seq__18414__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19130 = cljs.core.next(seq__18414__$1);
var G__19131 = null;
var G__19132 = (0);
var G__19133 = (0);
seq__18414 = G__19130;
chunk__18415 = G__19131;
count__18416 = G__19132;
i__18417 = G__19133;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18434,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18442 = k18434;
var G__18442__$1 = (((G__18442 instanceof cljs.core.Keyword))?G__18442.fqn:null);
switch (G__18442__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18434,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18446){
var vec__18449 = p__18446;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18433){
var self__ = this;
var G__18433__$1 = this;
return (new cljs.core.RecordIter((0),G__18433__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18435,other18436){
var self__ = this;
var this18435__$1 = this;
return (((!((other18436 == null)))) && ((((this18435__$1.constructor === other18436.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18435__$1.x,other18436.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18435__$1.y,other18436.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18435__$1.__extmap,other18436.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18434){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18475 = k18434;
var G__18475__$1 = (((G__18475 instanceof cljs.core.Keyword))?G__18475.fqn:null);
switch (G__18475__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18434);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18433){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18477 = cljs.core.keyword_identical_QMARK_;
var expr__18478 = k__5352__auto__;
if(cljs.core.truth_((pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18478) : pred__18477.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18478)))){
return (new shadow.dom.Coordinate(G__18433,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18478) : pred__18477.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18478)))){
return (new shadow.dom.Coordinate(self__.x,G__18433,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18433),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18433){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18433,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18438){
var extmap__5385__auto__ = (function (){var G__18492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18438,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18438)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18492);
} else {
return G__18492;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18438),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18438),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18515,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18523 = k18515;
var G__18523__$1 = (((G__18523 instanceof cljs.core.Keyword))?G__18523.fqn:null);
switch (G__18523__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18515,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18527){
var vec__18529 = p__18527;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18529,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18529,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18514){
var self__ = this;
var G__18514__$1 = this;
return (new cljs.core.RecordIter((0),G__18514__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18516,other18517){
var self__ = this;
var this18516__$1 = this;
return (((!((other18517 == null)))) && ((((this18516__$1.constructor === other18517.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18516__$1.w,other18517.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18516__$1.h,other18517.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18516__$1.__extmap,other18517.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18515){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18547 = k18515;
var G__18547__$1 = (((G__18547 instanceof cljs.core.Keyword))?G__18547.fqn:null);
switch (G__18547__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18515);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18514){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18554 = cljs.core.keyword_identical_QMARK_;
var expr__18555 = k__5352__auto__;
if(cljs.core.truth_((pred__18554.cljs$core$IFn$_invoke$arity$2 ? pred__18554.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18555) : pred__18554.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18555)))){
return (new shadow.dom.Size(G__18514,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18554.cljs$core$IFn$_invoke$arity$2 ? pred__18554.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18555) : pred__18554.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18555)))){
return (new shadow.dom.Size(self__.w,G__18514,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18514),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18514){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18514,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18520){
var extmap__5385__auto__ = (function (){var G__18571 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18520,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18520)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18571);
} else {
return G__18571;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18520),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18520),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19141 = (i + (1));
var G__19142 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19141;
ret = G__19142;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18620){
var vec__18627 = p__18620;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18648 = arguments.length;
switch (G__18648) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19144 = ps;
var G__19145 = (i + (1));
el__$1 = G__19144;
i = G__19145;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18687_19150 = cljs.core.seq(props);
var chunk__18689_19151 = null;
var count__18690_19152 = (0);
var i__18691_19153 = (0);
while(true){
if((i__18691_19153 < count__18690_19152)){
var vec__18718_19154 = chunk__18689_19151.cljs$core$IIndexed$_nth$arity$2(null,i__18691_19153);
var k_19155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18718_19154,(0),null);
var v_19156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18718_19154,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19155);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19155),v_19156);


var G__19157 = seq__18687_19150;
var G__19158 = chunk__18689_19151;
var G__19159 = count__18690_19152;
var G__19160 = (i__18691_19153 + (1));
seq__18687_19150 = G__19157;
chunk__18689_19151 = G__19158;
count__18690_19152 = G__19159;
i__18691_19153 = G__19160;
continue;
} else {
var temp__5804__auto___19161 = cljs.core.seq(seq__18687_19150);
if(temp__5804__auto___19161){
var seq__18687_19162__$1 = temp__5804__auto___19161;
if(cljs.core.chunked_seq_QMARK_(seq__18687_19162__$1)){
var c__5568__auto___19163 = cljs.core.chunk_first(seq__18687_19162__$1);
var G__19164 = cljs.core.chunk_rest(seq__18687_19162__$1);
var G__19165 = c__5568__auto___19163;
var G__19166 = cljs.core.count(c__5568__auto___19163);
var G__19167 = (0);
seq__18687_19150 = G__19164;
chunk__18689_19151 = G__19165;
count__18690_19152 = G__19166;
i__18691_19153 = G__19167;
continue;
} else {
var vec__18729_19168 = cljs.core.first(seq__18687_19162__$1);
var k_19169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18729_19168,(0),null);
var v_19170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18729_19168,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19169);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19169),v_19170);


var G__19171 = cljs.core.next(seq__18687_19162__$1);
var G__19172 = null;
var G__19173 = (0);
var G__19174 = (0);
seq__18687_19150 = G__19171;
chunk__18689_19151 = G__19172;
count__18690_19152 = G__19173;
i__18691_19153 = G__19174;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18738 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18738,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18738,(1),null);
var seq__18741_19175 = cljs.core.seq(node_children);
var chunk__18743_19176 = null;
var count__18744_19177 = (0);
var i__18745_19178 = (0);
while(true){
if((i__18745_19178 < count__18744_19177)){
var child_struct_19179 = chunk__18743_19176.cljs$core$IIndexed$_nth$arity$2(null,i__18745_19178);
if((!((child_struct_19179 == null)))){
if(typeof child_struct_19179 === 'string'){
var text_19180 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19180),child_struct_19179].join(''));
} else {
var children_19181 = shadow.dom.svg_node(child_struct_19179);
if(cljs.core.seq_QMARK_(children_19181)){
var seq__18786_19182 = cljs.core.seq(children_19181);
var chunk__18788_19183 = null;
var count__18789_19184 = (0);
var i__18790_19185 = (0);
while(true){
if((i__18790_19185 < count__18789_19184)){
var child_19186 = chunk__18788_19183.cljs$core$IIndexed$_nth$arity$2(null,i__18790_19185);
if(cljs.core.truth_(child_19186)){
node.appendChild(child_19186);


var G__19187 = seq__18786_19182;
var G__19188 = chunk__18788_19183;
var G__19189 = count__18789_19184;
var G__19190 = (i__18790_19185 + (1));
seq__18786_19182 = G__19187;
chunk__18788_19183 = G__19188;
count__18789_19184 = G__19189;
i__18790_19185 = G__19190;
continue;
} else {
var G__19191 = seq__18786_19182;
var G__19192 = chunk__18788_19183;
var G__19193 = count__18789_19184;
var G__19194 = (i__18790_19185 + (1));
seq__18786_19182 = G__19191;
chunk__18788_19183 = G__19192;
count__18789_19184 = G__19193;
i__18790_19185 = G__19194;
continue;
}
} else {
var temp__5804__auto___19195 = cljs.core.seq(seq__18786_19182);
if(temp__5804__auto___19195){
var seq__18786_19196__$1 = temp__5804__auto___19195;
if(cljs.core.chunked_seq_QMARK_(seq__18786_19196__$1)){
var c__5568__auto___19197 = cljs.core.chunk_first(seq__18786_19196__$1);
var G__19198 = cljs.core.chunk_rest(seq__18786_19196__$1);
var G__19199 = c__5568__auto___19197;
var G__19200 = cljs.core.count(c__5568__auto___19197);
var G__19201 = (0);
seq__18786_19182 = G__19198;
chunk__18788_19183 = G__19199;
count__18789_19184 = G__19200;
i__18790_19185 = G__19201;
continue;
} else {
var child_19202 = cljs.core.first(seq__18786_19196__$1);
if(cljs.core.truth_(child_19202)){
node.appendChild(child_19202);


var G__19203 = cljs.core.next(seq__18786_19196__$1);
var G__19204 = null;
var G__19205 = (0);
var G__19206 = (0);
seq__18786_19182 = G__19203;
chunk__18788_19183 = G__19204;
count__18789_19184 = G__19205;
i__18790_19185 = G__19206;
continue;
} else {
var G__19207 = cljs.core.next(seq__18786_19196__$1);
var G__19208 = null;
var G__19209 = (0);
var G__19210 = (0);
seq__18786_19182 = G__19207;
chunk__18788_19183 = G__19208;
count__18789_19184 = G__19209;
i__18790_19185 = G__19210;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19181);
}
}


var G__19211 = seq__18741_19175;
var G__19212 = chunk__18743_19176;
var G__19213 = count__18744_19177;
var G__19214 = (i__18745_19178 + (1));
seq__18741_19175 = G__19211;
chunk__18743_19176 = G__19212;
count__18744_19177 = G__19213;
i__18745_19178 = G__19214;
continue;
} else {
var G__19215 = seq__18741_19175;
var G__19216 = chunk__18743_19176;
var G__19217 = count__18744_19177;
var G__19218 = (i__18745_19178 + (1));
seq__18741_19175 = G__19215;
chunk__18743_19176 = G__19216;
count__18744_19177 = G__19217;
i__18745_19178 = G__19218;
continue;
}
} else {
var temp__5804__auto___19219 = cljs.core.seq(seq__18741_19175);
if(temp__5804__auto___19219){
var seq__18741_19220__$1 = temp__5804__auto___19219;
if(cljs.core.chunked_seq_QMARK_(seq__18741_19220__$1)){
var c__5568__auto___19221 = cljs.core.chunk_first(seq__18741_19220__$1);
var G__19222 = cljs.core.chunk_rest(seq__18741_19220__$1);
var G__19223 = c__5568__auto___19221;
var G__19224 = cljs.core.count(c__5568__auto___19221);
var G__19225 = (0);
seq__18741_19175 = G__19222;
chunk__18743_19176 = G__19223;
count__18744_19177 = G__19224;
i__18745_19178 = G__19225;
continue;
} else {
var child_struct_19226 = cljs.core.first(seq__18741_19220__$1);
if((!((child_struct_19226 == null)))){
if(typeof child_struct_19226 === 'string'){
var text_19227 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19227),child_struct_19226].join(''));
} else {
var children_19228 = shadow.dom.svg_node(child_struct_19226);
if(cljs.core.seq_QMARK_(children_19228)){
var seq__18794_19229 = cljs.core.seq(children_19228);
var chunk__18796_19230 = null;
var count__18797_19231 = (0);
var i__18798_19232 = (0);
while(true){
if((i__18798_19232 < count__18797_19231)){
var child_19237 = chunk__18796_19230.cljs$core$IIndexed$_nth$arity$2(null,i__18798_19232);
if(cljs.core.truth_(child_19237)){
node.appendChild(child_19237);


var G__19238 = seq__18794_19229;
var G__19239 = chunk__18796_19230;
var G__19240 = count__18797_19231;
var G__19241 = (i__18798_19232 + (1));
seq__18794_19229 = G__19238;
chunk__18796_19230 = G__19239;
count__18797_19231 = G__19240;
i__18798_19232 = G__19241;
continue;
} else {
var G__19242 = seq__18794_19229;
var G__19243 = chunk__18796_19230;
var G__19244 = count__18797_19231;
var G__19245 = (i__18798_19232 + (1));
seq__18794_19229 = G__19242;
chunk__18796_19230 = G__19243;
count__18797_19231 = G__19244;
i__18798_19232 = G__19245;
continue;
}
} else {
var temp__5804__auto___19246__$1 = cljs.core.seq(seq__18794_19229);
if(temp__5804__auto___19246__$1){
var seq__18794_19247__$1 = temp__5804__auto___19246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18794_19247__$1)){
var c__5568__auto___19248 = cljs.core.chunk_first(seq__18794_19247__$1);
var G__19249 = cljs.core.chunk_rest(seq__18794_19247__$1);
var G__19250 = c__5568__auto___19248;
var G__19251 = cljs.core.count(c__5568__auto___19248);
var G__19252 = (0);
seq__18794_19229 = G__19249;
chunk__18796_19230 = G__19250;
count__18797_19231 = G__19251;
i__18798_19232 = G__19252;
continue;
} else {
var child_19253 = cljs.core.first(seq__18794_19247__$1);
if(cljs.core.truth_(child_19253)){
node.appendChild(child_19253);


var G__19254 = cljs.core.next(seq__18794_19247__$1);
var G__19255 = null;
var G__19256 = (0);
var G__19257 = (0);
seq__18794_19229 = G__19254;
chunk__18796_19230 = G__19255;
count__18797_19231 = G__19256;
i__18798_19232 = G__19257;
continue;
} else {
var G__19258 = cljs.core.next(seq__18794_19247__$1);
var G__19259 = null;
var G__19260 = (0);
var G__19261 = (0);
seq__18794_19229 = G__19258;
chunk__18796_19230 = G__19259;
count__18797_19231 = G__19260;
i__18798_19232 = G__19261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19228);
}
}


var G__19262 = cljs.core.next(seq__18741_19220__$1);
var G__19263 = null;
var G__19264 = (0);
var G__19265 = (0);
seq__18741_19175 = G__19262;
chunk__18743_19176 = G__19263;
count__18744_19177 = G__19264;
i__18745_19178 = G__19265;
continue;
} else {
var G__19266 = cljs.core.next(seq__18741_19220__$1);
var G__19267 = null;
var G__19268 = (0);
var G__19269 = (0);
seq__18741_19175 = G__19266;
chunk__18743_19176 = G__19267;
count__18744_19177 = G__19268;
i__18745_19178 = G__19269;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19270 = arguments.length;
var i__5770__auto___19271 = (0);
while(true){
if((i__5770__auto___19271 < len__5769__auto___19270)){
args__5775__auto__.push((arguments[i__5770__auto___19271]));

var G__19272 = (i__5770__auto___19271 + (1));
i__5770__auto___19271 = G__19272;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18804){
var G__18805 = cljs.core.first(seq18804);
var seq18804__$1 = cljs.core.next(seq18804);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18805,seq18804__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18808 = arguments.length;
switch (G__18808) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15036__auto___19277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_18819){
var state_val_18820 = (state_18819[(1)]);
if((state_val_18820 === (1))){
var state_18819__$1 = state_18819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18819__$1,(2),once_or_cleanup);
} else {
if((state_val_18820 === (2))){
var inst_18815 = (state_18819[(2)]);
var inst_18816 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18819__$1 = (function (){var statearr_18823 = state_18819;
(statearr_18823[(7)] = inst_18815);

return statearr_18823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18819__$1,inst_18816);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14773__auto__ = null;
var shadow$dom$state_machine__14773__auto____0 = (function (){
var statearr_18825 = [null,null,null,null,null,null,null,null];
(statearr_18825[(0)] = shadow$dom$state_machine__14773__auto__);

(statearr_18825[(1)] = (1));

return statearr_18825;
});
var shadow$dom$state_machine__14773__auto____1 = (function (state_18819){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_18819);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e18827){var ex__14776__auto__ = e18827;
var statearr_18828_19278 = state_18819;
(statearr_18828_19278[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_18819[(4)]))){
var statearr_18829_19279 = state_18819;
(statearr_18829_19279[(1)] = cljs.core.first((state_18819[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19280 = state_18819;
state_18819 = G__19280;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
shadow$dom$state_machine__14773__auto__ = function(state_18819){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14773__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14773__auto____1.call(this,state_18819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14773__auto____0;
shadow$dom$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14773__auto____1;
return shadow$dom$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_18830 = f__15037__auto__();
(statearr_18830[(6)] = c__15036__auto___19277);

return statearr_18830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
