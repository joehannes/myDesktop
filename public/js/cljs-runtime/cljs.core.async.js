goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15111 = arguments.length;
switch (G__15111) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15112 = (function (f,blockable,meta15113){
this.f = f;
this.blockable = blockable;
this.meta15113 = meta15113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15114,meta15113__$1){
var self__ = this;
var _15114__$1 = this;
return (new cljs.core.async.t_cljs$core$async15112(self__.f,self__.blockable,meta15113__$1));
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15114){
var self__ = this;
var _15114__$1 = this;
return self__.meta15113;
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15113","meta15113",-1737540732,null)], null);
}));

(cljs.core.async.t_cljs$core$async15112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15112");

(cljs.core.async.t_cljs$core$async15112.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15112.
 */
cljs.core.async.__GT_t_cljs$core$async15112 = (function cljs$core$async$__GT_t_cljs$core$async15112(f__$1,blockable__$1,meta15113){
return (new cljs.core.async.t_cljs$core$async15112(f__$1,blockable__$1,meta15113));
});

}

return (new cljs.core.async.t_cljs$core$async15112(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15122 = arguments.length;
switch (G__15122) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15126 = arguments.length;
switch (G__15126) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15129 = arguments.length;
switch (G__15129) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17771 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17771) : fn1.call(null,val_17771));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17771) : fn1.call(null,val_17771));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15132 = arguments.length;
switch (G__15132) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17773 = n;
var x_17774 = (0);
while(true){
if((x_17774 < n__5636__auto___17773)){
(a[x_17774] = x_17774);

var G__17775 = (x_17774 + (1));
x_17774 = G__17775;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15139 = (function (flag,meta15140){
this.flag = flag;
this.meta15140 = meta15140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15141,meta15140__$1){
var self__ = this;
var _15141__$1 = this;
return (new cljs.core.async.t_cljs$core$async15139(self__.flag,meta15140__$1));
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15141){
var self__ = this;
var _15141__$1 = this;
return self__.meta15140;
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15140","meta15140",2132699741,null)], null);
}));

(cljs.core.async.t_cljs$core$async15139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15139");

(cljs.core.async.t_cljs$core$async15139.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15139.
 */
cljs.core.async.__GT_t_cljs$core$async15139 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15139(flag__$1,meta15140){
return (new cljs.core.async.t_cljs$core$async15139(flag__$1,meta15140));
});

}

return (new cljs.core.async.t_cljs$core$async15139(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15191 = (function (flag,cb,meta15192){
this.flag = flag;
this.cb = cb;
this.meta15192 = meta15192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15193,meta15192__$1){
var self__ = this;
var _15193__$1 = this;
return (new cljs.core.async.t_cljs$core$async15191(self__.flag,self__.cb,meta15192__$1));
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15193){
var self__ = this;
var _15193__$1 = this;
return self__.meta15192;
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15192","meta15192",1174713655,null)], null);
}));

(cljs.core.async.t_cljs$core$async15191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15191");

(cljs.core.async.t_cljs$core$async15191.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15191.
 */
cljs.core.async.__GT_t_cljs$core$async15191 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15191(flag__$1,cb__$1,meta15192){
return (new cljs.core.async.t_cljs$core$async15191(flag__$1,cb__$1,meta15192));
});

}

return (new cljs.core.async.t_cljs$core$async15191(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15237_SHARP_){
var G__15248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15237_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15248) : fret.call(null,G__15248));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15238_SHARP_){
var G__15249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15238_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15249) : fret.call(null,G__15249));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17782 = (i + (1));
i = G__17782;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17784 = arguments.length;
var i__5770__auto___17785 = (0);
while(true){
if((i__5770__auto___17785 < len__5769__auto___17784)){
args__5775__auto__.push((arguments[i__5770__auto___17785]));

var G__17786 = (i__5770__auto___17785 + (1));
i__5770__auto___17785 = G__17786;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15265){
var map__15266 = p__15265;
var map__15266__$1 = cljs.core.__destructure_map(map__15266);
var opts = map__15266__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15258){
var G__15259 = cljs.core.first(seq15258);
var seq15258__$1 = cljs.core.next(seq15258);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15259,seq15258__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15278 = arguments.length;
switch (G__15278) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15036__auto___17788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15327){
var state_val_15329 = (state_15327[(1)]);
if((state_val_15329 === (7))){
var inst_15322 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15331_17789 = state_15327__$1;
(statearr_15331_17789[(2)] = inst_15322);

(statearr_15331_17789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (1))){
var state_15327__$1 = state_15327;
var statearr_15333_17790 = state_15327__$1;
(statearr_15333_17790[(2)] = null);

(statearr_15333_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (4))){
var inst_15304 = (state_15327[(7)]);
var inst_15304__$1 = (state_15327[(2)]);
var inst_15306 = (inst_15304__$1 == null);
var state_15327__$1 = (function (){var statearr_15340 = state_15327;
(statearr_15340[(7)] = inst_15304__$1);

return statearr_15340;
})();
if(cljs.core.truth_(inst_15306)){
var statearr_15341_17791 = state_15327__$1;
(statearr_15341_17791[(1)] = (5));

} else {
var statearr_15343_17792 = state_15327__$1;
(statearr_15343_17792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (13))){
var state_15327__$1 = state_15327;
var statearr_15348_17793 = state_15327__$1;
(statearr_15348_17793[(2)] = null);

(statearr_15348_17793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (6))){
var inst_15304 = (state_15327[(7)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(11),to,inst_15304);
} else {
if((state_val_15329 === (3))){
var inst_15324 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15327__$1,inst_15324);
} else {
if((state_val_15329 === (12))){
var state_15327__$1 = state_15327;
var statearr_15360_17799 = state_15327__$1;
(statearr_15360_17799[(2)] = null);

(statearr_15360_17799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (2))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15327__$1,(4),from);
} else {
if((state_val_15329 === (11))){
var inst_15315 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
if(cljs.core.truth_(inst_15315)){
var statearr_15361_17801 = state_15327__$1;
(statearr_15361_17801[(1)] = (12));

} else {
var statearr_15362_17802 = state_15327__$1;
(statearr_15362_17802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (9))){
var state_15327__$1 = state_15327;
var statearr_15363_17803 = state_15327__$1;
(statearr_15363_17803[(2)] = null);

(statearr_15363_17803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (5))){
var state_15327__$1 = state_15327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15364_17807 = state_15327__$1;
(statearr_15364_17807[(1)] = (8));

} else {
var statearr_15365_17809 = state_15327__$1;
(statearr_15365_17809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (14))){
var inst_15320 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15366_17812 = state_15327__$1;
(statearr_15366_17812[(2)] = inst_15320);

(statearr_15366_17812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (10))){
var inst_15312 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15367_17815 = state_15327__$1;
(statearr_15367_17815[(2)] = inst_15312);

(statearr_15367_17815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (8))){
var inst_15309 = cljs.core.async.close_BANG_(to);
var state_15327__$1 = state_15327;
var statearr_15368_17818 = state_15327__$1;
(statearr_15368_17818[(2)] = inst_15309);

(statearr_15368_17818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_15369 = [null,null,null,null,null,null,null,null];
(statearr_15369[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_15369[(1)] = (1));

return statearr_15369;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_15327){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15327);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15370){var ex__14776__auto__ = e15370;
var statearr_15371_17819 = state_15327;
(statearr_15371_17819[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15327[(4)]))){
var statearr_15372_17820 = state_15327;
(statearr_15372_17820[(1)] = cljs.core.first((state_15327[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17821 = state_15327;
state_15327 = G__17821;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15373 = f__15037__auto__();
(statearr_15373[(6)] = c__15036__auto___17788);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15378){
var vec__15379 = p__15378;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15379,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15379,(1),null);
var job = vec__15379;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15036__auto___17825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15386){
var state_val_15387 = (state_15386[(1)]);
if((state_val_15387 === (1))){
var state_15386__$1 = state_15386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15386__$1,(2),res,v);
} else {
if((state_val_15387 === (2))){
var inst_15383 = (state_15386[(2)]);
var inst_15384 = cljs.core.async.close_BANG_(res);
var state_15386__$1 = (function (){var statearr_15392 = state_15386;
(statearr_15392[(7)] = inst_15383);

return statearr_15392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15386__$1,inst_15384);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_15393 = [null,null,null,null,null,null,null,null];
(statearr_15393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__);

(statearr_15393[(1)] = (1));

return statearr_15393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1 = (function (state_15386){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15386);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15394){var ex__14776__auto__ = e15394;
var statearr_15395_17827 = state_15386;
(statearr_15395_17827[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15386[(4)]))){
var statearr_15396_17830 = state_15386;
(statearr_15396_17830[(1)] = cljs.core.first((state_15386[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17831 = state_15386;
state_15386 = G__17831;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = function(state_15386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1.call(this,state_15386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15399 = f__15037__auto__();
(statearr_15399[(6)] = c__15036__auto___17825);

return statearr_15399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15404){
var vec__15405 = p__15404;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15405,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15405,(1),null);
var job = vec__15405;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17835 = n;
var __17837 = (0);
while(true){
if((__17837 < n__5636__auto___17835)){
var G__15415_17839 = type;
var G__15415_17840__$1 = (((G__15415_17839 instanceof cljs.core.Keyword))?G__15415_17839.fqn:null);
switch (G__15415_17840__$1) {
case "compute":
var c__15036__auto___17842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17837,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = ((function (__17837,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function (state_15438){
var state_val_15439 = (state_15438[(1)]);
if((state_val_15439 === (1))){
var state_15438__$1 = state_15438;
var statearr_15440_17844 = state_15438__$1;
(statearr_15440_17844[(2)] = null);

(statearr_15440_17844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15439 === (2))){
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15438__$1,(4),jobs);
} else {
if((state_val_15439 === (3))){
var inst_15436 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15438__$1,inst_15436);
} else {
if((state_val_15439 === (4))){
var inst_15424 = (state_15438[(2)]);
var inst_15425 = process__$1(inst_15424);
var state_15438__$1 = state_15438;
if(cljs.core.truth_(inst_15425)){
var statearr_15441_17847 = state_15438__$1;
(statearr_15441_17847[(1)] = (5));

} else {
var statearr_15442_17848 = state_15438__$1;
(statearr_15442_17848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15439 === (5))){
var state_15438__$1 = state_15438;
var statearr_15443_17849 = state_15438__$1;
(statearr_15443_17849[(2)] = null);

(statearr_15443_17849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15439 === (6))){
var state_15438__$1 = state_15438;
var statearr_15444_17850 = state_15438__$1;
(statearr_15444_17850[(2)] = null);

(statearr_15444_17850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15439 === (7))){
var inst_15430 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
var statearr_15445_17851 = state_15438__$1;
(statearr_15445_17851[(2)] = inst_15430);

(statearr_15445_17851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17837,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
;
return ((function (__17837,switch__14772__auto__,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_15446 = [null,null,null,null,null,null,null];
(statearr_15446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__);

(statearr_15446[(1)] = (1));

return statearr_15446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1 = (function (state_15438){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15438);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15447){var ex__14776__auto__ = e15447;
var statearr_15449_17852 = state_15438;
(statearr_15449_17852[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15438[(4)]))){
var statearr_15451_17853 = state_15438;
(statearr_15451_17853[(1)] = cljs.core.first((state_15438[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17854 = state_15438;
state_15438 = G__17854;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = function(state_15438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1.call(this,state_15438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__;
})()
;})(__17837,switch__14772__auto__,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
})();
var state__15038__auto__ = (function (){var statearr_15458 = f__15037__auto__();
(statearr_15458[(6)] = c__15036__auto___17842);

return statearr_15458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
});})(__17837,c__15036__auto___17842,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
);


break;
case "async":
var c__15036__auto___17855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17837,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = ((function (__17837,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (1))){
var state_15475__$1 = state_15475;
var statearr_15477_17856 = state_15475__$1;
(statearr_15477_17856[(2)] = null);

(statearr_15477_17856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (2))){
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15475__$1,(4),jobs);
} else {
if((state_val_15476 === (3))){
var inst_15473 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15475__$1,inst_15473);
} else {
if((state_val_15476 === (4))){
var inst_15463 = (state_15475[(2)]);
var inst_15464 = async(inst_15463);
var state_15475__$1 = state_15475;
if(cljs.core.truth_(inst_15464)){
var statearr_15480_17857 = state_15475__$1;
(statearr_15480_17857[(1)] = (5));

} else {
var statearr_15481_17858 = state_15475__$1;
(statearr_15481_17858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (5))){
var state_15475__$1 = state_15475;
var statearr_15482_17859 = state_15475__$1;
(statearr_15482_17859[(2)] = null);

(statearr_15482_17859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (6))){
var state_15475__$1 = state_15475;
var statearr_15487_17860 = state_15475__$1;
(statearr_15487_17860[(2)] = null);

(statearr_15487_17860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (7))){
var inst_15471 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15488_17862 = state_15475__$1;
(statearr_15488_17862[(2)] = inst_15471);

(statearr_15488_17862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17837,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
;
return ((function (__17837,switch__14772__auto__,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_15489 = [null,null,null,null,null,null,null];
(statearr_15489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__);

(statearr_15489[(1)] = (1));

return statearr_15489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1 = (function (state_15475){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15475);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15490){var ex__14776__auto__ = e15490;
var statearr_15491_17863 = state_15475;
(statearr_15491_17863[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15475[(4)]))){
var statearr_15492_17864 = state_15475;
(statearr_15492_17864[(1)] = cljs.core.first((state_15475[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17865 = state_15475;
state_15475 = G__17865;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__;
})()
;})(__17837,switch__14772__auto__,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
})();
var state__15038__auto__ = (function (){var statearr_15493 = f__15037__auto__();
(statearr_15493[(6)] = c__15036__auto___17855);

return statearr_15493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
});})(__17837,c__15036__auto___17855,G__15415_17839,G__15415_17840__$1,n__5636__auto___17835,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15415_17840__$1)].join('')));

}

var G__17866 = (__17837 + (1));
__17837 = G__17866;
continue;
} else {
}
break;
}

var c__15036__auto___17867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15520){
var state_val_15521 = (state_15520[(1)]);
if((state_val_15521 === (7))){
var inst_15515 = (state_15520[(2)]);
var state_15520__$1 = state_15520;
var statearr_15529_17868 = state_15520__$1;
(statearr_15529_17868[(2)] = inst_15515);

(statearr_15529_17868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (1))){
var state_15520__$1 = state_15520;
var statearr_15530_17869 = state_15520__$1;
(statearr_15530_17869[(2)] = null);

(statearr_15530_17869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (4))){
var inst_15500 = (state_15520[(7)]);
var inst_15500__$1 = (state_15520[(2)]);
var inst_15501 = (inst_15500__$1 == null);
var state_15520__$1 = (function (){var statearr_15534 = state_15520;
(statearr_15534[(7)] = inst_15500__$1);

return statearr_15534;
})();
if(cljs.core.truth_(inst_15501)){
var statearr_15535_17870 = state_15520__$1;
(statearr_15535_17870[(1)] = (5));

} else {
var statearr_15536_17871 = state_15520__$1;
(statearr_15536_17871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (6))){
var inst_15500 = (state_15520[(7)]);
var inst_15505 = (state_15520[(8)]);
var inst_15505__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15507 = [inst_15500,inst_15505__$1];
var inst_15508 = (new cljs.core.PersistentVector(null,2,(5),inst_15506,inst_15507,null));
var state_15520__$1 = (function (){var statearr_15537 = state_15520;
(statearr_15537[(8)] = inst_15505__$1);

return statearr_15537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15520__$1,(8),jobs,inst_15508);
} else {
if((state_val_15521 === (3))){
var inst_15517 = (state_15520[(2)]);
var state_15520__$1 = state_15520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15520__$1,inst_15517);
} else {
if((state_val_15521 === (2))){
var state_15520__$1 = state_15520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15520__$1,(4),from);
} else {
if((state_val_15521 === (9))){
var inst_15512 = (state_15520[(2)]);
var state_15520__$1 = (function (){var statearr_15545 = state_15520;
(statearr_15545[(9)] = inst_15512);

return statearr_15545;
})();
var statearr_15546_17872 = state_15520__$1;
(statearr_15546_17872[(2)] = null);

(statearr_15546_17872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (5))){
var inst_15503 = cljs.core.async.close_BANG_(jobs);
var state_15520__$1 = state_15520;
var statearr_15550_17873 = state_15520__$1;
(statearr_15550_17873[(2)] = inst_15503);

(statearr_15550_17873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (8))){
var inst_15505 = (state_15520[(8)]);
var inst_15510 = (state_15520[(2)]);
var state_15520__$1 = (function (){var statearr_15553 = state_15520;
(statearr_15553[(10)] = inst_15510);

return statearr_15553;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15520__$1,(9),results,inst_15505);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_15558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__);

(statearr_15558[(1)] = (1));

return statearr_15558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1 = (function (state_15520){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15520);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15560){var ex__14776__auto__ = e15560;
var statearr_15562_17874 = state_15520;
(statearr_15562_17874[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15520[(4)]))){
var statearr_15564_17875 = state_15520;
(statearr_15564_17875[(1)] = cljs.core.first((state_15520[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17876 = state_15520;
state_15520 = G__17876;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = function(state_15520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1.call(this,state_15520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15569 = f__15037__auto__();
(statearr_15569[(6)] = c__15036__auto___17867);

return statearr_15569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


var c__15036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15609){
var state_val_15610 = (state_15609[(1)]);
if((state_val_15610 === (7))){
var inst_15605 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
var statearr_15615_17877 = state_15609__$1;
(statearr_15615_17877[(2)] = inst_15605);

(statearr_15615_17877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (20))){
var state_15609__$1 = state_15609;
var statearr_15616_17879 = state_15609__$1;
(statearr_15616_17879[(2)] = null);

(statearr_15616_17879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (1))){
var state_15609__$1 = state_15609;
var statearr_15617_17880 = state_15609__$1;
(statearr_15617_17880[(2)] = null);

(statearr_15617_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (4))){
var inst_15572 = (state_15609[(7)]);
var inst_15572__$1 = (state_15609[(2)]);
var inst_15574 = (inst_15572__$1 == null);
var state_15609__$1 = (function (){var statearr_15618 = state_15609;
(statearr_15618[(7)] = inst_15572__$1);

return statearr_15618;
})();
if(cljs.core.truth_(inst_15574)){
var statearr_15619_17881 = state_15609__$1;
(statearr_15619_17881[(1)] = (5));

} else {
var statearr_15620_17883 = state_15609__$1;
(statearr_15620_17883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (15))){
var inst_15587 = (state_15609[(8)]);
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15609__$1,(18),to,inst_15587);
} else {
if((state_val_15610 === (21))){
var inst_15600 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
var statearr_15621_17884 = state_15609__$1;
(statearr_15621_17884[(2)] = inst_15600);

(statearr_15621_17884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (13))){
var inst_15602 = (state_15609[(2)]);
var state_15609__$1 = (function (){var statearr_15622 = state_15609;
(statearr_15622[(9)] = inst_15602);

return statearr_15622;
})();
var statearr_15623_17885 = state_15609__$1;
(statearr_15623_17885[(2)] = null);

(statearr_15623_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (6))){
var inst_15572 = (state_15609[(7)]);
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15609__$1,(11),inst_15572);
} else {
if((state_val_15610 === (17))){
var inst_15595 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
if(cljs.core.truth_(inst_15595)){
var statearr_15624_17886 = state_15609__$1;
(statearr_15624_17886[(1)] = (19));

} else {
var statearr_15626_17887 = state_15609__$1;
(statearr_15626_17887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (3))){
var inst_15607 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15609__$1,inst_15607);
} else {
if((state_val_15610 === (12))){
var inst_15583 = (state_15609[(10)]);
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15609__$1,(14),inst_15583);
} else {
if((state_val_15610 === (2))){
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15609__$1,(4),results);
} else {
if((state_val_15610 === (19))){
var state_15609__$1 = state_15609;
var statearr_15628_17888 = state_15609__$1;
(statearr_15628_17888[(2)] = null);

(statearr_15628_17888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (11))){
var inst_15583 = (state_15609[(2)]);
var state_15609__$1 = (function (){var statearr_15630 = state_15609;
(statearr_15630[(10)] = inst_15583);

return statearr_15630;
})();
var statearr_15632_17890 = state_15609__$1;
(statearr_15632_17890[(2)] = null);

(statearr_15632_17890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (9))){
var state_15609__$1 = state_15609;
var statearr_15633_17891 = state_15609__$1;
(statearr_15633_17891[(2)] = null);

(statearr_15633_17891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (5))){
var state_15609__$1 = state_15609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15635_17892 = state_15609__$1;
(statearr_15635_17892[(1)] = (8));

} else {
var statearr_15636_17893 = state_15609__$1;
(statearr_15636_17893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (14))){
var inst_15587 = (state_15609[(8)]);
var inst_15589 = (state_15609[(11)]);
var inst_15587__$1 = (state_15609[(2)]);
var inst_15588 = (inst_15587__$1 == null);
var inst_15589__$1 = cljs.core.not(inst_15588);
var state_15609__$1 = (function (){var statearr_15637 = state_15609;
(statearr_15637[(8)] = inst_15587__$1);

(statearr_15637[(11)] = inst_15589__$1);

return statearr_15637;
})();
if(inst_15589__$1){
var statearr_15638_17894 = state_15609__$1;
(statearr_15638_17894[(1)] = (15));

} else {
var statearr_15639_17895 = state_15609__$1;
(statearr_15639_17895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (16))){
var inst_15589 = (state_15609[(11)]);
var state_15609__$1 = state_15609;
var statearr_15640_17896 = state_15609__$1;
(statearr_15640_17896[(2)] = inst_15589);

(statearr_15640_17896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (10))){
var inst_15580 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
var statearr_15641_17897 = state_15609__$1;
(statearr_15641_17897[(2)] = inst_15580);

(statearr_15641_17897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (18))){
var inst_15592 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
var statearr_15642_17898 = state_15609__$1;
(statearr_15642_17898[(2)] = inst_15592);

(statearr_15642_17898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (8))){
var inst_15577 = cljs.core.async.close_BANG_(to);
var state_15609__$1 = state_15609;
var statearr_15643_17900 = state_15609__$1;
(statearr_15643_17900[(2)] = inst_15577);

(statearr_15643_17900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1 = (function (state_15609){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15609);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15648){var ex__14776__auto__ = e15648;
var statearr_15649_17902 = state_15609;
(statearr_15649_17902[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15609[(4)]))){
var statearr_15650_17903 = state_15609;
(statearr_15650_17903[(1)] = cljs.core.first((state_15609[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17904 = state_15609;
state_15609 = G__17904;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__ = function(state_15609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1.call(this,state_15609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15651 = f__15037__auto__();
(statearr_15651[(6)] = c__15036__auto__);

return statearr_15651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

return c__15036__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15656 = arguments.length;
switch (G__15656) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15660 = arguments.length;
switch (G__15660) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15675 = arguments.length;
switch (G__15675) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15036__auto___17909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15701){
var state_val_15702 = (state_15701[(1)]);
if((state_val_15702 === (7))){
var inst_15697 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15703_17910 = state_15701__$1;
(statearr_15703_17910[(2)] = inst_15697);

(statearr_15703_17910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (1))){
var state_15701__$1 = state_15701;
var statearr_15705_17911 = state_15701__$1;
(statearr_15705_17911[(2)] = null);

(statearr_15705_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (4))){
var inst_15678 = (state_15701[(7)]);
var inst_15678__$1 = (state_15701[(2)]);
var inst_15679 = (inst_15678__$1 == null);
var state_15701__$1 = (function (){var statearr_15707 = state_15701;
(statearr_15707[(7)] = inst_15678__$1);

return statearr_15707;
})();
if(cljs.core.truth_(inst_15679)){
var statearr_15708_17912 = state_15701__$1;
(statearr_15708_17912[(1)] = (5));

} else {
var statearr_15709_17913 = state_15701__$1;
(statearr_15709_17913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (13))){
var state_15701__$1 = state_15701;
var statearr_15710_17914 = state_15701__$1;
(statearr_15710_17914[(2)] = null);

(statearr_15710_17914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (6))){
var inst_15678 = (state_15701[(7)]);
var inst_15684 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15678) : p.call(null,inst_15678));
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15684)){
var statearr_15711_17915 = state_15701__$1;
(statearr_15711_17915[(1)] = (9));

} else {
var statearr_15712_17916 = state_15701__$1;
(statearr_15712_17916[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (3))){
var inst_15699 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15701__$1,inst_15699);
} else {
if((state_val_15702 === (12))){
var state_15701__$1 = state_15701;
var statearr_15714_17917 = state_15701__$1;
(statearr_15714_17917[(2)] = null);

(statearr_15714_17917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (2))){
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15701__$1,(4),ch);
} else {
if((state_val_15702 === (11))){
var inst_15678 = (state_15701[(7)]);
var inst_15688 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15701__$1,(8),inst_15688,inst_15678);
} else {
if((state_val_15702 === (9))){
var state_15701__$1 = state_15701;
var statearr_15715_17922 = state_15701__$1;
(statearr_15715_17922[(2)] = tc);

(statearr_15715_17922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (5))){
var inst_15681 = cljs.core.async.close_BANG_(tc);
var inst_15682 = cljs.core.async.close_BANG_(fc);
var state_15701__$1 = (function (){var statearr_15716 = state_15701;
(statearr_15716[(8)] = inst_15681);

return statearr_15716;
})();
var statearr_15718_17923 = state_15701__$1;
(statearr_15718_17923[(2)] = inst_15682);

(statearr_15718_17923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (14))){
var inst_15695 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15720_17924 = state_15701__$1;
(statearr_15720_17924[(2)] = inst_15695);

(statearr_15720_17924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (10))){
var state_15701__$1 = state_15701;
var statearr_15721_17925 = state_15701__$1;
(statearr_15721_17925[(2)] = fc);

(statearr_15721_17925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (8))){
var inst_15690 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15690)){
var statearr_15726_17926 = state_15701__$1;
(statearr_15726_17926[(1)] = (12));

} else {
var statearr_15727_17927 = state_15701__$1;
(statearr_15727_17927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_15731 = [null,null,null,null,null,null,null,null,null];
(statearr_15731[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_15731[(1)] = (1));

return statearr_15731;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_15701){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15701);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15732){var ex__14776__auto__ = e15732;
var statearr_15733_17928 = state_15701;
(statearr_15733_17928[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15701[(4)]))){
var statearr_15734_17929 = state_15701;
(statearr_15734_17929[(1)] = cljs.core.first((state_15701[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17930 = state_15701;
state_15701 = G__17930;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_15701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_15701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15739 = f__15037__auto__();
(statearr_15739[(6)] = c__15036__auto___17909);

return statearr_15739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15767){
var state_val_15768 = (state_15767[(1)]);
if((state_val_15768 === (7))){
var inst_15763 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
var statearr_15769_17932 = state_15767__$1;
(statearr_15769_17932[(2)] = inst_15763);

(statearr_15769_17932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (1))){
var inst_15746 = init;
var inst_15747 = inst_15746;
var state_15767__$1 = (function (){var statearr_15770 = state_15767;
(statearr_15770[(7)] = inst_15747);

return statearr_15770;
})();
var statearr_15771_17933 = state_15767__$1;
(statearr_15771_17933[(2)] = null);

(statearr_15771_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (4))){
var inst_15750 = (state_15767[(8)]);
var inst_15750__$1 = (state_15767[(2)]);
var inst_15751 = (inst_15750__$1 == null);
var state_15767__$1 = (function (){var statearr_15772 = state_15767;
(statearr_15772[(8)] = inst_15750__$1);

return statearr_15772;
})();
if(cljs.core.truth_(inst_15751)){
var statearr_15773_17934 = state_15767__$1;
(statearr_15773_17934[(1)] = (5));

} else {
var statearr_15774_17935 = state_15767__$1;
(statearr_15774_17935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (6))){
var inst_15750 = (state_15767[(8)]);
var inst_15747 = (state_15767[(7)]);
var inst_15754 = (state_15767[(9)]);
var inst_15754__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15747,inst_15750) : f.call(null,inst_15747,inst_15750));
var inst_15755 = cljs.core.reduced_QMARK_(inst_15754__$1);
var state_15767__$1 = (function (){var statearr_15776 = state_15767;
(statearr_15776[(9)] = inst_15754__$1);

return statearr_15776;
})();
if(inst_15755){
var statearr_15777_17936 = state_15767__$1;
(statearr_15777_17936[(1)] = (8));

} else {
var statearr_15780_17937 = state_15767__$1;
(statearr_15780_17937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (3))){
var inst_15765 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15767__$1,inst_15765);
} else {
if((state_val_15768 === (2))){
var state_15767__$1 = state_15767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15767__$1,(4),ch);
} else {
if((state_val_15768 === (9))){
var inst_15754 = (state_15767[(9)]);
var inst_15747 = inst_15754;
var state_15767__$1 = (function (){var statearr_15782 = state_15767;
(statearr_15782[(7)] = inst_15747);

return statearr_15782;
})();
var statearr_15783_17938 = state_15767__$1;
(statearr_15783_17938[(2)] = null);

(statearr_15783_17938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (5))){
var inst_15747 = (state_15767[(7)]);
var state_15767__$1 = state_15767;
var statearr_15784_17939 = state_15767__$1;
(statearr_15784_17939[(2)] = inst_15747);

(statearr_15784_17939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (10))){
var inst_15761 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
var statearr_15788_17940 = state_15767__$1;
(statearr_15788_17940[(2)] = inst_15761);

(statearr_15788_17940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (8))){
var inst_15754 = (state_15767[(9)]);
var inst_15757 = cljs.core.deref(inst_15754);
var state_15767__$1 = state_15767;
var statearr_15789_17941 = state_15767__$1;
(statearr_15789_17941[(2)] = inst_15757);

(statearr_15789_17941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14773__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14773__auto____0 = (function (){
var statearr_15790 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15790[(0)] = cljs$core$async$reduce_$_state_machine__14773__auto__);

(statearr_15790[(1)] = (1));

return statearr_15790;
});
var cljs$core$async$reduce_$_state_machine__14773__auto____1 = (function (state_15767){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15767);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15792){var ex__14776__auto__ = e15792;
var statearr_15794_17943 = state_15767;
(statearr_15794_17943[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15767[(4)]))){
var statearr_15795_17944 = state_15767;
(statearr_15795_17944[(1)] = cljs.core.first((state_15767[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17945 = state_15767;
state_15767 = G__17945;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14773__auto__ = function(state_15767){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14773__auto____1.call(this,state_15767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14773__auto____0;
cljs$core$async$reduce_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14773__auto____1;
return cljs$core$async$reduce_$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15796 = f__15037__auto__();
(statearr_15796[(6)] = c__15036__auto__);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

return c__15036__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (1))){
var inst_15798 = cljs.core.async.reduce(f__$1,init,ch);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15803__$1,(2),inst_15798);
} else {
if((state_val_15804 === (2))){
var inst_15800 = (state_15803[(2)]);
var inst_15801 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15800) : f__$1.call(null,inst_15800));
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15803__$1,inst_15801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14773__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14773__auto____0 = (function (){
var statearr_15809 = [null,null,null,null,null,null,null];
(statearr_15809[(0)] = cljs$core$async$transduce_$_state_machine__14773__auto__);

(statearr_15809[(1)] = (1));

return statearr_15809;
});
var cljs$core$async$transduce_$_state_machine__14773__auto____1 = (function (state_15803){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15803);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15810){var ex__14776__auto__ = e15810;
var statearr_15811_17946 = state_15803;
(statearr_15811_17946[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15803[(4)]))){
var statearr_15812_17948 = state_15803;
(statearr_15812_17948[(1)] = cljs.core.first((state_15803[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_15803;
state_15803 = G__17949;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14773__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14773__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14773__auto____0;
cljs$core$async$transduce_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14773__auto____1;
return cljs$core$async$transduce_$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15813 = f__15037__auto__();
(statearr_15813[(6)] = c__15036__auto__);

return statearr_15813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

return c__15036__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_15844){
var state_val_15845 = (state_15844[(1)]);
if((state_val_15845 === (7))){
var inst_15826 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
var statearr_15846_17953 = state_15844__$1;
(statearr_15846_17953[(2)] = inst_15826);

(statearr_15846_17953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (1))){
var inst_15820 = cljs.core.seq(coll);
var inst_15821 = inst_15820;
var state_15844__$1 = (function (){var statearr_15851 = state_15844;
(statearr_15851[(7)] = inst_15821);

return statearr_15851;
})();
var statearr_15856_17954 = state_15844__$1;
(statearr_15856_17954[(2)] = null);

(statearr_15856_17954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (4))){
var inst_15821 = (state_15844[(7)]);
var inst_15824 = cljs.core.first(inst_15821);
var state_15844__$1 = state_15844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15844__$1,(7),ch,inst_15824);
} else {
if((state_val_15845 === (13))){
var inst_15838 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
var statearr_15861_17955 = state_15844__$1;
(statearr_15861_17955[(2)] = inst_15838);

(statearr_15861_17955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (6))){
var inst_15829 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
if(cljs.core.truth_(inst_15829)){
var statearr_15862_17956 = state_15844__$1;
(statearr_15862_17956[(1)] = (8));

} else {
var statearr_15863_17957 = state_15844__$1;
(statearr_15863_17957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (3))){
var inst_15842 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15844__$1,inst_15842);
} else {
if((state_val_15845 === (12))){
var state_15844__$1 = state_15844;
var statearr_15864_17958 = state_15844__$1;
(statearr_15864_17958[(2)] = null);

(statearr_15864_17958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (2))){
var inst_15821 = (state_15844[(7)]);
var state_15844__$1 = state_15844;
if(cljs.core.truth_(inst_15821)){
var statearr_15865_17959 = state_15844__$1;
(statearr_15865_17959[(1)] = (4));

} else {
var statearr_15866_17960 = state_15844__$1;
(statearr_15866_17960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (11))){
var inst_15835 = cljs.core.async.close_BANG_(ch);
var state_15844__$1 = state_15844;
var statearr_15867_17962 = state_15844__$1;
(statearr_15867_17962[(2)] = inst_15835);

(statearr_15867_17962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (9))){
var state_15844__$1 = state_15844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15868_17963 = state_15844__$1;
(statearr_15868_17963[(1)] = (11));

} else {
var statearr_15869_17964 = state_15844__$1;
(statearr_15869_17964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (5))){
var inst_15821 = (state_15844[(7)]);
var state_15844__$1 = state_15844;
var statearr_15870_17965 = state_15844__$1;
(statearr_15870_17965[(2)] = inst_15821);

(statearr_15870_17965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (10))){
var inst_15840 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
var statearr_15871_17966 = state_15844__$1;
(statearr_15871_17966[(2)] = inst_15840);

(statearr_15871_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (8))){
var inst_15821 = (state_15844[(7)]);
var inst_15831 = cljs.core.next(inst_15821);
var inst_15821__$1 = inst_15831;
var state_15844__$1 = (function (){var statearr_15872 = state_15844;
(statearr_15872[(7)] = inst_15821__$1);

return statearr_15872;
})();
var statearr_15874_17967 = state_15844__$1;
(statearr_15874_17967[(2)] = null);

(statearr_15874_17967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_15875 = [null,null,null,null,null,null,null,null];
(statearr_15875[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_15875[(1)] = (1));

return statearr_15875;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_15844){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_15844);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e15876){var ex__14776__auto__ = e15876;
var statearr_15877_17968 = state_15844;
(statearr_15877_17968[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_15844[(4)]))){
var statearr_15878_17969 = state_15844;
(statearr_15878_17969[(1)] = cljs.core.first((state_15844[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17970 = state_15844;
state_15844 = G__17970;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_15844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_15844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_15879 = f__15037__auto__();
(statearr_15879[(6)] = c__15036__auto__);

return statearr_15879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

return c__15036__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15881 = arguments.length;
switch (G__15881) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17973 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17973(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17974 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17974(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17976 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17976(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17977 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17977(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15950 = (function (ch,cs,meta15951){
this.ch = ch;
this.cs = cs;
this.meta15951 = meta15951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15952,meta15951__$1){
var self__ = this;
var _15952__$1 = this;
return (new cljs.core.async.t_cljs$core$async15950(self__.ch,self__.cs,meta15951__$1));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15952){
var self__ = this;
var _15952__$1 = this;
return self__.meta15951;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15951","meta15951",1051238096,null)], null);
}));

(cljs.core.async.t_cljs$core$async15950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15950");

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15950.
 */
cljs.core.async.__GT_t_cljs$core$async15950 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15950(ch__$1,cs__$1,meta15951){
return (new cljs.core.async.t_cljs$core$async15950(ch__$1,cs__$1,meta15951));
});

}

return (new cljs.core.async.t_cljs$core$async15950(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15036__auto___17979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_16095){
var state_val_16097 = (state_16095[(1)]);
if((state_val_16097 === (7))){
var inst_16090 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16111_17980 = state_16095__$1;
(statearr_16111_17980[(2)] = inst_16090);

(statearr_16111_17980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (20))){
var inst_15995 = (state_16095[(7)]);
var inst_16007 = cljs.core.first(inst_15995);
var inst_16008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16007,(0),null);
var inst_16009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16007,(1),null);
var state_16095__$1 = (function (){var statearr_16112 = state_16095;
(statearr_16112[(8)] = inst_16008);

return statearr_16112;
})();
if(cljs.core.truth_(inst_16009)){
var statearr_16113_17985 = state_16095__$1;
(statearr_16113_17985[(1)] = (22));

} else {
var statearr_16114_17986 = state_16095__$1;
(statearr_16114_17986[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (27))){
var inst_16039 = (state_16095[(9)]);
var inst_15964 = (state_16095[(10)]);
var inst_16044 = (state_16095[(11)]);
var inst_16037 = (state_16095[(12)]);
var inst_16044__$1 = cljs.core._nth(inst_16037,inst_16039);
var inst_16045 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16044__$1,inst_15964,done);
var state_16095__$1 = (function (){var statearr_16117 = state_16095;
(statearr_16117[(11)] = inst_16044__$1);

return statearr_16117;
})();
if(cljs.core.truth_(inst_16045)){
var statearr_16122_17988 = state_16095__$1;
(statearr_16122_17988[(1)] = (30));

} else {
var statearr_16124_17989 = state_16095__$1;
(statearr_16124_17989[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (1))){
var state_16095__$1 = state_16095;
var statearr_16131_17990 = state_16095__$1;
(statearr_16131_17990[(2)] = null);

(statearr_16131_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (24))){
var inst_15995 = (state_16095[(7)]);
var inst_16014 = (state_16095[(2)]);
var inst_16015 = cljs.core.next(inst_15995);
var inst_15973 = inst_16015;
var inst_15974 = null;
var inst_15975 = (0);
var inst_15976 = (0);
var state_16095__$1 = (function (){var statearr_16143 = state_16095;
(statearr_16143[(13)] = inst_15973);

(statearr_16143[(14)] = inst_15976);

(statearr_16143[(15)] = inst_15975);

(statearr_16143[(16)] = inst_15974);

(statearr_16143[(17)] = inst_16014);

return statearr_16143;
})();
var statearr_16144_17994 = state_16095__$1;
(statearr_16144_17994[(2)] = null);

(statearr_16144_17994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (39))){
var state_16095__$1 = state_16095;
var statearr_16159_17995 = state_16095__$1;
(statearr_16159_17995[(2)] = null);

(statearr_16159_17995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (4))){
var inst_15964 = (state_16095[(10)]);
var inst_15964__$1 = (state_16095[(2)]);
var inst_15965 = (inst_15964__$1 == null);
var state_16095__$1 = (function (){var statearr_16169 = state_16095;
(statearr_16169[(10)] = inst_15964__$1);

return statearr_16169;
})();
if(cljs.core.truth_(inst_15965)){
var statearr_16175_17996 = state_16095__$1;
(statearr_16175_17996[(1)] = (5));

} else {
var statearr_16176_17997 = state_16095__$1;
(statearr_16176_17997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (15))){
var inst_15973 = (state_16095[(13)]);
var inst_15976 = (state_16095[(14)]);
var inst_15975 = (state_16095[(15)]);
var inst_15974 = (state_16095[(16)]);
var inst_15991 = (state_16095[(2)]);
var inst_15992 = (inst_15976 + (1));
var tmp16147 = inst_15973;
var tmp16148 = inst_15975;
var tmp16149 = inst_15974;
var inst_15973__$1 = tmp16147;
var inst_15974__$1 = tmp16149;
var inst_15975__$1 = tmp16148;
var inst_15976__$1 = inst_15992;
var state_16095__$1 = (function (){var statearr_16180 = state_16095;
(statearr_16180[(18)] = inst_15991);

(statearr_16180[(13)] = inst_15973__$1);

(statearr_16180[(14)] = inst_15976__$1);

(statearr_16180[(15)] = inst_15975__$1);

(statearr_16180[(16)] = inst_15974__$1);

return statearr_16180;
})();
var statearr_16182_17999 = state_16095__$1;
(statearr_16182_17999[(2)] = null);

(statearr_16182_17999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (21))){
var inst_16018 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16189_18000 = state_16095__$1;
(statearr_16189_18000[(2)] = inst_16018);

(statearr_16189_18000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (31))){
var inst_16044 = (state_16095[(11)]);
var inst_16048 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16044);
var state_16095__$1 = state_16095;
var statearr_16190_18001 = state_16095__$1;
(statearr_16190_18001[(2)] = inst_16048);

(statearr_16190_18001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (32))){
var inst_16039 = (state_16095[(9)]);
var inst_16038 = (state_16095[(19)]);
var inst_16036 = (state_16095[(20)]);
var inst_16037 = (state_16095[(12)]);
var inst_16050 = (state_16095[(2)]);
var inst_16051 = (inst_16039 + (1));
var tmp16186 = inst_16038;
var tmp16187 = inst_16036;
var tmp16188 = inst_16037;
var inst_16036__$1 = tmp16187;
var inst_16037__$1 = tmp16188;
var inst_16038__$1 = tmp16186;
var inst_16039__$1 = inst_16051;
var state_16095__$1 = (function (){var statearr_16191 = state_16095;
(statearr_16191[(21)] = inst_16050);

(statearr_16191[(9)] = inst_16039__$1);

(statearr_16191[(19)] = inst_16038__$1);

(statearr_16191[(20)] = inst_16036__$1);

(statearr_16191[(12)] = inst_16037__$1);

return statearr_16191;
})();
var statearr_16193_18002 = state_16095__$1;
(statearr_16193_18002[(2)] = null);

(statearr_16193_18002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (40))){
var inst_16063 = (state_16095[(22)]);
var inst_16067 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16063);
var state_16095__$1 = state_16095;
var statearr_16198_18003 = state_16095__$1;
(statearr_16198_18003[(2)] = inst_16067);

(statearr_16198_18003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (33))){
var inst_16054 = (state_16095[(23)]);
var inst_16056 = cljs.core.chunked_seq_QMARK_(inst_16054);
var state_16095__$1 = state_16095;
if(inst_16056){
var statearr_16199_18007 = state_16095__$1;
(statearr_16199_18007[(1)] = (36));

} else {
var statearr_16200_18008 = state_16095__$1;
(statearr_16200_18008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (13))){
var inst_15985 = (state_16095[(24)]);
var inst_15988 = cljs.core.async.close_BANG_(inst_15985);
var state_16095__$1 = state_16095;
var statearr_16201_18009 = state_16095__$1;
(statearr_16201_18009[(2)] = inst_15988);

(statearr_16201_18009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (22))){
var inst_16008 = (state_16095[(8)]);
var inst_16011 = cljs.core.async.close_BANG_(inst_16008);
var state_16095__$1 = state_16095;
var statearr_16202_18010 = state_16095__$1;
(statearr_16202_18010[(2)] = inst_16011);

(statearr_16202_18010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (36))){
var inst_16054 = (state_16095[(23)]);
var inst_16058 = cljs.core.chunk_first(inst_16054);
var inst_16059 = cljs.core.chunk_rest(inst_16054);
var inst_16060 = cljs.core.count(inst_16058);
var inst_16036 = inst_16059;
var inst_16037 = inst_16058;
var inst_16038 = inst_16060;
var inst_16039 = (0);
var state_16095__$1 = (function (){var statearr_16203 = state_16095;
(statearr_16203[(9)] = inst_16039);

(statearr_16203[(19)] = inst_16038);

(statearr_16203[(20)] = inst_16036);

(statearr_16203[(12)] = inst_16037);

return statearr_16203;
})();
var statearr_16204_18015 = state_16095__$1;
(statearr_16204_18015[(2)] = null);

(statearr_16204_18015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (41))){
var inst_16054 = (state_16095[(23)]);
var inst_16069 = (state_16095[(2)]);
var inst_16070 = cljs.core.next(inst_16054);
var inst_16036 = inst_16070;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16095__$1 = (function (){var statearr_16206 = state_16095;
(statearr_16206[(9)] = inst_16039);

(statearr_16206[(19)] = inst_16038);

(statearr_16206[(20)] = inst_16036);

(statearr_16206[(25)] = inst_16069);

(statearr_16206[(12)] = inst_16037);

return statearr_16206;
})();
var statearr_16211_18019 = state_16095__$1;
(statearr_16211_18019[(2)] = null);

(statearr_16211_18019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (43))){
var state_16095__$1 = state_16095;
var statearr_16217_18020 = state_16095__$1;
(statearr_16217_18020[(2)] = null);

(statearr_16217_18020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (29))){
var inst_16078 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16218_18021 = state_16095__$1;
(statearr_16218_18021[(2)] = inst_16078);

(statearr_16218_18021[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (44))){
var inst_16087 = (state_16095[(2)]);
var state_16095__$1 = (function (){var statearr_16223 = state_16095;
(statearr_16223[(26)] = inst_16087);

return statearr_16223;
})();
var statearr_16232_18022 = state_16095__$1;
(statearr_16232_18022[(2)] = null);

(statearr_16232_18022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (6))){
var inst_16028 = (state_16095[(27)]);
var inst_16027 = cljs.core.deref(cs);
var inst_16028__$1 = cljs.core.keys(inst_16027);
var inst_16029 = cljs.core.count(inst_16028__$1);
var inst_16030 = cljs.core.reset_BANG_(dctr,inst_16029);
var inst_16035 = cljs.core.seq(inst_16028__$1);
var inst_16036 = inst_16035;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16095__$1 = (function (){var statearr_16238 = state_16095;
(statearr_16238[(27)] = inst_16028__$1);

(statearr_16238[(9)] = inst_16039);

(statearr_16238[(19)] = inst_16038);

(statearr_16238[(20)] = inst_16036);

(statearr_16238[(28)] = inst_16030);

(statearr_16238[(12)] = inst_16037);

return statearr_16238;
})();
var statearr_16241_18030 = state_16095__$1;
(statearr_16241_18030[(2)] = null);

(statearr_16241_18030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (28))){
var inst_16036 = (state_16095[(20)]);
var inst_16054 = (state_16095[(23)]);
var inst_16054__$1 = cljs.core.seq(inst_16036);
var state_16095__$1 = (function (){var statearr_16242 = state_16095;
(statearr_16242[(23)] = inst_16054__$1);

return statearr_16242;
})();
if(inst_16054__$1){
var statearr_16243_18031 = state_16095__$1;
(statearr_16243_18031[(1)] = (33));

} else {
var statearr_16244_18032 = state_16095__$1;
(statearr_16244_18032[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (25))){
var inst_16039 = (state_16095[(9)]);
var inst_16038 = (state_16095[(19)]);
var inst_16041 = (inst_16039 < inst_16038);
var inst_16042 = inst_16041;
var state_16095__$1 = state_16095;
if(cljs.core.truth_(inst_16042)){
var statearr_16245_18036 = state_16095__$1;
(statearr_16245_18036[(1)] = (27));

} else {
var statearr_16246_18037 = state_16095__$1;
(statearr_16246_18037[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (34))){
var state_16095__$1 = state_16095;
var statearr_16247_18038 = state_16095__$1;
(statearr_16247_18038[(2)] = null);

(statearr_16247_18038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (17))){
var state_16095__$1 = state_16095;
var statearr_16249_18039 = state_16095__$1;
(statearr_16249_18039[(2)] = null);

(statearr_16249_18039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (3))){
var inst_16092 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16095__$1,inst_16092);
} else {
if((state_val_16097 === (12))){
var inst_16023 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16251_18043 = state_16095__$1;
(statearr_16251_18043[(2)] = inst_16023);

(statearr_16251_18043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (2))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(4),ch);
} else {
if((state_val_16097 === (23))){
var state_16095__$1 = state_16095;
var statearr_16252_18044 = state_16095__$1;
(statearr_16252_18044[(2)] = null);

(statearr_16252_18044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (35))){
var inst_16076 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16253_18045 = state_16095__$1;
(statearr_16253_18045[(2)] = inst_16076);

(statearr_16253_18045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (19))){
var inst_15995 = (state_16095[(7)]);
var inst_15999 = cljs.core.chunk_first(inst_15995);
var inst_16000 = cljs.core.chunk_rest(inst_15995);
var inst_16001 = cljs.core.count(inst_15999);
var inst_15973 = inst_16000;
var inst_15974 = inst_15999;
var inst_15975 = inst_16001;
var inst_15976 = (0);
var state_16095__$1 = (function (){var statearr_16255 = state_16095;
(statearr_16255[(13)] = inst_15973);

(statearr_16255[(14)] = inst_15976);

(statearr_16255[(15)] = inst_15975);

(statearr_16255[(16)] = inst_15974);

return statearr_16255;
})();
var statearr_16256_18049 = state_16095__$1;
(statearr_16256_18049[(2)] = null);

(statearr_16256_18049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (11))){
var inst_15973 = (state_16095[(13)]);
var inst_15995 = (state_16095[(7)]);
var inst_15995__$1 = cljs.core.seq(inst_15973);
var state_16095__$1 = (function (){var statearr_16257 = state_16095;
(statearr_16257[(7)] = inst_15995__$1);

return statearr_16257;
})();
if(inst_15995__$1){
var statearr_16258_18050 = state_16095__$1;
(statearr_16258_18050[(1)] = (16));

} else {
var statearr_16259_18051 = state_16095__$1;
(statearr_16259_18051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (9))){
var inst_16025 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16260_18052 = state_16095__$1;
(statearr_16260_18052[(2)] = inst_16025);

(statearr_16260_18052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (5))){
var inst_15971 = cljs.core.deref(cs);
var inst_15972 = cljs.core.seq(inst_15971);
var inst_15973 = inst_15972;
var inst_15974 = null;
var inst_15975 = (0);
var inst_15976 = (0);
var state_16095__$1 = (function (){var statearr_16261 = state_16095;
(statearr_16261[(13)] = inst_15973);

(statearr_16261[(14)] = inst_15976);

(statearr_16261[(15)] = inst_15975);

(statearr_16261[(16)] = inst_15974);

return statearr_16261;
})();
var statearr_16262_18053 = state_16095__$1;
(statearr_16262_18053[(2)] = null);

(statearr_16262_18053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (14))){
var state_16095__$1 = state_16095;
var statearr_16263_18055 = state_16095__$1;
(statearr_16263_18055[(2)] = null);

(statearr_16263_18055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (45))){
var inst_16084 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16264_18056 = state_16095__$1;
(statearr_16264_18056[(2)] = inst_16084);

(statearr_16264_18056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (26))){
var inst_16028 = (state_16095[(27)]);
var inst_16080 = (state_16095[(2)]);
var inst_16081 = cljs.core.seq(inst_16028);
var state_16095__$1 = (function (){var statearr_16267 = state_16095;
(statearr_16267[(29)] = inst_16080);

return statearr_16267;
})();
if(inst_16081){
var statearr_16268_18057 = state_16095__$1;
(statearr_16268_18057[(1)] = (42));

} else {
var statearr_16269_18058 = state_16095__$1;
(statearr_16269_18058[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (16))){
var inst_15995 = (state_16095[(7)]);
var inst_15997 = cljs.core.chunked_seq_QMARK_(inst_15995);
var state_16095__$1 = state_16095;
if(inst_15997){
var statearr_16270_18059 = state_16095__$1;
(statearr_16270_18059[(1)] = (19));

} else {
var statearr_16271_18060 = state_16095__$1;
(statearr_16271_18060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (38))){
var inst_16073 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16272_18061 = state_16095__$1;
(statearr_16272_18061[(2)] = inst_16073);

(statearr_16272_18061[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (30))){
var state_16095__$1 = state_16095;
var statearr_16273_18062 = state_16095__$1;
(statearr_16273_18062[(2)] = null);

(statearr_16273_18062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (10))){
var inst_15976 = (state_16095[(14)]);
var inst_15974 = (state_16095[(16)]);
var inst_15984 = cljs.core._nth(inst_15974,inst_15976);
var inst_15985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15984,(0),null);
var inst_15986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15984,(1),null);
var state_16095__$1 = (function (){var statearr_16281 = state_16095;
(statearr_16281[(24)] = inst_15985);

return statearr_16281;
})();
if(cljs.core.truth_(inst_15986)){
var statearr_16282_18063 = state_16095__$1;
(statearr_16282_18063[(1)] = (13));

} else {
var statearr_16283_18064 = state_16095__$1;
(statearr_16283_18064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (18))){
var inst_16021 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16288_18065 = state_16095__$1;
(statearr_16288_18065[(2)] = inst_16021);

(statearr_16288_18065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (42))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(45),dchan);
} else {
if((state_val_16097 === (37))){
var inst_15964 = (state_16095[(10)]);
var inst_16063 = (state_16095[(22)]);
var inst_16054 = (state_16095[(23)]);
var inst_16063__$1 = cljs.core.first(inst_16054);
var inst_16064 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16063__$1,inst_15964,done);
var state_16095__$1 = (function (){var statearr_16315 = state_16095;
(statearr_16315[(22)] = inst_16063__$1);

return statearr_16315;
})();
if(cljs.core.truth_(inst_16064)){
var statearr_16316_18067 = state_16095__$1;
(statearr_16316_18067[(1)] = (39));

} else {
var statearr_16317_18068 = state_16095__$1;
(statearr_16317_18068[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (8))){
var inst_15976 = (state_16095[(14)]);
var inst_15975 = (state_16095[(15)]);
var inst_15978 = (inst_15976 < inst_15975);
var inst_15979 = inst_15978;
var state_16095__$1 = state_16095;
if(cljs.core.truth_(inst_15979)){
var statearr_16318_18069 = state_16095__$1;
(statearr_16318_18069[(1)] = (10));

} else {
var statearr_16319_18070 = state_16095__$1;
(statearr_16319_18070[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14773__auto__ = null;
var cljs$core$async$mult_$_state_machine__14773__auto____0 = (function (){
var statearr_16320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16320[(0)] = cljs$core$async$mult_$_state_machine__14773__auto__);

(statearr_16320[(1)] = (1));

return statearr_16320;
});
var cljs$core$async$mult_$_state_machine__14773__auto____1 = (function (state_16095){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_16095);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e16321){var ex__14776__auto__ = e16321;
var statearr_16327_18071 = state_16095;
(statearr_16327_18071[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_16095[(4)]))){
var statearr_16328_18072 = state_16095;
(statearr_16328_18072[(1)] = cljs.core.first((state_16095[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18073 = state_16095;
state_16095 = G__18073;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14773__auto__ = function(state_16095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14773__auto____1.call(this,state_16095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14773__auto____0;
cljs$core$async$mult_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14773__auto____1;
return cljs$core$async$mult_$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_16329 = f__15037__auto__();
(statearr_16329[(6)] = c__15036__auto___17979);

return statearr_16329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16334 = arguments.length;
switch (G__16334) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18075 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18075(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18076 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18076(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18077 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18077(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18080 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18080(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18085 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18085(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18087 = arguments.length;
var i__5770__auto___18088 = (0);
while(true){
if((i__5770__auto___18088 < len__5769__auto___18087)){
args__5775__auto__.push((arguments[i__5770__auto___18088]));

var G__18089 = (i__5770__auto___18088 + (1));
i__5770__auto___18088 = G__18089;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16378){
var map__16379 = p__16378;
var map__16379__$1 = cljs.core.__destructure_map(map__16379);
var opts = map__16379__$1;
var statearr_16380_18091 = state;
(statearr_16380_18091[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16382_18092 = state;
(statearr_16382_18092[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16383_18093 = state;
(statearr_16383_18093[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16365){
var G__16366 = cljs.core.first(seq16365);
var seq16365__$1 = cljs.core.next(seq16365);
var G__16367 = cljs.core.first(seq16365__$1);
var seq16365__$2 = cljs.core.next(seq16365__$1);
var G__16368 = cljs.core.first(seq16365__$2);
var seq16365__$3 = cljs.core.next(seq16365__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16366,G__16367,G__16368,seq16365__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16406 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16407){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16407 = meta16407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16408,meta16407__$1){
var self__ = this;
var _16408__$1 = this;
return (new cljs.core.async.t_cljs$core$async16406(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16407__$1));
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16408){
var self__ = this;
var _16408__$1 = this;
return self__.meta16407;
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16407","meta16407",562826980,null)], null);
}));

(cljs.core.async.t_cljs$core$async16406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16406");

(cljs.core.async.t_cljs$core$async16406.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16406.
 */
cljs.core.async.__GT_t_cljs$core$async16406 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16406(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16407){
return (new cljs.core.async.t_cljs$core$async16406(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16407));
});

}

return (new cljs.core.async.t_cljs$core$async16406(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15036__auto___18116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_16504){
var state_val_16505 = (state_16504[(1)]);
if((state_val_16505 === (7))){
var inst_16461 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
if(cljs.core.truth_(inst_16461)){
var statearr_16506_18117 = state_16504__$1;
(statearr_16506_18117[(1)] = (8));

} else {
var statearr_16508_18118 = state_16504__$1;
(statearr_16508_18118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (20))){
var inst_16454 = (state_16504[(7)]);
var state_16504__$1 = state_16504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16504__$1,(23),out,inst_16454);
} else {
if((state_val_16505 === (1))){
var inst_16433 = calc_state();
var inst_16434 = cljs.core.__destructure_map(inst_16433);
var inst_16435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16434,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16434,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16434,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16442 = inst_16433;
var state_16504__$1 = (function (){var statearr_16509 = state_16504;
(statearr_16509[(8)] = inst_16442);

(statearr_16509[(9)] = inst_16435);

(statearr_16509[(10)] = inst_16441);

(statearr_16509[(11)] = inst_16440);

return statearr_16509;
})();
var statearr_16510_18119 = state_16504__$1;
(statearr_16510_18119[(2)] = null);

(statearr_16510_18119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (24))){
var inst_16445 = (state_16504[(12)]);
var inst_16442 = inst_16445;
var state_16504__$1 = (function (){var statearr_16511 = state_16504;
(statearr_16511[(8)] = inst_16442);

return statearr_16511;
})();
var statearr_16512_18120 = state_16504__$1;
(statearr_16512_18120[(2)] = null);

(statearr_16512_18120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (4))){
var inst_16454 = (state_16504[(7)]);
var inst_16456 = (state_16504[(13)]);
var inst_16453 = (state_16504[(2)]);
var inst_16454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16453,(0),null);
var inst_16455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16453,(1),null);
var inst_16456__$1 = (inst_16454__$1 == null);
var state_16504__$1 = (function (){var statearr_16517 = state_16504;
(statearr_16517[(14)] = inst_16455);

(statearr_16517[(7)] = inst_16454__$1);

(statearr_16517[(13)] = inst_16456__$1);

return statearr_16517;
})();
if(cljs.core.truth_(inst_16456__$1)){
var statearr_16518_18121 = state_16504__$1;
(statearr_16518_18121[(1)] = (5));

} else {
var statearr_16519_18122 = state_16504__$1;
(statearr_16519_18122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (15))){
var inst_16446 = (state_16504[(15)]);
var inst_16475 = (state_16504[(16)]);
var inst_16475__$1 = cljs.core.empty_QMARK_(inst_16446);
var state_16504__$1 = (function (){var statearr_16529 = state_16504;
(statearr_16529[(16)] = inst_16475__$1);

return statearr_16529;
})();
if(inst_16475__$1){
var statearr_16534_18123 = state_16504__$1;
(statearr_16534_18123[(1)] = (17));

} else {
var statearr_16535_18124 = state_16504__$1;
(statearr_16535_18124[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (21))){
var inst_16445 = (state_16504[(12)]);
var inst_16442 = inst_16445;
var state_16504__$1 = (function (){var statearr_16541 = state_16504;
(statearr_16541[(8)] = inst_16442);

return statearr_16541;
})();
var statearr_16542_18125 = state_16504__$1;
(statearr_16542_18125[(2)] = null);

(statearr_16542_18125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (13))){
var inst_16468 = (state_16504[(2)]);
var inst_16469 = calc_state();
var inst_16442 = inst_16469;
var state_16504__$1 = (function (){var statearr_16543 = state_16504;
(statearr_16543[(8)] = inst_16442);

(statearr_16543[(17)] = inst_16468);

return statearr_16543;
})();
var statearr_16544_18126 = state_16504__$1;
(statearr_16544_18126[(2)] = null);

(statearr_16544_18126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (22))){
var inst_16498 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
var statearr_16550_18127 = state_16504__$1;
(statearr_16550_18127[(2)] = inst_16498);

(statearr_16550_18127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (6))){
var inst_16455 = (state_16504[(14)]);
var inst_16459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16455,change);
var state_16504__$1 = state_16504;
var statearr_16551_18128 = state_16504__$1;
(statearr_16551_18128[(2)] = inst_16459);

(statearr_16551_18128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (25))){
var state_16504__$1 = state_16504;
var statearr_16555_18135 = state_16504__$1;
(statearr_16555_18135[(2)] = null);

(statearr_16555_18135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (17))){
var inst_16455 = (state_16504[(14)]);
var inst_16447 = (state_16504[(18)]);
var inst_16477 = (inst_16447.cljs$core$IFn$_invoke$arity$1 ? inst_16447.cljs$core$IFn$_invoke$arity$1(inst_16455) : inst_16447.call(null,inst_16455));
var inst_16478 = cljs.core.not(inst_16477);
var state_16504__$1 = state_16504;
var statearr_16556_18136 = state_16504__$1;
(statearr_16556_18136[(2)] = inst_16478);

(statearr_16556_18136[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (3))){
var inst_16502 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16504__$1,inst_16502);
} else {
if((state_val_16505 === (12))){
var state_16504__$1 = state_16504;
var statearr_16560_18137 = state_16504__$1;
(statearr_16560_18137[(2)] = null);

(statearr_16560_18137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (2))){
var inst_16442 = (state_16504[(8)]);
var inst_16445 = (state_16504[(12)]);
var inst_16445__$1 = cljs.core.__destructure_map(inst_16442);
var inst_16446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16445__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16445__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16445__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16504__$1 = (function (){var statearr_16564 = state_16504;
(statearr_16564[(15)] = inst_16446);

(statearr_16564[(12)] = inst_16445__$1);

(statearr_16564[(18)] = inst_16447);

return statearr_16564;
})();
return cljs.core.async.ioc_alts_BANG_(state_16504__$1,(4),inst_16448);
} else {
if((state_val_16505 === (23))){
var inst_16486 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
if(cljs.core.truth_(inst_16486)){
var statearr_16565_18138 = state_16504__$1;
(statearr_16565_18138[(1)] = (24));

} else {
var statearr_16566_18139 = state_16504__$1;
(statearr_16566_18139[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (19))){
var inst_16481 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
var statearr_16571_18140 = state_16504__$1;
(statearr_16571_18140[(2)] = inst_16481);

(statearr_16571_18140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (11))){
var inst_16455 = (state_16504[(14)]);
var inst_16465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16455);
var state_16504__$1 = state_16504;
var statearr_16573_18141 = state_16504__$1;
(statearr_16573_18141[(2)] = inst_16465);

(statearr_16573_18141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (9))){
var inst_16455 = (state_16504[(14)]);
var inst_16446 = (state_16504[(15)]);
var inst_16472 = (state_16504[(19)]);
var inst_16472__$1 = (inst_16446.cljs$core$IFn$_invoke$arity$1 ? inst_16446.cljs$core$IFn$_invoke$arity$1(inst_16455) : inst_16446.call(null,inst_16455));
var state_16504__$1 = (function (){var statearr_16575 = state_16504;
(statearr_16575[(19)] = inst_16472__$1);

return statearr_16575;
})();
if(cljs.core.truth_(inst_16472__$1)){
var statearr_16577_18142 = state_16504__$1;
(statearr_16577_18142[(1)] = (14));

} else {
var statearr_16579_18143 = state_16504__$1;
(statearr_16579_18143[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (5))){
var inst_16456 = (state_16504[(13)]);
var state_16504__$1 = state_16504;
var statearr_16580_18144 = state_16504__$1;
(statearr_16580_18144[(2)] = inst_16456);

(statearr_16580_18144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (14))){
var inst_16472 = (state_16504[(19)]);
var state_16504__$1 = state_16504;
var statearr_16581_18145 = state_16504__$1;
(statearr_16581_18145[(2)] = inst_16472);

(statearr_16581_18145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (26))){
var inst_16494 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
var statearr_16584_18147 = state_16504__$1;
(statearr_16584_18147[(2)] = inst_16494);

(statearr_16584_18147[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (16))){
var inst_16483 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
if(cljs.core.truth_(inst_16483)){
var statearr_16586_18148 = state_16504__$1;
(statearr_16586_18148[(1)] = (20));

} else {
var statearr_16587_18149 = state_16504__$1;
(statearr_16587_18149[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (10))){
var inst_16500 = (state_16504[(2)]);
var state_16504__$1 = state_16504;
var statearr_16588_18156 = state_16504__$1;
(statearr_16588_18156[(2)] = inst_16500);

(statearr_16588_18156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (18))){
var inst_16475 = (state_16504[(16)]);
var state_16504__$1 = state_16504;
var statearr_16592_18157 = state_16504__$1;
(statearr_16592_18157[(2)] = inst_16475);

(statearr_16592_18157[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16505 === (8))){
var inst_16454 = (state_16504[(7)]);
var inst_16463 = (inst_16454 == null);
var state_16504__$1 = state_16504;
if(cljs.core.truth_(inst_16463)){
var statearr_16593_18158 = state_16504__$1;
(statearr_16593_18158[(1)] = (11));

} else {
var statearr_16594_18159 = state_16504__$1;
(statearr_16594_18159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14773__auto__ = null;
var cljs$core$async$mix_$_state_machine__14773__auto____0 = (function (){
var statearr_16595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16595[(0)] = cljs$core$async$mix_$_state_machine__14773__auto__);

(statearr_16595[(1)] = (1));

return statearr_16595;
});
var cljs$core$async$mix_$_state_machine__14773__auto____1 = (function (state_16504){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_16504);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e16596){var ex__14776__auto__ = e16596;
var statearr_16597_18160 = state_16504;
(statearr_16597_18160[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_16504[(4)]))){
var statearr_16601_18161 = state_16504;
(statearr_16601_18161[(1)] = cljs.core.first((state_16504[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18162 = state_16504;
state_16504 = G__18162;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14773__auto__ = function(state_16504){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14773__auto____1.call(this,state_16504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14773__auto____0;
cljs$core$async$mix_$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14773__auto____1;
return cljs$core$async$mix_$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_16605 = f__15037__auto__();
(statearr_16605[(6)] = c__15036__auto___18116);

return statearr_16605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18163 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18163(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18164 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18164(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18171 = (function() {
var G__18172 = null;
var G__18172__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18172__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18172 = function(p,v){
switch(arguments.length){
case 1:
return G__18172__1.call(this,p);
case 2:
return G__18172__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18172.cljs$core$IFn$_invoke$arity$1 = G__18172__1;
G__18172.cljs$core$IFn$_invoke$arity$2 = G__18172__2;
return G__18172;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16620 = arguments.length;
switch (G__16620) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18171(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18171(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16623 = arguments.length;
switch (G__16623) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16621_SHARP_){
if(cljs.core.truth_((p1__16621_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16621_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16621_SHARP_.call(null,topic)))){
return p1__16621_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16621_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16624 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16625){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16625 = meta16625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16626,meta16625__$1){
var self__ = this;
var _16626__$1 = this;
return (new cljs.core.async.t_cljs$core$async16624(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16625__$1));
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16626){
var self__ = this;
var _16626__$1 = this;
return self__.meta16625;
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16625","meta16625",15446278,null)], null);
}));

(cljs.core.async.t_cljs$core$async16624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16624");

(cljs.core.async.t_cljs$core$async16624.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16624.
 */
cljs.core.async.__GT_t_cljs$core$async16624 = (function cljs$core$async$__GT_t_cljs$core$async16624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16625){
return (new cljs.core.async.t_cljs$core$async16624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16625));
});

}

return (new cljs.core.async.t_cljs$core$async16624(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15036__auto___18175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_16706){
var state_val_16707 = (state_16706[(1)]);
if((state_val_16707 === (7))){
var inst_16700 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16715_18177 = state_16706__$1;
(statearr_16715_18177[(2)] = inst_16700);

(statearr_16715_18177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (20))){
var state_16706__$1 = state_16706;
var statearr_16719_18178 = state_16706__$1;
(statearr_16719_18178[(2)] = null);

(statearr_16719_18178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (1))){
var state_16706__$1 = state_16706;
var statearr_16723_18179 = state_16706__$1;
(statearr_16723_18179[(2)] = null);

(statearr_16723_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (24))){
var inst_16682 = (state_16706[(7)]);
var inst_16692 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16682);
var state_16706__$1 = state_16706;
var statearr_16739_18180 = state_16706__$1;
(statearr_16739_18180[(2)] = inst_16692);

(statearr_16739_18180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (4))){
var inst_16629 = (state_16706[(8)]);
var inst_16629__$1 = (state_16706[(2)]);
var inst_16630 = (inst_16629__$1 == null);
var state_16706__$1 = (function (){var statearr_16748 = state_16706;
(statearr_16748[(8)] = inst_16629__$1);

return statearr_16748;
})();
if(cljs.core.truth_(inst_16630)){
var statearr_16753_18181 = state_16706__$1;
(statearr_16753_18181[(1)] = (5));

} else {
var statearr_16756_18182 = state_16706__$1;
(statearr_16756_18182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (15))){
var inst_16676 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16764_18183 = state_16706__$1;
(statearr_16764_18183[(2)] = inst_16676);

(statearr_16764_18183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (21))){
var inst_16697 = (state_16706[(2)]);
var state_16706__$1 = (function (){var statearr_16773 = state_16706;
(statearr_16773[(9)] = inst_16697);

return statearr_16773;
})();
var statearr_16774_18184 = state_16706__$1;
(statearr_16774_18184[(2)] = null);

(statearr_16774_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (13))){
var inst_16657 = (state_16706[(10)]);
var inst_16660 = cljs.core.chunked_seq_QMARK_(inst_16657);
var state_16706__$1 = state_16706;
if(inst_16660){
var statearr_16781_18185 = state_16706__$1;
(statearr_16781_18185[(1)] = (16));

} else {
var statearr_16789_18186 = state_16706__$1;
(statearr_16789_18186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (22))){
var inst_16689 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
if(cljs.core.truth_(inst_16689)){
var statearr_16822_18187 = state_16706__$1;
(statearr_16822_18187[(1)] = (23));

} else {
var statearr_16834_18188 = state_16706__$1;
(statearr_16834_18188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (6))){
var inst_16682 = (state_16706[(7)]);
var inst_16684 = (state_16706[(11)]);
var inst_16629 = (state_16706[(8)]);
var inst_16682__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16629) : topic_fn.call(null,inst_16629));
var inst_16683 = cljs.core.deref(mults);
var inst_16684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16683,inst_16682__$1);
var state_16706__$1 = (function (){var statearr_16862 = state_16706;
(statearr_16862[(7)] = inst_16682__$1);

(statearr_16862[(11)] = inst_16684__$1);

return statearr_16862;
})();
if(cljs.core.truth_(inst_16684__$1)){
var statearr_16866_18190 = state_16706__$1;
(statearr_16866_18190[(1)] = (19));

} else {
var statearr_16867_18191 = state_16706__$1;
(statearr_16867_18191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (25))){
var inst_16694 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16871_18192 = state_16706__$1;
(statearr_16871_18192[(2)] = inst_16694);

(statearr_16871_18192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (17))){
var inst_16657 = (state_16706[(10)]);
var inst_16667 = cljs.core.first(inst_16657);
var inst_16668 = cljs.core.async.muxch_STAR_(inst_16667);
var inst_16669 = cljs.core.async.close_BANG_(inst_16668);
var inst_16670 = cljs.core.next(inst_16657);
var inst_16639 = inst_16670;
var inst_16640 = null;
var inst_16641 = (0);
var inst_16642 = (0);
var state_16706__$1 = (function (){var statearr_16881 = state_16706;
(statearr_16881[(12)] = inst_16669);

(statearr_16881[(13)] = inst_16641);

(statearr_16881[(14)] = inst_16642);

(statearr_16881[(15)] = inst_16640);

(statearr_16881[(16)] = inst_16639);

return statearr_16881;
})();
var statearr_16885_18193 = state_16706__$1;
(statearr_16885_18193[(2)] = null);

(statearr_16885_18193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (3))){
var inst_16703 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16706__$1,inst_16703);
} else {
if((state_val_16707 === (12))){
var inst_16678 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16887_18194 = state_16706__$1;
(statearr_16887_18194[(2)] = inst_16678);

(statearr_16887_18194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (2))){
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(4),ch);
} else {
if((state_val_16707 === (23))){
var state_16706__$1 = state_16706;
var statearr_16895_18195 = state_16706__$1;
(statearr_16895_18195[(2)] = null);

(statearr_16895_18195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (19))){
var inst_16684 = (state_16706[(11)]);
var inst_16629 = (state_16706[(8)]);
var inst_16686 = cljs.core.async.muxch_STAR_(inst_16684);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16706__$1,(22),inst_16686,inst_16629);
} else {
if((state_val_16707 === (11))){
var inst_16657 = (state_16706[(10)]);
var inst_16639 = (state_16706[(16)]);
var inst_16657__$1 = cljs.core.seq(inst_16639);
var state_16706__$1 = (function (){var statearr_16900 = state_16706;
(statearr_16900[(10)] = inst_16657__$1);

return statearr_16900;
})();
if(inst_16657__$1){
var statearr_16902_18197 = state_16706__$1;
(statearr_16902_18197[(1)] = (13));

} else {
var statearr_16903_18198 = state_16706__$1;
(statearr_16903_18198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (9))){
var inst_16680 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16909_18199 = state_16706__$1;
(statearr_16909_18199[(2)] = inst_16680);

(statearr_16909_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (5))){
var inst_16636 = cljs.core.deref(mults);
var inst_16637 = cljs.core.vals(inst_16636);
var inst_16638 = cljs.core.seq(inst_16637);
var inst_16639 = inst_16638;
var inst_16640 = null;
var inst_16641 = (0);
var inst_16642 = (0);
var state_16706__$1 = (function (){var statearr_16913 = state_16706;
(statearr_16913[(13)] = inst_16641);

(statearr_16913[(14)] = inst_16642);

(statearr_16913[(15)] = inst_16640);

(statearr_16913[(16)] = inst_16639);

return statearr_16913;
})();
var statearr_16916_18200 = state_16706__$1;
(statearr_16916_18200[(2)] = null);

(statearr_16916_18200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (14))){
var state_16706__$1 = state_16706;
var statearr_16921_18201 = state_16706__$1;
(statearr_16921_18201[(2)] = null);

(statearr_16921_18201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (16))){
var inst_16657 = (state_16706[(10)]);
var inst_16662 = cljs.core.chunk_first(inst_16657);
var inst_16663 = cljs.core.chunk_rest(inst_16657);
var inst_16664 = cljs.core.count(inst_16662);
var inst_16639 = inst_16663;
var inst_16640 = inst_16662;
var inst_16641 = inst_16664;
var inst_16642 = (0);
var state_16706__$1 = (function (){var statearr_16928 = state_16706;
(statearr_16928[(13)] = inst_16641);

(statearr_16928[(14)] = inst_16642);

(statearr_16928[(15)] = inst_16640);

(statearr_16928[(16)] = inst_16639);

return statearr_16928;
})();
var statearr_16930_18202 = state_16706__$1;
(statearr_16930_18202[(2)] = null);

(statearr_16930_18202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (10))){
var inst_16641 = (state_16706[(13)]);
var inst_16642 = (state_16706[(14)]);
var inst_16640 = (state_16706[(15)]);
var inst_16639 = (state_16706[(16)]);
var inst_16650 = cljs.core._nth(inst_16640,inst_16642);
var inst_16652 = cljs.core.async.muxch_STAR_(inst_16650);
var inst_16653 = cljs.core.async.close_BANG_(inst_16652);
var inst_16654 = (inst_16642 + (1));
var tmp16918 = inst_16641;
var tmp16919 = inst_16640;
var tmp16920 = inst_16639;
var inst_16639__$1 = tmp16920;
var inst_16640__$1 = tmp16919;
var inst_16641__$1 = tmp16918;
var inst_16642__$1 = inst_16654;
var state_16706__$1 = (function (){var statearr_16935 = state_16706;
(statearr_16935[(17)] = inst_16653);

(statearr_16935[(13)] = inst_16641__$1);

(statearr_16935[(14)] = inst_16642__$1);

(statearr_16935[(15)] = inst_16640__$1);

(statearr_16935[(16)] = inst_16639__$1);

return statearr_16935;
})();
var statearr_16939_18203 = state_16706__$1;
(statearr_16939_18203[(2)] = null);

(statearr_16939_18203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (18))){
var inst_16673 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16943_18205 = state_16706__$1;
(statearr_16943_18205[(2)] = inst_16673);

(statearr_16943_18205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (8))){
var inst_16641 = (state_16706[(13)]);
var inst_16642 = (state_16706[(14)]);
var inst_16644 = (inst_16642 < inst_16641);
var inst_16645 = inst_16644;
var state_16706__$1 = state_16706;
if(cljs.core.truth_(inst_16645)){
var statearr_16947_18206 = state_16706__$1;
(statearr_16947_18206[(1)] = (10));

} else {
var statearr_16948_18207 = state_16706__$1;
(statearr_16948_18207[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16952[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_16706){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_16706);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e16953){var ex__14776__auto__ = e16953;
var statearr_16954_18208 = state_16706;
(statearr_16954_18208[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_16706[(4)]))){
var statearr_16959_18209 = state_16706;
(statearr_16959_18209[(1)] = cljs.core.first((state_16706[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18210 = state_16706;
state_16706 = G__18210;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_16706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_16706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_16964 = f__15037__auto__();
(statearr_16964[(6)] = c__15036__auto___18175);

return statearr_16964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16973 = arguments.length;
switch (G__16973) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16993 = arguments.length;
switch (G__16993) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17012 = arguments.length;
switch (G__17012) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15036__auto___18215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17093){
var state_val_17094 = (state_17093[(1)]);
if((state_val_17094 === (7))){
var state_17093__$1 = state_17093;
var statearr_17096_18216 = state_17093__$1;
(statearr_17096_18216[(2)] = null);

(statearr_17096_18216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (1))){
var state_17093__$1 = state_17093;
var statearr_17097_18217 = state_17093__$1;
(statearr_17097_18217[(2)] = null);

(statearr_17097_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (4))){
var inst_17038 = (state_17093[(7)]);
var inst_17037 = (state_17093[(8)]);
var inst_17040 = (inst_17038 < inst_17037);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17040)){
var statearr_17098_18219 = state_17093__$1;
(statearr_17098_18219[(1)] = (6));

} else {
var statearr_17099_18220 = state_17093__$1;
(statearr_17099_18220[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (15))){
var inst_17069 = (state_17093[(9)]);
var inst_17076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17069);
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17093__$1,(17),out,inst_17076);
} else {
if((state_val_17094 === (13))){
var inst_17069 = (state_17093[(9)]);
var inst_17069__$1 = (state_17093[(2)]);
var inst_17072 = cljs.core.some(cljs.core.nil_QMARK_,inst_17069__$1);
var state_17093__$1 = (function (){var statearr_17100 = state_17093;
(statearr_17100[(9)] = inst_17069__$1);

return statearr_17100;
})();
if(cljs.core.truth_(inst_17072)){
var statearr_17101_18221 = state_17093__$1;
(statearr_17101_18221[(1)] = (14));

} else {
var statearr_17102_18222 = state_17093__$1;
(statearr_17102_18222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (6))){
var state_17093__$1 = state_17093;
var statearr_17103_18223 = state_17093__$1;
(statearr_17103_18223[(2)] = null);

(statearr_17103_18223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (17))){
var inst_17078 = (state_17093[(2)]);
var state_17093__$1 = (function (){var statearr_17106 = state_17093;
(statearr_17106[(10)] = inst_17078);

return statearr_17106;
})();
var statearr_17107_18224 = state_17093__$1;
(statearr_17107_18224[(2)] = null);

(statearr_17107_18224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (3))){
var inst_17083 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17093__$1,inst_17083);
} else {
if((state_val_17094 === (12))){
var _ = (function (){var statearr_17108 = state_17093;
(statearr_17108[(4)] = cljs.core.rest((state_17093[(4)])));

return statearr_17108;
})();
var state_17093__$1 = state_17093;
var ex17105 = (state_17093__$1[(2)]);
var statearr_17109_18226 = state_17093__$1;
(statearr_17109_18226[(5)] = ex17105);


if((ex17105 instanceof Object)){
var statearr_17111_18227 = state_17093__$1;
(statearr_17111_18227[(1)] = (11));

(statearr_17111_18227[(5)] = null);

} else {
throw ex17105;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (2))){
var inst_17032 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17037 = cnt;
var inst_17038 = (0);
var state_17093__$1 = (function (){var statearr_17120 = state_17093;
(statearr_17120[(7)] = inst_17038);

(statearr_17120[(11)] = inst_17032);

(statearr_17120[(8)] = inst_17037);

return statearr_17120;
})();
var statearr_17125_18230 = state_17093__$1;
(statearr_17125_18230[(2)] = null);

(statearr_17125_18230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (11))){
var inst_17046 = (state_17093[(2)]);
var inst_17047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17093__$1 = (function (){var statearr_17126 = state_17093;
(statearr_17126[(12)] = inst_17046);

return statearr_17126;
})();
var statearr_17127_18231 = state_17093__$1;
(statearr_17127_18231[(2)] = inst_17047);

(statearr_17127_18231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (9))){
var inst_17038 = (state_17093[(7)]);
var _ = (function (){var statearr_17128 = state_17093;
(statearr_17128[(4)] = cljs.core.cons((12),(state_17093[(4)])));

return statearr_17128;
})();
var inst_17053 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17038) : chs__$1.call(null,inst_17038));
var inst_17054 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17038) : done.call(null,inst_17038));
var inst_17055 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17053,inst_17054);
var ___$1 = (function (){var statearr_17129 = state_17093;
(statearr_17129[(4)] = cljs.core.rest((state_17093[(4)])));

return statearr_17129;
})();
var state_17093__$1 = state_17093;
var statearr_17130_18232 = state_17093__$1;
(statearr_17130_18232[(2)] = inst_17055);

(statearr_17130_18232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (5))){
var inst_17066 = (state_17093[(2)]);
var state_17093__$1 = (function (){var statearr_17131 = state_17093;
(statearr_17131[(13)] = inst_17066);

return statearr_17131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17093__$1,(13),dchan);
} else {
if((state_val_17094 === (14))){
var inst_17074 = cljs.core.async.close_BANG_(out);
var state_17093__$1 = state_17093;
var statearr_17132_18233 = state_17093__$1;
(statearr_17132_18233[(2)] = inst_17074);

(statearr_17132_18233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (16))){
var inst_17081 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17133_18234 = state_17093__$1;
(statearr_17133_18234[(2)] = inst_17081);

(statearr_17133_18234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (10))){
var inst_17038 = (state_17093[(7)]);
var inst_17058 = (state_17093[(2)]);
var inst_17060 = (inst_17038 + (1));
var inst_17038__$1 = inst_17060;
var state_17093__$1 = (function (){var statearr_17134 = state_17093;
(statearr_17134[(7)] = inst_17038__$1);

(statearr_17134[(14)] = inst_17058);

return statearr_17134;
})();
var statearr_17135_18235 = state_17093__$1;
(statearr_17135_18235[(2)] = null);

(statearr_17135_18235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (8))){
var inst_17064 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17136_18236 = state_17093__$1;
(statearr_17136_18236[(2)] = inst_17064);

(statearr_17136_18236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17137[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17137[(1)] = (1));

return statearr_17137;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17093){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17093);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17138){var ex__14776__auto__ = e17138;
var statearr_17139_18238 = state_17093;
(statearr_17139_18238[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17093[(4)]))){
var statearr_17140_18240 = state_17093;
(statearr_17140_18240[(1)] = cljs.core.first((state_17093[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18245 = state_17093;
state_17093 = G__18245;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17142 = f__15037__auto__();
(statearr_17142[(6)] = c__15036__auto___18215);

return statearr_17142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17145 = arguments.length;
switch (G__17145) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17177){
var state_val_17178 = (state_17177[(1)]);
if((state_val_17178 === (7))){
var inst_17156 = (state_17177[(7)]);
var inst_17157 = (state_17177[(8)]);
var inst_17156__$1 = (state_17177[(2)]);
var inst_17157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17156__$1,(0),null);
var inst_17158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17156__$1,(1),null);
var inst_17159 = (inst_17157__$1 == null);
var state_17177__$1 = (function (){var statearr_17179 = state_17177;
(statearr_17179[(7)] = inst_17156__$1);

(statearr_17179[(8)] = inst_17157__$1);

(statearr_17179[(9)] = inst_17158);

return statearr_17179;
})();
if(cljs.core.truth_(inst_17159)){
var statearr_17180_18248 = state_17177__$1;
(statearr_17180_18248[(1)] = (8));

} else {
var statearr_17181_18249 = state_17177__$1;
(statearr_17181_18249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (1))){
var inst_17146 = cljs.core.vec(chs);
var inst_17147 = inst_17146;
var state_17177__$1 = (function (){var statearr_17182 = state_17177;
(statearr_17182[(10)] = inst_17147);

return statearr_17182;
})();
var statearr_17183_18250 = state_17177__$1;
(statearr_17183_18250[(2)] = null);

(statearr_17183_18250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (4))){
var inst_17147 = (state_17177[(10)]);
var state_17177__$1 = state_17177;
return cljs.core.async.ioc_alts_BANG_(state_17177__$1,(7),inst_17147);
} else {
if((state_val_17178 === (6))){
var inst_17173 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17184_18251 = state_17177__$1;
(statearr_17184_18251[(2)] = inst_17173);

(statearr_17184_18251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (3))){
var inst_17175 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17177__$1,inst_17175);
} else {
if((state_val_17178 === (2))){
var inst_17147 = (state_17177[(10)]);
var inst_17149 = cljs.core.count(inst_17147);
var inst_17150 = (inst_17149 > (0));
var state_17177__$1 = state_17177;
if(cljs.core.truth_(inst_17150)){
var statearr_17186_18252 = state_17177__$1;
(statearr_17186_18252[(1)] = (4));

} else {
var statearr_17187_18253 = state_17177__$1;
(statearr_17187_18253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (11))){
var inst_17147 = (state_17177[(10)]);
var inst_17166 = (state_17177[(2)]);
var tmp17185 = inst_17147;
var inst_17147__$1 = tmp17185;
var state_17177__$1 = (function (){var statearr_17188 = state_17177;
(statearr_17188[(10)] = inst_17147__$1);

(statearr_17188[(11)] = inst_17166);

return statearr_17188;
})();
var statearr_17189_18254 = state_17177__$1;
(statearr_17189_18254[(2)] = null);

(statearr_17189_18254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (9))){
var inst_17157 = (state_17177[(8)]);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17177__$1,(11),out,inst_17157);
} else {
if((state_val_17178 === (5))){
var inst_17171 = cljs.core.async.close_BANG_(out);
var state_17177__$1 = state_17177;
var statearr_17193_18255 = state_17177__$1;
(statearr_17193_18255[(2)] = inst_17171);

(statearr_17193_18255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (10))){
var inst_17169 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17194_18256 = state_17177__$1;
(statearr_17194_18256[(2)] = inst_17169);

(statearr_17194_18256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (8))){
var inst_17147 = (state_17177[(10)]);
var inst_17156 = (state_17177[(7)]);
var inst_17157 = (state_17177[(8)]);
var inst_17158 = (state_17177[(9)]);
var inst_17161 = (function (){var cs = inst_17147;
var vec__17152 = inst_17156;
var v = inst_17157;
var c = inst_17158;
return (function (p1__17143_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17143_SHARP_);
});
})();
var inst_17162 = cljs.core.filterv(inst_17161,inst_17147);
var inst_17147__$1 = inst_17162;
var state_17177__$1 = (function (){var statearr_17196 = state_17177;
(statearr_17196[(10)] = inst_17147__$1);

return statearr_17196;
})();
var statearr_17198_18257 = state_17177__$1;
(statearr_17198_18257[(2)] = null);

(statearr_17198_18257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17200[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17200[(1)] = (1));

return statearr_17200;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17177){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17177);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17201){var ex__14776__auto__ = e17201;
var statearr_17202_18258 = state_17177;
(statearr_17202_18258[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17177[(4)]))){
var statearr_17203_18259 = state_17177;
(statearr_17203_18259[(1)] = cljs.core.first((state_17177[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18260 = state_17177;
state_17177 = G__18260;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17206 = f__15037__auto__();
(statearr_17206[(6)] = c__15036__auto___18247);

return statearr_17206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17212 = arguments.length;
switch (G__17212) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17248){
var state_val_17249 = (state_17248[(1)]);
if((state_val_17249 === (7))){
var inst_17228 = (state_17248[(7)]);
var inst_17228__$1 = (state_17248[(2)]);
var inst_17229 = (inst_17228__$1 == null);
var inst_17230 = cljs.core.not(inst_17229);
var state_17248__$1 = (function (){var statearr_17261 = state_17248;
(statearr_17261[(7)] = inst_17228__$1);

return statearr_17261;
})();
if(inst_17230){
var statearr_17271_18265 = state_17248__$1;
(statearr_17271_18265[(1)] = (8));

} else {
var statearr_17276_18266 = state_17248__$1;
(statearr_17276_18266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (1))){
var inst_17223 = (0);
var state_17248__$1 = (function (){var statearr_17278 = state_17248;
(statearr_17278[(8)] = inst_17223);

return statearr_17278;
})();
var statearr_17279_18267 = state_17248__$1;
(statearr_17279_18267[(2)] = null);

(statearr_17279_18267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (4))){
var state_17248__$1 = state_17248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17248__$1,(7),ch);
} else {
if((state_val_17249 === (6))){
var inst_17241 = (state_17248[(2)]);
var state_17248__$1 = state_17248;
var statearr_17286_18268 = state_17248__$1;
(statearr_17286_18268[(2)] = inst_17241);

(statearr_17286_18268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (3))){
var inst_17243 = (state_17248[(2)]);
var inst_17244 = cljs.core.async.close_BANG_(out);
var state_17248__$1 = (function (){var statearr_17292 = state_17248;
(statearr_17292[(9)] = inst_17243);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17248__$1,inst_17244);
} else {
if((state_val_17249 === (2))){
var inst_17223 = (state_17248[(8)]);
var inst_17225 = (inst_17223 < n);
var state_17248__$1 = state_17248;
if(cljs.core.truth_(inst_17225)){
var statearr_17296_18269 = state_17248__$1;
(statearr_17296_18269[(1)] = (4));

} else {
var statearr_17302_18270 = state_17248__$1;
(statearr_17302_18270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (11))){
var inst_17223 = (state_17248[(8)]);
var inst_17233 = (state_17248[(2)]);
var inst_17234 = (inst_17223 + (1));
var inst_17223__$1 = inst_17234;
var state_17248__$1 = (function (){var statearr_17304 = state_17248;
(statearr_17304[(8)] = inst_17223__$1);

(statearr_17304[(10)] = inst_17233);

return statearr_17304;
})();
var statearr_17305_18271 = state_17248__$1;
(statearr_17305_18271[(2)] = null);

(statearr_17305_18271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (9))){
var state_17248__$1 = state_17248;
var statearr_17309_18272 = state_17248__$1;
(statearr_17309_18272[(2)] = null);

(statearr_17309_18272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (5))){
var state_17248__$1 = state_17248;
var statearr_17315_18273 = state_17248__$1;
(statearr_17315_18273[(2)] = null);

(statearr_17315_18273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (10))){
var inst_17238 = (state_17248[(2)]);
var state_17248__$1 = state_17248;
var statearr_17323_18274 = state_17248__$1;
(statearr_17323_18274[(2)] = inst_17238);

(statearr_17323_18274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (8))){
var inst_17228 = (state_17248[(7)]);
var state_17248__$1 = state_17248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17248__$1,(11),out,inst_17228);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17336[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17336[(1)] = (1));

return statearr_17336;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17248){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17248);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17343){var ex__14776__auto__ = e17343;
var statearr_17344_18275 = state_17248;
(statearr_17344_18275[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17248[(4)]))){
var statearr_17345_18276 = state_17248;
(statearr_17345_18276[(1)] = cljs.core.first((state_17248[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18277 = state_17248;
state_17248 = G__18277;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17347 = f__15037__auto__();
(statearr_17347[(6)] = c__15036__auto___18264);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17372 = (function (f,ch,meta17373){
this.f = f;
this.ch = ch;
this.meta17373 = meta17373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17374,meta17373__$1){
var self__ = this;
var _17374__$1 = this;
return (new cljs.core.async.t_cljs$core$async17372(self__.f,self__.ch,meta17373__$1));
}));

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17374){
var self__ = this;
var _17374__$1 = this;
return self__.meta17373;
}));

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17375 = (function (f,ch,meta17373,_,fn1,meta17376){
this.f = f;
this.ch = ch;
this.meta17373 = meta17373;
this._ = _;
this.fn1 = fn1;
this.meta17376 = meta17376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17377,meta17376__$1){
var self__ = this;
var _17377__$1 = this;
return (new cljs.core.async.t_cljs$core$async17375(self__.f,self__.ch,self__.meta17373,self__._,self__.fn1,meta17376__$1));
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17377){
var self__ = this;
var _17377__$1 = this;
return self__.meta17376;
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17351_SHARP_){
var G__17398 = (((p1__17351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17351_SHARP_) : self__.f.call(null,p1__17351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17398) : f1.call(null,G__17398));
});
}));

(cljs.core.async.t_cljs$core$async17375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17373","meta17373",1304335467,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17372","cljs.core.async/t_cljs$core$async17372",-1937151490,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17376","meta17376",-194022020,null)], null);
}));

(cljs.core.async.t_cljs$core$async17375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17375");

(cljs.core.async.t_cljs$core$async17375.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17375.
 */
cljs.core.async.__GT_t_cljs$core$async17375 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17375(f__$1,ch__$1,meta17373__$1,___$2,fn1__$1,meta17376){
return (new cljs.core.async.t_cljs$core$async17375(f__$1,ch__$1,meta17373__$1,___$2,fn1__$1,meta17376));
});

}

return (new cljs.core.async.t_cljs$core$async17375(self__.f,self__.ch,self__.meta17373,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17399 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17399) : self__.f.call(null,G__17399));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17373","meta17373",1304335467,null)], null);
}));

(cljs.core.async.t_cljs$core$async17372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17372");

(cljs.core.async.t_cljs$core$async17372.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17372.
 */
cljs.core.async.__GT_t_cljs$core$async17372 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17372(f__$1,ch__$1,meta17373){
return (new cljs.core.async.t_cljs$core$async17372(f__$1,ch__$1,meta17373));
});

}

return (new cljs.core.async.t_cljs$core$async17372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17400 = (function (f,ch,meta17401){
this.f = f;
this.ch = ch;
this.meta17401 = meta17401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17402,meta17401__$1){
var self__ = this;
var _17402__$1 = this;
return (new cljs.core.async.t_cljs$core$async17400(self__.f,self__.ch,meta17401__$1));
}));

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17402){
var self__ = this;
var _17402__$1 = this;
return self__.meta17401;
}));

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17401","meta17401",116556999,null)], null);
}));

(cljs.core.async.t_cljs$core$async17400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17400");

(cljs.core.async.t_cljs$core$async17400.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17400.
 */
cljs.core.async.__GT_t_cljs$core$async17400 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17400(f__$1,ch__$1,meta17401){
return (new cljs.core.async.t_cljs$core$async17400(f__$1,ch__$1,meta17401));
});

}

return (new cljs.core.async.t_cljs$core$async17400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17403 = (function (p,ch,meta17404){
this.p = p;
this.ch = ch;
this.meta17404 = meta17404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17405,meta17404__$1){
var self__ = this;
var _17405__$1 = this;
return (new cljs.core.async.t_cljs$core$async17403(self__.p,self__.ch,meta17404__$1));
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17405){
var self__ = this;
var _17405__$1 = this;
return self__.meta17404;
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17404","meta17404",-1705641252,null)], null);
}));

(cljs.core.async.t_cljs$core$async17403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17403");

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17403.
 */
cljs.core.async.__GT_t_cljs$core$async17403 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17403(p__$1,ch__$1,meta17404){
return (new cljs.core.async.t_cljs$core$async17403(p__$1,ch__$1,meta17404));
});

}

return (new cljs.core.async.t_cljs$core$async17403(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17407 = arguments.length;
switch (G__17407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17428){
var state_val_17429 = (state_17428[(1)]);
if((state_val_17429 === (7))){
var inst_17424 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17430_18321 = state_17428__$1;
(statearr_17430_18321[(2)] = inst_17424);

(statearr_17430_18321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (1))){
var state_17428__$1 = state_17428;
var statearr_17431_18322 = state_17428__$1;
(statearr_17431_18322[(2)] = null);

(statearr_17431_18322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (4))){
var inst_17410 = (state_17428[(7)]);
var inst_17410__$1 = (state_17428[(2)]);
var inst_17411 = (inst_17410__$1 == null);
var state_17428__$1 = (function (){var statearr_17432 = state_17428;
(statearr_17432[(7)] = inst_17410__$1);

return statearr_17432;
})();
if(cljs.core.truth_(inst_17411)){
var statearr_17433_18323 = state_17428__$1;
(statearr_17433_18323[(1)] = (5));

} else {
var statearr_17434_18324 = state_17428__$1;
(statearr_17434_18324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (6))){
var inst_17410 = (state_17428[(7)]);
var inst_17415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17410) : p.call(null,inst_17410));
var state_17428__$1 = state_17428;
if(cljs.core.truth_(inst_17415)){
var statearr_17435_18325 = state_17428__$1;
(statearr_17435_18325[(1)] = (8));

} else {
var statearr_17436_18326 = state_17428__$1;
(statearr_17436_18326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (3))){
var inst_17426 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17428__$1,inst_17426);
} else {
if((state_val_17429 === (2))){
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17428__$1,(4),ch);
} else {
if((state_val_17429 === (11))){
var inst_17418 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17437_18328 = state_17428__$1;
(statearr_17437_18328[(2)] = inst_17418);

(statearr_17437_18328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (9))){
var state_17428__$1 = state_17428;
var statearr_17438_18330 = state_17428__$1;
(statearr_17438_18330[(2)] = null);

(statearr_17438_18330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (5))){
var inst_17413 = cljs.core.async.close_BANG_(out);
var state_17428__$1 = state_17428;
var statearr_17439_18332 = state_17428__$1;
(statearr_17439_18332[(2)] = inst_17413);

(statearr_17439_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (10))){
var inst_17421 = (state_17428[(2)]);
var state_17428__$1 = (function (){var statearr_17440 = state_17428;
(statearr_17440[(8)] = inst_17421);

return statearr_17440;
})();
var statearr_17441_18333 = state_17428__$1;
(statearr_17441_18333[(2)] = null);

(statearr_17441_18333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (8))){
var inst_17410 = (state_17428[(7)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17428__$1,(11),out,inst_17410);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17442 = [null,null,null,null,null,null,null,null,null];
(statearr_17442[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17442[(1)] = (1));

return statearr_17442;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17428){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17428);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17443){var ex__14776__auto__ = e17443;
var statearr_17444_18334 = state_17428;
(statearr_17444_18334[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17428[(4)]))){
var statearr_17445_18335 = state_17428;
(statearr_17445_18335[(1)] = cljs.core.first((state_17428[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18336 = state_17428;
state_17428 = G__18336;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17446 = f__15037__auto__();
(statearr_17446[(6)] = c__15036__auto___18319);

return statearr_17446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17448 = arguments.length;
switch (G__17448) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17510){
var state_val_17511 = (state_17510[(1)]);
if((state_val_17511 === (7))){
var inst_17506 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17512_18339 = state_17510__$1;
(statearr_17512_18339[(2)] = inst_17506);

(statearr_17512_18339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (20))){
var inst_17476 = (state_17510[(7)]);
var inst_17487 = (state_17510[(2)]);
var inst_17488 = cljs.core.next(inst_17476);
var inst_17462 = inst_17488;
var inst_17463 = null;
var inst_17464 = (0);
var inst_17465 = (0);
var state_17510__$1 = (function (){var statearr_17513 = state_17510;
(statearr_17513[(8)] = inst_17487);

(statearr_17513[(9)] = inst_17463);

(statearr_17513[(10)] = inst_17462);

(statearr_17513[(11)] = inst_17464);

(statearr_17513[(12)] = inst_17465);

return statearr_17513;
})();
var statearr_17514_18345 = state_17510__$1;
(statearr_17514_18345[(2)] = null);

(statearr_17514_18345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (1))){
var state_17510__$1 = state_17510;
var statearr_17515_18351 = state_17510__$1;
(statearr_17515_18351[(2)] = null);

(statearr_17515_18351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (4))){
var inst_17451 = (state_17510[(13)]);
var inst_17451__$1 = (state_17510[(2)]);
var inst_17452 = (inst_17451__$1 == null);
var state_17510__$1 = (function (){var statearr_17516 = state_17510;
(statearr_17516[(13)] = inst_17451__$1);

return statearr_17516;
})();
if(cljs.core.truth_(inst_17452)){
var statearr_17517_18352 = state_17510__$1;
(statearr_17517_18352[(1)] = (5));

} else {
var statearr_17518_18356 = state_17510__$1;
(statearr_17518_18356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (15))){
var state_17510__$1 = state_17510;
var statearr_17522_18357 = state_17510__$1;
(statearr_17522_18357[(2)] = null);

(statearr_17522_18357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (21))){
var state_17510__$1 = state_17510;
var statearr_17523_18358 = state_17510__$1;
(statearr_17523_18358[(2)] = null);

(statearr_17523_18358[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (13))){
var inst_17463 = (state_17510[(9)]);
var inst_17462 = (state_17510[(10)]);
var inst_17464 = (state_17510[(11)]);
var inst_17465 = (state_17510[(12)]);
var inst_17472 = (state_17510[(2)]);
var inst_17473 = (inst_17465 + (1));
var tmp17519 = inst_17463;
var tmp17520 = inst_17462;
var tmp17521 = inst_17464;
var inst_17462__$1 = tmp17520;
var inst_17463__$1 = tmp17519;
var inst_17464__$1 = tmp17521;
var inst_17465__$1 = inst_17473;
var state_17510__$1 = (function (){var statearr_17524 = state_17510;
(statearr_17524[(9)] = inst_17463__$1);

(statearr_17524[(14)] = inst_17472);

(statearr_17524[(10)] = inst_17462__$1);

(statearr_17524[(11)] = inst_17464__$1);

(statearr_17524[(12)] = inst_17465__$1);

return statearr_17524;
})();
var statearr_17525_18370 = state_17510__$1;
(statearr_17525_18370[(2)] = null);

(statearr_17525_18370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (22))){
var state_17510__$1 = state_17510;
var statearr_17526_18373 = state_17510__$1;
(statearr_17526_18373[(2)] = null);

(statearr_17526_18373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (6))){
var inst_17451 = (state_17510[(13)]);
var inst_17460 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17451) : f.call(null,inst_17451));
var inst_17461 = cljs.core.seq(inst_17460);
var inst_17462 = inst_17461;
var inst_17463 = null;
var inst_17464 = (0);
var inst_17465 = (0);
var state_17510__$1 = (function (){var statearr_17527 = state_17510;
(statearr_17527[(9)] = inst_17463);

(statearr_17527[(10)] = inst_17462);

(statearr_17527[(11)] = inst_17464);

(statearr_17527[(12)] = inst_17465);

return statearr_17527;
})();
var statearr_17528_18388 = state_17510__$1;
(statearr_17528_18388[(2)] = null);

(statearr_17528_18388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (17))){
var inst_17476 = (state_17510[(7)]);
var inst_17480 = cljs.core.chunk_first(inst_17476);
var inst_17481 = cljs.core.chunk_rest(inst_17476);
var inst_17482 = cljs.core.count(inst_17480);
var inst_17462 = inst_17481;
var inst_17463 = inst_17480;
var inst_17464 = inst_17482;
var inst_17465 = (0);
var state_17510__$1 = (function (){var statearr_17529 = state_17510;
(statearr_17529[(9)] = inst_17463);

(statearr_17529[(10)] = inst_17462);

(statearr_17529[(11)] = inst_17464);

(statearr_17529[(12)] = inst_17465);

return statearr_17529;
})();
var statearr_17530_18389 = state_17510__$1;
(statearr_17530_18389[(2)] = null);

(statearr_17530_18389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (3))){
var inst_17508 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17510__$1,inst_17508);
} else {
if((state_val_17511 === (12))){
var inst_17496 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17531_18392 = state_17510__$1;
(statearr_17531_18392[(2)] = inst_17496);

(statearr_17531_18392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (2))){
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17510__$1,(4),in$);
} else {
if((state_val_17511 === (23))){
var inst_17504 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17532_18395 = state_17510__$1;
(statearr_17532_18395[(2)] = inst_17504);

(statearr_17532_18395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (19))){
var inst_17491 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17533_18397 = state_17510__$1;
(statearr_17533_18397[(2)] = inst_17491);

(statearr_17533_18397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (11))){
var inst_17462 = (state_17510[(10)]);
var inst_17476 = (state_17510[(7)]);
var inst_17476__$1 = cljs.core.seq(inst_17462);
var state_17510__$1 = (function (){var statearr_17534 = state_17510;
(statearr_17534[(7)] = inst_17476__$1);

return statearr_17534;
})();
if(inst_17476__$1){
var statearr_17535_18398 = state_17510__$1;
(statearr_17535_18398[(1)] = (14));

} else {
var statearr_17536_18400 = state_17510__$1;
(statearr_17536_18400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (9))){
var inst_17498 = (state_17510[(2)]);
var inst_17499 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17510__$1 = (function (){var statearr_17537 = state_17510;
(statearr_17537[(15)] = inst_17498);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17499)){
var statearr_17538_18413 = state_17510__$1;
(statearr_17538_18413[(1)] = (21));

} else {
var statearr_17539_18418 = state_17510__$1;
(statearr_17539_18418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (5))){
var inst_17454 = cljs.core.async.close_BANG_(out);
var state_17510__$1 = state_17510;
var statearr_17540_18420 = state_17510__$1;
(statearr_17540_18420[(2)] = inst_17454);

(statearr_17540_18420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (14))){
var inst_17476 = (state_17510[(7)]);
var inst_17478 = cljs.core.chunked_seq_QMARK_(inst_17476);
var state_17510__$1 = state_17510;
if(inst_17478){
var statearr_17541_18422 = state_17510__$1;
(statearr_17541_18422[(1)] = (17));

} else {
var statearr_17542_18423 = state_17510__$1;
(statearr_17542_18423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (16))){
var inst_17494 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17543_18424 = state_17510__$1;
(statearr_17543_18424[(2)] = inst_17494);

(statearr_17543_18424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (10))){
var inst_17463 = (state_17510[(9)]);
var inst_17465 = (state_17510[(12)]);
var inst_17470 = cljs.core._nth(inst_17463,inst_17465);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17510__$1,(13),out,inst_17470);
} else {
if((state_val_17511 === (18))){
var inst_17476 = (state_17510[(7)]);
var inst_17485 = cljs.core.first(inst_17476);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17510__$1,(20),out,inst_17485);
} else {
if((state_val_17511 === (8))){
var inst_17464 = (state_17510[(11)]);
var inst_17465 = (state_17510[(12)]);
var inst_17467 = (inst_17465 < inst_17464);
var inst_17468 = inst_17467;
var state_17510__$1 = state_17510;
if(cljs.core.truth_(inst_17468)){
var statearr_17544_18425 = state_17510__$1;
(statearr_17544_18425[(1)] = (10));

} else {
var statearr_17545_18426 = state_17510__$1;
(statearr_17545_18426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____0 = (function (){
var statearr_17546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__);

(statearr_17546[(1)] = (1));

return statearr_17546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____1 = (function (state_17510){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17510);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17547){var ex__14776__auto__ = e17547;
var statearr_17548_18429 = state_17510;
(statearr_17548_18429[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17510[(4)]))){
var statearr_17549_18430 = state_17510;
(statearr_17549_18430[(1)] = cljs.core.first((state_17510[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18432 = state_17510;
state_17510 = G__18432;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__ = function(state_17510){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____1.call(this,state_17510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14773__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17550 = f__15037__auto__();
(statearr_17550[(6)] = c__15036__auto__);

return statearr_17550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));

return c__15036__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17552 = arguments.length;
switch (G__17552) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17554 = arguments.length;
switch (G__17554) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17556 = arguments.length;
switch (G__17556) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17580){
var state_val_17581 = (state_17580[(1)]);
if((state_val_17581 === (7))){
var inst_17575 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17582_18445 = state_17580__$1;
(statearr_17582_18445[(2)] = inst_17575);

(statearr_17582_18445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (1))){
var inst_17557 = null;
var state_17580__$1 = (function (){var statearr_17584 = state_17580;
(statearr_17584[(7)] = inst_17557);

return statearr_17584;
})();
var statearr_17585_18447 = state_17580__$1;
(statearr_17585_18447[(2)] = null);

(statearr_17585_18447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (4))){
var inst_17560 = (state_17580[(8)]);
var inst_17560__$1 = (state_17580[(2)]);
var inst_17561 = (inst_17560__$1 == null);
var inst_17562 = cljs.core.not(inst_17561);
var state_17580__$1 = (function (){var statearr_17586 = state_17580;
(statearr_17586[(8)] = inst_17560__$1);

return statearr_17586;
})();
if(inst_17562){
var statearr_17587_18452 = state_17580__$1;
(statearr_17587_18452[(1)] = (5));

} else {
var statearr_17588_18453 = state_17580__$1;
(statearr_17588_18453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (6))){
var state_17580__$1 = state_17580;
var statearr_17589_18454 = state_17580__$1;
(statearr_17589_18454[(2)] = null);

(statearr_17589_18454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (3))){
var inst_17577 = (state_17580[(2)]);
var inst_17578 = cljs.core.async.close_BANG_(out);
var state_17580__$1 = (function (){var statearr_17590 = state_17580;
(statearr_17590[(9)] = inst_17577);

return statearr_17590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17580__$1,inst_17578);
} else {
if((state_val_17581 === (2))){
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17580__$1,(4),ch);
} else {
if((state_val_17581 === (11))){
var inst_17560 = (state_17580[(8)]);
var inst_17569 = (state_17580[(2)]);
var inst_17557 = inst_17560;
var state_17580__$1 = (function (){var statearr_17591 = state_17580;
(statearr_17591[(10)] = inst_17569);

(statearr_17591[(7)] = inst_17557);

return statearr_17591;
})();
var statearr_17592_18458 = state_17580__$1;
(statearr_17592_18458[(2)] = null);

(statearr_17592_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (9))){
var inst_17560 = (state_17580[(8)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17580__$1,(11),out,inst_17560);
} else {
if((state_val_17581 === (5))){
var inst_17560 = (state_17580[(8)]);
var inst_17557 = (state_17580[(7)]);
var inst_17564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17560,inst_17557);
var state_17580__$1 = state_17580;
if(inst_17564){
var statearr_17594_18459 = state_17580__$1;
(statearr_17594_18459[(1)] = (8));

} else {
var statearr_17595_18461 = state_17580__$1;
(statearr_17595_18461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (10))){
var inst_17572 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17596_18463 = state_17580__$1;
(statearr_17596_18463[(2)] = inst_17572);

(statearr_17596_18463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (8))){
var inst_17557 = (state_17580[(7)]);
var tmp17593 = inst_17557;
var inst_17557__$1 = tmp17593;
var state_17580__$1 = (function (){var statearr_17597 = state_17580;
(statearr_17597[(7)] = inst_17557__$1);

return statearr_17597;
})();
var statearr_17598_18464 = state_17580__$1;
(statearr_17598_18464[(2)] = null);

(statearr_17598_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17599[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17599[(1)] = (1));

return statearr_17599;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17580){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17580);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17600){var ex__14776__auto__ = e17600;
var statearr_17601_18468 = state_17580;
(statearr_17601_18468[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17580[(4)]))){
var statearr_17602_18469 = state_17580;
(statearr_17602_18469[(1)] = cljs.core.first((state_17580[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18470 = state_17580;
state_17580 = G__18470;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17603 = f__15037__auto__();
(statearr_17603[(6)] = c__15036__auto___18443);

return statearr_17603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17605 = arguments.length;
switch (G__17605) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17644){
var state_val_17645 = (state_17644[(1)]);
if((state_val_17645 === (7))){
var inst_17640 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17649_18474 = state_17644__$1;
(statearr_17649_18474[(2)] = inst_17640);

(statearr_17649_18474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (1))){
var inst_17607 = (new Array(n));
var inst_17608 = inst_17607;
var inst_17609 = (0);
var state_17644__$1 = (function (){var statearr_17650 = state_17644;
(statearr_17650[(7)] = inst_17609);

(statearr_17650[(8)] = inst_17608);

return statearr_17650;
})();
var statearr_17651_18476 = state_17644__$1;
(statearr_17651_18476[(2)] = null);

(statearr_17651_18476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (4))){
var inst_17612 = (state_17644[(9)]);
var inst_17612__$1 = (state_17644[(2)]);
var inst_17613 = (inst_17612__$1 == null);
var inst_17614 = cljs.core.not(inst_17613);
var state_17644__$1 = (function (){var statearr_17653 = state_17644;
(statearr_17653[(9)] = inst_17612__$1);

return statearr_17653;
})();
if(inst_17614){
var statearr_17654_18480 = state_17644__$1;
(statearr_17654_18480[(1)] = (5));

} else {
var statearr_17655_18481 = state_17644__$1;
(statearr_17655_18481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (15))){
var inst_17634 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17656_18482 = state_17644__$1;
(statearr_17656_18482[(2)] = inst_17634);

(statearr_17656_18482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (13))){
var state_17644__$1 = state_17644;
var statearr_17657_18483 = state_17644__$1;
(statearr_17657_18483[(2)] = null);

(statearr_17657_18483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (6))){
var inst_17609 = (state_17644[(7)]);
var inst_17630 = (inst_17609 > (0));
var state_17644__$1 = state_17644;
if(cljs.core.truth_(inst_17630)){
var statearr_17658_18484 = state_17644__$1;
(statearr_17658_18484[(1)] = (12));

} else {
var statearr_17660_18485 = state_17644__$1;
(statearr_17660_18485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (3))){
var inst_17642 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17644__$1,inst_17642);
} else {
if((state_val_17645 === (12))){
var inst_17608 = (state_17644[(8)]);
var inst_17632 = cljs.core.vec(inst_17608);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17644__$1,(15),out,inst_17632);
} else {
if((state_val_17645 === (2))){
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17644__$1,(4),ch);
} else {
if((state_val_17645 === (11))){
var inst_17624 = (state_17644[(2)]);
var inst_17625 = (new Array(n));
var inst_17608 = inst_17625;
var inst_17609 = (0);
var state_17644__$1 = (function (){var statearr_17661 = state_17644;
(statearr_17661[(10)] = inst_17624);

(statearr_17661[(7)] = inst_17609);

(statearr_17661[(8)] = inst_17608);

return statearr_17661;
})();
var statearr_17662_18487 = state_17644__$1;
(statearr_17662_18487[(2)] = null);

(statearr_17662_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (9))){
var inst_17608 = (state_17644[(8)]);
var inst_17622 = cljs.core.vec(inst_17608);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17644__$1,(11),out,inst_17622);
} else {
if((state_val_17645 === (5))){
var inst_17612 = (state_17644[(9)]);
var inst_17617 = (state_17644[(11)]);
var inst_17609 = (state_17644[(7)]);
var inst_17608 = (state_17644[(8)]);
var inst_17616 = (inst_17608[inst_17609] = inst_17612);
var inst_17617__$1 = (inst_17609 + (1));
var inst_17618 = (inst_17617__$1 < n);
var state_17644__$1 = (function (){var statearr_17663 = state_17644;
(statearr_17663[(12)] = inst_17616);

(statearr_17663[(11)] = inst_17617__$1);

return statearr_17663;
})();
if(cljs.core.truth_(inst_17618)){
var statearr_17665_18490 = state_17644__$1;
(statearr_17665_18490[(1)] = (8));

} else {
var statearr_17666_18491 = state_17644__$1;
(statearr_17666_18491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (14))){
var inst_17637 = (state_17644[(2)]);
var inst_17638 = cljs.core.async.close_BANG_(out);
var state_17644__$1 = (function (){var statearr_17668 = state_17644;
(statearr_17668[(13)] = inst_17637);

return statearr_17668;
})();
var statearr_17669_18493 = state_17644__$1;
(statearr_17669_18493[(2)] = inst_17638);

(statearr_17669_18493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (10))){
var inst_17628 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17670_18494 = state_17644__$1;
(statearr_17670_18494[(2)] = inst_17628);

(statearr_17670_18494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17645 === (8))){
var inst_17617 = (state_17644[(11)]);
var inst_17608 = (state_17644[(8)]);
var tmp17667 = inst_17608;
var inst_17608__$1 = tmp17667;
var inst_17609 = inst_17617;
var state_17644__$1 = (function (){var statearr_17671 = state_17644;
(statearr_17671[(7)] = inst_17609);

(statearr_17671[(8)] = inst_17608__$1);

return statearr_17671;
})();
var statearr_17672_18495 = state_17644__$1;
(statearr_17672_18495[(2)] = null);

(statearr_17672_18495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17673[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17673[(1)] = (1));

return statearr_17673;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17644){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17644);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17675){var ex__14776__auto__ = e17675;
var statearr_17676_18501 = state_17644;
(statearr_17676_18501[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17644[(4)]))){
var statearr_17677_18503 = state_17644;
(statearr_17677_18503[(1)] = cljs.core.first((state_17644[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18504 = state_17644;
state_17644 = G__18504;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17678 = f__15037__auto__();
(statearr_17678[(6)] = c__15036__auto___18473);

return statearr_17678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17681 = arguments.length;
switch (G__17681) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15036__auto___18511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15037__auto__ = (function (){var switch__14772__auto__ = (function (state_17727){
var state_val_17728 = (state_17727[(1)]);
if((state_val_17728 === (7))){
var inst_17723 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17730_18519 = state_17727__$1;
(statearr_17730_18519[(2)] = inst_17723);

(statearr_17730_18519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (1))){
var inst_17683 = [];
var inst_17684 = inst_17683;
var inst_17685 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17727__$1 = (function (){var statearr_17731 = state_17727;
(statearr_17731[(7)] = inst_17685);

(statearr_17731[(8)] = inst_17684);

return statearr_17731;
})();
var statearr_17732_18522 = state_17727__$1;
(statearr_17732_18522[(2)] = null);

(statearr_17732_18522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (4))){
var inst_17688 = (state_17727[(9)]);
var inst_17688__$1 = (state_17727[(2)]);
var inst_17689 = (inst_17688__$1 == null);
var inst_17690 = cljs.core.not(inst_17689);
var state_17727__$1 = (function (){var statearr_17733 = state_17727;
(statearr_17733[(9)] = inst_17688__$1);

return statearr_17733;
})();
if(inst_17690){
var statearr_17734_18525 = state_17727__$1;
(statearr_17734_18525[(1)] = (5));

} else {
var statearr_17735_18528 = state_17727__$1;
(statearr_17735_18528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (15))){
var inst_17684 = (state_17727[(8)]);
var inst_17715 = cljs.core.vec(inst_17684);
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17727__$1,(18),out,inst_17715);
} else {
if((state_val_17728 === (13))){
var inst_17710 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17737_18533 = state_17727__$1;
(statearr_17737_18533[(2)] = inst_17710);

(statearr_17737_18533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (6))){
var inst_17684 = (state_17727[(8)]);
var inst_17712 = inst_17684.length;
var inst_17713 = (inst_17712 > (0));
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17713)){
var statearr_17738_18535 = state_17727__$1;
(statearr_17738_18535[(1)] = (15));

} else {
var statearr_17739_18536 = state_17727__$1;
(statearr_17739_18536[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (17))){
var inst_17720 = (state_17727[(2)]);
var inst_17721 = cljs.core.async.close_BANG_(out);
var state_17727__$1 = (function (){var statearr_17740 = state_17727;
(statearr_17740[(10)] = inst_17720);

return statearr_17740;
})();
var statearr_17741_18542 = state_17727__$1;
(statearr_17741_18542[(2)] = inst_17721);

(statearr_17741_18542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (3))){
var inst_17725 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17727__$1,inst_17725);
} else {
if((state_val_17728 === (12))){
var inst_17684 = (state_17727[(8)]);
var inst_17703 = cljs.core.vec(inst_17684);
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17727__$1,(14),out,inst_17703);
} else {
if((state_val_17728 === (2))){
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17727__$1,(4),ch);
} else {
if((state_val_17728 === (11))){
var inst_17692 = (state_17727[(11)]);
var inst_17684 = (state_17727[(8)]);
var inst_17688 = (state_17727[(9)]);
var inst_17700 = inst_17684.push(inst_17688);
var tmp17742 = inst_17684;
var inst_17684__$1 = tmp17742;
var inst_17685 = inst_17692;
var state_17727__$1 = (function (){var statearr_17744 = state_17727;
(statearr_17744[(7)] = inst_17685);

(statearr_17744[(12)] = inst_17700);

(statearr_17744[(8)] = inst_17684__$1);

return statearr_17744;
})();
var statearr_17745_18569 = state_17727__$1;
(statearr_17745_18569[(2)] = null);

(statearr_17745_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (9))){
var inst_17685 = (state_17727[(7)]);
var inst_17696 = cljs.core.keyword_identical_QMARK_(inst_17685,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17727__$1 = state_17727;
var statearr_17746_18575 = state_17727__$1;
(statearr_17746_18575[(2)] = inst_17696);

(statearr_17746_18575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (5))){
var inst_17685 = (state_17727[(7)]);
var inst_17692 = (state_17727[(11)]);
var inst_17693 = (state_17727[(13)]);
var inst_17688 = (state_17727[(9)]);
var inst_17692__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17688) : f.call(null,inst_17688));
var inst_17693__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17692__$1,inst_17685);
var state_17727__$1 = (function (){var statearr_17747 = state_17727;
(statearr_17747[(11)] = inst_17692__$1);

(statearr_17747[(13)] = inst_17693__$1);

return statearr_17747;
})();
if(inst_17693__$1){
var statearr_17748_18588 = state_17727__$1;
(statearr_17748_18588[(1)] = (8));

} else {
var statearr_17749_18589 = state_17727__$1;
(statearr_17749_18589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (14))){
var inst_17692 = (state_17727[(11)]);
var inst_17688 = (state_17727[(9)]);
var inst_17705 = (state_17727[(2)]);
var inst_17706 = [];
var inst_17707 = inst_17706.push(inst_17688);
var inst_17684 = inst_17706;
var inst_17685 = inst_17692;
var state_17727__$1 = (function (){var statearr_17750 = state_17727;
(statearr_17750[(7)] = inst_17685);

(statearr_17750[(14)] = inst_17707);

(statearr_17750[(15)] = inst_17705);

(statearr_17750[(8)] = inst_17684);

return statearr_17750;
})();
var statearr_17752_18602 = state_17727__$1;
(statearr_17752_18602[(2)] = null);

(statearr_17752_18602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (16))){
var state_17727__$1 = state_17727;
var statearr_17753_18605 = state_17727__$1;
(statearr_17753_18605[(2)] = null);

(statearr_17753_18605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (10))){
var inst_17698 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17698)){
var statearr_17754_18610 = state_17727__$1;
(statearr_17754_18610[(1)] = (11));

} else {
var statearr_17755_18611 = state_17727__$1;
(statearr_17755_18611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (18))){
var inst_17717 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17756_18613 = state_17727__$1;
(statearr_17756_18613[(2)] = inst_17717);

(statearr_17756_18613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (8))){
var inst_17693 = (state_17727[(13)]);
var state_17727__$1 = state_17727;
var statearr_17757_18615 = state_17727__$1;
(statearr_17757_18615[(2)] = inst_17693);

(statearr_17757_18615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14773__auto__ = null;
var cljs$core$async$state_machine__14773__auto____0 = (function (){
var statearr_17759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17759[(0)] = cljs$core$async$state_machine__14773__auto__);

(statearr_17759[(1)] = (1));

return statearr_17759;
});
var cljs$core$async$state_machine__14773__auto____1 = (function (state_17727){
while(true){
var ret_value__14774__auto__ = (function (){try{while(true){
var result__14775__auto__ = switch__14772__auto__(state_17727);
if(cljs.core.keyword_identical_QMARK_(result__14775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14775__auto__;
}
break;
}
}catch (e17760){var ex__14776__auto__ = e17760;
var statearr_17761_18619 = state_17727;
(statearr_17761_18619[(2)] = ex__14776__auto__);


if(cljs.core.seq((state_17727[(4)]))){
var statearr_17762_18622 = state_17727;
(statearr_17762_18622[(1)] = cljs.core.first((state_17727[(4)])));

} else {
throw ex__14776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18624 = state_17727;
state_17727 = G__18624;
continue;
} else {
return ret_value__14774__auto__;
}
break;
}
});
cljs$core$async$state_machine__14773__auto__ = function(state_17727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14773__auto____1.call(this,state_17727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14773__auto____0;
cljs$core$async$state_machine__14773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14773__auto____1;
return cljs$core$async$state_machine__14773__auto__;
})()
})();
var state__15038__auto__ = (function (){var statearr_17764 = f__15037__auto__();
(statearr_17764[(6)] = c__15036__auto___18511);

return statearr_17764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15038__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
