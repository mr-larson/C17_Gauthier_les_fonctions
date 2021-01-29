//les fonctions
//----------------------------------
// présentation
/* 
let direBonjour = (prenom, nom) => {
    console.log(`Bonjour ${prenom} ${nom}!`);
  };
  direBonjour("Nathan", "Van Dyck");
 */  
//-----------------------------------
//01
/* 
let addition = ( a , b ) =>{
    return a + b 
} 
let resultat = parseInt (addition ("5" , "2"))
console.log(resultat)
 */
//-----------------------------------
//02
/* 
let soust = ( a , b ) =>{
    return a - b 
} 
let resultat = soust ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//03
/* 
let mult = ( a , b ) =>{
    return a * b 
} 
let resultat = mult ("5" , "2")
console.log(resultat)
 */
//-------------------------------------
//04
/* 
let divi = ( a , b ) =>{
    return a / b 
} 
let resultat = divi ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//05
/* 
let mod = ( a , b ) =>{
    return a % b 
} 
let resultat = mod ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//06
/* 
let car = ( a ) =>{
    return a * a
} 
let resultat = car ("5")
console.log(resultat)
 */
//------------------------------------
//07
/* 
let expo = ( a , b ) =>{
    return a ** b 
} 
let resultat = expo ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//08
/* 
let capitalize = ( a ) =>{
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() 
} 
console.log (capitalize (prompt (" donne moi un mot ")))
 */
//-------------------------------------
//09
/* 
let calcul = ( nbr1, nbr2, operator ) =>{
    switch (operator){
        case "+" :
            return ( nbr1 + nbr2 ) 
            break
        case "*" :
            return ( nbr1 * nbr2 )   
            break 
        case "-" :
            return ( nbr1 - nbr2 )   
            break 
        case "/" :
            return ( nbr1 / nbr2 )   
            break 
        default :
            return ("valeur erronée") 
            break 
    } 

}
let a = parseInt (prompt ("donne moi un nombre "))
let b = parseInt (prompt ("donne moi un second nombre"))
let c = prompt ("donne moi un operation") 

console.log (calcul(a , b , c))
 */
//------------------------------------------
//exo_middle_fonctions
//01

let reverseNumber = (nombre) =>{
    return ()
}





















//-----------------------------------------
//exo supp

let fonction = ( a, b , c ) => {
    return (`Voici la ${a}, ${b} coller en dessous de ${c}. Mais oui c'est clair`)
} 
let motA = prompt ("donne un mot")
let motB = prompt ("donne un mot")
let motC = prompt ("donne un mot")

let resultat = fonction (a,b,c)
alert (resultat)
