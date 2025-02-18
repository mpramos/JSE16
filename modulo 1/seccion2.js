//! 1.2.1 Herramientas de desarrollo
//? Al igual que cualquier otra tarea, la programación requiere las herramientas y el espacio de trabajo adecuados.
//?  El desarrollo de software, en la mayoría de los casos, requiere un editor de código y un compilador o intérprete
//?  de un lenguaje determinado. Este es un conjunto mínimo, que podemos ampliar según sea necesario con otras herramientas.

//? En esta etapa del curso, aparte del editor e intérprete de código JavaScript, también podemos utilizar el depurador, 
//? que es una herramienta que nos permite, entre otras cosas, pausar el programa en el lugar indicado y analizar su estado
//?  actual (por ejemplo, los valores de las variables indicadas).

//? Por supuesto, las herramientas en cuestión deberán ejecutarse en el ordenador. En esta etapa,
//?  su rendimiento no es particularmente importante, y cualquier unidad que pueda manejar tareas normales de oficina será 
//? suficiente, por lo que es muy recomendable trabajar desde una computadora de escritorio o portátil.

//? No se puede negar que el tamaño del monitor afectará la comodidad de su trabajo. Cuanto más grande sea el monitor, más fácil 
//? será colocar el editor de código, el intérprete y otros contenidos (por ejemplo, este curso) uno al lado del otro. 
//? En circunstancias normales de trabajo, los programadores suelen utilizar varios monitores.

//? El sistema operativo no importa, ya que se puede encontrar la herramienta adecuada para Windows, macOS y Linux.

//? En este momento, hay dos opciones. Puede instalar todas las herramientas necesarias en su máquina y trabajar en el entorno local. 
//? Este es el enfoque preferido, ya que así es como se ve en los proyectos comerciales reales la mayor parte del tiempo.
//?  También puedes personalizar todo para que se adapte a tus necesidades.

//? Otro enfoque es utilizar herramientas en línea. Estos pueden ser convenientes, ya que no necesita instalar ni configurar nada, 
//? simplemente funcionan. La mayoría de ellos te permiten almacenar tu trabajo en la nube para que puedas acceder a él desde diferentes
//?  dispositivos, pero por otro lado, carecen de opciones de personalización y necesitas tener una conexión constante a Internet.

// Todo el código que verás en este curso fue probado tanto en entornos locales como en línea, por lo que ambas opciones son válidas.
// TODO Por último, podemos pasar a la elección de las herramientas.

//* 1.2.2 Entorno de desarrollo en línea
//? Los entornos en línea, comúnmente conocidos como áreas de juegos de código, son sitios que actúan como un editor simple y un
//?  entorno de ejecución. Todos ellos tienen conjuntos de características similares. Tienen diferentes interfaces de usuario,
//?  pero en principio, se comportan de manera similar. Le permiten escribir código, ejecutarlo con fines de prueba y, con mayor
//?  frecuencia, compartirlo con otros usuarios.

//? En el caso de JavaScript, donde la preparación de un entorno local completamente funcional se reduce a instalar un editor de 
//? código y ejecutar el navegador, no son tan importantes como los entornos de desarrollo regulares. Se utilizan principalmente
// ? como plataformas de formación y pruebas, o lugares para publicar ejemplos de soluciones a problemas de programación.

//? Entre los programadores de JavaScript, los más populares son los siguientes:

//? JSFiddle
//? Bolígrafo de código
//? JsBin
//? Plunker

//? Durante el curso, utilizaremos un entorno online integrado con la plataforma de formación. OpenEDG proporciona un entorno sencillo 
//? para escribir y ejecutar código en varios lenguajes de programación, incluido JavaScript. Gracias a eso, podrás practicar todo lo
//?  que hablamos de inmediato.

//? Sin embargo, no olvide que esta plataforma es una solución puramente didáctica y de prueba, y ciertamente no se puede utilizar como
//?  un entorno de desarrollo completo. Sin embargo, es ideal para nuestras necesidades, ya que en la mayoría de los casos podremos 
//? olvidarnos del entorno web de los programas escritos en JavaScript, incluidos los elementos HTML. Esto nos permitirá centrarnos 
//? únicamente en aprender el propio lenguaje JavaScript.

//? Sin embargo, es muy recomendable que también configure su propio entorno de desarrollo local. No es difícil, como descubrirás de 
//? inmediato, y te permitirá hacer algunos ejercicios de una manera mucho más cercana a cómo lo harías durante el desarrollo de software normal. Si, en la parte posterior del curso, alguno de los ejercicios tendrá que realizarse en un entorno de este tipo, se lo indicaremos claramente.

//* 1.2.3 Entorno de desarrollo local
//? Como escribimos anteriormente, los requisitos de JavaScript para el entorno de desarrollo son muy modestos. En la mayoría de los casos, especialmente al comienzo del desarrollo, solo tres elementos son suficientes: un editor de código, un intérprete (es decir, un entorno de arranque) y un depurador.

//? Dependiendo del nivel de sofisticación, la complejidad del proyecto escrito o el entorno para el que escribimos nuestros programas (lado del cliente, lado del servidor, móvil), también pueden ser necesarias otras herramientas.

//? Estos serán, entre otros:

//? Gestores de paquetes: permiten la gestión de bibliotecas (que contienen soluciones listas para usar que podemos utilizar en nuestros programas) o componentes del entorno de desarrollo (por ejemplo, npm o yarn)

//? Ejecutores de tareas y agrupadores de módulos: se utilizan, en términos simples, para automatizar el proceso de desarrollo de software y fusionar el código resultante de muchos archivos y bibliotecas (por ejemplo, Grunt o Webpack)

//? marco de pruebas: permite probar automáticamente la corrección de nuestro programa en busca de posibles errores (por ejemplo, Mocha, Jasmine o Jest)

//? analizadores de seguridad: como puede adivinar, se utilizan para controlar la seguridad de nuestra solución (por ejemplo, Snyk, RetireJS u OWASP Dependency Check)
//? La apertura de los entornos de desarrollo web es tanto una bendición como una maldición. Tenemos una selección de cientos de componentes, a partir de los cuales podemos crear el ambiente más cómodo para nosotros.

//? Sin embargo, su cantidad, además de los cambios dinámicos de herramientas particulares o incluso las tendencias entre los programadores, hacen que sea difícil mantenerse al día con todo lo que sucede dentro de estos entornos.

//? Pero para nosotros, este es un problema para un futuro lejano.

//? Por ahora, necesitamos el trío mínimo: un editor de código, un intérprete y un depurador.

//* 1.2.4 Editor de código
//? El código de casi todos los lenguajes de programación se compone de algún tipo de texto.
//? Entonces, para escribir el código, necesitamos un editor de texto. 
//? Pero debe ser una aplicación que escriba texto sin formato (no puede ser un editor de texto enriquecido, como MS Word).
//?  En otras palabras, solo un simple bloc de notas que pueda escribir .txt archivos es suficiente para escribir código, 
//? aunque es mucho más fácil si usa un editor de código dedicado. El mercado está lleno de editores de código profesionales,
//?  tanto gratuitos como de pago. Algunos de ellos son universales, mientras que otros son exclusivos de idiomas específicos. 
//? La principal ventaja de utilizar un editor de código dedicado es el resaltado de sintaxis, la autofinalización de texto y 
//? la comprobación de errores. Esto mejora la eficiencia del trabajo y la comprensión del código, y reduce el número de errores
//?  y errores tipográficos. Hay muchos buenos editores de código, pero puede ser muy difícil seleccionar uno que funcione para ti.

//TODO Estos son algunos de los más populares:

//? Código de Visual Studio
//? [Windows, macOS, Linux]

//? Potente editor de código gratuito tanto para uso personal como comercial. Se ha convertido rápidamente en uno de los favoritos 
//? cuando se trata de desarrollo web. Tiene características integradas como un depurador de JavaScript y herramientas para optimizar
//?  los proyectos web. También es altamente personalizable a través del sistema de extensiones (hay muchas adiciones dedicadas 
//? especialmente al lenguaje JavaScript).


//? Tormenta web
//? [Windows, macOS, Linux]

//? Un entorno de desarrollo comercial popular, en el que el editor de código es solo uno de los elementos más pequeños de un gran
//? conjunto de herramientas que mejoran el desarrollo de código (por ejemplo, pruebas de soporte). Destinado a proyectos grandes,
//?  puede resultar demasiado pesado y complejo para programas pequeños. Aunque está destinado para uso comercial, es posible obtener
//?  una licencia educativa gratuita.


//? Texto sublime
//? [Windows, macOS, Linux]

//? Editor de código rápido y fácil de usar con muchas funciones avanzadas, como edición de varias líneas, búsqueda rápida y otras.
//?  Hay una versión de prueba disponible, pero para el uso a largo plazo, es necesario comprar una licencia tanto para uso privado 
//? como comercial.


//? Bloc de notas++
//? [Ventanas]

//? Editor de código y texto gratuito y ligero. El programa es pequeño y rápido, admite docenas de lenguajes de programación y se puede ampliar
//? con complementos. Puede ser viejo y feo, pero sigue siendo afilado.


//? Existen muchos otros editores de código, tanto gratuitos como de pago, y puedes usar el que prefieras. Muchos desarrolladores utilizan,
//? entre otras cosas, editores de consolas, incluido el legendario vim. Los editores de consola no se ejecutan en un entorno gráfico, 
//? sino en una consola de texto. Sin embargo, solo puedes llegar a este tipo de soluciones si las tareas que vas a realizar resultan ser
//? demasiado sencillas y quieres complicarte la vida un poco más.

//* 1.2.5 Intérprete
//? Ya hemos hablado un poco sobre el intérprete y su papel. Funciona como un entorno de ejecución para nuestro programa. 
//? Comprueba si hemos cometido algún error formal, por ejemplo, cometer un error tipográfico en el nombre de una función u olvidarse de cerrar
//?  un paréntesis, y luego ejecuta el programa instrucción por instrucción.

//? La elección del intérprete de JavaScript dependerá de la plataforma para la que escribamos nuestro software.
//?  Por ejemplo, si queremos escribir una aplicación sencilla del lado del servidor, es casi seguro que elegiremos el entorno node.js,
//? que tendremos que instalar directamente en nuestro sistema operativo. En el caso del software del lado del cliente, 
//? nuestro intérprete será simplemente el navegador web que ya tiene instalado (porque, ¿de qué otra manera podría leer este curso?).


//? Nuestro curso trata sobre el núcleo de JavaScript, es decir, aquellos elementos del lenguaje que serán igualmente útiles en soluciones
//?  del lado del cliente, del lado del servidor y móviles. Por lo que podemos practicarlos en cualquier entorno, 
//? utilizando cualquier intérprete. La forma más fácil de hacerlo es limitarse a un navegador web.

//? Como dijimos antes, prácticamente todos los navegadores tienen motores JavaScript incorporados (o intérpretes), pero recomendamos
//?  encarecidamente usar Chrome de Google, o FireFox de Mozilla. Ambos son conocidos por su eficiencia y sus herramientas avanzadas 
//? integradas para desarrolladores web (ese eres tú). Están disponibles para Windows, macOS y Linux.

//? Recuerde actualizar regularmente el navegador elegido y utilizar la última versión. Esto es especialmente importante cuando se
//? trabaja con JavaScript. El lenguaje está en constante cambio, con la adición de nuevas características y mecanismos.
//? Es posible que descubra que su navegador favorito, pero algo anticuado, no es compatible con ciertas características del idioma. Su navegador es ahora una herramienta, así que trate de mantenerlo en buen estado actualizándolo regularmente.

