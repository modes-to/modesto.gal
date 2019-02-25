// var v1 = 023;
// var m="Hahaha";
// var torpedo = function(m){
//     alert(cousa);
//     var cousa="Hahaha";
//     m = "Tralara";
//     alert(m);
// };
// torpedo("Hahahahaa seee");
// alert(m);
// var aleatorio = function(){
//     var result=Math.random()*200-100;
//     return result;
// }
// var azar = function(max){
//     return Math.random()*max;
// }
// alert(azar(25));
// alert(azar(-50));
// alert(azar(0));
// function elMayor (a,b) {
//     return a > b ? a : b;
// }
// alert (elMayor(6,65));
// function dividir (a, b) {
//     return b === 0 ? 0 : a / b;
// }
// alert (dividir(4,0));
// function fact (num) {
//     if (typeof(num) != "number") return 0;
//     var res = num;
//     if (num > 0) {
//         while (num > 1) {
//         num--;
//         res = res * num;
//     }
// }
// else {
//     while (num < -1) {
//         num++;
//         res = res * num;
// }
// }
//     return res;
// }
// alert(fact(0));

// function fact (num) {
//     if (typeof(num) != "number") return 0;
//     if (num == 0) {
//         return 1
//     }
//     if (num > 0) {
//     return num * fact(num-1)}
//     else {
//         return num * fact(num+1)}
// }
// alert(fact(-5));

// function ordenarMenorMaior(a,b,c) {
//     if (a>b) 
//     {
//         if (a>c) 
//         {
//             if (b>c) 
//             {
//                 return a + " " + b + " " + c
//             }
//             else 
//             {
//                 return a + " " + c + " " + b
//             }
//         }
//         return c + " " + a + " "+ b 
//     }
//     else
//     {
//         if (a>c)
//         {
//             return b + " " + a + " " + c
//         }
//         else
//         if (b>c)
//         {
//             return b + " " + c + " " + a
//         }
//         return c + " " + b + " " + a
//     }
// }
// alert(ordenarMenorMaior(5,3,8));

// function califica(nota) {
//     switch(true){
//         case nota < 50 : return "Suspenso"; break;
//         case nota >= 50 && nota < 60 : return "Aprobado"; break;
//         case nota >= 60 && nota < 70 : return "Bien"; break;
//         case nota >= 70 && nota < 80 : return "Notable"; break;
//         case nota >= 80 && nota <=100 : return "Sobresaliente"; break;
//         }
//            return "Nota no válida";
// }
// alert(califica(79));

// var matriz1 = new Array(10);
// for (var i=0; i<matriz1.length; i++) {
//     matriz1[i]=i+1;
// }
// alert (matriz1);
/* 

Crea una función que tome como parámetro una matriz y calcule el máximo de los elementos que ésta contiene, desechando los que NO son números.
Lo mismo para el mínimo. ¿Has tenido en cuenta todas las posibles circunstancias (por ejemplo que no haya ningún número, que todos los números sean iguales...?
¿Funcionaría tu función en estos casos?

 */

// var elementoMax = function (matriz) {
//     var max = matriz[0];
//     for (i=1; i<matriz.length; i++) {
//         if (isNaN(matriz[i]) === false) {
//             if (matriz[i]>max) {max=matriz[i]}
//         }
//     }
//     return max;
// }
// var elementoMin = function (matriz) {
//     var min = matriz[0];
//     for (i=1; i<matriz.length; i++) {
//         if (typeof(matriz[i]) === "number") {
//             if (matriz[i]<min) {min=matriz[i]}
//         }
//     }
//     return min;
// }
// var matrixxx = [42,"kakao",234,1,128,3,"coco"];
// alert (elementoMax(matrixxx));
// alert (elementoMin(matrixxx));

/* Crea una función que permita multiplicar una matriz lineal (de una sola dimensión) por cualquier número. */

// function multiplicaMatriz (matriz,factor) {
//     var resultado = new Array (matriz.length);
//     for (var i=0; i<matriz.length; i++) {
//         resultado[i]=matriz[i]*factor;
//     }
//     return resultado;
// }
// var matrixxx = [42, 6, 3, 2, 5, 4, 1];
// alert(multiplicaMatriz(matrixxx,3));

/* Crea una función para multiplicar entre sí dos matrices de cualquier dimensión.
Debes tener cuidado porque no es posible multiplicar entre sí matrices de cualquier dimensión, así que habrá que comprobarlo.
Además deberás comprobar que todos los elementos son números. Si necesitas ayuda para aprender a multiplicar matrices, este enlace te puede resultar útil.
Y para verlo más gráficamente y paso a paso, esta herramienta es sensacional. */

// function multiplicaMatrices (a,b) {
//     if (a.length !== b.length) {
//         return ("Las matrices no tienen la misma dimensión");
//     }
//     else
//     {
//     for (var i=0; i<a.length; i++) {
//         if (typeof(a[i]) !== "number") return "La primera matriz no contiene sólo números";
//     }
//     for (var i=0; i<b.length; i++) {
//         if (typeof(b[i]) !== "number") return "La segunda matriz no contiene sólo números";
//     }
//     var resultado = new Array (a.length);
//     for (var i=0; i<a.length; i++) {

//             resultado[i]=a[i]*b[i];
//         }
//         return resultado;
//     }
// }
// var matriz1 = [20,3,4,3,1];
// var matriz2 = [2,4,3,5,4];
// alert(multiplicaMatrices(matriz1,matriz2));

/* 
    ¿De qué manera podrías hacer que una matriz compuesta de números exclusivamente, se pudiera ordenar considerando sus valores,
    es decir, sin considerar que son cadenas como hace sort por defecto? Si tienes que escribir una función de ordenación, ¿cuál sería la función más simple que podrías escribir?
    (pista, tendría únicamente una línea).
// */
// function ordenaNum(a, b) {
//     return a - b;
// }
// var matriz23 = [4, 3, 12, 5, 76];
// alert(matriz23.sort(ordenaNum));


/*
    Crea una función que permita filtrar cualquier matriz con filter y devuelva únicamente los elementos numéricos que ésta contenga, desechando los que no sean de este tipo de datos.
//  */
// function soloNumeros(n) {
//     if (typeof(n) === "number") return n;
// }
// var matriz22 = [2,8,"cje",34,23,"jc",9];
// alert (matriz22.filter(soloNumeros));

/*

    Crea una función que pase de minúsculas a mayúsculas una cadena, usando para ello la codificación Unicode de las letras,
    pero no usando la función toUpper (que sería directo). Se trata de que consolides los conceptos sobre codificación Unicode
    y practiques la lógica pensando en cómo deberías hacerlo y qué cosas debes tener en cuenta para que funcione.
    Una pista: en la cadena de ejemplo que uses para convertir a mayúsculas introduce un poco de todo un poco: letras mayúsculas y minúsculas,
    números y algún símbolo como un paréntesis y asegúrate de que lo hace bien con esa cadena.
*/
// function pasaMays(texto) {
//     var res = "";
//     for (i = 0; i < texto.length; i++){
//         var valor = texto.charCodeAt(i);
//         if (valor >= 0x61 && valor < 0x7A) {
//             res+=String.fromCharCode(valor-32)
//         }
//         else {
//         res+=String.fromCharCode(valor)
//         }
//     }
//     return res;
// }
// alert(pasaMays("La casa de (Pepito) era muy VOnit232a"));

/*
    Crea una función que separe las palabras de una frase y las devuelva formando una matriz, sin utilizar el método split.
    Es decir, que busque todos los espacios, vaya extrayendo cada trozo de la frase (cada palabra) y las vaya metiendo en una matriz.
    El resultado debería ser idéntico a usar la función split con un espacio (split(" ")) con la cadena. Eso te servirá de comprobación.
    Te valdrá para practicar estructuras y funciones de cadenas.
*/
// function separaPalabras(frase) {
//     var matrizRes = new Array();
//     var pos1 = -1;
//     var pos2 = -1;
//     var i = 0;
//     do {
//         pos1 = pos2;
//         pos1++;
//         pos2 = frase.indexOf(" ", pos1);
//         if (pos2 !== -1) {
//             matrizRes[i] = frase.substr(pos1, pos2 - pos1);
//             i++
//         }
//     }
//     while (pos2 !== -1)
//     if (pos1 !== frase.length) {
//         matrizRes[i] = frase.substr(pos1);
//     }
        
//     return matrizRes;
// }
// alert(separaPalabras("En la casa de Pepito iaiao"));


/*

    Escribe una función que transforme cualquier número entre 0 y 99.999 a su representación textual.
    Por ejemplo, para el número 24.192 la función devolvería “veinticuatro mil ciento noventa y dos”, así con todas las letras.
    Esto es muy útil para mostrar cantidades, por ejemplo monetarias, en un formato apropiado para cubrir ciertos requisitos legales
    (rellenar un cheque sería un caso común). Este ejercicio es mucho más complejo que el que hemos realizado en el vídeo para convertir
    a numeración romana, y no resultará nada fácil para un principiante. A un programador experimentado es probable que le lleve al menos
    hora y media o un par de horas desde que lo piense bien hasta que lo implemente, así que a ti puede llevarte más tiempo.
    No hay una única solución, pero trata de hacerlo lo más optimizado posible, para que sea fácil de entender si lo vuelves a leer dentro de un tiempo.
    No te agobies si no te sale bien o si tardas mucho antes de ver la solución. Es perfectamente normal. Este tipo de ejercicios te irán saliendo mejor
    a medida que adquieras más soltura con el lenguaje JavaScript, aprendas bien a depurar los errores y sobre todo aprendas a pensar en cómo trabaja un programa.

 */

var n = new Date(1976, 11, 14);
alert (n);
	
