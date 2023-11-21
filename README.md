# Taller-de-Nivelacion-1-BootCamp 
Taller de nivelacion #1 BootCamp Makaia Front-End

PREGUNTAS TEORICAS

MODULO SOBRE LOGICA, LOGICA DE PROGRAMACION Y PROGRAMACION CON JAVASCRIPT

1. La logica es una tecnica que se utiliza para desarrollar instrucciones en una secuencia (orden) para lograr determinado objetivo. Este es importante para una disposicion coherente y ordenada de las lineas de codigo y lograr el funcionamiento deseado de la interfaz de usuario
2. Un algoritmo es un conjunto de instrucciones logicas y finitas para resolver un conflicto o realizar una tarea 
3. Las estructuras de control son reglas de navegacion que guian al programa a traves de diferentes caminos dependiendo la situacion que presente durante el codigo. La importancia de estas es porque controlan el comportamiento de la aplicacion, dando a revelar informacion, interactuar y realizar acciones necesarias segun el usuario (If-else, for, while).
Los tipos son condicionales y bucles (Iterativas). Los condicionales son aquellos que muestran u ocultan elementos de la interfaz, los bucles son aquellos que recorren arrays, elementos de una lista o realizar acciones repetitivas.
Ejemplo:  El If-else Es aquel que permite ejecutar un bloque de codigo si la funcion se cumple y otro bloque si este no se cumple (Control condicional).
For: Es aquel que permite ejecutar una parte del codigo un numero especifico de veces (Control Bucle o iterativas)
4. Antes del ES6 no se tenia una palabra reservada para las constantes, y para las variables se les declaraban var (var variables = valor). Ahora con el ES6 la palabra clave para declarar variables es let y para las constantes se les declara const. El arreglo de estas es que al usar var, se usaba de manera que tuviera el alcance de funcion o global, lo que generaba problemas con el ambito de programacion en Javascript. Ahora al usar let para variables, este se usaria solo en un bloque de codigo lo cual se limitarian a funcionar en este mismo. Las const se usarian para que una constante a la cual se le asigne cierto valor, este no podria ser modificado mejorando la forma de identificar un valor que no deberia cambiar 
5. Declaracion de funcion: Esta es la manera tradicional de crear funciones, al crear una funcion se utiliza la palabra function y estas pueden ser llamadas antes de su declaracion ya que JavaScript las eleva al principio del ambito:
Expresion de funcion: Estas se asignan a una funcion o variable las cuales pueden tener un nombre o ser anonimas, pero no pueden ser utilizadas antes de ser declaradas:
Funcion de flechas (Arrow function): Es una forma mas corta de escribir funciones. Son utiles para las funciones que no llevan nombre y que tomas el this del lugar donde fueron escritas, siendo mas simple de usar:
6. El uso de funciones es importante por varias razones. La reutilizacion de codigo, aunque son funciones, hay bloques de codigo que podrian ser reutilizadas para una misma finalidad ahorrandonos un poco de tiempo a la hora de programar. Manejos de eventos, al hablar de este manejo nos referimos a la hora de hacer click en botones, cambios de estado, haciendo mas dinamico la interfaz para el usuario y poder manejar el comportamiento de la aplicacion. Tambien son buenos a la hora de leer el codigo, ya que es mas legible al proporcionarlos en bloques pequeños y dividiendo las funciones de otras y asi saber con mas precision la funcionalidad de cada una. Los arrow functions son utiles porque proporcionan una manera mas simple de crear funciones, aparte de que se pueden crear en una sola linea reduciendo la cantidad de codigo haciendolo mas legible.
7. Los parametros con aquellas variables que representa el valor que una funcion espera recibir y los argumentos es aquella variable a la cual ya le damos un valor y trabaja con este mismo, osea que no espera recibir un valor porque ya le dimos uno en concreto.
8. Un callback es una funcion que se pasa como argumento a otra funcion para ejecutarse despues cuando una tarea este completa, como cargar datos o manejar algun evento 
9. El hoisting mueve las declaraciones de variables y funciones hacia arriba. Con las variables, estas se elevan, pero su valor queda en el mismo lugar. Con las funciones, estas se elevan permitiendo llamarlas antes de darles su declaracion
10. Un objeto es una estructura donde puedes guardar informacion, estas se definen con llaves y contienen propiedades con nombres unicos y sus valores asociados. Esto nos ayuda a organizar y manejar informacion de manera ordenada y facil de acceder.
11. Las propiedades son aquellos datos que tiene el objeto, y el metodo es la accion que el objeto puede realizar y/o cosas que puede hacer
12. Las dos formas son por puntuacion y corchetes. La puntuacion es utilizada cuando se conoce el nombre de la propiedad, es mas simple y legible. Los corchetes se usan cuando requieres acceder a la propiedad, pero esta tiene nombres dinamicos, esta almacenada en una variable o proviene de una fuente externa 
13. Si es posible recorrer las propiedades de un objeto utilizando bucles o metodos. Puede ser util para trasformar datos de un objeto y convertirlos a un JSON. Un ejemplo, tenemos un objeto llamado persona y dentro de estan dos propiedades (Nombre y edad), con un for hare que este recorra cada propiedad del objeto hasta encontrar la propiedad solicitada y me la muestre en un console.log:

let persona = {
  nombre: 'Diego', 
  edad: 17 };
for (let edad in persona) {
 console.log (edad  + ': ' + persona[edad])  }; Me mostraria Edad: 17
 
14. Los objetos permiten organizar una lista de datos, por la cual puede almacenar gran variedad de datos (Cadenas, numeros, funcione, etc) brindando la oportunidad de manipular la informacion de una manera mas sencilla 
15. Los arrays es una estructura de datos que permiten almacenar, manipular y procesar un conjunto de datos de una manera sencilla, con el array se puede almacenar varios elementos en una sola variable, tiene un orden numerico lo cual facilita al momento de acceder a estos. Tambien son muy importantes a la hora de realizar bucles, y ayuda un poco reduciendo la cantidad de codigo que se generaria escribiendolos de una manera
16. Para acceder a un array se usa su indice numero, como ya dicho anteriormente estos datos almacenados dentro del array, consiguen un orden numero, el cual puede ser util a la hora de acceder a el. Los indices comienzan desde cero, lo que da a entender que el primer elemento del array tiene el indice 0, el segundo elemento tiene el 1 y asi sucesivamente:

Se tiene un array con la siguiente informacion:
let lacteos = ['Leche', 'Queso', 'Yogourt'];

Con el console.log, se le dira que me muestre en la consola los anteriores elementos, primero se pone el nombre del array y dentro de llaves el numero indice
console.log(lacteos[0]); Mostraria el elemento uno,  que seria Leche
console.log(lacteos[1]); Queso
17. Algunas funciones comunes de arrays son map, filter y reduce.
Map crea un nuevo array a partir de la base del original sin modificar este mismo, puede ser usado al momento de crear una lista.
Filter sirve para crear un array con los elementos especificados al momento de pasar por una funcion, como datos repetidos, condicionales y asi obtener un dato unico. Puede ser usado al momento de crear un formulario.
Reduce sirve para combinar todos los elementos del array y convertirlos en un unico valor, puede ser usada al momento de querer realizar cualquier operacion en la que necesites combinar todos los elementos y tenerlos en un solo resultado 
18.


MODULO SOBRE HTML, CSS Y RESPONSIVE DESIGN 

1. HTML significa Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto). El HTML en pocas palabras proporciona la estructura para crear una pagina. Para darle estilos a esta misma puedes usar css o desde el propio html usar style, aunque si es sugerido utilizar css, y para sus funcionalidades puedes darselas con JavaScript incorporando este mismo a tu html en un script
2. La estructura basica de un html contiene las siguientes etiquetas: 
!DOCTYPE html: Esta etiqueta se usa principalmente para darle el tipo de documento y version a tu pagina.
html: Sirve para envolver dentro de este todo el contenido de tu pagina.
head: Esta se encuentra dentro de html y se usa principalmente para enlazar hojas de estilo, scripts, y cualquier otro elemento que no seria visible en la interfaz del usuario.
title: Para darle el nombre a la pagina y que se haga visible en la pestaña del navegador.
body: Este viene a ser el cuerpo de la pagina, dentro de este se encuentra todo aquello que seria visible en la pagina, todo lo que el usuario necesita ver, texto, fotos, etc
3. CSS es un lenguaje de estilo que tiene como finalidad darle un estilo visual a tu pagina, con este puedes cambiar tamaños de contenedores, tipos y tamaño de letras, espacios, el color de tu pagina, todo lo relacionado con el contenido y apariencia visual de tu pagina, y que el contenido dentro de este sea mas facil de entender para el usuario
4. Los selectores de CSS son los patrones utilizados para seleccionar elementos del HTML y poder aplicar los estilos a estos mismo, los principales tipos de selectores son la clase (.clase) y el ID (#id). La especificidad en CSS determina que regla de estilo aplica al elemento cuando tiene un conflicto. Se calcula teniendo en cuenta el numero de IDs, clases, selectores de tipos, etc. Es importante el entender la especificidad de CSS para ayudarte a evitar estos conflictos y poder aplicar de manera correcta los estilos en tu proyecto web
5. Los Estilos en linea (Inline) son aquellos que se aplican directamente a un elemento HTML a traves del atributo style, este solo afectara al elemento al que se le aplique, se usan principalmente para dar un estilo rapido a un elemento
Estilos internos (Embedded):Se usa el atributo style y este se pone dentro de la etiqueta head del HTML, se puede aplicar a varios elementos dentro del HTM, este solo se usa dentro de un documento en especifico, por lo cual puede causar problemas al reutilizar el codigo.
Estilos externos (External): Este se define dentro de un documento CSS, el cual se encuentra separado del HTML, pero se puede incorporar a este a traves de la etiqueta link, se puede usar en diferentes paginas, y se puede organizar todos los estilos en un solo lugar, lo cual hace el codigo mas legible y organizado.
Es recomendado usar los estilos externos, aparte de ser preferido por la mayoria de programadores, este sirve de mucho al ser mas organizado, poder reutilizar el codigo, y separa tu codigo HTML de los estilos, lo cual evita complicaciones al momento de programar. 
6. Flexbox se considera una herramienta de gran importancia en el lenguaje CSS, este permite darles flexibilidad y adaptacion a los diseños, se usa principalmente en propiedades como display: flex, que permite al contenedor hacerlo flexible y asi poder controlar su disposicion, alineacion, y la distribucion de sus elementos hijos (Elementos que lo conforman), tambien se usa flex-direction, justify-content, aling-items, flex-wrap. La ventaja de usar estos es que nos da la oportunidad de darle diseños responsivos a nuestro proyecto, haciendo que se adapten a cualquier tamaño de pantalla.
7. Display Flex y Display inline-flex: Estos activan el diseño Flexbox en el contenedor padre, permitiendo dar la flexibilidad a los elementos dentro de este.
Flex-direction: Controla la direccion de los elementos (Columna o Fila).
Justify-content: Este permite alinear los elementos a traves del eje principal del contenedor.
Aling-items: Este permite la alineacion vertical u horizontal de los elementos, segun la direccion establecida por flex-direction.
Flex-wrap: Permite alinear los elementos en una sola linea o en multiples. Todo esto dentro del contenedor.
8. CSS Grid Layout es otro metodo de diseño implementado en CSS que permite el uso de creacion de diseños en filas y columnas de una manera mas precisa. Lo que lo diferencia del Flexbox es que el Flexbox se enfoca en diseños ideales para estructuras simples a lo largo de un eje. El CSS Grid Layout permite la creacion mas compleja brindando el control sobre filas, columnas, celdas.
9. 
<!-- <div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
</div> -->

10. El diseño responsivo es lo que se refiere al adaptar la interfaz de una app a diferentes tamaños de pantalla.
11. Media Queries: Permite aplicar medidas o estilos especificos a los elementos dependiendo el tamaño de la pantalla
Unidades de Medida Relativas: Es el uso de medidas que se le da a un elemento para determinar su tamaño
Imagenes y Multimedia Adaptativos: Proporciona diferentes versiones del archivo multimedia para adaptarse a la pantalla sin perder calidad 


MODULO SOBRE DOM E INTERACCION CON EL DOM

1. El DOM es una estructura del HTML que permite interactuar, manipular, cambiar estructuras y estilos de la pagina a traves de scripts, haciendo mas interactivas las aplicaciones web
2. Lo que diferencia el DOM del HTML, es que el HTML es el esqueleto de la pagina, por lo cual es estatico, el DOM es lo que le da interaccion a ese HTML, permitiendo manipularlo a traves de scripts, permitiendo a los programas actualizar la pagina al momento de ser ejecutados
3. Es importante entender estos conceptos porque son de gran importancia al momento de crear sitios dinamicos, responsivos para darle una mejor experiencia al usuario, que no este sobrecargada la pagina y tenga un mejor rendimiento al realizar los servicios 
4. Los eventos del DOM permiten que las experiencias al momento del desarrollo sean mas interactivas, validar los formularios, modificar el contenido de tu pagina. Dan la capacidad de recibir y dar respuesta a la interactividad que espera el usuario
5. 
6. Es importante porque permite responde rlas acciones que realiza el usuario, nos podemos referir a esto a validaciones, cambiar el contenido de la misma, acciones que produce un evento como los clicks, envios, cambio.
Para seleccionar un elemento que utilizaremos, podemos usar el documen.getElement, este trabaja con la clase que le damos a cuyo elemento, id o nombre, un ejemplo seria:
let newElement = document.getElementById("newElement");

Para añadirlo a un controlador de evento usaremos el addEventListener lo que se encargara de escuchar la interaccion. Un ejemplo:
newElement.addEventListener("click", function(){ dentro de este, se realiza la funcion que daria al hacer click })

7. Los tres metodos para seleccionar un elemento son.
getElementById: Selecciona el elemento dependiendo el Id que se le proporciono
getElementByClass: Selecciona el elemento dependiendo la clase proporcionada
QuerySelector: Selecciona el primer elemento con el selector especificado 
QuerySelectorAll: Tambien usa selectores pero en este caso entrega una lista con que contenga el selector requerido 
8. Para crear un elemento HTML agregandolo al DOM, se utiliza el document.createElement dando a entender que tipo de elemento se desea crear. 
const newElement = document.createElement('div');
Const contenedor = document.getElementById('container');
contenedor.appendChild(newElement);
El appendChild es para que este Nuevo element se haga visible.
9. Misma respuesta del punto 3
10. El event bubbling se refiere a la propagacion de los eventos desde el elemento objetivo, hasta el elemento padre, osea que despues de realizar un evento en el hijo, este se propaga hasta llegar al inicio del documento.
El Event Delegation trata de manejar de manera mas eficiente el asignar eventos a un elemento padre, sin necesidad de ir a los elementos hijos de manera individual 
11. Mejoran la interactividad a la hora de realizar y manejar los eventos, facilitando sus revisiones y permitiendo cambios 


MODULO SOBRE COMUNICACIONCON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONIASY PETICIONES HTTPS)

1. El localStorage permite el almacenamiento de datos que quedan de manera permanente en el navegador, estos solo son eliminados por el propio usuario
El sessionStorage: Los datos almacenados en este quedan de manera temporal, se cierran automaticamente a la hora de cerrar la ventana del navegador 
2. La diferencia principal es la duracion de sus datos, uno los almacena de manera permanente hasta que el usuario desee eliminarlos, y el otro son temporales, hasta que se cierre la ventana del navegador, al volver a abrir, estos datos ya no estaran.
3. Son utiles porque cada que se cargue el servidor, evita que los datos carguen desde cero ahorrando tiempo de respuesta y una mejor velocidad, aparte, estos datos son accesibles sin necesidad de tener una conexion wifi. El limite de su almacenamiento es de 5 a 10 Mb, en caso de llegar al limite puede ocasionar errores en la aplicacion web.
4. Las promesas son mecanismos para trabajar operaciones asincronicas, lo que permite manejar resultados exitosos o fallidos. 
5. La asincronia es la capacidad de manejar multiples tareas para que no sea una a la vez, dando es importante a la hora de trabajar con solicitudes que toman su tiempo o simplemente se demoran para finalizar, mejora la lectura de la operacion. 
6. 
const newPetition = () => {
 return fetch('URL de la API')
  .then(response => {
   if (!reponse.ok) {
    throw new Error ('Error en la solicitud '); 
   }
   return response.Json (); 
 });
};

newPetition ()
 .then(resultado => console.log('Datos Obtenidos:', resultado))
 .catch(error => console.log('Error:', error));

7. El JSON Server es una herramienta para crear un servidor de datos simulados, principalmente se usa para hacer pruebas de una aplicacion con API REST con datos simulados dentro del JSON.
8. Es importante porque permite adelantar el trabajo, hacer pruebas para su mejor rendimiento y correcta respuesta sin necesidad de tener disponible el BackEnd.
9. El metodo then es un proceso mas largo y complicado haciendo un poco confuso el codigo, el async/await proporciona un metodo mas corto y legible, haciendo mas facil de leer y manejar. Un ejemplo es el manejo de errores, then los maneja con catch de manera encadenada, el async permite manejar un bloque try/catch para hacer mas Facil el manejo de errores.
10.
11. Fetch es una API basica que trae el propio Js, Axios es una biblioteca externa (Que debe ser instalada) pero ofrece mas utilidades que Fetch a la hora de realizar las peticiones HTTP.
Fetch aunque sea incorporado este no es compatible en versiones antiguas de los navegadores en cambio Axios es compatible con antiguos y modernos.
12. Las peticiones HTTP son consideradas por la oportunidad de tener una interactividad entre el cliente y el servidor y la posibilidad de integrar servicios en tiempo real.
13.
14. El resolver errores con peticiones ayuda de manera que sea mas optimo, seguro y de agrado para el usuario la aplicacion web y que sea sencillo el uso y mantenimiento de esta misma.
15. El then se encarga de capturar las respuestas y el catch encadenado al then es fundamental para capturar cualquier error que genera esta cadena de respuesta, este debe ser puesto al final de la cadena y puede ser utilizado varias veces para los errores especificos en el codigo.
Usando el fetch se usa el throw new error dentro del then para luego ser procesado por el catch.
16. El then se usa en promesas asincronas permitiendo un mejor uso de operaciones, el try/catch se usa para dar excepcion a cierto bloque de codigo especifico.
17. Respuesta punto 6.
