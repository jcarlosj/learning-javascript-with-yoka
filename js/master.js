/** Excepciones const */
// INCORRECTO
// const name;
// name = 'Yoka';
/** NOTA: Las propiedades de los objetos asignados a constantes no son protegidos, es por esto que la siguiente sentencia se ejecuta sin problemas. */

const Persona = {
    nombre: 'Yoka',     // Se puede modificar
    edad: 28            // Se puede modificar
}
console .log( Persona );


Persona .nombre = 'Juan';
console .log( Persona );


/** Variables Primitivas 
 *  - Number
 *    - Enteras +/-
 *    - Decimales +/- (float, double)
 *  - String       Juan Carlos (String, pero tambien es un Array de Caracteres)
      - String
      - Char
    - Boleano
      - true (1)
      - false (0)

/** Variables Complejas 
 *  - Objetos
 *      Coleccion de dato de tipo clave valor
 *      var Persona = {
 *          nombre: 'Yoka',
 *          edad: 28
 *      }
*/


