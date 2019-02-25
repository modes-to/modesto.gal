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

// var n = new Date(1976, 11, 14);
// alert (n);
	
// function diaGalegueiro(data) {
//     var diaSem = ["Segundafeira", "Terzafeira", "Cortafeira", "Quintafeira", "Sestafeira", "Sétimafeira", "Primeirafeira"];
//     var mes = ["Xaneiro", "Febereiro", "Marzal", "Abril", "Maio", "Sanxoán", "Santiago", "Agosto", "Setembro", "Outono", "Santos", "Nadal"];
//     return diaSem[data.getDay()] + ", " + data.getDate() + " de " + mes[data.getMonth()] + " do " + data.getFullYear();
// }
// var hoxe = new Date();
// alert("Hoxe é " + diaGalegueiro(hoxe));


/*


    Crea una función de calendario perpetuo que al pasarle una fecha te diga en qué día de la semana cae,
    pudiéndole pasar cualquier fecha del pasado o del futuro. El día deberá devolverlo en formato textual,
    es decir, Lunes, Martes, etc... Una pregunta interesante que debes plantearte: ¿ocurrirá algo extraño
    si le pasas una fecha anterior al epoch, es decir, anterior a 1972? Prueba con la fecha del descubrimiento
    de América, a ver si te dice en qué día de la semana cayó ;-)
*/

// function diaSemana(data) {
//     var dias = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
//     return (data instanceof Date) ? dias[data.getDay()] : "Non é unha data";
// }
// var exemplo = new Date(1976, 11, 14);
// alert(diaSemana(exemplo));


/*
    Crea una función capaz de convertir una cadena con la fecha y hora en formato corto como este "dd/mm/yyyy hh:mm:ss",
    en una variable de tipo fecha en JavaScript. Esta función implica sobre todo el procesamiento de cadenas con una posterior
    conversión a fecha partiendo de sus partes. Ten en cuenta que puede faltar la hora o la propia fecha (ser solo la hora,
    pero sin fecha delante, con lo cual sería el día de hoy a esa hora), y que el año podría estar expresado con 2 o 4 números.
    Recomendación: utilizar expresiones regulares para analizar la cadena y validarla.
*/

// function converterDatas(entrada) {
//     var agora = new Date();
//     var data = entrada.match(/\d{2}\/\d{2}\/\d{2,4}/);
//     var hora = entrada.match(/\d{2}:\d{2}:\d{2}/);
//     if (!data && !hora) return "Valor incorrecto";
//     if (data) {
//         var aData = data[0].split("/");
//         if (aData[2].length == 2) aData[2] = "19"+aData[2];
//         agora.setFullYear(aData[2], aData[1]-1, aData[0]);
//         }
//     if (hora) {
//         var aHora = hora[0].split(":");
//         agora.setHours(aHora[0],aHora[1],aHora[2]);
//         }
//     return agora
//     }
// alert(converterDatas("23:34:14"));

/*
    Retoca el ejemplo del módulo en el que se crea un formato personalizado de fecha larga en español para que ponga el día del mes
    y el año en texto (por ejemplo, "veintitres de mayo de dos mil diecisiete"), y añádele también la hora al final en formato HH:MM:SS.
*/

/*
    Intenta escribir al menos una de las funciones "get" de la clase Date para convertirlas en funciones UTC.
    Por ejemplo, el método getDate que devuelve el día del mes de una fecha, que tenga en cuenta la zona horaria actual
    para referir la fecha a UTC. Es decir, trata de clonar la funcionalidad del método getUTCDate.
    Comprueba que tu versión y la nativa son congruentes probándolo con fechas en los extremos de un día, teniendo en cuenta
    la zona horaria en la que tú te encuentras. Por ejemplo, si estás en España en horario de invierno (UTC+1),
    comprueba que cualquier fecha con una horaria dentro de la primera hora del día, con tu función devuelve realmente el día anterior
    (deberías restarle 1 a la fecha para referir a UTC).
*/    
/*
    Crea una función llamada dateAdd que permita sumar cualquier intervalo a una fecha. Los parámetros que tomará son:

        intervalo: una cadena de texto con el tipo de intervalo a sumar a la fecha, siendo los valores válidos los siguientes:

            "y": años

            "m": meses

            "w": semanas

            "d": días

            "h": horas

            "mm": minutos

            "s": segundos

            "ms": milisegundos

        numero: la cantidad a sumar

        fecha: la fecha a la que se le suma el intervalo.

De esta manera, por ejemplo, para poder sumar 7 días a la fecha actual podríamos escribir lo siguiente:

var hoy = new Date();
var dentroDeUnaSemana = dateAdd("d", 7, hoy); //o también dateAdd("w", 1, hoy);

facilitándonos mucho las operaciones con fechas.

Como requisitos adicionales para crear esta función se solicitan:

    Que se compruebe la validez de todos los parámetros
    (que es un intervalo válido, que el número a sumar sea un entero y la fecha una fecha válida).
    El intervalo puede especificarse en mayúsculas o minúsculas indistintamente.

    Que soporte números negativos, de modo que en la práctica se puedan restar intervalos también.

    Que la selección del intervalo no se realice con un switch, para hacer el código lo más compacto posible.

    Crear una función dateDiff que nos devuelva la diferencia existente entre dos fechas expresada en el intervalo especificado. Tomará como parámetros:

        intervalo: con los mismos valores posibles que en el caso anterior.

        f1: la primera fecha con la que operar.

        f2: la segunda fecha con la que operar.

De este modo, por ejemplo, para obtener la diferencia en años entre la fecha actual y el 1/1/2010 a las 00:00, se escribiría:

var base = new Date(2010, 0, 1); // 1/1/2010
var hoy = new Date();
alert(dateDiff("y", base, hoy)); //Diferencia en años
alert(dateDiff("w", base, hoy)); //Diferencia en semanas

Se aplican los mismos requisitos adicionales que en el caso anterior pero además se debe tener en cuenta el caso de que la segunda fecha no sea mayor que la primera y hacer que la función trabaje de manera correcta adaptándose a esta circunstancia.
*/

/*

Crea una página que contenga un botón.Cada vez que pulses el botón abre una nueva ventana
mediante código que muestra una página tuya, propia, dentro de la misma carpeta (necesitarás
llamar a una función JavaScript desde el evento onclick del botón.Ya lo hemos visto anteriormente aunque no hayamos estudiado los eventos).

Realiza las siguientes variaciones del ejercicio probándolas al menos en Chrome, Firefox e Internet Explorer (si trabajas con Windows):

Simplemente abre una ventana, con el tamaño y elementos por defecto.

Abre la ventana dándole un tamaño determinado.

Ahora quítale la barra de herramientas, la de direcciones y la de estado.¿Varía su tamaño al retirar estos elementos o queda el mismo que antes?

    Desde la ventana que la ha abierto (la original del botón), intenta cambiar por código el título de la nueva ventana,
    justo después de haberla abierto.¿Te permite hacerlo?¿Y si abres una página ajena, por ejemplo www.google.com ?

        Haz que si la ventana auxiliar está abierta, al pulsar el botón de nuevo se cierre.Si lo vuelves a pulsar
        que se abra otra vez.Es decir, que el mismo botón sirva para abrir o cerrar la ventana en función de si esta ya existe o no.

Como de momento no sabemos crear eventos bien, utiliza un temporizador que, tras haber abierto la ventana,
monitorice cada segundo si la ventana auxiliar está abierta o no.Si se ha cerrado, que cancele el temporizador
y que llame a la función original para que vuelva a mostrar la ventana y reinicie el temporizador.
¿Te lo permite el navegador? Si no te lo permite ¿a qué es debido?¿cómo detectas que no te lo ha permitido?
(Pista: ¿qué devuelve window.open en ese caso?). Sustituye lo de volver a abrir la ventana por que simplemente
se muestre un alert indicando que la ventana auxiliar se ha cerrado, para comprobar que, efectivamente lo estás haciendo bien.

En la página que carga dentro de la venta auxiliar deberás detectar con el mismo método (temporizadores)
si se ha cerrado la página original que la abrió, cerrando automáticamente la ventana auxiliar en dicho caso.
De este modo te aseguras de que la ventana auxiliar no va a quedar colgando por ahí sin su "madre".

En la página que se abrirá en la ventana auxiliar crea una variable global de nombre "nombreASaludar"
con una cadena vacía, y un método "saludar" que mostrará un simple alert con un "Hola " + nombreASaludar.
Accede a la variable global desde la ventana que la ha abierto e introduce un nombre cualquiera.
Luego llama al método de saludar y comprueba si se muestra el nombre apropiado.Haz algo similar con la ventana "madre"
pero desde la ventana hija (puedes hacerlo al pulsar un botón en esta última).
*/



/*
Copia la página "madre" para no perder el código, y ahora haz que, cada vez que se pulse el botón, se abra una nueva ventana
con open.Vamos a probar los diferentes nombres y cómo reaccionan los diferentes navegadores.

Haz que el nombre de las nuevas ventanas sea "_blank".¿Se abre una ventana diferente de cada vez o siempre la misma?.

        Haz que el nombre de las nuevas ventanas sea "miVentana".¿Se abre una ventana diferente de cada vez o siempre la misma?.
        ¿La referencia que se obtiene al llamar a open es la misma de cada vez o cambia?

    Haz que el nombre de las nuevas ventanas sea "_self".¿Qué ocurre ahora?

        Deja el nombre "_blank".¿Qué ocurre en los diferentes navegadores cada vez que pulsas el botón?¿Avisan de alguna manera para evitar que se abran más ventanas?

            Crea un contador global que aumente en 1 cada vez que abres una ventana.Usa ese contador para cambiar el nombre de la ventana,
            de modo que cada vez sea "miVentana_1", "miVentana_2" y así sucesivamente.

Haz que cada vez que abras una ventana se guarde su referencia en una matriz, de modo que tengas todas las referencias en ésta.Haz que mediante
otro botón se cierren todas las ventanas abiertas cuando se pulse éste.
*/
/*
Crea una página con un formulario (puedes reutilizar la que hemos usado en alguno de los vídeos) y escribe el código necesario
para validar los campos que hay en dicho formulario.A saber; que los que son obligatorios se hayan rellenado
(y no vale con espacios en blanco, OJO), que los que son correos electrónicos o teléfonos, tengan el formato apropiado,
los que sean números lo sean realmente, etc... Si la validación no tiene éxito no se enviará el formulario y deberás avisar
al usuario de este hecho mostrando en un DIV a la derecha del formulario un resumen con todo lo que está mal.Si todo es correcto, se enviará el formulario (usando su método submit).
*/
/*
Modifica el código anterior para que en cuanto se encuentre un error se resalte el campo que lo tiene (por ejemplo un campo que es obligatorio
y está vacío), cambiando el color de fondo y el borde del mismo usando para ello una clase "error" con estos estilos.Además, muestra un mensaje
justo a continuación del campo y un poco separado, describiendo el error o errores que haya en ese campo (por ejemplo "Campo obligatorio").
Asegúrate de que ese mensaje se muestra solo una vez.Es decir, si aún marcando el error, se pulsa de nuevo el botón de enviar y sigue el mismo error,
que no se muestre dos veces el mensaje.Pon además el foco en el control que contiene el error llamando a su método focus().
*/
/*
Examina los diferentes métodos y propiedades que tienen disponibles los campos de tipo < input > de HTML,
que son los que vas a utilizar en formularios.EN la referencia del enlace anterior verás que hay multitud de propiedades y métodos
que puedes utilizar.No es necesario que te los aprendas de memoria (para eso está Internet) y, salvo los más comunes que uses en el día a día,
no te los debes aprender, pero sí conviene que te los veas todos para conocer qué posibilidades te dan, qué propiedades y métodos comunes tienen todos ellos,
la diferencia entre navegadores, etc... Esa referencia Dottoro, así como la de Mozilla Developer Network son dos recursos que siempre deberías tener a mano para consultar.
*/
