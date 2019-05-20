(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}var author$project$Card$styles = '\n    @keyframes contextCardsFadeIn {\n        from {\n            opacity: 0;\n            transform: translate3d(0, 50%, 0);\n        }\n\n        to {\n            opacity: 1;\n            transform: translate3d(0, 0, 0);\n        }\n    }\n    @keyframes contextCardsFadeOut {\n        from {\n            opacity: 1;\n            transform: translate3d(0, 0, 0);\n        }\n\n        to {\n            opacity: 0;\n            transform: translate3d(0, 50%, 0);\n        }\n    }\n    .ContextCard, .ContextCard * {\n        box-sizing: border-box;\n    }\n\n    .ContextCard {\n        position: absolute;\n        z-index: 10000;\n        background-color: white;\n        box-shadow: 0 30px 90px -20px rgba( 0, 0, 0, 0.3 ), 0 0 1px #a2a9b1;\n        animation-name: contextCardsFadeIn;\n        animation-duration: 300ms;\n        animation-fill-mode: both;\n        border-radius: 2px;\n        overflow: hidden;\n    }\n    .ContextCard.ContextCardDismissed {\n        animation-name: contextCardsFadeOut;\n        pointer-events: none;\n    }\n    .ContextCardLogo {\n        height: 15px;\n    }\n    .ContextCardSummary {\n        display: flex;\n    }\n    .ContextCardExtract {\n        padding: 1em;\n        overflow: hidden;\n        position: relative;\n        font-size: 14px;\n        line-height: 1.4;\n    }\n    .ContextCardExtract p {\n        margin: 0.4em 0;\n    }\n    .ContextCardExtract:before, .ContextCardExtract:after {\n        content: \'\';\n        display: block;\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%), linear-gradient(to bottom right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);\n        position: absolute;\n        bottom: 0px;\n        left: 1px;\n        right: 1px;\n        height: 3em;\n    }\n    .ContextCardThumbnail {\n        flex-shrink: 0;\n        background-position: center center;\n        background-size: 110%;\n        box-shadow: 0 0 1px #a2a9b1;\n    }\n    ';
var author$project$Data$LTR = {$: 'LTR'};
var author$project$Data$RTL = {$: 'RTL'};
var author$project$UiTests$ezraPound = '{"type":"standard","title":"Ezra Pound","displaytitle":"Ezra Pound","namespace":{"id":0,"text":""},"wikibase_item":"Q163366","titles":{"canonical":"Ezra_Pound","normalized":"Ezra Pound","display":"Ezra Pound"},"pageid":44203,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lustra_%28private_print%29_-_Ezra_Pound_-_Frontispiece.jpg/247px-Lustra_%28private_print%29_-_Ezra_Pound_-_Frontispiece.jpg","width":247,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/6/66/Lustra_%28private_print%29_-_Ezra_Pound_-_Frontispiece.jpg","width":1816,"height":2354},"lang":"en","dir":"ltr","revision":"894790083","tid":"23444730-775a-11e9-abf2-9a9f3bb9b478","timestamp":"2019-04-30T01:23:18Z","description":"American poet and critic","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Ezra_Pound","revisions":"https://en.wikipedia.org/wiki/Ezra_Pound?action=history","edit":"https://en.wikipedia.org/wiki/Ezra_Pound?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Ezra_Pound"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Ezra_Pound","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Ezra_Pound","edit":"https://en.m.wikipedia.org/wiki/Ezra_Pound?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Ezra_Pound"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Ezra_Pound","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Ezra_Pound","references":"https://en.wikipedia.org/api/rest_v1/page/references/Ezra_Pound","media":"https://en.wikipedia.org/api/rest_v1/page/media/Ezra_Pound","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Ezra_Pound","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Ezra_Pound"},"extract":"Ezra Weston Loomis Pound was an expatriate American poet and critic, and a major figure in the early modernist poetry movement. His contribution to poetry began with his development of Imagism, a movement derived from classical Chinese and Japanese poetry, stressing clarity, precision and economy of language. His works include Ripostes (1912), Hugh Selwyn Mauberley (1920) and the unfinished 120-section epic, The Cantos (1917–1969).","extract_html":"<p><b>Ezra Weston Loomis Pound</b> was an expatriate American poet and critic, and a major figure in the early modernist poetry movement. His contribution to poetry began with his development of Imagism, a movement derived from classical Chinese and Japanese poetry, stressing clarity, precision and economy of language. His works include <i>Ripostes</i> (1912), <i>Hugh Selwyn Mauberley</i> (1920) and the unfinished 120-section epic, <i>The Cantos</i> (1917–1969).</p>"}';
var author$project$UiTests$heWiki1 = '{"type":"standard","title":"פרהיסטוריה","displaytitle":"פרהיסטוריה","namespace":{"id":0,"text":""},"wikibase_item":"Q11756","titles":{"canonical":"פרהיסטוריה","normalized":"פרהיסטוריה","display":"פרהיסטוריה"},"pageid":502723,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/320px-Stonehenge2007_07_30.jpg","width":320,"height":240},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg","width":2816,"height":2112},"lang":"he","dir":"rtl","revision":"25264157","tid":"9a686330-71c1-11e9-b5da-d46876899b7b","timestamp":"2019-04-10T11:37:20Z","description":"התקופה הקדומה","content_urls":{"desktop":{"page":"https://he.wikipedia.org/wiki/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","revisions":"https://he.wikipedia.org/wiki/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94?action=history","edit":"https://he.wikipedia.org/wiki/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94?action=edit","talk":"https://he.wikipedia.org/wiki/%D7%A9%D7%99%D7%97%D7%94:%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94"},"mobile":{"page":"https://he.m.wikipedia.org/wiki/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","revisions":"https://he.m.wikipedia.org/wiki/Special:History/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","edit":"https://he.m.wikipedia.org/wiki/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94?action=edit","talk":"https://he.m.wikipedia.org/wiki/%D7%A9%D7%99%D7%97%D7%94:%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94"}},"api_urls":{"summary":"https://he.wikipedia.org/api/rest_v1/page/summary/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","metadata":"https://he.wikipedia.org/api/rest_v1/page/metadata/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","references":"https://he.wikipedia.org/api/rest_v1/page/references/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","media":"https://he.wikipedia.org/api/rest_v1/page/media/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","edit_html":"https://he.wikipedia.org/api/rest_v1/page/html/%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94","talk_page_html":"https://he.wikipedia.org/api/rest_v1/page/html/%D7%A9%D7%99%D7%97%D7%94:%D7%A4%D7%A8%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94"},"extract":"פרהיסטוריה מלטינית præ (לפני) ומיוונית Iστορία (היסטוריה), היא התקופה בתולדות האנושות שקדמה להיסטוריה, דהיינו להופעת התעודות הכתובות. התקופה הפרהיסטורית מתחילה עם הופעת הסוג אדם באפריקה, לפני כשניים וחצי מיליוני שנים, ומסתיימת לפני כמה אלפי עד מאות שנים, כאשר החל השימוש בכתב. לפיכך, התקופה הפרהיסטורית מכסה את הרוב המכריע של תולדות האנושות, ממנו אין כל תיעוד כתוב. מקור המידע החשוב ביותר על התקופה הוא ממצאים ארכאולוגיים, בעיקר כלים, שרידי מבנים ואשפת מזון של האדם, וכן שרידי שלד מאובנים של האדם עצמו.","extract_html":"<p><b>פרהיסטוריה</b> מלטינית præ (לפני) ומיוונית Iστορία (היסטוריה), היא התקופה בתולדות האנושות שקדמה להיסטוריה, דהיינו להופעת התעודות הכתובות. התקופה הפרהיסטורית מתחילה עם הופעת הסוג אדם באפריקה, לפני כשניים וחצי מיליוני שנים, ומסתיימת לפני כמה אלפי עד מאות שנים, כאשר החל השימוש בכתב. לפיכך, התקופה הפרהיסטורית מכסה את הרוב המכריע של תולדות האנושות, ממנו אין כל תיעוד כתוב. מקור המידע החשוב ביותר על התקופה הוא ממצאים ארכאולוגיים, בעיקר כלים, שרידי מבנים ואשפת מזון של האדם, וכן שרידי שלד מאובנים של האדם עצמו.</p>"}';
var author$project$UiTests$linkDimensions = {height: 24.0, width: 150.0};
var author$project$Data$Summary = F6(
	function (title, displayTitle, contentHtml, contentText, thumbnail, dir) {
		return {contentHtml: contentHtml, contentText: contentText, dir: dir, displayTitle: displayTitle, thumbnail: thumbnail, title: title};
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var author$project$Data$dirFromString = function (dir) {
	switch (dir) {
		case 'ltr':
			return elm$core$Maybe$Just(author$project$Data$LTR);
		case 'rtl':
			return elm$core$Maybe$Just(author$project$Data$RTL);
		default:
			return elm$core$Maybe$Nothing;
	}
};
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$append = _Utils_append;
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Data$decodeDir = A2(
	elm$json$Json$Decode$andThen,
	function (str) {
		return A2(
			elm$core$Maybe$withDefault,
			elm$json$Json$Decode$fail('Unknown language direction: ' + str),
			A2(
				elm$core$Maybe$map,
				elm$json$Json$Decode$succeed,
				author$project$Data$dirFromString(str)));
	},
	elm$json$Json$Decode$string);
var author$project$Data$Thumbnail = F3(
	function (source, width, height) {
		return {height: height, source: source, width: width};
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$float = _Json_decodeFloat;
var elm$json$Json$Decode$map3 = _Json_map3;
var author$project$Data$decodeThumbnail = A4(
	elm$json$Json$Decode$map3,
	author$project$Data$Thumbnail,
	A2(elm$json$Json$Decode$field, 'source', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'width', elm$json$Json$Decode$float),
	A2(elm$json$Json$Decode$field, 'height', elm$json$Json$Decode$float));
var elm$json$Json$Decode$map6 = _Json_map6;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$maybe = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder),
				elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing)
			]));
};
var author$project$Data$decodeSummary = A7(
	elm$json$Json$Decode$map6,
	author$project$Data$Summary,
	A2(elm$json$Json$Decode$field, 'title', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'displaytitle', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'extract_html', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'extract', elm$json$Json$Decode$string),
	elm$json$Json$Decode$maybe(
		A2(elm$json$Json$Decode$field, 'thumbnail', author$project$Data$decodeThumbnail)),
	A2(elm$json$Json$Decode$field, 'dir', author$project$Data$decodeDir));
var author$project$UiTests$testViewport = {height: 600.0, width: 800.0};
var author$project$UiTests$viewportHeight = author$project$UiTests$testViewport.height + 75;
var elm$core$Debug$log = _Debug_log;
var elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return elm$core$Maybe$Just(v);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$json$Json$Encode$int = _Json_wrap;
var author$project$UiTests$processCards = elm$core$List$indexedMap(
	F2(
		function (i, _n0) {
			var title = _n0.a;
			var partialLink = _n0.b;
			var summary = _n0.c;
			var viewport = {h: author$project$UiTests$testViewport.height, w: author$project$UiTests$testViewport.width, x: 0.0, y: (i * author$project$UiTests$viewportHeight) + 50};
			return _Utils_Tuple2(
				title,
				_Utils_Tuple3(
					{
						contentDir: partialLink.contentDir,
						domElement: elm$json$Json$Encode$int(i),
						lang: partialLink.lang,
						rect: {bottom: (viewport.y + viewport.h) - ((viewport.y + partialLink.linkPos.y) + author$project$UiTests$linkDimensions.height), height: author$project$UiTests$linkDimensions.height, left: partialLink.linkPos.x, right: (viewport.x + viewport.w) - ((viewport.x + partialLink.linkPos.x) + author$project$UiTests$linkDimensions.width), top: partialLink.linkPos.y, width: author$project$UiTests$linkDimensions.width, x: partialLink.linkPos.x, y: partialLink.linkPos.y},
						title: partialLink.title,
						viewport: {
							scene: {height: 10000, width: 1000},
							viewport: {height: viewport.h, width: viewport.w, x: viewport.x, y: viewport.y}
						}
					},
					elm$core$Result$toMaybe(
						A2(
							elm$core$Debug$log,
							'summary',
							A2(elm$json$Json$Decode$decodeString, author$project$Data$decodeSummary, summary))),
					false));
		}));
var author$project$UiTests$vorticist = '{"type":"standard","title":"Vorticism","displaytitle":"Vorticism","namespace":{"id":0,"text":""},"wikibase_item":"Q915841","titles":{"canonical":"Vorticism","normalized":"Vorticism","display":"Vorticism"},"pageid":160743,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Bomberg%2C_The_Mud_Bath.jpg/320px-Bomberg%2C_The_Mud_Bath.jpg","width":320,"height":214},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/en/5/50/Bomberg%2C_The_Mud_Bath.jpg","width":512,"height":343},"lang":"en","dir":"ltr","revision":"879410514","tid":"16d72400-7498-11e9-ac14-70af3b55a658","timestamp":"2019-01-21T01:58:54Z","description":"short-lived modernist movement in British art and poetry of the early 20th century","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Vorticism","revisions":"https://en.wikipedia.org/wiki/Vorticism?action=history","edit":"https://en.wikipedia.org/wiki/Vorticism?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Vorticism"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Vorticism","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Vorticism","edit":"https://en.m.wikipedia.org/wiki/Vorticism?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Vorticism"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Vorticism","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Vorticism","references":"https://en.wikipedia.org/api/rest_v1/page/references/Vorticism","media":"https://en.wikipedia.org/api/rest_v1/page/media/Vorticism","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Vorticism","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Vorticism"},"extract":"Vorticism was a short-lived modernist movement in British art and poetry of the early 20th century, partly inspired by Cubism. The movement was announced in 1914 in the first issue of BLAST, which contained its manifesto and the movement\'s rejection of landscape and nudes in favour of a geometric style tending towards abstraction. Ultimately, it was their witnessing of unfolding human disaster in World War I that \\"drained these artists of their Vorticist zeal\\". Vorticism was based in London but was international in make-up and ambition.","extract_html":"<p><b>Vorticism</b> was a short-lived modernist movement in British art and poetry of the early 20th century, partly inspired by Cubism. The movement was announced in 1914 in the first issue of <i>BLAST</i>, which contained its manifesto and the movement\'s rejection of landscape and nudes in favour of a geometric style tending towards abstraction. Ultimately, it was their witnessing of unfolding human disaster in World War I that \\"drained these artists of their Vorticist zeal\\". Vorticism was based in London but was international in make-up and ambition.</p>"}';
var author$project$UiTests$cards = author$project$UiTests$processCards(
	_List_fromArray(
		[
			_Utils_Tuple3(
			'LANDSCAPE',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Vorticist'
			},
			author$project$UiTests$vorticist),
			_Utils_Tuple3(
			'COLLISION RIGHT',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: (author$project$UiTests$testViewport.width - author$project$UiTests$linkDimensions.width) - (25 * 2), y: 25},
				title: 'Vorticist'
			},
			author$project$UiTests$vorticist),
			_Utils_Tuple3(
			'RTL CONTENT, LTR POPUP',
			{
				contentDir: author$project$Data$RTL,
				lang: 'en',
				linkPos: {x: (author$project$UiTests$testViewport.width - author$project$UiTests$linkDimensions.width) - 25, y: 25},
				title: 'Vorticist'
			},
			author$project$UiTests$vorticist),
			_Utils_Tuple3(
			'RTL CONTENT COLLISION LEFT',
			{
				contentDir: author$project$Data$RTL,
				lang: 'en',
				linkPos: {x: 25 * 2, y: 25},
				title: 'Vorticist'
			},
			author$project$UiTests$vorticist),
			_Utils_Tuple3(
			'LTR CONTENT, RTL POPUP',
			{
				contentDir: author$project$Data$LTR,
				lang: 'he',
				linkPos: {x: 25, y: 25},
				title: 'פרהיסטוריה'
			},
			author$project$UiTests$heWiki1),
			_Utils_Tuple3(
			'RTL CONTENT, RTL POPUP',
			{
				contentDir: author$project$Data$LTR,
				lang: 'he',
				linkPos: {x: (author$project$UiTests$testViewport.width - author$project$UiTests$linkDimensions.width) - 25, y: 25},
				title: 'פרהיסטוריה'
			},
			author$project$UiTests$heWiki1),
			_Utils_Tuple3(
			'THIN IMAGE',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Ezra Pound'
			},
			author$project$UiTests$ezraPound),
			_Utils_Tuple3(
			'THUMBNAIL_PORTRAIT',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'South Georgia Island'
			},
			'{"type":"standard","title":"South Georgia Island","displaytitle":"South Georgia Island","namespace":{"id":0,"text":""},"wikibase_item":"Q1137202","titles":{"canonical":"South_Georgia_Island","normalized":"South Georgia Island","display":"South Georgia Island"},"pageid":525307,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thatcher-Peninsula.jpg/320px-Thatcher-Peninsula.jpg","width":320,"height":240},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/f/f5/Thatcher-Peninsula.jpg","width":1000,"height":750},"lang":"en","dir":"ltr","revision":"887884250","tid":"573a06c0-684a-11e9-8037-409dc01d92c1","timestamp":"2019-03-15T13:17:05Z","description":"Island in the South Atlantic","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/South_Georgia_Island","revisions":"https://en.wikipedia.org/wiki/South_Georgia_Island?action=history","edit":"https://en.wikipedia.org/wiki/South_Georgia_Island?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:South_Georgia_Island"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/South_Georgia_Island","revisions":"https://en.m.wikipedia.org/wiki/Special:History/South_Georgia_Island","edit":"https://en.m.wikipedia.org/wiki/South_Georgia_Island?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:South_Georgia_Island"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/South_Georgia_Island","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/South_Georgia_Island","references":"https://en.wikipedia.org/api/rest_v1/page/references/South_Georgia_Island","media":"https://en.wikipedia.org/api/rest_v1/page/media/South_Georgia_Island","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/South_Georgia_Island","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:South_Georgia_Island"},"extract":"South Georgia is an island in the southern Atlantic Ocean that is part of the British Overseas territory of South Georgia and the South Sandwich Islands. The main settlement is Grytviken. South Georgia is 167.4 kilometres (104\u00a0mi) long and 1.4 to 37\u00a0km wide. It is about 830\u00a0km (520\u00a0mi) northeast of Coronation Island and 550\u00a0km (340\u00a0mi) northwest from Zavodovski Island, the nearest South Sandwich island.","extract_html":"<p><b>South Georgia</b> is an island in the southern Atlantic Ocean that is part of the British Overseas territory of South Georgia and the South Sandwich Islands. The main settlement is Grytviken. South Georgia is 167.4 kilometres (104\u00a0mi) long and 1.4 to 37\u00a0km wide. It is about 830\u00a0km (520\u00a0mi) northeast of Coronation Island and 550\u00a0km (340\u00a0mi) northwest from Zavodovski Island, the nearest South Sandwich island.</p>"}'),
			_Utils_Tuple3(
			'THUMBNAIL_LANDSCAPE',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Atlantic Ocean'
			},
			'{"type":"standard","title":"Atlantic Ocean","displaytitle":"Atlantic Ocean","namespace":{"id":0,"text":""},"wikibase_item":"Q97","titles":{"canonical":"Atlantic_Ocean","normalized":"Atlantic Ocean","display":"Atlantic Ocean"},"pageid":698,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Atlantic_Ocean_location_map.svg/271px-Atlantic_Ocean_location_map.svg.png","width":271,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/1/1b/Atlantic_Ocean_location_map.svg","width":714,"height":842},"lang":"en","dir":"ltr","revision":"896273230","tid":"e08ed5a0-7253-11e9-802e-b11fb4a5ca9a","timestamp":"2019-05-09T12:13:16Z","description":"Ocean between Europe, Africa and the Americas","coordinates":{"lat":0,"lon":-25},"content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Atlantic_Ocean","revisions":"https://en.wikipedia.org/wiki/Atlantic_Ocean?action=history","edit":"https://en.wikipedia.org/wiki/Atlantic_Ocean?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Atlantic_Ocean"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Atlantic_Ocean","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Atlantic_Ocean","edit":"https://en.m.wikipedia.org/wiki/Atlantic_Ocean?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Atlantic_Ocean"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Atlantic_Ocean","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Atlantic_Ocean","references":"https://en.wikipedia.org/api/rest_v1/page/references/Atlantic_Ocean","media":"https://en.wikipedia.org/api/rest_v1/page/media/Atlantic_Ocean","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Atlantic_Ocean","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Atlantic_Ocean"},"extract":"The Atlantic Ocean is the second largest of the world\'s oceans, with an area of about 106,460,000 square kilometers. It covers approximately 20 percent of the Earth\'s surface and about 29 percent of its water surface area. It separates the \\"Old World\\" from the \\"New World\\".","extract_html":"<p>The <b>Atlantic Ocean</b> is the second largest of the world\'s oceans, with an area of about 106,460,000 square kilometers. It covers approximately 20 percent of the Earth\'s surface and about 29 percent of its water surface area. It separates the \\"Old World\\" from the \\"New World\\".</p>"}'),
			_Utils_Tuple3(
			'SVG_PORTRAIT',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'South Georgia and the South Sandwich Islands'
			},
			'{"type":"standard","title":"South Georgia and the South Sandwich Islands","displaytitle":"South Georgia and the South Sandwich Islands","namespace":{"id":0,"text":""},"wikibase_item":"Q35086","titles":{"canonical":"South_Georgia_and_the_South_Sandwich_Islands","normalized":"South Georgia and the South Sandwich Islands","display":"South Georgia and the South Sandwich Islands"},"pageid":27380,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/320px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png","width":320,"height":160},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg","width":750,"height":375},"lang":"en","dir":"ltr","revision":"896314551","tid":"826678f0-7755-11e9-b75a-6e9b063dd81d","timestamp":"2019-05-09T17:26:05Z","description":"British overseas territory in the Southern Atlantic Ocean","coordinates":{"lat":-54.25,"lon":-36.75},"content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands","revisions":"https://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands?action=history","edit":"https://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:South_Georgia_and_the_South_Sandwich_Islands"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands","revisions":"https://en.m.wikipedia.org/wiki/Special:History/South_Georgia_and_the_South_Sandwich_Islands","edit":"https://en.m.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:South_Georgia_and_the_South_Sandwich_Islands"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/South_Georgia_and_the_South_Sandwich_Islands","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/South_Georgia_and_the_South_Sandwich_Islands","references":"https://en.wikipedia.org/api/rest_v1/page/references/South_Georgia_and_the_South_Sandwich_Islands","media":"https://en.wikipedia.org/api/rest_v1/page/media/South_Georgia_and_the_South_Sandwich_Islands","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/South_Georgia_and_the_South_Sandwich_Islands","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:South_Georgia_and_the_South_Sandwich_Islands"},"extract":"South Georgia and the South Sandwich Islands (SGSSI) is a British Overseas Territory in the southern Atlantic Ocean. It is a remote and inhospitable collection of islands, consisting of South Georgia and a chain of smaller islands known as the South Sandwich Islands. South Georgia is 165 kilometres (103\u00a0mi) long and 35 kilometres (22\u00a0mi) wide and is by far the largest island in the territory. The South Sandwich Islands lie about 700 kilometres (430\u00a0mi) southeast of South Georgia. The territory\'s total land area is 3,903\u00a0km2 (1,507\u00a0sq\u00a0mi). The Falkland Islands are about 1,300 kilometres (810\u00a0mi) north-west from its nearest point.","extract_html":"<p><b>South Georgia and the South Sandwich Islands</b> (SGSSI) is a British Overseas Territory in the southern Atlantic Ocean. It is a remote and inhospitable collection of islands, consisting of South Georgia and a chain of smaller islands known as the South Sandwich Islands. South Georgia is 165 kilometres (103\u00a0mi) long and 35 kilometres (22\u00a0mi) wide and is by far the largest island in the territory. The South Sandwich Islands lie about 700 kilometres (430\u00a0mi) southeast of South Georgia. The territory\'s total land area is 3,903\u00a0km<sup>2</sup> (1,507\u00a0sq\u00a0mi). The Falkland Islands are about 1,300 kilometres (810\u00a0mi) north-west from its nearest point.</p>"}'),
			_Utils_Tuple3(
			'SVG_LANDSCAPE',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Foreign relations of Transnistria'
			},
			'{"type":"standard","title":"Foreign relations of Transnistria","displaytitle":"Foreign relations of Transnistria","namespace":{"id":0,"text":""},"wikibase_item":"Q4113721","titles":{"canonical":"Foreign_relations_of_Transnistria","normalized":"Foreign relations of Transnistria","display":"Foreign relations of Transnistria"},"pageid":11971493,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Transnistria.svg/297px-Coat_of_arms_of_Transnistria.svg.png","width":297,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/8/81/Coat_of_arms_of_Transnistria.svg","width":383,"height":413},"lang":"en","dir":"ltr","revision":"868166293","tid":"cd206e60-5e9a-11e9-88d4-6e6e5bf0566a","timestamp":"2018-11-10T12:15:37Z","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Foreign_relations_of_Transnistria","revisions":"https://en.wikipedia.org/wiki/Foreign_relations_of_Transnistria?action=history","edit":"https://en.wikipedia.org/wiki/Foreign_relations_of_Transnistria?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Foreign_relations_of_Transnistria"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Foreign_relations_of_Transnistria","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Foreign_relations_of_Transnistria","edit":"https://en.m.wikipedia.org/wiki/Foreign_relations_of_Transnistria?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Foreign_relations_of_Transnistria"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Foreign_relations_of_Transnistria","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Foreign_relations_of_Transnistria","references":"https://en.wikipedia.org/api/rest_v1/page/references/Foreign_relations_of_Transnistria","media":"https://en.wikipedia.org/api/rest_v1/page/media/Foreign_relations_of_Transnistria","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Foreign_relations_of_Transnistria","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Foreign_relations_of_Transnistria"},"extract":"The Transnistrian republic is recognized by three states with limited recognition, and is a member of one international organization, the Community for Democracy and Human Rights, that was established by these four states.","extract_html":"<p>The Transnistrian republic is recognized by three states with limited recognition, and is a member of one international organization, the Community for Democracy and Human Rights, that was established by these four states.</p>"}'),
			_Utils_Tuple3(
			'THIN_THUMBNAIL',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'The Barker'
			},
			'{"type":"standard","title":"The Barker","displaytitle":"<i>The Barker</i>","namespace":{"id":0,"text":""},"wikibase_item":"Q509649","titles":{"canonical":"The_Barker","normalized":"The Barker","display":"<i>The Barker</i>"},"pageid":172025,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Barker_poster.jpg/129px-Barker_poster.jpg","width":129,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/en/3/3a/Barker_poster.jpg","width":802,"height":1990},"lang":"en","dir":"ltr","revision":"875913716","tid":"fc205620-72dc-11e9-850a-db19e9e8a73b","timestamp":"2018-12-29T21:45:27Z","description":"1928 film by George Fitzmaurice","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/The_Barker","revisions":"https://en.wikipedia.org/wiki/The_Barker?action=history","edit":"https://en.wikipedia.org/wiki/The_Barker?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:The_Barker"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/The_Barker","revisions":"https://en.m.wikipedia.org/wiki/Special:History/The_Barker","edit":"https://en.m.wikipedia.org/wiki/The_Barker?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:The_Barker"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/The_Barker","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/The_Barker","references":"https://en.wikipedia.org/api/rest_v1/page/references/The_Barker","media":"https://en.wikipedia.org/api/rest_v1/page/media/The_Barker","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/The_Barker","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:The_Barker"},"extract":"The Barker is a 1928 part-talkie pre-Code romantic drama film produced and released by First National Pictures, a subsidiary of Warner Bros., acquired in September 1928. The film was directed by George Fitzmaurice and stars Milton Sills, Dorothy Mackaill, Betty Compson, and Douglas Fairbanks Jr..","extract_html":"<p><i><b>The Barker</b></i> is a 1928 part-talkie pre-Code romantic drama film produced and released by First National Pictures, a subsidiary of Warner Bros., acquired in September 1928. The film was directed by George Fitzmaurice and stars Milton Sills, Dorothy Mackaill, Betty Compson, and Douglas Fairbanks Jr..</p>"}'),
			_Utils_Tuple3(
			'THUMBNAIL_DIVIDER',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Japan'
			},
			'{"type":"standard","title":"Japan","displaytitle":"Japan","namespace":{"id":0,"text":""},"wikibase_item":"Q17","titles":{"canonical":"Japan","normalized":"Japan","display":"Japan"},"pageid":15573,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png","width":320,"height":213},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg","width":900,"height":600},"lang":"en","dir":"ltr","revision":"897563378","tid":"d68ad060-78eb-11e9-8798-f087b34b0bf7","timestamp":"2019-05-17T21:35:31Z","description":"Country in East Asia","coordinates":{"lat":35,"lon":136},"content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Japan","revisions":"https://en.wikipedia.org/wiki/Japan?action=history","edit":"https://en.wikipedia.org/wiki/Japan?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Japan"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Japan","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Japan","edit":"https://en.m.wikipedia.org/wiki/Japan?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Japan"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Japan","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Japan","references":"https://en.wikipedia.org/api/rest_v1/page/references/Japan","media":"https://en.wikipedia.org/api/rest_v1/page/media/Japan","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Japan","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Japan"},"extract":"Japan is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.","extract_html":"<p><b>Japan</b> is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.</p>"}'),
			_Utils_Tuple3(
			'LONG_WORD_1',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Pneumonoultramicroscopicsilicovolcanoconiosis'
			},
			'{"type":"standard","title":"Pneumonoultramicroscopicsilicovolcanoconiosis","displaytitle":"Pneumonoultramicroscopicsilicovolcanoconiosis","namespace":{"id":0,"text":""},"wikibase_item":"Q102","titles":{"canonical":"Pneumonoultramicroscopicsilicovolcanoconiosis","normalized":"Pneumonoultramicroscopicsilicovolcanoconiosis","display":"Pneumonoultramicroscopicsilicovolcanoconiosis"},"pageid":387219,"lang":"en","dir":"ltr","revision":"897396764","tid":"18ff71a0-780e-11e9-a865-babb3fed29b1","timestamp":"2019-05-16T19:09:08Z","description":"Longest word in the English language published in a dictionary","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis","revisions":"https://en.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis?action=history","edit":"https://en.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Pneumonoultramicroscopicsilicovolcanoconiosis"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Pneumonoultramicroscopicsilicovolcanoconiosis","edit":"https://en.m.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Pneumonoultramicroscopicsilicovolcanoconiosis"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Pneumonoultramicroscopicsilicovolcanoconiosis","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Pneumonoultramicroscopicsilicovolcanoconiosis","references":"https://en.wikipedia.org/api/rest_v1/page/references/Pneumonoultramicroscopicsilicovolcanoconiosis","media":"https://en.wikipedia.org/api/rest_v1/page/media/Pneumonoultramicroscopicsilicovolcanoconiosis","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Pneumonoultramicroscopicsilicovolcanoconiosis","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Pneumonoultramicroscopicsilicovolcanoconiosis"},"extract":"\\nPneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers\' League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as \\"an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust.\\"","extract_html":"<p>\\n<i><b>Pneumonoultramicroscopicsilicovolcanoconiosis</b></i> is a word coined by the president of the National Puzzlers\' League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the <i>Oxford English Dictionary</i>, which defines it as \\"an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust.\\"</p>"}'),
			_Utils_Tuple3(
			'LONG_WORD_2',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft'
			},
			'{"type":"standard","title":"Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft","displaytitle":"Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft","namespace":{"id":0,"text":""},"wikibase_item":"Q20167","titles":{"canonical":"Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft","normalized":"Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft","display":"Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft"},"pageid":2201357,"lang":"en","dir":"ltr","revision":"894061345","tid":"4e676d80-674b-11e9-a4d8-d9a5419d31b0","timestamp":"2019-04-25T11:14:29Z","description":"arguably the longest German word","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","revisions":"https://en.wikipedia.org/wiki/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft?action=history","edit":"https://en.wikipedia.org/wiki/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","edit":"https://en.m.wikipedia.org/wiki/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","references":"https://en.wikipedia.org/api/rest_v1/page/references/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","media":"https://en.wikipedia.org/api/rest_v1/page/media/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Donaudampfschiffahrtselektrizit%C3%A4tenhauptbetriebswerkbauunterbeamtengesellschaft"},"extract":"Donau\u00addampf\u00adschiffahrts\u00adelektrizitäten\u00adhaupt\u00adbetriebs\u00adwerk\u00adbau\u00adunter\u00adbeamten\u00adgesellschaft or Donau\u00addampf\u00adschifffahrts\u00adelektrizitäten\u00adhaupt\u00adbetriebs\u00adwerk\u00adbau\u00adunter\u00adbeamten\u00adgesellschaft was an alleged suborganization of the Donaudampfschiffahrtsgesellschaft (DDSG) in pre-World War I Vienna, Austria, a shipping company for transporting passengers and cargo on the Danube. The DDSG still exists today in the form of the now-private companies DDSG-Blue Danube Schifffahrt GmbH and the DDSG-Cargo GmbH. However, there is no evidence that Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft ever existed.","extract_html":"<p><b><i lang=\\"de\\" title=\\"German language text\\">Donau\u00addampf\u00adschiffahrts\u00adelektrizitäten\u00adhaupt\u00adbetriebs\u00adwerk\u00adbau\u00adunter\u00adbeamten\u00adgesellschaft</i></b> or <b><i lang=\\"de\\" title=\\"German language text\\">Donau\u00addampf\u00adschifffahrts\u00adelektrizitäten\u00adhaupt\u00adbetriebs\u00adwerk\u00adbau\u00adunter\u00adbeamten\u00adgesellschaft</i></b> was an alleged suborganization of the Donaudampfschiffahrtsgesellschaft (DDSG) in pre-World War I Vienna, Austria, a shipping company for transporting passengers and cargo on the Danube. The DDSG still exists today in the form of the now-private companies DDSG-Blue Danube Schifffahrt GmbH and the DDSG-Cargo GmbH. However, there is no evidence that Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft ever existed.</p>"}'),
			_Utils_Tuple3(
			'LONG_WORD_THUMB',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Llanfairpwllgwyngyll'
			},
			'{"type":"standard","title":"Llanfairpwllgwyngyll","displaytitle":"Llanfairpwllgwyngyll","namespace":{"id":0,"text":""},"wikibase_item":"Q322","titles":{"canonical":"Llanfairpwllgwyngyll","normalized":"Llanfairpwllgwyngyll","display":"Llanfairpwllgwyngyll"},"pageid":23939707,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Llanfair_Pwllgwyngyll_roofscape_%281%29_-_geograph.org.uk_-_1058331.jpg/320px-Llanfair_Pwllgwyngyll_roofscape_%281%29_-_geograph.org.uk_-_1058331.jpg","width":320,"height":240},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/d/dd/Llanfair_Pwllgwyngyll_roofscape_%281%29_-_geograph.org.uk_-_1058331.jpg","width":640,"height":480},"lang":"en","dir":"ltr","revision":"897397149","tid":"911c7f70-780e-11e9-9b38-a48c1d7060d6","timestamp":"2019-05-16T19:12:29Z","description":"village","coordinates":{"lat":53.2232,"lon":-4.2008},"content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Llanfairpwllgwyngyll","revisions":"https://en.wikipedia.org/wiki/Llanfairpwllgwyngyll?action=history","edit":"https://en.wikipedia.org/wiki/Llanfairpwllgwyngyll?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Llanfairpwllgwyngyll"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Llanfairpwllgwyngyll","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Llanfairpwllgwyngyll","edit":"https://en.m.wikipedia.org/wiki/Llanfairpwllgwyngyll?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Llanfairpwllgwyngyll"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Llanfairpwllgwyngyll","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Llanfairpwllgwyngyll","references":"https://en.wikipedia.org/api/rest_v1/page/references/Llanfairpwllgwyngyll","media":"https://en.wikipedia.org/api/rest_v1/page/media/Llanfairpwllgwyngyll","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Llanfairpwllgwyngyll","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Llanfairpwllgwyngyll"},"extract":"Llanfairpwllgwyngyll or Llanfair Pwllgwyngyll is a large village and local government community on the island of Anglesey in Wales. It is situated on the Menai Strait next to the Britannia Bridge and across the strait from Bangor. Both shortened and lengthened (Llanfair\u00adpwllgwyngyll\u00adgogery\u00adchwyrn\u00addrobwll\u00adllan\u00adtysilio\u00adgogo\u00adgoch) forms of the placename are used in various contexts.","extract_html":"<p><b>Llanfairpwllgwyngyll</b> or <b>Llanfair Pwllgwyngyll</b> is a large village and local government community on the island of Anglesey in Wales. It is situated on the Menai Strait next to the Britannia Bridge and across the strait from Bangor. Both shortened and lengthened (<b>Llanfair\u00adpwllgwyngyll\u00adgogery\u00adchwyrn\u00addrobwll\u00adllan\u00adtysilio\u00adgogo\u00adgoch</b>) forms of the placename are used in various contexts.</p>"}'),
			_Utils_Tuple3(
			'MATH_1',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'System of linear equations'
			},
			'{"type":"standard","title":"System of linear equations","displaytitle":"System of linear equations","namespace":{"id":0,"text":""},"wikibase_item":"Q11203","titles":{"canonical":"System_of_linear_equations","normalized":"System of linear equations","display":"System of linear equations"},"pageid":113087,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Secretsharing_3-point.svg/320px-Secretsharing_3-point.svg.png","width":320,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/a/ab/Secretsharing_3-point.svg","width":480,"height":480},"lang":"en","dir":"ltr","revision":"896581943","tid":"dc2ba3a0-73f5-11e9-a11c-ddc1898d7fbc","timestamp":"2019-05-11T14:05:32Z","description":"collection of linear equations involving the same set of variables","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/System_of_linear_equations","revisions":"https://en.wikipedia.org/wiki/System_of_linear_equations?action=history","edit":"https://en.wikipedia.org/wiki/System_of_linear_equations?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:System_of_linear_equations"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/System_of_linear_equations","revisions":"https://en.m.wikipedia.org/wiki/Special:History/System_of_linear_equations","edit":"https://en.m.wikipedia.org/wiki/System_of_linear_equations?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:System_of_linear_equations"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/System_of_linear_equations","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/System_of_linear_equations","references":"https://en.wikipedia.org/api/rest_v1/page/references/System_of_linear_equations","media":"https://en.wikipedia.org/api/rest_v1/page/media/System_of_linear_equations","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/System_of_linear_equations","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:System_of_linear_equations"},"extract":"In mathematics, a system of linear equations is a collection of two or more linear equations involving the same set of variables. For example,\\n","extract_html":"<p>In mathematics, a <b>system of linear equations</b> is a collection of two or more linear equations involving the same set of variables. For example,</p><dl><dd><span class=\\"mwe-math-element\\"><img src=\\"https://wikimedia.org/api/rest_v1/media/math/render/svg/d691839a2b284331b58b0820654d32e101e26a03\\" class=\\"mwe-math-fallback-image-inline\\" aria-hidden=\\"true\\" style=\\"vertical-align:-4.338ex;width:21.219ex;height:9.676ex\\" /></span>\\n</dd></dl>"}'),
			_Utils_Tuple3(
			'MATH_2',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'History of Lorentz transformations'
			},
			'{"type":"standard","title":"History of Lorentz transformations","displaytitle":"History of Lorentz transformations","namespace":{"id":0,"text":""},"wikibase_item":"Q176851","titles":{"canonical":"History_of_Lorentz_transformations","normalized":"History of Lorentz transformations","display":"History of Lorentz transformations"},"pageid":7058047,"lang":"en","dir":"ltr","revision":"897493811","tid":"f98c4970-789d-11e9-bb56-834dbb31338e","timestamp":"2019-05-17T12:18:05Z","description":"aspect of history","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/History_of_Lorentz_transformations","revisions":"https://en.wikipedia.org/wiki/History_of_Lorentz_transformations?action=history","edit":"https://en.wikipedia.org/wiki/History_of_Lorentz_transformations?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:History_of_Lorentz_transformations"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/History_of_Lorentz_transformations","revisions":"https://en.m.wikipedia.org/wiki/Special:History/History_of_Lorentz_transformations","edit":"https://en.m.wikipedia.org/wiki/History_of_Lorentz_transformations?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:History_of_Lorentz_transformations"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/History_of_Lorentz_transformations","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/History_of_Lorentz_transformations","references":"https://en.wikipedia.org/api/rest_v1/page/references/History_of_Lorentz_transformations","media":"https://en.wikipedia.org/api/rest_v1/page/media/History_of_Lorentz_transformations","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/History_of_Lorentz_transformations","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:History_of_Lorentz_transformations"},"extract":"The history of Lorentz transformations comprises the development of linear transformations forming the Lorentz group or Poincaré group preserving the Lorentz interval \\n and the Minkowski inner product \\n.","extract_html":"<p>The <b>history of Lorentz transformations</b> comprises the development of linear transformations forming the Lorentz group or Poincaré group preserving the Lorentz interval <span class=\\"mwe-math-element\\"><img src=\\"https://wikimedia.org/api/rest_v1/media/math/render/svg/aeaaf19e649447ee32f924033e4c859955174c81\\" class=\\"mwe-math-fallback-image-inline\\" aria-hidden=\\"true\\" style=\\"vertical-align:-1.005ex;width:15.144ex;height:3.176ex\\" /></span>\\n and the Minkowski inner product <span class=\\"mwe-math-element\\"><img src=\\"https://wikimedia.org/api/rest_v1/media/math/render/svg/43fcbe32f1674bd50b4621db988d3de905a8f269\\" class=\\"mwe-math-fallback-image-inline\\" aria-hidden=\\"true\\" style=\\"vertical-align:-0.671ex;width:19.695ex;height:2.343ex\\" /></span>\\n.</p>"}'),
			_Utils_Tuple3(
			'CHEM_1',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Carbohydrate'
			},
			'{"type":"standard","title":"Carbohydrate","displaytitle":"Carbohydrate","namespace":{"id":0,"text":""},"wikibase_item":"Q11358","titles":{"canonical":"Carbohydrate","normalized":"Carbohydrate","display":"Carbohydrate"},"pageid":5932,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lactose.svg/320px-Lactose.svg.png","width":320,"height":133},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/0/04/Lactose.svg","width":440,"height":183},"lang":"en","dir":"ltr","revision":"896976335","tid":"cfac8ea0-75df-11e9-9a2c-7b28d03333e0","timestamp":"2019-05-14T00:32:41Z","description":"organic compound that consists only of carbon, hydrogen, and oxygen","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Carbohydrate","revisions":"https://en.wikipedia.org/wiki/Carbohydrate?action=history","edit":"https://en.wikipedia.org/wiki/Carbohydrate?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Carbohydrate"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Carbohydrate","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Carbohydrate","edit":"https://en.m.wikipedia.org/wiki/Carbohydrate?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Carbohydrate"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Carbohydrate","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Carbohydrate","references":"https://en.wikipedia.org/api/rest_v1/page/references/Carbohydrate","media":"https://en.wikipedia.org/api/rest_v1/page/media/Carbohydrate","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Carbohydrate","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Carbohydrate"},"extract":"A carbohydrate is a biomolecule consisting of carbon (C), hydrogen (H) and oxygen (O) atoms, usually with a hydrogen–oxygen atom ratio of 2:1 (as in water) and thus with the empirical formula Cm(H2O)n (where m may be different from n). This formula holds true for monosaccharides. Some exceptions exist; for example, deoxyribose, a sugar component of DNA, has the empirical formula C5H10O4. The carbohydrates are technically hydrates of carbon; structurally it is more accurate to view them as aldoses and ketoses.","extract_html":"<p>A <b>carbohydrate</b> is a biomolecule consisting of carbon (C), hydrogen (H) and oxygen (O) atoms, usually with a hydrogen–oxygen atom ratio of 2:1 (as in water) and thus with the empirical formula <span class=\\"nowrap\\">C<sub><i>m</i></sub>(H<sub>2</sub>O)<sub><i>n</i></sub></span> (where <i>m</i> may be different from <i>n</i>). This formula holds true for monosaccharides. Some exceptions exist; for example, deoxyribose, a sugar component of DNA, has the empirical formula C<sub>5</sub>H<sub>10</sub>O<sub>4</sub>. The carbohydrates are technically hydrates of carbon; structurally it is more accurate to view them as aldoses and ketoses.</p>"}'),
			_Utils_Tuple3(
			'CHEM_2',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Ethanol'
			},
			'{"type":"standard","title":"Ethanol","displaytitle":"Ethanol","namespace":{"id":0,"text":""},"wikibase_item":"Q153","titles":{"canonical":"Ethanol","normalized":"Ethanol","display":"Ethanol"},"pageid":10048,"lang":"en","dir":"ltr","revision":"893656939","tid":"02861ac0-7721-11e9-ade1-91802fe1afc3","timestamp":"2019-04-22T19:51:35Z","description":"chemical compound","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Ethanol","revisions":"https://en.wikipedia.org/wiki/Ethanol?action=history","edit":"https://en.wikipedia.org/wiki/Ethanol?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Ethanol"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Ethanol","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Ethanol","edit":"https://en.m.wikipedia.org/wiki/Ethanol?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Ethanol"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Ethanol","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Ethanol","references":"https://en.wikipedia.org/api/rest_v1/page/references/Ethanol","media":"https://en.wikipedia.org/api/rest_v1/page/media/Ethanol","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Ethanol","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Ethanol"},"extract":"Ethanol is a chemical compound, a simple alcohol with the chemical formula C2H6O. Its formula can be also written as CH3−CH2−OH or C2H5−OH, and is often abbreviated as EtOH. Ethanol is a volatile, flammable, colorless liquid with a slight characteristic odor. It is a psychoactive substance and is the principal type of alcohol found in alcoholic drinks.","extract_html":"<p><b>Ethanol</b> is a chemical compound, a simple alcohol with the chemical formula <span class=\\"chemf nowrap\\">C<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>2</sub></span>H<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>6</sub></span>O</span>. Its formula can be also written as <span class=\\"chemf nowrap\\">CH<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>3</sub></span></span>−<span class=\\"chemf nowrap\\">CH<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>2</sub></span></span>−<span class=\\"chemf nowrap\\">OH</span> or <span class=\\"chemf nowrap\\">C<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>2</sub></span>H<span style=\\"display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left\\"><sup></sup><br /><sub>5</sub></span></span>−<span class=\\"chemf nowrap\\">OH</span>, and is often abbreviated as <b>EtOH</b>. Ethanol is a volatile, flammable, colorless liquid with a slight characteristic odor. It is a psychoactive substance and is the principal type of alcohol found in alcoholic drinks.</p>"}'),
			_Utils_Tuple3(
			'CHEM_3',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Polyvinyl acetate'
			},
			'{"type":"standard","title":"Polyvinyl acetate","displaytitle":"Polyvinyl acetate","namespace":{"id":0,"text":""},"wikibase_item":"Q146354","titles":{"canonical":"Polyvinyl_acetate","normalized":"Polyvinyl acetate","display":"Polyvinyl acetate"},"pageid":233089,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/PVA.svg/288px-PVA.svg.png","width":288,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/5/57/PVA.svg","width":485,"height":538},"lang":"en","dir":"ltr","revision":"883107026","tid":"2746ab30-6507-11e9-bab2-f96e5b62e627","timestamp":"2019-02-13T09:28:11Z","description":"polymer","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Polyvinyl_acetate","revisions":"https://en.wikipedia.org/wiki/Polyvinyl_acetate?action=history","edit":"https://en.wikipedia.org/wiki/Polyvinyl_acetate?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Polyvinyl_acetate"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Polyvinyl_acetate","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Polyvinyl_acetate","edit":"https://en.m.wikipedia.org/wiki/Polyvinyl_acetate?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Polyvinyl_acetate"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Polyvinyl_acetate","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Polyvinyl_acetate","references":"https://en.wikipedia.org/api/rest_v1/page/references/Polyvinyl_acetate","media":"https://en.wikipedia.org/api/rest_v1/page/media/Polyvinyl_acetate","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Polyvinyl_acetate","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Polyvinyl_acetate"},"extract":"Poly(vinyl acetate) (PVA, PVAc, poly(ethenyl ethanoate): best known as wood glue, white glue, carpenter\'s glue, school glue, Elmer\'s glue in the US, or PVA glue) is an aliphatic rubbery synthetic polymer with the formula (C4H6O2)n. It belongs to the polyvinyl esters family, with the general formula -[RCOOCHCH2]-. It is a type of thermoplastic. There is considerable confusion between the glue as purchased, an aqueous emulsion of mostly vinyl acetate monomer, and the subsequent dried and polymerized PVAc that is the true thermoplastic polymer.","extract_html":"<p><b>Poly(vinyl acetate)</b> (<b>PVA</b>, <b>PVAc</b>, <b>poly(ethenyl ethanoate)</b>: best known as <b>wood glue</b>, <b>white glue</b>, <b>carpenter\'s glue</b>, <b>school glue</b>, <b>Elmer\'s glue</b> in the US, or <b>PVA glue</b>) is an aliphatic rubbery synthetic polymer with the formula (C<sub>4</sub>H<sub>6</sub>O<sub>2</sub>)<sub>n</sub>. It belongs to the polyvinyl esters family, with the general formula -[RCOOCHCH<sub>2</sub>]-. It is a type of thermoplastic. There is considerable confusion between the glue as purchased, an aqueous emulsion of mostly vinyl acetate monomer, and the subsequent dried and polymerized PVAc that is the true thermoplastic polymer.</p>"}'),
			_Utils_Tuple3(
			'DISAMBIGUATION',
			{
				contentDir: author$project$Data$LTR,
				lang: 'en',
				linkPos: {x: 25, y: 25},
				title: 'Manhattan (disambiguation)'
			},
			'{"type":"disambiguation","title":"Manhattan (disambiguation)","displaytitle":"Manhattan (disambiguation)","namespace":{"id":0,"text":""},"wikibase_item":"Q572313","titles":{"canonical":"Manhattan_(disambiguation)","normalized":"Manhattan (disambiguation)","display":"Manhattan (disambiguation)"},"pageid":18835,"lang":"en","dir":"ltr","revision":"878246585","tid":"7869c990-6e3d-11e9-b3cb-07d624719b63","timestamp":"2019-01-13T21:50:53Z","description":"Disambiguation page providing links to topics that could be referred to by the same search term","content_urls":{"desktop":{"page":"https://en.wikipedia.org/wiki/Manhattan_(disambiguation)","revisions":"https://en.wikipedia.org/wiki/Manhattan_(disambiguation)?action=history","edit":"https://en.wikipedia.org/wiki/Manhattan_(disambiguation)?action=edit","talk":"https://en.wikipedia.org/wiki/Talk:Manhattan_(disambiguation)"},"mobile":{"page":"https://en.m.wikipedia.org/wiki/Manhattan_(disambiguation)","revisions":"https://en.m.wikipedia.org/wiki/Special:History/Manhattan_(disambiguation)","edit":"https://en.m.wikipedia.org/wiki/Manhattan_(disambiguation)?action=edit","talk":"https://en.m.wikipedia.org/wiki/Talk:Manhattan_(disambiguation)"}},"api_urls":{"summary":"https://en.wikipedia.org/api/rest_v1/page/summary/Manhattan_(disambiguation)","metadata":"https://en.wikipedia.org/api/rest_v1/page/metadata/Manhattan_(disambiguation)","references":"https://en.wikipedia.org/api/rest_v1/page/references/Manhattan_(disambiguation)","media":"https://en.wikipedia.org/api/rest_v1/page/media/Manhattan_(disambiguation)","edit_html":"https://en.wikipedia.org/api/rest_v1/page/html/Manhattan_(disambiguation)","talk_page_html":"https://en.wikipedia.org/api/rest_v1/page/html/Talk:Manhattan_(disambiguation)"},"extract":"Manhattan is a borough of New York City.","extract_html":"<p><b>Manhattan</b> is a borough of New York City.</p>"}'),
			_Utils_Tuple3(
			'HE_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'he',
				linkPos: {x: 25, y: 25},
				title: 'פרהיסטוריה'
			},
			author$project$UiTests$heWiki1),
			_Utils_Tuple3(
			'HE_WIKI2',
			{
				contentDir: author$project$Data$LTR,
				lang: 'he',
				linkPos: {x: 25, y: 25},
				title: 'לונדון'
			},
			'{"type":"standard","title":"לונדון","displaytitle":"לונדון","namespace":{"id":0,"text":""},"wikibase_item":"Q84","titles":{"canonical":"לונדון","normalized":"לונדון","display":"לונדון"},"pageid":2955,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/212px-London_Montage_L.jpg","width":212,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg","width":1200,"height":1809},"lang":"he","dir":"rtl","revision":"25504760","tid":"338ba7c0-78f2-11e9-8ca5-7da32e4c27c2","timestamp":"2019-05-16T22:18:51Z","description":"בירת הממלכה המאוחדת","coordinates":{"lat":51.50694444,"lon":-0.1275},"content_urls":{"desktop":{"page":"https://he.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","revisions":"https://he.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F?action=history","edit":"https://he.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F?action=edit","talk":"https://he.wikipedia.org/wiki/%D7%A9%D7%99%D7%97%D7%94:%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F"},"mobile":{"page":"https://he.m.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","revisions":"https://he.m.wikipedia.org/wiki/Special:History/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","edit":"https://he.m.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F?action=edit","talk":"https://he.m.wikipedia.org/wiki/%D7%A9%D7%99%D7%97%D7%94:%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F"}},"api_urls":{"summary":"https://he.wikipedia.org/api/rest_v1/page/summary/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","metadata":"https://he.wikipedia.org/api/rest_v1/page/metadata/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","references":"https://he.wikipedia.org/api/rest_v1/page/references/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","media":"https://he.wikipedia.org/api/rest_v1/page/media/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","edit_html":"https://he.wikipedia.org/api/rest_v1/page/html/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F","talk_page_html":"https://he.wikipedia.org/api/rest_v1/page/html/%D7%A9%D7%99%D7%97%D7%94:%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F"},"extract":"לונדון היא עיר הבירה של אנגליה ושל הממלכה המאוחדת, והעיר והמטרופולין הגדולה ביותר בממלכה. העיר שוכנת על גדות נהר התמזה, והיוותה מקום התיישבות מרכזי במשך יותר מאלפיים שנים. הרומאים התיישבו בה לראשונה, וכינו אותה לונדיניום. גרעינה ההיסטורי של העיר הוא הסיטי של לונדון, ששומר עד היום על גבולותיו מימי הביניים. לונדון המודרנית מורכבת מצירוף של ערים, עיירות, רבעים, שכונות ופרברים, אשר נסתפחו לאורך השנים לשטחה האדמיניסטרטיבי של \\"לונדון רבתי\\", וכולם יחד נקראים \\"לונדון\\".","extract_html":"<p><b>לונדון</b> היא עיר הבירה של אנגליה ושל הממלכה המאוחדת, והעיר והמטרופולין הגדולה ביותר בממלכה. העיר שוכנת על גדות נהר התמזה, והיוותה מקום התיישבות מרכזי במשך יותר מאלפיים שנים. הרומאים התיישבו בה לראשונה, וכינו אותה לונדיניום. גרעינה ההיסטורי של העיר הוא הסיטי של לונדון, ששומר עד היום על גבולותיו מימי הביניים. לונדון המודרנית מורכבת מצירוף של ערים, עיירות, רבעים, שכונות ופרברים, אשר נסתפחו לאורך השנים לשטחה האדמיניסטרטיבי של \\"לונדון רבתי\\", וכולם יחד נקראים \\"לונדון\\".</p>"}'),
			_Utils_Tuple3(
			'AR_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'ar',
				linkPos: {x: 25, y: 25},
				title: 'سلسلة جبلية'
			},
			'{"type":"standard","title":"سلسلة جبلية","displaytitle":"سلسلة جبلية","namespace":{"id":0,"text":""},"wikibase_item":"Q46831","titles":{"canonical":"سلسلة_جبلية","normalized":"سلسلة جبلية","display":"سلسلة جبلية"},"pageid":32340,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Satellitenaufnahme_der_Alpen.jpg/320px-Satellitenaufnahme_der_Alpen.jpg","width":320,"height":247},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/1/16/Satellitenaufnahme_der_Alpen.jpg","width":1000,"height":773},"lang":"ar","dir":"rtl","revision":"34976553","tid":"5bdc34f0-738a-11e9-bbdf-2b10cf85bc22","timestamp":"2019-05-11T01:16:03Z","content_urls":{"desktop":{"page":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","revisions":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=history","edit":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=edit","talk":"https://ar.wikipedia.org/wiki/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"},"mobile":{"page":"https://ar.m.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","revisions":"https://ar.m.wikipedia.org/wiki/Special:History/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","edit":"https://ar.m.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=edit","talk":"https://ar.m.wikipedia.org/wiki/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"}},"api_urls":{"summary":"https://ar.wikipedia.org/api/rest_v1/page/summary/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","metadata":"https://ar.wikipedia.org/api/rest_v1/page/metadata/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","references":"https://ar.wikipedia.org/api/rest_v1/page/references/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","media":"https://ar.wikipedia.org/api/rest_v1/page/media/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","edit_html":"https://ar.wikipedia.org/api/rest_v1/page/html/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","talk_page_html":"https://ar.wikipedia.org/api/rest_v1/page/html/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"},"extract":"الجبال هي سلسلة متتالية من الارتفاعات تفتقر إلى التجانس، بحيث تكون ارتفاعات القمم شديدة التباين(مثل 1000 متر، 2500 متر أو 700 متر...)، وهي مجموعة من الجبال تحدها السهول أو يفصلها عن غيرها ممرات أو أنهار ولكن الأودية تكون متعمقة، والسفوح شديدة التجزئة وقوية الانحدار.\\nوتتميز الجبال بعدة أشكال بالنسبة للقمم\u00a0:قمة عبارة عن نقطة\\nقمة عبارة عن خط أو عرف\\nقمة عبارة عن مستوى.","extract_html":"<p><b>الجبال</b> هي سلسلة متتالية من الارتفاعات تفتقر إلى التجانس، بحيث تكون ارتفاعات القمم شديدة التباين(مثل 1000 متر، 2500 متر أو 700 متر...)، وهي مجموعة من الجبال تحدها السهول أو يفصلها عن غيرها ممرات أو أنهار ولكن الأودية تكون متعمقة، و<b>السفوح</b> شديدة التجزئة وقوية الانحدار.\\nوتتميز الجبال بعدة أشكال بالنسبة للقمم\u00a0:</p><ul><li>قمة عبارة عن نقطة</li>\\n<li>قمة عبارة عن خط أو عرف</li>\\n<li>قمة عبارة عن مستوى.</li></ul>"}'),
			_Utils_Tuple3(
			'AR_WIKI2',
			{
				contentDir: author$project$Data$LTR,
				lang: 'ar',
				linkPos: {x: 25, y: 25},
				title: 'سلسلة جبلية'
			},
			'{"type":"standard","title":"سلسلة جبلية","displaytitle":"سلسلة جبلية","namespace":{"id":0,"text":""},"wikibase_item":"Q46831","titles":{"canonical":"سلسلة_جبلية","normalized":"سلسلة جبلية","display":"سلسلة جبلية"},"pageid":32340,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Satellitenaufnahme_der_Alpen.jpg/320px-Satellitenaufnahme_der_Alpen.jpg","width":320,"height":247},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/1/16/Satellitenaufnahme_der_Alpen.jpg","width":1000,"height":773},"lang":"ar","dir":"rtl","revision":"34976553","tid":"5bdc34f0-738a-11e9-bbdf-2b10cf85bc22","timestamp":"2019-05-11T01:16:03Z","content_urls":{"desktop":{"page":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","revisions":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=history","edit":"https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=edit","talk":"https://ar.wikipedia.org/wiki/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"},"mobile":{"page":"https://ar.m.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","revisions":"https://ar.m.wikipedia.org/wiki/Special:History/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","edit":"https://ar.m.wikipedia.org/wiki/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9?action=edit","talk":"https://ar.m.wikipedia.org/wiki/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"}},"api_urls":{"summary":"https://ar.wikipedia.org/api/rest_v1/page/summary/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","metadata":"https://ar.wikipedia.org/api/rest_v1/page/metadata/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","references":"https://ar.wikipedia.org/api/rest_v1/page/references/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","media":"https://ar.wikipedia.org/api/rest_v1/page/media/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","edit_html":"https://ar.wikipedia.org/api/rest_v1/page/html/%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9","talk_page_html":"https://ar.wikipedia.org/api/rest_v1/page/html/%D9%86%D9%82%D8%A7%D8%B4:%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%AC%D8%A8%D9%84%D9%8A%D8%A9"},"extract":"الجبال هي سلسلة متتالية من الارتفاعات تفتقر إلى التجانس، بحيث تكون ارتفاعات القمم شديدة التباين(مثل 1000 متر، 2500 متر أو 700 متر...)، وهي مجموعة من الجبال تحدها السهول أو يفصلها عن غيرها ممرات أو أنهار ولكن الأودية تكون متعمقة، والسفوح شديدة التجزئة وقوية الانحدار.\\nوتتميز الجبال بعدة أشكال بالنسبة للقمم\u00a0:قمة عبارة عن نقطة\\nقمة عبارة عن خط أو عرف\\nقمة عبارة عن مستوى.","extract_html":"<p><b>الجبال</b> هي سلسلة متتالية من الارتفاعات تفتقر إلى التجانس، بحيث تكون ارتفاعات القمم شديدة التباين(مثل 1000 متر، 2500 متر أو 700 متر...)، وهي مجموعة من الجبال تحدها السهول أو يفصلها عن غيرها ممرات أو أنهار ولكن الأودية تكون متعمقة، و<b>السفوح</b> شديدة التجزئة وقوية الانحدار.\\nوتتميز الجبال بعدة أشكال بالنسبة للقمم\u00a0:</p><ul><li>قمة عبارة عن نقطة</li>\\n<li>قمة عبارة عن خط أو عرف</li>\\n<li>قمة عبارة عن مستوى.</li></ul>"}'),
			_Utils_Tuple3(
			'JA_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'ja',
				linkPos: {x: 25, y: 25},
				title: '焼きそば'
			},
			'{"type":"standard","title":"焼きそば","displaytitle":"焼きそば","namespace":{"id":0,"text":""},"wikibase_item":"Q1144102","titles":{"canonical":"焼きそば","normalized":"焼きそば","display":"焼きそば"},"pageid":69478,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kuroishi_Yakisoba01.JPG/320px-Kuroishi_Yakisoba01.JPG","width":320,"height":240},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/c/c5/Kuroishi_Yakisoba01.JPG","width":2048,"height":1536},"lang":"ja","dir":"ltr","revision":"72622780","tid":"8decc120-6e3b-11e9-abcf-4ad3c866bce6","timestamp":"2019-05-04T07:09:22Z","content_urls":{"desktop":{"page":"https://ja.wikipedia.org/wiki/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","revisions":"https://ja.wikipedia.org/wiki/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0?action=history","edit":"https://ja.wikipedia.org/wiki/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0?action=edit","talk":"https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%BC%E3%83%88:%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0"},"mobile":{"page":"https://ja.m.wikipedia.org/wiki/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","revisions":"https://ja.m.wikipedia.org/wiki/Special:History/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","edit":"https://ja.m.wikipedia.org/wiki/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0?action=edit","talk":"https://ja.m.wikipedia.org/wiki/%E3%83%8E%E3%83%BC%E3%83%88:%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0"}},"api_urls":{"summary":"https://ja.wikipedia.org/api/rest_v1/page/summary/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","metadata":"https://ja.wikipedia.org/api/rest_v1/page/metadata/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","references":"https://ja.wikipedia.org/api/rest_v1/page/references/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","media":"https://ja.wikipedia.org/api/rest_v1/page/media/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","edit_html":"https://ja.wikipedia.org/api/rest_v1/page/html/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0","talk_page_html":"https://ja.wikipedia.org/api/rest_v1/page/html/%E3%83%8E%E3%83%BC%E3%83%88:%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0"},"extract":"焼きそば（やきそば）とは、麺料理の一種。蒸した（あるいは茹でた）中華麺を、豚肉等の肉類、キャベツ、人参、玉ねぎ、もやし等の野菜類といった具とともに炒めて作る。日本ではウスターソースを使用したソース焼きそばが普及している。最近では塩焼きそばというのも徐々に普及してきている。","extract_html":"<p><b>焼きそば</b>（やきそば）とは、麺料理の一種。蒸した（あるいは茹でた）中華麺を、豚肉等の肉類、キャベツ、人参、玉ねぎ、もやし等の野菜類といった具とともに炒めて作る。日本ではウスターソースを使用したソース焼きそばが普及している。最近では塩焼きそばというのも徐々に普及してきている。</p>"}'),
			_Utils_Tuple3(
			'KO_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'ko',
				linkPos: {x: 25, y: 25},
				title: '닌텐도 DS'
			},
			'{"type":"standard","title":"닌텐도 DS","displaytitle":"닌텐도 DS","namespace":{"id":0,"text":""},"wikibase_item":"Q170323","titles":{"canonical":"닌텐도_DS","normalized":"닌텐도 DS","display":"닌텐도 DS"},"pageid":13295,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nintendo_DS_Trans.png/320px-Nintendo_DS_Trans.png","width":320,"height":292},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/8/82/Nintendo_DS_Trans.png","width":656,"height":599},"lang":"ko","dir":"ltr","revision":"24215148","tid":"17f88130-7556-11e9-a94b-6645ba445313","timestamp":"2019-05-13T08:07:00Z","description":"닌텐도의 듀얼 스크린의 휴대용 포터블 게임기","content_urls":{"desktop":{"page":"https://ko.wikipedia.org/wiki/%EB%8B%8C%ED%85%90%EB%8F%84_DS","revisions":"https://ko.wikipedia.org/wiki/%EB%8B%8C%ED%85%90%EB%8F%84_DS?action=history","edit":"https://ko.wikipedia.org/wiki/%EB%8B%8C%ED%85%90%EB%8F%84_DS?action=edit","talk":"https://ko.wikipedia.org/wiki/%ED%86%A0%EB%A1%A0:%EB%8B%8C%ED%85%90%EB%8F%84_DS"},"mobile":{"page":"https://ko.m.wikipedia.org/wiki/%EB%8B%8C%ED%85%90%EB%8F%84_DS","revisions":"https://ko.m.wikipedia.org/wiki/Special:History/%EB%8B%8C%ED%85%90%EB%8F%84_DS","edit":"https://ko.m.wikipedia.org/wiki/%EB%8B%8C%ED%85%90%EB%8F%84_DS?action=edit","talk":"https://ko.m.wikipedia.org/wiki/%ED%86%A0%EB%A1%A0:%EB%8B%8C%ED%85%90%EB%8F%84_DS"}},"api_urls":{"summary":"https://ko.wikipedia.org/api/rest_v1/page/summary/%EB%8B%8C%ED%85%90%EB%8F%84_DS","metadata":"https://ko.wikipedia.org/api/rest_v1/page/metadata/%EB%8B%8C%ED%85%90%EB%8F%84_DS","references":"https://ko.wikipedia.org/api/rest_v1/page/references/%EB%8B%8C%ED%85%90%EB%8F%84_DS","media":"https://ko.wikipedia.org/api/rest_v1/page/media/%EB%8B%8C%ED%85%90%EB%8F%84_DS","edit_html":"https://ko.wikipedia.org/api/rest_v1/page/html/%EB%8B%8C%ED%85%90%EB%8F%84_DS","talk_page_html":"https://ko.wikipedia.org/api/rest_v1/page/html/%ED%86%A0%EB%A1%A0:%EB%8B%8C%ED%85%90%EB%8F%84_DS"},"extract":"닌텐도 DS(영어: Nintendo DS, 일본어: ニンテンドーDS)는 닌텐도가 개발, 판매하는 휴대용 게임기이다. 2개의 화면이나 터치 패널, 마이크에 의한 음성 입력 등의 사용자 환경이 특징이다. 2004년 11월 21일 미국에서 발매되었으며, 일본에서는 같은 해 12월 2일에 발매되었다. 오스트레일리아와 유럽에서는 2005년 2월 24일과 2005년 3월 11일에 각각 발매되었으며 중국에서는 iQue DS라는 이름으로 2005년 7월 23일에 발매되었다.","extract_html":"<p><b>닌텐도 DS</b>(<span>영어: </span>Nintendo DS, <span>일본어: </span>ニンテンドーDS)는 닌텐도가 개발, 판매하는 휴대용 게임기이다. 2개의 화면이나 터치 패널, 마이크에 의한 음성 입력 등의 사용자 환경이 특징이다. 2004년 11월 21일 미국에서 발매되었으며, 일본에서는 같은 해 12월 2일에 발매되었다. 오스트레일리아와 유럽에서는 2005년 2월 24일과 2005년 3월 11일에 각각 발매되었으며 중국에서는 iQue DS라는 이름으로 2005년 7월 23일에 발매되었다.</p>"}'),
			_Utils_Tuple3(
			'HZ_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'zh',
				linkPos: {x: 25, y: 25},
				title: '美国国家森林列表'
			},
			'{"type":"standard","title":"美国国家森林列表","displaytitle":"美国国家森林列表","namespace":{"id":0,"text":""},"wikibase_item":"Q3249745","titles":{"canonical":"美国国家森林列表","normalized":"美国国家森林列表","display":"美国国家森林列表"},"pageid":6097460,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/USA_National_Forests_Map.jpg/320px-USA_National_Forests_Map.jpg","width":320,"height":208},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/b/bb/USA_National_Forests_Map.jpg","width":3000,"height":1948},"lang":"zh","dir":"ltr","revision":"53794764","tid":"d0465430-71da-11e9-b5fd-91f8060be64c","timestamp":"2019-03-30T06:48:14Z","description":"维基媒体列表条目","content_urls":{"desktop":{"page":"https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","revisions":"https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8?action=history","edit":"https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8?action=edit","talk":"https://zh.wikipedia.org/wiki/Talk:%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8"},"mobile":{"page":"https://zh.m.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","revisions":"https://zh.m.wikipedia.org/wiki/Special:History/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","edit":"https://zh.m.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8?action=edit","talk":"https://zh.m.wikipedia.org/wiki/Talk:%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8"}},"api_urls":{"summary":"https://zh.wikipedia.org/api/rest_v1/page/summary/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","metadata":"https://zh.wikipedia.org/api/rest_v1/page/metadata/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","references":"https://zh.wikipedia.org/api/rest_v1/page/references/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","media":"https://zh.wikipedia.org/api/rest_v1/page/media/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","edit_html":"https://zh.wikipedia.org/api/rest_v1/page/html/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8","talk_page_html":"https://zh.wikipedia.org/api/rest_v1/page/html/Talk:%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%88%97%E8%A1%A8"},"extract":"美国境内共拥有154座国家森林，总面积188,336,179英畝（762,169.48平方）。这些国家森林均由美国农业部下属的美国国家森林局管控。","extract_html":"<p>美国境内共拥有154座国家森林，总面积188,336,179英畝（762,169.48平方）。这些国家森林均由美国农业部下属的美国国家森林局管控。</p>"}'),
			_Utils_Tuple3(
			'EL_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'el',
				linkPos: {x: 25, y: 25},
				title: 'Κνωσός'
			},
			'{"type":"standard","title":"Κνωσός","displaytitle":"Κνωσός","namespace":{"id":0,"text":""},"wikibase_item":"Q173527","titles":{"canonical":"Κνωσός","normalized":"Κνωσός","display":"Κνωσός"},"pageid":6070,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Knossos_-_North_Portico_02.jpg/320px-Knossos_-_North_Portico_02.jpg","width":320,"height":240},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/e/ea/Knossos_-_North_Portico_02.jpg","width":3456,"height":2592},"lang":"el","dir":"ltr","revision":"7376762","tid":"b42dab10-73fe-11e9-9314-2da868ee6bff","timestamp":"2019-01-18T14:31:50Z","coordinates":{"lat":35.2978,"lon":25.1636},"content_urls":{"desktop":{"page":"https://el.wikipedia.org/wiki/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","revisions":"https://el.wikipedia.org/wiki/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82?action=history","edit":"https://el.wikipedia.org/wiki/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82?action=edit","talk":"https://el.wikipedia.org/wiki/%CE%A3%CF%85%CE%B6%CE%AE%CF%84%CE%B7%CF%83%CE%B7:%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82"},"mobile":{"page":"https://el.m.wikipedia.org/wiki/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","revisions":"https://el.m.wikipedia.org/wiki/Special:History/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","edit":"https://el.m.wikipedia.org/wiki/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82?action=edit","talk":"https://el.m.wikipedia.org/wiki/%CE%A3%CF%85%CE%B6%CE%AE%CF%84%CE%B7%CF%83%CE%B7:%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82"}},"api_urls":{"summary":"https://el.wikipedia.org/api/rest_v1/page/summary/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","metadata":"https://el.wikipedia.org/api/rest_v1/page/metadata/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","references":"https://el.wikipedia.org/api/rest_v1/page/references/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","media":"https://el.wikipedia.org/api/rest_v1/page/media/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","edit_html":"https://el.wikipedia.org/api/rest_v1/page/html/%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82","talk_page_html":"https://el.wikipedia.org/api/rest_v1/page/html/%CE%A3%CF%85%CE%B6%CE%AE%CF%84%CE%B7%CF%83%CE%B7:%CE%9A%CE%BD%CF%89%CF%83%CF%8C%CF%82"},"extract":"Το μινωικό ανάκτορο είναι ο κύριος επισκέψιμος χώρος της Κνωσού, σημαντικής πόλης κατά την αρχαιότητα, με συνεχή ζωή από τα νεολιθικά χρόνια έως τον 5ο αι. Είναι χτισμένο στο λόφο της Κεφάλας, με εύκολη πρόσβαση στη θάλασσα αλλά και στο εσωτερικό της Κρήτης. Κατά την παράδοση, υπήρξε η έδρα του σοφού βασιλιά Μίνωα. Συναρπαστικοί μύθοι, του Λαβύρινθου με το Μινώταυρο και του Δαίδαλου με τον Ίκαρο, συνδέονται με το ανάκτορο της Κνωσσού.","extract_html":"<p>Το μινωικό ανάκτορο είναι ο κύριος επισκέψιμος χώρος της <b>Κνωσού</b>, σημαντικής πόλης κατά την αρχαιότητα, με συνεχή ζωή από τα νεολιθικά χρόνια έως τον 5ο αι. Είναι χτισμένο στο λόφο της Κεφάλας, με εύκολη πρόσβαση στη θάλασσα αλλά και στο εσωτερικό της Κρήτης. Κατά την παράδοση, υπήρξε η έδρα του σοφού βασιλιά Μίνωα. Συναρπαστικοί μύθοι, του Λαβύρινθου με το Μινώταυρο και του Δαίδαλου με τον Ίκαρο, συνδέονται με το ανάκτορο της Κνωσσού.</p>"}'),
			_Utils_Tuple3(
			'HI_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'hi',
				linkPos: {x: 25, y: 25},
				title: 'बग़दाद'
			},
			'{"type":"standard","title":"बग़दाद","displaytitle":"बग़दाद","namespace":{"id":0,"text":""},"wikibase_item":"Q1530","titles":{"canonical":"बग़दाद","normalized":"बग़दाद","display":"बग़दाद"},"pageid":8441,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Baghdad_collage.png/277px-Baghdad_collage.png","width":277,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/6/67/Baghdad_collage.png","width":800,"height":924},"lang":"hi","dir":"ltr","revision":"4178198","tid":"b08dd290-6cac-11e9-988b-3a2e386ccec6","timestamp":"2019-05-02T07:34:13Z","content_urls":{"desktop":{"page":"https://hi.wikipedia.org/wiki/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","revisions":"https://hi.wikipedia.org/wiki/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6?action=history","edit":"https://hi.wikipedia.org/wiki/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6?action=edit","talk":"https://hi.wikipedia.org/wiki/%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6"},"mobile":{"page":"https://hi.m.wikipedia.org/wiki/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","revisions":"https://hi.m.wikipedia.org/wiki/Special:History/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","edit":"https://hi.m.wikipedia.org/wiki/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6?action=edit","talk":"https://hi.m.wikipedia.org/wiki/%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6"}},"api_urls":{"summary":"https://hi.wikipedia.org/api/rest_v1/page/summary/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","metadata":"https://hi.wikipedia.org/api/rest_v1/page/metadata/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","references":"https://hi.wikipedia.org/api/rest_v1/page/references/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","media":"https://hi.wikipedia.org/api/rest_v1/page/media/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","edit_html":"https://hi.wikipedia.org/api/rest_v1/page/html/%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6","talk_page_html":"https://hi.wikipedia.org/api/rest_v1/page/html/%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:%E0%A4%AC%E0%A4%97%E0%A4%BC%E0%A4%A6%E0%A4%BE%E0%A4%A6"},"extract":"बग़दाद विश्व का एक प्रमुख नगर एवं ईराक की राजधानी है। इसका नाम ६०० ईपू के बाबिल के राजा बागदाद पर पड़ा है। यह नगर 4,000 वर्ष पहले पश्चिमी यूरोप और सुदूर पूर्व के देशों के बीच, समुद्री मार्ग के आविष्कार के पहले कारवाँ मार्ग का प्रसिद्ध केंद्र था तथा नदी के किनारे इसकी स्थिति व्यापारिक महत्व रखती थी। मेसोपोटामिया के उपजाऊ भाग में स्थित बगदाद वास्तव में शांति और समृद्धि का केंद्र था। 9वीं शताब्दी के प्रारंभिक वर्षों में यह अपने चरमोत्कर्ष पर था। उस समय यहाँ प्रबुद्ध खलीफा की छत्रछाया में धनी व्यापारी एवं विद्वान लोग फले-फूले। रेशमी वस्त्र एवं विशाल खपरैल के भवनों के लिए प्रसिद्ध बगदाद इस्लाम धर्म का केंद्र रहा है। यहाँ का औसत ताप लगभग 23 डिग्री सें. तथा वार्षिक वर्षा सात इंच हैं, अत: यहाँ खजूर तथा झाड़ियों के कुंज अधिक मिलते हैं।","extract_html":"<p><b>बग़दाद</b> विश्व का एक प्रमुख नगर एवं ईराक की राजधानी है। इसका नाम ६०० ईपू के बाबिल के राजा बागदाद पर पड़ा है। यह नगर 4,000 वर्ष पहले पश्चिमी यूरोप और सुदूर पूर्व के देशों के बीच, समुद्री मार्ग के आविष्कार के पहले कारवाँ मार्ग का प्रसिद्ध केंद्र था तथा नदी के किनारे इसकी स्थिति व्यापारिक महत्व रखती थी। मेसोपोटामिया के उपजाऊ भाग में स्थित बगदाद वास्तव में शांति और समृद्धि का केंद्र था। 9वीं शताब्दी के प्रारंभिक वर्षों में यह अपने चरमोत्कर्ष पर था। उस समय यहाँ प्रबुद्ध खलीफा की छत्रछाया में धनी व्यापारी एवं विद्वान लोग फले-फूले। रेशमी वस्त्र एवं विशाल खपरैल के भवनों के लिए प्रसिद्ध बगदाद इस्लाम धर्म का केंद्र रहा है। यहाँ का औसत ताप लगभग 23 डिग्री सें. तथा वार्षिक वर्षा सात इंच हैं, अत: यहाँ खजूर तथा झाड़ियों के कुंज अधिक मिलते हैं।</p>"}'),
			_Utils_Tuple3(
			'RU_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'ru',
				linkPos: {x: 25, y: 25},
				title: 'Клюв'
			},
			'{"type":"standard","title":"Клюв","displaytitle":"Клюв","namespace":{"id":0,"text":""},"wikibase_item":"Q31528","titles":{"canonical":"Клюв","normalized":"Клюв","display":"Клюв"},"pageid":158104,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bristol.zoo.greater.flamingo.arp.jpg/320px-Bristol.zoo.greater.flamingo.arp.jpg","width":320,"height":222},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/0/03/Bristol.zoo.greater.flamingo.arp.jpg","width":1750,"height":1216},"lang":"ru","dir":"ltr","revision":"99061003","tid":"3bbbcbf0-5872-11e9-8f34-acd4064ab594","timestamp":"2019-04-06T13:45:23Z","description":"орган птиц, образованный удлинёнными беззубыми челюстями, одетыми роговым чехлом","content_urls":{"desktop":{"page":"https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D0%B2","revisions":"https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D0%B2?action=history","edit":"https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D0%B2?action=edit","talk":"https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5:%D0%9A%D0%BB%D1%8E%D0%B2"},"mobile":{"page":"https://ru.m.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D0%B2","revisions":"https://ru.m.wikipedia.org/wiki/Special:History/%D0%9A%D0%BB%D1%8E%D0%B2","edit":"https://ru.m.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D0%B2?action=edit","talk":"https://ru.m.wikipedia.org/wiki/%D0%9E%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5:%D0%9A%D0%BB%D1%8E%D0%B2"}},"api_urls":{"summary":"https://ru.wikipedia.org/api/rest_v1/page/summary/%D0%9A%D0%BB%D1%8E%D0%B2","metadata":"https://ru.wikipedia.org/api/rest_v1/page/metadata/%D0%9A%D0%BB%D1%8E%D0%B2","references":"https://ru.wikipedia.org/api/rest_v1/page/references/%D0%9A%D0%BB%D1%8E%D0%B2","media":"https://ru.wikipedia.org/api/rest_v1/page/media/%D0%9A%D0%BB%D1%8E%D0%B2","edit_html":"https://ru.wikipedia.org/api/rest_v1/page/html/%D0%9A%D0%BB%D1%8E%D0%B2","talk_page_html":"https://ru.wikipedia.org/api/rest_v1/page/html/%D0%9E%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5:%D0%9A%D0%BB%D1%8E%D0%B2"},"extract":"Клюв\u00a0— орган птиц, черепах, головоногих моллюсков, некоторых динозавров и утконоса, образованный удлинёнными беззубыми челюстями, одетыми роговым чехлом\u00a0— рамфотекой.","extract_html":"<p><b>Клюв</b>\u00a0— орган птиц, черепах, головоногих моллюсков, некоторых динозавров и утконоса, образованный удлинёнными беззубыми челюстями, одетыми роговым чехлом\u00a0— рамфотекой.</p>"}'),
			_Utils_Tuple3(
			'TH_WIKI',
			{
				contentDir: author$project$Data$LTR,
				lang: 'th',
				linkPos: {x: 25, y: 25},
				title: 'เกาะแคโรไลน์'
			},
			'{"type":"standard","title":"เกาะแคโรไลน์","displaytitle":"เกาะแคโรไลน์","namespace":{"id":0,"text":""},"wikibase_item":"Q822151","titles":{"canonical":"เกาะแคโรไลน์","normalized":"เกาะแคโรไลน์","display":"เกาะแคโรไลน์"},"pageid":901909,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NASA-CarolineAtoll.jpg/213px-NASA-CarolineAtoll.jpg","width":213,"height":320},"originalimage":{"source":"https://upload.wikimedia.org/wikipedia/commons/6/62/NASA-CarolineAtoll.jpg","width":1600,"height":2400},"lang":"th","dir":"ltr","revision":"7993367","tid":"53079380-5f3d-11e9-bb04-0f1ba763da7d","timestamp":"2018-12-04T04:08:35Z","description":"กลุ่มของหมู่เกาะ","coordinates":{"lat":-9.93698056,"lon":-150.2115},"content_urls":{"desktop":{"page":"https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","revisions":"https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C?action=history","edit":"https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C?action=edit","talk":"https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%A2:%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C"},"mobile":{"page":"https://th.m.wikipedia.org/wiki/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","revisions":"https://th.m.wikipedia.org/wiki/Special:History/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","edit":"https://th.m.wikipedia.org/wiki/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C?action=edit","talk":"https://th.m.wikipedia.org/wiki/%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%A2:%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C"}},"api_urls":{"summary":"https://th.wikipedia.org/api/rest_v1/page/summary/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","metadata":"https://th.wikipedia.org/api/rest_v1/page/metadata/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","references":"https://th.wikipedia.org/api/rest_v1/page/references/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","media":"https://th.wikipedia.org/api/rest_v1/page/media/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","edit_html":"https://th.wikipedia.org/api/rest_v1/page/html/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C","talk_page_html":"https://th.wikipedia.org/api/rest_v1/page/html/%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%A2:%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%82%E0%B8%A3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C"},"extract":"เกาะแคโรไลน์ หรือ แคโรไลน์อะทอลล์ บ้างเรียก เกาะมิลเลนเนียม และ เกาะเบสซีซา เป็นเกาะปะการังวงแหวนไร้คนอาศัยซึ่งเป็นส่วนหนึ่งของหมู่เกาะไลน์ใต้ในมหาสมุทรแปซิฟิกตอนกลาง","extract_html":"<p><b>เกาะแคโรไลน์</b> หรือ <b>แคโรไลน์อะทอลล์</b> บ้างเรียก <b>เกาะมิลเลนเนียม</b> และ <b>เกาะเบสซีซา</b> เป็นเกาะปะการังวงแหวนไร้คนอาศัยซึ่งเป็นส่วนหนึ่งของหมู่เกาะไลน์ใต้ในมหาสมุทรแปซิฟิกตอนกลาง</p>"}')
		]));
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$UiTests$px = function (n) {
	return elm$core$String$fromFloat(n) + 'px';
};
var author$project$Card$Horizontal = {$: 'Horizontal'};
var author$project$Card$Vertical = {$: 'Vertical'};
var author$project$Card$px = function (n) {
	return elm$core$String$fromFloat(n) + 'px';
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var author$project$Card$getDimensions = F2(
	function (link, summary) {
		var thumbnail = summary.thumbnail;
		var viewport = link.viewport.viewport;
		var verticalPreviewWidth = 320;
		var verticalExtractMaxHeight = 190;
		var rect = link.rect;
		var isHorizontalPreview = A2(
			elm$core$Maybe$withDefault,
			true,
			A2(
				elm$core$Maybe$map,
				function (t) {
					return _Utils_cmp(t.height, t.width) > 0;
				},
				thumbnail));
		var kind = isHorizontalPreview ? author$project$Card$Horizontal : author$project$Card$Vertical;
		var horizontalPreviewHeight = 250;
		var hasThumbnail = function () {
			if (thumbnail.$ === 'Just') {
				var thumb = thumbnail.a;
				return true;
			} else {
				return false;
			}
		}();
		var extractWidth = isHorizontalPreview ? (hasThumbnail ? 260 : 320) : verticalPreviewWidth;
		var extractOrder = isHorizontalPreview ? 0 : 1;
		var extractMaxHeight = isHorizontalPreview ? '100%' : author$project$Card$px(verticalExtractMaxHeight);
		var constrainedSize = isHorizontalPreview ? {styleAttr: 'max-height', value: horizontalPreviewHeight} : {styleAttr: 'max-width', value: verticalPreviewWidth};
		var _n0 = function () {
			if (thumbnail.$ === 'Just') {
				var thumb = thumbnail.a;
				return isHorizontalPreview ? _Utils_Tuple2(horizontalPreviewHeight, (thumb.width * horizontalPreviewHeight) / thumb.height) : _Utils_Tuple2(verticalPreviewWidth, (thumb.height * verticalPreviewWidth) / thumb.width);
			} else {
				return _Utils_Tuple2(0, 0);
			}
		}();
		var thumbnailMaxSize = _n0.a;
		var thumbnailOtherDimension = _n0.b;
		var _n2 = isHorizontalPreview ? _Utils_Tuple2(thumbnailOtherDimension, thumbnailMaxSize) : _Utils_Tuple2(thumbnailMaxSize, thumbnailOtherDimension);
		var thumbnailWidth = _n2.a;
		var thumbnailHeight = _n2.b;
		var _n3 = isHorizontalPreview ? _Utils_Tuple2(extractWidth + thumbnailWidth, horizontalPreviewHeight) : _Utils_Tuple2(verticalPreviewWidth, verticalExtractMaxHeight + thumbnailHeight);
		var maxWidth = _n3.a;
		var maxHeight = _n3.b;
		var _n4 = _Utils_Tuple2(
			(rect.top + viewport.y) + rect.height,
			function () {
				var _n5 = link.contentDir;
				if (_n5.$ === 'LTR') {
					return A2(elm$core$Basics$min, rect.left + viewport.x, (viewport.x + viewport.width) - maxWidth);
				} else {
					return A2(elm$core$Basics$max, (rect.left + viewport.x) - (maxWidth - rect.width), viewport.x);
				}
			}());
		var topPosition = _n4.a;
		var leftPosition = _n4.b;
		return {constrainedSize: constrainedSize, extractMaxHeight: extractMaxHeight, extractOrder: extractOrder, extractWidth: extractWidth, kind: kind, left: leftPosition, thumbnailHeight: thumbnailHeight, thumbnailWidth: thumbnailWidth, top: topPosition};
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var author$project$Card$innerHtml = function (html) {
	return A2(elm$html$Html$Attributes$attribute, 'inner-html', html);
};
var elm$html$Html$img = _VirtualDom_node('img');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var author$project$Card$viewLogo = function () {
	var logoUrl = 'https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg';
	return A2(
		elm$html$Html$img,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ContextCardLogo'),
				elm$html$Html$Attributes$src(logoUrl)
			]),
		_List_Nil);
}();
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$html$Html$Attributes$target = elm$html$Html$Attributes$stringProperty('target');
var author$project$Card$viewThumbnail = F3(
	function (url, dimensions, thumbnail) {
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$href(url),
					elm$html$Html$Attributes$target('_blank'),
					elm$html$Html$Attributes$class('ContextCardThumbnail'),
					A2(elm$html$Html$Attributes$style, 'background-image', 'url(' + (thumbnail.source + ')')),
					A2(
					elm$html$Html$Attributes$style,
					'width',
					author$project$Card$px(dimensions.thumbnailWidth)),
					A2(
					elm$html$Html$Attributes$style,
					'height',
					author$project$Card$px(dimensions.thumbnailHeight))
				]),
			_List_Nil);
	});
var author$project$Card$wikipediaUrl = function (link) {
	return 'https://' + (link.lang + ('.wikipedia.org/wiki/' + link.title));
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Card$viewSummary = F3(
	function (link, dimensions, summary) {
		var thumbnail = summary.thumbnail;
		var url = author$project$Card$wikipediaUrl(link);
		var _n0 = dimensions;
		var constrainedSize = _n0.constrainedSize;
		var kind = _n0.kind;
		var extractOrder = _n0.extractOrder;
		var extractWidth = _n0.extractWidth;
		var extractMaxHeight = _n0.extractMaxHeight;
		var extractStyles = _List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$style,
				'order',
				elm$core$String$fromInt(extractOrder)),
				A2(
				elm$html$Html$Attributes$style,
				'width',
				author$project$Card$px(extractWidth)),
				A2(elm$html$Html$Attributes$style, 'max-height', extractMaxHeight)
			]);
		var summaryStyles = _List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$style,
				'flex-direction',
				function () {
					if (kind.$ === 'Horizontal') {
						return 'row';
					} else {
						return 'column';
					}
				}()),
				A2(
				elm$html$Html$Attributes$style,
				constrainedSize.styleAttr,
				author$project$Card$px(constrainedSize.value))
			]);
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('ContextCardSummary'),
				summaryStyles),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$class('ContextCardExtract'),
						extractStyles),
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$href(url),
									elm$html$Html$Attributes$target('_blank')
								]),
							_List_fromArray(
								[author$project$Card$viewLogo])),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									author$project$Card$innerHtml(summary.contentHtml)
								]),
							_List_fromArray(
								[
									elm$html$Html$text(summary.contentText)
								]))
						])),
					function () {
					if (thumbnail.$ === 'Just') {
						var thumb = thumbnail.a;
						return A3(author$project$Card$viewThumbnail, url, dimensions, thumb);
					} else {
						return elm$html$Html$text('');
					}
				}()
				]));
	});
var author$project$Data$dirToString = function (dir) {
	if (dir.$ === 'LTR') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var elm$html$Html$Attributes$dir = elm$html$Html$Attributes$stringProperty('dir');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseenter',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseleave',
		elm$json$Json$Decode$succeed(msg));
};
var elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var elm$html$Html$Lazy$lazy3 = elm$virtual_dom$VirtualDom$lazy3;
var author$project$Card$view = F4(
	function (events, link, maybeSummary, dismissed) {
		if (maybeSummary.$ === 'Just') {
			var summary = maybeSummary.a;
			var eventAttrs = dismissed ? _List_Nil : _List_fromArray(
				[
					elm$html$Html$Events$onMouseEnter(
					events.mouseEnter(link)),
					elm$html$Html$Events$onMouseLeave(
					events.mouseLeave(link))
				]);
			var dimensions = A2(author$project$Card$getDimensions, link, summary);
			return A2(
				elm$html$Html$div,
				_Utils_ap(
					_List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('ContextCard', true),
									_Utils_Tuple2('ContextCardDismissed', dismissed)
								])),
							elm$html$Html$Attributes$dir(
							author$project$Data$dirToString(summary.dir)),
							A2(
							elm$html$Html$Attributes$style,
							'top',
							author$project$Card$px(dimensions.top)),
							A2(
							elm$html$Html$Attributes$style,
							'left',
							author$project$Card$px(dimensions.left))
						]),
					eventAttrs),
				_List_fromArray(
					[
						A4(elm$html$Html$Lazy$lazy3, author$project$Card$viewSummary, link, dimensions, summary)
					]));
		} else {
			return elm$html$Html$text('');
		}
	});
var author$project$UiTests$events = {
	mouseEnter: function (_n0) {
		return _Utils_Tuple0;
	},
	mouseLeave: function (_n1) {
		return _Utils_Tuple0;
	}
};
var author$project$UiTests$viewCard = function (_n0) {
	var title = _n0.a;
	var _n1 = _n0.b;
	var link = _n1.a;
	var maybeSummary = _n1.b;
	var dismissed = _n1.c;
	return A4(author$project$Card$view, author$project$UiTests$events, link, maybeSummary, dismissed);
};
var author$project$UiTests$titleLinkId = F2(
	function (title, link) {
		return title + (' - ' + link.title);
	});
var elm$html$Html$li = _VirtualDom_node('li');
var author$project$UiTests$viewIndex = function (_n0) {
	var title = _n0.a;
	var _n1 = _n0.b;
	var link = _n1.a;
	var maybeSummary = _n1.b;
	var dismissed = _n1.c;
	return A2(
		elm$html$Html$li,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis'),
				A2(elm$html$Html$Attributes$style, 'overflow', 'hidden'),
				A2(elm$html$Html$Attributes$style, 'word-break', 'break-all'),
				A2(elm$html$Html$Attributes$style, 'white-space', 'nowrap')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						elm$html$Html$Attributes$href(
						'#' + A2(author$project$UiTests$titleLinkId, title, link)),
						A2(elm$html$Html$Attributes$style, 'color', '#005fc7')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$UiTests$titleLinkId, title, link))
					]))
			]));
};
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$UiTests$viewViewport = function (_n0) {
	var title = _n0.a;
	var _n1 = _n0.b;
	var link = _n1.a;
	var maybeSummary = _n1.b;
	var dismissed = _n1.c;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
				A2(
				elm$html$Html$Attributes$style,
				'top',
				author$project$UiTests$px(link.viewport.viewport.y)),
				A2(
				elm$html$Html$Attributes$style,
				'left',
				author$project$UiTests$px(link.viewport.viewport.x)),
				A2(
				elm$html$Html$Attributes$style,
				'width',
				author$project$UiTests$px(link.viewport.viewport.width)),
				A2(
				elm$html$Html$Attributes$style,
				'height',
				author$project$UiTests$px(link.viewport.viewport.height)),
				A2(elm$html$Html$Attributes$style, 'background-color', 'white'),
				A2(elm$html$Html$Attributes$style, 'box-shadow', '0px 2px 2px rgba(0,0,0,0.1)')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						elm$html$Html$Attributes$id(
						A2(author$project$UiTests$titleLinkId, title, link)),
						A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2(elm$html$Html$Attributes$style, 'top', '-30px'),
						A2(elm$html$Html$Attributes$style, 'left', '10px'),
						A2(
						elm$html$Html$Attributes$style,
						'width',
						author$project$UiTests$px(link.viewport.viewport.width)),
						A2(
						elm$html$Html$Attributes$style,
						'height',
						author$project$UiTests$px(link.viewport.viewport.height)),
						A2(elm$html$Html$Attributes$style, 'color', 'black'),
						A2(elm$html$Html$Attributes$style, 'font-weight', 'bold'),
						A2(elm$html$Html$Attributes$style, 'font-size', '16px'),
						A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis'),
						A2(elm$html$Html$Attributes$style, 'overflow', 'hidden'),
						A2(elm$html$Html$Attributes$style, 'word-break', 'break-all'),
						A2(elm$html$Html$Attributes$style, 'white-space', 'nowrap')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$UiTests$titleLinkId, title, link))
					])),
				A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2(
						elm$html$Html$Attributes$style,
						'top',
						author$project$UiTests$px(link.rect.top)),
						A2(
						elm$html$Html$Attributes$style,
						'left',
						author$project$UiTests$px(link.rect.left)),
						A2(
						elm$html$Html$Attributes$style,
						'width',
						author$project$UiTests$px(link.rect.width)),
						A2(
						elm$html$Html$Attributes$style,
						'height',
						author$project$UiTests$px(link.rect.height)),
						A2(elm$html$Html$Attributes$style, 'background-color', '#ffd5d5'),
						A2(elm$html$Html$Attributes$style, 'box-shadow', '0px 5px 20px rgba(0,0,0,0.1)'),
						A2(elm$html$Html$Attributes$style, 'border-radius', '3px')
					]),
				_List_Nil)
			]));
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$ul = _VirtualDom_node('ul');
var author$project$UiTests$main = A2(
	elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A3(
			elm$html$Html$node,
			'style',
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(author$project$Card$styles)
				])),
			A2(
			elm$html$Html$ul,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'columns', '3'),
					A2(elm$html$Html$Attributes$style, 'font-size', '14px'),
					A2(elm$html$Html$Attributes$style, 'list-style-position', 'inside'),
					A2(elm$html$Html$Attributes$style, 'list-style-type', 'none')
				]),
			A2(elm$core$List$map, author$project$UiTests$viewIndex, author$project$UiTests$cards)),
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'position', 'relative')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(
							elm$html$Html$Attributes$style,
							'height',
							author$project$UiTests$px(
								(elm$core$List$length(author$project$UiTests$cards) + 1) * author$project$UiTests$viewportHeight))
						]),
					A2(elm$core$List$map, author$project$UiTests$viewViewport, author$project$UiTests$cards)),
					A2(
					elm$html$Html$div,
					_List_Nil,
					A2(elm$core$List$map, author$project$UiTests$viewCard, author$project$UiTests$cards))
				]))
		]));
_Platform_export({'UiTests':{'init':_VirtualDom_init(author$project$UiTests$main)(0)(0)}});}(this));