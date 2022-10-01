goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20086){
var map__20087 = p__20086;
var map__20087__$1 = cljs.core.__destructure_map(map__20087);
var m = map__20087__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20091_20306 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20092_20307 = null;
var count__20093_20308 = (0);
var i__20094_20309 = (0);
while(true){
if((i__20094_20309 < count__20093_20308)){
var f_20310 = chunk__20092_20307.cljs$core$IIndexed$_nth$arity$2(null,i__20094_20309);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20310], 0));


var G__20311 = seq__20091_20306;
var G__20312 = chunk__20092_20307;
var G__20313 = count__20093_20308;
var G__20314 = (i__20094_20309 + (1));
seq__20091_20306 = G__20311;
chunk__20092_20307 = G__20312;
count__20093_20308 = G__20313;
i__20094_20309 = G__20314;
continue;
} else {
var temp__5804__auto___20315 = cljs.core.seq(seq__20091_20306);
if(temp__5804__auto___20315){
var seq__20091_20316__$1 = temp__5804__auto___20315;
if(cljs.core.chunked_seq_QMARK_(seq__20091_20316__$1)){
var c__5568__auto___20318 = cljs.core.chunk_first(seq__20091_20316__$1);
var G__20319 = cljs.core.chunk_rest(seq__20091_20316__$1);
var G__20320 = c__5568__auto___20318;
var G__20321 = cljs.core.count(c__5568__auto___20318);
var G__20322 = (0);
seq__20091_20306 = G__20319;
chunk__20092_20307 = G__20320;
count__20093_20308 = G__20321;
i__20094_20309 = G__20322;
continue;
} else {
var f_20323 = cljs.core.first(seq__20091_20316__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20323], 0));


var G__20324 = cljs.core.next(seq__20091_20316__$1);
var G__20325 = null;
var G__20326 = (0);
var G__20327 = (0);
seq__20091_20306 = G__20324;
chunk__20092_20307 = G__20325;
count__20093_20308 = G__20326;
i__20094_20309 = G__20327;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20328 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20328], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20328)))?cljs.core.second(arglists_20328):arglists_20328)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20099_20329 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20100_20330 = null;
var count__20101_20331 = (0);
var i__20102_20332 = (0);
while(true){
if((i__20102_20332 < count__20101_20331)){
var vec__20136_20335 = chunk__20100_20330.cljs$core$IIndexed$_nth$arity$2(null,i__20102_20332);
var name_20336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20136_20335,(0),null);
var map__20139_20337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20136_20335,(1),null);
var map__20139_20338__$1 = cljs.core.__destructure_map(map__20139_20337);
var doc_20339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139_20338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139_20338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20336], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20340], 0));

if(cljs.core.truth_(doc_20339)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20339], 0));
} else {
}


var G__20341 = seq__20099_20329;
var G__20342 = chunk__20100_20330;
var G__20343 = count__20101_20331;
var G__20344 = (i__20102_20332 + (1));
seq__20099_20329 = G__20341;
chunk__20100_20330 = G__20342;
count__20101_20331 = G__20343;
i__20102_20332 = G__20344;
continue;
} else {
var temp__5804__auto___20347 = cljs.core.seq(seq__20099_20329);
if(temp__5804__auto___20347){
var seq__20099_20348__$1 = temp__5804__auto___20347;
if(cljs.core.chunked_seq_QMARK_(seq__20099_20348__$1)){
var c__5568__auto___20349 = cljs.core.chunk_first(seq__20099_20348__$1);
var G__20350 = cljs.core.chunk_rest(seq__20099_20348__$1);
var G__20351 = c__5568__auto___20349;
var G__20352 = cljs.core.count(c__5568__auto___20349);
var G__20353 = (0);
seq__20099_20329 = G__20350;
chunk__20100_20330 = G__20351;
count__20101_20331 = G__20352;
i__20102_20332 = G__20353;
continue;
} else {
var vec__20148_20354 = cljs.core.first(seq__20099_20348__$1);
var name_20355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148_20354,(0),null);
var map__20151_20356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148_20354,(1),null);
var map__20151_20357__$1 = cljs.core.__destructure_map(map__20151_20356);
var doc_20358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151_20357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151_20357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20355], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20359], 0));

if(cljs.core.truth_(doc_20358)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20358], 0));
} else {
}


var G__20361 = cljs.core.next(seq__20099_20348__$1);
var G__20362 = null;
var G__20363 = (0);
var G__20364 = (0);
seq__20099_20329 = G__20361;
chunk__20100_20330 = G__20362;
count__20101_20331 = G__20363;
i__20102_20332 = G__20364;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20183 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20184 = null;
var count__20185 = (0);
var i__20186 = (0);
while(true){
if((i__20186 < count__20185)){
var role = chunk__20184.cljs$core$IIndexed$_nth$arity$2(null,i__20186);
var temp__5804__auto___20366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20366__$1)){
var spec_20367 = temp__5804__auto___20366__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20367)], 0));
} else {
}


var G__20368 = seq__20183;
var G__20369 = chunk__20184;
var G__20370 = count__20185;
var G__20371 = (i__20186 + (1));
seq__20183 = G__20368;
chunk__20184 = G__20369;
count__20185 = G__20370;
i__20186 = G__20371;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20183);
if(temp__5804__auto____$1){
var seq__20183__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20183__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20183__$1);
var G__20372 = cljs.core.chunk_rest(seq__20183__$1);
var G__20373 = c__5568__auto__;
var G__20374 = cljs.core.count(c__5568__auto__);
var G__20375 = (0);
seq__20183 = G__20372;
chunk__20184 = G__20373;
count__20185 = G__20374;
i__20186 = G__20375;
continue;
} else {
var role = cljs.core.first(seq__20183__$1);
var temp__5804__auto___20377__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20377__$2)){
var spec_20378 = temp__5804__auto___20377__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20378)], 0));
} else {
}


var G__20379 = cljs.core.next(seq__20183__$1);
var G__20380 = null;
var G__20381 = (0);
var G__20382 = (0);
seq__20183 = G__20379;
chunk__20184 = G__20380;
count__20185 = G__20381;
i__20186 = G__20382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20386 = cljs.core.ex_cause(t);
via = G__20385;
t = G__20386;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20228 = datafied_throwable;
var map__20228__$1 = cljs.core.__destructure_map(map__20228);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20228__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20229 = cljs.core.last(via);
var map__20229__$1 = cljs.core.__destructure_map(map__20229);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20229__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20229__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20230 = data;
var map__20230__$1 = cljs.core.__destructure_map(map__20230);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20230__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20230__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20230__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20231 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20231__$1 = cljs.core.__destructure_map(map__20231);
var top_data = map__20231__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20234 = phase;
var G__20234__$1 = (((G__20234 instanceof cljs.core.Keyword))?G__20234.fqn:null);
switch (G__20234__$1) {
case "read-source":
var map__20235 = data;
var map__20235__$1 = cljs.core.__destructure_map(map__20235);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20235__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20235__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20236 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20236__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20236,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20236);
var G__20236__$2 = (cljs.core.truth_((function (){var fexpr__20237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20237.cljs$core$IFn$_invoke$arity$1 ? fexpr__20237.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20237.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20236__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20236__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20236__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20238 = top_data;
var G__20238__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20238,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20238);
var G__20238__$2 = (cljs.core.truth_((function (){var fexpr__20239 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20239.cljs$core$IFn$_invoke$arity$1 ? fexpr__20239.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20239.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20238__$1);
var G__20238__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20238__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20238__$2);
var G__20238__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20238__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20238__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20238__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20238__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20241 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(3),null);
var G__20244 = top_data;
var G__20244__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20244,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20244);
var G__20244__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20244__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20244__$1);
var G__20244__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20244__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20244__$2);
var G__20244__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20244__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20244__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20244__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20244__$4;
}

break;
case "execution":
var vec__20245 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20227_SHARP_){
var or__5045__auto__ = (p1__20227_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20248 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20248.cljs$core$IFn$_invoke$arity$1 ? fexpr__20248.cljs$core$IFn$_invoke$arity$1(p1__20227_SHARP_) : fexpr__20248.call(null,p1__20227_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20249 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20249__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20249);
var G__20249__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20249__$1);
var G__20249__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20249__$2);
var G__20249__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20249__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20249__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20234__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20260){
var map__20261 = p__20260;
var map__20261__$1 = cljs.core.__destructure_map(map__20261);
var triage_data = map__20261__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20263 = phase;
var G__20263__$1 = (((G__20263 instanceof cljs.core.Keyword))?G__20263.fqn:null);
switch (G__20263__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20264 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20265 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20266 = loc;
var G__20267 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20268_20421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20269_20422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20270_20423 = true;
var _STAR_print_fn_STAR__temp_val__20271_20424 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20270_20423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20271_20424);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20258_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20258_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20269_20422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20268_20421);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20264,G__20265,G__20266,G__20267) : format.call(null,G__20264,G__20265,G__20266,G__20267));

break;
case "macroexpansion":
var G__20274 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20275 = cause_type;
var G__20276 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20277 = loc;
var G__20278 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20274,G__20275,G__20276,G__20277,G__20278) : format.call(null,G__20274,G__20275,G__20276,G__20277,G__20278));

break;
case "compile-syntax-check":
var G__20279 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20280 = cause_type;
var G__20281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20282 = loc;
var G__20283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20279,G__20280,G__20281,G__20282,G__20283) : format.call(null,G__20279,G__20280,G__20281,G__20282,G__20283));

break;
case "compilation":
var G__20288 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20289 = cause_type;
var G__20290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20291 = loc;
var G__20292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20288,G__20289,G__20290,G__20291,G__20292) : format.call(null,G__20288,G__20289,G__20290,G__20291,G__20292));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20293 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20294 = symbol;
var G__20295 = loc;
var G__20296 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20297_20426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20298_20427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20299_20428 = true;
var _STAR_print_fn_STAR__temp_val__20300_20429 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20299_20428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20300_20429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20259_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20259_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20298_20427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20297_20426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20293,G__20294,G__20295,G__20296) : format.call(null,G__20293,G__20294,G__20295,G__20296));
} else {
var G__20301 = "Execution error%s at %s(%s).\n%s\n";
var G__20302 = cause_type;
var G__20303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20304 = loc;
var G__20305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20301,G__20302,G__20303,G__20304,G__20305) : format.call(null,G__20301,G__20302,G__20303,G__20304,G__20305));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20263__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
