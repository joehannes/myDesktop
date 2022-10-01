goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21220 = arguments.length;
var i__5770__auto___21221 = (0);
while(true){
if((i__5770__auto___21221 < len__5769__auto___21220)){
args__5775__auto__.push((arguments[i__5770__auto___21221]));

var G__21222 = (i__5770__auto___21221 + (1));
i__5770__auto___21221 = G__21222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20814){
var G__20815 = cljs.core.first(seq20814);
var seq20814__$1 = cljs.core.next(seq20814);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20815,seq20814__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20821 = cljs.core.seq(sources);
var chunk__20822 = null;
var count__20823 = (0);
var i__20824 = (0);
while(true){
if((i__20824 < count__20823)){
var map__20829 = chunk__20822.cljs$core$IIndexed$_nth$arity$2(null,i__20824);
var map__20829__$1 = cljs.core.__destructure_map(map__20829);
var src = map__20829__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20830){var e_21227 = e20830;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21227);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21227.message)].join('')));
}

var G__21228 = seq__20821;
var G__21229 = chunk__20822;
var G__21230 = count__20823;
var G__21231 = (i__20824 + (1));
seq__20821 = G__21228;
chunk__20822 = G__21229;
count__20823 = G__21230;
i__20824 = G__21231;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20821);
if(temp__5804__auto__){
var seq__20821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20821__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20821__$1);
var G__21232 = cljs.core.chunk_rest(seq__20821__$1);
var G__21233 = c__5568__auto__;
var G__21234 = cljs.core.count(c__5568__auto__);
var G__21235 = (0);
seq__20821 = G__21232;
chunk__20822 = G__21233;
count__20823 = G__21234;
i__20824 = G__21235;
continue;
} else {
var map__20832 = cljs.core.first(seq__20821__$1);
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var src = map__20832__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20834){var e_21236 = e20834;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21236);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21236.message)].join('')));
}

var G__21238 = cljs.core.next(seq__20821__$1);
var G__21239 = null;
var G__21240 = (0);
var G__21241 = (0);
seq__20821 = G__21238;
chunk__20822 = G__21239;
count__20823 = G__21240;
i__20824 = G__21241;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20835 = cljs.core.seq(js_requires);
var chunk__20836 = null;
var count__20837 = (0);
var i__20838 = (0);
while(true){
if((i__20838 < count__20837)){
var js_ns = chunk__20836.cljs$core$IIndexed$_nth$arity$2(null,i__20838);
var require_str_21245 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21245);


var G__21246 = seq__20835;
var G__21247 = chunk__20836;
var G__21248 = count__20837;
var G__21249 = (i__20838 + (1));
seq__20835 = G__21246;
chunk__20836 = G__21247;
count__20837 = G__21248;
i__20838 = G__21249;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20835);
if(temp__5804__auto__){
var seq__20835__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20835__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20835__$1);
var G__21250 = cljs.core.chunk_rest(seq__20835__$1);
var G__21251 = c__5568__auto__;
var G__21252 = cljs.core.count(c__5568__auto__);
var G__21253 = (0);
seq__20835 = G__21250;
chunk__20836 = G__21251;
count__20837 = G__21252;
i__20838 = G__21253;
continue;
} else {
var js_ns = cljs.core.first(seq__20835__$1);
var require_str_21254 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21254);


var G__21255 = cljs.core.next(seq__20835__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__20835 = G__21255;
chunk__20836 = G__21256;
count__20837 = G__21257;
i__20838 = G__21258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20840){
var map__20841 = p__20840;
var map__20841__$1 = cljs.core.__destructure_map(map__20841);
var msg = map__20841__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842(s__20843){
return (new cljs.core.LazySeq(null,(function (){
var s__20843__$1 = s__20843;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20843__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20848 = cljs.core.first(xs__6360__auto__);
var map__20848__$1 = cljs.core.__destructure_map(map__20848);
var src = map__20848__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(s__20845){
return (new cljs.core.LazySeq(null,((function (s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info){
return (function (){
var s__20845__$1 = s__20845;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20845__$1);
if(temp__5804__auto____$1){
var s__20845__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20845__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20845__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20847 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20846 = (0);
while(true){
if((i__20846 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20846);
cljs.core.chunk_append(b__20847,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21261 = (i__20846 + (1));
i__20846 = G__21261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20847),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(cljs.core.chunk_rest(s__20845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20847),null);
}
} else {
var warning = cljs.core.first(s__20845__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842_$_iter__20844(cljs.core.rest(s__20845__$2)));
}
} else {
return null;
}
break;
}
});})(s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info))
,null,null));
});})(s__20843__$1,map__20848,map__20848__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20841,map__20841__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20842(cljs.core.rest(s__20843__$1)));
} else {
var G__21263 = cljs.core.rest(s__20843__$1);
s__20843__$1 = G__21263;
continue;
}
} else {
var G__21264 = cljs.core.rest(s__20843__$1);
s__20843__$1 = G__21264;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20849_21265 = cljs.core.seq(warnings);
var chunk__20850_21266 = null;
var count__20851_21267 = (0);
var i__20852_21268 = (0);
while(true){
if((i__20852_21268 < count__20851_21267)){
var map__20855_21269 = chunk__20850_21266.cljs$core$IIndexed$_nth$arity$2(null,i__20852_21268);
var map__20855_21270__$1 = cljs.core.__destructure_map(map__20855_21269);
var w_21271 = map__20855_21270__$1;
var msg_21272__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21270__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855_21270__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21275)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21273),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21274),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21272__$1)].join(''));


var G__21278 = seq__20849_21265;
var G__21279 = chunk__20850_21266;
var G__21280 = count__20851_21267;
var G__21281 = (i__20852_21268 + (1));
seq__20849_21265 = G__21278;
chunk__20850_21266 = G__21279;
count__20851_21267 = G__21280;
i__20852_21268 = G__21281;
continue;
} else {
var temp__5804__auto___21283 = cljs.core.seq(seq__20849_21265);
if(temp__5804__auto___21283){
var seq__20849_21284__$1 = temp__5804__auto___21283;
if(cljs.core.chunked_seq_QMARK_(seq__20849_21284__$1)){
var c__5568__auto___21285 = cljs.core.chunk_first(seq__20849_21284__$1);
var G__21286 = cljs.core.chunk_rest(seq__20849_21284__$1);
var G__21287 = c__5568__auto___21285;
var G__21288 = cljs.core.count(c__5568__auto___21285);
var G__21289 = (0);
seq__20849_21265 = G__21286;
chunk__20850_21266 = G__21287;
count__20851_21267 = G__21288;
i__20852_21268 = G__21289;
continue;
} else {
var map__20856_21290 = cljs.core.first(seq__20849_21284__$1);
var map__20856_21291__$1 = cljs.core.__destructure_map(map__20856_21290);
var w_21292 = map__20856_21291__$1;
var msg_21293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21291__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21291__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21296)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21294),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21295),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21293__$1)].join(''));


var G__21297 = cljs.core.next(seq__20849_21284__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__20849_21265 = G__21297;
chunk__20850_21266 = G__21298;
count__20851_21267 = G__21299;
i__20852_21268 = G__21300;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20839_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20839_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20857){
var map__20858 = p__20857;
var map__20858__$1 = cljs.core.__destructure_map(map__20858);
var msg = map__20858__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20859 = cljs.core.seq(updates);
var chunk__20861 = null;
var count__20862 = (0);
var i__20863 = (0);
while(true){
if((i__20863 < count__20862)){
var path = chunk__20861.cljs$core$IIndexed$_nth$arity$2(null,i__20863);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21068_21301 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21072_21302 = null;
var count__21073_21303 = (0);
var i__21074_21304 = (0);
while(true){
if((i__21074_21304 < count__21073_21303)){
var node_21305 = chunk__21072_21302.cljs$core$IIndexed$_nth$arity$2(null,i__21074_21304);
if(cljs.core.not(node_21305.shadow$old)){
var path_match_21306 = shadow.cljs.devtools.client.browser.match_paths(node_21305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21306)){
var new_link_21307 = (function (){var G__21103 = node_21305.cloneNode(true);
G__21103.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21103;
})();
(node_21305.shadow$old = true);

(new_link_21307.onload = ((function (seq__21068_21301,chunk__21072_21302,count__21073_21303,i__21074_21304,seq__20859,chunk__20861,count__20862,i__20863,new_link_21307,path_match_21306,node_21305,path,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21104_21308 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21106_21309 = null;
var count__21107_21310 = (0);
var i__21108_21311 = (0);
while(true){
if((i__21108_21311 < count__21107_21310)){
var map__21112_21312 = chunk__21106_21309.cljs$core$IIndexed$_nth$arity$2(null,i__21108_21311);
var map__21112_21313__$1 = cljs.core.__destructure_map(map__21112_21312);
var task_21314 = map__21112_21313__$1;
var fn_str_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21317 = goog.getObjectByName(fn_str_21315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21316)].join(''));

(fn_obj_21317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21317.cljs$core$IFn$_invoke$arity$2(path,new_link_21307) : fn_obj_21317.call(null,path,new_link_21307));


var G__21318 = seq__21104_21308;
var G__21319 = chunk__21106_21309;
var G__21320 = count__21107_21310;
var G__21321 = (i__21108_21311 + (1));
seq__21104_21308 = G__21318;
chunk__21106_21309 = G__21319;
count__21107_21310 = G__21320;
i__21108_21311 = G__21321;
continue;
} else {
var temp__5804__auto___21322 = cljs.core.seq(seq__21104_21308);
if(temp__5804__auto___21322){
var seq__21104_21323__$1 = temp__5804__auto___21322;
if(cljs.core.chunked_seq_QMARK_(seq__21104_21323__$1)){
var c__5568__auto___21324 = cljs.core.chunk_first(seq__21104_21323__$1);
var G__21325 = cljs.core.chunk_rest(seq__21104_21323__$1);
var G__21326 = c__5568__auto___21324;
var G__21327 = cljs.core.count(c__5568__auto___21324);
var G__21328 = (0);
seq__21104_21308 = G__21325;
chunk__21106_21309 = G__21326;
count__21107_21310 = G__21327;
i__21108_21311 = G__21328;
continue;
} else {
var map__21113_21329 = cljs.core.first(seq__21104_21323__$1);
var map__21113_21330__$1 = cljs.core.__destructure_map(map__21113_21329);
var task_21331 = map__21113_21330__$1;
var fn_str_21332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21113_21330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21113_21330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21334 = goog.getObjectByName(fn_str_21332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21333)].join(''));

(fn_obj_21334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21334.cljs$core$IFn$_invoke$arity$2(path,new_link_21307) : fn_obj_21334.call(null,path,new_link_21307));


var G__21335 = cljs.core.next(seq__21104_21323__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__21104_21308 = G__21335;
chunk__21106_21309 = G__21336;
count__21107_21310 = G__21337;
i__21108_21311 = G__21338;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21305);
});})(seq__21068_21301,chunk__21072_21302,count__21073_21303,i__21074_21304,seq__20859,chunk__20861,count__20862,i__20863,new_link_21307,path_match_21306,node_21305,path,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21306], 0));

goog.dom.insertSiblingAfter(new_link_21307,node_21305);


var G__21339 = seq__21068_21301;
var G__21340 = chunk__21072_21302;
var G__21341 = count__21073_21303;
var G__21342 = (i__21074_21304 + (1));
seq__21068_21301 = G__21339;
chunk__21072_21302 = G__21340;
count__21073_21303 = G__21341;
i__21074_21304 = G__21342;
continue;
} else {
var G__21343 = seq__21068_21301;
var G__21344 = chunk__21072_21302;
var G__21345 = count__21073_21303;
var G__21346 = (i__21074_21304 + (1));
seq__21068_21301 = G__21343;
chunk__21072_21302 = G__21344;
count__21073_21303 = G__21345;
i__21074_21304 = G__21346;
continue;
}
} else {
var G__21347 = seq__21068_21301;
var G__21348 = chunk__21072_21302;
var G__21349 = count__21073_21303;
var G__21350 = (i__21074_21304 + (1));
seq__21068_21301 = G__21347;
chunk__21072_21302 = G__21348;
count__21073_21303 = G__21349;
i__21074_21304 = G__21350;
continue;
}
} else {
var temp__5804__auto___21351 = cljs.core.seq(seq__21068_21301);
if(temp__5804__auto___21351){
var seq__21068_21352__$1 = temp__5804__auto___21351;
if(cljs.core.chunked_seq_QMARK_(seq__21068_21352__$1)){
var c__5568__auto___21353 = cljs.core.chunk_first(seq__21068_21352__$1);
var G__21354 = cljs.core.chunk_rest(seq__21068_21352__$1);
var G__21355 = c__5568__auto___21353;
var G__21356 = cljs.core.count(c__5568__auto___21353);
var G__21357 = (0);
seq__21068_21301 = G__21354;
chunk__21072_21302 = G__21355;
count__21073_21303 = G__21356;
i__21074_21304 = G__21357;
continue;
} else {
var node_21358 = cljs.core.first(seq__21068_21352__$1);
if(cljs.core.not(node_21358.shadow$old)){
var path_match_21359 = shadow.cljs.devtools.client.browser.match_paths(node_21358.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21359)){
var new_link_21360 = (function (){var G__21114 = node_21358.cloneNode(true);
G__21114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21359),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21114;
})();
(node_21358.shadow$old = true);

(new_link_21360.onload = ((function (seq__21068_21301,chunk__21072_21302,count__21073_21303,i__21074_21304,seq__20859,chunk__20861,count__20862,i__20863,new_link_21360,path_match_21359,node_21358,seq__21068_21352__$1,temp__5804__auto___21351,path,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21115_21361 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21117_21362 = null;
var count__21118_21363 = (0);
var i__21119_21364 = (0);
while(true){
if((i__21119_21364 < count__21118_21363)){
var map__21128_21365 = chunk__21117_21362.cljs$core$IIndexed$_nth$arity$2(null,i__21119_21364);
var map__21128_21366__$1 = cljs.core.__destructure_map(map__21128_21365);
var task_21367 = map__21128_21366__$1;
var fn_str_21368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128_21366__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128_21366__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21370 = goog.getObjectByName(fn_str_21368,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21369)].join(''));

(fn_obj_21370.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21370.cljs$core$IFn$_invoke$arity$2(path,new_link_21360) : fn_obj_21370.call(null,path,new_link_21360));


var G__21371 = seq__21115_21361;
var G__21372 = chunk__21117_21362;
var G__21373 = count__21118_21363;
var G__21374 = (i__21119_21364 + (1));
seq__21115_21361 = G__21371;
chunk__21117_21362 = G__21372;
count__21118_21363 = G__21373;
i__21119_21364 = G__21374;
continue;
} else {
var temp__5804__auto___21375__$1 = cljs.core.seq(seq__21115_21361);
if(temp__5804__auto___21375__$1){
var seq__21115_21376__$1 = temp__5804__auto___21375__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21115_21376__$1)){
var c__5568__auto___21377 = cljs.core.chunk_first(seq__21115_21376__$1);
var G__21378 = cljs.core.chunk_rest(seq__21115_21376__$1);
var G__21379 = c__5568__auto___21377;
var G__21380 = cljs.core.count(c__5568__auto___21377);
var G__21381 = (0);
seq__21115_21361 = G__21378;
chunk__21117_21362 = G__21379;
count__21118_21363 = G__21380;
i__21119_21364 = G__21381;
continue;
} else {
var map__21129_21382 = cljs.core.first(seq__21115_21376__$1);
var map__21129_21383__$1 = cljs.core.__destructure_map(map__21129_21382);
var task_21384 = map__21129_21383__$1;
var fn_str_21385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21129_21383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21129_21383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21387 = goog.getObjectByName(fn_str_21385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21386)].join(''));

(fn_obj_21387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21387.cljs$core$IFn$_invoke$arity$2(path,new_link_21360) : fn_obj_21387.call(null,path,new_link_21360));


var G__21388 = cljs.core.next(seq__21115_21376__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__21115_21361 = G__21388;
chunk__21117_21362 = G__21389;
count__21118_21363 = G__21390;
i__21119_21364 = G__21391;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21358);
});})(seq__21068_21301,chunk__21072_21302,count__21073_21303,i__21074_21304,seq__20859,chunk__20861,count__20862,i__20863,new_link_21360,path_match_21359,node_21358,seq__21068_21352__$1,temp__5804__auto___21351,path,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21359], 0));

goog.dom.insertSiblingAfter(new_link_21360,node_21358);


var G__21392 = cljs.core.next(seq__21068_21352__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__21068_21301 = G__21392;
chunk__21072_21302 = G__21393;
count__21073_21303 = G__21394;
i__21074_21304 = G__21395;
continue;
} else {
var G__21396 = cljs.core.next(seq__21068_21352__$1);
var G__21397 = null;
var G__21398 = (0);
var G__21399 = (0);
seq__21068_21301 = G__21396;
chunk__21072_21302 = G__21397;
count__21073_21303 = G__21398;
i__21074_21304 = G__21399;
continue;
}
} else {
var G__21400 = cljs.core.next(seq__21068_21352__$1);
var G__21401 = null;
var G__21402 = (0);
var G__21403 = (0);
seq__21068_21301 = G__21400;
chunk__21072_21302 = G__21401;
count__21073_21303 = G__21402;
i__21074_21304 = G__21403;
continue;
}
}
} else {
}
}
break;
}


var G__21404 = seq__20859;
var G__21405 = chunk__20861;
var G__21406 = count__20862;
var G__21407 = (i__20863 + (1));
seq__20859 = G__21404;
chunk__20861 = G__21405;
count__20862 = G__21406;
i__20863 = G__21407;
continue;
} else {
var G__21408 = seq__20859;
var G__21409 = chunk__20861;
var G__21410 = count__20862;
var G__21411 = (i__20863 + (1));
seq__20859 = G__21408;
chunk__20861 = G__21409;
count__20862 = G__21410;
i__20863 = G__21411;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20859);
if(temp__5804__auto__){
var seq__20859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20859__$1);
var G__21412 = cljs.core.chunk_rest(seq__20859__$1);
var G__21413 = c__5568__auto__;
var G__21414 = cljs.core.count(c__5568__auto__);
var G__21415 = (0);
seq__20859 = G__21412;
chunk__20861 = G__21413;
count__20862 = G__21414;
i__20863 = G__21415;
continue;
} else {
var path = cljs.core.first(seq__20859__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21130_21416 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21134_21417 = null;
var count__21135_21418 = (0);
var i__21136_21419 = (0);
while(true){
if((i__21136_21419 < count__21135_21418)){
var node_21420 = chunk__21134_21417.cljs$core$IIndexed$_nth$arity$2(null,i__21136_21419);
if(cljs.core.not(node_21420.shadow$old)){
var path_match_21421 = shadow.cljs.devtools.client.browser.match_paths(node_21420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21421)){
var new_link_21422 = (function (){var G__21169 = node_21420.cloneNode(true);
G__21169.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21169;
})();
(node_21420.shadow$old = true);

(new_link_21422.onload = ((function (seq__21130_21416,chunk__21134_21417,count__21135_21418,i__21136_21419,seq__20859,chunk__20861,count__20862,i__20863,new_link_21422,path_match_21421,node_21420,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21171_21423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21173_21424 = null;
var count__21174_21425 = (0);
var i__21175_21426 = (0);
while(true){
if((i__21175_21426 < count__21174_21425)){
var map__21179_21427 = chunk__21173_21424.cljs$core$IIndexed$_nth$arity$2(null,i__21175_21426);
var map__21179_21428__$1 = cljs.core.__destructure_map(map__21179_21427);
var task_21429 = map__21179_21428__$1;
var fn_str_21430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179_21428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179_21428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21432 = goog.getObjectByName(fn_str_21430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21431)].join(''));

(fn_obj_21432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21432.cljs$core$IFn$_invoke$arity$2(path,new_link_21422) : fn_obj_21432.call(null,path,new_link_21422));


var G__21433 = seq__21171_21423;
var G__21434 = chunk__21173_21424;
var G__21435 = count__21174_21425;
var G__21436 = (i__21175_21426 + (1));
seq__21171_21423 = G__21433;
chunk__21173_21424 = G__21434;
count__21174_21425 = G__21435;
i__21175_21426 = G__21436;
continue;
} else {
var temp__5804__auto___21437__$1 = cljs.core.seq(seq__21171_21423);
if(temp__5804__auto___21437__$1){
var seq__21171_21438__$1 = temp__5804__auto___21437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21171_21438__$1)){
var c__5568__auto___21439 = cljs.core.chunk_first(seq__21171_21438__$1);
var G__21440 = cljs.core.chunk_rest(seq__21171_21438__$1);
var G__21441 = c__5568__auto___21439;
var G__21442 = cljs.core.count(c__5568__auto___21439);
var G__21443 = (0);
seq__21171_21423 = G__21440;
chunk__21173_21424 = G__21441;
count__21174_21425 = G__21442;
i__21175_21426 = G__21443;
continue;
} else {
var map__21180_21444 = cljs.core.first(seq__21171_21438__$1);
var map__21180_21445__$1 = cljs.core.__destructure_map(map__21180_21444);
var task_21446 = map__21180_21445__$1;
var fn_str_21447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21449 = goog.getObjectByName(fn_str_21447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21448)].join(''));

(fn_obj_21449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21449.cljs$core$IFn$_invoke$arity$2(path,new_link_21422) : fn_obj_21449.call(null,path,new_link_21422));


var G__21450 = cljs.core.next(seq__21171_21438__$1);
var G__21451 = null;
var G__21452 = (0);
var G__21453 = (0);
seq__21171_21423 = G__21450;
chunk__21173_21424 = G__21451;
count__21174_21425 = G__21452;
i__21175_21426 = G__21453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21420);
});})(seq__21130_21416,chunk__21134_21417,count__21135_21418,i__21136_21419,seq__20859,chunk__20861,count__20862,i__20863,new_link_21422,path_match_21421,node_21420,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21421], 0));

goog.dom.insertSiblingAfter(new_link_21422,node_21420);


var G__21454 = seq__21130_21416;
var G__21455 = chunk__21134_21417;
var G__21456 = count__21135_21418;
var G__21457 = (i__21136_21419 + (1));
seq__21130_21416 = G__21454;
chunk__21134_21417 = G__21455;
count__21135_21418 = G__21456;
i__21136_21419 = G__21457;
continue;
} else {
var G__21458 = seq__21130_21416;
var G__21459 = chunk__21134_21417;
var G__21460 = count__21135_21418;
var G__21461 = (i__21136_21419 + (1));
seq__21130_21416 = G__21458;
chunk__21134_21417 = G__21459;
count__21135_21418 = G__21460;
i__21136_21419 = G__21461;
continue;
}
} else {
var G__21462 = seq__21130_21416;
var G__21463 = chunk__21134_21417;
var G__21464 = count__21135_21418;
var G__21465 = (i__21136_21419 + (1));
seq__21130_21416 = G__21462;
chunk__21134_21417 = G__21463;
count__21135_21418 = G__21464;
i__21136_21419 = G__21465;
continue;
}
} else {
var temp__5804__auto___21466__$1 = cljs.core.seq(seq__21130_21416);
if(temp__5804__auto___21466__$1){
var seq__21130_21467__$1 = temp__5804__auto___21466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21130_21467__$1)){
var c__5568__auto___21468 = cljs.core.chunk_first(seq__21130_21467__$1);
var G__21469 = cljs.core.chunk_rest(seq__21130_21467__$1);
var G__21470 = c__5568__auto___21468;
var G__21471 = cljs.core.count(c__5568__auto___21468);
var G__21472 = (0);
seq__21130_21416 = G__21469;
chunk__21134_21417 = G__21470;
count__21135_21418 = G__21471;
i__21136_21419 = G__21472;
continue;
} else {
var node_21473 = cljs.core.first(seq__21130_21467__$1);
if(cljs.core.not(node_21473.shadow$old)){
var path_match_21474 = shadow.cljs.devtools.client.browser.match_paths(node_21473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21474)){
var new_link_21475 = (function (){var G__21182 = node_21473.cloneNode(true);
G__21182.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21182;
})();
(node_21473.shadow$old = true);

(new_link_21475.onload = ((function (seq__21130_21416,chunk__21134_21417,count__21135_21418,i__21136_21419,seq__20859,chunk__20861,count__20862,i__20863,new_link_21475,path_match_21474,node_21473,seq__21130_21467__$1,temp__5804__auto___21466__$1,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info){
return (function (e){
var seq__21183_21476 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21185_21477 = null;
var count__21186_21478 = (0);
var i__21187_21479 = (0);
while(true){
if((i__21187_21479 < count__21186_21478)){
var map__21193_21480 = chunk__21185_21477.cljs$core$IIndexed$_nth$arity$2(null,i__21187_21479);
var map__21193_21481__$1 = cljs.core.__destructure_map(map__21193_21480);
var task_21482 = map__21193_21481__$1;
var fn_str_21483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21481__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21481__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21485 = goog.getObjectByName(fn_str_21483,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21484)].join(''));

(fn_obj_21485.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21485.cljs$core$IFn$_invoke$arity$2(path,new_link_21475) : fn_obj_21485.call(null,path,new_link_21475));


var G__21486 = seq__21183_21476;
var G__21487 = chunk__21185_21477;
var G__21488 = count__21186_21478;
var G__21489 = (i__21187_21479 + (1));
seq__21183_21476 = G__21486;
chunk__21185_21477 = G__21487;
count__21186_21478 = G__21488;
i__21187_21479 = G__21489;
continue;
} else {
var temp__5804__auto___21490__$2 = cljs.core.seq(seq__21183_21476);
if(temp__5804__auto___21490__$2){
var seq__21183_21491__$1 = temp__5804__auto___21490__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21183_21491__$1)){
var c__5568__auto___21492 = cljs.core.chunk_first(seq__21183_21491__$1);
var G__21493 = cljs.core.chunk_rest(seq__21183_21491__$1);
var G__21494 = c__5568__auto___21492;
var G__21495 = cljs.core.count(c__5568__auto___21492);
var G__21496 = (0);
seq__21183_21476 = G__21493;
chunk__21185_21477 = G__21494;
count__21186_21478 = G__21495;
i__21187_21479 = G__21496;
continue;
} else {
var map__21195_21497 = cljs.core.first(seq__21183_21491__$1);
var map__21195_21498__$1 = cljs.core.__destructure_map(map__21195_21497);
var task_21499 = map__21195_21498__$1;
var fn_str_21500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195_21498__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195_21498__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21502 = goog.getObjectByName(fn_str_21500,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21501)].join(''));

(fn_obj_21502.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21502.cljs$core$IFn$_invoke$arity$2(path,new_link_21475) : fn_obj_21502.call(null,path,new_link_21475));


var G__21503 = cljs.core.next(seq__21183_21491__$1);
var G__21504 = null;
var G__21505 = (0);
var G__21506 = (0);
seq__21183_21476 = G__21503;
chunk__21185_21477 = G__21504;
count__21186_21478 = G__21505;
i__21187_21479 = G__21506;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21473);
});})(seq__21130_21416,chunk__21134_21417,count__21135_21418,i__21136_21419,seq__20859,chunk__20861,count__20862,i__20863,new_link_21475,path_match_21474,node_21473,seq__21130_21467__$1,temp__5804__auto___21466__$1,path,seq__20859__$1,temp__5804__auto__,map__20858,map__20858__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21474], 0));

goog.dom.insertSiblingAfter(new_link_21475,node_21473);


var G__21507 = cljs.core.next(seq__21130_21467__$1);
var G__21508 = null;
var G__21509 = (0);
var G__21510 = (0);
seq__21130_21416 = G__21507;
chunk__21134_21417 = G__21508;
count__21135_21418 = G__21509;
i__21136_21419 = G__21510;
continue;
} else {
var G__21511 = cljs.core.next(seq__21130_21467__$1);
var G__21512 = null;
var G__21513 = (0);
var G__21514 = (0);
seq__21130_21416 = G__21511;
chunk__21134_21417 = G__21512;
count__21135_21418 = G__21513;
i__21136_21419 = G__21514;
continue;
}
} else {
var G__21515 = cljs.core.next(seq__21130_21467__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__21130_21416 = G__21515;
chunk__21134_21417 = G__21516;
count__21135_21418 = G__21517;
i__21136_21419 = G__21518;
continue;
}
}
} else {
}
}
break;
}


var G__21519 = cljs.core.next(seq__20859__$1);
var G__21520 = null;
var G__21521 = (0);
var G__21522 = (0);
seq__20859 = G__21519;
chunk__20861 = G__21520;
count__20862 = G__21521;
i__20863 = G__21522;
continue;
} else {
var G__21523 = cljs.core.next(seq__20859__$1);
var G__21524 = null;
var G__21525 = (0);
var G__21526 = (0);
seq__20859 = G__21523;
chunk__20861 = G__21524;
count__20862 = G__21525;
i__20863 = G__21526;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21199){
var map__21200 = p__21199;
var map__21200__$1 = cljs.core.__destructure_map(map__21200);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21202){
var map__21203 = p__21202;
var map__21203__$1 = cljs.core.__destructure_map(map__21203);
var _ = map__21203__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21204,done,error){
var map__21205 = p__21204;
var map__21205__$1 = cljs.core.__destructure_map(map__21205);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21205__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21206,done,error){
var map__21207 = p__21206;
var map__21207__$1 = cljs.core.__destructure_map(map__21207);
var msg = map__21207__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21208){
var map__21209 = p__21208;
var map__21209__$1 = cljs.core.__destructure_map(map__21209);
var src = map__21209__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21210 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21210) : done.call(null,G__21210));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21211){
var map__21212 = p__21211;
var map__21212__$1 = cljs.core.__destructure_map(map__21212);
var msg__$1 = map__21212__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21212__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21213){var ex = e21213;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21214){
var map__21215 = p__21214;
var map__21215__$1 = cljs.core.__destructure_map(map__21215);
var env = map__21215__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21216){
var map__21217 = p__21216;
var map__21217__$1 = cljs.core.__destructure_map(map__21217);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21217__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21217__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21218){
var map__21219 = p__21218;
var map__21219__$1 = cljs.core.__destructure_map(map__21219);
var svc = map__21219__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21219__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
