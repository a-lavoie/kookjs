var inHtml = false;

function out(o)
{
    if ( !inHtml ){
	console.log(o);
    } else {
	var args = Array.prototype.slice.call(arguments, 0);
	document.getElementById('output').innerHTML += args.join(" ") + "\n";
    }
}

var aF = function(){
    out("Executing yield argument");
    return "Returning constant value is accepted";
};

function *MyAsync(){
    out("Entering generator execution");
    out("Before yield");
    var v = yield aF();
    out("Inside MyAsync(); v=" + v);
    var w = yield "A constant";
}


out("Starting demo");

var gen = MyAsync();
out("Generated instanciated");
out("Calling .next()")
var valFirstYield = gen.next("1st input");
out("Control given back to caller, a value will be available");
out("Value of first yield: '" + valFirstYield.value + "'");

out("Calling 2nd .next()")
var valSecondYield = gen.next("2nd input");
out("Control given back to caller, a value will be available");
out("Value of first yield: '" + valSecondYield.value + "'");

