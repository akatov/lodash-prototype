;(function(lodash){

    var extensions = {
        array: [
            "compact",
            "difference",
            "drop",
            "findIndex",
            "first",
            "flatten",
            "head",
            "indexOf",
            "initial",
            "intersection",
            "last",
            "lastIndexOf",
            "object",
            "range",
            "rest",
            "sortedIndex",
            "tail",
            "take",
            "union",
            "uniq",
            "unique",
            "unzip",
            "without",
            "zip",
            "zipObject"
        ],
        collection: [
            "all",
            "any",
            "at",
            "collect",
            "contains",
            "countBy",
            "detect",
            "each",
            "every",
            "filter",
            "find",
            "findWhere",
            "foldl",
            "foldr",
            "forEach",
            "groupBy",
            "include",
            "inject",
            "invoke",
            "map",
            "max",
            "min",
            "pluck",
            "reduce",
            "reduceRight",
            "reject",
            "select",
            "shuffle",
            "size",
            "some",
            "sortBy",
            "toArray",
            "where"
        ],
        function: [
            "after",
            "bind",
            "bindAll",
            "bindKey",
            "compose",
            "createCallback",
            "debounce",
            "defer",
            "delay",
            "memoize",
            "once",
            "partial",
            "partialRight",
            "throttle",
            "wrap"
        ],
        object: [
            "assign",
            "clone",
            "cloneDeep",
            "defaults",
            "extend",
            "findKey",
            "forIn",
            "forOwn",
            "functions",
            "has",
            "invert",
            "isArguments",
            "isArray",
            "isBoolean",
            "isDate",
            "isElement",
            "isEmpty",
            "isEqual",
            "isFinite",
            "isFunction",
            "isNaN",
            "isNull",
            "isNumber",
            "isObject",
            "isPlainObject",
            "isRegExp",
            "isString",
            "isUndefined",
            "keys",
            "merge",
            "methods",
            "omit",
            "pairs",
            "pick",
            "transform",
            "values",
            // utilities
            "identity",
            "result"
        ],
        string: [
            // utilities
            "escape",
            "parseInt",
            "template",
            "unescape",
            "uniqueId"
        ],
        number: [
            // utilities
            "times"
        ]
    };

    var mapping = {
        array: [Array],
        collection: [Array, Object, String],
        function: [Function],
        object: [Object],
        string: [String],
        number: [Number]
    };

    lodash.each(extensions, function(fnNames, type){
        lodash.each(mapping[type], function(ctor){
            var extensionObject = {};
            lodash.each(lodash.pick(lodash, fnNames), function(fn, fnName){
                extensionObject[fnName] = function(){
                    var __slice = [].slice;
                    var args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    return fn.apply(null, [this].concat(__slice.call(args)));
                };
            });
            lodash.extend(ctor.prototype, extensionObject, ctor.prototype);
        });
    });

})(typeof module === 'undefined' ? _.noConflict() : require('lodash'));
