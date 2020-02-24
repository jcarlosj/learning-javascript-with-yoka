/** Scope */
/** Funciona pero preferiblemente evitarla */
petName = 'Nutella';
petName = 'Rex';
console.log( petName );

// CORRECTO
var petName = 'Nutella';
var petName = 'Rex';
console.log( petName );

/** CORRECTA */
let name = 'Juan';
name = 'Yoka';      // El valor no se puede declarar dos o mas veces
console.log( name );

/** INCORRECTA */
let name = 'Juan';
let name = 'Yoka';      // El valor no se puede declarar dos o mas veces
console.log( name );

/** Constantes: Valores que no cambian */
const PI = 3.1415;      // CORRECTA

// INCORRECTO
const PI;      
PI = 3.1415;
