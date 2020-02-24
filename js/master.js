/** Scope */

/** VAR */
var name = 'Yoka';  // Declaración de tipo o ambito global

{   // Ambito 2 o Alcance 2
    var name = 'Juan';
}

console .log( name );

/** LET */
let name2 = 'Yoka';  // Declaración de tipo o ambito global

{   // Ambito 2 o Alcance 2
    let name2 = 'Juan';
}

console .log( name2 );

/** Cosas que causan error 
 *  - Llamar variables, funciones o constantes con el mismo nombre.
 *  - Lo anterior no aplica de acuerdo al Ambito
 * 
*/
