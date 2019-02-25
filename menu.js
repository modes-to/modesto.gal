var array = ["https://modesto.gal/", "mgal.png", "blog",
"https://arriame.modesto.gal/", "arriame.png", "Arr&iacute;ame",
"https://gztoday.modesto.gal/", "gztoday.png", "GZtoday",
"http://tumblr.modesto.gal/", "modesTumblr.png", "tumblr",
"https://twitter.com/Modesto", "twitter.svg", "twitter",
"https://www.facebook.com/modes", "face.png", "facebook",
"https://about.me/modestodelrio", "home.png", "about.me",
"https://pailan.modesto.gal", "pailan.png", "pail&aacute;n network",
];
var contido = "";
for (var i=0; i<array.length; i+=3) {
    contido+='<p><a href="'+array[i]+'"><img src="imx/'+array[i+1]+'" alt="'+array[i+2]+'">'+array[i+2]+'</a></p>';
}
document.getElementById("menu").innerHTML = contido;
function comprobarAberta() {
    if (!window.opener) window.close();
}
var espera = setInterval(function () { comprobarAberta() }, 1000);
var nomeSaudar = "";
function saudar() {
    alert("Ola, " + nomeSaudar);
}
saudar();