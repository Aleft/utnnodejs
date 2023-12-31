/*Notas

Que es API RESTFUL
-Como crearla
Ventajas
vamos a ver como documentar
postman como usarlo
Express.js (Permite trabajar con apis de forma sencilla)

---

Arquitectura de microservicios. Por que trabajar con Apis:
Se orienta a la construccion de una aplicacion para que suceda de la mejor forma posible
Cuando desarrollamos una app Se trata de generar varios "paquetes" para que no sea tan inmensa y sea mas sencillo administrarlo
Dividiremos la aplicacion en diferentes partes (microservicios) y cada uno tendra una DB separada para que cada uno sea independiente.

Esta forma de desarrollar una arquitectura es mejor que la tipo "monolito" donde todo estaba metido en una sola aplicacion y al hacer alguna modificacion se
debia hacer un test a la app entera para asegurarnos de su correcto funcionamiento.

Cada microserv cuenta al ser independiente si algo falla no afecta al resto.

-----

COMO FUNCIONA UNA PAGINA WEB?

Un browser se conecta con un servidor utilizando protocolo http, permite que desde nuestra pc llguemos a una pc en algun lugar del mundo para poder
consultar algo que querramos.
Si yo quiero acceder por ejemplo a google busco la url y el browser genera una peticion http, envia al servidor la orden, construir una respuesta
y responde con html para que el navegador pueda construir la pagina.

-----

QUE ES HTTP

Procoloco de comunicacion utilizado para transferir datos entre devices y servers.
Modelo cliente-servidor
lenguaje simple: head y body.

---- 

HTTP: Urls de aplicaciones web
    HTTP://             -> Protocolo
    HTTPs://            -> Protocolo segurizado
    WWW.EXAMPLE.COM     -> Nombre de dominio, se le da a una webpage 
    :80                 -> Le indica el puerto al que debe comunicarse, separa una aplicacion de otra. 443 (https) 80 (http)
                        Cuando estamos en desarrollo si indicamos un puerto, pero por lo general no los usamos cuando la aplicacion ya esta subida.
    /path/to/myfile.html -> Ingresamos a un archivo que esta publico que esta en el servidor
    ?key1=value1&key2=value2 -> Estamos intentando acceder a algun dato que tiene que ver con estos valores.
    #someWhereInTheDocument -> Referencia que hacmeos dentro de una pagina web que sirve para hacer referencia a contenido dentro de la webpage.


----

HTTP Componentes

Tiene Peticion (request) y respuesta (response)

Get indica una request
Recurso: el path
cuando recibe la peticion el servidor construye una respuesta.
Existen los codigos de respuesta, indicamos por este medio algun tipo de error o actividad. el mas comun es el 404.

rango 200 = respondio ok el srv
si es != 200 hubo algun problema

Content-Type= Indica al cliente en que formato envia la info
Content-Lenght: Size de bits.


-----

API RESTFUL

API: Conjunto de reglas que sirven para conectar software entre si. (Una app con otra)
Rest: Forma en que podemos construir app que utilizan http para poder construirse.
Api rest: la fusion hace referencia a un servicio web que implementa arquitectura rest.
Web Apis: Podemos tener un web service que se encarga de comunicarse entre 2 apps.
Api Restful: api rest con buenas practicas.

------

Ventajas de Api RestFul

Flexibilidad:
Permite que diferentes aplicaciones cliente se comuniquen con el servidor a travez de protocoloes de comunicacion estandar.
Vamos a poder utilizarlo para diferentes apps y de forma simplificada.

Escalabilidad:
Podemos tener una api restful disponible para que una aplicacion mobile, browser, etc. Permite a los users acceder desde distintos medios

Reutilizacion:
Permitimos que cualquier cliente pueda utilizar nuestro servicio mediante una conexion estandar, sencilla y que no deban estar escribiendo
todo el tiempo una funcion especifica.

-------

Principios ApiRestFul

Keep it Simple
Sustantivos y no verbos
usar prurales, utilizar parametros, etc.


-------

Vamos a usar estos verbos http en Restful:
GET,POST, PUT/PATCH, DELETE

----


VERSIONES

Es importante tener 2 versiones de la api creada paraque el consumidor tenga tiempo de adaptarse a nuevos disenios y cambios, V1 V2 por ejemplo.

path/V1/PRODUCTOS
path/V2/PRODUCTOS


----

Paginacion

Al tener grandes volumenes de datos es importante crear paginas, por ejemplo que por paginas se muestren 20 o 50 paginas.
Tenemos paremtros de "limit" y "offset", limit para que muestre una maxima cantidad determinada y offset para elegir un rango de resultados
que determinemos, por ejemplo en la pagina uno podemos mostrar un maximo de 10 resultados y que el offset sea desde el resultado 11 al 20.

------

Formatos soportados

La mayoria utiliza JSON

-----------

Utilizar mensajes de error adecuados

Siempre es bueno mostrar codigos de error para saber identificar problemas.

----------

Documentar API RESTFUL

Swagger  nos ofrece reglas, herramientas y especificaciones que nos ayudan a documentar. Para la especificacion se puede trabajar con json o yaml.
Swagger UI: transforma una especificacion swagger/ OpenApi en una pagina web mas amigable.
Swagger Editor: Editor web de especificaciones swagger / OpenApi. Tiene una vista de la especificaion a la izquierda y la vista UI a la derecha. editor.swagger.io/

Podemos diseniar un servicio-microservicio como api restful.


---------

FrontEnd vs Backend

Lo que hay en frontend se desarrolla para el usuario final en js usando react, nos permite desarrollar en forma sencilla y js en el navegador.
El frontend se conecta al backend mediante apis/servicos.
La conexion entre la api y la db se considera Backend.


-----

ExpressJS

Permite estructurar apis de forma sencilla.








*/