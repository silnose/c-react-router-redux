# Redux React-Router (Platzi Video)

# React Router

React Router es una libería para gestionar rutas en aplicaciones que utilicen ReactJS. Está inspirada en el sistema de enrutado de Ember. js.

<https://reactrouter.com/ >

# Redux

Redux es una herramienta para la gestión de estado en apps Javascript que nació en 2015 de la mano de @dan_abramov basada en la arquitectura flux propuesta por facebook. Aunque suele asociarse a React, lo cierto es que es una librería framework agnostic, que vale la pena conocer aunque no vayas a trabajar con React.

<https://es.redux.js.org/>

Sus 3 principios

- existe solo 1 fuente de verdad (Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.)
- los estados son de solo lectura (La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.)
- solo se pueden utilizar funciones puras (Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.)

En definitiva con redux vamos a poder manejar el flujo de la informacion de nuestra aplicacion.

Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

## Provider

El componente Provider hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect() para extrar los estados/informacion.

# Redux Devtools

<https://medium.com/@e_himmelfarb/implement-redux-devtools-extension-with-thunk-and-other-async-middleware-20e97100b2b0>

# Recuersos interesantes

<https://freefrontend.com/html-css-404-page-templates/>
