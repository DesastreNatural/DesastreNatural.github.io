var names = [
"invenciòn",
"refutación",
"desalinización",
"telecomunicación",
"explosión",
"adjuración",
"roturación",
"detonación",
"aculturación",
"osteointegración",
"sobrefacturación",
"concesión",
"calefacciòn",
"desarenación",
"nebulización",
"anonimización",
"desmineralización",
"presunción",
"desinformación",
"decalcificación",
"hipersensibilización",
"poliesterificación",
"quimificación",
"ejercitación",
"sanguificación",	
"profundización",
"aseveración",
"subinversión",
"estivación",
"regionalización",
"reinicialización",
"desafinación"
] ;

var second = [
"agricultura",
"historia",
"logica",
"filosofìa",
"filologìa" ] ;

var adje = ["preandina","precolombiana","chilena","prealpina","tailandes","china"];
var getRandomElem = function (l) {
	return l[Math.floor(Math.random() * l.length)];
} ;
var getPhrase = function () {
	var res = "La ";
	res += getRandomElem(names);
	res += " de la ";
	res += getRandomElem(second) + " ";
	res += getRandomElem(adje) + ".";
	document.getElementById("generated").firstChild.nodeValue = res.toUpperCase();
} ;

