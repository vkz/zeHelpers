var lo = require('lodash'),
    util = require('util'),
    colors = require('colors');

function prettyPrint(obj, opts) {
    opts || (opts = {});
    var prompt = String(opts.prompt || ''),
        wrappedObj = lo.isString(obj) && obj || util.inspect(obj, {depth: 300, colors: false}),
        lenmax = lo(wrappedObj.split('\n'))
            .map(function(s) { return s.length })
            .max()
            .value(),
        len = Math.min(lenmax, 75),
        prefix =  repeatStr(len, '<').magenta.bold + '\n',
        postfix = repeatStr(len, '>').cyan.bold + '\n',
        padding = Math.max(len - prompt.length - 1, 0),
        msg = '\n' + wrappedObj + '\n';
    prompt = prompt ? repeatStr(padding, ' ') + prompt.magenta : '';

    if(opts.stringify) return msg;
    console.log(prefix, prompt, msg, postfix, '\n');
}

function repeatStr(len, str) {
    return (new Array(len)).join(str);
}

function addPrettyPrinter(obj, def) {
    obj.pp = def?
        function(options) {
            return prettyPrint(this[def], options);
        } :
        function(what, options) {
            return prettyPrint(what, options);
        };
};
exports.addPrettyPrinter = addPrettyPrinter;
exports.prettyPrint = prettyPrint;
